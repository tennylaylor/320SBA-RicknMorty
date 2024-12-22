import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import "./App.css";

function App() {
  console.log("Function App");
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes></Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
