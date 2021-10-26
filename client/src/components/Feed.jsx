import React from 'react';
import TeamCard from './TeamCard.jsx'
const Feed = (props) => {
  const {feedTeams, getMoreDetails} = props;

  const showMoreDetails = () => {
    getMoreDetails()
  }

  return (
    <div className="feed">
    {feedTeams.map((currentTeam) => {
      const {logo, name, id} = currentTeam;
      const {form} = currentTeam;
      return (
        <div key={id} className="suggestedTeamsItem">
          <TeamCard logo={logo} name={name} form={form} />
        </div>
      )
    })}
    </div>
  )
}

export default Feed;