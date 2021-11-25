function setup() {
  createCanvas(128,128);
}

function draw() {
  background(255);//背景を白にする
  strokeWeight(0);//枠線を無くす
  fill(153, 51, 102);//塗りつぶし色を小豆色にする
  triangle(12,120,116,120,116,10);//背面の三角形を描画
  strokeWeight(2)//枠線を2倍の太さにする
  stroke(color(255,153,153))//枠線の色をピンクにする
  fill(255, 255, 255);//塗りつぶし色を白にする
  triangle(0,108,106,108,106,0);//前面の三角形を描画
  textSize(32);//フォントサイズを３２にする
  textFont("serif");//フォントを変える
  fill(255,153,153)//塗りつぶし色をピンクにする
  text("46", 68, 100);//"46"というテキストを描画
}
