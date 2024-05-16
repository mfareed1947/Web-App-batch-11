function expandLoris() {
    const expandedParagraph = "Hi, I am Muhammad Fareed";
    document.getElementById("slowLoris").innerHTML = expandedParagraph;
}

// const testing = document.getElementById("slowLoris").innerHTML;
// const testing = document.getElementById("slowLoris").innerText;
// const testing = document.getElementById("slowLoris").outerHTML;
// const testing = document.getElementById("slowLoris").outerText;

// console.log(testing)

// function placeAList() {
//     var listToPlace = "<ol><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ol>";
//     document.getElementById("slowLoris").innerText = listToPlace;

// }

const btn = document.getElementById("btn")

// function makeInvisible() {
//     document.getElementById("ugly").className = "gayb";
// }
btn.addEventListener("click", () => {
    const img = document.getElementById("hello").classList;
    img.toggle("dark-mode");
})

