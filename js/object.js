//type of array

//let array =[2023, 'BMW', '876li'];
//let car1 =[year, 2023, make: 'porche', model:'876li'];

/*object literal syntax*/
/*let car1 = {
   make: 'JIMNY',
   model: '9R',
   year: 2023,
   getPrice: function(){
    return 5000;
   },
   printDescription: function(){
    console.log(this.make + ' ' + this.model)
   }
}
*/

//console.log(typeof array);
//console.log(array);

//car1.printDescription();
//console.log(car1.year);
//console.log(car1.getPrice());

//console.log(car1['getPrice']);

//console.log(car1[1]);

//var car2 = {};
//car1.whatever = 'cleo';
//console.log(car2.whatever);

//var a = {
//myProperty: {b: 'hi'}
//};

//console.log(a.myProperty.b);

/*
var car3 = {
    myProperty: [
        {d: 'this'},
        {e: 'can'},
        {f: 'be really'},
        {g: 'confusing'},

    ]
}

console.log(car3.myProperty[0]);
console.log(car3.myProperty[1]);
console.log(car3.myProperty[2]);
console.log(car3.myProperty[3]);


var car4 = {};
console.log(typeof car3)


let carParking = [
    {year: 2021, make: 'BMW', model: '1234k'},
    {year: 2011, make: 'Porche', model: '9R'},
    {year: 2000, make: 'jimny', model: '17656gh'}
]
console.log(carParking[0]);
*/

let contact = {
    customer: [
        {firstName:'cleo', LastName: 'cabs', phoneNumber: ['(123) 000-0000', '(123) 432-9999'] },
    ],
    employees: [
        {firstName:'vik', LastName: 'cvok', phoneNumber: ['(123) 000-0000', '(123) 432-9999'] },
    ]
}

console.log(contact.customer[0]);