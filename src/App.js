import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.scss'
import { Redirect } from "./components/Redirect";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Redirect to='/home' />} />
          <Route exact path="/magic-navigator" element={<Redirect to='/home' />} />
          <Route exact path="/home" element={<div />} />
          <Route exact path="/accounts" element={<div />} />
          <Route exact path="/messages" element={<div />} />
          <Route exact path="/photos" element={<div />} />
          <Route exact path="/settings" element={<div />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
