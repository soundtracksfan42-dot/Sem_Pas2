// Задание 1/5
const age = 25;

if (age < 18) {
    console.log("Несовершеннолетний");
} else if (age >= 18 && age <= 59) {
    console.log("Взрослый");
} else {
    console.log("Пенсионный возраст");
}
// Задание 2/5
const score = 85;

if (score < 0 || score > 100) {
    console.log("Некорректное количество баллов");
} else if (score >= 90) {
    console.log("Отлично (5)");
} else if (score >= 75) {
    console.log("Хорошо (4)");
} else if (score >= 60) {
    console.log("Удовлетворительно (3)");
} else {
    console.log("Неудовлетворительно (2)");
}
// Задание 3/5
let login = "admin";
let password = "12345";

if (login === "admin" && password === "12345") {
    console.log("Добро пожаловать!");
} else if (login === "admin" && password !== "12345") {
    console.log("Неверный пароль");
} else {
    console.log("Пользователь не найден");
}
// Задание 4/5
let number1 = 20;
let number2 = 5;
let operation = "+";

switch (operation) {
    case "+":
        console.log("Результат:", number1 + number2);
        break;
    case "-":
        console.log("Результат:", number1 - number2);
        break;
    case "*":
        console.log("Результат:", number1 * number2);
        break;
    case "/":
        console.log("Результат:", number1 / number2);
        break;
    default:
        console.log("Неизвестная операция");
}
// Задание 5/5
let isRegistered = true;
let isBlocked = false;

if (age >= 18 && isRegistered === true && isBlocked === false) {
    console.log("Доступ разрешён");
} else {
    console.log("Доступ запрещён");
}