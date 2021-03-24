//The main difference between let and var is that scope of a variable defined with let is limited to the block in which
// it is declared while variable declared with var has the global scope.
// So we can say that var is rather a keyword which defines a variable globally regardless of block scope.
const alan = document.getElementById('alanId');
const kazandi = document.getElementById('kazandiId');
const kaybetti = document.getElementById('kaybettiId');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');

let count = 0;
let isFinished = false;
let catIndex = Math.floor(Math.random() * 3);

const click1 = () => {
    if (catIndex === 0) {
        card1.setAttribute('class', 'card-Cat');
        isFinished = true;
    } else {
        card1.setAttribute('class', 'card-Dog');
        count++;
    }
    if(count === 2){
        isFinished = true;
    }

    if(isFinished&&count<2){
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
};
const click2 = () => {
    if (catIndex === 1) {
        card2.setAttribute('class', 'card-Cat');
        isFinished = true;
    } else {
        card2.setAttribute('class', 'card-Dog');
        count++;
    }
    if (count === 2) {
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
};

const click3 = () => {
    if (catIndex === 2) {
        card3.setAttribute('class', 'card-Cat');
        isFinished = true;
    } else {
        card3.setAttribute('class', 'card-Dog');
        count++;
    }

    if (count === 2) {
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
};

//Burada ise unused constant click1, click2 ve click3 olarak bir uyarı alıyorum.