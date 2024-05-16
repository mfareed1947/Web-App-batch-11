const userName = document.getElementById("userName")
const email = document.getElementById("email")
const phone = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const courses = document.getElementById("courses");
const submit = document.getElementById("submit");

const gender = document.getElementsByClassName("gender");

let userName1, email1, phone1, password1, courses1;


userName.addEventListener("input", (event) => {
    if (event.target.value.length > 4) {
        userName1 = event.target.value
    }
})
userName.addEventListener("blur", (event) => {
    if (event.target.value.length < 4) {
        userName.style.borderColor = "rgb(206, 39, 39)";
        document.getElementById("name-error").style.display = "block";
    } else {
        userName1 = event.target.value
        userName.style.borderColor = "green";
        document.getElementById("name-error").style.display = "none";
    }
})
phone.addEventListener("input", (event) => {
    if (event.target.value.length === 11) {
        phone1 = event.target.value
    }
})
phone.addEventListener("blur", (event) => {
    if (event.target.value.length < 11 || event.target.value.length > 11) {
        phone.style.borderColor = "rgb(206, 39, 39)";
        document.getElementById("phone-error").style.display = "block";
    } else {
        phone1 = event.target.value
        phone.style.borderColor = "green";
        document.getElementById("phone-error").style.display = "none";
    }
})



submit.addEventListener("submit", (e) => {

})

courses.addEventListener("input", (event) => {
    courses1 = event.target.value
})

password.addEventListener("input", (event) => {
    if (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/.test(event.target.value)) {
        password1 = event.target.value
        password.style.borderColor = "green";
        document.getElementById("password-error").style.display = "none";
    } else {
        password.style.borderColor = "rgb(206, 39, 39)";
        document.getElementById("password-error").style.display = "block";
    }
    console.log(event.target.value)
})