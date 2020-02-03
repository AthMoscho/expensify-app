///Object Destructuring --- Matching by name
/*
const person = {
    name: 'Thanos',
    age: 26,
    location: {
        city: 'Elefsis',
        temp: 11
    }
}


const {name: firstName = 'Anonym', age } = person; //Default value if the is no default value ++ renaming
// const name = person.name;
// const age = person.age;

console.log(firstName,age);


const {city, temp: temprature } = person.location; // renaming

console.log(city,temprature);



const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);
*/

///Array Destructuring -- Matching by position


const address = ['Elefsina', 'Attikh', 'Greece'];

const [city, region, country] = address;

//const [city, ,country] = address; PICK SPECIFIC ONLY

//const [city = 'None' , ,country] = address; SETTING DEFAULT





const item = ['Coffee (hot)', '2', '2.50', '2.75'];

const [itemName, ,mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice} `)






