let page;
let page1;
let page2;
let guess = 2;
let lastIndex;

let cards =  ["images/cat.png","images/dog.jpg","images/dog1.jpg"];

function Game() {
    if (guess === 0) {
        document.getElementById("alanId").innerHTML = "Kaybettiniz :( Yeni bir oyun oynamak isterseniz " +
            "<span class='link' onclick='document.location.reload(true);'> buraya </span> tıklayabilirsiniz.";
    }
    else {
        let index = Math.floor(Math.random() * cards.length);
        if (lastIndex === index) {
            index = (index + 1) % cards.length;
        }
        const image = cards[index];
        lastIndex = index;
        page = document.getElementById("img").src = image;
        switch (cards[0]) {
            case image:
                document.getElementById("alanId").innerHTML = "Kazandınız! Tebrik ederiz :) Yeni bir oyun oynamak isterseniz " +
                    "<span class='link' onclick='document.location.reload(true);'> buraya </span> tıklayabilirsiniz.";
                break;
        }
        guess -= 1;
    }
}

function Game1() {
    if (guess === 0) {
        document.getElementById("alanId").innerHTML = "Kaybettiniz :( Yeni bir oyun oynamak isterseniz " +
            "<span class='link' onclick='document.location.reload(true);'> buraya </span> tıklayabilirsiniz.";
    } else {
        let index1 = Math.floor(Math.random() * cards.length);
        if (lastIndex === index1) {
            index1 = (index1 + 1) % cards.length;
        }
        const image1 = cards[index1];
        lastIndex = index1;

        page1 = document.getElementById("img1").src = image1;
        switch (cards[0]) {
            case image1:
                document.getElementById("alanId").innerHTML = "Kazandınız! Tebrik ederiz :) Yeni bir oyun oynamak isterseniz " +
                    "<span class='link' onclick='document.location.reload(true);'> buraya </span> tıklayabilirsiniz.";
                break;
        }
        guess -= 1;
    }
}
function Game2()  {
    if (guess === 0) {
        document.getElementById("alanId").innerHTML = "Kaybettiniz :( Yeni bir oyun oynamak isterseniz " +
            "<span class='link' onclick='document.location.reload(true);'> buraya </span> tıklayabilirsiniz.";
    } else {
        let index2 = Math.floor(Math.random() * cards.length);
        if (lastIndex === index2) {
            index2 = (index2 + 1) % cards.length;
        }
        const image2 = cards[index2];
        lastIndex = index2;
        page2 = document.getElementById("img2").src = image2;
        switch (cards[0]) {
            case image2:
                document.getElementById("alanId").innerHTML = "Kazandınız! Tebrik ederiz :) Yeni bir oyun oynamak isterseniz " +
                    "<span class='link' onclick='document.location.reload(true);'> buraya </span> tıklayabilirsiniz.";
                break;
        }
        guess -= 1;
    }
}