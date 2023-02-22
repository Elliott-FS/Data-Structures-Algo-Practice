// This pattern involves creating a window which can be an array or number 
// from one postion to another.
// Depending on a certain condition the window either increases or closes and a 
// new window is created.


// Write a function called maxSubArray which accepts an array of integers and a number n.
// The function should calculate the max some of n consecutive elements in the array.

//Brute force works but has nested loops runtime On*2 or O of n squared

function maxSubArray(arr, num){
    if(num > arr.length){
        return null;
    }
    var max = -infinity;
    for(let i = 0; i < arr.length - num + 1; i++){
        temp = 0;
        for(let j = 0; j < num; j++){
            temp += arr[i + j];
            if (temp > max){
                max = temp;
            }
        }
    }
    return max;
}

//Solution work O(n) run time using sliding window
function reMaxSubArray(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num){return null};
    for(let i =0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum
}