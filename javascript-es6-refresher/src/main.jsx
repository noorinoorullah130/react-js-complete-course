const arr1 = [1, 2, 3, 4];
const arr2 = [7, 8, 9, 10];

const arr3 = [5, 6];

// const numbers = arr1.concat(arr3, arr2);
const numbers = [0, ...arr1, 5, 6, ...arr2];

console.log(numbers);

// Objects with spread operator

const obj1 = {
    name: "Meet",
};

const obj2 = {
    hobby: ["Teaching", "Learning"],
};

const user = { ...obj1, ...obj2, YouTube: "Code Bless You" };

console.log(user);
