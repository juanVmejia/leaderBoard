import React from 'react';
import { useState, useEffect} from 'react';
import { Row, Col, Grid, Container } from 'react-bootstrap';
import $ from 'jquery';
import SuggestedTeams from './SuggestedTeams.jsx';
import Feed from './Feed.jsx';
const axios = require('axios')
const key = require('../../../config.js')

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      suggestedTeams: [],
      feedTeams: [],
      followedTeams: [],
      selectedTeam: {},
      selectedStatus: false
    }
    this.getSuggestedTeams = this.getSuggestedTeams.bind(this)
    this.addToMyFeed = this.addToMyFeed.bind(this)
    this.saveFavoriteTeams = this.saveFavoriteTeams.bind(this)
    this.getSavedTeams = this.getSavedTeams.bind(this)
    this.getFollowedTeams = this.getFollowedTeams.bind(this)
    this.getMoreDetails = this.getMoreDetails.bind(this)
  }

  getFollowedTeams () {
    axios.get('/api/followed')
    .then((response) => {
      this.setState({
        followedTeams: response.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

   getSuggestedTeams () {
    axios.get('/teams')
    .then((response) => {
      this.setState({
        suggestedTeams: response.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  getSavedTeams () {
    axios.get('/api/teams')
    .then((response) => {
      this.setState({
        feedTeams: response.data
      })
    })
    .catch((err) => {
      console.log('front end:', err)
    })
  }

  saveFavoriteTeams (team) {
    axios.post('/api/favorites', team)
    .then(() => {
      console.log('teams saved')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  getMoreDetails (team) {
    axios.get(`/teams/info?team${team.id}`)
    .then((response) => {
      this.setState({
        selectedStatus: true,
        selectedTeam: response.data
      })
    })
    .catch((err) => {
      console.log(err)
    })

  }

   addToMyFeed (team) {
    let copy = this.state.feedTeams;
    copy.push(team);
    this.saveFavoriteTeams(team)
    this.getSavedTeams()
    this.getFollowedTeams()
   }

  componentDidMount() {
    this.getFollowedTeams()
    this.getSuggestedTeams()
    this.getSavedTeams()
  }

  render() {
    return (
      <>
      <h1>Leaderboard Tracker</h1>
      <div className="feed">
      {this.state.feedTeams.length ? <Feed feedTeams={this.state.feedTeams} getMoreDetails={this.state.getMoreDetails}/>: <div>Chose some teams to follow</div>}
      </div>
      <div>
        {this.state.suggestedTeams.length ? <SuggestedTeams suggestedTeams={this.state.suggestedTeams} addToMyFeed={this.addToMyFeed} followedTeams={this.state.followedTeams}/> : <></>}
        </div>
      </>
      )
  }

}

export default App;