import React from 'react';


const TeamCard = (props) => {
  const {logo, name, id} = props;
  const {form} = props;
  return (
    <>
    <img src={logo} className='feedLogo' height='35px'/>
    <div className='feedTeamName'>{name}</div>
    <div className='FeedRecord'>Record: {form}</div>
    </>
  )
};

export default TeamCard;