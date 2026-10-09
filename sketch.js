let xMax = 400;
let yMax = 600;

let xCity = xMax/2;
let yCity = yMax*0.8;


function setup() {
  createCanvas(xMax, yMax);
}

function draw() {
  
  background(42, 57, 99);


push();
  
  // livello1
  fill(114, 112, 204);
  noStroke();

  rect(xCity-200, yCity-330, 80, 450);
  rect(xCity-100, yCity-260, 60, 390);
  rect(xCity-15, yCity-290, 100, 410);
  rect(xCity+120, yCity-320, 80, 440);

pop();

push();

    //livello2
  fill(83, 81, 150);
  noStroke();

  rect(xCity-180, yCity-210, 90, 340);
  rect(xCity-60, yCity-250, 75, 380);
  rect(xCity+30, yCity-220, 85, 350);
  rect(xCity+115, yCity-120, 85, 250);
  
pop();  

push();

  //livello3
  fill(65, 64, 107);
  noStroke();

  rect(xCity-200, yCity-70, 90, 200);
  rect(xCity-110, yCity-140, 90, 270);
  rect(xCity+20, yCity-110, 90, 240);


pop();


}
