const gallery_animation = document.getElementById('gallery_animation');
const gallery_drawing = document.getElementById('gallery_drawing');
const gallery_graphicdesign = document.getElementById('gallery_graphicdesign');
const gallery_painting = document.getElementById('gallery_painting');
const gallery_creativecoding = document.getElementById('gallery_creativecoding');
const gallery_plasticarts = document.getElementById('gallery_plasticarts');

const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');


class galImgEle {
    constructor(filename, title, subtitle, body) {
        this.filename = filename;
        this.title = title;
        this.subtitle = subtitle;
        this.body = body;
    }
}

const imageNamesAnimation = [
    new galImgEle('ramadan_cali_2022.gif', 'Ramadan 2022', 'JANUARY 4, 2022', 'Ramadan is community. Ramadan is reflection. Ramadan is fasting. Ramadan is prayer. Ramadan Kareem.<br><br>Short animated pixelart loop. Digital pen drawn in Adobe Photoshop then tweened in Adobe Animate.'),
    new galImgEle('2022_tiger.gif', '2022. Year of the Tiger', 'JANUARY 4, 2022', 'A year summoning traits of bravery and competitiveness, but also generosity and charm.<br><br>Short animated loop. Digital pen drawn frame-by-frame in Adobe Animate.'),
    new galImgEle('cali2pali.gif', 'From Cali to Pali', 'MAY 21, 2021', 'A call to Save Sheikh Jarrah and stop the attack on Gaza during the 2021 Israel–Palestine crisis.<br><br>Short animated loop. Digital pen drawn frame-by-frame in Adobe Animate.'),
    new galImgEle('womensday.gif', "Women's Day 2021", 'MARCH 8, 2021', "Celebrating all women around the globe on International Women's Day.<br><br>Short animated loop. Digital pen drawn frame-by-frame in Adobe Animate with pop-up elements combined."),
    new galImgEle('astronaut.gif', 'No land to fall into', 'MARCH 30, 2021', 'Endless fall, into infinity and beyond, into self and outwards.<br><br>Short animated loop. Digital pen drawn frame-by-frame in Adobe Animate.'),
    new galImgEle('falling.gif', 'Are you woke?', 'JUNE 6, 2020', "If you let go, you shall find, your true self.<br><br>Short animated loop. Hand-drawn then post-processed in Adobe Photoshop."),
    new galImgEle('balloon.gif', 'Untitled (Draft#008)', 'MARCH 12, 2020', "In my world of my own, this balloon can be anything<br><br>Short animated loop. Hand-drawn.")];

const imageNamesCreativeCoding = [
new galImgEle('escaping_the_covid.gif', 'Escaping the COVID', 'APRIL 5, 2020', 'Escaping to a different realm.<br><br>20-second video made from an art-coding project during the COVID-19 pandemic. Generated using processing IDE (some graphics was drawn on Adobe Photoshop, some adopted from Nintendo (thanks!)).'),
    new galImgEle('gmms.gif', '0rgan1sm#032', 'MAY 2, 2020', 'Randomly generated organism #032. "Is it really there or is that just my anxiety?"<br><br>Short animated loop. Generated using Python.'),
    new galImgEle('bezier_01.gif', 'Chann3l#01', 'MARCH 10, 2021', 'Semi-random Bézier curves generation #01.<br><br>Short animated loop. Generated using processing IDE.'),
    new galImgEle('bezier_02.gif', 'Chann3l#02', 'MARCH 10, 2021', 'Semi-random Bézier curves generation #02.<br><br>Short animated loop. Generated using processing IDE.'),
    new galImgEle('bezier_03.gif', 'Chann3l#03', 'MARCH 10, 2021', 'Semi-random Bézier curves generation #03.<br><br>Short animated loop. Generated using processing IDE.'),
    new galImgEle('bezier_04.gif', 'Chann3l#04', 'MARCH 10, 2021', 'Semi-random Bézier curves generation #04.<br><br>Short animated loop. Generated using processing IDE.')];

const imageNamesGraphicDesign = [
    new galImgEle('purple_man_001.jpg', 'PurpleMan#01', 'NOVEMBER 8, 2021', 'The first digital collage in the twisted multi-dimensionally interlaced "Purple Man" series.<br><br>Digital pop art collage made with Adobe Photoshop.'),
    new galImgEle('spacething.jpg', 'Andromeda, we have a problem.', 'MARCH 6, 2021', "The mind is a tool, you can hear it out, but you don't have to follow its orders. Ask it to move over. Take over the driver's seat. You are in charge now.<br><br>Digital pop art collage made with Adobe Photoshop."),
    new galImgEle('ancients.jpg', 'I am mine and (belong) only to myself', 'JUNE 28, 2020', 'The psychological chains and patriarchal warfare are soon to be broken by the chain-breaker.<br><br>Digital pop art collage made with Adobe Photoshop.')];

const imageNamesDrawing = ['dig_art_01.jpg',
    'sketch_01.jpg', 'sketch_02.jpg', 'sketch_03.jpg', 'sketch_04.jpg',
    'fd_07_01.jpg', 'fd_07_02.jpg', 'fd_07_03.jpg', 'fd_07_04.jpg',
    'fd_06_01.jpg', 'fd_06_02.jpg', 'fd_06_03.jpg', 'fd_06_04.jpg',
    'fd_05_01.jpg', 'fd_05_02.jpg',
    'fd_04_01.jpg', 'fd_04_02.jpg',
    'fd_03_01.jpg', 'fd_03_02.jpg', 'fd_03_03.jpg', 'fd_03_04.jpg'];

const imageNamesPainting = ['pnt_05.jpg', 'pnt_04.jpg', 'pnt_03.jpg']

const imageNamesPlasticArts = ['clay.jpg', 'concrete.jpg', 'gypsum.jpg', 'plasticine.jpg']

const selectedIndex = null;

imageNamesAnimation.forEach(i => {
    const image = document.createElement('img');
    image.src = 'images/art/thumbs/thumb_' + i.filename;
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        popup.style.transform = 'translateY(0)';
        selectedImage.src = 'images/art/gifs/' + i.filename;
        selectedImageHeader.innerHTML = i.title;
        selectedImageSubHeader.innerHTML = i.subtitle;
        selectedImageBody.innerHTML = i.body;
    })
    gallery_animation.appendChild(image);
})

imageNamesCreativeCoding.forEach(i => {
    const image = document.createElement('img');
    image.src = 'images/art/thumbs/thumb_' + i.filename;
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        popup.style.transform = 'translateY(0)';
        selectedImage.src = 'images/art/gifs/' + i.filename;
        selectedImageHeader.innerHTML = i.title;
        selectedImageSubHeader.innerHTML = i.subtitle;
        selectedImageBody.innerHTML = i.body;
    })
    gallery_creativecoding.appendChild(image);
})

imageNamesGraphicDesign.forEach(i => {
    const image = document.createElement('img');
    image.src = 'images/art/thumbs/thumb_' + i.filename;
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        popup.style.transform = 'translateY(0)';
        selectedImage.src = 'images/art/popart/' + i.filename;
        selectedImageHeader.innerHTML = i.title;
        selectedImageSubHeader.innerHTML = i.subtitle;
        selectedImageBody.innerHTML = i.body;
    })
    gallery_graphicdesign.appendChild(image);
})

imageNamesDrawing.forEach(i => {
    const image = document.createElement('img');
    image.src = 'images/art/thumbs/thumb_' + i;
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        popup.style.transform = 'translateY(0)';
        selectedImage.src = 'images/art/drawing/' + i;
        selectedImageHeader.innerHTML = '<i>Untitled</i>';
    })
    gallery_drawing.appendChild(image);
})

imageNamesPainting.forEach(i => {
    const image = document.createElement('img');
    image.src = 'images/art/thumbs/thumb_' + i;
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        popup.style.transform = 'translateY(0)';
        selectedImage.src = 'images/art/painting/' + i;
        selectedImageHeader.innerHTML = '<i>Untitled</i>';
    })
    gallery_painting.appendChild(image);
})

imageNamesPlasticArts.forEach(i => {
    const image = document.createElement('img');
    image.src = 'images/art/thumbs/thumb_' + i;
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        popup.style.transform = 'translateY(0)';
        selectedImage.src = 'images/art/plasticarts/' + i;
        selectedImageHeader.innerHTML = '<i>Untitled</i>';
    })
    gallery_plasticarts.appendChild(image);
})

popup.addEventListener('click', () => {
    popup.style.transform = 'translateY(-100%)';
    selectedImage.src = '';
    selectedImageHeader.innerHTML = '';
    selectedImageSubHeader.innerHTML = '';
    selectedImageBody.innerHTML = '';
})