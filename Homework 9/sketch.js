const { FILL, LINEAR, TRIANGLES } = require("./p5");

function setup() {
    createCanvas(1920,1080);
  }
  
  function draw() {
      background(120);
      // title
      fill(0, 0, 0);
      textSize(90);
      text('Toddler Solly', 650, 800);
      //legs 
      triangle(920, 400, 940, 600, 860, 400)
      triangle(920, 400, 840, 600, 860, 400)
      //arms
      line(750, 500, 860, 420)
      line(900, 400, 1040, 500)
       //body 
       fill('green')
       rect(847, 400, 90, 150, 20)
      // head
      fill(240, 184, 160);
      circle(890, 260, 300);
      // mole
      strokeWeight(5)
      point(920, 320)
      // white part of eyes
      fill(255, 255, 255);
      circle(840, 240, 70);
      circle(930, 240, 70);
      // blue part of eyes
      fill('blue');
      circle(840, 240, 50);
      circle(930, 240, 50);
      // pupils
      fill(0, 0, 0);
      circle(840, 240, 30);
      circle(930, 240, 30);
      // hair
      line(840, 70, 840, 130)
      line(845, 70, 845, 130)
      line(850, 70, 850, 130)
      line(855, 70, 855, 130)
      line(860, 70, 860, 130)
      line(865, 70, 865, 130)
      line(870, 70, 870, 130)
      line(875, 70, 875, 130)
      line(880, 70, 880, 130)
      line(885, 70, 885, 130)
      line(890, 70, 890, 130)
      line(895, 70, 895, 130)
      line(900, 70, 900, 130)
      line(905, 70, 905, 130)
      line(910, 70, 910, 130)
      line(915, 70, 915, 130)
      line(920, 70, 920, 130)
      line(925, 70, 925, 130)
      line(930, 70, 930, 130)
      line(935, 70, 935, 130)
      // eyebrows
      line(820, 180, 855, 200)
      line(915, 200, 950, 180)
      // smile
      arc(890, 335, 80, 80, 0, PI + QUARTER_PI, CHORD);
      // signature
      fill(0, 0, 0);
      textSize(32);
      text('- Solly', 1770, 970);
  }