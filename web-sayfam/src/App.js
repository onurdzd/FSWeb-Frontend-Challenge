import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Profile from './Components/Profile';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import {Route, Switch} from "react-router-dom"
import ContactForm from './Components/ContactForm';

function App() {
  return (
    <div className="app-container">
      <Switch>
      <Route exact path="/">
      <Header/ >
      <Skills/>
      <Profile/>
      <Projects/>
      <Footer/>
      </Route>
      <Route exact path="/form">
        <ContactForm/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
