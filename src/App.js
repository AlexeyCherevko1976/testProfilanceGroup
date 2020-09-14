import React,{Component} from 'react';
import './App.css';
import './bootstrap.css';

class App extends React.Component {

constructor(props){
  super(props);
}
componentDidMount(){

}

render(){
  return (


<div className="container-fluid App">
  <div className="row App-nav">
    <div className="col-12">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">

        <button type="button" className="btn btn-outline-primary btn-block ">Главная</button>
        <button type="button" className="btn btn-outline-secondary btn-block">Новости</button>
        <button type="button" className="btn btn-outline-success btn-block">Вход/Выход</button>
 
      </nav>
    </div>

  </div>
  <div className="row">
    <div className="col-12">
      <div className="App-content"> 
        Содержание
        Содержание
        Содержание
        Содержание
        Содержание
        Содержание
        Содержание
        Содержание
        Содержание
        Содержание
        Содержание
        Содержание
        
      </div>  
    </div>  
  </div>
</div>
 
  ); 

} // render
} // App

export default App;
