import React,{Component} from 'react';
//import './Main.css';
//import './bootstrap.css';


class News extends React.Component {

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
    console.log('news');
  }

}
componentDidMount(){

}

render(){
  return (

<div className="">
  News!
</div>
 
  ); 

} // render
} // Main

export default News;
