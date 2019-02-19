import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import '../style/navbar.css'
export default class NavBar extends React.Component{
   constructor(){
       super()
   }
   render(){
       return(
           <div className="navBar">
                <ul className="navbar-wraper">
                    <NavLink to="/">首页</NavLink>
                    <NavLink to='/about' >关于我们</NavLink>
                    <NavLink to='/events'>企业事件</NavLink>
                    <NavLink to='/products'>公司产品</NavLink>
                    <NavLink to='/contact'>联系我们</NavLink>
                </ul>
               <div className="content">
                   {this.props.children}
               </div>
              
           </div>
       )
   }
}