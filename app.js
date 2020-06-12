const express = require('express');

const app = express();

app.use('/user',(req, res, next) => {
    console.log('in the 1st middleware'); //Required to console as a part of the assignment 
    res.send('<h1>Hello User!!</h1>');
});

app.use('/',(req, res, next) => {
    console.log('in the 2nd middleware'); //Required to console as a part of the assignment 
    res.send('<h1>Hello Assignment-2!!</h1>');
});

app.listen(3001);