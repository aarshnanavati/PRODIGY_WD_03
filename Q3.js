
var score = {
    player1: 0,
    player2: 0
}
var count = 0;
var colors = ['#E6C229', '#D11149', '#F17105', '#6610F2', '#1A8FE3', '#FC440F', '#1EFFBC', '#7C9299', '#1F01B9'];
var name1 = document.querySelector("#player1-name");
var name2 = document.querySelector("#player2-name");

function insert(cell) {
    if (count % 2 == 0 && cell.innerHTML == '') {
        cell.innerHTML = "0";
        document.getElementById("container").style.animation = "red-player2 10s";
        count++;
    }
    if (count % 2 != 0 && cell.innerHTML == '') {
        cell.innerHTML = "X"
        document.getElementById("container").style.animation = "red-player1 10s";
        count++;
    }

    match('d1', 'd2', 'd3');
    match('d4', 'd5', 'd6');
    match('d7', 'd8', 'd9');
    match('d1', 'd4', 'd7');
    match('d2', 'd5', 'd8');
    match('d3', 'd6', 'd9');
    match('d1', 'd5', 'd9');
    match('d3', 'd5', 'd7');
    if (count == 9) {
        empty();
    }

}

function match(x, y, z) {
    var a = document.getElementById(x);
    var b = document.getElementById(y);
    var c = document.getElementById(z);
    if (a.innerHTML == 'X' && b.innerHTML == 'X' && c.innerHTML == 'X') {
        score.player2++;
        document.querySelector("#player2-name-d").innerHTML = name2.value + " : " + score.player2;
        empty();
    }

    if (a.innerHTML == '0' && b.innerHTML == '0' && c.innerHTML == '0') {
        score.player1++;
        document.querySelector("#player1-name-d").innerHTML = name1.value + " : " + score.player1;
        empty();
    }
}

function empty() {
    document.getElementById("d1").innerHTML = "";
    document.getElementById("d2").innerHTML = "";
    document.getElementById("d3").innerHTML = "";
    document.getElementById("d4").innerHTML = "";
    document.getElementById("d5").innerHTML = "";
    document.getElementById("d6").innerHTML = "";
    document.getElementById("d7").innerHTML = "";
    document.getElementById("d8").innerHTML = "";
    document.getElementById("d9").innerHTML = "";
    count = 0;
}

function savePlayer(x) {
    document.querySelector(".score-card-body-1").style.display = "none";
    document.querySelector(".score-card-body-2").style.display = "flex";
    document.querySelector(".game-box").style.display = "flex";
    document.querySelector("#heading").innerHTML = "Score Card";
    document.getElementById("container").style.animation = "red-player1 10s";
    var name1_d = document.querySelector("#player1-name-d");
    var name2_d = document.querySelector("#player2-name-d");

    if (x.value !== 'yes') {
        name1.value = "0";
        name2.value = "X";
        name1_d.innerHTML = "0 : ";
        name2_d.innerHTML = "X : ";
    } else {

        name1_d.innerHTML = name1.value;
        name2_d.innerHTML = name2.value;
    }
}

function track() {
    var htp = new XMLHttpRequest();
    htp.onreadystatechange = function () {
        console.log(htp.readyState);

        if (htp.readyState == 4) {
            console.log(htp.responseText);

        }
    };

    htp.open("GET", "http://localhost:8083/track", true);
    htp.send();
    console.log("call done nn");
}