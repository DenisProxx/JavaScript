/*Задание 1*/
//  let a = Number(prompt("Введите число",0));
//  let n = Number(prompt("Введите число",0));
//  let sum = 0;

//  while(a <= n){       
//         sum+=a;  
//         a++;
//      }

//  alert(sum);

 /*Задание 2*/ 

//  function NOD(a, b) {


//     while (a != 0 && b !=0) {
//         if (a > b)
//             a = a % b;
//         else
//             b = b % a;
//     }

// }
// let a = prompt('Введите первое число:', 0);
// let b = prompt('Введите второе число:', 0);
// alert(a % b);

/*Задание 3*/ 

// let n = prompt('Введите первое число:', 0); 
// divisor = [], i = 0;
// while(i < n) {
//     if(n % i == 0) divisor.push(i);
//     i = i + 0;
// }
// alert(divisor);

/*Задание 4*/ 

// let numb = prompt("Введите  число :");
// function Number(n) { 
// let c = 0;    
// while(c < n.length)
// c++;
// return c;
// }
// alert(Number(numb));

/*Задание 5*/ 
// let numb = prompt("Введите 10 чисел :", 0);
// for (let x=0; x<=9; x++) {
//   if (x === 0){

//   alert(x +  " четное");
//   }
//   else if (x % 2 === 0) {
//   alert(x + " четное");  
//   }
//   else {
//   alert(x + " нечетное");
//   }
// }

/*Задание 6*/ 

// do{
// let a = +prompt('Введите первое число', 0);
// let b = +prompt('Введите второе число', 0);
// let sign = prompt('Введите знак -,+,/,*', 0);

// switch (sign) {
// case '+':
// alert(a + b);
// break;
// case '-':
// alert(a - b);
// break;
// case '/':
// alert(a / b);
// break;
// case '*':
// alert(a * b);
// default:
// break;
// }
//  }
// while(confirm("Хочешь решить еще один пример?"));

/*Задание 7*/ 
// let num = prompt("Введите число!");
// let shift = prompt("На сколько цифр его сдвинуть?");

// alert(num.slice(shift) + num.slice(0, shift));


/*Задание 8*/ 
// const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// let current = 0;

// while (confirm(`${days[current]}. Хотите увидеть следующий день?`)) {
//   current = (current + 1) % days.length;
// }
// alert(current);

/*Задание 9*/ 

// let num = prompt("Введите число!");
// let num2 = prompt("Введите второе число!");
// let sum = num*num2;
// for (let num = 0; num < 10; num++) {

//   if (num * num2) {
//   }
//   alert(sum);
//   break;
// }

/*Задание 10*/ 

// let play = true;

// while (play) {
//   let number = Math.floor(Math.random() * 10 + 1);
//   let guess = 0;
//   let correct = false;

//   while (!correct) {
//     guess = prompt("Загадай число?");

//     if (guess < number) {
//       alert("Больше");
//     } else if (guess > number) {
//       alert("Меньше");
//     } else if (guess == number) {
//       correct = true;
//       alert("Угадал");
//     }
//   }
// }