const pingPong = new Tone.PingPongDelay("4n", 0.2).toDestination();
const synth = new Tone.PolySynth().connect(pingPong);
synth.set({ detune: -1200 });
// play a chord
const synth2 = new Tone.PolySynth().connect(pingPong);
synth.volume.value  = -14
synth2.volume.value  = -14
synth2.set({ detune: -1200 });

let body, header, swoop, looop, img, img2, img3, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16
let counter1 = 0;
let plusser = 0;
let txt1;
let rm, rm2, rm3;
let seed = 100
let images = []
let clicked = false;

var foo = new p5.Speech(); // speech synthesi

function preload(){
  txt1 = loadStrings('Sizhan.txt');
  img = loadImage('2.png');
  img2 = loadImage('3.png');
  img3 = loadImage('5.png');
  img5 = loadImage('6.png');
  img6 = loadImage('7.png');
  img7 = loadImage('8.png');
  img8 = loadImage('9.png');
  img9 = loadImage('10.png');
  img10 = loadImage('11.png');
  img11 = loadImage('12.png');
  img12 = loadImage('13.png');
  img13 = loadImage('14.png');
  img14 = loadImage('15.png');
  img15 = loadImage('16.png');
  img16 = loadImage('17.png');


  images.push(img, img2, img3, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16)

}


function setup(){

let canvas = createCanvas(windowWidth, windowHeight, WEBGL)
canvas.parent('canvasHolder')

body = document.getElementById('this')
header = document.getElementById('header')
swoop = document.getElementById('this7')
looop = document.getElementById('this8')
pooper =  document.getElementById('this9')
ploof =  document.getElementById('this10')

}

function mousePressed() {
  Tone.Transport.start();
  Tone.Transport.scheduleRepeat(corrupt, 1);
  clicked = true;
}

function corrupt(){
synth.triggerAttackRelease([seed * floor(random(1, 2)), seed * floor(random(3, 5)), seed * floor(random(5, 8))], 1);
rm = RiTa.markov(2) //function within RiTa.js
rm.addText(txt1);
let sentences = rm.generate(4); //two(2) is minimum
let sentence = sentences.join('.');
foo.speak(sentence); // say something



rm2 = RiTa.markov(2) //function within RiTa.js
rm2.addText(txt1);
let sentences1 = rm2.generate(2); //two(2) is minimum
let sentence1 = sentences1.join('.');


rm3 = RiTa.markov(2) //function within RiTa.js
rm3.addText(txt1);
let sentences2 = rm3.generate(2); //two(2) is minimum
let sentence2 = sentences2.join('.');

  body.append(sentence)
  header.append(sentence1)
  swoop.append(sentence2)
  looop.append(sentence1)
  pooper.append(sentence1)
  ploof.append(sentence2)

plusser += 1
if (plusser >= 4){
  translate(-width/2, -height/2)
  synth2.triggerAttackRelease([seed * floor(random(8, 10)), seed * floor(random(11, 13)), seed * floor(random(14, 17))], 4);
  let boopy = images[counter1]
  boopy.resize(random(300, 600), random(300, 600));
  image(boopy, random(0, width - 200), random(0, height - 200))
  plusser = 0;
  counter1 ++
  if (counter1 > images.length -1){
    counter1 = 0
  }
}
}

function draw() {
if (clicked == true){
  push()
  rotateY(frameCount * 0.01);
  rotateX(0.5)
  box(100, 550, 100);
  push()
  translate(0, -90)
  box(400, 100, 100);
  pop();
  pop();
}
}
