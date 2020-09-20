import React,{Component} from 'react';
import './App.css';
import './bootstrap.css';
import Main from './Main'
import News from './News'
import Intake from './Intake'
import store from "./reducers";


class App extends React.Component {
constructor(){
  //super(store.getState());
  super();   
  let {status}=store.getState();
  this.state={status: "guest", page:"main", value:"value",
      login:"example", password:"password", button:false};
  this.clickMain=clickMain.bind(this);
  this.clickNews=clickNews.bind(this);
  this.clickIntake=clickIntake.bind(this);

  this.onChangeLoginIn=onChangeLoginIn.bind(this);
  this.onChangePasswordIn=onChangePasswordIn.bind(this);
  this.onRegister=onRegister.bind(this);

  function onChangeLoginIn(login){
    this.setState({login});
  }
  function onChangePasswordIn(password){
    this.setState({password});
  }
  function onRegister(button){
    this.setState({button});
    store.dispatch({type:"register",
     login:this.state.login,
     password:this.state.password});
    this.setState(state=>({
      page:store.getState().page,
      status:store.getState().status,
      id:store.getState().id,
      login:store.getState().login
    }));
    console.log(this.state.page);
  }


  function clickMain(e){
    e.preventDefault();
    store.dispatch({type:'inc'});
    this.setState(state=>({
      page:"main",
      value: store.getState().value
    }))
    
    //console.log('handleClick');
  }
  function clickNews(e){ 
    e.preventDefault();
    this.setState(state=>({
      page:"news"
    }))
    //console.log('handleClick');
  }
  function clickIntake(e){
    e.preventDefault();
    this.setState(state=>({
      page:"intake"
    }))
    //console.log('handleClick');
  }
}
componentDidMount(){

}
componentDidUpdate(){ 
 /* let {status}=store.getState();
    this.setState({status: status});     //console.log(this.state.status,"!==",store.getState().status)
*/

}

render(){
  const login=this.state.login;
  const password=this.state.password;
  const button=this.state.button;
  const status=this.state.status;
  return (


<div className="container-fluid App">
  <div className="row App-nav">
    <div className="col-12">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="tab" href="#description">Main</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#charakter">News</a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="description">
          <Main login={login} status={status}/>
        </div>
        <div className="tab-pane fade show" id="charakter">
          <News />
        </div>
      </div>
</div>
  </div>
</div>
 
  ); 

} // render
} // App

export default App;
