// let task = prompt ('Какая задача?');
// let time = prompt('Укажите время');

// function timetable (a, b) {
//     while (a, b){
//         time = new Date().toLocaleTimeString().slice(0,-3);
//             list = {
//                 [time]: task,
//             }
//         return list;
//     }
// }

// let resultTimetable = timetable (task, time);
// console.log ( 'resultTimetable', resultTimetable);



const salaries = {
    John: "4300.00",
    Ann: "5700.40",
    Pete: "4900.95",
  };

const salariesEmployee = (salaries) => {
    let sum = 0;
    for ( let employee in salaries) {
        sum += Number(salaries[employee]);
    }
    return sum;
};

const sumResult = salariesEmployee (salaries);
console.log ('sumResult', sumResult.toFixed(2));

