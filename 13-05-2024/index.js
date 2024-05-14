// const email = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");
const userName = document.getElementById("name");

// const heading = document.querySelector("#h1");
let emailVerify;

// email.addEventListener("change", (event) => {
//     emailVerify = event.target.value;
// })

userName.addEventListener("blur", (e) => {
    if (e.target.value.length < 6) {
        console.log(`your name ${e.target.value} is very short`)
    }
})


submitBtn.addEventListener("click", (event) => {
    console.log(emailVerify, "emailVerify")
    if (!emailVerify) {
        email.style.borderColor = "red";
        alert("enter something")
    }
})

// ! = undefined
// ! = null
// ! = ""


function fillCity() {
    var cityName;
    var zipEntered = document.getElementById("zip").value;
    switch (zipEntered) {
        case "60608":
            cityName = "Chicago";
            break;
        case "68114":
            cityName = "Omaha";
            break;
        case "53212":
            cityName = "Milwaukee";
            break;
        case "75850":
            cityName = "North karachi";
            break;
        default:
            cityName = "not present";
            document.getElementById("zip").style.borderColor = "red";
    }
    document.getElementById("city").value = cityName;
}
