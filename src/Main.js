import React,{Component} from 'react';
//import './Main.css';
import './bootstrap.css';
import store from "./reducers";


class Main extends React.Component {

constructor(){
  super();
  //let {status}=this.props;
  //this.state={status: status, page:""};
  //this.clickMain=clickMain.bind(this);


}
componentDidMount(){

}

render(){
  return (

<div className="">
  Привет, {store.getState().status==="guest" ? "Гость!" : store.getState().login}
</div>
 
  ); 

} // render
} // Main

export default Main;
