const firstrectangle = [{
    x:100,
    y:100,
    width:100,
    height:100,
},
{
    x:175,
    y:175,
    width:100,
    height:100,
},
{
    x:50,
    y:50,
    width:100,
    height:100,
},
{
    x:200,
    y:300,
    width:100,
    height:100,
}]
const secondrectangle = [{
    x:150,
    y:150,
    width:150,
    height:150,
},
{
    x:150,
    y:150,
    width:150,
    height:150,
},
{
    x:250,
    y:50,
    width:150,
    height:150,
},
{
    x:150,
    y:50,
    width:100,
    height:150,
}]

function drawRectangles(index) //Draws rectangles
{
    var canvas = document.getElementById("myCanvas");
    var canvasContext = canvas.getContext("2d");
    canvasContext.beginPath();
    canvasContext.rect(firstrectangle[index].x, firstrectangle[index].y, firstrectangle[index].width, firstrectangle[index].height);
    canvasContext.strokeStyle = "#FF0000";
    canvasContext.stroke();
    canvasContext.beginPath();
    canvasContext.rect(secondrectangle[index].x, secondrectangle[index].y, secondrectangle[index].width, secondrectangle[index].height);
    canvasContext.strokeStyle = "#00FF00";
    canvasContext.stroke();
    var compVal = document.getElementById("comparisonValue");
    compVal.innerHTML = intersect(firstrectangle[index],secondrectangle[index]);
}
function intersect(a, b) { //Checks if two rectangles intersect
    var rectA = { //Uses object from firstrectangle array to determine values where rectangle has its borders
        left: a.x,
        top: a.y,
        right: a.width + a.x,
        bottom: a.height + a.y
      };
    var rectB = { //Uses object from secondrectangle array to determine values where rectangle has its borders
        left: b.x,
        top: b.y,
        right: b.width + b.x,
        bottom: b.height + b.y
    };
    return (rectA.left <= rectB.right && //Compares the values of two rectangles borders to see if they intersect. Returns true if they do and false if they don't
            rectB.left <= rectA.right &&
            rectA.top <= rectB.bottom &&
            rectB.top <= rectA.bottom)
  }

  var i = 0;
  function nextComparison() //Clears canvas and draws new rectangles for comparison
  {
    if (i < firstrectangle.length) { //If there are rectangles left to compare, compare. Else return to beginning
        var canvas = document.getElementById("myCanvas");
        var canvasContext = canvas.getContext("2d");
        canvasContext.clearRect(0,0,canvas.width,canvas.height);
        drawRectangles(i);
        i++;
    }
    else{
        i=0
        nextComparison();
    }
  }
