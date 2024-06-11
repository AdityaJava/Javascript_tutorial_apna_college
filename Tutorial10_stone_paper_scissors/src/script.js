let gameImages = document.querySelectorAll('.img-tgs');

console.log('event');
console.log(gameImages);
gameImages.forEach(gameImage => {
    gameImage.addEventListener('click', (e) => {
        console.log(e.target.id);
    })
})