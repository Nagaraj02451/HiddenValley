const {newPayment} = require('../../controller/controller/Controller');
const express = require('express');
const router = express();

router.post('/formdata', newPayment);

module.exports = router;