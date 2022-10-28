var arr = [15, 25, 76, 89, 31, 12, 7, 55];

//arr.sort();

console.log(arr);

arr.sort(function(x,y){
    //console.log(x,',',y);
    return x-y;
})

console.log(arr);