let xMax = 400;
let yMax = 600;

let xCity = xMax/2;
let yCity = yMax*0.8;

// variabili animazione finestre

let groups = 8;
let speed = 40;
let time = 0;
let steps = 0;


function drawStar(i, starX, starY, transparency, size){
  if(i%2==0){
    fill(199, 180, 64, transparency);
    ellipse(starX, starY, size);
  } else if (i%3==0){
    fill(214, 204, 135, transparency);
    ellipse(starX, starY, size);
  } else {
    fill(112, 100, 19, transparency);
    ellipse(starX, starY, size);
  }
}

function drawStars(n=50){
  push();
  noStroke();

  for (let i=0; i < n; i++){
    let starX = (i*37) % width + (i%3)*5;
    let starY = ((i*73) % height) + (i%7);

    let randomTransparency = random(100, 250);
    let randomSize = random(1, 4);

    drawStar(i, starX, starY, randomTransparency, randomSize);
  }
  pop();
}


// animazione finestre

function setWindowLight() {
let turnOff = random(groups);
let turnOn = random(groups);

if (steps < groups) {
  if (turnOff > steps-1) {
    fill(217, 195, 33);
  } else {
    fill(40, 45, 90);
  }
  } else {
    let lightUp = steps - groups;
    if (turnOn < lightUp) {
      fill(217, 195, 33);
    } else {
      fill(40, 45, 90);
    }
  }
}

function moveTime() {
    
  time = time + 1;
    if (time == speed) {
      time = 0;
      steps = steps + 1;
  }
    if (steps == 2*groups) {
      steps = 0;
  }
}



function drawBuilding1() {
//livello 1 palazzi

push();
  
  fill(114, 112, 204);
  noStroke();

  rect(xCity-200, yCity-330, 80, 450);
  rect(xCity-100, yCity-260, 60, 390);
  rect(xCity-15, yCity-290, 100, 410);
  rect(xCity+120, yCity-320, 80, 440);

pop();

}


function drawWindows1() {
// finestre livello 1

push();

  noStroke();

  // palazzo 1.1

  let xBuild11 = xCity-200;
  let yBuild11 = yCity-330;

  for (let i = 0; i < 6; i++) {
    setWindowLight();
    rect(xBuild11+10, yBuild11+20 + i*40, 20, 30);
    setWindowLight();
    rect(xBuild11+50, yBuild11+20 + i*40, 20, 30);
  }

  // palazzo 1.2

  let xBuild12 = xCity-100;
  let yBuild12 = yCity-260;

  for (let i = 0; i < 4; i++) {
    setWindowLight();
    rect(xBuild12+10, yBuild12+10 + i*30, 40, 20);
  }

  // palazzo 1.3

  let xBuild13 = xCity-15;
  let yBuild13 = yCity-290;

  for (let i = 0; i < 4; i++) {
    setWindowLight();
    rect(xBuild13+15, yBuild13+15 + i*45, 15, 30);
    setWindowLight();
    rect(xBuild13+42.5, yBuild13+15 + i*45, 15, 30);
    setWindowLight();
    rect(xBuild13+70, yBuild13+15 + i*45, 15, 30);
  }  

  // palazzo 1.4

  let xBuild14 = xCity+120;
  let yBuild14 = yCity-320;

  for (let i = 0; i < 4; i++) {
    setWindowLight();
    rect(xBuild14+10, yBuild14+10 + i*50, 15, 30);
    setWindowLight();
    rect(xBuild14+30, yBuild14+10 + i*50, 15, 30);
    setWindowLight();
    rect(xBuild14+50, yBuild14+10 + i*50, 15, 30);
    setWindowLight();
    rect(xBuild14+70, yBuild14+10 + i*50, 15, 30);
  }  

  
pop();

}


function drawBuilding2() {
//livello 2 palazzi

push();

  fill(83, 81, 150);
  noStroke();

  rect(xCity-180, yCity-210, 90, 340);
  rect(xCity-60, yCity-250, 75, 380);
  rect(xCity+40, yCity-220, 85, 350);
  rect(xCity+115, yCity-120, 85, 250);
  
pop();

}


function drawWindows2() {
// finestre livello 2

push();

  noStroke();

  // palazzo 2.1

  let xBuild21 = xCity-180;
  let yBuild21 = yCity-210;

  for (let i = 0; i < 6; i++) {
    setWindowLight();
    let row = i % 3;
    let y = yBuild21 + 20 + i*20;
    if (i >= 3) {
      y = y + 20;
    }

    square(xBuild21+15, y, 15);
    if (row < 2) {
      square(xBuild21+35, y, 15);
    }
    if (row < 1) {
      square(xBuild21+55, y, 15);
    }
  }

  // palazzo 2.2

  let xBuild22 = xCity-60;
  let yBuild22 = yCity-250;

  for (let i = 0; i < 9; i++) {
    setWindowLight();
    rect(xBuild22+20, yBuild22+20 + i*40, 5, 30);
    setWindowLight();
    rect(xBuild22+50, yBuild22+20 + i*40, 5, 30);
  } 

  // palazzo 2.3

  let xBuild23 = xCity+40;
  let yBuild23 = yCity-220;

  for (let i = 0; i < 13; i++) {
    setWindowLight();
    rect(xBuild23+15, yBuild23+25 + i*25, 55, 15);
  }

  //palazzo 2.3.2

  let xBuild232 = xCity+115;
  let yBuild232 = yCity-120;

  for (let i = 0; i < 5; i++) {
    setWindowLight();
    rect(xBuild232+20, yBuild232+15 + i*50, 50, 15);
  }

pop();

}


function drawBuilding3() {
//livello 3 palazzi

push();

  fill(65, 64, 107);
  noStroke();

  rect(xCity-200, yCity-70, 90, 200);
  rect(xCity-110, yCity-140, 90, 270);
  rect(xCity+10, yCity-110, 90, 240);

pop();

}

function drawWindows3() {
//livello 3 finestre
  
push();

  noStroke();


  // palazzo 3.1.1

  let xBuild311 = xCity-200;
  let yBuild311 = yCity-70;

  for (let i = 0; i < 6; i++) {
    setWindowLight();
    rect(xBuild311+15, yBuild311+15 + i*30, 25, 10);
    setWindowLight();
    rect(xBuild311+55, yBuild311+15 + i*30, 25, 10);
  }

  // palazzo 3.1.2

  let xBuild312 = xCity-110;
  let yBuild312 = yCity-140;

  for (let i = 0; i < 7; i++) {
    setWindowLight();
    let x = xBuild312 + 15 + (i % 3)*25;
    let y = yBuild312 + 15 + i*35;

    rect(x, y, 10, 40);
  }

  // palazzo 3.2

  let xBuild32 = xCity+10;
  let yBuild32 = yCity-110;

  for (let i = 0; i < 9; i++) {
    setWindowLight();
    let y = yBuild32 + 25 + i*20;
    if (i >= 3) {
      y = y + 20;
    }
    if (i >= 6) {
      y = y + 20;
    }

    square(xBuild32+20, y, 10);
    rect(xBuild32+45, y, 25, 10);
  }
  
pop();

}

function setup() {
  createCanvas(xMax, yMax);
  frameRate(50);
}

function draw() {
  background(42, 57, 99);

  randomSeed(7);

  drawStars(50);

  drawBuilding1();
  drawWindows1();

  drawBuilding2();
  drawWindows2();

  drawBuilding3();
  drawWindows3();

  moveTime();

}
