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

let rand = Math.floor(Math.random() * words0.length);
let lives = document.querySelector(".counter");
let center =  document.querySelector(".help");
let gameOver = document.querySelector(".gameOver");
let skull = document.querySelector(".skull");
let candle = document.querySelector(".candle");
let jesus = document.querySelector(".jesus");
let congrats = document.querySelector(".congrats");
let pointOut = document.querySelector(".point-out");

let heart = document.querySelector(".heart");
let heartBroken = document.querySelector(".heart-broken");
let showSecretNumber = document.querySelector(".show-secret");
let frameBox = document.querySelector(".frame");

let btnCheck = document.querySelector(".check");
let btnLevel1 = document.querySelector(".level0");
let btnLevel2 = document.querySelector(".level1");
let btnLevel3 = document.querySelector(".level2");
let btnAgain = document.querySelector(".again");
let btnPlay = document.querySelector('#play');
let btnPause = document.querySelector("#pause");
let btnInstructions = document.querySelector(".show-instruction");
let btnCloseInstructions = document.querySelector(".close-instruction");

let currentLives, score, startingGame, nextLevel2, nextLevel3, secret;
let highscore = 0;


let startGame = function()
{
    rand = Math.floor(Math.random() * words0.length);
    secret = words0[rand].toLowerCase();

    document.body.style.backgroundImage = "url('picture1.gif')";
    document.querySelector(".guess").style.opacity = 100;
    
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
    pointOut.classList.remove("hidden");

    heart.classList.remove("hidden");
    heartBroken.classList.add("hidden");
    showSecretNumber.classList.add("hidden");
    center.textContent = "Guess the word";
    currentLives = 5;
    lives.textContent = currentLives;
    score = 0;
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
    startingGame = true;
    nextLevel2 = false;
    nextLevel3 = false;
}
startGame();

let checkGuess = function()
{
    let guess = document.querySelector(".guess").value;

    if(guess !== secret)
    {
        currentLives--;
        lives.textContent = currentLives;

        if(currentLives == 0)
        {
            document.body.style.backgroundImage = "none";
            document.body.style.backgroundColor = "black";

            document.querySelector(".guess").style.opacity = 0;

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

            showSecretNumber.textContent = secret;
            showSecretNumber.classList.remove("hidden");
        }  
    }

    if(guess == secret && startingGame)
    {
        center.textContent = "Good job!";
        btnLevel1.classList.add("hidden");
        btnLevel2.classList.remove("hidden");
        pointOut.classList.remove("hidden");
        btnCheck.classList.add("hidden");
        score += 5;
        document.querySelector(".score").textContent = score;
        secret = words1[rand].toLowerCase();
        nextLevel2 = true;
        startingGame = false;

        checkHighscore()
    }

    if(guess == secret && nextLevel2)
    {
        center.textContent = "You got it!";
        btnLevel2.classList.add("hidden");
        btnLevel3.classList.remove("hidden");
        btnCheck.classList.add("hidden");
        score += 5;
        document.querySelector(".score").textContent = score;
        secret = words2[rand].toLowerCase();
        nextLevel3 = true;
        nextLevel2 = false;

        checkHighscore()
    }

    if(guess == secret && nextLevel3)
    {
        btnLevel2.classList.add("hidden");
        btnLevel3.classList.add("hidden");
        btnCheck.classList.add("hidden");
        score += 5;
        document.querySelector(".score").textContent = score;

        checkHighscore()
    }
}

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

        document.querySelector(".guess").style.opacity = 0;
        btnLevel1.classList.add("hidden");
        btnLevel2.classList.add("hidden");
        btnLevel3.classList.add("hidden");
        frameBox.classList.add("hidden");
        jesus.classList.remove("hidden");
        congrats.classList.remove("hidden");
        

    }
}

// Levels

let startLevel = function()
{
    btnCheck.classList.remove("hidden");
    pointOut.classList.add("hidden");

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