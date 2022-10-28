var string = 'abcaaaaaacba';

for(i = 0; i<(string.length/2); i++){
    var one = string[i];
    var two = string[string.length-1-i];
    if(one != two){
        console.log('It is not a Palindrome');
        break;
    }
    else if(i = (string.length/2)){
        console.log('It is a Palindrome');
    }
    else{
        continue;
    }
}