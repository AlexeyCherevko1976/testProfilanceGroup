import {createStore} from 'redux';
const initialState={tech:"React", status:"guest", value:15,
login:"", password:""};
const reducer=(state, action)=>{
  switch (action.type){
    case 'inc':
      state.value+=1;
      return state; 
    case 'dec':
      return state;
    default:
     return state
  }
}
const update=()=>{
  console.log(store.getState().value);
}
const store=createStore(reducer, initialState);
store.subscribe(update);

export default store
