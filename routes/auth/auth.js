const express  =  require('express')
const Router = express.Router()
const connection = require('../../helpers/db.js')

Router.get('/', (req, res) =>{
  res.send('I am in auth')
})

// ADD USER
const insertUserQuery = `
  INSERT INTO users (email, password, firstName, lastName, birthDate, gender)
  VALUES (?, ?, ?, ?, ?, ?)`

Router.post('/signup', function(req, res, next) {
  const email = req.body.email
  const password = req.body.password
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const birthDate = req.body.birthDate
  const gender = req.body.gender
  const values = [email, password, firstName, lastName, birthDate, gender]
  connection.query(insertUserQuery, values)
    .then(result => {
      res.status(200).json({ flash:  "User has been signed up !" });
    })
    .catch(err => {
      res.status(500).json({ flash:  err.message })
    })
})

// UPDATE USER
const updateUser = `UPDATE users SET email = ?, password = ?, firstName = ?, lastName = ?, birthDate = ?, gender = ? WHERE id = ?`

Router.put('/updateUser/:id', (req, res, next) =>{
  console.log(req.body)
  const id = Number(req.params.id)
  const email = req.body.email
  const password = req.body.password
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const birthDate = req.body.birthDate
  const gender = req.body.gender
  const values = [email, password, firstName, lastName, birthDate, gender, id]
  connection.queryOne(updateUser, values)
  .then(result => {
      res.status(200).json({ flash:  "User has been update !" });
    })
  .catch(err => {
    res.status(500).json({ flash:  err.message })
  })
})


// SELECT ONE USER BYG ID
const selectOneUsersQuery = `SELECT * FROM users WHERE id = ?`

Router.get('/show/:id', (req, res) => {
  console.log(req.params.id)
  const id = Number(req.params.id)
  connection.queryOne(selectOneUsersQuery, [id])
  .then(result => {
    res.status(200).send(result)
  })
  .catch(err => {
    res.status(500).json({ flash:  err.message })
  })
})


// SELECT ALL USERS
const selectAllUsersQuery = `SELECT * FROM users`

Router.get('/show', (req, res) => {
  connection.query(selectAllUsersQuery)
  .then(result => {
      res.status(200).send(result)
  })
  .catch(err => {
      res.status(500).json({ flash:  err.message });
      console.log(err)
    })  //   console.log(result)
  //   res.status(200)
  // })
  // .then(console.log, console.err)
})

module.exports = Router