// Implement the sum function here
function sum(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else {
        console.log("Error");
    }
}
module.exports = sum;

// function multiplyBy()
// {
//     num1 = document.getElementById("firstNumber").value;
//     num2 = document.getElementById("secondNumber").value;
//     document.getElementById("result").innerHTML = num1 * num2;
// }
// module.exports = multiplyBy();