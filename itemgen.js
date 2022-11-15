//Initializing Array with premade values.
let monsterArr = ['skeleton','bat','orc','goblin','dragon','zombie'];
let itemArr = ['sword','plate chest','belt','bow','mace','axe','leggings','robe','gloves','helmet','wizard hat','dagger'];
let affixArr = ['Intellect','Strength','Dexterity','Power','Dodging','Fire','Frost','Lightning','Arcane','Shadow','Poison','Blocking','Resistance'];

//Generate random index for each array.
let monsterIndex = Math.floor(Math.random() * monsterArr.length);
let itemIndex = Math.floor(Math.random() * itemArr.length);
let affixIndex = Math.floor(Math.random() *  affixArr.length);

//Log message with the random item to console.
console.log(`You slew a ${monsterArr[monsterIndex]}, and it dropped a ${itemArr[itemIndex]} of ${affixArr[affixIndex]}!`);
