import './App.css';
import {
  BrowserRouter,
  Switch, Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Services from './pages/Services/Services';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" ><Home /></Route>
          <Route path="/home" ><Home /></Route>
          <Route path="/about" > <About /> </Route>
          <Route path="/skills" > <Skills /> </Route>
          <Route path="/services" > <Services /> </Route>
          <Route path="/portfolio" > <Portfolio /> </Route>
          <Route path="/contect" ><Contact /> </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
