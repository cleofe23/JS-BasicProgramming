

/*example 1***/
let firstName ='cleo';

console.log(`Hello ${firstName}!`);
/*example 2***/
let sentence = `This is really convenient.
    You probably will never want to do somethin quite like this.
    Thank you!`;

console.log(sentence);
/*example 3***/
let sentence2 = `This is really convenient.
    You probably will never want to do somethin quite like this.
        Thank you!`;

console.log(sentence2);

/*example 4***/
function getReasonCount(){ return 1;}

let interpolation = `Give me ${(getReasonCount()==1) ? 'one good reason' : 'few reaason'} to try this`;

console.log(interpolation);