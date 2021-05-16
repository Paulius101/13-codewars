function solution(str){
   const splitString = str.split("");
   const reverseString = splitString.reverse();
   const joinArray = reverseString.join("")
  return joinArray
}

    console.log(solution('world'), 'dlrow');
    console.log(solution('hello'), 'olleh');
    console.log(solution(''), '');
    console.log(solution('h'), 'h');

/*
function solution(str){
return str.split('').reverse().join('');  
}
*/