function removeChar(str){
const galutinisVar = str.substring(1, str.length-1);
return galutinisVar
}

console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');

/*
Kitas var su return str.slice(1, -1)
.substring grazina .str tarp pazymetu poziciju (tai galetu is principo buti ne tik pirma ir paskutine)
*/