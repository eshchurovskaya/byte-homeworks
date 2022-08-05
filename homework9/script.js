// Задание 1

// Написать универсальную функцию для фильтрации массива объектов

// Функция принимает на вход 2 аргумента, первый это массив данных, второй - объект содержащий данные для фильтрации.

// На выходе результатом должен быть массив сожержащий объекты в которых нашлись совпадения.

// Учтите, что функция должна быть универсальной и работать с любыми объектами одного уровня вложенности.

// Пример (данные можно взять любые другие):



// data = [
//     {
//       name: "John",
//       age: 24,
//       position: "senior",
//       isActive: false,
//     },
//     {
//       name: "Peter",
//       age: 33,
//       position: "middle",
//       isActive: false,
//     },
//     {
//       name: "Sam",
//       age: 29,
//       position: "junior",
//       isActive: true,
//     },
//     {
//       name: "Mary",
//       age: 24,
//       position: "middle",
//       isActive: false,
//     },
//     {
//       name: "Steve",
//       age: 23,
//       position: "middle",
//       isActive: true,
//     },
//     {
//       name: "Kate",
//       age: 31,
//       position: "middle",
//       isActive: false,
//     },
//     {
//       name: "Sally",
//       age: 19,
//       position: "junior",
//       isActive: false,
//     },
//     {
//       name: "Jack",
//       age: 19,
//       position: "middle",
//       isActive: true,
//     },
//   ];


// const filterArray = (data, filter) => {

//     return data.filter ((item) =>{

//         let filterArr = []

//         for ( let key in filter) {
//             filterArr.push ([key, filter[key]])
//         }

//         return filterArr.every(([key, value]) => item[key] === value)
//     })

// }

// let result = filterArray (data, { age: 23 });
// console.log (result);





// Задание 2

// Написать собственную реализацию методов массива map, forEach, filter

// Это могут быть функции под названием ownMap, ownForEach, ownFilter.
// На вход они должны принимать массив, с которым необходимо осущуествить действие,
// и колбек-функцию, которая применится к каждому из элементов массива.
// Встроенные методы массива map, forEach, filter испольовать запрещено.
// Пример работы:

// const isNegative = (number) => number < 0;
// const increment = (number) => number + 1;
// const logger = (element, index, array) => {
//   console.log(`In array [${array}] on position ${index}: ${element}`);
// };

// ownForEach([1, 2, 3], logger);
// ownMap([1, 2, 3], increment); // [2, 3, 4]
// ownFilter([-2, 4, -1], isNegative); // [-2, -1]
// Вы можете испольвать уже готовые колбек-функции isNegative, increment, logger,
// для тестов, или напсиать свои. Работа будет проверяться на остнове предоставленых функций,
// так что советуем проверить работу на них.







// const logger = (element, index, array) => {
//     console.log (`In array [${array}] on position ${index}: ${element}`)
// };

// const ownForEach = (arr, logger) => {
//     for (let num of arr) {
//         logger (num, arr.indexOf(num), arr)
//     }
// }

// ownForEach ([1, 2, 3],logger)

// aбо

// let arr = [1, 2, 3];
// let test1 = arr.forEach ((num) => logger(num, arr.indexOf(num), arr))
// console.log (test1)




// const increment = (number) => number + 1;

// // const ownMap = (arr, increment) => {
// //     let arrNew = []

// //     for ( let num of arr) {
// //         arrNew.push(increment(num))
// //     }

// //     return arrNew
// // }

// // let res = ownMap ([1, 2, 3], increment)
// // console.log (res)


// abo

// let arr2 = [1, 2, 3]
// let test = arr2.map ((num) => increment (num))
// console.log(test)





// const isNegative = (number) => number < 0;

// // const ownFilter = (arr, isNegative) => {
// //     let arrSecond = []

// //     for ( let num of arr) {
// //         if ( isNegative (num) === true ) {
// //             arrSecond.push (num)
// //         }
// //     }

// //     return arrSecond
// // }

// // let arrThirt = ownFilter ([-1, -3, 4, -4], isNegative)
// // console.log (arrThirt)


// // abo

// let arr4 = [-1, -3, 4, -4]
// let test3 = arr4.filter ((num) => isNegative (num))
// console.log (test3)