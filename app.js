var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/build/statics'));

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

app.listen(app.get('port'));
