let darkToggle = document.querySelector('#dark-selected');
let lightToggle = document.querySelector('#light-selected');

let modeButtons = document.querySelectorAll('.mode-selectors')

modeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.id);
        let body = document.querySelector('body');
        if (e.target.id === 'dark-selected') {
            body.classList.add('darkmode');
        }
        if (e.target.id === 'light-selected') {
            body.classList.remove('darkmode');
        }
    });
});