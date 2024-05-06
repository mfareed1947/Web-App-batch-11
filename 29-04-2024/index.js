// //global variable
// var user = "fareed";

function print() {
  //local variable
  let inputData = true;
  function output() {
    console.log(inputData);
  }
  output();
}
print();
// function hello(params) {

// }

// switch ("Sat") {
//     case "Sat":
//         console.log("Whoopee");
//         break;
//     case "Sun":
//         console.log("Whoopee");
//         break;
//     case "Fri":
//         console.log("TGIF!");
//         break;
//     default:
//         console.log("Shoot me now!");

// }

// let trafficLight = "yellow";
// let message = ""

switch (trafficLight) {
    case "red":
        message = "Stop immediately.";
        break;
    case "yellow":
        message = "Prepare to stop.";
        break;
    case "green":
        message = "Proceed or continue driving.";
        break;
    default:
        message = "Invalid traffic light color.";
}

console.log(message)

// function outer() {
//     const userName = "Fareed";

//     function inner() {
//         return userName;
//     }

//     const res = inner()
//     console.log(res)
// }
// outer()

// VAR
// 1. REDECLEAR
// 2. UPDATE

//LET block-scoped
// 1. REDECLEAR NOT ALLOWED
// 2. UPDATE

//CONST
// 1. REDECLEAR NOT ALLOWED
// 2. UPDATE NOT ALLOWED

// Output: Proceed or continue driving.
// let q = "q";
// q = "qqq";
// console.log(q)

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log(array3)

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);

// const array1 = [1, 30, 4, 21, 100000];
// // [1, 10000 , 21 , 30 , 4]
// array1.sort((a, b) => (
//     a - b
// ));
// console.log(array1);

// let inside = (params) => {
//     var user = "eder";
//     var res = user.split('')
//     return res

// }
// console.log(inside())

// let inside = () => "eder".split('')
// console.log(inside())

// const array1 = [2, 4, 6];

// array1.forEach((x, i) => console.log(x * 2, i));

// const array2 = [2, 4, 6];

// // Pass a function to map
// const map1 = array2.map((elem) => elem * 2);
// console.log(map1)

// var newArr = ["ali", "raza", "ahmed", "maaz", "john", "hamza", "haris"]
// // newArr.splice(-3, 1, "wasi")
// newArr.splice(1, 2)
// console.log(newArr)

// var newArr = ["dog", "cat", "fly", "bug", "bird", "fish"]

// var arr = newArr.slice(1, 4)

// console.log(arr, "newArr")
