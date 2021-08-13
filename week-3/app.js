const express = require('express');
const app = express();

// assignment 3: connect to backend API by AJAX
app.use(express.static('public'));

// assignment 1: your first web server
app.get('/', (req, res) => {
    res.send('<h1>Welcome to localhost:3000</h1>');
});

// assignment 2: build backend API for front-end
app.get('/getData/', (req, res) => {
    let result;
    if (!req.query.number) {
        result = "<h1>Lack of Parameter</h1>";
    } else {
        if (isNaN(req.query.number)) {
            result = "<h1>Wrong Parameter</h1>";
        } else {
            result = ((1 + Number(req.query.number)) * Number(req.query.number)) / 2;
        }
    }
    res.send(`${result}`);
});

app.listen(3000);