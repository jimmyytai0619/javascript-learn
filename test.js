let arr4 = [100,80,95,75,80];

let a = arr4[0];
let b = arr4[2];
console.log("a :", a);
console.log("b :", b);

let arr5 = [1,2,3,4,5];

let map1 = arr5.map( n => n*2);
console.log("map 1 :", map1);

let filter1 = arr5.filter( a => a>3);
console.log("filter : ", filter1)

let info = {
    name : "jordan",
    height : 170,
    weight : 56,
    age : 26,
    interest : ["basketball", "badminton", "swimming"]
};

console.log(info);

info["interest"].push('bouldering');
console.log(info.interest);


// function
// early function
let add1 = function(a,b){
    return a+b;
};

console.log(add1(3,5));

//arrow

let add2 = (a,b) => {
    return a+b;
}

console.log( "add2 (6+ 6) = ", add2(6,6));

let sayHello = (name) => {
    console.log('My');
    console.log('Name');
    console.log('Is')
    console.log(name);

}

sayHello("Kobe");


let arr3 = [1,2,3,4,5];

let map3 = arr3.map((n) => {
    return n*3;
});

console.log("map 3 = ", map3);

//function (global(全域) vs local(区域))

//区域变数
let test1 = () => {
    var num1 = 12;
    return num1;
};

let test2 = () => {
    let num2 = 18;
    return num2;
};

console.log("num2 :", test2());

//var 整个function都可以看得到 挂户里都看的到
//let 只在一个挂户里有效

let test4 = () => {
    let num4 = 123;
 //       let message; // block scope
 //       var message; // function scope

    if(num4 > 0){
        message = "ok";
 //       let message = "ok"; //只在if 内有效
    } else {
        message = "no";
 //       let message = "no"; //只在else 内有效
    };

    console.log(message);
};

test4();

// for loop

let arr1 = [67,69,42,34,89,77,98,89];
let sum1 = 0;

 for(let i = 0; i <= arr1.length -1 ; i++){

    sum1 = sum1 + arr1[i];

 }

 console.log("arr1 total is :" + sum1);

 //***

for (let i = 6; i>0; i--){
    console.log("*".repeat(i));
}

//name
// 后面的i，5-i 是要repeat的个数
// 前面的i是用i值来决定要repeat的字眼是哪一个字

let teacherName = "Jack!";

for(let i = 0; i<teacherName.length; i++){
    console.log(teacherName[i].repeat(5-i));

};

//