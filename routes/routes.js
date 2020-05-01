

var linkcontroller=require('./.././server/src/linkcontroller');
//var addstudentcontroller=require('./.././server/src/addstudentcontroller');

var express = require('express');
var router = express.Router();

router.get('/users',linkcontroller.linkmethod);
//router.post('/student',addstudentcontroller.studentmethod);

module.exports = router;