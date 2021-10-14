const db = require('../db');

module.exports = {
  getTeams: (data, callback) => {
    db.query(`SELECT * FROM teams WHERE follow=1`, (err, teams) => {
      if (err) {
        callback(err);
      } else {
        callback(null, teams);
      }
    })
  },

  postTeam: (data, callback) => {
    console.log('hello from postTeam', data)
    db.query(`INSERT INTO teams (name, logo, follow, team_id) VALUES ('${data.name}', '${data.logo}', 1, ${data.team_id})`, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null, 'Team inserted into DB');
      }
    })
  }
}