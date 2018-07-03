/* fun little example using GreenSock's Draggable: https://www.greensock.com/draggable/ */

var content = document.getElementById("dialcasing");
var knob = document.getElementById("knob");
var maxScroll = content.scrollHeight - content.offsetHeight;
var sections = 9;

var increment=51.428571428571429;

function getColour(rotation){
rotation=rotation % 360;  
if(rotation<0) rotation=rotation+360;
//if(rotation>360) rotation=rotation-360;
  switch (true) {
    case (rotation < increment):
    console.log(rotation + " less than increment");
        break;
    case (rotation < increment*2):
    console.log(rotation + " l<2 i");
        break;
    case (rotation < increment*3):
    content.style.backgroundColor="blue";
    console.log(rotation + " l<3 i");
        break;
    case (rotation < increment*4):
    content.style.backgroundColor="yellow";
    console.log(rotation + " l<4 i");
        break;
    case (rotation < increment*5):
    content.style.backgroundColor="green";
    console.log(rotation + " l<5 i");
        break;
    case (rotation < increment*6):
    console.log(rotation + " l<6 i");
        break;
    case (rotation < increment*7):
    console.log(rotation + " l<7 i");
        break;
    default:
        break;
}
}


var dragKnob = Draggable.create(knob, {
  type:"rotation",
  throwProps:true,
  onClick:function() {
		alert("clicked");
	},
  onDrag: function() {
 //   var scrollPos = map(this.x, 0, 360, 0, maxScroll)
 //   console.log(maxScroll + " and " + scrollPos);
 //   content.scrollTop = scrollPos;
    getColour(this.x);

  }
})[0];

//content.addEventListener("scroll", requestUpdate);
//update();
/*
function update() {
  var rotation = map(content.scrollTop, 0, maxScroll, 0, 360);
  console.log(rotation);
  TweenLite.set(knob, {rotation:rotation})
  getColour(rotation);
  requestId = null;
}

function requestUpdate() {
  if (!requestId) {
    requestId = requestAnimationFrame(update);
  }
}




function norm(value, min, max) {
		return (value - min) / (max - min);
	}

	function lerp(norm, min, max) {
		return (max - min) * norm + min;
	}

	function map(value, sourceMin, sourceMax, destMin, destMax) {
		return lerp(norm(value, sourceMin, sourceMax), destMin, destMax);
	}
*/

