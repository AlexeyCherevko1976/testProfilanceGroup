import React,{Component} from 'react';
//import './Main.css';
//import './bootstrap.css';


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
  Intake!
</div>
 
  ); 

} // render
} // Main

export default Intake;
