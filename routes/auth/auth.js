const express  =  require('express')
const Router = express.Router()
// const connection = require('../../helpers/db.js')


const insertUserQuery = `
  INSERT INTO users (email, password, firstName, lastName, birthDate, gender)
  VALUES (?, ?, ?, ?, ?, ?)`

Router.post('/signup', function(req, res, next) {
  // res.send('I am in POST signup');
  const email = req.body.email
  const password = req.body.password
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const birthDate = req.body.birthDate
  const gender = req.body.gender
  const values = [email, password, firstName, lastName, birthDate, gender]

  connection.query(insertUserQuery, values)
    .then(result => {
      // console.log(result)
      res.status(200).json({ flash:  "User has been signed up !" });
    })
    .catch(err => {
      res.status(500).json({ flash:  err.message });
      // console.log(err)
    })
})



const selectUsersQuery = `SELECT * FROM users`

Router.get('/show/:id', (req, res) => {
  connection.query(selectUsersQuery)
  .then(result => {
      const id = Number(req.params.id)

  const user = result.find(user => user.id === id)
  res.json(user)
})  //   console.log(result)
  //   res.status(200)
  // })
  // .then(console.log, console.err)
})

module.exports = Router