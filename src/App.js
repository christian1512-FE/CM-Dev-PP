import { Navbar, Technologies } from "./components";
import { Header, About, Projects, Contact, Footer } from "./pages";

import './App.css';

function App() {
  return (
    <div className="App">
    <div className="background-color">
     <Navbar />
    </div>
     <Technologies />
     <About />
     <Header />
     <Projects />
     <Contact />
     <Footer />
      </div>
  );
}

export default App;
