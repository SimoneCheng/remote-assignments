/* 
Assignment 1: Function and Array
Complete the function below to find the max number of the passing array of numbers.
 Reminder: you cannot use built-in Math.max() or sort() to complete this assignment.
*/

function max(numbers) {
    for (i = 0; i < numbers.length; i++) {
        for (j = i + 1; j < numbers.length; j++) {
            if (numbers[j] < numbers[i]) {
                var x = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = x;
            }
        }
    }
    return numbers[(numbers.length) - 1];
}

max([1, 2, 4, 5]); // result to 5
max([5, 2, 7, 1, 6]); // result to 7

// ============================================================================================

/*
Assignment 2: Object
In JavaScript, there are many different sets of syntax for creating objects. In the code below,
function parameters are encapsulated into an object, try using at least two ways to create a
proper object as a parameter of the calculate function.
*/

function calculate(args) {
    let result;
    if (args.op === "+") {
        result = args.n1 + args.n2;
    } else if (args.op === "-") {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported";
    }
    return result;
}
    // Try to call calculate function correctly
/*
For example, if we have an add function like this:
function add(args){
return args.n1+args.n2;
}
We can call it by passing an object created by JSON literal:
add({n1:3, n2:4}); // your first way
You should apply constructor or class as another way to create a proper object.
add(用類別或建構式產生的物件); // your another way
*/