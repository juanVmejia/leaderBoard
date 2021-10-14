const models = require('../models');

module.exports = {
  get: (req, res) => {
    models.teams.getTeams(req, (err, teams) => {
      if (err) {
        res.status(500).send('Error getting teams')
      } else {
        console.log('Teams was hit', teams)
        res.status(200).send(teams)
      }
    })
  },

  post: (req, res) => {
    models.teams.postTeam(req.body, (err, teams) => {
      if (err) {
        console.log('QUERY FAIL', req.query)
        res.status(500).send(err.message)
      } else {
        console.log('QUERY PASS', req.query)
        res.status(200).send(teams)
      }
    })
  }
}