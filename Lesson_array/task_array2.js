
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

let arrOne = [1, 2, 3];
for (let j = arrOne.length - 1; j >= 0; j--) {

  console.log(arrOne[j]);
}


// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

let arrAbc = ['a', 'b', 'c'];
for (let j = 0; j <= 3; j++) {
  arrAbc.push(j);

}
console.log(arrAbc);



// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrNum2 = [];

for (let i = 0; i < arrNum.length; i++) {
  arrNum2.push(arrNum[i]);

}
console.log(arrNum2);


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let arrNum3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrNum4 = [];

for (let i = 0; i < 1; i++) {
  arrNum4 = arrNum3;

  console.log(arrNum4);


}

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let arrNumT1 = [2,17,13,6,22,31,45,66,100,-18];


// 1. перебрати його циклом while

let i = 0;
while (i < 1){
  console.log(arrNumT1);

  i++;

}

// 2. перебрати його циклом for
for (let j = 0; j < 1; j++) {
  console.log(arrNumT1);


}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let k = 0;
while (k < arrNumT1.length){
  k++;
  if (k % 2 === 1){
    console.log(arrNumT1[k]);
  }
}


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 0; j < arrNumT1.length; j++) {


  if (j % 2 === 1){
    console.log(arrNumT1[j]);
  }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значенн

let m = 0;
while (m < arrNumT1.length){

    if ((arrNumT1[m] % 2) === 0){
      console.log(arrNumT1[m]);

    }
    m++;

}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let c = 0; c < arrNumT1.length; c++) {
  if ((arrNumT1[c] % 2) === 0){
    console.log(arrNumT1[c]);

  }

}

// //7. замінити кожне число кратне 3 на слово "okten"
let arrNumT4 = [2,17,13,6,22,31,45,66,100,-18];

for (let z = 0; z < arrNumT4.length; z++) {
  if (arrNumT4[z] % 3 === 0 ){
    arrNumT4[z] = 'okten'


  }

}
console.log(arrNumT4);

// 8. вивести масив в зворотньому порядку.

arrNumT1.reverse();
console.log(arrNumT1);

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let arrNumT2 = [2,17,13,6,22,31,45,66,100,-18];


// 1. перебрати його циклом while (с заду на перед)

let h = 1;
while (h > 0){
  console.log(arrNumT2);
  h--;
}

// 2. перебрати його циклом for (с заду на перед)
let arr = []
for (let j = 10; j >= 0; j--) {
 arr = arrNumT2[j]

}
console.log(arr);
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом (с заду на перед)
//
let q = arrNumT2.length;
while (q > 0){
  q--;
  if (q % 2 === 1){
    console.log(arrNumT2[q]);
  }
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом (с заду на перед)

for (let x = arrNumT2.length; x > 0; x--) {
  if (x % 2 === 1){
    console.log(arrNumT2[x])
  }

}

// 5. перебрати циклом while та вивести  числа тільки парні  значення (с заду на перед)

let p = arrNumT2.length;
while (p >= 0){
  if ((arrNumT2[p] % 2) === 0){
    console.log(arrNumT2[p]);
  }
  p--;
}



// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let b = arrNumT2.length; b >= 0; b--) {
  if ((arrNumT2[b] % 2) === 0){
    console.log(arrNumT2[b]);
  }

}
// 7. замінити кожне число кратне 3 на слово "okten" (с заду на перед)
let arrNumT6 = [2,17,13,6,22,31,45,66,100,-18];

for (let z = arrNumT6.length; z > 0; z--) {
  if (arrNumT6[z] % 3 === 0 ){
    arrNumT6[z] = 'okten'


  }

}
console.log(arrNumT6);

// 10
// створити пустий масив та :
//   - заповнити його 50 парними числами за допомоги циклу.
let arrAny = [];

for (let t = 0; t <= 50; t++) {
  if (t % 2 === 0){
    arrAny.push(t);

  }

}
console.log(arrAny);

// - заповнити його 50 непарними числами за допомоги циклу.

//

let arrAny2 = [];

for (let t = 0; t <= 50; t++) {
  if (t % 2 === 1){
    arrAny2.push(t);

  }

}
console.log(arrAny2);

// используя Math.random заполнить массив из ???(сколько хотите) элементов.
//   диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)

let arrTest1 = [];

for (let j = 0; j < 11; j++) {
  arrTest1[j] = Math.floor(Math.random() * 50);
  arrTest1.push(j)


}
console.log(arrTest1);



let arrTest2 = [];
for (let s = 0; s < 15; s++) {
  arrTest2[s] = Math.floor((Math.random() * 732)+8);


}
console.log(arrTest2);

// 2. вывести на консоль  каждый третий елемент
for (let d = 2; d < arrTest2.length; d+=3) {
  console.log(arrTest2[d]);

}

// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.
for (let m = 2; m < arrTest2.length; m+=3) {
  if (arrTest2[m] % 2 === 0){
    console.log(arrTest2[m]);


  }

}

// 4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.


let arrTest3 = [];
for (let m = 2; m < arrTest2.length; m+=3) {
  if (arrTest2[m] % 2 === 0){
   arrTest3.push(arrTest2[m]);


  }

}
console.log(arrTest3);

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший маси

let arrAnyTest = [1, 'hello' , false, 'one', 256, true, -54, 'two'];
let newNum = [];
for (let j = 0; j < arrAnyTest.length; j++) {
  if (typeof arrAnyTest[j] === 'number'){
    newNum.push(arrAnyTest[j]);
  }

}
console.log(newNum);

// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arrRand = [];
let arrNewRand = [];
for (let j = 0; j < 10; j++) {
  arrRand[j] = Math.floor(Math.random() * 20);
  arrNewRand[j] = arrRand[j]*5;
  arrNewRand.push(arrRand[j]);


}
console.log(arrRand);
console.log(arrNewRand);

// масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.

let arrSum = [100,250,50,168,120,345,188];
let sum = 0;
for (let j = 0; j < arrSum.length; j++) {
  sum += arrSum[j]/arrSum.length;

}
console.log(sum);

