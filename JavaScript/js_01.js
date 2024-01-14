// function 나의함수(a,b) {
//     console.log('결과');
//     return a+b;
// }
//
// //
// const result = 나의함수(2,3);
// console.log(result);

// function 안녕(){
//     console.log('hello')
//     return 10
// }
//
// 안녕()
// console.log(String(안녕()) + String(안녕()))

//exam1
// const age = prompt("나이를 입력하세요.");
// const parseAge = parseInt(age);
//
// if(18 <= parseAge){
//     console.log("안녕하세요!");
//     alert("안녕하세요!");
// }else if(10 <= parseAge){
//     console.log("반가워 꼬마친구!");
//     alert("반가워 꼬마친구!");
// }else if(parseAge < 10){
//     console.log("부럽다...");
//     alert("부럽다...");
// }

// const score = prompt("성적을 입력하세요.");
//
// if(score >= 90){
//     alert("A");
// }else if(score >= 80){
//     alert("B");
// }else if(score >= 70){
//     alert("C");
// }else if(score >= 60){
//     alert("D");
// }else{
//     alert("강해져서 돌아와라");
// }

// const score2 = prompt("성적을 입력하세요.");
// score2 >= 90 ? alert("A")
//     : score2 >= 80 ? alert("B")
//         : score2 >= 70 ? alert("C")
//             : score2 >= 60 ? alert("D")
//                 : alert("강해져서 돌아와라");
// alert(score2 >= 90 ? "A"
//     : score2 >= 80 ? "B"
//         : score2 >= 70 ? "C"
//             : score2 >= 60 ? "D"
//                 : "강해져서 돌아와라");

// const score = prompt("성적을 입력하세요.");
//
// switch (Math.floor(score/10)) {
//     case 9:
//         alert("A");
//         break;
//     case 8:
//         alert("B");
//         break;
//     case 7:
//         alert("C");
//         break;
//     case 6:
//         alert("D");
//         break;
//     default:
//         console.log(score/10)
//         alert("강해져서 돌아와라");
//         break;
// }

// const cars2 = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];
// let text2 = ''
// for (let i = 0; i < cars2.length; i++) {
//     text2 += '<section><h2>' + cars2[i] + '</h2></section>'
// }
// text2

// for(let i = 2 ; i < 10 ; i++){
//     for(let j = 1 ; j < 10 ; j++){
//         document.write(`${5} * ${j} = ${5*j} </br>`);
//     }
//     document.write("</br>");
// }

let num = 1;

while(num<=10){
    if(num != 4 && num != 7){
        document.write(`${num}`);
    }
    num++;
}