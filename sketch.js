let xMax = 400;
let yMax = 600;

let xCity = xMax/2;
let yCity = yMax*0.8;


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

function drawStars(n=40){
  push();
  noStroke();

  for (let i=0; i < n; i++){
    let starX = (i*37) % width + (i%3)*5;
    let starY = ((i*73) % height) + (i%7);

    let transparency = 150 + (i*29) % 106;
    let size = 2.8 + (i%4) 

    drawStar(i, starX, starY, transparency, size);
  }
  pop();
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

  fill(217, 195, 33)
  noStroke();


  // palazzo 1.1

  let xBuild11 = xCity-200;
  let yBuild11 = yCity-330;

  for (let i = 0; i < 6; i++) {
    rect(xBuild11+10, yBuild11+20 + i*40, 20, 30);
    rect(xBuild11+50, yBuild11+20 + i*40, 20, 30);
  }


// PROVA RETTANGOLI PER FINESTRE:

  // rect(xBuild11+10, yBuild11+20, 20, 30);
  // rect(xBuild11+50, yBuild11+20, 20, 30);

  // rect(xBuild11+10, yBuild11+60, 20, 30);
  // rect(xBuild11+50, yBuild11+60, 20, 30);

  // rect(xBuild11+10, yBuild11+100, 20, 30);
  // rect(xBuild11+50, yBuild11+100, 20, 30);

  // rect(xBuild11+10, yBuild11+140, 20, 30);

  // rect(xBuild11+10, yBuild11+180, 20, 30);

  // rect(xBuild11+10, yBuild11+220, 20, 30);


  // palazzo 1.2

  let xBuild12 = xCity-100;
  let yBuild12 = yCity-260;

  for (let i = 0; i < 4; i++) {
    rect(xBuild12+10, yBuild12+10 + i*30, 40, 20);
  }


// PROVA RETTANGOLI PER FINESTRE:

    // rect(xBuild12+10, yBuild12+10, 40, 20);
    // rect(xBuild12+10, yBuild12+40, 40, 20);
    // rect(xBuild12+10, yBuild12+70, 40, 20);
    // rect(xBuild12+10, yBuild12+100, 40, 20);


  // palazzo 1.3

  let xBuild13 = xCity-15;
  let yBuild13 = yCity-290;

  for (let i = 0; i < 4; i++) {
    rect(xBuild13+15, yBuild13+15 + i*45, 15, 30);
    rect(xBuild13+42.5, yBuild13+15 + i*45, 15, 30);
    rect(xBuild13+70, yBuild13+15 + i*45, 15, 30);
  }  

  
  // rect(xBuild13+15, yBuild13+15, 15, 30);
  // rect(xBuild13+42.5, yBuild13+15, 15, 30);
  // rect(xBuild13+70, yBuild13+15, 15, 30);
    
  // rect(xBuild13+15, yBuild13+60, 15, 30);
  // rect(xBuild13+42.5, yBuild13+60, 15, 30);
  // rect(xBuild13+70, yBuild13+60, 15, 30);

  // rect(xBuild13+42.5, yBuild13+105, 15, 30);

  // rect(xBuild13+42.5, yBuild13+150, 15, 30);


  // palazzo 1.4

  let xBuild14 = xCity+120;
  let yBuild14 = yCity-320;

  for (let i = 0; i < 4; i++) {
    rect(xBuild14+10, yBuild14+10 + i*50, 15, 30);
    rect(xBuild14+30, yBuild14+10 + i*50, 15, 30);
    rect(xBuild14+50, yBuild14+10 + i*50, 15, 30);
    rect(xBuild14+70, yBuild14+10 + i*50, 15, 30);
  }  


  // rect(xBuild14+10, yBuild14+10, 15, 30);
  // rect(xBuild14+30, yBuild14+10, 15, 30);
  // rect(xBuild14+50, yBuild14+10, 15, 30);
  // rect(xBuild14+70, yBuild14+10, 15, 30);

  // rect(xBuild14+10, yBuild14+60, 15, 30);
  // rect(xBuild14+30, yBuild14+60, 15, 30);
  // rect(xBuild14+50, yBuild14+60, 15, 30);
  // rect(xBuild14+70, yBuild14+60, 15, 30);

  // rect(xBuild14+10, yBuild14+110, 15, 30);
  // rect(xBuild14+30, yBuild14+110, 15, 30);
  // rect(xBuild14+50, yBuild14+110, 15, 30);
  // rect(xBuild14+70, yBuild14+110, 15, 30);

  // rect(xBuild14+10, yBuild14+160, 15, 30);
  // rect(xBuild14+30, yBuild14+160, 15, 30);
  // rect(xBuild14+50, yBuild14+160, 15, 30);
  // rect(xBuild14+70, yBuild14+160, 15, 30);
  
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

  fill(217, 195, 33);
  noStroke();


  // palazzo 2.1

  let xBuild21 = xCity-180;
  let yBuild21 = yCity-210;

  square(xBuild21+15, yBuild21+20, 15);
  square(xBuild21+35, yBuild21+20, 15);
  square(xBuild21+55, yBuild21+20, 15);
  square(xBuild21+15, yBuild21+40, 15);
  square(xBuild21+35, yBuild21+40, 15);
  square(xBuild21+15, yBuild21+60, 15);

  square(xBuild21+15, yBuild21+100, 15);
  square(xBuild21+35, yBuild21+100, 15);
  square(xBuild21+55, yBuild21+100, 15);
  square(xBuild21+15, yBuild21+120, 15);
  square(xBuild21+35, yBuild21+120, 15);


  // palazzo 2.2

  let xBuild22 = xCity-60;
  let yBuild22 = yCity-250;

  rect(xBuild22+20, yBuild22+20, 5, 30);
  rect(xBuild22+20, yBuild22+60, 5, 30);
  rect(xBuild22+20, yBuild22+100, 5, 30);

  rect(xBuild22+50, yBuild22+20, 5, 30);
  rect(xBuild22+50, yBuild22+60, 5, 30);
  rect(xBuild22+50, yBuild22+100, 5, 30);
  rect(xBuild22+50, yBuild22+140, 5, 30);
  rect(xBuild22+50, yBuild22+180, 5, 30);
  rect(xBuild22+50, yBuild22+220, 5, 30);
  rect(xBuild22+50, yBuild22+260, 5, 30);
  rect(xBuild22+50, yBuild22+300, 5, 30);
  rect(xBuild22+50, yBuild22+340, 5, 30);


  // // palazzo 2.3

  let xBuild23 = xCity+40;
  let yBuild23 = yCity-220;

  rect(xBuild23+15, yBuild23+25, 55, 15);
  rect(xBuild23+15, yBuild23+50, 55, 15);
  rect(xBuild23+15, yBuild23+75, 55, 15);
  rect(xBuild23+15, yBuild23+100, 55, 15);
  rect(xBuild23+15, yBuild23+125, 55, 15);
  rect(xBuild23+15, yBuild23+150, 55, 15);
  rect(xBuild23+15, yBuild23+175, 55, 15);
  rect(xBuild23+15, yBuild23+200, 55, 15);
  rect(xBuild23+15, yBuild23+225, 55, 15);
  rect(xBuild23+15, yBuild23+250, 55, 15);
  rect(xBuild23+15, yBuild23+275, 55, 15);
  rect(xBuild23+15, yBuild23+300, 55, 15);
  rect(xBuild23+15, yBuild23+325, 55, 15);


  // // palazzo 2.3.2

  let xBuild232 = xCity+115;
  let yBuild232 = yCity-120;

  rect(xBuild232+20, yBuild232+15, 50, 15);
  rect(xBuild232+20, yBuild232+65, 50, 15);
  rect(xBuild232+20, yBuild232+115, 50, 15);
  rect(xBuild232+20, yBuild232+165, 50, 15);
  rect(xBuild232+20, yBuild232+215, 50, 15);


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
  
  fill(217, 195, 33);
  noStroke();


  // palazzo 3.1.1

  let xBuild311 = xCity-200;
  let yBuild311 = yCity-70;

  rect(xBuild311+15, yBuild311+15, 25, 10);
  rect(xBuild311+55, yBuild311+15, 25, 10);

  rect(xBuild311+15, yBuild311+45, 25, 10);
  rect(xBuild311+55, yBuild311+45, 25, 10);

  rect(xBuild311+15, yBuild311+75, 25, 10);
  rect(xBuild311+55, yBuild311+75, 25, 10);

  rect(xBuild311+15, yBuild311+105, 25, 10);
  rect(xBuild311+55, yBuild311+105, 25, 10);

  rect(xBuild311+15, yBuild311+135, 25, 10);
  rect(xBuild311+55, yBuild311+135, 25, 10);

  rect(xBuild311+15, yBuild311+165, 25, 10);
  rect(xBuild311+55, yBuild311+165, 25, 10);

  // palazzo 3.1.2

  let xBuild312 = xCity-110;
  let yBuild312 = yCity-140;

  rect(xBuild312+15, yBuild312+15, 10, 40);
  rect(xBuild312+40, yBuild312+50, 10, 40);
  rect(xBuild312+65, yBuild312+85, 10, 40);

  rect(xBuild312+15, yBuild312+120, 10, 40);
  rect(xBuild312+40, yBuild312+155, 10, 40);
  rect(xBuild312+65, yBuild312+190, 10, 40);

  rect(xBuild312+15, yBuild312+225, 10, 40);
  rect(xBuild312+40, yBuild312+260, 10, 40);
  

  // palazzo 3.2

  let xBuild32 = xCity+10;
  let yBuild32 = yCity-110;

  square(xBuild32+20, yBuild32+25, 10);
  rect(xBuild32+45, yBuild32+25, 25, 10);

  square(xBuild32+20, yBuild32+45, 10);
  rect(xBuild32+45, yBuild32+45, 25, 10);

  square(xBuild32+20, yBuild32+65, 10);
  rect(xBuild32+45, yBuild32+65, 25, 10);


  square(xBuild32+20, yBuild32+105, 10);
  rect(xBuild32+45, yBuild32+105, 25, 10);

  square(xBuild32+20, yBuild32+125, 10);
  rect(xBuild32+45, yBuild32+125, 25, 10);

  square(xBuild32+20, yBuild32+145, 10);
  rect(xBuild32+45, yBuild32+145, 25, 10);


  square(xBuild32+20, yBuild32+185, 10);
  rect(xBuild32+45, yBuild32+185, 25, 10);

  square(xBuild32+20, yBuild32+205, 10);
  rect(xBuild32+45, yBuild32+205, 25, 10);
  
  square(xBuild32+20, yBuild32+225, 10);
  rect(xBuild32+45, yBuild32+225, 25, 10);

  
pop();

}

function setup() {
  createCanvas(xMax, yMax);
}

function draw() {
  background(42, 57, 99);

  drawStars(35);

  drawBuilding1();
  drawWindows1();

  drawBuilding2();
  drawWindows2();

  drawBuilding3();
  drawWindows3();

}
