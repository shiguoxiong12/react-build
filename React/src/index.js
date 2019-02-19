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
import { BrowserRouter,HashRouter,Route } from 'react-router-dom'
const getConfirmation = (message, callback) => {
    const allowTransition = window.confirm(message)
    callback(allowTransition)
    }
ReactDom.render(
   <BrowserRouter>
   <NarBar>
      <Route path="/"  exact  component={Index1} />
      <Route path="/about" component={About} />
      <Route path="/events" component={Event1} />
      <Route path="/products" component={Product} />
      <Route path="/contact" component={Contact} />
   </NarBar>
       {/* <Hello>
           <Route path="/Two" component={Two} />
           <Route path="/First" component={First} />
       </Hello> */}
       {/* <Route path="/" component={Hello}></Route> */}
   </BrowserRouter>,
   document.getElementById("hello")
)