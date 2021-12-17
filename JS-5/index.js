/*Задание 1*/

// function degree(x, n) {
//     if (n === 1) {
//       return x;
//     } else {
//       return x * degree(x, n - 1);
//     }
//   }
//   console.log( degree(5,2)); 


/*Задание 2*/

// let NOD = function(a, b) {
//     if (b === 0) {
//         return a;
//     }

//     return NOD(b, a % b);
// };
// console.log(NOD(2, 45));

/*Задание 3*/

// function maxNumber(n){
//     if(n == 0){ return 0;}
//     else{
//       return Math.max(n%10, maxNumber(Math.floor(n/10)));
//     }
//   }
//   console.log(maxNumber(1684));

/*Задание 4*/

// function prime(num) {
//     for(let i = 2; i < num; i++)
//       if(num % i === 0) return false;
//     return num > 1;
//   }
//   console.log(prime(7));

/*Задание 5*/

// function fact(num)
// {
//     let a = 2;
//     let b = "";
//     while (num > a){
//         while(num%a==0){
//             num/=a;
//             b += a +'*' ;
//         }
//         a++;
//         if(num==a){
//             b += a  ;
//         }
//     }
//     return b;
// }
// console.log(fact(18));

/*Задание 6*/

// function fib(n) {
//     if (n < 2) return n;
//   return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(3)); 