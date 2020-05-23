function name_to_number(name){
    if (name == "rock"){
        return 0}
    else if (name == "spock"){
        return 1}
    else if (name == "paper"){
        return 2}
    else if (name == "lizard"){
        return 3}
    else if (name == "scissors"){
        return 4}
    else{
        return "Error: invalid choice"}
}



function number_to_name(number){
    if (number == 0){
        return "rock"}
    else if (number == 1){
        return "Spock"}
    else if (number == 2){
        return "paper"}
    else if (number == 3){
        return "lizard"}
    else if (number == 4){
        return "scissors"}
    else{
        return "Error: invalid numerical value"}
}

function computerChoice() {
    var x = Math.floor((Math.random() * 6));
    return x;
}

function playerChoice() {
    var y = prompt("Rock, paper, scissors, lizard, or Spock?");
    y = y.toLowerCase();
    return name_to_number(y);
}

function winner(player, comp){
    var play = (player-comp)
    if (play == 0){
        console.log("Player and Computer tie this round!");
        return "player and comp";
    } else if (play <0){
        var x = play + 5
        if (x == 1||x == 2){
            console.log("Player wins this round!");
            return "player";
        } else {
            console.log("Computer wins this round!");
            return "comp";
        }
    } else if (play == 1||play == 2){
        console.log("Player wins this round!");
        return "player";
    } else {
        console.log("Computer wins this round!");
        return "comp";
    }
}

function rpsls(player_choice){ 
    console.log(" ");
    player_choice = playerChoice();
    console.log("Player chooses " + number_to_name(player_choice));
    comp_number = computerChoice();
    console.log("Computer chooses " + number_to_name(comp_number));

    var point = winner(player_choice, comp_number);
    
    if (point == "player and comp"){
        count += 0;
    } else if (point == "player"){
        playPoint += 1;
        count += 1;
    } else {
        compPoint += 1;
        count += 1;
    }

    console.log("Score: Player - " + String(playPoint) + " Computer - " + String(compPoint));

    if (count == 5){
        if (playPoint > compPoint){
            console.log("Player wins!")
        } else {
            console.log ("Computer Wins!")
        }
    } else {
        rpsls()
    }
}

var count = 0;
var playPoint = 0;
var compPoint = 0;
rpsls()