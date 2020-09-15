import React,{Component} from 'react';
//import './Main.css';
import './bootstrap.css';
import store from "./reducers";


class Intake extends React.Component {

constructor(){
  super();
  //let {status}=this.props;
  this.state={status: store.getState().status,
      password:"", login:""};
  this.clickButton=clickButton.bind(this);
  this.changeLogin=changeLogin.bind(this);
  this.changePassword=changePassword.bind(this);
   function clickButton(event){
  
    store.dispatch({type:"register",
     login:this.state.login,
     password:this.state.password})
    console.log('clickRegister');
    event.preventDefault();
  }
  function changeLogin(event){
    this.setState({login:event.target.value});
    console.log("changeLogin")
  }
  function changePassword(event){
    this.setState({password:event.target.value});
    console.log("changePassword")
  }
}
componentDidMount(){

}

render(){
  return (

<div className="">
<form >
  <div className="form-group">
    <label>Логин </label>
    <input type="text" value={this.state.login} onChange={this.changeLogin} id="login" className="form-control" placeholder="Ввести логин"></input> 
    <small id="loginHelp" className="form-text-muted">
      Введите логин
    </small>
  </div>
  <div className="form-group">
    <label>Пароль</label>
    <input type="password" value={this.state.password} onChange={this.changePassword} id="password" className="form-control" placeholder="Ввести пароль"></input> 
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
