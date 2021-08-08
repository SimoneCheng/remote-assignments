/* 
Assignment 1: Function and Array
Complete the function below to find the max number of the passing array of numbers.
 Reminder: you cannot use built-in Math.max() or sort() to complete this assignment.
*/

function max(numbers) {
    let result = numbers[0];
    for (i = 1; i < numbers.length; i++) {
        if (numbers[i] > result) {
            result = numbers[i];
        };
    }
    return result;
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
//第一種方法，直接把東西丟進去函數裡面用
calculate({ op: '+', n1: 5, n2: 10 })

//第二種方法，先把東西存進一個類別，再把那個東西丟進函數裡面
class Calculate {
    constructor(op, n1, n2) {
        this.op = op;
        this.n1 = n1;
        this.n2 = n2;
    }
}

const operation1 = new Calculate('-', 5, 7);
calculate(operation1);

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

// ============================================================================================

/*
Assignment 3: Function, Array, and Object
Complete the function below to calculate the average price of all the products.
*/

function avg(data) {
    let sum = 0;
    let result = 0;
    for (let items in data.products) {
        sum += data.products[items]['price'];
    }
    result = sum / data.size;
    return result;
}

avg({
    size: 3,
    products: [
        {
            name: "Product 1",
            price: 100
        },
        {
            name: "Product 2",
            price: 700
        },
        {
            name: "Product 3",
            price: 250
        }
    ]
}); // show the average price of all products

// ============================================================================================

/*
Assignment 5: Algorithm Practice (Advanced Optional)
Given an array of integers, return indices of the two numbers such that they add up to a
specific target. You may assume that each input would have exactly one solution, and you
may not use the same element twice.
*/

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

twoSum([2, 7, 11, 15], 13);
twoSum([2, 7, 11, 15], 9);

/*
For example:
twoSum([2, 7, 11, 15], 9);
Should returns:
[0, 1]
Because:
nums[0]+nums[1] is 9
*/