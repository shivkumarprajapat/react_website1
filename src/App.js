import './App.css';
import Header from './components/inc/Header';
import Home from './components/pages/Home';
import Screenshots from './components/pages/Screenshots';
import Features from './components/pages/Features';
import Testimonials from './components/pages/Testimonials';
import Pricing from './components/pages/Pricing';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './components/pages/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/features">
          <Features />
        </Route>
        <Route path="/screenshots">
          <Screenshots />
        </Route>
        <Route path="/testimonials">
          <Testimonials />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Footer />
      </Router>
    </>

  );
}

export default App;
