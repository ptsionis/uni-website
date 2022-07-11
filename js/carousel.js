'use strict';

const carouselTitleObject = document.getElementById("carousel-title");
const carouselTextObject = document.getElementById("carousel-text-p");
const carouselTitleArray = ["Η Ιστορία του Πανεπιστημίου", "Το Πα.Μακ. σε αριθμούς", "Φωτογραφίες του Πανεπιστημίου", "Τέταρτο slide"];
const carouselTextArray = ["Κείμενο σχετικά με την ιστορία του Πανεπιστημίου...",
"Διάφορα στατιστικά στοιχεία...",
"Φωτογραφίες από το Πανεπιστήμιο...",
"Κείμενο του τελευταίου slide..."];
var carouselIndex = 0;
var timerIndex = 7000;
const dot0Object = document.getElementById("dot0");
const dot1Object = document.getElementById("dot1");
const dot2Object = document.getElementById("dot2");
const dot3Object = document.getElementById("dot3");
const dotObjectArray = [dot0Object, dot1Object, dot2Object, dot3Object];
var carouselTimer = setInterval(initiateTimer, timerIndex);

function initiateTimer() {
    if (carouselIndex < 3) {
        carouselIndex++;
    }
    else {
        carouselIndex = 0;
    }
    carouselTitleObject.innerHTML = carouselTitleArray[carouselIndex];
    carouselTextObject.innerHTML = carouselTextArray[carouselIndex];
    for (var i=0; i<4; i++) {
        dotObjectArray[i].style.background = 'none';
    }
    dotObjectArray[carouselIndex].style.background = 'rgb(230,230,230)';
}

dot0Object.onclick = function() {
    carouselIndex = 0;
    carouselTitleObject.innerHTML = carouselTitleArray[carouselIndex];
    carouselTextObject.innerHTML = carouselTextArray[carouselIndex];
    this.style.background = 'rgb(230,230,230)';
    dot1Object.style.background = 'none';
    dot2Object.style.background = 'none';
    dot3Object.style.background = 'none';
    clearInterval(carouselTimer);
    carouselTimer = setInterval(initiateTimer, timerIndex);
}

dot1Object.onclick = function() {
    carouselIndex = 1;
    carouselTitleObject.innerHTML = carouselTitleArray[carouselIndex];
    carouselTextObject.innerHTML = carouselTextArray[carouselIndex];
    this.style.background = 'rgb(230,230,230)';
    dot0Object.style.background = 'none';
    dot2Object.style.background = 'none';
    dot3Object.style.background = 'none';
    clearInterval(carouselTimer);
    carouselTimer = setInterval(initiateTimer, timerIndex);
}

dot2Object.onclick = function() {
    carouselIndex = 2;
    carouselTitleObject.innerHTML = carouselTitleArray[carouselIndex];
    carouselTextObject.innerHTML = carouselTextArray[carouselIndex];
    this.style.background = 'rgb(230,230,230)';
    dot0Object.style.background = 'none';
    dot1Object.style.background = 'none';
    dot3Object.style.background = 'none';
    clearInterval(carouselTimer);
    carouselTimer = setInterval(initiateTimer, timerIndex);
}

dot3Object.onclick = function() {
    carouselIndex = 3;
    carouselTitleObject.innerHTML = carouselTitleArray[carouselIndex];
    carouselTextObject.innerHTML = carouselTextArray[carouselIndex];
    this.style.background = 'rgb(230,230,230)';
    dot0Object.style.background = 'none';
    dot1Object.style.background = 'none';
    dot2Object.style.background = 'none';
    clearInterval(carouselTimer);
    carouselTimer = setInterval(initiateTimer, timerIndex);
}