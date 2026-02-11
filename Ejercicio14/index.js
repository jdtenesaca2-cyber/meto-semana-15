'use strict'; 

//ejercicio 14

let nums = [1, 2, 3, 2, 1];
let esPalindrome = true;

for (let i = 0; i < nums.length / 2; i++) {
    if (nums[i] !== nums[nums.length - 1 - i]) {
        esPalindrome = false;
    }
}

alert("¿Es palindrome?" + esPalindrome);