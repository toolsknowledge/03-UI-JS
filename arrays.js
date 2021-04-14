//Array
//collection of indexed elements called as Array
//index starts from "0"
//"ES6" functions

//map()
//filter()
//reduce()
//find()
//findIndex()
//delete
//slice()
//splice()


/*
    //map()
    //map() function, used to manipulate the each and every array element
    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return element*100;
        })
    );              //[ 100, 200, 300, 400, 500 ]


    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return "$ "+element;
        })
    );
*/


/*
    //filter()
    //filter() function, used to apply the conditions on array.
    console.log(
        [100,200,300,400,500].filter((element,index)=>{
            return element>=300;
        })
    );              //[ 300, 400, 500 ]

    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return element*1000;
        }).filter((element,index)=>{
            return element>=1000;
        })
    );          //[ 1000, 2000, 3000, 4000, 5000 ]
*/


/*
    //reduce()
    //reduce() function, used to find the "sum" of array elements
    console.log(
        [1,2,3,4,5].reduce((num1,num2)=>{
            return num1+num2;
        })
    );    //15

    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return element*1000;
        }).filter((element,index)=>{
            return element>=1000;
        }).reduce((num1,num2)=>{
            return num1+num2;
        })
    );    //15000
*/


/*
    //find()
    //it is used to check element existence
    console.log(
        [1,2,3,4,5].find((element,index)=>{
            return element === 500;
        })
    );
    //undefined
    //if element exist, it will return same element


console.log(
    [100,200,300,400,500].find((element,index)=>{
        return element === 300;
    })
);
*/


/*
    let arr1 = [1,2,3,4,5,6,7,8,9,10];
    arr1.splice(4,2);
    console.log(arr1);    //[1,2,3,4,7,8,9,10]

    arr1.splice(4,1);
    console.log(arr1);      //[1,2,3,4,8,9,10]

    arr1.splice(6,1);
    arr1.splice(0,1);
    console.log(arr1);      //[ 2, 3, 4, 8, 9 ]
*/



/*
    //findIndex()
    //it is used to know the "index" of a particular element
    let arr = [10,20,30,40,50,60,70,80,90,100];

    console.log(
        arr.findIndex((element,index)=>{
            return element === 50;
        })
    );      //4


    console.log(
        arr.findIndex((element,index)=>{
            return element === 100;
        })
    );      //9


    //delete "60"
    arr.splice(arr.findIndex((element,index)=>{
        return element === 60;
    }),1);
    console.log(arr);


    arr.splice(arr.findIndex((element,index)=>{
        return element === 30;
    }),1);
    console.log( arr );
*/



/*
    //delete
    //"delete" property, used to "delete" the element from "array"
    //delete property, deletes the "element" and won't release the "memory"
    let arr = [10,20,30,40,50,60,70,80,90,100];
    console.log( arr.length );    //10

    delete arr[4];
    console.log( arr.length );      //10


    delete arr[2];
    console.log( arr.length );      //10
*/


/*
    //slice
    //slice function, used to pick the particular element from array.
    let arr = [10,20,30,40,50,60,70,80,90,100];
    console.log( arr.slice(4,6) );                      //[ 50, 60 ]
    console.log( arr.slice(3,6) );                      //[ 40, 50, 60 ]
    console.log( arr.slice(0,1) );                      //[ 10 ]
    console.log( arr.slice(9,10) );                     //[ 100 ]
    console.log(
        [ ...arr.slice(5,10),...arr.slice(0,5) ].reduce((firstValue,nextValue)=>{
            return firstValue+nextValue;
        })
    );    //550
*/


/*
    //sort()
    //ascending order / decending order

    // arg1-arg2   (ascending order)
    // arg2-arg1   (decending order)

    let arr1 = [10,5,4,2,1,8,7];


    //2nd min element
    console.log(
        arr1.sort((arg1,arg2)=>{
            return arg1-arg2;
        })[1]
    );     //2


    //2md max element
    console.log(
        arr1.sort((arg1,arg2)=>{
            return arg2-arg1;
        })[1]
    );    //8
*/



/*
    //some()
    //if atleast one element satisfies condition, then it will return "true" otherwise "false"
    console.log(
        [1,2,3,4,5].some((element,index)=>{
            return element >= 5;
        })
    );          //true
*/


//every()
//if all elements satisfies the condition then it will return true otherwise false
console.log(
    [10,20,30,40,50].every((element,index)=>{
        return element>=10;
    })
);     //true






















































































