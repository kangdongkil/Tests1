var img;

var tri;
function setup(){
  createCanvas(400,400);
  x=[];
  y=[];

tri=[];
}
function draw(){
  var r=Math.random();
  tri[0]=[200,10,220+mouseX*r*0.1,170+mouseY*r*0.1,390,150];
      tri[1]=[200,10,220+mouseX*r*0.1,170+mouseY*r*0.1,180+mouseX*r*0.1,210+mouseX*r*0.1];
      tri[2]=[390,150,220+mouseX*r*0.1,170+mouseY*r*0.1,180+mouseX*r*0.1,210+mouseX*r*0.1];
      tri[3]=[200,10,10,200,180+mouseX*r*0.1,210+mouseX*r*0.1];
      tri[4]=[390,150,210,390,180+mouseX*r*0.1,210+mouseX*r*0.1];
      tri[5]=[10,200,210,390,180+mouseX*r*0.1,210+mouseX*r*0.1];

  background(0);
  fill(255,0,0);
  triangle(mouseX,mouseY-50,mouseX-45,mouseY+50,mouseX+45,mouseY+50);
  tri[0][4];

  for(var i=0; i<6; i=i+1){
    fill(50+Math.random(),50+Math.random(),200+50+Math.random());
    triangle(tri[i][0],tri[i][1],tri[i][2],tri[i][3],tri[i][4],tri[i][5]);

  }
  fill(255,255,0);
    triangle(0,mouseY-50,mouseX-45,mouseY+50,mouseX+45,mouseY+50);


}
function dragon(x,y){
  fill(50,255,50);
  rect(x-15,y-30,30,50);
  fill(200,140,50);
  rect(x-15,y-60,10,30);
}
