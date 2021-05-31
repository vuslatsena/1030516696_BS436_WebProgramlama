import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class Home extends Component {
    render() {
        function refreshPage() {
            setTimeout(()=>{
                window.location.reload(false);
            });
            
        }
        return (
            <div className="container">
                <h2 className="header">Kediyi Bul</h2>
                <p className="welcome-text">
                    Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk
                    tercihte Kedi kartını bulamaz isen 2.seçim hakkı tanınacaktır.
                </p>
                <div className="action">
                    <Link to={"/game"} className="play"  onClick={refreshPage}>Oyna</Link>
                </div>
            </div>
        );
    }
}