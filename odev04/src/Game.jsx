import React, {Component} from 'react';

export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kediIndex: Math.floor(Math.random()*3),
            status: undefined,
            card: ["img/ArkaKapak.png","img/ArkaKapak.png","img/ArkaKapak.png"],
            cardCounter : 0,
            gameOver: false
        }
    }
    pickCat = (index) => {
        const { card, kediIndex, cardCounter , gameOver } = this.state;
        if(!gameOver){
            const newCard = [...card];
            let status;

            if(kediIndex===index){
                newCard[index] = "img/Kedi.jpg";
                status = "Kazandınız :)"
            }else {
                newCard[index] = "img/Kopek.jpg";
                if(cardCounter===1){
                    status = "Kaybettiniz :("
                }
            }
            this.setState({
                card:newCard,
                cardCounter: this.state.cardCounter+1,
                status
            });

            if(status){
                this.setState({
                    gameOver: true
                })
            }

        }
    }
    newGame = () => {
        this.setState({
            kediIndex: Math.floor(Math.random()*3),
            status: undefined,
            card: ["img/ArkaKapak.png","img/ArkaKapak.png","img/ArkaKapak.png"],
            cardStatus: 0,
            gameOver: false
        })
    }
    render(){
        const { card, status } = this.state;
        return (
            <div>
                <p>Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk tercihte Kedi kartını bulamaz isen
                    2. seçim hakkı tanınacaktır.</p>
                <img className="card" src={card[0]} onClick={()=>{this.pickCat(0)}}/>
                <img className="card" src={card[1]} onClick={()=>{this.pickCat(1)}}/>
                <img className="card" src={card[2]} onClick={()=>{this.pickCat(2)}}/>
                <div className="message">
                    <p>{status?status:"Kedi kartını bulmak için kartın üzerine tıklamalısın."}</p>
                    {status && <p>Yeni bir oyun oynamak istersen <span onClick={this.yeniOyun} className='link'>buraya</span> tıklayabilirsin.</p>}
                </div>
            </div>
        );
    }
}

