let btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', (e) => {
    console.log(e);
    console.log('Event1 Button1 was clicked');
});

btn1.addEventListener('click', (e) => {
    console.log('Event2 Button1 was clicked');
});