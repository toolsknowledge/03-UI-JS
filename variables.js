//string
//collection of characters called as "string"
//we will represent string in ""(double quotes), ''(single quotes) and ``(backtick) operator
//``(backtick) operator introduced in "ES6"
//``(backtick) operator used to drfine the "paragraph"

/*
    var sub = "ReactJS";
    var wish = `Welcome to ${sub}`;
    console.log( wish );                //Welcome to ReactJS
*/

//let keyword
//let keyword, used to declare the "variables"
//let keyword introduced in "ES6"

//differences between var and let keyword

/*
    let data = 100;
    let data = 200;
    console.log( data );            //let: error      //var: 200
    //var keyword allows the duplicate variables
    //let keyword won't allows the duplicate variables
*/


/*
    console.log( data );            //let: error    //var:undefined
    let data = 100;
    //getting undefined insted of error called as variable hoisting
    //variable hoisting raised because of var keyword
    //we can overcome variable hoisting by using let keyword
*/


/*
    //global variable
    let data = 100;
    {
        //local variable
        let data = 200;
    }
    console.log( data );    //let:100    //var:200
    //if any block code effecting global members called as global polluting issue
    //global polluting issue raised because of var keyword
    //we can overcome global polluting issue by using let keyword
*/


/*
    for(let i=0;i<5;i++){

    };
    console.log(i);     //let: error             //var: 5
    //var keyword breaks the scope rule
    //let keyword obeys the scope rule
*/





/*

                        var                     let

    var keyword introduced in ES1           let keyword introduced in ES6

    var keyword allows the duplicate        let keyword won't allows the duplicate
    variables                               variables

    var keyword breaks the scope            let keyword obeys the scope rule
    rule

    variable hoisting raised in var         variable hoisting won't happens here
    keyword

    global polluting issue raised here      we can overcome global polluting issue here


    var keyword called as global member     let member called as block scoped member

*/



//const
//const keyword used to declare the variables
//const keyword introduced in "ES6"
//we can't modify the const data

//const data = 100;
//data = 200;             //TypeError: Assignment to constant variable.


/*
    const arr = [10,20,30,40,50];
    //arr = [];
    arr[0] = 100;
    arr[4] = 500;
    arr[5] = 600;
    console.log( arr );         //[ 100, 20, 30, 40, 500, 600 ]
*/


const obj = {
    "key1":"Hello_1"
};
//obj = {};
obj.key1 = "Hello_2";
obj.key2 = "Hello_3";
console.log( obj );








































































