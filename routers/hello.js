var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.send('Hello World')
})

router.post('/', function (req, res) {
  res.send({msg:'Hello  World'})
})

module.exports = router 