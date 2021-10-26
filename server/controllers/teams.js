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
        res.status(500).send(err.message)
      } else {
        res.status(200).send(teams)
      }
    })
  },

  getFollowedTeams: (req, res) => {
    models.teams.followedTeams(req, (err, teams) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.status(200).send(teams)
      }
    })
  }

}