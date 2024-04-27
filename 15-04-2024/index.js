// var firstNames = ["BlueRay", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//     for (var j = i; j < lastNames.length; j++) {
//         document.write(j + " ");
//     }
//     document.write("<br>" + i)
// }
// console.log(fullNames)


// "BlueRay Zzz"
// "BlueRay Burp"
// "BlueRay Dogbone"
// "BlueRay Droop"

// "Upchuck Zzz"
// "Upchuck Burp"
// "Upchuck Dogbone"
// "Upchuck Droop"


// var fruitArr = ["MANGO", "APPLE", "BANANA", "ORANGE", "PEACH"]
// var userInput = prompt("Enter a fruit name")
// for (let index = 0; index < fruitArr.length; index++) {

//     if (userInput.toUpperCase() === fruitArr[index]) {
//         console.log("fruit is present")
//     } else {
//         console.log("fruit is not present")
//     }
// }


// var userName = "Muhammad Fareed";
// console.log(userName.length)

// var userName = "Muhammad Fareed";
// var data = userName.slice(2, 6)
// console.log(data)

// var cityToCheck = "karachi";

var firstChar = cityToCheck.slice(0, 1);
var otherChars = cityToCheck.slice(1);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();
var cappedCity = firstChar + otherChars;
console.log(cappedCity)

//asdfghjkl
// var str = prompt("Enter some text");
// var numChars = str.length;// 8

// for (var i = 0; i < numChars; i++) {
//     if (str.slice(i, i + 4) === " ") { //0 , 4
//         console.log("No double spaces!");
//         break;

//     } else {
//         console.log("double spaces!");
//     }
// }
