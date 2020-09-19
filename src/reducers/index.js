import {createStore} from 'redux';
import bazaLogin from './bazaLogin'

const initialState={tech:"React", status:"guest", value:15,
login:"", password:"", page:"main", id:false};
const reducer=(state, action)=>{
  switch (action.type){
    case 'inc':
      state.value+=1;
      return state; 
    case 'register': 
      const dataUser=searchLogin(action.login, action.password, bazaLogin);
      if (!dataUser){
      	state.status="guest";
      	state.page="intake";
      }else{
      	state.status=dataUser.status;
      	state.id=dataUser.id;
      	state.login=dataUser.login;
      	state.page="main";
      }
 
      //state.password=action.password;
      console.log(dataUser, "case register");
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

function searchLogin(login, password, baza){

let i=0;
	while(i<baza.length){
		if (baza[i].login===login && baza[i].password===password){
			return baza[i]
		}
		i++;
	}

	return false
}
