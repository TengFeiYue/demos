import React from 'react';
import PropTypes from 'prop-types';
import emitter from '../../utils/events';
import store from '../../stores'
export default class Book extends React.Component{
  constructor(props) {
    super(props)
  }
  componentWillMount(){

    //console.log(this.props.match.params.page);
    emitter.emit('changeMessage', this.props.match.params.page);//组件通信方法
  }
  componentWillUnmount() {
    store.dispatch({ type: 'changeAct',payLoad:false})
  }
   render(){
       return (
         <div>
            <h1>我是通讯录</h1>
         </div>
       )
   }
}
