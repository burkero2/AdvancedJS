console.log("hello");

// Simple Filtering
const people = [
    {
        name: 'Michael',
        age: 23,
    },
    {
        name: 'Lianna',
        age: 16,
    },
    {
        name: 'Paul',
        age: 18,
    },
];

const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

const paul = people.filter (p => p.name === 'Paul')[0].name;
console.log(paul)

// Complex Filtering
const students = [
    {
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skills: [
            {skillName: 'javasscript', yrsExperience: 1},
            {skillName: 'html', yrsExperience: 5},
            {skillName: 'css', yrsExperience: 3},
        ]
    },
    {
        id: 2,
        name: 'Ariel',
        profession: 'Developer',
        skills: [
            {skillName: 'javasscript', yrsExperience: 0},
            {skillName: 'html', yrsExperience: 4},
            {skillName: 'css', yrsExperience: 2},
        ]
    },
    {
        id: 3,
        name: 'Jason',
        profession: 'Designer',
        skills: [
            {skillName: 'javasscript', yrsExperience: 1},
            {skillName: 'html', yrsExperience: 1},
            {skillName: 'css', yrsExperience: 5},
        ]
    },
];

// const candidates = students.filter(student => {
//     let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
//     return strongSkills.length > 0 ;
// });

const has5yearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0 ;


const candidates = students.filter(hasStrongSkills);
console.log(candidates);

const namesVar = candidates.map(candidate => [candidate.name][0]);
console.log(namesVar[0], ',', namesVar[1]);