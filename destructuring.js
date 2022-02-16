/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
//let john = ages[0];
//let mary = ages[1];
//let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant"
};
let {
    mike,
    jill,
    alicia
} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecond] = languages;
console.log(johnNative, johnSecond);

let [, , maryNative, marySecond] = languages;
console.log(maryNative, marySecond);

let [satoSecond, , , , satoNative] = languages;
console.log(satoNative, satoSecond);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese"
};
let {
    firstLanguage,
    thirdLanguage
} = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ["apples", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak"
};
let {
    brian,
    anna,
    ...rest
} = favoriteFoods;

console.log(brian);
console.log(anna);
console.log(rest);
console.log("------------------challenge------------------------------");
let students = [{
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {
            science: 'Iris',
            english: 'Joan',
            art: 'Simon'
        },
        results: {
            science: 93,
            english: 80,
            art: 95
        },
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {
            maths: 'Harry',
            english: 'Joan',
            cad: 'Paul'
        },
        results: {
            maths: 90,
            english: 75,
            cad: 87
        },
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {
            science: 'Iris',
            maths: 'Harry',
            art: 'Simon'
        },
        results: {
            science: 93,
            maths: 77,
            art: 95
        },
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {
            science: 'Iris',
            english: 'Joan',
            art: 'Simon'
        },
        results: {
            science: 93,
            english: 87,
            art: 95
        },
    }
];
const makeList = (arr, student) => {
    //let list = [];
    for (let item of arr) {
        if (item.name === student) {
            return item.subjects;
        }
    }
    // return arr.student[1] of a particular students subjects;
};


let [first, second, ...otherSubjects] = makeList(students, "John"); // returns 1st and 2nd items in the array and the rest[]
console.log(first, second, otherSubjects);