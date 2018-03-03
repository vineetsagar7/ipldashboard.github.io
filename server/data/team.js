
var Team = require('../data-set-conversion/json/Team.json')
var _ = require('lodash');



//let totalTeams = Team.map((team) => team.Team_Name)


let totalTeams = _.uniqBy(Team, Team.Match_Id);

console.log(totalTeams)

