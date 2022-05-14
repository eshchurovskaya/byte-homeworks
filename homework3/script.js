const firstChild = Number(prompt('How old your first child?'));
console.log('firstChild', firstChild);

const secondChild = Number(prompt('How old your second child?'));
console.log('secondChild', secondChild);

if (firstChild == secondChild) {
    alert('Age is the same!');
}

if (firstChild > secondChild) {
    alert('The first child is older than the second');
}

if (firstChild < secondChild) {
    alert('The first child is younger than the second');
}







const firstNumber = Number(prompt('Введите первое число'));
console.log('firstNumber', firstNumber);

const secondNumber = Number(prompt('Введите второе число'));
console.log('secondNumber', secondNumber);

const space = ' ';

const res = firstNumber + secondNumber;
Number(alert('Результат' + space + res));
console.log('res', res);






const maxAge = 60;
const visitorAge = Number(prompt('Cколько вам лет?'));
const parentsPermission = confirm('У вас есть разрешение от родителей?');

if (visitorAge <= maxAge || parentsPermission) {
    alert('доступ разрешен');
} else {
    alert('доступ запрещен');
};
