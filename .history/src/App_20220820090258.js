import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Resume from "./pages/resume/Resume";
import Contact from "./pages/contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
