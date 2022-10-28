function rectangleArea(x,y){
    var area = x * y;
    return area;
}

function squareArea(x){
    var area = x * x;
    return area;
}

function circleArea(x){
    var area = Math.PI * x * x;
    return area;
}

var result = rectangleArea(5,10,15,20);
console.log('Area of Rectangle: ',result);

var result = squareArea(5,10,15,20);
console.log('Area of Square: ',result);

var result = circleArea(5,10,15,20);
console.log('Area of Circle: ',result);