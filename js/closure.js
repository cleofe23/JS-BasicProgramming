function sayHello(name){
    return function(){
        console.log('Howdy ' + name + '!')
    }
}
let cleo = sayHello('cleo');


let mark = sayHello('Mark');
let laine = sayHello('laine');
let jhon = sayHello('jhon');


cleo();
mark();
laine();
jhon();

