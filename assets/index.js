console.log("these are connected!");

let options = ["rock", "paper", "scissors"];
let user1Selection;
let user2Selection;
let winner;
let user1;
let user2;


$("#user1-select1").on("click", function (event) {
    user1Selection = options[0];
    document.getElementById("user1-select1").style.color = "black";
    document.getElementById("user1-select1").style.backgroundColor = "pink";
    document.getElementById("user1-select2").style.color = "black";
    document.getElementById("user1-select2").style.backgroundColor = "white";
    document.getElementById("user1-select3").style.color = "black";
    document.getElementById("user1-select3").style.backgroundColor = "white";
    console.log(user1Selection);
})

$("#user1-select2").on("click", function (event) {
    user1Selection = options[1];
    document.getElementById("user1-select1").style.color = "black";
    document.getElementById("user1-select1").style.backgroundColor = "white";
    document.getElementById("user1-select2").style.color = "black";
    document.getElementById("user1-select2").style.backgroundColor = "pink";
    document.getElementById("user1-select3").style.color = "black";
    document.getElementById("user1-select3").style.backgroundColor = "white";
    console.log(user1Selection);
})

$("#user1-select3").on("click", function (event) {
    user1Selection = options[2];
    document.getElementById("user1-select1").style.color = "black";
    document.getElementById("user1-select1").style.backgroundColor = "white";
    document.getElementById("user1-select2").style.color = "black";
    document.getElementById("user1-select2").style.backgroundColor = "white";
    document.getElementById("user1-select3").style.color = "black";
    document.getElementById("user1-select3").style.backgroundColor = "pink";
    console.log(user1Selection);
})

$("#user2-select1").on("click", function (event) {
    user2Selection = options[0];
    document.getElementById("user2-select1").style.color = "black";
    document.getElementById("user2-select1").style.backgroundColor = "pink";
    document.getElementById("user2-select2").style.color = "black";
    document.getElementById("user2-select2").style.backgroundColor = "white";
    document.getElementById("user2-select3").style.color = "black";
    document.getElementById("user2-select3").style.backgroundColor = "white";
    console.log(user2Selection);
})

$("#user2-select2").on("click", function (event) {
    user2Selection = options[1];
    document.getElementById("user2-select1").style.color = "black";
    document.getElementById("user2-select1").style.backgroundColor = "white";
    document.getElementById("user2-select2").style.color = "black";
    document.getElementById("user2-select2").style.backgroundColor = "pink";
    document.getElementById("user2-select3").style.color = "black";
    document.getElementById("user2-select3").style.backgroundColor = "white";
    console.log(user2Selection);
})

$("#user2-select3").on("click", function (event) {
    user2Selection = options[2];
    document.getElementById("user2-select1").style.color = "black";
    document.getElementById("user2-select1").style.backgroundColor = "white";
    document.getElementById("user2-select2").style.color = "black";
    document.getElementById("user2-select2").style.backgroundColor = "white";
    document.getElementById("user2-select3").style.color = "black";
    document.getElementById("user2-select3").style.backgroundColor = "pink";
    console.log(user2Selection);
})

$("#submit").on("click", function() {
    user1 = $("#user1-input").val().trim();
    user2 = $("#user2-input").val().trim();
    console.log("you've submitted!");
    console.log(user1);
    console.log(user2);
    if (user1Selection === user2Selection) {
        alert("its a tie");
        winner = "tie";
    } else if (user1Selection === options[0]) { //rock, user 1
        if (user2Selection === options[1]) { //paper, user 2
            winner = user2;
        } else if (user2Selection === options[2]) { //scissors, user 2
            winner = user1;
        }
    } else if (user1Selection === options[1]) { //paper, user 1
        if (user2Selection === options[0]) { //rock, user 2
            winner = user1;
        } else if (user2Selection === options[2]) { //scissors, user 2
            winner = user2;
        }
    } else if (user1Selection === options[2]) { //scissors, user 1
        if (user2Selection === options[0]) { //rock, user 2
            winner = user2;
        } else if (user2Selection === options[1]) { //paper, user 2
            winner = user1;
        }
    }
    console.log(winner);
    $("#winner").text("Winner: " + winner);
})