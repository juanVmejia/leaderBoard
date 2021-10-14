import React from 'react';
import { useState, useEffect} from 'react';
import { Row, Col, Grid, Container } from 'react-bootstrap';
import $ from 'jquery';
import Feed from './Feed.jsx';
import SuggestedTeams from './SuggestedTeams.jsx';
const axios = require('axios')
const key = require('../../../config.js')
const App = () => {

  const [suggestedTeams, setSuggestedTeams] = useState([])
  const [feedTeams, setFeedTeams] = useState([])

  const getSuggestedTeams = () => {
    var options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
    params: {season: '2020', league: '39'},
    headers: key.TOKEN
  };

  axios.request(options).then(function (response) {
  setSuggestedTeams(response.data.response[0].league.standings)
  }).catch(function (error) {
    console.error(error);
  });
  }

  const getFeedTeams = (info) => {
    var options = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
      params: {league: '39', season: '2020', team: info.id},
      headers: key.TOKEN
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  useEffect(() => {
    getSuggestedTeams()
  }, [feedTeams])

  useEffect(() => {
    getFeedTeams()
  }, [feedTeams])

  const changeToCheck = () => {

  }
  const addToMyFeed = (team) => {
    let teamInfo = {
      league: team.league,
      season: team.season,
      team: team.team,
    }
    //  make an API call with the teams Id, League Id, and seasson
    // recive the data
    // make a copy of the feed array
    // push the team to the array
    // set the state feed to the new array
  }

    return (
      <>
      <h1>Leaderboard Tracker</h1>
        <Feed />
        {suggestedTeams.length ? <SuggestedTeams suggestedTeams={suggestedTeams}/> : <></>}

      </>
      )

}

export default App;