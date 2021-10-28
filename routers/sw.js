const express = require('express');
const _ = require('lodash');
const router = express.Router();

const {getPeople,getStarShips} = require('../services')

router.get('/chars-remote', async function (req, res) {

  try{
    const peopleResponse = await getPeople();
    const names = peopleResponse.map(person=> person.name)
    res.status(200).send(names);
  }catch(err){
    console.log({err});
    res.status(500).send('smthing wrong')
  }
})

router.get('/starships-best', async function (req, res) {

  const highestpilots= [];
  
  try{
    const starshipResponse = await getStarShips();
    // const sortedShips = starshipResponse.sort((a,b)=> b.pilots.length - a.pilots.length)
    // const higestNumber = sortedShips[0].pilots.length;

    // const names = sortedShips.filter(pilot => pilot.pilots.length === higestNumber ).map(pilot=> pilot.name)

    const max = _.maxBy(starshipResponse,function(p) { return p.pilots.length; }).pilots.length;
    const names = starshipResponse.reduce((agg,pilot) => pilot.pilots.length === max ?  [...agg,pilot.name]:agg ,[]);

    res.status(200).send(names);
  }catch(err){
    console.log({err});
    res.status(500).send('smthing wrong')
  }
})

module.exports = router 