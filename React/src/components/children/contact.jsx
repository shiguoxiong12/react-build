import React from 'react'
export default class Contact extends React.Component{
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return(
            <div>我是联系{this.props.match.params.id}</div>
        )
    }

}