import React from 'react'
export default class Index1 extends React.Component{
    render(){
        return(
            <div ref="myIndex">我是首页展示11</div>
        )
    }
    componentDidMount(){
        console.log(this.refs.myIndex)
    }

}