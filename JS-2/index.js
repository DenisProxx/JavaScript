// /*Задание 1*/
// let age = prompt('Введите возраст' , 0);

// if(age >=0 && age <12){
//     alert('Вы ребенок');
// }
//  else if(age >=12 && age <18){
// alert('Вы подросток');
// }
// else if(age >=18 && age <60){
//     alert('Вы взрослый');
//     }
// else if(age >=60){
//     alert('Вы пенсионер');
//     }

// /*Задание 2*/
// let number = prompt('Введите число от 0 до 9' , 0);
// switch(number){
//         case '0' :
//         alert(')');
//         break;
//         case '1' :
//         alert('!');
//         break;
//         case '2' :
//         alert('@');
//         break; 
//         case '3' :
//         alert('#');
//         break; 
//         case '4' :
//         alert('$');
//         break; 
//         case '5' :
//         alert('%');
//         break; 
//         case '6' :
//         alert('^');
//         break; 
//         case '7' :
//         alert('&');
//         break; 
//         case '8' :
//         alert('*');
//         break; 
//         case '9' :
//         alert('(');
//         break;       
//     }

//     /*Задание 3 */
//     let number = prompt('Введите трехзначное число', 0);
//     if (number[0] === number[1] || number[0] === number[2] || number [1] === number[2])
//     {alert('есть одинаковые цифры');
//     }
//     else{
//     alert('нету одинаковых цифр');
//     }

//     /*Задание 4 */
//     let year = prompt('Введите год' , 0);
//     if (year % 4 === 0 && year % 100 != 0 || year % 400 === 0)
//     {
//     alert('Год високосный');
//     }
//     else
//     {
//     alert('Год не високосный');
//     }

//     /*Задание 5 */
//     let number = prompt('Введите пятиразрядное число' , 0);
//     if (number === number.split('').reverse().join(''))
//     {alert('Это палиндром');
//     }
//     else {
//     alert('Это не палиндром');
//     }

//     /*Задание 6 */

//     let amount = prompt('Введите количество долларов' , 0);
//     let currency = prompt('Введите евро = 1, гривну = 2, манат = 3', 0);
//     switch (currency){
//     case '1' :
//         alert(amount*0.85 );
//         break;
//     case '2' :
//         alert(amount*26.71);
//         break;
//     case '3' :
//         alert(amount*1.70);
//         break;
//     }

//     /*Задание 7 */
//     let sum = prompt('Введите сумму покупки' , 0);
//     if (sum >= 200 && sum <300)
//     {
//     alert (sum-(sum/100*3));
//     }
//     else if(sum>=300 && sum <500)
//     {
//     alert (sum-(sum/100*5));   
//     }
//     else if (sum >=500)
//     {
//     alert (sum-(sum/100*7));      
//     }

//     /*Задание 8 */
//     let d = prompt('Введите длину окружности ' ,0);
//     let p = prompt('Введите периметр квадрата' ,0);
//     if( d <= p)
//     {
//     alert('Окружность влазит в квадрат');   
//     }
//     else if(d>p)
//     {
//     alert('Окружность не влазит в квадрат');    
//     }

//     /*Задание 9*/
//     let  city= prompt('Назовите город России? 1-Москва 2-Пекин 3-Барселона' );
//     let  currency= prompt('Назовите валюту в России? 1-рубль 2-доллар 3-евро' );
//     let  year= prompt('Назовите какой сейчас год? 1-2021 2-2022 3-2020' );
//     let score=0;
//     if(city==1)
//     {
//     score +=2;
//     }
//     if(currency==1)
//     {
//     score +=2;
//     }
//     if(year==1)
//     {
//     score +=2;
//     }
//     alert(score);

//     /*Задание 10*/
//     let day = prompt("Введите день ",0);
//     let month = prompt("Введите месяц ",0);
//     let year = prompt("Введите год ",0);
//     if(day<=31){

//     }
//     if(month <=12){

//     }
//     if(year<=3000){

//     }
//     alert(++day + "." + ++month  +"."+ ++year );
