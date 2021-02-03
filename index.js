const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Hello, Nodejs'));
// http://127.0.0.1:3000/welcome?name=edowon
app.get('/service', (req, res) => {
    var user_input = req.params('status=on');
    res.send('The system is running. [' + user_input + ']');
});

app.listen(port, () => console.log('Example app listening on port 3000'))