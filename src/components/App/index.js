import {Component} from 'react';
import Home from '../Home'
import LogIn from '../LogIn'
import Registration from '../Registration';
import Contacts from '../Contacts'
import Header from '../Header'
import Footer from '../Footer'
import {
  BrowserRouter as Router,
  Route,
  Routes
 } from "react-router-dom"

class App extends Component {

    render(){
      return (<>
      <Router>
        <Header/>         
        <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/logIn" element={<LogIn />} />
              <Route path="/contacts" element={<Contacts />} /> 
              <Route path="/registration" element={<Registration />} /> 
         </Routes>
      </Router>
      
      <Footer/>

      </>)
    }
}

export default App