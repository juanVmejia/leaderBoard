const express = require('express');

const router = express.Router();
const controllers = require('./controllers');

router.get('/teams', controllers.teams.get)

router.post('/favorites', controllers.teams.post)

module.exports =router