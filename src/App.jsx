
import './App.css'
import Contact from './components/Contact';
import Education from './components/Education';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
function App() {
  return (
    <div className="app-wrapper">
            <Navbar />
            <Hero />
            <Education/>
            <Skills/>
            <Projects />
            <Contact/>
        </div>
  );
}

export default App
