// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 100, 100, 0, 255, 0);
}

function balloon(t, cx, cy, r, g, b){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  noStroke();
  fill(r, g, b);
  rect(cx, cy, w + p * 2, h + p * 2);
  triangle(cx+w-10, cy+(h+p*2), cx+(w+p*2), cy+(h+p*2), cx+w+p, cy+(h+p*5));
  fill(255);
  text(t, cx + p, cy + h);
}
