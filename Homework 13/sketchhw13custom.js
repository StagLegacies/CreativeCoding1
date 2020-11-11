  
// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = [];
var shapeY = [];
var shapeXSpeed = [];
var shapeYSpeed = [];
var diameters = [];

// x and y for second shape
// var shapeX2 = 379;
// var shapeY2 = 379;
// var shapeXSpeed2;
// var shapeYSpeed2;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(500, 600);
    // get a random speed when the it first starts
    for (var i = 0; i < 10; i++) {
    shapeXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeX[i] = getRandomNumber(500);
    // console.log(shapeX[i]);
    shapeY[i] = getRandomNumber(600);
    diameters[i] = getRandomNumber(40);
    }
}

function draw()
{
    fill(255,255,255);
    background(0,45,78);
    stroke(0);
    fill(0);

    // call borderCreation function
    borderCreation();

    // exit message
    exitMessage();

    //character creation function
    createCharacter();

    // this function controls the character
    characterControls();

    // calls enemy
    createEnemy();

     // gets a random speed for the enemy each time page is refreshed
     getEnemySpeed();

    // moves the enemy (with WASD)
     moveEnemy();

    // function that checks to see if the shape has gone out of bounds
     outOfBoundsCheck();

    // checks to see if the character has left the exit
     exitCheck();

    // creates the shape based on the mouse click location
    createShapeOnMC();
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}


function borderCreation()
{
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height-50);
}

function exitMessage()
{
     // exit message
     textSize(16);
     text("EXIT", width-50,height-50)
}

function createCharacter()
{
     //character
     fill(0,255,0);
     circle(characterX,characterY,25);
}

function characterControls()
{
    
    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
}

function createEnemy()
{
     // potential enemy
     fill(0,0,0);
     // draw the shape
     for (var i = 0; i < shapeX.length; i++) {
        // console.log(shapeX[i]);
        circle(shapeX[i], shapeY[i], diameters[i]);
        shapeXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     }
     // fill(255,255,255);
     // circle(shapeX2,shapeY2, 50);
}

function getEnemySpeed()
{
    for (var i = 0; i < shapeXSpeed.length; i++) {
    shapeXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    // shapeXSpeed2 = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    // shapeYSpeed2 = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    }

}

function moveEnemy()
{
    for (var i = 0; i < shapeXSpeed.length; i++) {
    shapeX[i] += shapeXSpeed[i];
    shapeY[i] += shapeYSpeed[i];
    }
    // shapeX2 += shapeXSpeed2;
    // shapeY2 += shapeYSpeed2;
}

function outOfBoundsCheck()
{
    for (var i = 0; i < shapeXSpeed.length; i++) {
    if(shapeX[i] > width)
    {
        shapeX[i] = 0;
    }
    if(shapeX[i] < 0)
    {
        shapeX[i] = width;
    }
    if(shapeY[i] > height)
    {
        shapeY[i] = 0;
    }
    if(shapeY[i] < 0)
    {
        shapeY[i] = height;
    }
}
    // if(shapeX2 > width)
    // {
    //    shapeX2 = 0;
    // }
    // if(shapeX2 < 0)
    // {
    //    shapeX2 = width;
    // }
    // if(shapeY2 > height)
    // {
    //    shapeY2 = 0;
    // }
    // if(shapeY2 < 0)
    // {
    //    shapeY2 = height;
    // }

}

function exitCheck()
{
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }
}

function createShapeOnMC()
{
    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function getRandomNumber(number) {
    console.log("random number" + number);
    return Math.floor(Math.random() * number) + 10;
}
