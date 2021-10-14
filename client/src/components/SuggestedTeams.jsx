import React from 'react';

const SuggestedTeams = (props) => {
  const [suggestedTeams] = props.suggestedTeams;

  return (
    <div className="suggestedTeams">
    {suggestedTeams.map((currentTeam,) => {
      console.log(currentTeam)
      return (
      <div className="suggestedTeamsItem" key={currentTeam.rank}>
        <img src={currentTeam.team.logo} className='suggestedLogo' height='30px'/>
        <div className='suggestedName'>{currentTeam.team.name}</div>
        <button className='suggestedAddTeamButton' onclick={}></button>
      </div>
      )
    })}
</div>
  )
}

export default SuggestedTeams;