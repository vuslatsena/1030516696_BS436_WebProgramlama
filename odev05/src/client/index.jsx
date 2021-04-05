import React from "react";
import  ReactDOM from "react-dom";
import {Game} from "src/client/Game";
import {Home} from "src/client/home";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Switch} from "react-router";

const notFound = () =>{
    return(
        <div>
            <h2>Sayfa bulunamadı: 404</h2>
                <p>Hata: Aradığınız sayfaya şu anda ulaşılamıyor.Lütfen daha sonra tekrar deneyiniz.
                </p>
        </div>
    )
}
class App extends React.Component{
    render(){
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route exact path='src/client/Game' component={Game}/>
                        <Route exact path='/src/client/home' component={Home}/>
                        <Route component={notFound}/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));

