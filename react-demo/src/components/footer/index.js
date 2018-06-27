import React from 'React';
import {NavLink} from 'react-router-dom';
import emitter from '../../utils/events';
import store from '../../stores'
export default class FooterBar extends React.Component{
    constructor(props){
      super(props);
      this.state={status:0,showFooter:true}
    }
  componentDidMount(prevProps, prevState){
    console.log(store.getState())
    const getStatus=store.getState();
    this.setState({
      showFooter:getStatus.act
    })
    // 组件装载完成以后声明一个自定义事件
    this.eventEmitter = emitter.addListener('changeMessage', (message) => {//组件通信方法

      this.setState({
        status:message
      });
    });
  }
  componentWillUnmount() {
    emitter.removeListener(this.eventEmitter);//组件通信方法
  }
   render(){
     console.log(this.state.status)
     if(this.state.showFooter){
       return(
         <div className="footerBar">
           <NavLink exact to="/book/1" className={this.state.status=='book'?'active':''}>通讯录</NavLink>
           <NavLink to="/my/2"  className={this.state.status=='my'?'active':''} >我的</NavLink>
         </div>
       )
     }
     return(
       <div className="footerBar">

       </div>
     )
   }
}
