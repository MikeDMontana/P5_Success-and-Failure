var state;
var default_color, success_color, failure_color;
var current_color, target_color;

var interpolation = 0;

var success_sound;
var failure_sound;

var success_image;
var failure_image;

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);

  success_sound = loadSound('sounds/success.mp3');
  failure_sound = loadSound('sounds/failure.wav');

  imageMode(CENTER);

  success_image = loadImage('images/checkmark.svg');
  failure_image = loadImage('images/cross.svg');

  default_color = color(255, 255, 255);
  success_color = color(179, 204, 255);
  failure_color = color(255, 153, 153);

  current_color = default_color;
  target_color  = default_color;
}

function draw(){
  var backgroundColor = lerpColor(current_color, target_color, interpolation);
  background(backgroundColor);

  if(interpolation < 1){
    interpolation += 0.03;
  }

  if(state == "failure"){
    image(failure_image,width/2,height/2,200,200);
  }else if(state == "success"){
    image(success_image,width/2,height/2,200,200);
  }
}

function changeToSuccess(){
  success_sound.play();
  target_color  = success_color;
  interpolation = 0;
  state = "success";
}

function changeToFailure(){
  failure_sound.play();
  target_color  = failure_color;
  interpolation = 0;
  state = "failure";
}

document.getElementById("success").addEventListener("click", changeToSuccess);
document.getElementById("failure").addEventListener("click", changeToFailure);
