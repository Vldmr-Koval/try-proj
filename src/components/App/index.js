import {Component} from 'react';
import Home from '../Home'
import Registration from '../Registration'
import Contacts from '../Contacts'
import Header from '../Header'
import Footer from '../Footer'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Outlet
} from "react-router-dom"

class App extends Component {

    render(){
      return (<>
      <Router>
        <Header/>         
        <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/contacts" element={<Contacts />} /> 
         </Routes>
      </Router>
      
      <Footer/>

      </>)
    }
}

export default App