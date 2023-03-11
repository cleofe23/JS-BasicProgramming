var counter = (function(){
    //private stuff.
    let count = 0;

    function print(message){
        console.log(message + '---' + count);
    }

    return {
        value: count,
        increment: function(){
            count += 1;
            print ('After Increment');
        },
        reset: function(){
            print('Before Reset:');
            count = 0;
            print('After Reset');

        }
    }

})(); //IiFE Immediately Invoked FUNCTION EXPRESSION


//console.log(counter.count);
//console.log(counter.value);
//console.log(counter.increment);
//console.log(counter.increment);
//console.log(counter.increment);


//Global Namespace why we dont want to define a variable in the GLobal namespace.