import Hello from './components/Hello.jsx'
import React from 'react' 
import ReactDom from 'react-dom'
import { BrowserRouter,HashRouter,Route } from 'react-router-dom'

ReactDom.render(
   <HashRouter>
       <Route path="/" component={Hello}></Route>
   </HashRouter>,
   document.getElementById("hello")
)