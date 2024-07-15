// 1. What will be the output of the following code and why?
function scopeTest() {
    if (true) {
      var varVariable = "I am var";
      let letVariable = "I am let";
      const constVariable = "I am const";
    }
    console.log(varVariable);
    console.log(letVariable);
    console.log(constVariable);
  }
  scopeTest();

Answer: Only "I am var" will output. Because the variables are declared as local variables inside the function And among the local variables inside the function, only variables of var type can be called from outside the function, but let, constant variables cannot be accessed from outside. So at the second console.log the program will stop because the let type variable is called from outside the function. And because of the error on the second line, the program will not check the third console.log. But the third console.log also has an error because the constant type variable is called from outside the function


// 3. Write a function sum that takes any number of arguments and returns their sum using the rest parameter.
function summation(...args) {
    let total = 0;
    for (const arg of args) {
      total += arg;
    }
    return total;
}
console.log(summation(1,2,3));
console.log(summation(10,20,30,40));
console.log(summation(5));


// 4. Given the following arrays, use the spread operator to merge them into a new array mergedArray.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
// Your code here
const mergedArray = [...array1, ...array2, ...array3]
console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


// 5. Write an object person using the object literal syntax extensions. The object should have properties name and age, and a method greet that returns a greeting message.
const name = "John";
const age = 30;
const Person = {
    name,
    age,
    greet: function(){
      console.log("Hi, I'm " + this.name + " and I'm " + this.age + " years old");
    }
};
// Your code here
console.log(Person.greet()); // "Hi, I'm John and I'm 30 years old."


// 6. Write a for...of loop to iterate over the following array and print each element to the console.
const fruits = ["apple", "banana", "cherry"];
for(let i of fruits){
    console.log(i);
}


// 7. Use template literals to create a string that includes variables name and age.
const name = "Alice";
const age = 25;
// Your code here
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message); // "My name is Alice and I am 25 years old."


// // 8. You have an array of objects representing students and their grades. Use a for...of loop to iterate over the array and print each student's name and grade.
const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 }
];
// Your code here
for (const [key, value] of Object.entries(students)) {
    console.log(value);
}


// 9. You have a nested array of numbers. Use a for...of loop to iterate over each inner array and print the sum of its elements.
const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let sum = 0;
for(let i of nestedArrays){
    for(let j of i){
        sum += j;
    }
}
console.log(sum);


// 10. Use template literals to create a string that includes variables a and b, as well as the result of their addition.
const a = 5;
const b = 10;
// Your code here
const result = `The sum of ${a} and ${b} is ${a+b}`;
console.log(result); // "The sum of 5 and 10 is 15."