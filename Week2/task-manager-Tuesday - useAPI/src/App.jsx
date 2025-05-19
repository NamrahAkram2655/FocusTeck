import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";

const App = () => (
  <BrowserRouter>
    {/* <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </nav>
     */}
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);

export default App;
