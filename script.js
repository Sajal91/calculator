let input = document.querySelector('input');
input.style.fontSize = "50px";
input.style.textAlign = "right";

let cancel_btn = document.querySelector('#cancel-btn');
let percent_btn = document.querySelector('#percent-btn');
let delete_btn = document.querySelector('#delete-btn');
let divide_btn = document.querySelector('#divide-btn');
let btn_7 = document.querySelector('#btn-7');
let btn_8 = document.querySelector('#btn-8');
let btn_9 = document.querySelector('#btn-9');
let multiply_btn = document.querySelector('#multiply-btn');
let btn_4 = document.querySelector('#btn-4');
let btn_5 = document.querySelector('#btn-5');
let btn_6 = document.querySelector('#btn-6');
let sub_btn = document.querySelector('#sub-btn');
let btn_1 = document.querySelector('#btn-1');
let btn_2 = document.querySelector('#btn-2');
let btn_3 = document.querySelector('#btn-3');
let add_btn = document.querySelector('#add-btn');
let btn_00 = document.querySelector('#btn-00');
let btn_0 = document.querySelector('#btn-0');
let point_btn = document.querySelector('#point-btn');
let equal_btn = document.querySelector('#equal-btn');


let one = function () {
    input.value = `${input.value}` + `1`;
}
let two = function () {
    input.value = `${input.value}` + `2`;
}
let three = function () {
    input.value = `${input.value}` + `3`;
}
let four = function () {
    input.value = `${input.value}` + `4`;
}
let five = function () {
    input.value = `${input.value}` + `5`;
}
let six = function () {
    input.value = `${input.value}` + `6`;
}
let seven = function () {
    input.value = `${input.value}` + `7`;
}
let eight = function () {
    input.value = `${input.value}` + `8`;
}
let nine = function () {
    input.value = `${input.value}` + `9`;
}
let zero = function () {
    input.value = `${input.value}` + `0`;
}
let dblzero = function () {
    input.value = `${input.value}` + `00`;
}
let point = function () {
    input.value = `${input.value}` + `.`;
}

let del = function () {
    let a = input.value;
    let m =a.length-1;
    let n = ``;
    for(let i=0; i<m; i++) {
        n = n + a[i];
    }
    input.value = n;
}


// let add = function () {
//     let num1 = parseInt(input.value);
//     input.value = "";
//     let num2 = parseInt(input.value);
//     input.value = `${num1+num2}`;
// }
// let equal = function () {
//     sum = num1 + num2;
//     input.value = `${sum}`;
// }

input.addEventListener('click', function(event) {
    event.preventDefault();
});

cancel_btn.addEventListener('click', function(event) {
    input.value = "";
});

btn_1.addEventListener('click',one);
btn_2.addEventListener('click',two);
btn_3.addEventListener('click',three);
btn_4.addEventListener('click',four);
btn_5.addEventListener('click',five);
btn_6.addEventListener('click',six);
btn_7.addEventListener('click',seven);
btn_8.addEventListener('click',eight);
btn_9.addEventListener('click',nine);
btn_00.addEventListener('click',dblzero);
btn_0.addEventListener('click',zero);
point_btn.addEventListener('click',point);
delete_btn.addEventListener('click',del);


// add_btn.addEventListener('click',add);
// equal_btn.addEventListener('click',equal);
