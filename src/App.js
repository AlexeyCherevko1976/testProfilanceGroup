import React,{Component} from 'react';
import './App.css';
import './bootstrap.css';
import Main from './Main'
import News from './News'
import Intake from './Intake'

class App extends React.Component {

constructor(props){
  super(props);
  let {status}=this.props;
  this.state={status: status, page:""};
  this.clickMain=clickMain.bind(this);
  this.clickNews=clickNews.bind(this);
  this.clickIntake=clickIntake.bind(this);
  function clickMain(e){
    e.preventDefault();
    this.setState(state=>({
      page:"main"
    }))
    console.log('handleClick');
  }
  function clickNews(e){ 
    e.preventDefault();
    this.setState(state=>({
      page:"news"
    }))
    console.log('handleClick');
  }
  function clickIntake(e){
    e.preventDefault();
    this.setState(state=>({
      page:"intake"
    }))
    console.log('handleClick');
  }
}
componentDidMount(){

}

render(){
  return (


<div className="container-fluid App">
  <div className="row App-nav">
    <div className="col-12">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">

        <button type="button" id="Main" className="btn btn-outline-primary btn-block"  onClick={this.clickMain}>Главная</button>
        <button type="button" className="btn btn-outline-secondary btn-block" onClick={this.clickNews}>Новости</button>
        <button type="button" className="btn btn-outline-success btn-block" onClick={this.clickIntake}>Вход/Выход</button>
 
      </nav>
    </div>

  </div>
  <div className="row">
    <div className="col-12">
      <div className="App-content"> 
        {this.state.page==="main" ? <Main /> :
         this.state.page==="news" ? <News /> :
         this.state.page==="intake" ? <Intake /> : ""}

        {this.state.status}
        
      </div>  
    </div>  
  </div>
</div>
 
  ); 

} // render
} // App

export default App;
