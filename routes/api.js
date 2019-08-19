const express = require('express')
const router = express.Router();
const axios = require('axios');


router.get('/', (req, res) => {
    res.json({type: 'success', message: 'you accessed the protected api routes'});
});



module.exports = router