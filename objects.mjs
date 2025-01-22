let name = 'Vasya';
let age = 25;
const person = {name: 'Petya', age: 40};
person.gender = "male";
delete person.age
let key = "gender";
let field = person[key];
key = "age";
person[key] = 20;
({name, age} = person);
let {gender} = person
let a;
export function getOccurencesObject(string) {
    const occurrences = {};

    for (const char of string) {
        occurrences[char] = (occurrences[char] || 0) ++;
    }

    return occurrences;
}

