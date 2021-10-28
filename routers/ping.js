var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {

  const stamp = new Date();
  res.send({msg:'Hello  World',stamp})
})

module.exports = router 