function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

let gameStats = gameObject();
//console.log(gameStats);

//let typesOfTeam = Object.keys(gameStats);
//console.log(typesOfTeam);

//let homeRoster = Object.keys(gameStats.home.players);
//console.log(homeRoster);

let statsByHomePlayers = Object.values(gameStats.home.players);
let statsByAwayPlayers = Object.values(gameStats.away.players);
//console.log(statsByHomePlayers);

//let homePlayer1Stats = statsByHomePlayers[0];
//console.log(homePlayer1Stats)

//let homePlayer1Points = statsByHomePlayers[0].points;
//console.log(homePlayer1Points);

let homePoints = [];
let awayPoints = [];
let homeShoeSize = [];
let awayShoeSize = [];

let i = 0;
while (i < Object.keys(gameStats.home.players).length) {
    let temp = statsByHomePlayers[i].points;
    homePoints.push(temp);
    i++;
}

let z = 0;
while (z < Object.keys(gameStats.away.players).length) {
    let temp = statsByAwayPlayers[z].points;
    awayPoints.push(temp);
    z++;
}

let a = 0;
while (a < Object.keys(gameStats.home.players).length) {
    let temp = statsByHomePlayers[a].shoe;
    homeShoeSize.push(temp);
    a++;
}

let b = 0;
while (b < Object.keys(gameStats.away.players).length) {
    let temp = statsByAwayPlayers[b].shoe;
    awayShoeSize.push(temp);
    b++;
}

let arrayOfPlayers = [];
arrayOfPlayers.push(...Object.keys(gameStats.home.players));
arrayOfPlayers.push(...Object.keys(gameStats.away.players));

let arrayOfPoints = [];
arrayOfPoints.push(...homePoints);
arrayOfPoints.push(...awayPoints);

let arrayOfShoeSize = [];
arrayOfShoeSize.push(...homeShoeSize);
arrayOfShoeSize.push(...awayShoeSize);

const playerPoints = {};
arrayOfPlayers.forEach((player, index) => {
    playerPoints[player] = arrayOfPoints[index];
});

const playerShoeSize = {};
arrayOfPlayers.forEach((player, index) => {
    playerShoeSize[player] = arrayOfShoeSize[index];
});

const homeTeamsColors = {};
const homeTeamColorArray = Object.values(gameStats.home.colors);
const propertyNameHome = Object.values(gameStats.home.teamName).join('');
homeTeamsColors[propertyNameHome] = homeTeamColorArray;

const awayTeamsColors = {};
const awayTeamColorArray = Object.values(gameStats.away.colors);
const propertyNameAway = Object.values(gameStats.away.teamName).join('');
awayTeamsColors[propertyNameAway] = awayTeamColorArray;

const teamColorsObject = Object.assign({}, homeTeamsColors, awayTeamsColors);

function numPointsScored(playerName) {
    const playerPoint = (playerPoints[playerName]);
    return playerPoint;
}

function shoeSize(playerName) {
    const playerShoe = (playerShoeSize[playerName]);
    return playerShoe;
}

function teamColors(teamName) {
    const colorsOfTeam = (teamColorsObject[teamName]);
    return colorsOfTeam;
}

function teamNames() {
    return Object.keys(teamColorsObject);
}