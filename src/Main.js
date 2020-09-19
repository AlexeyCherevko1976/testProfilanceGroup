import React,{Component} from 'react';
//import './Main.css';
import './bootstrap.css';
import store from "./reducers";


class Main extends React.Component {

constructor(props){
  super(props);
  let {status}=this.props;
  let {login}=this.props;
  this.state={status: status, login:login};
  //this.clickMain=clickMain.bind(this);
  

}
componentDidMount(){

}

render(){
  return (

<div className="">
  <h1>Привет, {this.state.status==="guest" ? "Гость!" : this.state.login} </h1>
</div>
 
  ); 

} // render
} // Main

export default Main;
