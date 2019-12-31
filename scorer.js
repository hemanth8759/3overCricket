var x=JSON.parse(localStorage.getItem("team1ScoreCard"))
var y=JSON.parse(localStorage.getItem("team2ScoreCard"))

console.log(x,y);

var go=Object.values(x)
var mo=Object.values(y)

for(i=1;i<go.length;i++){
 let plr="player"+i;
 document.getElementById("t1t").innerHTML+="<tr><td>"+plr+"</td>"+"<td>"+go[i]+"</td></tr>"
}
document.getElementById("t1r").innerHTML+="<td>"+"TEAM 1 Score"+"</td><td>"+go[0]+"</td>"

for(i=1;i<mo.length;i++){
    let plr="player"+i;
    document.getElementById("t2t").innerHTML+="<tr><td>"+plr+"</td>"+"<td>"+mo[i]+"</td></tr>"
}
document.getElementById("t2r").innerHTML+="<tr><td>"+"TEAM 2 Score"+"</td><td>"+mo[0]+"</td></tr>"


