const express = require('express');
const proxy = require('http-proxy-middleware');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Express Proxy listening on port ${PORT}`));