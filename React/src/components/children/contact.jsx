import React from 'react'
export default class Contact extends React.Component{
    componentDidMount(){
       // console.log(this.props.history.push("index"))
    }
    runIndex(){
        this.props.history.push("/index");//跳转路由
    }
    render(){
        return(
            <div>我是联系{this.props.match.params.id}
              <button id="runIndex" onClick={this.runIndex.bind(this)}>路由跳转到首页</button>
            </div>
        )
    }

}