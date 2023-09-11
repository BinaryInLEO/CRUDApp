//npm install express, npm install nodemon,
//npm install cors, npm install knex, npm install pg
//docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 \-v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
//docker ps -a
//docker exec -it <PSQL-Container-ID> bash
//psql -U postgres
//CREATE DATABASE inventory



const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
app.use(cors());
app.use(express.json());

app.get('/users', (req, res) => {
  knex('users')
    .select('*')
    .then((user) => {res.send(user)});
})

app.get('/users/:id', (req, res) => {
  knex('users')
    .select('*')
    .where({ id: req.params.id })
    .then((user) => {res.send(user)});
})

app.post('/users', (req, res) => {
  knex("users")
  .insert(req.body)
  .then((newUser) => {
    res.send(
      req.body.FirstName,
      req.body.LastName,
      req.body.Username,
      req.body.Password,
      `post was successful`
    );
      console.log('post was successful')
  })
})

app.patch('/users/:id', (req, res) => {
  knex('users')
    .where({ id: req.params.id })
    .update({
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Username: req.body.Username,
      Password: req.body.Password,
    })
    .then((updateRows) => res.status(200).send('user updated'))
})

app.delete('/users/:id', (req, res) => {
  knex('users')
    .where({ id: req.params.id })
    .del()
    .then(res.status(200).send('user deleted'))
})

app.get('/items', (req, res) => {
  knex('items')
    .select('*')
    .then((item) => {res.send(item)});
})

app.get('/items/:id', (req, res) => {
  knex('items')
    .select('*')
    .where({ id: req.params.id })
    .then((item) => {res.send(item)});
})

// app.post('/items', (req, res) => {
//   knex("items")
//   .insert(req.body)
//   .then((newItem) => {
//     res.send(
//       req.body.UserID,
//       req.body.ItemName,
//       req.body.Description,
//       req.body.Quantity,
//     );
//       console.log('post was successful')
//   })
// }) // does not work, foreign id causing issues, skipped for MVP

app.patch('/items/:id', (req, res) => {
  knex('items')
    .where({ id: req.params.id })
    .update({
      UserID: req.body.UserID,
      ItemName: req.body.ItemName,
      Description: req.body.Description,
      Quantity: req.body.Quantity,
    })
    .then((updateRows) => res.status(200).send('item updated'))
})

app.delete('/items/:id', (req, res) => {
  knex('items')
    .where({ id: req.params.id })
    .del()
    .then(res.status(200).send('item deleted'))
})

app.listen(port, () => console.log(`Express server listening in on port ${port}`))

