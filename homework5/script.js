// const LOGIN = 'ADMIN';
// const PASSWORD = '1q2w3e';


//     // let userPassword;
//     // let userLogin;

//     const autorize = () => {


//         let isAuthSuccess = false;
//         let userAttempts = 3;


//             while (userAttempts !== 0) {

//                 let userLogin = prompt('Логин:');

//                 if(!userLogin) {
//                     alert|('Введите логин');
//                     continue;
//                 };

//                 let userPassword = prompt('Пароль:');

//                 if(!userPassword) {
//                     alert('Введите пароль:');
//                     continue;
//                 };

//                 if (userLogin === LOGIN || userPassword === PASSWORD) {
//                     isAuthSuccess = true;
//                     break;
//                 } else {
//                     userAttempts--
//                     alert('Данные не верны. Количетво оставшихся попыток : ${userAttempts}')
//                 };

//             };

//             if(isAuthSuccess){
//                 alert ('Welcome!');
//             };

// };

// autorize();



// let getFirstNumber = Number( prompt ('Введите первое число промежутка больше 1 :'));
// let getSecondNumber = Number ( prompt ('Введите последнее число промежутка :'));

// const primeNumber = (a, b) => {
//     if(a <= 1){
//         alert ('Ошибка, число меньше или равно 1')
//     };

//     nexPrime:
//         for ( let i = a; i <= b; i++) {
//             for ( let j = 2; j < i; j++){

//                 if ( i % j === 0) {
//                     continue nexPrime;
//                 }
//             }

//             console.log(i)
//         }
// }

// primeNumber (getFirstNumber, getSecondNumber)







const LOGIN = 'ADMIN';
const PASSWORD = '1q2w3e';

    let userPassword;
    let userLogin;
    const autorize = () => {
    for ( i = 3; i<=3; i--) {
        userLogin = prompt('Логин:');
        if(!userLogin) {
            alert|('Введите логин');
            continue;
        }

        userPassword = prompt('Пароль:');
        if(!userPassword) {
            alert('Введите пароль');
            continue;
        } else if(userLogin !== LOGIN || userPassword !== PASSWORD){
            alert ('Данные не верны. Количетво оставшихся попыток : ' + i);
            continue;
        }

        break;

    };

    if (userLogin && userPassword) {
        alert('welcome');
    };
};

autorize();