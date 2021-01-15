'use strict'

// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

let myDog = {
  name: 'Bob',
  age : 2,
  weight: 10,
  color: 'black',
  eyes: 'blue'
}
console.log(myDog);

let myMan = {
  name: 'Ivan',
  age: 31,
  weight: 85,
  eyes: 'green',
  country: "UK"
}
console.log(myMan);

let myCar = {
  color: 'red',
  age: 1,
  power: 256,
  brand: 'BMW',
  country: 'USA'

}
console.log(myCar);

let myFlat = {
  adress: '52 Strit',
  town: 'Boston',
  area: 120,
  country: 'USA',
  owner: 'Olena'


}
console.log(myFlat);

let myBook = {
  author: 'Jack London',
  name: 'Love to life',
  pages: 245,
  color: 'white',
  country: 'UK'
}
console.log(myBook);


// -- Створити масив та вивести його в консоль:
//   - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

let dogAnny = ['такса', 'овчарка', 'шпиц', 'бульдог', 'терьер'];
let manAnny = ['Ivan', 'Vova', 'Dima', 'Oleg', 'Maks'];
let carAnny = ['BMW', 'Mersedec', 'Volvo', 'Volkswagen', 'lexus'];

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

let house = {
  country: 'Ukraine',
  adress: 'Rualko Str',
  town: 'Dnipro',
  floor: 4,
  rooms: ['kitchen', 'bathroom', 'living room','bedroom' ]

}
console.log(house);

let driver = {
  name: 'Serg',
  growth: 185,
  age: 25,
  cars: ['Mersedec', 'Volvo', 'Volkswagen',],
  adress: 'Kharkiv',


}
console.log(driver);

let toy = {
  view: 'bool',
  color: 'green',
  weight: 2,
  sport: ['footbool', 'basketbool'],
  plays: 'boys'

}
console.log(toy);

let table = {
  height: 90,
  weight:100,
  color: ['braun', 'black', 'red'],
  material: 'iron',
  volume:3

}
console.log(table);

let bag = {
  height: 30,
  weight: 40,
  material: 'leather',
  color: ['braun', 'black', 'red'],
  volume: 2

}

// Дан массив:
  let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
  ];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне

// - статус Андрія

console.log(users[7].status);

// - статус Максима
console.log(users[4].status);

// - ім'я передостаннього об'єкту
console.log(users[9].name);

// - ім'я третього об'єкта
console.log(users[3].name);

// - вік Олега
console.log(users[6].age);

// - вік Олі
console.log(users[3].age);

// - вік + ім'я 5го об'єкта
let ageAnn = users[5].age ;
let nameAnn = users[5].name;
console.log(ageAnn + ' ' + nameAnn);

// - вік + сатус Анни
let statusAnn = users[5].status;
console.log(ageAnn + ' ' + statusAnn);
