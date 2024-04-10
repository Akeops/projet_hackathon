import React from "react";
import UserPage from "./components/UserPage";
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBarConnecte";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <UserPage />
      </main>
      
    </div>
  );
}

export default App;
