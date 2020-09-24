import React,{Component} from 'react';
import store from "./reducers";


//const Step = () => {
class Step extends React.Component{
  constructor(props){
  super(props);
  //const stepSize = useSelector(state => state.stepSize, (current, prev) => current === prev)
  //const dispatch = useDispatch()
  const {stepSize}=store.getState().stepSize;
  const {value}=store.getState().value;
  this.onChangeStep=onChangeStep.bind(this); 
  function onChangeStep(e){
    store.dispatch({type:'onChangeStep', value:e.target.value})
    const value=store.getState().value; 
    console.log("e.target.value", e.target.value);
  }    
  }

render(){  return (
    <div>
      <div>Значение счётчика должно увеличиваться или уменьшаться на заданную величину шага</div>
      <div>Текущая величина шага: {this.stepSize}</div>
      <input
        type="range"
        min="1"
        max="30"
        value={this.value}
        //onChange={({ target }) => dispatch(changeStepSize(target.value))}
        onChange={this.onChangeStep}
      />
    </div>
  )
} // render
}

export default Step