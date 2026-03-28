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
    num2 = 18;
    return num2;
};

console.log("num2 :", num2);