/**
 * Created by queenie on 18/5/30.
 */
import {createStore,combineReducers} from 'redux'
const reducer=(state={act:true},action={})=>{
        switch(action.type){
          case 'changeAct':
               const newState=Object.assign({},state);
                newState.act=action.payLoad;
                return newState;
          default :
                return state;
        }
}
const store=createStore(reducer,{act:true});
export default store;
