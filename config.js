var http = require('http');
var express = require('express');

const { Pool, Client } = require('pg')
const connectionString = "postgres://postgres:postgres@localhost:5432/demo";

const pool = new Pool({
    connectionString: connectionString,
})
pool.connect(function(err){
    if(!err) {
       
        console.log("Database is connected");
    } else {
        console.log("Error while connecting with database");
    }
    });

    var app = express();
    module.exports = () => { return pool; }