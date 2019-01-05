const express = require('express');
const proxy = require('http-proxy-middleware');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(compression());
app.use('/watches/:wid', express.static(path.join(__dirname, 'public')));

app.use('/api/watches/:wid/photos', proxy({ target: 'http://54.211.73.211', changeOrigin: true }));
app.use('/api/watches/:wid/summary', proxy({ target: 'http://54.87.165.253', changeOrigin: true }));
app.use('/api/watches/:wid/details', proxy({ target: 'http://13.57.38.154', changeOrigin: true }));
app.use('/api/watches/:wid/reviews', proxy({ target: 'http://18.218.241.2', changeOrigin: true }));


app.listen(PORT, () => console.log(`Express Proxy listening on port ${PORT}`));