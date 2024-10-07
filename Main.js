//The forEach() method

const fruits = ['kiwi', 'mango', 'apple', 'pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach(function (veggie, index) {
    console.log(`${index}. ${veggie}`);
});


//The filter() method

const nums = [0, 10, 20, 30, 40, 50];
nums.filter(function (num) {
    return num > 20;
});


//The map method

[0, 10, 20, 30, 40, 50].map(function (num) {
    return num / 10
});


//Working with Objects in JavaScript

const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach(function (key) {
    result.push(key, drone[key])
})
console.log(result);


//Working with Maps in JavaScript

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);


//Working with Sets in JavaScript

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);