let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
};
document.querySelector('#navi-id').onclick = () => {
    navbar.classList.toggle('active');
};

// teks gerak
const typed = new Typed('.multiple-text', {
    strings: ['Mahasiswa', 'Muhammadiyah', 'Malang'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
