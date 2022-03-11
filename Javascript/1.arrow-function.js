// Normal way to write a function.
function printMyName(name, age) {
    console.log(name, age)
}

printMyName('Prince', 24)

// ------------ Using Arrow Function ---------------
// 1. Basic way to write an arrow function.
const printMyName1 = (name, age) => {
    console.log(name, age)
}

printMyName('Prince inside an arrow function', 24)

// 2.
//      A. If I have no argument to pass then I can use () aka single bracket.
//      B. If my function has just one like to print then I can remove {}.
const printMyName2 = () => console.log("Don't have any argument to pass")

printMyName2()

// 3.
//      A. If my function has something to return then I can remove return and {} as well.
const multiply = (numbers) => numbers * 2

console.log(multiply(2))