'use strict'

// // --створити масив та вивести його в консоль:
// //   - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arrNum = [1, 2, 3, 4, 5];
console.log(arrNum);

let arrStr1 = ['one', 'two', 'three', 'four'];
console.log(arrStr1);

let arrCombi = ['hello', 55, true];
console.log(arrCombi);

let arrAny = [];
arrAny[0] = 5;
arrAny[1] = 'world';
arrAny[2] = true
console.log(arrAny);


// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині


for (let i = 0; i < 10; i++) {
	document.write('<div>' + 'hello' + '</div>');
}

// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
  document.write('<div>' + 'new task' + ' ' + i + '</div>');
}


// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let m = 0;
while (m <20){
  document.write('<h1>' + 'Привет привет' + '</h1>');
  m++;
}

 // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let s = 0;
while (s <20){
  document.write('<h1>' + 'Привет привет' + ' ' + s + '</h1>');
  s++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < num1.length; i++) {
  console.log(num1[i]);
}

 // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let num2 = ['один', 'два', 'три', 'четыри', 'пять', 'шесть', 'cемь', 'восемь', 'девять', 'десять'];

for (let i = 0; i < num2.length; i++) {
  console.log(num2[i]);

}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arrAll = [1, true, 'cat', 56, false, 'house', 9854, 'man', true, 'pi', -3254];

for (let i = 0; i < arrAll.length; i++) {
  console.log(arrAll[i]);

}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let arrTest1 = [1, true, 'cat', 56, false, 'house', 9854, 'man', true, 'pi'];
for (let i = 0; i < arrTest1.length; i++) {
  if (typeof arrTest1[i]=== 'number'){
    console.log(arrTest1[i]);
  }
}

// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arrTest2 = [1, true, 'cat', 56, false, 'house', 9854, 'man', true, 'pi'];
for (let i = 0; i < arrTest2.length; i++) {
  if (typeof arrTest2[i] === 'boolean'){
    console.log(arrTest2[i]);
  }
}
//
// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arrTest3 = [1, true, 'cat', 56, false, 'house', 9854, 'man', true, 'pi'];
for (let i = 0; i < arrTest3.length; i++) {
  if (typeof arrTest3[i] === 'string'){
    console.log(arrTest3[i]);
  }

}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arrTest4 = [];

arrTest4[0] = 55;
arrTest4[1] = true;
arrTest4[2] = 'Hello';
arrTest4[3] = -584;
arrTest4[4] = false;
arrTest4[5] = 'dog';
arrTest4[6] = 98;
arrTest4[7] = 'world';
arrTest4[8] = 777;
arrTest4[9] = 'main';
for (let i = 0; i < arrTest4.length; i++) {
  console.log(arrTest4[i]);

}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
  console.log(i);
  document.write(i);

}
//
// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
for (let i = 0; i < 100; i++) {
  console.log(i);
  document.write(i);

}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i += 2) {
  console.log(i);
  document.write(i);

}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
  if (i%2 === 0){
    console.log(i);
    document.write(i + '</br>')
  }


}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
  if (i % 2 === 1){
    console.log(i);
    document.write(i + '</br>')
  }

}

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

for (let minute = 0; minute < 2; minute++) {
  for (let second = 0; second < 2; second++) {
    console.log(minute, second);

  }

}

// - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

for (let hours = 0; hours < 1; hours++) {
  for (let minute1 = 0; minute1 < 2; minute1++) {
    for (let second1 = 0; second1 < 3; second1++) {
      console.log(hours, minute1, second1);

    }

  }

}

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let arrStr = [ 'a', 'b', 'c'];
for (let i = 0; i < 1; i++) {
  console.log(arrStr[0] + arrStr[1] + arrStr[2]);



}
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let i = 0;
while (i < 1){
  console.log(arrStr[0] + arrStr[1] + arrStr[2]);
  i++;

}

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.







// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// arrStr = [ 'a', 'b', 'c'];

arrStr.push(1, 2, 3);
console.log(arrStr);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

let arrNum7 = [1, 2, 3];

arrNum7.reverse();
console.log(arrNum7);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

arrNum7.push(4, 5, 6);
console.log(arrNum7);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

let arrNum2 = [1, 2, 3];
arrNum2.unshift(4, 5, 6);
console.log(arrNum2);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

let arrJs = ['js', 'css', 'jq']
let shifted = arrJs.shift();
console.log(shifted);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

let pop = arrJs.pop();
console.log(pop);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

let arrNum3 = [1, 2, 3, 4, 5];
//
let resultArrNum1 = arrNum3.slice(3,5);
console.log(resultArrNum1);

// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

let resultArrNum2 = arrNum3.slice(0,2);
console.log(resultArrNum2);


// // // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

let arrNum4 = [1, 2, 3, 4, 5];
arrNum4.splice(1,2 );
console.log(arrNum4);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//
let arrNum5 = [1, 2, 3, 4, 5];
arrNum5.splice(3,0, 'a', 'b', 'c');
console.log(arrNum5);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

let  arrNum6 = [1, 2, 3, 4, 5];

arrNum6.splice(1, 0, 'a','b');
arrNum6.splice(6, 0, 'c');
arrNum6.splice(8, 0 , 'e');

console.log(arrNum6);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let newArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let j = 0; j < newArr1.length; j++) {
  if (j%2 === 0){
    console.log([j]);
  }

}

