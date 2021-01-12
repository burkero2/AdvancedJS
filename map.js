// Using a for loop
let nums = [1,2,3,4,5];
let results = [];
for (let num of nums) {
    results.push(num * 2);
}
console.log(results);

// using map
const multByTwo = function (num) {
    return num * 2;
}

const mapResults = nums.map(multByTwo);
console.log(mapResults);

// simplified map
const simpleMap = nums.map(function (num){return num * 3});
console.log(simpleMap);

// simplified map with arrow function
const arrow = nums.map(num => num * 4);
console.log(arrow);

// with Objects
const students = [
    {
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skill: 'JavaScript', 
    },
    {
        id: 2,
        name: 'Ariel',
        profession: 'Developer',
        skill: 'HTML',
    },
    {
        id: 3,
        name: 'Jason',
        profession: 'Designer',
        skill: 'Python',
    },
];

const studentWithIds = students.map(student => [student.name, student.id]);
console.log(studentWithIds);
