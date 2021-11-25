// 最終課題を制作しよう
let count;
let cycle;
let img;
let a,b;

function preload(){
  img=loadImage('https://2.bp.blogspot.com/-b01m92UOEf4/U32NuTAZ8ZI/AAAAAAAAg08/mDVvLC4Go7I/s800/sick_kizetsu.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  count=0
  cycle=50
  a=width
  b=height-120
}

function draw(){
  background(255, 228, 225);
  image(img,0,0,500,500);
  count = (count + 1) % cycle;
  noStroke();
  fill(25,25,112);
  ellipse(280, 300, 60);

  if(mouseIsPressed && mouseX>260 && mouseX<300 && mouseY>280 && mouseY<320 && count<(cycle/5)){
    fill(179,0,0);
    ellipse(280, 300, 60);
  }
  else if (mouseIsPressed && mouseX>260 && mouseX<300 && mouseY>280 && mouseY<320 && count<(cycle/5*2)) {
    fill(179,0,0);
    ellipse(280, 300, count+40);
  }
  else if (mouseIsPressed && mouseX>260 && mouseX<300 && mouseY>280 && mouseY<320 && count<(cycle/5*3)) {
    fill(179,0,0);
    ellipse(280, 300, 160-count*2);
  }
  else if (mouseIsPressed && mouseX>260 && mouseX<300 && mouseY>280 && mouseY<320 && count<(cycle/5*4)) {
    fill(179,0,0);
    ellipse(280, 300, -20+count);
  }
  else if (mouseIsPressed &&mouseX>260 && mouseX<300 && mouseY>280 && mouseY<320 && count<cycle) {
    fill(179,0,0);
    ellipse(280, 300, 60)
  }

  drawHand(mouseX,mouseY);

  balloon("西田先生！！しっかりしてください！！",mouseX+20,mouseY+25)

  push();
  translate(0,0);
  translate(p5.Vector.fromAngle(millis() / 120, 50));
  star(340,110,20);
  pop();

  ambulance(a,b);
  if(keyIsDown(LEFT_ARROW)){
    a-=5;
  }
  else if(keyIsDown(RIGHT_ARROW)){
    a+=5;
  }
}

function drawHand(x,y){
  push();
  noStroke();
  fill(244,190,155);
  ellipse(x,y,40);
  ellipse(x-13,y+6,20);
  rect(x-8,y+5,20,70);
  pop();
}

function balloon(t, cx, cy){
  push();
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  noStroke();
  fill(255,0,0);
  rect(cx, cy, w + p * 2, h + p * 2);
  triangle(cx+w-10, cy+(h+p*2), cx+(w+p*2), cy+(h+p*2), cx+w+p, cy+(h+p*4));
  fill(255);
  text(t, cx + p, cy + h);
  pop();
}

function star(cx, cy, r){
  push();
  noStroke();
  fill(255,255,0);
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
  pop();
}

function ambulance(a,b){
  push();
  fill(255,255,255);
  stroke(10);
  rect(a,b,150,100,40,30,15,15);
  rect(a+30,b-15,95,15);
  fill(135,206,250);
  rect(a+60,b+10,30,35);
  rect(a+105,b+10,30,35);
  rect(a+15,b+10,30,35,500,0,0,0);
  fill(0,0,0);
  ellipse(a+35,b+100,35);
  ellipse(a+120,b+100,35);
  fill(255,0,0);
  rect(a,b+50,150,15);
  rect(a+30,b-15,30,15);
  rect(a+95,b-15,30,15);
  fill(255,255,0);
  ellipse(a+3,b+74,12);
  fill(255,255,255);
  ellipse(a+35,b+100,15);
  ellipse(a+120,b+100,15);
  pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
