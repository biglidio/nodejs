const a = 12;
console.log(a); // 12

// a = 3; // TypeError: Assignment to constant variable.

//------------------------------------------------------

function sum(x){
    var y = x + 1;
    return y;
}
console.log(sum(3)); // 4
//console.log(sum(y)); // y is not defined

//------------------------------------------------------

let number = 0;
if (true) {
    let number = 7;
    console.log(number); // 7
}
console.log(number); // 0

//------------------------------------------------------

let name = "Lucas";
{
    let name = "Tom";
    console.log(name); // Tom
}
console.log(name); // Lucas

//------------------------------------------------------

{
    function hello(){
        console.log('Hello!');
    }
    hello(); // Hello!
    {
        function hello(){
            console.log('Hi!');
        }
        hello(); // Hi!
    }
    hello(); // Hello!
}