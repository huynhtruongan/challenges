'use strict';

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    nums.sort((a, b) => (a - b));
    let max = nums[`${nums.length - 1}`], n = nums.length - 1, secondLargest = -1;
    
    while (secondLargest==-1) {
        if (nums[n] > nums[n - 1]) secondLargest = nums[n - 1];
        n--;
    }
    return secondLargest;
}
