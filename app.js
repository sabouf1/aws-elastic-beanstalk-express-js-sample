const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('<p>This is Inass Talking to me but I don t understand what she is talking about!</p>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
