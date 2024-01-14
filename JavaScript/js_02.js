// const myArray = ["사과", "바나나", "수박"];
// myArray.shift();
// console.log(myArray);
// myArray.unshift("오이", "배");
// console.log(myArray);

// const myArray = ["사과", "바나나", "수박"];
// myArray.shift();
// console.log(myArray);
// myArray.unshift("오이", "배");
// console.log(myArray);

// const fish = ['정어리', '고등어', '돌고래', '참치', '고래상어', '코끼리'];
// 1. splice 를 이용해 코끼리를 제거해보세요
// 2. 참치 다음에 다금바리를 추가해보세요
// 3. 돌고래를 제거하고 옥돔과 갈치를 추가해보세요

// fish.splice(5,1,);
// console.log(fish);
// fish.splice(4,0,'다금바리');
// console.log(fish);
// fish.splice(2,1,'옥돔','갈치');
// console.log(fish);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr);
// const newArr = arr.filter(function(el) {
//     return el%2===0;
// });
//
// console.log(newArr);

// let myObj = {
//     val1: 100,
//     func1: function () {
//         console.log(this);
//     }
// }
//
// myObj.func1();

// / * this */
// function sayName(){
//     console.log(this.name);
// }
//
// var name = 'Hero';
// // 전역으로 선언한 name 변수의 앞에는 window 가 생략되어 있습니다.
// // 때문에 window.name === "Hero" 가 성립합니다.
// let peter = {
//     name : 'Peter Parker',
//     sayName : sayName
// }
//
// let bruce = {
//     name : 'Bruce Wayne',
//     sayName : sayName
// }
//
// sayName();
// peter.sayName();
// bruce.sayName();

/* sayName() 함수를 실행했을 때와
peter, bruce 객체의 sayName 함수를 호출했을 때의 결과를 비교해 보세요 */

/* this 사용 예시 */

// let 호텔 = [{
//     '이름' : '하나호텔',
//     '위치' : '제주도 제주시 001',
//     '가격' : {'A':50000, 'B':30000, 'C':15000},
//     '방의개수' : 50,
//     '예약자수' : 25,
//     '남은방의개수' : function(){return this.방의개수 - this.예약자수}
// },{
//     '이름' : '둘호텔',
//     '위치' : '제주도 제주시 002',
//     '가격' : {'A':100000, 'B':60000, 'C':30000},
//     '방의개수' : 100,
//     '예약자수' : 30,
//     '남은방의개수' : function(){return this.방의개수 - this.예약자수}
// },{
//     '이름' : '셋호텔',
//     '위치' : '제주도 제주시 003',
//     '가격' : {'A':80000, 'B':50000, 'C':30000},
//     '방의개수' : 120,
//     '예약자수' : 80,
//     '남은방의개수' : function(){return this.방의개수 - this.예약자수}
// }];
// console.log(호텔[0].남은방의개수());
// console.log(호텔[1].남은방의개수());
// console.log(호텔[2].남은방의개수());

// const me = {
//     name: '지수',
//     place: '집',
//     sleepy: 0,
//     eating : function(){
//         this.sleepy++;
//     }
// }
//
// const lunch ={
//     digested: function (pig) {
//         pig.eating();
//     }
// }

function me(name){
    this.name = name;
    this.sleepy = 0;
};
me.prototype.eating = function(){
    this.sleepy++;
}
function lunch(pig){
    this.digested = function(pig) {
        pig.eating();
    }
};
// lunch.prototype.digested = function(pig){
//     pig.eating();
// }
let jisu = new me("jisu");
let jimin = new me("jimin");
let noodle = new lunch(jisu);
let hamburger = new lunch(jimin);
noodle.digested(jisu);
hamburger.digested(jimin);
console.log(jisu);
console.log(jimin);
console.log(noodle.digested===hamburger.digested);
console.log(jisu.eating===jimin.eating);

