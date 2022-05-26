function sum(a, b) {
    return a + b;
  }
let result = sum(4, 5);
console.log('result', result);
let result2 = sum(3, 15);
console.log('result2', result2);

const sum2 = (a, b) => {
    return a + b;
}
const res1 = sum2 (34, 2);
console.log('res1', res1);



    

function showMassage () {
    let userName;
    let userAge;

    userName = prompt('What is your name');
    userAge = Number(prompt('How old are you?'));

    if (userAge >= 30) {
        userAge = alert('Здравствуйте' + ' ' + userName);
        // userAge = alert('Здравствуйте' + ' ' + userName);
    } else if(userAge < 30) {
        userAge = alert('Привет' + ' ' + userName);
    }
}
showMassage ();


function operation(a, b) {
    return a**b;
  }
  
let result = operation(7, 3);
alert( result );
