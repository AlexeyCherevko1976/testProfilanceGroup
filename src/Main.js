import React,{Component} from 'react';
//import './Main.css';
import './bootstrap.css';
import store from "./reducers";


class Main extends React.Component {

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
    console.log('main');
  }

}
componentDidMount(){

}

render(){
  return (

<div className="">
  Main! {store.getState().value}
</div>
 
  ); 

} // render
} // Main

export default Main;
