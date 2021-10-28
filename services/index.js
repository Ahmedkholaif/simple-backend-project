const axios = require('axios');


const getPeople =async()=>{
  let responses = [];
  let url  = 'http://swapi.dev/api/people'
  do {
    const peopleResponse = await axios.get(url);

    responses = [...responses,peopleResponse];
    url = peopleResponse.data.next;
  } while (url);
  const result = responses.reduce((agg,res)=>{
    agg.data.results = [...agg.data.results,...res.data.results]
    return agg;
  },{data:{results:[]}})
  return result;
}

module.exports ={
  getPeople,
}