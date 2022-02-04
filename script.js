//დავალება 1

// function numbers(...args) {
//     let numbersSum = 0;
//     for (let item of args) {
//         if (item > 0) {
//             numbersSum = item + numbersSum
//         }
//     }
//     return numbersSum
// }

// let result = numbers(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
// console.log(result)

// let number = (...args) => {
//     let numbersSum = 0;
//     for (let item of args) {
//         if (item > 0) {
//             numbersSum = numbersSum + item
//         }
//     }
//     return numbersSum
// }

// let result = number(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
// console.log(result);

//-----------------------------------------------------------------------------

//დავალება 2

// let numbers = (...args) => {
//     numbersSum = 0;
//     for (let item of args) {
//         numbersSum = item + numbersSum;
//     }
//     return numbersSum
// }

// let result = numbers(10, 50, 6, 7, 8, 11, 6, 3, 9);
// console.log(result);

//--------------------------------------------------------------------------------

//დავალება 3
//ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze')
// თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

// let user = {
//     firstname: 'Giorgi',
//     lastname: 'Karosanidze',
//     age: 27,
//     isloggedin: true
// }

// function names() {
//     if (user.isloggedin === true) {
//         return `${user.firstname} ${user.lastname}`;
//     } else {
//         return "There is an Error"
//     }
//     return
// }

// let result = names();
// console.log(result);

//----------------------------------------------------------------------------------

//დავალება 4

//შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი.
// ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

// function numbers(...args) {
//     let maxNumber = args[0]
//     for (let item of args) {
//         if (item > maxNumber) {
//             maxNumber = item;
//         }
//     }
//     return maxNumber;
// }

// let result = numbers(2, 7, 9, 23, 15, 8, 4);

//იგივე ამოცანა მინიმალურის შემთხვევაში:

// function numbers(...args) {
//     let minNumber = args[0];
//     for (let item = 0; item < args.length; item++) {
//         if (args[item] < minNumber) {
//             minNumber = args[item]
//         }
//     }
//     return minNumber
// }

// let result = numbers(7, 9, 23, 15, 8, 4, 2);
// console.log(result);