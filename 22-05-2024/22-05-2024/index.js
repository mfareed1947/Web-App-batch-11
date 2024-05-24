const mobileObj = {
    id: 245242,
    model: "2022",
    company: "nokia",
    specification: {
        rom: "",
        ram: ""
    },
    price: 40000,
    color: ["red", "black"],
    getDisc: function () {
        return this.price / 100 * 40
    }
}
console.log(mobileObj)
//UPDATE AND ADD
// object.key = value

mobileObj.battery = "4000mh"
mobileObj.company = "samsung"

//UPDATE AND ADD
// object["key"] = value

mobileObj["fname"] = "wasi";
mobileObj["id"] = "69789";

// delete mobileObj.specification.rom;



var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: [5, 7],
    calcAnnual: function (percentIfDisc) {
        var bestPrice = plan1.price;
        var currDate = new Date();
        var thisMo = currDate.getMonth() + 1;
        for (var i = 0; i < plan1.discountMonths.length; i++) {
            if (plan1.discountMonths[i] === thisMo) {
                bestPrice = plan1.price * percentIfDisc;
                break;
            }
        }
        return bestPrice;
    }
};
var annualPrice = plan1.calcAnnual(0.85);

console.log(annualPrice)

// function Plan(name, price, space, transfer, pages) {
//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.transfer = transfer;
//     this.pages = pages;
// }

// // function GetData(name, price, space, transfer, pages) {
// //     this.name = name;
// // }


// var plan1 = new Plan("professional", 3.99, 100, 1000, 10);

// console.log(plan1, "plan1")


// const person = { fname: "John", lname: "Doe", age: 25 };
// person["fname"] = "wasi";
// person["id"] = "69789";
// console.log(person, "object")

// let txt = "";
// for (let keys in person) {
//     txt += person[keys] + " ";
// }