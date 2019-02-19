import React from 'react'
import {Link,Route} from 'react-router-dom'
class Topic extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return(
            <div>{this.props.match.params.id}</div>
        )
    }
   
}
export default class First extends React.Component{
   constructor(){
       super()
   }
   componentDidMount(){
       console.log(this.props)
   }
   render(){
       return(
        <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to='/rendering'>Rendering with React</Link>
          </li>
          <li>
            <Link to='/components'>Components</Link>
          </li>
          <li>
            <Link to='/props-v-state'>Props v. State</Link>
          </li>
        </ul>
      
        <Route path='/:id' component={Topic} /> 
        {/* <Route
          exact
          path={match.url}
          render={() => <h3>Please select a topic.</h3>}
        /> */}
      </div>
       )
   }
}