let btn1 = document.querySelector('#btn1');
btn1.onclick = () => {
    console.log('btn1 clicked');
}

console.log(btn1);

let div1 = document.querySelector('#div1');

div1.onmouseover = () => {
    console.log('Mouse inside box');
}