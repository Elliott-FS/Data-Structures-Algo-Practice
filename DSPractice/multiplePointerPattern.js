// Write a function called sumZero which accepts a sorted 
// array of integers. The function should find the first pair 
// where the sum is 0. Return an array that includes both values 
// that sum to zero or undifined if a pair doen't exist.
// sumZero ([-1,0,1,2,3])

// simple solve quadratic run time nested loops.

function sumZero(arr){
    for(let i=0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
             return [arr[i], arr[j]];
            }
        }
    }
}

// simple solution works long runtime(quadratic)

//Refactor using 2 pointer and direction method

function sumReZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}

// Solution works runtime O(n)