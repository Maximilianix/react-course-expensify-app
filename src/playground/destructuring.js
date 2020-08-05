// const person = {
//     name: 'Maxim',
//     age: 34,
//     location: {
//         city: 'TLV',
//         temp: 30
//     }
// }
// const { name: firstname = 'Annonymous', age } = person

// const { city, temp: temperature } = person.location

// console.log(`${firstname} is ${age}`);

// if (city && temperature) {
//     console.log(`it's ${temperature} in ${city}`);
// }

// const book = {
//     titele: 'New Book',
//     author: 'Maxim',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { titele, author } = book;
// const { name = 'SelfPublish' } = book.publisher

// console.log(name);


const address = ['1299 Some Street', 'TLV', '63794'];

const [street, city, index = ] = address;

console.log(`You are ${street} and having ${city} and ${index}`);



