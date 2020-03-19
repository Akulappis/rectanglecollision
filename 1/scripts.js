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