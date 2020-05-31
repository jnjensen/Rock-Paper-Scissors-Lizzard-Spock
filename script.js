const cChoice = document.querySelector('#computerChoice');
const pChoice = document.querySelector('#playerChoice');
const rWin = document.querySelector('#roundResults');
const pScore = document.querySelector('#playerScore');
const cScore = document.querySelector('#computerScore');
const rock = document.querySelector("#selectRock");
const paper = document.querySelector("#selectPaper");
const scissors = document.querySelector("#selectScissors");
const lizard = document.querySelector("#selectLizard");
const spock = document.querySelector("#selectSpock");
const resetButton = document.querySelector("#reset");

var compPoint = 0;
var playPoint = 0;
var count = 0;

function name_to_number(name){
    if (name == "Rock"){
        return 0;}
    else if (name == "Spock"){
        return 1;}
    else if (name == "Paper"){
        return 2;}
    else if (name == "Lizard"){
        return 3;}
    else if (name == "Scissors"){
        return 4;}
    else{
        return "Error: invalid choice";}
}

function number_to_name(number){
    if (number == 0){
        return "Rock";}
    else if (number == 1){
        return "Spock";}
    else if (number == 2){
        return "Paper";}
    else if (number == 3){
        return "Lizard";}
    else if (number == 4){
        return "Scissors";}
    else{
        return "Rock";
    }
}

function computerChoice() {
    var x = Math.floor((Math.random() * 6));
    return (number_to_name(x));
}

function winner(player, comp){
    var play = (player-comp)
    if (play == 0){
        return "player and comp";
    } else if (play <0){
        var x = play + 5
        if (x == 1||x == 2){
            return "player";
        } else {
            return "comp";
        }
    } else if (play == 1||play == 2){
        return "player";
    } else {
        return "comp";
    }
}

function rpsls(){
    const container = document.querySelector('#gamePlay');

    var player_choice = this.value;
    var player_number = name_to_number(player_choice);
    pChoice.innerHTML = "Player chose " + player_choice;
  
    var comp_choice = computerChoice();
    var comp_number = name_to_number(comp_choice);
    cChoice.innerHTML = "Computer chose " + comp_choice;

    var point = winner(player_number, comp_number);
    
    if (point == "player and comp"){
        rWin.innerHTML = "Player and Computer tie this round!";
        count += 0;
    } else if (point == "player"){
        rWin.innerHTML = "Player wins this round!";
        playPoint += 1;
        count += 1;
    } else {
        rWin.innerHTML = "Computer wins this round!";
        compPoint += 1;
        count += 1;
    }

    pScore.innerHTML = playPoint;
    cScore.innerHTML = compPoint;

    if (count == 5){
        rock.style.visibility = "hidden";
        paper.style.visibility = "hidden";
        scissors.style.visibility = "hidden";
        lizard.style.visibility = "hidden";
        spock.style.visibility = "hidden";
        cChoice.innerHTML = "";
        rWin.innerHTML = "";
        if (playPoint > compPoint){
            pChoice.innerHTML = "Player wins!";
        } else {
            pChoice.innerHTML = "Computer Wins!";
        }
    }
}

function reset(){
    rock.style.visibility = "visible";
    paper.style.visibility = "visible";
    scissors.style.visibility = "visible";
    lizard.style.visibility = "visible";
    spock.style.visibility = "visible";
    pChoice.innerHTML = "";
    cChoice.innerHTML = "";
    rWin.innerHTML = "";
    count = 0;
    playPoint = 0;
    compPoint = 0;
    pScore.innerHTML = playPoint;
    cScore.innerHTML = compPoint;
}


rock.addEventListener("click", rpsls);
paper.addEventListener("click", rpsls);
scissors.addEventListener("click", rpsls);
lizard.addEventListener("click", rpsls);
spock.addEventListener("click", rpsls);
resetButton.addEventListener("click", reset);
