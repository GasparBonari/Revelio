"use strict";

// list of words

let words0 = 
[
    "Bear", "Beat", "Blow", "Burn", "Call", "Care", "Cast", "Come", "Cook",
    "Cope", "Cost", "Dare", "Deal", "Deny", "Draw", "Drop", "Earn", "Face",
    "Fail", "Fall", "Fear", "Feel", "Fill", "Find", "Form", "Gain", "Give",
    "Grow", "Hang", "Hate", "Have", "Hear", "Help", "Hide", "Hold", "Hurt",
    "Jump", "Keep", "Kill", "Love", "Make", "Miss", "Need", "Rest", "Ride",
    "Ring", "Rise", "Risk", "Roll", "Rule", "Save", "Seek", "Seem", "Sell",
    "Suit", "Talk", "Tell", "Tend", "Test", "Turn", "Vary", "View", "Vote",
    "Wait", "Wake", "Walk", "Want", "Will", "Wish", "Work"
];

let words1 = 
[
    "Branch", "Breath", "Bridge", "Bright", "Broken", "Budget", "Burden",
    "Bureau", "Button", "Camera", "Cancer", "Cannot", "Carbon", "Career",
    "Castle", "Casual", "Caught", "Center", "Centre", "Chance", "Change",
    "Dollar", "Domain", "Double", "Driven", "Driver", "During", "Easily",
    "Eating", "Editor", "Effect", "Effort", "Foster", "Fought", "Fourth", 
    "French", "Friend", "Future", "Garden", "Gather", "Gender", "German",
    "Global", "Golden", "Ground", "Growth", "Guilty", "Handed", "Handle",
    "Happen", "Hardly", "Headed", "Health", "Height", "Hidden", "Holder",
    "Honest", "Impact", "Import", "Income", "Focus", "Force", "Frame",
    "Frank", "Front", "Fruit", "Glass", "Grant", "Grass", "Green", "Group",
    "Guide", "Heart", "Henry", "Horse", "Hotel", "Start", "State", "Steam",
    "Steel", "Stock", "Stone", "Store", "Study", "Stuff", "Style", "Sugar",
    "Table", "Taste", "Terry", "Theme", "Thing", "Title", "Total", "Touch",
    "Tower", "Track", "Trade", "Train", "Trend", "Trial", "Trust", "Truth",
    "Uncle", "Union", "Unity", "Value", "Video"
];

let words2 = 
[
    "Activity", "Analysis", "Audience", "Addition", "Anything", "Advanced",
    "Attitude", "Anywhere", "Argument", "Accident", "Academic", "Ambition",
    "Attached", "Business", "Building", "Behavior", "Breaking", "Bacteria",
    "Bulletin", "Backward", "Breeding", "Blessing",  "Bleeding", "Language",
    "Location", "Learning", "Lifetime", "Laughter", "Limiting", "Ability",
    "America", "Article", "Account", "Address", "Benefit", "Balance", "Battery",
    "Brother", "Bicycle", "Bedroom", "Bearing", "Binding", "Burning", "Billion",
    "Banking", "Biology", "Battery", "Unknown", "Uniform", "Utility", "Useless",
    "Working", "Weather", "Written", "Writing", "Defined", "Display", "Details",
    "Derived", "Drawing", "Defense", "History", "Hundred", "Housing", "Highway",
    "Holding"
];

const lives = document.querySelector(".counter");
const center =  document.querySelector(".help");
const gameOver = document.querySelector(".gameOver");
const skull = document.querySelector(".skull");
const candle = document.querySelector(".candle");
const jesus = document.querySelector(".jesus");
const congrats = document.querySelector(".congrats");
const pointOut = document.querySelector(".point-out");
const pointOut1 = document.querySelector(".point-out1");

const heart = document.querySelector(".heart");
const heartBroken = document.querySelector(".heart-broken");
const showSecretNumber = document.querySelector(".show-secret");
const frameBox = document.querySelector(".frame");

const btnCheck = document.querySelector(".check");
const btnLevel1 = document.querySelector(".level0");
const btnLevel2 = document.querySelector(".level1");
const btnLevel3 = document.querySelector(".level2");
const btnAgain = document.querySelector(".again");
const btnPlay = document.querySelector('#play');
const btnPause = document.querySelector("#pause");
const btnInstructions = document.querySelector(".show-instruction");
const btnCloseInstructions = document.querySelector(".close-instruction");
const guess = document.querySelector(".guess");
let rand = Math.floor(Math.random() * words0.length);

let currentLives, score, startingGame, nextLevel2, nextLevel3, secret;
let highscore = 0;


// the start of the game

let startGame = function()
{
    rand = Math.floor(Math.random() * words0.length);
    secret = words0[rand].toLowerCase();

    document.body.style.backgroundImage = "url('img/picture1.gif')";
    guess.style.opacity = 100;
    
    jesus.classList.add("hidden");
    congrats.classList.add("hidden");
    frameBox.classList.remove("hidden");
    btnLevel1.classList.remove("hidden");
    btnLevel2.classList.add("hidden");
    btnLevel3.classList.add("hidden");
    btnCheck.classList.add("hidden");
    center.classList.remove("hidden");
    gameOver.classList.add("hidden");
    skull.classList.add("hidden");
    candle.classList.add("hidden");
    pointOut.style.opacity = 100;
    pointOut1.style.opacity = 0;

    heart.classList.remove("hidden");
    heartBroken.classList.add("hidden");
    showSecretNumber.classList.add("hidden");
    center.textContent = "Guess the word";
    currentLives = 5;
    lives.textContent = currentLives;
    score = 0;
    document.querySelector(".score").textContent = score;
    guess.value = "";
    startingGame = true;
    nextLevel2 = false;
    nextLevel3 = false;
}
startGame();


// all the possibilities results coming from the "enter" button

let checkGuess = function()
{

    if(guess.value !== secret)
    {
        currentLives--;
        lives.textContent = currentLives;

        if(currentLives == 0)
        {
            document.body.style.backgroundImage = "none";
            document.body.style.backgroundColor = "black";

            guess.style.opacity = 0;

            frameBox.classList.add("hidden");
            heart.classList.add("hidden");
            heartBroken.classList.remove("hidden");
            center.classList.add("hidden");
            btnCheck.classList.add("hidden");
            btnLevel1.classList.add("hidden");
            btnLevel2.classList.add("hidden");
            btnLevel3.classList.add("hidden");
            gameOver.classList.remove("hidden");
            skull.classList.remove("hidden");
            candle.classList.remove("hidden");
            pointOut1.style.opacity = 0;

            showSecretNumber.textContent = secret;
            showSecretNumber.classList.remove("hidden");
        }  
    }

    if(guess.value == secret && startingGame)
    {
        center.textContent = "Good job!";
        btnLevel1.classList.add("hidden");
        btnLevel2.classList.remove("hidden");
        pointOut.style.opacity = 100;
        pointOut1.style.opacity = 0;
        btnCheck.classList.add("hidden");
        score += 5;
        document.querySelector(".score").textContent = score;
        secret = words1[rand].toLowerCase();
        nextLevel2 = true;
        startingGame = false;

        checkHighscore()
    }

    if(guess.value == secret && nextLevel2)
    {
        center.textContent = "You got it!";
        btnLevel2.classList.add("hidden");
        btnLevel3.classList.remove("hidden");
        btnCheck.classList.add("hidden");
        pointOut.style.opacity = 100;
        pointOut1.style.opacity = 0;
        score += 5;
        document.querySelector(".score").textContent = score;
        secret = words2[rand].toLowerCase();
        nextLevel3 = true;
        nextLevel2 = false;

        checkHighscore()
    }

    if(guess.value == secret && nextLevel3)
    {
        btnLevel2.classList.add("hidden");
        btnLevel3.classList.add("hidden");
        btnCheck.classList.add("hidden");
        pointOut1.style.opacity = 0;
        score += 5;
        document.querySelector(".score").textContent = score;

        checkHighscore()
    }
}

// setting enter key

let keyEnter = function(e)
{
    if(e.key == "Enter")
    {
        checkGuess();
    }
}

// checking after guessing the correct word if user won or not

function checkHighscore()
{
    if(highscore < score)
    {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
    }

    if(highscore >= 15)
    {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#12b32c";

        center.textContent = "";

        guess.style.opacity = 0;
        btnLevel1.classList.add("hidden");
        btnLevel2.classList.add("hidden");
        btnLevel3.classList.add("hidden");
        frameBox.classList.add("hidden");
        jesus.classList.remove("hidden");
        congrats.classList.remove("hidden");
    }
}


// star level after pressing the button 

let startLevel = function()
{
    btnCheck.classList.remove("hidden");
    pointOut.style.opacity = 0;
    pointOut1.style.opacity = 100;

    let n = secret.slice(-1);
    center.textContent = secret[0].toLowerCase() + n.padStart(secret.length - 1, ".")
}

// instructions

let showInstructions = function()
{
    document.querySelector(".instruction").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
}

let closeInstructions = function()
{
    document.querySelector(".instruction").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
}

let keyClose = function(e)
{
    if(e.key == "Escape")
    {
        closeInstructions();
    }
}

// music

let music = document.querySelector(".music");

document.querySelector("#pause").classList.add("hidden");

function playPause() 
{
    if (music.paused) 
    {
        music.play()
        btnPlay.classList.add("hidden");
        btnPause.classList.remove("hidden");
    }
    else 
    {
        music.pause();
        btnPlay.classList.remove("hidden");
        btnPause.classList.add("hidden");
    }
}

// event listener

btnPlay.addEventListener("click", playPause);
btnPause.addEventListener("click", playPause);
btnLevel1.addEventListener("click", startLevel);
btnLevel2.addEventListener("click", startLevel);
btnLevel3.addEventListener("click", startLevel);
btnAgain.addEventListener("click", startGame);
btnCheck.addEventListener("click", checkGuess);

btnInstructions.addEventListener("click", showInstructions);
btnCloseInstructions.addEventListener("click", closeInstructions);
document.querySelector(".overlay").addEventListener("click", closeInstructions);
document.addEventListener("keydown", keyClose);
document.addEventListener("keydown", keyEnter);