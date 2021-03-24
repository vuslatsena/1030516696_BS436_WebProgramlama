var count = 0;
var isFinished = false;

const alan = document.getElementById('alanId');
const kazandi = document.getElementById('kazandiId');
const kaybetti = document.getElementById('kaybettiId');

const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');

var catIndex = Math.floor(Math.random() * 3)

function click1() {

    if (catIndex == 0) {
        card1.setAttribute('class', 'card-WithCat');
        isFinished = true;
    } else {
        card1.setAttribute('class', 'card-WithDog');
        count++;
    }

    if (count == 2) {
        isFinished = true;
    }

    if (isFinished && count < 2) {
        alan.style.display = "none";
        kazandi.style.display = "block";
        card1.style.pointerEvents = "none";
        card2.style.pointerEvents = "none";
        card3.style.pointerEvents = "none";
    } else if (isFinished && count >= 2) {
        alan.style.display = "none";
        kaybetti.style.display = "block";
        card1.style.pointerEvents = "none";
        card2.style.pointerEvents = "none";
        card3.style.pointerEvents = "none";
    }
}

function click2() {
    if (catIndex == 1) {
        card2.setAttribute('class', 'card-WithCat');
        isFinished = true;
    } else {
        card2.setAttribute('class', 'card-WithDog');
        count++;
    }

    if (count == 2) {
        isFinished = true;
    }

    if (isFinished && count < 2) {
        alan.style.display = "none";
        kazandi.style.display = "block";
        card1.style.pointerEvents = "none";
        card2.style.pointerEvents = "none";
        card3.style.pointerEvents = "none";
    } else if (isFinished && count >= 2) {
        console.log('Kaybetti');
        alan.style.display = "none";
        kaybetti.style.display = "block";
        card1.style.pointerEvents = "none";
        card2.style.pointerEvents = "none";
        card3.style.pointerEvents = "none";
    }
}

function click3() {
    if (catIndex == 2) {
        card3.setAttribute('class', 'card-WithCat');
        isFinished = true;
    } else {
        card3.setAttribute('class', 'card-WithDog');
        count++;
    }

    if (count == 2) {
        isFinished = true;
    }

    if (isFinished && count < 2) {
        alan.style.display = "none";
        kazandi.style.display = "block";
        card1.style.pointerEvents = "none";
        card2.style.pointerEvents = "none";
        card3.style.pointerEvents = "none";
    } else if (isFinished && count >= 2) {
        alan.style.display = "none";
        kaybetti.style.display = "block";
        card1.style.pointerEvents = "none";
        card2.style.pointerEvents = "none";
        card3.style.pointerEvents = "none";
    }
}