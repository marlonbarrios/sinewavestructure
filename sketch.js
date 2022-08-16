
let settings = {
  rotationX:  60,
  rotationY:  0,
  radialRotation: 0,
  segments:10,
  numberLines: 50,
  radius: 5,
  waveDepth: 10,
  waveSpeed: 5,
  waveDepth2: 10,

}




function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  gui = new dat.GUI();
  gui.add(settings, 'numberLines', 1, 150).name("Number of lines")
  gui.add(settings, 'radius', 1, 20).name("Radius");
  gui.add(settings, 'rotationX', 1, 360).name("Rotate in X");

  gui.add(settings, 'rotationY', 1, 360).name("Rotate in Y");
  gui.add(settings, 'radialRotation', 0, 360).name("Radial Rotation");
  gui.add(settings, 'segments', 1, 360).name("Segments");
  gui.add(settings, 'waveDepth', 1, 100).name("waveDepth");
  gui.add(settings, 'waveDepth2', 1, 100).name("waveDepth2");
  gui.add(settings, 'waveSpeed', 1, 15).name("waveSpeed");


  gui.width = 300;
  gui.close();
  gui.remember(settings);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(30);
  noFill();
  stroke(255); 

  rotateY(settings.rotationY);
  rotateX(settings.rotationX);
  // rotateZ(frameCount * 0.2);
  for (var i = 0; i < settings.numberLines; i++) {
    
var r = map(sin(frameCount/2), -1, 1, 0, 255);
var g = map(i, 0, 50, 100, 200);
var b = map(cos(frameCount/2), -1, 1, 200, 100);

stroke(r, g, b);

rotate(settings.radialRotation);





    beginShape();
    for (var j = 0; j < 360; j+=  settings.segments ) {
      var rad = i * settings.radius;
      var x = rad * cos(j);
      var y = rad * sin(j);
      var z = sin(frameCount * settings.waveSpeed + i * settings.waveDepth2) * settings.waveDepth;
      vertex(x, y, z);
    }

    endShape(CLOSE);
  
  }
}
