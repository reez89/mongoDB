const express = require('express');
const morgan = require('morgan');
const app = express();
/* require('dotenv').config({
    path: `.env.${ app.get('env') }`
}) */

require('dotenv').config()

if(app.get('env') === 'development' ){
    app.use(morgan('tiny'))
}

app.get('/', (req, res) =>{
    res.send('Home Page\n')
})

/* const db = require('db')

db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
}) */

console.log(process.env.DB_CONN_STRING);
console.log(process.env.APP_PWD);
app.listen(3000);