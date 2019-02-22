import React from 'react'
import{Link,Route} from 'react-router-dom'
import TopicId from './topicId.jsx'
export default class Index1 extends React.Component{
    componentDidMount(){
        console.log(12)
         console.log(this.props)
    }
    render(){
        return(
            <div ref="myIndex">
                <div>
                    <h2>Topics</h2>
                    <ul>
                    <li>
                       <Link to="/index/current">Rendering with React</Link>
                    </li>
                    <li>
                        <Link  to="/index/current1">Components</Link>
                    </li>
                    <li>
                        <Link  to="/index/current2">Props v. State</Link>
                    </li>
                    </ul>
                     {this.props.children}
                  
                    {/* <Route
                    exact
                    path={this.props.match.url}
                    render={() => <h3>Please select a topic.</h3>}
                    /> */}
                </div>
            </div>
        )
    }
   

}