import React from 'react'
export default class Child extends React.Component{
   constructor(){
       super()
   }
   render(){
       return(
           <div>ID:{this.props.match.parmes.id}</div>
       )
   }
}