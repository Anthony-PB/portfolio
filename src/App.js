import './App.css';
import AppHeader from './AppHeader.js';
import Navigation from "./components/Nav.js";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Navigation/>
      <Footer />
    </div>
  );
}

export default App;
