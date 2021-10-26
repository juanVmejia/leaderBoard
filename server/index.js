const express = require('express');
const app = express();
const router = require('./routes.js');
const PORT = process.env.PORT || 3000;
const key = require('../config.js')
const axios = require('axios');
const db = require('./db')
app.use(express.static('client/dist'));

app.use(express.json())
  app.use((req, res, next) => {
  console.log('----Incoming Request----')
  console.log(req.method)
  console.log(req.url)
  next()
})

app.get('/teams/info', (req, res) => {
  var options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
    params: {league: '39', season: '2020', team: req.query.team},
    headers: {
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': key.TOKEN
    }
  };
  axios.request(options).then(function (response) {
    console.log(response.data);
    res.status(200).send(response.data)
  }).catch(function (error) {
    res.status(500).send(err)
  });
})

app.get('/teams', (req, res) => {
  var options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
    params: {season: '2020', league: '39'},
    headers: {
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': key.TOKEN
    }
  };

  axios.request(options)
  .then(function (response) {
    res.status(200).send(response.data.response[0].league.standings)
  })
  .catch(function (err) {
    res.status(404).send(err)
  });
})

app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})