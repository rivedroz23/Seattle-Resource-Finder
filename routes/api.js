const express = require('express')
const router = express.Router();
const axios = require('axios');


router.get('/', (req, res) => {
    res.json({type: 'success', message: 'you accessed the protected api routes'});
});

router.get('/test', (req, res) => {
    let config = {
        headers: {
            "X-App-Token": "XUdLH5yC5LHLJ7qdLtMw62GVe"
        }
    }
    axios.get('https://data.seattle.gov/resource/hmzu-x5ed.json').then( (response) => {
    (response.data);
  })
})

module.exports = router