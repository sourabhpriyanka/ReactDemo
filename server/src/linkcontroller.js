var express = require('express');
var db = require('../../config.js');
var app = express();
var request = require('request');

const pool = app.get('pool');
    
exports.linkcontroller=function(req,res)
{
  console.log("inserted..........");

   db().query("select * from users;",function (error, results, fields) {
     console.log("inserted.........."+JSON.stringify(results.rows));
             if (error) 
             {
              console.log(error);
              res.json({
              status:false,
              message:'PLEASE ENTER VALID PARTY ID'
                       })
             }else if(results.rows != 0){
              res.json({
                data:results.rows,
                rowCount12:results.rowCount
              })
             }else{
            
                res.json({
                  status:false,
                  message:"there is no organization for this partyid"
                })
             }
     }); 
 
  }; 
  