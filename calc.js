function add(a, b) {
    result = a + b
    console.log(`Addition of ${a} + ${b} is : ${result}`);
}

function sub(a, b) {
    result = a - b
    console.log(`Substraction of ${a} - ${b} is : ${result}`);
}

module.exports.add = add
module.exports.sub = sub