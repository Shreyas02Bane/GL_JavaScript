function wrapper(){
const rect=(function(x,y){
    return x*y;
}(5,10));

console.log('Area of Rectangle = ',rect);

const sqr=(function(x){
    return x*x;
}(10));

console.log('Area of Square = ',sqr);

const circle = (function(r){
    return Math.PI*r*r;
}(7));

console.log('Area of Circle = ',circle);

}
wrapper();