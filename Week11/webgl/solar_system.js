theta=0;

var delta=0;
var beta=0;

function setup() { 
  createCanvas(400, 400,WEBGL);
  
  img=loadImage("https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.solarsystemscope.com%2Fnexus%2Fcontent%2Fplanet_textures%2Ftexture_earth_clouds.jpg&f=1");
  moon=loadImage("https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fsecure.static.tumblr.com%2Fc2af89596e51a7784467ed168a72639c%2Fdoufvzh%2FDfmmsun7g%2Ftumblr_static_texture-moon.jpg&f=1");
  

} 

function draw() { 
 
  
 camera(100*cos(theta*2),0,100*sin(theta*2));
 
  background(0);
  
  // pointLight(255,255,255,0,500,-700);

  ambientLight(10,10,10);
  directionalLight(255,255,255,1,0.8,1);
  
  push();
  rotateZ(45);
  rotateY(theta);
  texture(img);
  // specularMaterial(255,0,0,100);
  
  sphere(70);
  pop();
  
  theta +=0.005;
  
  rotateY(beta);
  rotateX(beta/100);
  
  push();
  translate(150,0,0);
  rotateY(delta);
  texture(moon);
  sphere(10);
  pointLight(255,255,255,0,0,0);
  delta +=0.05;
  pop();
  
  beta+=0.05;