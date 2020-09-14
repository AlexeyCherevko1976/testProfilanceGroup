import React,{Component} from 'react';
//import './Main.css';
import './bootstrap.css';


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
  Main!
</div>
 
  ); 

} // render
} // Main

export default Main;
