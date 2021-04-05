import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class Home extends Component {
    render() {
        return (
            <div>
                <h2>Kediyi Bul</h2>
                <p className="welcome-text">
                    Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk
                    tercihte Kedi kartını bulamaz isen 2.seçim hakkı tanınacaktır.
                </p>
                <div className="action">
                    <Link to={"src/client/Game"} className="play">Oyna</Link>
                </div>
            </div>
        );
    }
}

