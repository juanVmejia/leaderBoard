CREATE DATABASE leaderBoardTracker;

use leaderBoardTracker;

CREATE TABLE teams (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  logo TEXT NOT NULL,
  follow BOOLEAN DEFAULT FALSE,
  team_id INT NOT NULL,
  PRIMARY KEY (id)
)

 INSERT INTO teams (name, logo) VALUES ('Real Madrid', 'https://source.unsplash.com/user/c_v_r/100x100')
  INSERT INTO teams (name, logo) VALUES ('Man City', 'https://source.unsplash.com/user/c_v_r/100x100')