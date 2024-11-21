let ship, tatooine, hoth, kashyyyk, mustafar, deathstar;
let numStars = 800;
let speed;
let stars = [];
let eX, eY, eSize, planetNum;
let lightSpeed = false;

//let forceTheme;  // for audio

function preload() {
  // Load images from the assets folder
  ship = loadImage("Something 1.png");
  tatooine = loadImage("Tatooine.png");
  hoth = loadImage("Hoth.png");
  kashyyyk = loadImage("Kashyyyk.png");
  mustafar = loadImage("Mustafar.png");
  deathstar = loadImage("DeathStar.png");
  
  // Load sound
  //soundFormats('mp3');
  //forceTheme = loadSound("assets/Force Theme.mp3");
}

function setup() {
  createCanvas(800, 800);
  imageMode(CENTER);
  
  for (let i = 0; i < numStars; i++) {
    stars.push(new Star());
  }
  
  planetNum = 1;
  eX = -142;
  eY = -33;
  eSize = 350;
  lightSpeed = false;
  
  //forceTheme.play();  // Play background sound
}

function draw() {
  background(0);
  speed = 10;
  if (mouseIsPressed) {
    speed = 50;
  }
  
  translate(width / 2, height / 2);
  
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
    
    if (keyIsPressed) {
        speed = 200;
        lightSpeed = true;
      
    } else {
      lightSpeed = false;
    }
  }
  
  noStroke();
  strokeWeight(3);
  stroke(40);
  
  if (!lightSpeed) {
    planets();
  }
  newPlanet();
  image(ship, 25, 100);
  updatePlanet();
}

function updatePlanet() {
  eX -= 1;
  if (eX % 3 === 0) {
    eY--;
  }
  eSize += 1.3;
  if (mouseIsPressed) {
    eX -= 4;
    eY -= 4 / 3;
    eSize += 4;
  }
}

function newPlanet() {
  if (eX <= -2048) {
    eX = 0;
    eY = 70;
    eSize = 50;
    nextPlanet();
  }
}

function planets() {
  switch (planetNum) {
    case 1:
      image(tatooine, eX, eY, eSize, eSize);
      break;
    case 2:
      image(hoth, eX, eY, eSize, eSize);
      break;
    case 3:
      image(kashyyyk, eX, eY, eSize, eSize);
      break;
    case 4:
      image(mustafar, eX, eY, eSize, eSize);
      break;
    case 5:
      image(deathstar, eX, eY, eSize + 100, eSize + 100);
      break;
    default:
      planetNum = 1;
      break;
  }
}

function nextPlanet() {
  planetNum++;
}

function keyReleased() {
  eX = 0;
  eY = 70;
  eSize = 50;
  planetNum++;
}

class Star {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
  }

  update() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  show() {
    fill(255);
    noStroke();
    
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);
    
    let r = map(this.z, 0, width, 16, 0);
    ellipse(sx, sy, r, r);
    
    let px = map(this.x / this.pz, 0, 1, 0, width);
    let py = map(this.y / this.pz, 0, 1, 0, height);
    
    stroke(255);
    strokeWeight(r);
    line(px, py, sx, sy);
    
    this.pz = this.z;
  }
}
