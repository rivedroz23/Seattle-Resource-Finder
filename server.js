require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const expressJWT =require('express-jwt');
const helmet = require('helmet')
const RateLimit = require('express-rate-limit')
const app = express();
const axios = require('axios')

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(helmet())

const loginLimiter = new RateLimit({
    windowMs: 5*60*100,
    max: 3,
    delayMs: 0,
    message: "Maximum login attempts exceeded!"
})

const signupLimiter = new RateLimit({
    windowMs: 60*60*1000,
    max: 3,
    delayMs: 0,
    message: "Maximum accounts created please try again later"
})

mongoose.connect('mongodb://localhost/homeless', {useNewUrlParser: true});
const db = mongoose.connection;

db.once('open', () => {
    console.log(`Connected to mongo on ${db.host}: ${db.port}`);
});
db.on('error', (err) => {
    console.log(`Database error: \n ${err}`)
})

app.get('/', (req, res) => {
    res.send('server working');
})

app.get('/meals', (req, res) => {
    let config = {
        headers: {
            "X-App-Token": "XUdLH5yC5LHLJ7qdLtMw62GVe"
        }
    }
    axios.get('https://data.seattle.gov/resource/hmzu-x5ed.json', config).then( (response) => {
    console.log('get data back from api: ', response.data);
    res.json(response.data)
  }).catch(err => {
      console.log(err);
      res.send('err')
  })
})



// app.use('/auth/login', loginLimiter)
// app.use('/auth/signup', signupLimiter)

app.use('/auth', require('./routes/auth'));
app.use('/api', expressJWT({secret: process.env.JWT_SECRET}), require('./routes/api'));



app.listen(process.env.PORT, () => {
    console.log(`Your listening to port ${process.env.PORT}...`)
})  