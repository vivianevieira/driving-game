var data = {
  direction: 'east',
  x: '',
  y: ''
};

var $f1Car = document.querySelector('.f1-car');
var count = 0;

function startCar() {
  var leftXposition = count + 10 + 'px';
  $f1Car.style.left = leftXposition;
  count += 10;
  if (count > 1800) {
    clearInterval(car);
  }
}

var car;
function startInterval() {
  car = setInterval(startCar, 16);
}

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 32) {
    startInterval();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 39) {
    turnRight();
  } else if (e.keyCode === 37) {
    turnLeft();
  }
});

function turnRight() {
  if (data.direction === 'east') {
    $f1Car.className = 'f1-car direction-south';
    data.direction = 'south';
  } else if (data.direction === 'south') {
    $f1Car.className = 'f1-car direction-west';
    data.direction = 'west';
  } else if (data.direction === 'west') {
    $f1Car.className = 'f1-car direction-north';
    data.direction = 'north';
  } else if (data.direction === 'north') {
    $f1Car.className = 'f1-car';
    data.direction = 'east';
  }
}

function turnLeft() {
  if (data.direction === 'east') {
    $f1Car.className = 'f1-car direction-north';
    data.direction = 'north';
  } else if (data.direction === 'north') {
    $f1Car.className = 'f1-car direction-west';
    data.direction = 'west';
  } else if (data.direction === 'west') {
    $f1Car.className = 'f1-car direction-south';
    data.direction = 'south';
  } else if (data.direction === 'south') {
    $f1Car.className = 'f1-car';
    data.direction = 'east';
  }
}
