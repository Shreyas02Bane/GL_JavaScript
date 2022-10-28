/*
Write a program to do the below operations in js-

Create a date object of the date (6 Jun, 2021)
Create a date object of the year 2000 to do the next operation.
Check whether the given date(6 Jun,2021) is after or in the year 2000.
*/

var date = new Date(2021,5,6);
var date1 = new Date(2000,0,2);

if(date.getFullYear() == date1.getFullYear()){
    console.log('The first date is in the same year as date1');
}
else if(date.getFullYear() > date1.getFullYear()){
    console.log('The first date is after date1');
}
else{
    console.log('The first date is before date1');
}