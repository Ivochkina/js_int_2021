'use strict'

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// - отримує текст з параграфа з id "content"

let cont = document.getElementById('content');
console.log(cont);


// - отримує текст з блоку з id "rules"

let rul = document.getElementById('rules');
console.log(rul);

// - замініть текст параграфа з id 'content' на будь-який інший
let content2 = document.getElementById('content').innerText= 'Первое правило Бойцовского клуба: никому не рассказывать о Бойцовском клубе. Второе правило Бойцовского';
console.log(content2);

// - замініть текст параграфа з id 'rules' на будь-який інший
let rules2 = document.getElementById('rules').innerText = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate deleniti';
console.log(rules2);

// - змініть кожному елементу колір фону на червоний

content.style.backgroundColor = 'red';
rules.style.backgroundColor = 'red';

let elements = document.getElementsByClassName("fc_rules")
for (let i = 0; i < elements.length; i++) {
  elements[i].style.background= 'red';
}
// - змініть кожному елементу колір тексту на синій
content.style.color = 'blue';
rules.style.color = 'blue';

let elements1 = document.getElementsByClassName("fc_rules")
for (let i = 0; i < elements1.length; i++) {
  elements1[i].style.color = 'blue';
}


// - отримати весь список класів елемента з id=rules і вивести їх в console.log
let get = document.getElementById('rules').getElementsByClassName('fc');
console.log(get);

// - отримати всі елементи з класом fc_rules
let elemen = document.getElementsByClassName('fc_rules');
console.log(elemen);

// - поміняти колір тексту у всіх елементів fc_rules на червоний

let elements2 = document.getElementsByClassName("fc_rules")
for (let i = 0; i < elements2.length; i++) {
  elements2[i].style.color = 'red';
}

