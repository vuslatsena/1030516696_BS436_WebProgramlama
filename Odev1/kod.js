document.getElementById("alanId")
function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));