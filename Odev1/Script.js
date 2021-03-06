let guess = 2;
let latestIndex;
let page;
let page1;
let page2;

const sImages = ["cat.png","dog.jpg",];

const newGame = () => {
    if(guess!==0){
        let index = Math.floor(Math.random()*sImages.length);
        if(latestIndex === index){
            index = (index+1)%sImages.length;
        }
        const image = sImages[index];
        latestIndex = index;
        page = document.getElementById("img").src=image;
        if(sImages[0] === image){
            document.getElementById("alanId").innerHTML="Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
        }
        guess-=1;
    }
    else{
        document.getElementById("alanId").innerHTML="Kaybettin :( Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
    }
}

const newGame1 = () => {
    if(guess!==0){
        let index1 = Math.floor(Math.random()*sImages.length);
        if(latestIndex === index1){
            index1 = (index1+1)%sImages.length;
        }
        const image1 = sImages[index1];
        latestIndex = index1;

        page1 = document.getElementById("img1").src=image1;
        if(sImages[0] === image1){
            document.getElementById("alanId").innerHTML="Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
        }
        guess-=1;
    }
    else{
        document.getElementById("alanId").innerHTML="Kaybettin :( Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
    }
}
const newGame2 = () => {
    if(guess!==0){
        let index2 = Math.floor(Math.random()*sImages.length);
        if(latestIndex === index2){
            index2 = (index2+1)%sImages.length;
        }
        const image2 = sImages[index2];
        latestIndex = index2;
        page2 = document.getElementById("img2").src=image2;
        if(sImages[0] === image2){
            document.getElementById("alanId").innerHTML="Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
        }
        guess-=1;
    }
    else{
        document.getElementById("alanId").innerHTML="Kaybettin :( Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
    }
}