import React from "react";
import ReactDOM from "react-dom";
import {Card} from "./card";
class CardGame extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          result:Card
        }
        
    }
        componentDidMount() {

          window.onload=function(){
            
          var cards = [
            'images/cat.jpg',
            'images/dog.jpg',
            
            ];
            
              var x = Math.floor((Math.random() * 3) + 1);
            
            if(x==1){
            document.getElementById("img"+1).src=cards[0];
            
            document.getElementById("img"+2).src=cards[1];
            
            document.getElementById("img"+3).src=cards[1];
            
            }if(x==2){
            document.getElementById("img"+2).src=cards[0];
            
            document.getElementById("img"+1).src=cards[1];
            
            document.getElementById("img"+3).src=cards[1];
            
            }
            if(x==3){
            document.getElementById("img"+3).src=cards[0];
            
            document.getElementById("img"+1).src=cards[1];
            
            document.getElementById("img"+2).src=cards[1];
            }
        }
      }
    render(){
      
        return(
            <>
            
            <div class="row">
            <div class="col-md-4"><img className="cardclick"   onClick={this.state.result} id="img4"    src="images/card.png" /><img id="img1" style={{objectFit:"contain","height" : "400px", "width" : "100%",position:"absolute",top:0,left:0,right:0,visibility:"hidden"}} /></div>
            <div class="col-md-4"><img className="cardclick"   onClick={this.state.result} id="img5"    src="images/card.png" /><img id="img2" style={{objectFit:"contain","height" : "400px", "width" : "100%",position:"absolute",top:0,left:0,right:0,visibility:"hidden"}} /></div>
            <div class="col-md-4"><img className="cardclick"  onClick={this.state.result} id="img6"    src="images/card.png" /><img id="img3" style={{objectFit:"contain","height" : "400px", "width" : "100%",position:"absolute",top:0,left:0,right:0,visibility:"hidden"}} /></div>
           </div>
           <div class="text-center mt-5">
             <span id="text">Kedi kartını bulmak için kartın üzerine tıklamalısın</span>
            
            
             
           </div>
           <div id="newgame"></div>
           </>
        );
    }
}
export default CardGame;