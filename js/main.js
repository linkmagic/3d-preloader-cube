var rotateY = 0,
    rotateX = 0;

function cudeRotation() {
  rotateX += 1;
  rotateY += 1;
  document.querySelector('.cube').style.transform =
    'rotateY(' + rotateY + 'deg)'+
    'rotateX(' + rotateX + 'deg)';
}

function getScreenResolution() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

(function setCenterScrnLoader() {
  var cudeLoader = document.getElementById('idLoader');
  var titleLoader = document.getElementById('idLoaderTitle');
  var scrRes = getScreenResolution();

  cudeLoader.style.left = (scrRes.width / 2 - 16) + 'px';
  cudeLoader.style.top = (scrRes.height / 2 - 16) + 'px';
  titleLoader.style.left = (scrRes.width / 2 - 50) + 'px';
  titleLoader.style.top = (scrRes.height / 2 + 45) + 'px';
})();


(function() {
  setInterval(cudeRotation, 5);
})();
