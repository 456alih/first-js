import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginSignup from "./components/loginSignup/loginSignup"; // Import the component correctly
import Home from "./components/Home/Home";
import Navbar from "./components/navBar/NavBar";
import About from "./components/About/About";
import Contact from "./components/Assets/Contacts/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <LoginSignup />
      <About />
      <Contact />
    </div>
  );
}

export default App;
