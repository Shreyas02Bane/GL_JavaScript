/*
Store the given numbers in an array 33,45,2,88,36,17,81,50,28.

Sort and print the original array  in lexicographical order.
Sort and print the number in the ascending order and print them.
Add two more numbers to the array 105,501.
Sort the array again and make an array of the largest five numbers from the above array using array’s methods.
*/

var arr = [33,45,2,88,36,17,81,50,28];

console.log(arr.sort());

console.log(arr.sort(function(x,y){
    return x-y;
}));

arr.push(105,501);

console.log(arr);

arr.sort(function(x,y){
    return x-y;
});

arr.splice(0,arr.length-5);
console.log(arr);
