import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./Home";
import Signup from "./components/Signup";
import AddBlog from "./components/AddBlog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/addBlog" Component={AddBlog} />
      </Routes>
    </Router>
  );
}

export default App;
