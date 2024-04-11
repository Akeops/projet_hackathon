// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBarConnecte";
import MapComponent from './components/MapComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar />
      </header>
      <main>
        <MapComponent />
      </main>
      
    </div>
  );
}

export default App;
