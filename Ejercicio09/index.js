'use strict'; 

// ejercicio 9

let nums = [0, 0, 0, 0];
let x = 1;

for (let i = nums.length - 1; i >= 0; i--) {
    nums[i] = x;
    x = x * 2;
}

alert(nums);
