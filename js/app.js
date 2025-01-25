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
    new galImgEle('ramadan_cali_2022.gif', 'Ramadan 2022', 'APRIL 2, 2022', 'Ramadan is community. Ramadan is reflection. Ramadan is fasting. Ramadan is prayer. Ramadan Kareem.<br><br>Short animated pixelart loop. Drawn with drawing-pad in Adobe Photoshop then tweened in Adobe Animate.'),
    new galImgEle('2022_tiger.gif', '2022. Year of the Tiger', 'JANUARY 4, 2022', 'A year summoning traits of bravery and competitiveness, but also generosity and charm.<br><br>Short animated loop. Drawn with drawing-pad frame-by-frame in Adobe Animate.'),
    new galImgEle('cali2pali.gif', 'From Cali to Pali', 'MAY 21, 2021', 'A call to Save Sheikh Jarrah and stop the attack on Gaza during the 2021 Israel–Palestine crisis.<br><br>Short animated loop. Drawn with drawing-pad frame-by-frame in Adobe Animate.'),
    new galImgEle('astronaut.gif', 'No land to fall into', 'MARCH 30, 2021', 'Endless fall, into infinity and beyond, into self and outwards.<br><br>Short animated loop. Drawn with drawing-pad frame-by-frame in Adobe Animate.'),
    new galImgEle('womensday.gif', "Women's Day 2021", 'MARCH 8, 2021', "Celebrating all women around the globe on International Women's Day.<br><br>Short animated loop. Drawn with drawing-pad frame-by-frame in Adobe Animate with pop-up elements combined."),
    new galImgEle('falling.gif', 'Are you woke?', 'JUNE 6, 2020', "If you let go, you shall find, your true self.<br><br>Short animated loop. Hand-drawn then post-processed in Adobe Photoshop."),
    new galImgEle('balloon.gif', 'Untitled (Draft#008)', 'MARCH 12, 2020', "In my world of my own, this balloon can be anything.<br><br>Short animated loop. Hand-drawn.")];

const imageNamesPainting = [
    new galImgEle('pnt_riddle_03.jpg', 'Inner Landscapes: Beyond', 'APRIL 30, 2022', 'An old man – perhaps a Sheikh Manhattan – entangled in inner conflicts, his queries concealed as riddles within impossible geometry. It is the third painting in the series "Inner Landscapes".<br><br>11x14 inch acrylic & collage (mixed media) on canvas.'),
    new galImgEle('pnt_riddle_02.jpg', 'Inner Landscapes: Clash of Egos', 'FEBRUARY 15, 2022', 'Identity, ego, and transcendence converge on the canvas. It is the second painting in the series "Inner Landscapes".<br><br>11x14 inch acrylic & collage (mixed media) on canvas.'),
    new galImgEle('pnt_riddle_01.jpg', 'Inner Landscapes: Battles of Identity', 'JANUARY 30, 2022', 'Physical and mental battle in a wilderness of ideas flooding my mind. It is the first painting in the series "Inner Landscapes".<br><br>11x14 inch acrylic & collage (mixed media) on canvas.'),
    new galImgEle('pnt_trkbsma.jpg', 'Portrait of Basma Masri, Tarik Batal and their children', 'MAY 24, 2023', 'Acrylic on canvas.'),
    new galImgEle('pnt_09.jpg', 'Portrait of Lina Shbita', 'MARCH 15, 2022', 'Acrylic & collage (mixed media) on canvas.'),
    new galImgEle('pnt_08.jpg', 'Portrait of Hadar Cohen', 'MARCH 2, 2022', 'Acrylic & collage (mixed media) on canvas.'),
    new galImgEle('pnt_07.jpg', 'Portrait of Nader Sid-Ahmad & Sara Osman', 'FEBRUARY 27, 2022', 'Acrylic & collage (mixed media) on canvas.'),
    new galImgEle('pnt_10.jpg', 'Portrait of Ehsan Qasemi', 'JANUARY 13, 2022', 'Acrylic on canvas.'),
    new galImgEle('pnt_mika.jpg', 'Portrait of Mika Scharf (1995-2018)', 'JULY 7, 2021', 'Rest in peace, free soul.<br><br>Acrylic on canvas.'),
    new galImgEle('pnt_06.jpg', 'Portrait of Brandy Carstens &  Athier Mousawi', 'JUNE 6, 2021', 'Acrylic on canvas.'),
    new galImgEle('pnt_05.jpg', 'Portrait of Hala Kaddoura', 'APRIL 19, 2020', 'Acrylic & collage (mixed media) on canvas.'),
    new galImgEle('pnt_04.jpg', 'Suba', 'DECEMBER 29, 2006', 'Taken from a larger pirate-themed family portrait.<br><br>Acrylic on canvas.'),
    new galImgEle('pnt_03.jpg', 'Haram esh-Sharif, Jerusalem', 'SEPTEMBER 8, 2006', 'Dome of the Rock & the Haram esh-Sharif compound in East Jerusalem.<br><br>Acrylic on canvas.')];

const imageNamesGraphicDesign = [
    new galImgEle('handala_8bit.jpg', 'Handala - timeless', 'OCTOBER 20, 2023', 'Digital pop art collage made with Adobe Photoshop.'),
    new galImgEle('i_am_the_moon.jpg', 'I am the moon', 'MARCH 26, 2022', 'Digital pop art collage made with Adobe Photoshop.'),
    new galImgEle('being_of_god_of_self.jpg', 'A being of god. A being of self', 'FEBRUARY 19, 2022', 'Digital pop art collage made with Adobe Photoshop. Combines generative elements generated using processing IDE.'),
    new galImgEle('eternal_journey_of_growth.jpg', 'The eternal journey of growth', 'FEBRUARY 10, 2022', 'Digital pop art collage made with Adobe Photoshop.'),
    new galImgEle('purple_man_001.jpg', 'The colonialism game', 'NOVEMBER 8, 2021', 'Digital pop art collage made with Adobe Photoshop.'),
    new galImgEle('spacething.jpg', 'Andromeda, we have a problem.', 'MARCH 6, 2021', "The mind is a tool, you can hear it out, but you don't have to follow its orders. Ask it to move over. Take over the driver's seat. You are in charge now.<br><br>Digital pop art collage made with Adobe Photoshop."),
    new galImgEle('ancients.jpg', 'I am mine and (belong) only to myself', 'JUNE 28, 2020', 'The psychological chains and patriarchy will be broken.<br><br>Digital pop art collage made with Adobe Photoshop.')];

const imageNamesCreativeCoding = [
    new galImgEle('bezier_01.gif', 'Chann3l#01', 'MARCH 10, 2021', 'Semi-random Bézier curves generation #01.<br><br>Short animated loop. Generated using processing IDE.'),
    new galImgEle('bezier_02.gif', 'Chann3l#02', 'MARCH 10, 2021', 'Semi-random Bézier curves generation #02.<br><br>Short animated loop. Generated using processing IDE.'),
    new galImgEle('bezier_03.gif', 'Chann3l#03', 'MARCH 10, 2021', 'Semi-random Bézier curves generation #03.<br><br>Short animated loop. Generated using processing IDE.'),
    new galImgEle('bezier_04.gif', 'Chann3l#04', 'MARCH 10, 2021', 'Semi-random Bézier curves generation #04.<br><br>Short animated loop. Generated using processing IDE.'),
    new galImgEle('gmms.gif', '0rgan1sm#032', 'MAY 2, 2020', 'Randomly generated organism #032. "Is it really there or is that just my anxiety?"<br><br>Short animated loop. Generated using Python.'),
    new galImgEle('escaping_the_covid.gif', 'Escaping the COVID', 'APRIL 5, 2020', 'Escaping to a different realm.<br><br>20-second video made from an art-coding project during the COVID-19 pandemic. Generated using processing IDE (some graphics was drawn on Adobe Photoshop, some adopted from Nintendo (thanks!)).')];

const imageNamesDrawing = [
    new galImgEle('fd_09_01.jpg', 'Untitled figure drawing #091', 'APRIL 7, 2022', 'Unknown model<br>15 minute pose.<br><br>Pencil on paper.'),
    new galImgEle('fd_09_02.jpg', 'Untitled figure drawing #092', 'APRIL 7, 2022', 'Unknown model<br>5-10 minute poses.<br><br>Pencil on paper.'),
    new galImgEle('fd_09_03.jpg', 'Untitled figure drawing #093', 'APRIL 7, 2022', 'Unknown model<br>5 minute poses.<br><br>Pencil on paper. Coloring in Adobe Photoshop.'),
    new galImgEle('fd_09_04.jpg', 'Untitled figure drawing #094', 'APRIL 7, 2022', 'Unknown model<br>1-5 minute poses.<br><br>Pencil on paper.'),
    new galImgEle('fd_08_01.jpg', 'Untitled figure drawing #081', 'SEPTEMBER 15, 2021', 'Unknown model<br>15 minute pose.<br><br>Pencil on paper. Color inverting in Adobe Photoshop.'),
    new galImgEle('fd_08_02.jpg', 'Untitled figure drawing #082', 'SEPTEMBER 15, 2021', 'Unknown model<br>5-10 minute poses.<br><br>Pencil on paper.'),
    new galImgEle('fd_08_03.jpg', 'Untitled figure drawing #083', 'SEPTEMBER 15, 2021', 'Unknown model<br>5 minute poses.<br><br>Pencil on paper.'),
    new galImgEle('fd_08_04.jpg', 'Untitled figure drawing #084', 'SEPTEMBER 15, 2021', 'Unknown model<br>1 minute poses.<br><br>Pencil on paper.'),
    new galImgEle('dig_art_01.jpg', "Daft Punk's new Perseverance", 'FEBRUARY 27, 2021', "Daft Punk announced their split just days after NASA's Perseverance rover sent back the first ever sounds from Mars. coincidence?<br><br>Digital drawing and coloring in Adobe Photoshop."),
    new galImgEle('sketch_02.jpg', 'Digital portrait of Tarik Batal', 'APRIL 26, 2021', 'Digital drawing and coloring in Adobe Photoshop.'),
    new galImgEle('sketch_03.jpg', 'Digital portrait of Sarah Abbas', 'APRIL 20, 2021', 'Digital drawing and coloring in Adobe Photoshop.'),
    new galImgEle('sketch_01.jpg', 'Digital portrait of Lina Shbita', 'MARCH 15, 2021', 'Digital drawing and coloring in Adobe Photoshop.'),
    new galImgEle('sketch_04.jpg', 'Digital self-portrait', 'MARCH 5, 2021', 'Digital coloring in Adobe Photoshop.'),
    new galImgEle('fd_07_01.jpg', 'Untitled figure drawing #071', 'FEBRUARY 26, 2020', 'Model: Figuratively Aurora<br>10 minute pose.<br><br>Pencil on paper. Soft coloring in Adobe Photoshop.'),
    new galImgEle('fd_07_02.jpg', 'Untitled figure drawing #072', 'FEBRUARY 26, 2020', 'Model: Figuratively Aurora<br>5 minute poses.<br><br>Pencil on paper. Soft coloring in Adobe Photoshop.'),
    new galImgEle('fd_07_03.jpg', 'Untitled figure drawing #073', 'FEBRUARY 26, 2020', 'Model: Figuratively Aurora<br>3-5 minute poses.<br><br>Pencil on paper. Soft coloring in Adobe Photoshop.'),
    new galImgEle('fd_07_04.jpg', 'Untitled figure drawing #074', 'FEBRUARY 26, 2020', 'Model: Figuratively Aurora<br>30-90 second poses.<br><br>Pencil on paper. Soft coloring in Adobe Photoshop.'),
    new galImgEle('fd_06_01.jpg', 'Untitled figure drawing #061', 'MARCH 11, 2020', 'Unknown model<br>10 minute pose.<br><br>Pencil on paper.'),
    new galImgEle('fd_06_02.jpg', 'Untitled figure drawing #062', 'MARCH 11, 2020', 'Unknown model<br>3-5 minute poses.<br><br>Pencil on paper.'),
    new galImgEle('fd_06_03.jpg', 'Untitled figure drawing #063', 'MARCH 11, 2020', 'Unknown model<br>3-5 minute poses.<br><br>Pencil on paper.'),
    new galImgEle('fd_06_04.jpg', 'Untitled figure drawing #064', 'MARCH 11, 2020', 'Unknown model<br>30-60 second poses.<br><br>Pencil on paper.'),
    new galImgEle('fd_05_01.jpg', 'Untitled figure drawing #051', 'FEBRUARY 12, 2020', 'Unknown model<br>10 minute pose.<br><br>Pencil on paper. Soft coloring and pop art in Adobe Photoshop.'),
    new galImgEle('fd_05_02.jpg', 'Untitled figure drawing #052', 'FEBRUARY 12, 2020', 'Unknown model<br>5 minute poses.<br><br>Pencil on paper. Soft coloring in Adobe Photoshop.'),
    new galImgEle('fd_04_01.jpg', 'Untitled figure drawing #041', 'NOVEMBER 20, 2019', 'Unknown model<br>1 minute pose.<br><br>Pencil on paper. Soft coloring in Adobe Photoshop.'),
    new galImgEle('fd_04_02.jpg', 'Untitled figure drawing #042', 'NOVEMBER 20, 2019', 'Unknown model<br>30-60 second poses.<br><br>Pencil on paper. Soft coloring in Adobe Photoshop.'),
    new galImgEle('fd_03_01.jpg', 'Untitled figure drawing #031', 'OCTOBER 23, 2019', 'Model: Lucy Smith<br>10 minute pose.<br><br>Pencil on paper.'),
    new galImgEle('fd_03_02.jpg', 'Untitled figure drawing #032', 'OCTOBER 23, 2019', 'Model: Lucy Smith<br>5-10 minute poses.<br><br>Pencil on paper.'),
    new galImgEle('fd_03_03.jpg', 'Untitled figure drawing #033', 'OCTOBER 23, 2019', 'Model: Lucy Smith<br>3-5 minute poses.<br><br>Pencil on paper.'),
    new galImgEle('fd_03_04.jpg', 'Untitled figure drawing #034', 'OCTOBER 23, 2019', 'Model: Lucy Smith<br>30 second poses.<br><br>Pencil on paper.')];

const imageNamesPlasticArts = [
    new galImgEle('clay.jpg', 'Self-portrait (clay)', '2004-2006', '"Basel" is written in English (top), Arabic (left) & Hebrew (bottom).<br><br>Clay.'),
    new galImgEle('concrete.jpg', '"Basel" (concrete)', '2005-2006', '"Basel" 3D sculpture<br><br>Ytong Autoclaved Aerated Concrete (AAC).'),
    new galImgEle('gypsum.jpg', 'Fist of the brave (gypsum)', '2005', '<br><br>Gypsum casting. Alginate to create the mold.'),
    new galImgEle('plasticine.jpg', 'Owl, Whale & Iguana (clay)', '2005', 'Sculptural lamp.<br><br>Air-dry clay (plasticine) and acrylic paint.')];

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

imageNamesPainting.forEach(i => {
    const image = document.createElement('img');
    image.src = 'images/art/thumbs/thumb_' + i.filename;
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        popup.style.transform = 'translateY(0)';
        selectedImage.src = 'images/art/painting/' + i.filename;
        selectedImageHeader.innerHTML = i.title;
        selectedImageSubHeader.innerHTML = i.subtitle;
        selectedImageBody.innerHTML = i.body;
    })
    gallery_painting.appendChild(image);
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

imageNamesDrawing.forEach(i => {
    const image = document.createElement('img');
    image.src = 'images/art/thumbs/thumb_' + i.filename;
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        popup.style.transform = 'translateY(0)';
        selectedImage.src = 'images/art/drawing/' + i.filename;
        selectedImageHeader.innerHTML = i.title;
        selectedImageSubHeader.innerHTML = i.subtitle;
        selectedImageBody.innerHTML = i.body;
    })
    gallery_drawing.appendChild(image);
})

imageNamesPlasticArts.forEach(i => {
    const image = document.createElement('img');
    image.src = 'images/art/thumbs/thumb_' + i.filename;
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        popup.style.transform = 'translateY(0)';
        selectedImage.src = 'images/art/plasticarts/' + i.filename;
        selectedImageHeader.innerHTML = i.title;
        selectedImageSubHeader.innerHTML = i.subtitle;
        selectedImageBody.innerHTML = i.body;
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
