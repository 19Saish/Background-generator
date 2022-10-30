var css = document.querySelector("h3");
var input1 = document.querySelector(".color1");
var input2 = document.querySelector(".color2");
var body = document.getElementById("grad")

function setGradient() {
    body.style.background = "linear-gradient(to right, " + input1.value + ", " + input2.value + ")";
    css.textContent = body.style.background + ";";
}

input1.addEventListener("input", setGradient);
input2.addEventListener("input", setGradient);

var v1 = input1.value;
var v2 = input2.value;

console.log(v1);
console.log(v2);