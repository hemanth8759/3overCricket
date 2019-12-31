////////////////TEAM 1//////////////////////

var t1count = 0;
var t1outcount = 0;
var t1ar = [];
let sc;

var i = 0;
var arr = 0;
var t1ballcount = 18;
var aew = 0;
let players = ["player1", "player2", "player3", "player4", "player5"];
document.getElementById("team1scr").value = 0;

document.getElementById("player1t1").value = "";
document.getElementById("player2t1").value = "";
document.getElementById("player3t1").value = "";
document.getElementById("player4t1").value = "";
document.getElementById("player5t1").value = "";
function t1bat() {


    if (t1ballcount != 0) {
        sc = Math.floor(Math.random() * 7);
        t1ar.push(sc);
        document.getElementById(players[t1outcount] + "t1").value += sc + " "
        

        if (sc == 0) {
            t1outcount++
        }
        t1ballcount--;
        arr = t1ar.reduce((so, os) => {
            return os + so;
        }, 0)
        document.getElementById("team1scr").value = arr;
        console.log(arr)
        
    }
    else if (t1outcount == 5 || t1ballcount == 0) {
        console.warn("innings Over");
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").removeAttribute("disabled");
        return;
    }


    let t1scoreobj = {
        arr,
        pl1scr: document.getElementById("player1t1").value,
        pl2scr: document.getElementById("player2t1").value,
        pl3scr: document.getElementById("player3t1").value,
        pl4scr: document.getElementById("player4t1").value,
        pl5scr: document.getElementById("player5t1").value,
    }

    localStorage.setItem("team1ScoreCard", JSON.stringify(t1scoreobj));

    
}


////////////////TEAM 2//////////////////////

var t2count = 0;
var t2outcount = 0;
var t2ar = [];
let sc2;
var i = 0;
var arr2 = 0;
var t2ballcount = 18;
var aew = 0;
let players2 = ["player1", "player2", "player3", "player4", "player5"];

document.getElementById("team2scr").value = 0;


document.getElementById("player1t2").value = "";
document.getElementById("player2t2").value = "";
document.getElementById("player3t2").value = "";
document.getElementById("player4t2").value = "";
document.getElementById("player5t2").value = "";
function t2bat() {


    if (t2ballcount != 0) {
        sc2 = Math.floor(Math.random() * 7);
        t2ar.push(sc2)
        document.getElementById(players2[t2outcount] + "t2").value += sc2 + " "

        if (sc2 == 0) {
            t2outcount++
        }
        t2ballcount--;
        arr2 = t2ar.reduce((so, os) => {
            return os + so;
        }, 0)
        document.getElementById("team2scr").value = arr2;
        console.log(arr2)
    }
    else if (t2outcount == 5 || t2ballcount == 0) {
        console.warn("innings Over");
        document.getElementById("b2").disabled = true;
        return;
    }

    let t2scoreobj = {
        arr2,
        pl1scr: document.getElementById("player1t2").value,
        pl2scr: document.getElementById("player2t2").value,
        pl3scr: document.getElementById("player3t2").value,
        pl4scr: document.getElementById("player4t2").value,
        pl5scr: document.getElementById("player5t2").value,
    }

    localStorage.setItem("team2ScoreCard", JSON.stringify(t2scoreobj));
}



