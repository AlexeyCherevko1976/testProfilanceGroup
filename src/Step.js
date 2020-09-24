import React,{Component} from 'react';
import store from "./reducers";


const Step = () => {
  //const stepSize = useSelector(state => state.stepSize, (current, prev) => current === prev)
  //const dispatch = useDispatch()
  const stepSize=store.getState().stepSize;
  const value=store.getState().value; 
  function onChangeStep(e){
    store.dispatch({type:'onChangeStep', value:e.target.value})
    const value=store.getState().value; 
    console.log("e.target.value", e.target.value);
  }
  return (
    <div>
      <div>Значение счётчика должно увеличиваться или уменьшаться на заданную величину шага</div>
      <div>Текущая величина шага: {stepSize}</div>
      <input
        type="range"
        min="1"
        max="30"
        value={value}
        //onChange={({ target }) => dispatch(changeStepSize(target.value))}
        onChange={onChangeStep}
      />
    </div>
  )
}

export default Step