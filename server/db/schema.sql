DROP DATABASE IF EXISTS leaderBoardTracker;

CREATE DATABASE leaderBoardTracker;

use leaderBoardTracker;

CREATE TABLE teams (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  logo TEXT NOT NULL,
  follow BOOLEAN DEFAULT FALSE,
  team_id INT NOT NULL,
  form VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
)

-- mysql -u root -p < server/db/schema.sql