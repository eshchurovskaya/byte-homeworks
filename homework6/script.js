// function userData (){
//     let userName;
//     do{
//         userName = prompt ('Введите имя');
        
//         if (!(userName.toLowerCase() == userName && userName.toUpperCase() == userName)) {
//             alert ('Введите корректное имя')
//         }
//     } while (userName);

//     let userSurname;
//     do{
//         userSurname = prompt ('Введите фамилию');
//         if (userSurname <) {
//         }
//     } while (userSurname);

//     let passWorld;
//     do{
//         passWorld = prompt ('Введите пароль');
//         if (passWorld === null) {
//         }
//     } while (passWorld);
    
// }


// userData();




let firstNumber = Number(prompt('Введите первое число'));
let secondNumber = Number(prompt('Введите второе число'));


function findNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let rundomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    alert(`Ваше число ${rundomNumber}`);
    return rundomNumber
    
}

const res = findNumber (firstNumber, secondNumber);
console.log ('res', res);