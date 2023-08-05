import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile.js";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import { Route, Switch,useHistory } from "react-router-dom";
// import ContactForm from "./Components/Contacts/ContactForm";
import Navbar from "./Components/HeaderNavBar/Navbar";

function App() {

  let history = useHistory();

  window.onscroll = function() {
    var scrollToTopButton = document.querySelector(".scroll-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.classList.add("show");
    } else {
        scrollToTopButton.classList.remove("show");
    }
};

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });

  history.push("/")
}

  return (
    <div className="app-container">
      <Switch>
        <Route exact path="/">
        <div class="scroll-to-top" onClick={()=>scrollToTop()}>▲</div>
        <Navbar></Navbar>
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
        {/* <Route exact path="/form">
          <ContactForm />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
