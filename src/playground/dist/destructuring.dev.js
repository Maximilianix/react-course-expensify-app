"use strict";

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
var address = ['1299 Some Street', 'TLV'];
var city = address[1],
    _address$ = address[2],
    index = _address$ === void 0 ? '2324' : _address$;
console.log("You are and having ".concat(city, " and ").concat(index));
//# sourceMappingURL=destructuring.dev.js.map
