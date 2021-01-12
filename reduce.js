// Summing an array of numbers (explained)
const nums = [0,1,2,3,4];
let sum = nums.reduce((acc,curr) => { //accumulator and current value
    console.log(
    "Accumulator: ", acc,
    "Current Value: ", curr,
    "Total:", acc + curr
    );
    return acc + curr;
}, 10); // explicitly state the 1st value of the accumulator, should always specify the initial values
console.log(sum);


// Summing an array of numbers (actual method)
let sum2 = nums.reduce((acc, curr) => acc + curr, 20); 
console.log(sum2);


// Summing an object
const teamMembers = [
    {
        name: 'Andrew',
        profession: 'Developer',
        yrsExperience: 5,
    },
    {
        name: 'Ariel',
        profession: 'Developer',
        yrsExperience: 7,
    },
    {
        name: 'Michael',
        profession: 'Designer',
        yrsExperience: 1,
    },
    {
        name: 'Kelly',
        profession: 'Designer',
        yrsExperience: 3,
    },
    {
        name: 'Mark',
        profession: 'Manager',
        yrsExperience: 1,
    },
]

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);

// Grouping by a property, and totaling it too
let experienceByProfession = teamMembers.reduce((acc,curr) => {
    let key = curr.profession;
    if (!acc[key]){
        acc[key] = curr.yrsExperience;
    }   else{
        acc[key] += curr.yrsExperience;
    }
    return acc;
}, {})

console.log(experienceByProfession);


let namesByProfession = teamMembers.reduce((acc,curr) => {
    let key2 = curr.name;
    if (!acc[key2]){
        acc[key2] = curr.profession;
    }   else{
        acc[key2] += curr.profession;
    }
    return acc;
}, [])

console.log(namesByProfession);