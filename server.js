const path = require('path');
const express = require('express');
const serverStatic = require('serve-static');

const app = express();

app.use('/',serverStatic(path.join(__dirname, '/dist')));

const port = process.env.PORT || 8091;
app.listen(port);
