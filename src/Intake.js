import React,{Component} from 'react';
//import './Main.css';
import './bootstrap.css';
import store from "./reducers";


class Intake extends React.Component {

constructor(props){
  super(props);
  //let {status}=this.props;
  //this.state={status: status, page:""};
  //this.clickMain=clickMain.bind(this);
  function clickMain(e){
    e.preventDefault();
/*    this.setState(state=>({
      page:"main"
    }))*/
    console.log('intake');
  }

}
componentDidMount(){

}

render(){
  return (

<div className="">
<form >
  <div className="form-group">
    <label>Логин</label>
    <input type="text" id="login" className="form-control" placeholder="Ввести логин"></input> 
    <small id="loginHelp" className="form-text-muted">
      Введите логин
    </small>
  </div>
  <div className="form-group">
    <label>Пароль</label>
    <input type="password" id="password" className="form-control" placeholder="Ввести пароль"></input> 
    <small id="loginHelp" className="form-text-muted">
      Введите логин
    </small>
  </div>
</form>

</div>
 
  ); 

} // render
} // Main

export default Intake;
