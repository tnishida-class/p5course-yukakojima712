// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;//sizeはキャンバスの幅（width)の8等分
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
    if((i+j)%2==1){//i+jの値が奇数のとき
      fill(125,125,125);//グレー
      rect(size*i,size*j,size,size);
      if(j<3) {//i+jが奇数　かつ　j<3のとき
        fill(255,0,0);//赤
        ellipse(size*i+13,size*j+12,size-5);
      }
      if(j>4){//i+jが奇数　かつ　j>4のとき
        fill(0,0,0);
        ellipse(size*i+13,size*j+12,size-5);
      }
    }
    else{//i+jの値が偶数のとき
      noFill();
      rect(size*i,size*j,size,size);
    }
    }
  }
}
