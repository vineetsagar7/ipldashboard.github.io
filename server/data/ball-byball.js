
// var Team = require('../data-set-conversion/json/Ball_by_Ball.json')
// var _ = require('lodash');


// //let totalTeams = Team.map((team) => team.Team_Name)


// let totalTeams = _.uniqBy(Team, "Match_Id");
// /**
//  * Total Matched played till date
//  */
// let totalTeamPlayedTillNow = totalTeams.length;

// //not correct function. check it again.
// let runScoredByBatsman = _.groupBy(Team, "Striker_Id");
// let cmppedBatsmanscored = Object.keys(runScoredByBatsman).map((bat) => {
//     let runs = 0;
//     Object.keys(runScoredByBatsman[bat]).forEach(element => {
//         runs = runs + element.Batsman_Scored;
//     });
//     return runs;
// })

// console.log(cmppedBatsmanscored);



