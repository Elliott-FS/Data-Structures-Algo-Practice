// What is sorting? re-arranging items in a collection so that 
// they are in some type of specific order.
// Ex: sorting numbers greatest to smallest, sorting names longest to shortest. 
// Sorting is an extremly common task.
// There are a bunch of different sorting algos each for different situations.
// Basic sorts are bubble, selection, and insertion sort.

// This is a helper function to tell JavaScript how to sort numbers. 

function numberCompare(num1, num2){
    return num1 - num2;
}
// if num1 is in front it puts numbers in ascending order
// if num2 is in front it's descending order
[2,5,3,7,10].sort(numberCompare)

function strCompare(str1, str2){
    return str1.length - str2.length;
}
// if str1 is in front it puts strings in smallest to largest
// if str2 is in front it's descending order
['cow','salad','Publix','cake','continue'].sort(strCompare)



// Works

function sort(arr){

    return arr;
}

sort([23, 45, 6, 12, 13])