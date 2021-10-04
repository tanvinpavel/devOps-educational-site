import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import AllServices from './Components/AllServices/AllServices';
import OurInstructors from './Components/OurInstructors/OurInstructors';

function App() {
  return (
    <div>
      <Router>

        <Header></Header>

        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/services">
            <AllServices></AllServices>
          </Route>

          <Route path="/instructor">
            <OurInstructors></OurInstructors>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>

        </Switch>
        
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
