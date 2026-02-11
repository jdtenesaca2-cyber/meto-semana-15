'use strict'; 

// ejercicio 8

let world = ['s','o','n','a','c','n','e','u','c'];

let aux;

for (let i = 0; i < Math.floor(world.length / 2); i++) {
    aux = world[i];
    world[i] = world[world.length - 1 - i];
    world[world.length - 1 - i] = aux;
}

alert(world);
