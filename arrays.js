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


let arr1 = [1,2,3,4,5,6,7,8,9,10];
arr1.splice(4,2);
console.log(arr1);    //[1,2,3,4,7,8,9,10]

arr1.splice(4,1);
console.log(arr1);      //[1,2,3,4,8,9,10]

arr1.splice(6,1);
arr1.splice(0,1);
console.log(arr1);      //[ 2, 3, 4, 8, 9 ]







































