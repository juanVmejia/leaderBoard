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
    const {id, name, logo} = data.team;
    const {form} = data;
    console.log('id:', id, name, logo, form)
    db.query(`INSERT INTO teams (name, logo, follow, team_id, form) VALUES ('${name}', '${logo}', 1, ${id}, '${form}')`, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null, 'Team inserted into DB');
      }
    })
  },

  followedTeams: (data, callback) => {
    db.query('SELECT team_id FROM teams', (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res)
      }
    })
  }

}