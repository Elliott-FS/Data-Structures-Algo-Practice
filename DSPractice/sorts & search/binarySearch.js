// Binary Search is much faster than linear
// Only works on sorted arrays/data
// Eliminates half of remmaining elements at a time rather 
// than one element at a time

// Binary search psuedo code
// Create a function that accepts an array and value
// Create a left pointer at the start of the array
// And a right pointer for the end of the array
// While the left pointer comes before the right pointer
// * Create a pointer for the middle
// * If you find val return the index for the middle
// * If value is too small move left pointer up
// * If value is too large move right pointer down
// If you never find the value return -1

function binarySearch(arr, elem){
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end){
        if(elem < arr[middle]){
            end = middle -1;
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2);
    }
        if(arr[middle] == elem){
            return middle
        }
        else return -1
}

// test call binarySearch([2,5,6,9,13,15,28], 15)
// works
// worst case O(log n) run time