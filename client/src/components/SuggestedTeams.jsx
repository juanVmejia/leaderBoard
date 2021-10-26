import React from 'react';

const SuggestedTeams = (props) => {
  const [suggestedTeams] = props.suggestedTeams;
  const {addToMyFeed, followedTeams} = props;
  const handleClick = (team) => {
    addToMyFeed(team)
  }

  const filter = () => {
    let results = [];
    for (let i = 0; i < followedTeams.length; i++) {
      results.push(followedTeams[i].team_id)
    }
    return results;
  }

  return (
    <div className="suggestedTeams">
    {suggestedTeams.map((currentTeam) => {
      return (
      <div className="suggestedTeamsItem" key={currentTeam.rank}>
        <img src={currentTeam.team.logo} className='suggestedLogo' height='30px'/>
        <div className='suggestedName'>{currentTeam.team.name}</div>
        {filter().includes(currentTeam.team.id) ? <div>Team followed</div> : <button className='suggestedAddTeamButton' onClick={() => handleClick(currentTeam)}></button>}
      </div>
      )
    })}
</div>
  )
}

export default SuggestedTeams;