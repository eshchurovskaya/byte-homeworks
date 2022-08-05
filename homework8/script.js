// // Напишите функцию, которая принимает массив булевых значений, а возвращает число, 
// // которое представляет собой количесво значений true в массиве



// const howManyTrue = (arr) => {
// let array = 0;

// for ( let item of arr) {
//     if ( item === true){
//         array += item;
//     }
// }

// return array;

// // або

// // return array.length
// }

// const counTrue = howManyTrue ([true, false, false, true, false]);
// console.log (counTrue);

// // const counTrue = howManyTrue ([false, false, false, false]);
// // console.log (counTrue);







// 2. Вам необходимо посчитать количество вхождений каждого элемента в массиве. 
// Результатом работы написанного вами метода должен быть объект, 
// где ключами являются елементы массива а их значениями - количесво раз, которое каждый конкретный элемент встречается в массиве.
//  В массиве гарантировано находятся исключительно строки.

// getOccurrencesCount(["a", "v", "a", "b", "b"]);
// // {
// //   a: 2,
// //   v: 1,
// //   b: 2,
// // }

// getOccurrencesCount([
//   "apples",
//   "oranges",
//   "pears",
//   "pears",
//   "apples",
//   "oranges",
//   "oranges",
//   "pears",
// ]);
// // {
// //   apples: 2,
// //   oranges: 3,
// //   pears: 3,
// // }

// const elements = (arr) => {
//     let entryMassive = {};

//     for (let elem of arr){
//         if (!entryMassive[elem]){
//             entryMassive[elem] = 1;
//         } else {
//             entryMassive[elem] += 1
//         }
//     }
//     return entryMassive;
// }

// const elementInMassive = elements (["a", "v", "a", "b", "b"]);
// console.log (elementInMassive);





// 3.Вам предоставляется массив (который будет иметь длину не менее 3, 
// но может быть очень большим), содержащий целые числа.
// Массив либо полностью состоит из нечетных целых чисел, либо полностью состоит из четных целых чисел, за исключением одного целого числа N.
// Напишите метод, который принимает массив в качестве аргумента и возвращает это «лишнее» N.

// findExcess([0, 1, 2]); // -> 1
// findExcess([1, 2, 3]); // -> 2
// findExcess([2, 6, 8, 10, 3]); // -> 3
// findExcess([0, 0, 3, 0, 0]); // -> 3
// findExcess([1, 1, 0, 1, 1]); // -> 0



// const numbers = (arr) => {
//     let fullNum = [];
//     let freeNum = [];

//     for( let elem of arr){
//         if ( elem % 2 == 0){
//             fullNum.push(elem);
//         } else {
//             freeNum.push(elem);
//         }
//     };

//     if(fullNum.length > freeNum.length){
//         return freeNum [0];
//     } else {
//         return fullNum [0];
//     }
// }

// const resultNumber = numbers ([2, 6, 8, 10, 3]);
// console.log (resultNumber);