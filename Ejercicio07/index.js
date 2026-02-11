'use strict'; 

// ejercicio 7
let world = ['o','ñ','e','l','i','u','q','a','y','a','u','g'];

let aux;

for (let i = 0; i < world.length / 2; i++) {
    aux = world[i];
    world[i] = world[world.length - 1 - i];
    world[world.length - 1 - i] = aux;
}

alert(world);
