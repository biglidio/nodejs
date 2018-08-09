var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.get('/curriculo', function(req, res) {
    var dados = {
        firstName: 'Lucas',
        lastName: 'Figueiredo',
        age: '24',
        city: 'Santos',
        state: 'SP',
        country: 'Brazil',
        skills: [
            {
                description: 'HTML 5',
                level: '5'
            },
            {
                description: 'CSS 3',
                level: '5'
            },
            {
                description: 'Javascript',
                level: '3'
            },
            {
                description: 'PHP',
                level: '4'
            }
        ]
    };
  
    res.send(JSON.stringify(dados));
});

app.listen(8000, function() {
    console.log('Servidor rodando na porta 8000.');
});