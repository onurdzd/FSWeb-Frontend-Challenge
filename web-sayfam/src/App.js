import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Profile from './Components/Profile';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="app-container">
      <Header ></Header>
      <Skills></Skills>
      <Profile></Profile>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
