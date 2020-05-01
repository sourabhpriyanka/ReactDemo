var express = require('express');
var router = express.Router();

var linkcontroller=require('./.././server/src/linkcontroller');
router.get('/users',linkcontroller.linkmethod);


module.exports = router;