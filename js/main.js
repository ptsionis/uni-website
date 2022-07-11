'use strict';

const leftArrowObject = document.getElementById('left-arrow').addEventListener('click', previousCarousel);
const rightArrowObject = document.getElementById('right-arrow').addEventListener('click', nextCarousel);
const carouselTitleObject = document.getElementById('carousel-title');
const carouselTextObject = document.getElementById('carousel-text-p');
var carouselIndex = 0;
var carouselTitleArray = ["Η Ιστορία του Πανεπιστημίου", "Το Πα.Μακ. σε αριθμούς", "Φωτογραφίες του Πανεπιστημίου", "Τέταρτο slide"];
var carouselTextArray = ["Κείμενο σχετικά με την ιστορία του Πανεπιστημίου...",
"Διάφορα στατιστικά στοιχεία...",
"Φωτογραφίες από το Πανεπιστήμιο...",
"Κείμενο του τελευταίου slide..."]

function previousCarousel() {
    if (carouselIndex > 0) {
        carouselIndex--;
        carouselTitleObject.innerHTML = carouselTitleArray[carouselIndex];
        carouselTextObject.innerHTML = carouselTextArray[carouselIndex];
    }
    else {
        carouselIndex = 3;
        carouselTitleObject.innerHTML = carouselTitleArray[carouselIndex];
        carouselTextObject.innerHTML = carouselTextArray[carouselIndex];
    }
}

function nextCarousel() {
    if (carouselIndex < 3) {
        carouselIndex++;
        carouselTitleObject.innerHTML = carouselTitleArray[carouselIndex];
        carouselTextObject.innerHTML = carouselTextArray[carouselIndex];
    }
    else {
        carouselIndex = 0;
        carouselTitleObject.innerHTML = carouselTitleArray[carouselIndex];
        carouselTextObject.innerHTML = carouselTextArray[carouselIndex];
    }
}