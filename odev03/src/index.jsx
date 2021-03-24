//React kullanmak için import etmemiz gerekenler
//jsx olduğu zaman html ile karışık js kodları oluyor.
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <div class="header">
                    <h2 class="title">Kedi Bulmaca</h2>
                    <p class="description">Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk tercihte Kedi kartını bulamaz isen 2. seçim hakkı tanınacaktır.</p>
                </div>
                <div class="cards">
                    <div id="card1" class="card" onClick="click1()"/>
                    <div id="card2" class="card" onClick="click2()"/>
                    <div id="card3" class="card" onClick="click3()"/>
                </div>
                <div class="footer">
                    <p id="alanId" class="description">
                        <span style="background-color: green;">Kedi kartını bulmak için kartın üzerine tıklamalısın.</span>
                    </p>
                    <p id="kazandiId" class="description" style="display: none;">
                        <span style="background-color: green;">Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen
                            <a href="index.html">buraya</a>tıklayabilirsin.
                        </span>
                    </p>
                    <p id="kaybettiId" class="description" style="display: none;">
                        <span style="background-color: green;">Kaybettin :( Yeni bir oyun oynamak isterseniz
                            <a href="index.html">buraya</a> tıklayabilirsin.
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));

//Burada cannot resolve file "index.html" hatası aldığım için boş ekran görüntüsü ile karşılaşıyorum.