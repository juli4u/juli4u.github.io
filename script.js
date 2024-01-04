const boxes = document.querySelectorAll('.Box');

boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.transform = 'translateY(-25px)'; 
        box.style.transition = 'transform 0.3s ease'; 
    });

    box.addEventListener('mouseout', () => {
        box.style.transform = 'translateY(0)';
    });
});

const showAboutButton = document.querySelector('.show-about-button');
showAboutButton.addEventListener('click', () => {
    const aboutSection = document.querySelector('.about');
    aboutSection.style.display = 'block';
});