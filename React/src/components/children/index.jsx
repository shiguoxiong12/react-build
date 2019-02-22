import React from 'react'
import{Link,Route} from 'react-router-dom'
import TopicId from './topicId.jsx'
import { connect } from 'react-redux'
import store from '../../redux/index'
const mapStateToProps = (state) => {
    return {
      name: state.reducer.name,
      age: state.reducer.age
    }
  }
  // mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      addAge () {
          // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
          dispatch({
              type:'ADD'
          })
        
          // 执行setPageTitle会返回一个函数
          // 这正是redux-thunk的所用之处:异步action
          // 上行代码相当于
          /*dispatch((dispatch, getState) => {
              dispatch({ type: 'SET_PAGE_TITLE', data: data })
          )*/
      },
      DELETE(data) {
          dispatch({
              type:'DELETE'
          })
      }
    }
  }
 class Index1 extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            age:0
        }
    }
    componentDidMount(){
        // this.setState({
        //     name:store.getState().name,
        //     age:store.getState().age
        // })
      
        console.log(store)
    }
    add(){
      
        store.dispatch({
            type:'ADD'
        })
    }
    delete(){
        store.dispatch({
            type:'DELETE'
        })
    }
    render(){
        return(
            <div ref="myIndex">
                <div>
                    <h2>Topics</h2>
                   姓名： {this.props.name}
                   年龄： {this.props.age}
                   <button onClick={this.props.addAge}>年龄加1</button>
                   <button onClick={this.props.DELETE}>年龄减1</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(Index1)