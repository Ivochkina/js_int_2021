'use strict'

// Class
//
// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.

let str = 'Привет';
let num = 123;
let flag = true;
let txt = 'true';

console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);

// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//   5 + 3,
//   5 - 3,
//   5 * 3,
//   5 / 3,
//   5 % 3
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

let a1;
let a2;
let a3;
let a4;
let a5;

a1 = 5 + 3;
a2 = 5 - 3;
a3 = 5 * 3;
a4 = 5 / 3;
a5 = 5 % 3;

// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//   5 % 3,
//   3 % 5,
//   5 + '3',
//   '5' - 3,
//   75 + 'кг'

let a6;
let a7;
let a8;
let a9;
let a10;

a6 = 5 % 3;
a7 = 3 % 5;
a8 = 5 + '3';
a9 = '5' - 3;
a10 = 75 + 'кг';

// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

let height = 23;
let wigth = 10;

let s = height * wigth;

console.log(s);

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//   результат поместите в переменную v.

let heightC = 10;
let dC = 4;

let rC = dC / 2;

let v = 3.14 * Math.pow(rC, 2) * heightC;

console.log(v);

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

let n = 3;
let m = 4;

let k2 = Math.pow(n, 2) + Math.pow(m, 2);

let k = Math.sqrt(k2);

console.log(k);

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log

let str1 = 'Hello world';

alert(str1);
console.log(str1);
document.write(str1);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

alert('Ивочкина Елена Анатольевна');
alert(37);
alert('Бильярд');

//
// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write

let str2 = 'Кто';
let str3 = 'ты'
let str4 = 'такой ?'
let concatenation = (str2 + ' ' + str3 + ' ' + str4);

document.write(concatenation);

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

let str5 = '20';
let a = 5;

document.write(str5 + a + '<br/>');
// один операнд является строкой, то второй будет также преобразован в строку.

document.write(str5 - a + '<br/>');
document.write(str5 * '2' + '<br/>');
document.write(str5 / 2 + '<br/>');
// Другие арифметические операторы работают только с числами и всегда преобразуют операнды в числа.


// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?

console. log( parseInt('3.14'));
// 3
console. log( parseInt('-7.875'));
// -7
console. log( parseInt('435'));
// 435
console. log( parseInt('Вася'));
// NaN