var fs = require('fs');
const csv = require('csvtojson')

const Team = './data-set-conversion/csv/Team.csv'
const Ball_by_Ball = './data-set-conversion/csv/Ball_by_Ball.csv'
const Match = './data-set-conversion/csv/Match.csv'
const Player_Match = './data-set-conversion/csv/Player_Match.csv'
const Season = './data-set-conversion/csv/Season.csv'

csv()
    .fromFile(Team)
    .on("end_parsed", function (jsonArrayObj) { //when parse finished, result will be emitted here.
        console.log(jsonArrayObj);

        fs.writeFileSync("./data-set-conversion/json/Team.json", JSON.stringify(jsonArrayObj), 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    })


var csvConverter = new csv({ constructResult: false, toArrayString: true }); // The constructResult parameter=false will turn off final result construction in memory for stream feature. toArrayString will stream out a normal JSON array object.
var readStream = require("fs").createReadStream(Ball_by_Ball);
var writeStream = require("fs").createWriteStream("data-set-conversion/json/Ball_by_Ball.json");
readStream.pipe(csvConverter).pipe(writeStream);


csv()
    .fromFile(Match)
    .on("end_parsed", function (jsonArrayObj) { //when parse finished, result will be emitted here.
        console.log(jsonArrayObj);

        fs.writeFileSync("./data-set-conversion/json/Match.json", JSON.stringify(jsonArrayObj), 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    })

csv()
    .fromFile(Player_Match)
    .on("end_parsed", function (jsonArrayObj) { //when parse finished, result will be emitted here.
        console.log(jsonArrayObj);

        fs.writeFileSync("./data-set-conversion/json/Player_Match.json", JSON.stringify(jsonArrayObj), 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    })

csv()
    .fromFile(Season)
    .on("end_parsed", function (jsonArrayObj) { //when parse finished, result will be emitted here.
        console.log(jsonArrayObj);

        fs.writeFileSync("./data-set-conversion/json/Season.json", JSON.stringify(jsonArrayObj), 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    })