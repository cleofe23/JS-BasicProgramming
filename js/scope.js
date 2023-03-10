



// block of code

//let x = 1;

//while(x < 10) {
   // console.log(x++);
  //  if(x == 7 ) break;
//}

/*let a = 'first';

function scopeTest(){
    console.log(a);
}

scopeTest();
*/
/*
let a = 'first example of scope outside of a codeblock';

function scopeTest(){
    console.log(a);
    if(a !=''){
        console.log(a);
    }
}

scopeTest();
*/

let a = 'first example of scope outside of a codeblock';

function scopeTest(){
    console.log(a);
    a = 'second example value of the variable';
    let b = 'third example variable inside of the function scope';
    if(a !=''){//code block scope
        console.log(a);
        console.log('inside if: ' + b) // third value being printed out.
        let c ='third example of scope inside of a function scope and an if statement code block';
    }
    
}

scopeTest();
console.log(a); // fourt value that we are sseeing on the console.