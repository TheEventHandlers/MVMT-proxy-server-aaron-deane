const express = require('express');
const proxy = require('http-proxy-middleware');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use('/watches/:wid', express.static(path.join(__dirname, 'public')));
app.use('/api/watches/:wid/photos', proxy({ target: 'http://127.0.0.1:3001', changeOrigin: true }));

app.listen(PORT, () => console.log(`Express Proxy listening on port ${PORT}`));