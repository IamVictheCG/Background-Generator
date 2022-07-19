let bar1 = document.querySelectorAll("input")[0]
let bar2 = document.querySelectorAll("input")[1]
let circle = document.querySelectorAll("div")[0]
console.log(bar1.value);

bar1.addEventListener("input", colorChange())
bar2.addEventListener("input", colorChange())
circle.addEventListener("div", colorChange())

function colorChange() {
    cool5 = document.querySelector("body").style.background = `linear-gradient(to right,  ${bar1.value}, ${bar2.value}`
    cool3 = document.querySelector("div").style.background = `linear-gradient(to right,  ${bar2.value}, ${bar1.value}`
    console.log(bar1)
}

// function colorChange1() {
//     cool5 = document.querySelector("body").style.background = `linear-gradient(to right,  ${bar1.value}, ${bar2.value}`
//     cool3 = document.querySelector("div").style.background = `linear-gradient(to right,  ${bar2.value}, ${bar1.value}`
// }

