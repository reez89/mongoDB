
require('dotenv').config()
const express = require('express');
const home = require('./routes/home');
const user = require('./routes/user');
const blog = require('./routes/blog');
const _404 = require('./routes/404');
const appError = require('./middleware/error');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use('/blog', blog);
app.use('/user', user);
app.use(home);
app.use(_404);
app.use(appError);

app.listen(3000);