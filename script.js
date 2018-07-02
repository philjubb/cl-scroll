/* fun little example using GreenSock's Draggable: https://www.greensock.com/draggable/ */

var content = document.getElementById("content");
var knob = document.getElementById("knob");
var maxScroll = content.scrollHeight - content.offsetHeight;
var sections = 9;



var dragKnob = Draggable.create(knob, {
  type:"rotation",
  bounds:{minRotation:0, maxRotation:360},
  onDrag: function() {
    var scrollPos = map(this.x, 0, 360, 0, maxScroll)
    console.log(scrollPos);
    content.scrollTop = scrollPos;
  }
})[0];

content.addEventListener("scroll", requestUpdate);
update();

function update() {
  var rotation = map(content.scrollTop, 0, maxScroll, 0, 360);
  console.log(rotation);
  TweenLite.set(knob, {rotation:rotation})
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


