const express = require('express')
const router = express.Router()

const {getPeople} = require('../services')

router.get('/chars-remote', async function (req, res) {

  try{
    const peopleResponse = await getPeople();
    const names = peopleResponse.data.results.map(person=> person.name)
    res.status(200).send(names);
  }catch(err){
    console.log({err});
    res.status(500).send('smthing wrong')
  }
})

module.exports = router 