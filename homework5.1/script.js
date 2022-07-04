// const LOGIN = 'ADMIN';
// const PASSWORD = '1q2w3e';

//     let userPassword;
//     let userLogin;
//     const autorize = () => {
//     for (let i = 3; i >= 0; i--) {
//         userLogin = prompt('Логин:');
//         if(!userLogin) {
//             alert|('Введите логин');
//             continue;
//         }

//         userPassword = prompt('Пароль:');
//         if(!userPassword) {
//             alert|('Введите пароль');
//             continue;
//         }

//         if(userLogin !== LOGIN || userPassword !== PASSWORD) {
//             alert (`Данные не верны! У вас осталось : ${i} попытки`);
//             continue;
//         }

//         break;

//     };

//     if(userLogin === LOGIN && userPassword === PASSWORD) {
//         alert('welcome');
//     } else {
//         alert ('Извените, вы исчерпали попытки!');
//     }

// };

// autorize();






function simpleNumbers (start, finish) {
    stopFirst:
    for( let i = start; i <= finish; i++){
        for (let j = 2; j < i; j++) {
            if(i % j === 0) {
                continue stopFirst;
            }
        }
        console.log( i );
    }
}

simpleNumbers(20, 100);


