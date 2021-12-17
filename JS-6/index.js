// /*Задание 1*/ 
// let Car = {
// manufacturer : 'Renault',
// model : 'Kaptur',
// year : '2020',
// speed : '150',
// CarInfo : function() {
//     console.log(Car.manufacturer)
//     console.log(Car.model)
//     console.log(Car.year)
//     console.log(Car.speed)
// },
// TimeDistance : function (distance) {
//     let result = distance / Car.speed;
//     let relax = 0;
//     result = Math.trunc(result) + (((result - (Math.trunc(result))) * 60) / 100)

//     for (let i = 1; i <= result; i++) {
//         if (i % 5 == 0) {
//             relax++;
//             result++;
//         }
//     }
//     result = result.toFixed(2).split(".");
//     if (relax == 0) {
//         console.log(`Что бы пройти эту дистанцию : ${distance}км, вам нужно ${result[0]}ч ${result[1]} минут`);
//     } else {
//         console.log(`Что бы пройти эту дистанцию: ${distance}km. Вам нужно - ${result[0]}час. ${result[1]}минут.  ${relax}час. вы потратили на одтых`);
//     }
// }
// }
// Car.CarInfo()
// Car.TimeDistance(200);

// /*Задание 2*/

// let fraction = {
//     numerator: 3,
//     denominator: 5,
//     addition: function(numerator, denominator) {
//       let sum = this.numerator / this.denominator + numerator / denominator;
//       console.log(sum);
//     },
//     substraction :function(numerator, denominator) {
//         let sum = this.numerator / this.denominator - numerator / denominator;
//         console.log(sum);
// },
// multiplication :function(numerator, denominator) {
//     let sum = this.numerator / this.denominator * numerator / denominator;
//     console.log(sum);
// },
// division :function(numerator, denominator) {
//     let sum = this.numerator / this.denominator / (numerator / denominator);
//     console.log(sum);
// },
// reduction: function () {
//     let a;
//     let b;
//     for (let i = 2; i <= this.numerator; i++) {
//         if (this.numerator % i === 0 && this.denominator % i === 0)
//             a = this.numerator / i;
//         b = this.denominator / i;
//     }
//     return a, b
// }
// }

// let numerator, denominator;
// fraction.addition(1,7);
// fraction.substraction(1,7);
// fraction.multiplication(1,7);
// fraction.division(1,7);
// console.log(fraction.reduction());

/*Задание 3*/

// let time = new Date();

// function showTime() {
// 	return (` ${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()} `)
// }

// console.log(showTime())



// function setSecond(a) {
// 	time.setSeconds(time.getSeconds() +a);
// }
// setSecond(90);
// console.log(showTime());


// function setMinutes(a) {
// 	time.setMinutes(time.getMinutes() + a);
// }
// setMinutes(32);
// console.log(showTime());


 
// function setHours(a){
// 	time.setHours(time.getHours() + a);
// }
// setHours(5);
// console.log(showTime());




