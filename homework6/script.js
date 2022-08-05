let userName;
let userSurname;
let passWorld;

const upperLetters = (userString) => {
        const firstLetter = (userString[0]).toUpperCase();
        const otherLetters = (userString.slice(1)).toLowerCase();

        return firstLetter + otherLetters;
};

const userRegistrationName = () => {
    do{
        userName = prompt ('Введите имя');
        
        if (!userName) {
            alert ('Введите минимум один символ')
        } else {
            break;
        }
    } while (true);

    const trueName = upperLetters (userName);

    return trueName;
};


const userRegistrationSurname = () => {
    do{
        userSurname = prompt ('Введите фамилию');

        if (!userSurname) {
            alert ('Введите минимум один символ')
        } else {
            break;
        }
    } while (true);

    const trueSurname = upperLetters (userSurname);

    return trueSurname;
};


const userRegistrationPassword = () => {
    do{
        passWorld = prompt ('Введите пароль ( не менее 6 символов и с символами разного регистра)');
        if (!passWorld || passWorld < 6) {
            alert ('Введите пароль коректно!');
        } else if (!isNaN(passWorld) || passWorld.toLowerCase() === passWorld.toUpperCase() === passWorld){
            alert ('Введите пароль коректно!');
        } else {
            alert ('Регистрация успешна');
            break;
            
        }
    } while (true);
    return passWorld;
}

const resName = userRegistrationName();
const resSurname = userRegistrationSurname();
const resPassword = userRegistrationPassword();


alert (`Вы зарегестрированны под именем: ${resName} ${resSurname}. Ваш пароль: ${resPassword}`);




// let firstNumber = Number(prompt('Введите первое число'));
// let secondNumber = Number(prompt('Введите второе число'));


// function findNumber(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     let rundomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//     alert(`Ваше число ${rundomNumber}`);
//     return rundomNumber
    
// }

// const res = findNumber (firstNumber, secondNumber);
// console.log ('res', res);