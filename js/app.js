const gallery_animation = document.getElementById('gallery_animation');
const gallery_drawing = document.getElementById('gallery_drawing');
const gallery_graphicdesign = document.getElementById('gallery_graphicdesign');
const gallery_painting = document.getElementById('gallery_painting');
const gallery_creativecoding = document.getElementById('gallery_creativecoding');
const gallery_plasticarts = document.getElementById('gallery_plasticarts');

const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');

const imageNamesAnimation = ['cali2pali.gif', 'womensday.gif', 'astronaut.gif', 'falling.gif', 'baloon.gif']

const imageNamesCreativeCoding = ['gifs/gmms.gif',
    'gifs/bezier_01.gif', 'gifs/bezier_02.gif', 'gifs/bezier_03.gif', 'gifs/bezier_04.gif']

const imageNamesGraphicDesign = ['purple_man_001.jpg', 'spacething.jpg', 'ancients.jpg']

const imageNamesDrawing = ['dig_art_01.jpg',
    'sketch_01.jpg', 'sketch_02.jpg', 'sketch_03.jpg', 'sketch_04.jpg',
    'fd_07_01.jpg', 'fd_07_02.jpg', 'fd_07_03.jpg', 'fd_07_04.jpg',
    'fd_06_01.jpg', 'fd_06_02.jpg', 'fd_06_03.jpg', 'fd_06_04.jpg',
    'fd_05_01.jpg', 'fd_05_03.jpg',
    'fd_04_01.jpg', 'fd_04_02.jpg', 'fd_04_03.jpg', 'fd_04_04.jpg', 'fd_04_05.jpg',
    'fd_03_01.jpg', 'fd_03_02.jpg', 'fd_03_03.jpg', 'fd_03_04.jpg'];

const imageNamesPainting = ['pnt_05.jpg', 'pnt_04.jpg', 'pnt_03.jpg', 'pnt_02.jpg', 'pnt_01.jpg']

const imageNamesPlasticArts = ['clay.jpg', 'concrete.jpg', 'gypsum.jpg', 'plasticine.jpg']

const selectedIndex = null;

imageNamesAnimation.forEach(i => {
    const image = document.createElement('img');
    image.src = 'images/art/gifs/' + i;
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        popup.style.transform = 'translateY(0)';
        selectedImage.src = 'images/art/gifs/' + i;
    })
    gallery_animation.appendChild(image);
})

imageNamesCreativeCoding.forEach(i => {
    const image = document.createElement('img');
    image.src = 'images/art/' + i;
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        popup.style.transform = 'translateY(0)';
        selectedImage.src = 'images/art/' + i;
    })
    gallery_creativecoding.appendChild(image);
})

imageNamesGraphicDesign.forEach(i => {
    const image = document.createElement('img');
    image.src = 'images/art/popart/' + i;
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        popup.style.transform = 'translateY(0)';
        selectedImage.src = 'images/art/popart/' + i;
    })
    gallery_graphicdesign.appendChild(image);
})

imageNamesDrawing.forEach(i => {
    const image = document.createElement('img');
    image.src = 'images/art/drawing/' + i;
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        popup.style.transform = 'translateY(0)';
        selectedImage.src = 'images/art/drawing/' + i;
    })
    gallery_drawing.appendChild(image);
})

imageNamesPainting.forEach(i => {
    const image = document.createElement('img');
    image.src = 'images/art/painting/' + i;
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        popup.style.transform = 'translateY(0)';
        selectedImage.src = 'images/art/painting/' + i;
    })
    gallery_painting.appendChild(image);
})

imageNamesPlasticArts.forEach(i => {
    const image = document.createElement('img');
    image.src = 'images/art/plasticarts/' + i;
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        popup.style.transform = 'translateY(0)';
        selectedImage.src = 'images/art/plasticarts/' + i;
    })
    gallery_plasticarts.appendChild(image);
})

popup.addEventListener('click', () => {
    popup.style.transform = 'translateY(-100%)';
    selectedImage.src = '';
})