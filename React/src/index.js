import Hello from './components/Hello.jsx'
import NarBar from './components/navBar.jsx'
import React from 'react' 
import ReactDom from 'react-dom'
import Two from './components/two.jsx'
import First from './components/first.jsx'
import Child from './components/Child.jsx'
import About from './components/children/about.jsx'
import Contact from './components/children/contact.jsx'
import Event1 from './components/children/events.jsx'
import Product from './components/children/products.jsx'
import Index1 from './components/children/index.jsx'
import store from './redux/index.js'
import TopicId from './components/children/topicId.jsx'
import TopicId1 from './components/children/topicId1.jsx'
import TopicId2 from './components/children/topicId2.jsx'
import { BrowserRouter,HashRouter,Route ,Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'
const getConfirmation = (message, callback) => {
    const allowTransition = window.confirm(message)
    callback(allowTransition)
    }
    console.log(store.getState())
ReactDom.render(
    <Provider store={store}>
   <BrowserRouter>
   <NarBar>
      {/* <Route path="/index"  exact  component={Index1}>
         
      </Route> */}
      <Switch>
      <Route exact path="/" component={Index1}/>
      <Route path="/about" component={About} />
      <Route path="/events" component={Event1} />
      <Route path="/products" component={Product} />
      <Route path="/contact/:id" component={Contact} />
      <Index1 path="/index" component={Index1}>
           <Route path="/index/current" component={TopicId} />
           <Route path="/index/current1" component={TopicId1} />
           <Route path="/index/current2" component={TopicId2} />
      </Index1>
      </Switch>
   </NarBar>
       {/* <Hello>
           <Route path="/Two" component={Two} />
           <Route path="/First" component={First} />
       </Hello> */}
       {/* <Route path="/" component={Hello}></Route> */}
   </BrowserRouter></Provider>,
   document.getElementById("hello")
)