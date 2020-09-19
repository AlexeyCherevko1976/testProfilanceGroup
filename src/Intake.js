import React,{Component} from 'react';
//import './Main.css';
import './bootstrap.css';
//import store from "./reducers";


class Intake extends React.Component {

constructor(props){
  super(props);

  this.clickButton=clickButton.bind(this);
  this.onChangeLogin=onChangeLogin.bind(this);
  this.onChangePassword=onChangePassword.bind(this);
  function clickButton(event){
    this.props.onButton("true");    
    event.preventDefault();
  }
  function onChangeLogin(event){
    this.props.propsChangeLogin(event.target.value);
    event.preventDefault();
  }
  function onChangePassword(event){
    this.props.propsChangePassword(event.target.value);
    event.preventDefault();
  }
}
componentDidMount(){

}

render(){
  const login=this.props.login;
  const password=this.props.password;
  return (

<div className="">
<form >
  <div className="form-group">
    <label>Логин </label>
    <input type="text" value={login} onChange={this.onChangeLogin} id="login" className="form-control" placeholder="Ввести логин"></input> 
    <small id="loginHelp" className="form-text-muted">
      Введите логин
    </small>
  </div>
  <div className="form-group">
    <label>Пароль</label>
    <input type="password" value={password} onChange={this.onChangePassword} id="password" className="form-control" placeholder="Ввести пароль"></input> 
    <small id="loginHelp" className="form-text-muted">
      Введите логин
    </small>
  </div>
  <div>
  <button type="button" onClick={this.clickButton} className="btn btn-success">Success</button>
  </div>
</form>
</div>
 
  ); 

} // render
} // Main

export default Intake;
