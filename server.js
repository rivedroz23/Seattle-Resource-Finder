require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const expressJWT =require('express-jwt');
const helmet = require('helmet')
const RateLimit = require('express-rate-limit')
const app = express();
const axios = require('axios')
const shelter = require('./models/shelter')
const meal = require('./models/meal')

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

app.get('/shelters', (req,res) => {
    Shelter.find({}, function(err,shelter){
        if (err) res.json(err)
        res.json(shelters)
    })
    
  })


  app.post('/shelters', (req,res) => {
    shelter.create({
      name: req.body.name,
      address: req.body.address,
      hours: req.body.hours
  }, function(err, shelters) {
        res.json(shelters)
  })
  })

  app.post('/users/:id/shelters', (req, res) => {
    User.findById(req.params.id, function (err, user) {
        // console.log("We got the user")
        shelter.create({
            name: req.body.name,
            address: req.body.address,
            hours: req.body.hours
        }, function (err, shelter) {
            user.shelter.push(shelter)
            user.save(function (err, user) {
                if (err) console.log(err)
                res.json(user)
            })
        })
    })
})


  app.put("/shelters/:id", (req,res) => {
    shelter.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        address: req.body.address,
        hours: req.body.hours
    }, {
        new: true
    }, (err, shelters) =>  {
        res.json(shelters);
    });
  });

  app.delete("/shelters/:id", (req,res) => {
    shelter.findByIdAndRemove(req.params.id, (err, shelter) => {
        // As always, handle any potential errors:
        if (err) return res.status(500).send(err);
        // We'll create a simple object to send back with a message and the id of the document that was removed
        // You can really do this however you want, though.
        const response = {
            message: "Shelter successfully deleted",
            id: shelter._id
        };
        return res.status(200).send(response);
    });
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