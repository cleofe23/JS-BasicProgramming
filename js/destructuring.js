

let a,b,c,d,e;

let names = ['cleo', 'mark', 'laine', 'luffy', 'jhon'];

[a,b,c,d,e] = names;
/*
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
*/
/*
let others;
[a,b, ...others] = names;
console.log(a);
console.log(b);
console.log(others);
*/
let year, model;
({year,model} = {
    make: 'Porche',
    model: '9R',
    year:2021,
    value:5000,
});

console.log(year);
console.log(model);