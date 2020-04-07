const clickButton = document.querySelector('.toggle-menu');

clickButton.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('show-nav');
});