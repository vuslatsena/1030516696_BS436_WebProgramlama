
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import {Card} from "./card";
import CardGame from "./game";
import { Home } from "./home";
const notFound=()=>{
  return(
    <div>
      <h2>Sayfa Bulunamadı: 404</h2>
      <p>
        Hata: Aradığınız sayfaya şu anda ulaşılamıyor. Lütfen daha sonra tekrar deneyiniz.
      </p>
    </div>
  )
}
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      result:Card
    }
    } 
   
 render(){
return(

  <HashRouter>
  <Switch>
  <Route exact path='/game' component={CardGame} />
    <Route exact path='/' component={Home} />
    <Route component={notFound} />
  </Switch>
   
    
    </HashRouter>
)

 }
}
ReactDOM.render(<App/>, document.getElementById("root"));





