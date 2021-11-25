// 小手調べ
function setup(){
  createCanvas(100,100);
  noFill();
  for(let i = 0; i < 10; i++){
    if(i<5){
      stroke(0,0,255);
      ellipse(50,50,5+5*i);
    }
    else {
      stroke(255,0,0);
      ellipse(50,50,5+5*i);
    }
  }
}
