var express = require('express');
var db = require('./config.js');
var app = express();
var request = require('request');

const pool = app.get('pool');
console.log('call');

const getUsers = (request, response) => {
    db().query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      console.log(results.rows);
      response.status(200).json(results.rows)
    })
 }

  module.exports = () => { return getUsers; }

