import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile.js";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import { Route, Switch } from "react-router-dom";
import ContactForm from "./Components/Contacts/ContactForm";

function App() {
  return (
    <div className="app-container">
      <Switch>
        <Route exact path="/">
          <header>
            <Header />
          </header>
          <main>
            <Skills />
            <Profile />
            <Projects />
          </main>
          <footer>
            <Footer />
          </footer>
        </Route>
        <Route exact path="/form">
          <ContactForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
