var state;
var default_color, success_color, failure_color;
var target_color;

var interpolation = 0;

var success_sound;
var failure_sound;

var success_image;
var failure_image;

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);

  success_sound = loadSound('sounds/success.mp3');
  failure_sound = loadSound('sounds/failure.mp3');

  imageMode(CENTER);

  success_image = loadImage('images/checkmark.svg');
  failure_image = loadImage('images/cross.svg');

  default_color = color(255, 255, 255);
  success_color = color(179, 204, 255);
  failure_color = color(255, 153, 153);

  target_color  = default_color;
}

function draw(){
  var backgroundColor = lerpColor(default_color, target_color, interpolation);
  background(backgroundColor);

  if(interpolation < 1){
    interpolation += 0.04;
  }

  if(state == "failure"){
    image(failure_image,width/2,height/2,200,200);
  }else if(state == "success"){
    image(success_image,width/2,height/2,200,200);
  }
}

function changeToSuccess(){
  success_sound.play();
  failure_sound.stop();
  target_color  = success_color;
  interpolation = 0;
  state = "success";
}

function changeToFailure(){
  failure_sound.play();
  success_sound.stop();
  target_color  = failure_color;
  interpolation = 0;
  state = "failure";
}

document.getElementById("success").addEventListener("click", changeToSuccess);
document.getElementById("failure").addEventListener("click", changeToFailure);
