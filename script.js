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
    const aboutSection = document.querySelector('#About');
    aboutSection.style.display = 'block';
});

const showGalleryButton = document.querySelector('.show-gallery-button');
showGalleryButton.addEventListener('click', () => {
    const gallerySection = document.querySelector('#Gallery');
    gallerySection.style.display = 'block';
});

const downArrow = document.querySelector('.down-arrow');
let isToggled = false;

downArrow.addEventListener('click', () => {
    if (!isToggled) {
        downArrow.style.height = '300px';
    } else {
        downArrow.style.height = '100px';
    }
    isToggled = !isToggled;
});

