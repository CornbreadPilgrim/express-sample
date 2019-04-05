const express = require('express');
const app = express();
const port = 9001; // Its over 9000

app.get('/', (req, res) => {
    return res.send('Hello World!');
});
app.get('/home', (req, res) => {
    return res.send('You are Home!');
});
app.get('/user/:username', (req, res) => {
    return res.send(`You are ${req.param('username')}!`); // or param.username, current form deprecated
});

app.listen(port, () => console.log(`Sample App ${port}!`));
