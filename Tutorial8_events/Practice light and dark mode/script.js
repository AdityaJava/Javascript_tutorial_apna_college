let darkToggle = document.querySelector('#dark-selected');
let lightToggle = document.querySelector('#light-selected');


darkToggle.addEventListener('click', () => {
    let body = document.querySelector('body');
    body.classList.add('darkmode');
});


lightToggle.addEventListener('click', () => {
    let body = document.querySelector('body');
    body.classList.remove('darkmode');
});