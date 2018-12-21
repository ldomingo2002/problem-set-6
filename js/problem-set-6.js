/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
var p = document.getElementById('canvas1').getContext('2d');
p.font = '48px sans-serif';
p.strokeText('Hello, World!', 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {

var p = document.getElementById('canvas2').getContext('2d');
p.clearRect(0, 0, 1024, 512);

let heights = prompt('Pick a length for your rectangle');
let widths = prompt('Pick a width for your rectangle');
let xCoordinate = prompt('Pick an x-coordinate');
let yCoordinate = prompt('Pick a y-coordinate');

while(heights < 1 || widths < 1 || xCoordinate < 5 || yCoordinate < 5){
    alert('This rectangle will not fit on the canvas');
    break;
}

p.strokeRect(xCoordinate, yCoordinate, widths, heights);

}


/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {

var p = document.getElementById('canvas3').getContext('2d');
let input = prompt('Enter a color');
p.clearRect(0, 0, 1024, 512);

switch(input){
case "black":
  p.fillStyle = "black";
  p.fillRect(10, 10, 100, 50);
  break;
case "blue":
  p.fillStyle = "blue";
  p.fillRect(10, 10, 100, 50);
  break;
  case "green":
  p.fillStyle = "green";
  p.fillRect(10, 10, 100, 50);
  break;
  case "orange":
  p.fillStyle = "orange";
  p.fillRect(10, 10, 100, 50);
  break;
  case "purple":
  p.fillStyle = "purple";
  p.fillRect(10, 10, 100, 50);
  break;
  case "red":
  p.fillStyle = "red";
  p.fillRect(10, 10, 100, 50);
  break;
  case "yellow":
  p.fillStyle = "yellow";
  p.fillRect(10, 10, 100, 50);
  break;
  default: alert(`${input} is an unsupported color`);
}
}


/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
var p = document.getElementById('canvas4').getContext('2d');
p.clearRect(0, 0, 1024, 512);

let side1 = Number(prompt('Side 1:')) + 10;
let side2 = Number(prompt('Side 2:')) + 10;
let side3 = prompt('Side 3:');

let equation = Math.sqrt((side1 * side1) + (side2 * side2));

if (equation == side3){

  p.beginPath();
  p.moveTo(10, 10);
  p.lineTo(10, side1);
  p.lineTo(side2, side1);
  p.closePath();
  p.stroke();

}

}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
var p = document.getElementById('canvas5').getContext('2d');
p.clearRect(0, 0, 1024, 512);

let radiuus = prompt('Radius:');
let smile = radiuus * (7/10);
let eyes = radiuus * (1/10);

if (radiuus < 80){
  p.beginPath();
  p.arc(80, 80, radiuus, 0, Math.PI * 2, true);
  p.moveTo(115, 80);
  p.arc(80, 80, smile, 0, Math.PI, false);
  p.moveTo(70, 70);
  p.arc(65, 70, eyes, 0, Math.PI * 2, true);
  p.moveTo(100, 70);
  p.arc(95, 70, eyes, 0, Math.PI * 2, true);
  p.stroke();
  } else {
    alert(`Smiley won't fit on canvas.`);
}

}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
var p = document.getElementById('canvas6').getContext('2d');
p.clearRect(0, 0, 1024, 512);

let outerRadius = prompt('Outer Radius:');
let innerRadius = prompt('Inner Radius:');

p.beginPath();
p.arc(120, 100, innerRadius, 0, Math.PI * 2, true);
p.moveTo(80, 80);
p.arc(120, 100, outerRadius, 0, Math.PI * 2, true);
p.stroke();
}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
var p = document.getElementById('canvas7').getContext('2d');

p.beginPath();
p.moveTo(65, 10);
p.lineTo(145, 10);
p.lineTo(195, 70);
p.lineTo(195, 150);
p.lineTo(145, 200);
p.lineTo(65, 200);
p.lineTo(15, 150);
p.lineTo(15, 70);
p.closePath();
p.fillStyle = 'red';
p.stroke();

p.font = '60px sans-serif';
p.strokeText('STOP', 25, 130);
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
var p = document.getElementById('canvas8').getContext('2d');
p.clearRect(0, 0, 1024, 512);

let sideLength = Number(prompt('Height:'));
let limit = 100;

if (sideLength > 100){
  alert('The pyramid will not fit on the canvas');
} else {

  p.beginPath();
  p.moveTo(10, 502);
  // first row
  p.strokeRect(10, (512 - sideLength), sideLength, sideLength);
  p.strokeRect((sideLength + 10), (512 - sideLength), sideLength, sideLength);
  p.strokeRect(((sideLength * 2) + 10), (512 - sideLength), sideLength, sideLength);
  p.strokeRect(((sideLength * 3) + 10), (512 - sideLength), sideLength, sideLength);
  p.strokeRect(((sideLength * 4) + 10), (512 - sideLength), sideLength, sideLength);

  // second row
  p.strokeRect(((sideLength * 0.5) + 10), (512 - (sideLength * 2)), sideLength, sideLength);
  p.strokeRect(((sideLength * 0.5) + 10 + sideLength), (512 - (sideLength * 2)), sideLength, sideLength);
  p.strokeRect(((sideLength * 0.5) + 10 + (sideLength * 2)), (512 - (sideLength * 2)), sideLength, sideLength);
  p.strokeRect(((sideLength * 0.5) + 10 + (sideLength * 3)), (512 - (sideLength * 2)), sideLength, sideLength);

  // third row
  p.strokeRect(((sideLength) + 10), (512 - (sideLength * 3)), sideLength, sideLength);
  p.strokeRect(((sideLength * 2) + 10), (512 - (sideLength * 3)), sideLength, sideLength);
  p.strokeRect(((sideLength * 3) + 10), (512 - (sideLength * 3)), sideLength, sideLength);

  // fourth row
  p.strokeRect(((sideLength * 0.5) + 10 + sideLength), (512 - (sideLength * 4)), sideLength, sideLength);
  p.strokeRect(((sideLength * 0.5) + 10 + (sideLength * 2)), (512 - (sideLength * 4)), sideLength, sideLength);

  // fifth row
  p.strokeRect((((sideLength) + 10 + sideLength)), (512 - (sideLength * 5)), sideLength, sideLength);
  p.closePath();
  p.stroke();

}
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
var p = document.getElementById('canvas9').getContext('2d');
p.clearRect(0, 0, 1024, 512);

let houseColor = prompt('House color:');
let doorColor = prompt('Door color:');

if (houseColor == doorColor){
  alert('Please choose two different colors');
} else {
  p.beginPath();
  //house
  p.fillStyle = `${houseColor}`;
  p.fillRect(150, 502, 724, 256);
  p.fillRect(150, 246, 724, 256);
  p.stroke();

  //windows
  p.beginPath();
  p.fillStyle = 'lightBlue';
  p.fillRect(270, 590, 85, 85);
  p.fillRect(270, 350, 85, 85);
  p.fillRect(670, 590, 85, 85);
  p.fillRect(670, 350, 85, 85);

  p.strokeRect(270, 590, 85, 85);
  p.strokeRect(270, 350, 85, 85);
  p.strokeRect(670, 590, 85, 85);
  p.strokeRect(670, 350, 85, 85);
  p.stroke();

  //door
  p.beginPath();
  p.fillStyle = `${doorColor}`;
  p.fillRect(467, 578, 90, 180);
  p.strokeRect(467, 578, 90, 180);
  p.stroke();

  //roof
  p.beginPath()
  p.fillStyle = 'gray';
  p.moveTo(150, 247);
  p.lineTo(510, 40);
  p.lineTo(874, 247);
  p.closePath();
  p.stroke();

  //doorknob
  p.beginPath();
  p.fillStyle = 'yellow';
  p.arc(540, 680, 7, 0, Math.PI * 2, true);
  p.stroke();
}
}
