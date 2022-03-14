import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/"></Route>
        </Routes>
      </Router>
      <Login />
    </div>
  );
}

export default App;
