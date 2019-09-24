let local = {
  x: 500,
  y: 500,
  z: 0
}

const initialPoint1 = {
  x: 100,
  y: 500
}

const initialPoint2 = {
  x: 900,
  y: 500
}


document.addEventListener('keypress', (e) => {
  console.log(e.key)
  if (e.key === 'a'){
    local.x = local.x - 100;
  } else if (e.key === 'd'){
    local.x = local.x + 100
  }
  console.log('(' + local.x + ',' + local.y + ')');
  
})

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function drawLine(p1, p2){
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();
}

function clearCanvas(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

drawLine(initialPoint1, initialPoint2);

