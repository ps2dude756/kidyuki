var express = require('express');
var Client = require('pg').Client;

var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/build/statics'));

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    // Set this to false for local development
    ssl: true
});
client.connect();

const routes = [
    '/',
    '/tours',
    '/about/kid_yuki',
    '/about/amaya',
    '/about/david',
    '/about/kyle',
    '/about/andre',
    '/about/deja'
];
app.get(new RegExp('^' + routes.join('$|^') + '$'), function(request, response) {
    response.sendFile(__dirname + '/build/statics/index.html');
});

app.get(new RegExp('^/request$|^/requests$'), function(request, response) {
    response.redirect('https://docs.google.com/spreadsheets/d/1AL56TrMR43UKL50SHjPk02B-OHVGnGDZ18_24XNSymo/htmlview#gid=0');
});

app.get(new RegExp('^/live$|^/livestream$'), function(request, response) {
    response.redirect('https://www.youtube.com/c/kidyuki1/live');
});

app.get(new RegExp('^/api/get_shows$'), function(request, response) {
    client.query('SELECT * FROM electric_shows ORDER BY start_timestamp DESC', function(err, res) {
        if (err) {
            throw err;
        }

        var electric_shows = [];
        for (var i = 0; i < res.rows.length; ++i) {
            electric_shows.push({
                'start_timestamp': res.rows[i]['start_timestamp'],
                'end_timestamp': res.rows[i]['end_timestamp'],
                'convention': res.rows[i]['convention']
            });
        }

        client.query('SELECT * FROM acoustic_shows ORDER BY start_timestamp DESC', function(err2, res2) {
            if (err) {
                throw err;
            }

            var acoustic_shows = [];
            for (var i = 0; i < res2.rows.length; ++i) {
                acoustic_shows.push({
                    'start_timestamp': res2.rows[i]['start_timestamp'],
                    'end_timestamp': res2.rows[i]['end_timestamp'],
                    'convention': res2.rows[i]['convention']
                });
            }

            response.setHeader('Content-Type', 'application/json');
            response.send(JSON.stringify({
                acoustic_shows: acoustic_shows,
                electric_shows: electric_shows
            }));
        });
    });
});

app.listen(app.get('port'));
