// 練習問題：神戸市のマーク
function setup(){
  createCanvas(400, 200);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  arc(100+25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(70, 100 , 100, 100, QUARTER_PI *5 , QUARTER_PI * 5 + PI);

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);
  noStroke();
  fill(14,47,146);
  arc(315,106,118,118,0,PI*2);//青の円
  //ellipse(中心のｘ座標,中心のｙ座標,半径)で円描ける！！
  fill(255,255,255);
  arc(307,99,104,104,0,PI*2);//白の円
  fill(22,131,46);
  arc(300,98,105,100,0,PI*2);//緑の円
  fill(255,255,255);
  arc(299,105,91,91,0,PI*2);//白の円
  fill(77);
  textSize(22);
  textStyle(BOLD);//テキストを太字にする
  textFont("serif");
  text("KOBE",268,92);
  textSize(11);
  text("UNIVERSITY",272,110)

}
