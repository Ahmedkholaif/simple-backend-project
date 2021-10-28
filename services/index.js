const axios = require('axios');


const getPeople =async()=>{
  let results = [];
  let url  = 'http://swapi.dev/api/people'
  do {
    const peopleResponse = await axios.get(url);

    results = [...results,...peopleResponse.data.results];
    url = peopleResponse.data.next;
  } while (url);
  return results;
}

module.exports ={
  getPeople,
}