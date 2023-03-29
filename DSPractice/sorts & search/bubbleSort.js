// BubbleSort: an algorithm where the largest values 
// bubble up to the top!

// Starting at the beginning pg the array compare the 
// first element compare it to the next. If the first
// is bigger swap places, if the next element is bigger
// the next element becomes the first and you keep going.
// Once you reach the end start again until array is
// sorted. 

// Swap function for the bubblesort process 

function swap(arr, idx1, idx2){
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// BubbleSort pseudo:

// Start looping with a variable called i from
// the end of the array towards the start.

// Start an inner loop with a variable called j
// from the beginning until i - 1.

// If arr[j] is greater than arr[j + 1], swap those 
// two values. 

// Un-Optimized:

// function bubbleSort(arr){
//     for(var i = 0; i < arr.length; i ++){
//         for(var j = 0; j < arr.length; j ++){
//             if(arr[j] > arr[j + 1]){
//                 // Use basic swap function example above
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp; 
//             }
//         }
//     }
//     return arr
// }

// bubbleSort([37,45,29,8]);

// Extra compares taken out. Swaps boolean catches edgecase of sorted 
// near sorted arrays. 

function bubbleSort(arr){
    var noSwaps;
    for(var i = arr.length; i > 0; i --){
        noSwaps = true;
        for(var j = 0; j < i - 1; j ++){
            if(arr[j] > arr[j + 1]){
                // Use basic swap function example above
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp; 
                noSwaps = false
            }
        }
        if(noSwaps) break;
    }
    return arr
}

bubbleSort([37,45,29,8]);