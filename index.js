const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//const db = require('./test');
const port = 3000;
var router = express.Router();
var db = require('./config.js');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
});

/*****************user slect by id query**********/
app.get('/users/:id', (request, response) => {
  const id = parseInt(request.params.id)
  console.log(id);
  db().query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    console.log(results.rows);
    response.status(200).json(results.rows)
  });
});
/*****************user insert  query**********/
app.post ('/createusers', (request, response) => {
  //const first_name = 'Arshika';
 // const last_name='Jain';
 // const phone=45632556;

  const {name, first_name, last_name,phone} = request.body
  
  db().query('INSERT INTO users (name,first_name, last_name,phone) VALUES ($1, $2,$3,$4)', [name,first_name, last_name,phone],(error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(results.insertId)
  })
});


//router.get('/users', db.getUsers);
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), function () {
  console.log('Server is running.. on Port 4000');
});

//module.exports = router;