let btn1 = document.querySelector('#btn1');
btn1.onclick = (e) => {
    console.log(e);
    console.log('btn1 clicked');
}

console.log(btn1);

let div1 = document.querySelector('#div1');

div1.onmouseover = (e) => {
    console.log(e);
    console.log('Event1 Mouse inside box');
}

div1.onmouseover = (e) => {
    console.log(e);
    console.log('Event2 Mouse inside box');
}

//The drawback of this is that you can only have one event at a time by this method there is more efficient method
//That is of having EventListeners