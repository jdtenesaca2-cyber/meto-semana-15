'use strict'; 

//ejercicio 4

let nums = [2, 3, 6, 5, 0];
let numSearch = 7;

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === numSearch) {
            alert("Índice", i, "e índice", j);
        }
    }
}
