const axios = require('axios');


const getPeople =async()=>{
  return axios.get('http://swapi.dev/api/people');
}

module.exports ={
  getPeople,
}