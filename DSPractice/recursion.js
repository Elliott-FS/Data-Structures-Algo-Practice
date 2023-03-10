// How to write a recursive function: invoke the same function with a different
// input until you reach your base case.

// 


// Basic recursive function
function countDown(num){
    if(num <= 0){
        console.log("All done!");
        return; //this line is important because it makes the code stop after base case.
    }
    console.log(num);
    num--;
    countDown(num)
}


// Write a function called power which accepts a base and an exponent.
//  The function should return the power of the base to the exponent.
//   This function should mimic the functionality of Math.pow()
//     - do not worry about negative bases and exponents.

function power(base, expo){
    if(expo === 0){return 1;}
    
    return base * power(base, (expo - 1));//this line turn into base * base * base based
    //on the value of expo.
}


// factorial
// Write a function factorial which accepts a number and returns the factorial
//  of that number. A factorial is the product of an integer and all the 
//  integers below it; e.g., factorial four ( 4! ) is equal to 24,
//   because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

function factorial(num){
    if(num === 0){return 1}
    
   return num * factorial(num -1)
 }


//  Write a function called productOfArray which takes in an array
//   of numbers and returns the product of them all.

function productOfArray(arr){
    if(arr.length === 0) return 1;
    
    return arr[0] * productOfArray(arr.slice(1))
}

// Write a function called recursiveRange which accepts a number and adds
//  up all the numbers from 0 to the number passed to the function 

function recursiveRange(num){
    if(num === 0) return 0;
    return num + recursiveRange(num-1)
 }
 


