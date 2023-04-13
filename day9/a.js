// let obj = {
//     name: '小明',
//     foo: function () {
//         console.log(this, '1');
//     },
//     foo1: function () {
//         console.log(this, '2');
//         // let that = this;
//         setTimeout(function () {
//             this.foo();
//         }.bind(this), 0);
//     }
// }

// obj.foo1();

// console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);


// var data = [];
// for (var i = 0; i < 3; i++) {
//     // data[i] = function (i) {
//     //     return function () {
//     //         console.log(i);
//     //     }
//     // }(i);
//     data[i] = function (i) {
//         console.log(i);
//     }.bind(this, i);
// }

// data[0]();
// data[1]();
// data[2]();

// console.log(1);

// setTimeout(function () {
//     console.log(2);
// }, 0);

// new Promise(function (res, rej) {
//     console.log(3);
//     res(4);
// }).then(val => {
//     console.log(val);
// });

// function a5() {
//     console.log(5);
// }
// a5();

// async function a6() {
//     setTimeout(() => {
//         console.log(6);
//     });
//     console.log(7);
//     await console.log(8);
//     console.log(9);
//     a11();
// }

// a6();

// console.log(10);

// function a11() {
//     console.log(11);
// }

// function denounce(func, wait) {
//     var timeout;
//     return function () {
//         let context = this;
//         let args = arguments;
//         clearTimeout(timeout);
//         timeout = setTimeout(func.bind(context, ...args), wait);
//     }
// }

// let pig = 5;
// let sheep = 6;

// function b(pig, sheep) {
//     let timer = setInterval(denounce((a, b) => { console.log('a: ', a, 'b: ', b) }, 1000).bind(, pig, sheep), 500);
//     setTimeout(() => { clearInterval(timer); }, 1000);
// }

// b(pig, sheep);
