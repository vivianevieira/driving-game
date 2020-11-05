var data = {
  location: {}
};

var $f1Car = document.querySelector('.f1-car');

function startInterval() {
  setInterval(startCar, 16);
}

var count = 0;

function startCar() {
  var newLeftX = count + 10 + 'px';
  $f1Car.style.left = newLeftX;
  data.location.left = newLeftX;
  count += 10;
}

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 32) {
    startInterval();
  }
});
