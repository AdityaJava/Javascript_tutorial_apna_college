let btn1 = document.querySelector('#btn1');
btn1.onclick = (e) => {
    console.log(e);
    console.log('btn1 clicked');
}

console.log(btn1);

let div1 = document.querySelector('#div1');

div1.onmouseover = (e) => {
    console.log(e);
    console.log('Mouse inside box');
}