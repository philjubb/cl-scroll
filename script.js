/* fun little example using GreenSock's Draggable: https://www.greensock.com/draggable/ */

var content = document.getElementById("body");
var knob = document.getElementById("knob");

var increment = 51.428571428571429;

function hexToRgb(hex) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgb(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ')';
    }
    throw new Error('Bad Hex');
}

function getStyle(el, styleProp) {
    if (el.currentStyle)
        var y = el.currentStyle[styleProp];
    else if (window.getComputedStyle)
        var y = document.defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    return y;
}

var clcolours = ["#EB9599", "#BBB3D1", "#9D8FCB", "#51BE92", "#4EAEDE", "#7CCBEC", "#EDC993"]

function getColour(rotation) {
    rotation = rotation % 360;
    if (rotation < 0) rotation = rotation + 360;
    switch (true) {
        case (rotation < increment):
//            console.log(getStyle(content, 'background-color'), "and " + hexToRgb(clcolours[0]));
            content.style.backgroundColor = clcolours[0];
            break;
        case (rotation < increment * 2):
            content.style.backgroundColor = clcolours[1];
            //        console.log(rotation + " l<2 i");
            break;
        case (rotation < increment * 3):
            content.style.backgroundColor = clcolours[2];
            //    console.log(rotation + " l<3 i");
            break;
        case (rotation < increment * 4):
            content.style.backgroundColor = clcolours[3];
            //    console.log(rotation + " l<4 i");
            break;
        case (rotation < increment * 5):
            content.style.backgroundColor = clcolours[4];
            //    console.log(rotation + " l<5 i");
            break;
        case (rotation < increment * 6):
            content.style.backgroundColor = clcolours[5];
            //    console.log(rotation + " l<6 i");
            break;
        case (rotation < increment * 7):
            content.style.backgroundColor = clcolours[6];
            //    console.log(rotation + " l<7 i");
            break;
        default:
            break;
    }
}


var dragKnob = Draggable.create(knob, {
    type: "rotation",
    throwProps: false,
    onClick: function () {
        alert("clicked");
    },
    onDrag: function () {
        getColour(this.x);

    }
})[0];