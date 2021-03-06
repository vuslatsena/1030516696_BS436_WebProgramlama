let page;
let page1;
let page2;
let guess = 2;
let latestIndex;
let sImages = ["cat.png", "dog.jpg", "cat1.png"];

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
            document.getElementById("alanId").innerHTML="Kazandınız! Tebrik ederiz :) Yeni bir oyun oynamak isterseniz <span class='link' onclick='document.location.reload(true);'> buraya </span> tıklayabilirsiniz.";
        }
        guess-=1;
    }
    else{
        document.getElementById("alanId").innerHTML="Kaybettiniz :( Yeni bir oyun oynamak isterseniz <span class='link' onclick='document.location.reload(true);'> buraya </span> tıklayabilirsiniz.";
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
            document.getElementById("alanId").innerHTML="Kazandınız! Tebrik ederiz :) Yeni bir oyun oynamak isterseniz <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsiniz.";
        }
        guess-=1;
    }
    else{
        document.getElementById("alanId").innerHTML="Kaybettiniz :( Yeni bir oyun oynamak isterseniz <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsiniz.";
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
            document.getElementById("alanId").innerHTML="Kazandınız! Tebrik ederiz :) Yeni bir oyun oynamak isterseniz <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsiniz.";
        }
        guess-=1;
    }
    else{
        document.getElementById("alanId").innerHTML="Kaybettiniz :( Yeni bir oyun oynamak isterseniz <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsiniz.";
    }
}