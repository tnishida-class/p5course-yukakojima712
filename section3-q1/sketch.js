// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(252, 226, 196);
  count = (count + 1) % cycle;
  noStroke();
  fill(179,0,0);

  if(count<(cycle/5)){
    ellipse(width / 2, height / 2, 60);
  }
  else if (count<(cycle/5*2)) {
    ellipse(width / 2, height / 2, count+40);
  }
  else if (count<(cycle/5*3)) {
    ellipse(width / 2, height / 2, 160-count*2);
  }
  else if (count<(cycle/5*4)) {
    ellipse(width / 2, height / 2, -20+count);
  }
  else {
    ellipse(width / 2, height / 2, 60)
  }
}

function mousePressed(){
  count = 0 ;
  cycle = 50 ;
}
function mouseReleased(){
  count= 0 ,
  cycle= 100 ;
}
