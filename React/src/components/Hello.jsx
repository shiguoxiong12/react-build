import React from 'react'
import { BrowserRouter,HashRouter,Route,Link  } from 'react-router-dom'
import Two from './two.jsx'
import First from './first.jsx'
import Child from './Child.jsx'
export default class Hello extends React.Component{
    constructor(props,context) {
        super(props,context)
        this.state={       //初始化状态值
            name:'史国雄',
            age:12
        }
    }
    componentWillMount () {
        console.log("willMount")
    }
    componentDidMount () {
        console.log("didMount")
    }
    componentWillReceiveProps (nextProps) {
        console.log("WillReceiveProps")
    }
    shouldComponentUpdate (nextProps,nextState) {
        return 12
        console.log("shouldComponentUpdate")
    }
    componentWillUpdate (nextProps,nextState) {
        console.log("componentWillUpdate")
    }
    componentDidUpdate (prevProps,prevState) {
        console.log("componentDidUpdate")
    }
    componentWillUnmount () {
        console.log("componentWillUnmount")
    }
    
    render(){
        return(
            <div>
                <div>
                    <Link  to="/first"> {this.state.name} </Link >
                    <Link  to="/two"> {this.state.age}</Link >
                </div>
                <div>
                   {this.props.children}
                    {/* <Route path="/first" component={First}></Route>
                    <Route path="/two" component={Two}></Route> */}
                </div>
            </div>
        )
    }
}
