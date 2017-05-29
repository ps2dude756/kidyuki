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
app.get(new RegExp(routes.join('|')), function(request, response) {
    response.sendFile(__dirname + '/build/statics/index.html');
});

app.listen(app.get('port'));
