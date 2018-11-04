//console.log("these are connected!");

var config = {
    apiKey: "AIzaSyA6J-DRP9jGIAvSsGFDyeWQQRHQFNORbn4",
    authDomain: "rockpaperscissors-dcd4c.firebaseapp.com",
    databaseURL: "https://rockpaperscissors-dcd4c.firebaseio.com",
    projectId: "rockpaperscissors-dcd4c",
    storageBucket: "rockpaperscissors-dcd4c.appspot.com",
    messagingSenderId: "383399282160"
};
firebase.initializeApp(config);


var database = firebase.database();

let options = ["rock", "paper", "scissors"];
let user1Selection = "";
let user2Selection = "";
let winner = "";
let user1 = "";
let user2 = "";
let user1Wins = 0;
let user2Wins = 0;
let messenger = "";
let userID = 1;



database.ref().on("value", function (snapshot) {

    console.log("user1 selection" + snapshot.val().user1Selection);
    console.log("user2 selection" + snapshot.val().user2Selection);

    $("#winner").text("Winner: " + snapshot.val().winner);
    $("#user1Wins").text("Wins for " + snapshot.val().user1 + ": " + snapshot.val().user1Wins);
    $("#user2Wins").text("Wins for " + snapshot.val().user2 + ": " + snapshot.val().user2Wins);
})

$("#userid").on("change", function (event) {
    if (userID === 1) {
        userID = 2;
        console.log("user 2");
    } else if (userID === 2) {
        userID = 1;
        console.log("user 1");
    }
})

$("#user-select1").on("click", function (event) {
    if (userID === 1) {
        user1Selection = options[0];
    } else if (userID === 2) {
        user2Selection = options[0];
    }
    document.getElementById("user-select1").style.backgroundColor = "pink";
    document.getElementById("user-select2").style.backgroundColor = "white";
    document.getElementById("user-select3").style.backgroundColor = "white";
    database.ref().set({
        user1: user1,
        user2: user2,
        winner: winner,
        user1Wins: user1Wins,
        user2Wins: user2Wins,
        user2Selection: user2Selection,
        user1Selection: user1Selection,
        messenger: messenger
    })
})

$("#user-select2").on("click", function (event) {
    if (userID === 1) {
        user1Selection = options[1];
    } else if (userID === 2) {
        user2Selection = options[1];
    }
    document.getElementById("user-select1").style.backgroundColor = "white";
    document.getElementById("user-select2").style.backgroundColor = "pink";
    document.getElementById("user-select3").style.backgroundColor = "white";
    database.ref().set({
        user1: user1,
        user2: user2,
        winner: winner,
        user1Wins: user1Wins,
        user2Wins: user2Wins,
        user2Selection: user2Selection,
        user1Selection: user1Selection,
        messenger: messenger
    })
})
$("#user-select3").on("click", function (event) {
    if (userID === 1) {
        user1Selection = options[2];
    } else if (userID === 2) {
        user2Selection = options[2];
    }
    document.getElementById("user-select1").style.backgroundColor = "white";
    document.getElementById("user-select2").style.backgroundColor = "white";
    document.getElementById("user-select3").style.backgroundColor = "pink";
    database.ref().set({
        user1: user1,
        user2: user2,
        winner: winner,
        user1Wins: user1Wins,
        user2Wins: user2Wins,
        user2Selection: user2Selection,
        user1Selection: user1Selection,
        messenger: messenger
    })
})

$("#submitName").on("click", function (event) {
    event.preventDefault()
    
    if (userID === 1) {
        user1 = $("#user-input").val().trim();
        console.log(user1);
    } else if (userID === 2) {
        user2 = $("#user-input").val().trim();
        console.log(user2);
    }
    
    database.ref().set({
        user1: user1,
        user2: user2,
        winner: winner,
        user1Wins: user1Wins,
        user2Wins: user2Wins,
        user2Selection: user2Selection,
        user1Selection: user1Selection,
        messenger: messenger
    })
})


$("#submit").on("click", function (event) {
    event.preventDefault()

    if (user2Selection && user1Selection) {
        console.log("User selections: " + user1Selection + user2Selection);
        if (user1Selection === user2Selection) {
            //alert("its a tie");
            winner = "Its A Tie!";
            user1Wins = user1Wins + 1;
            user2Wins = user2Wins + 1;
        } else if (user1Selection === options[0]) { //rock, user 1
            if (user2Selection === options[1]) { //paper, user 2
                winner = user2;
                user2Wins = user2Wins + 1;
            } else if (user2Selection === options[2]) { //scissors, user 2
                winner = user1;
                user1Wins = user1Wins + 1;
            }
        } else if (user1Selection === options[1]) { //paper, user 1
            if (user2Selection === options[0]) { //rock, user 2
                winner = user1;
                user1Wins = user1Wins + 1;
            } else if (user2Selection === options[2]) { //scissors, user 2
                winner = user2;
                user2Wins = user2Wins + 1;
            }
        } else if (user1Selection === options[2]) { //scissors, user 1
            if (user2Selection === options[0]) { //rock, user 2
                winner = user2;
                user2Wins = user2Wins + 1;
            } else if (user2Selection === options[1]) { //paper, user 2
                winner = user1;
                user1Wins = user1Wins + 1;
            }
        }

        console.log(winner);
        database.ref().set({
            user1: user1,
            user2: user2,
            winner: winner,
            user1Wins: user1Wins,
            user2Wins: user2Wins,
            user2Selection: user2Selection,
            user1Selection: user1Selection,
            messenger: messenger
        })
    } else {
        alert("the other user has not submitted an R-P-S pick yet!");
    }
})

$("#message_submit").on("click", function () {
    messenger = $("#user-message").val();

    if (userID === 1) {
        $("#chat_box").append('<br>' + user1 + ": " + messenger);
    } else if (userID === 2) {
        $("#chat_box").append('<br>' + user2 + ": " + messenger);
    }
    
    
    console.log(messenger);
    database.ref().set({
        user1: user1,
        user2: user2,
        winner: winner,
        user1Wins: user1Wins,
        user2Wins: user2Wins,
        user2Selection: user2Selection,
        user1Selection: user1Selection,
        messenger: messenger
    })
})