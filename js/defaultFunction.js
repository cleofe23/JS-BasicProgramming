/*function greetings(message='Hi!'){
    console.log(message);
}


greeetings();

greetings('Hello!');

function add(x,y){
    returnconsole.log(x + y);
    
}
//console.log(add(5,5));

add(5,5);

function say(message){
    message = typeof message !== 'undefined' ? message : 'Hi';
    console.log(message);
}

say();
*/

/*returning a Nan
function multiply(a,b){
    return a*b;
}

console.log(multiply(5,2));
console.log(multiply(5));
*/

function multiply(a,b){
   b = typeof b !== 'undefined' ? b : 1;
    return a * b;
}

console.log(multiply(5,5));

console.log(multiply(5));