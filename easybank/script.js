const toggleBtn = document.querySelector('.hamburger-menu')

const navbar = document.querySelector('.navbar')

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
})
