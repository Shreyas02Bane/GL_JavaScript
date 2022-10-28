/*
Write a program to do the below operations-

Consider the given values for the below operations 5,78,23,41,67,84,22,10,1.
From the given values find the minimum and maximum number out of them without using sorting or sort method and also without looping over them.
Write a method to find the mean value(in decimal point if any) of the above numbers and print the ceil of that value.
*/

var arr = [5,78,23,41,67,84,22,10,1];

console.log('Max : ',Math.max.apply(null,arr));
console.log('Min : ',Math.min.apply(null,arr));

var mean = function(arr1){
    var sum = 0;
    for(i=0; i < arr1.length; i++){
        sum+=arr1[i];
    }
    return sum/arr1.length;
}

console.log(Math.ceil(mean(arr)));