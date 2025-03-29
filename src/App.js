// React
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

// components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

// lessons
import Home from "./pages/Home";
import Travel from "./pages/Travel";
import Lesson1 from "./pages/Lesson1";
import Lesson2 from "./pages/Lesson2";
import Lesson3 from "./pages/Lesson3";
import Lesson4 from "./pages/Lesson4";
import Lesson5 from "./pages/Lesson5";
import Lesson6 from "./pages/Lesson6";
import Lesson7 from "./pages/Lesson7";
import Lesson8 from "./pages/Lesson8";
import Lesson9 from "./pages/Lesson9";
import Lesson10 from "./pages/Lesson10";
import Lesson11 from "./pages/Lesson11";
import Lesson12 from "./pages/Lesson12";
import Lesson13 from "./pages/Lesson13";
import Lesson14 from "./pages/Lesson14";
import Lesson15 from "./pages/Lesson15";
import Lesson16 from "./pages/Lesson16";
import Lesson17 from "./pages/Lesson17";
import Lesson18 from "./pages/Lesson18";
import Lesson19 from "./pages/Lesson19";
import Lesson20 from "./pages/Lesson20";
import Lesson21 from "./pages/Lesson21";
import Lesson22 from "./pages/Lesson22";
import Lesson23 from "./pages/Lesson23";
import PageNotFound from "./pages/PageNotFound";
import Resources from "./pages/Resources";

function AppWrapper() {
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/travel") {
      setActiveSection("");
    }
  }, [location.pathname]);

  const validRoutes = [
    "/",
    "/travel",
    "/lesson1",
    "/lesson2",
    "/lesson3",
    "/lesson4",
    "/lesson5",
    "/lesson6",
    "/lesson7",
    "/lesson8",
    "/lesson9",
    "/lesson10",
    "/lesson11",
    "/lesson12",
    "/lesson13",
    "/lesson14",
    "/lesson15",
    "/lesson16",
    "/lesson17",
    "/lesson18",
    "/lesson19",
    "/lesson20",
    "/lesson21",
    "/lesson22",
    "/lesson23",
    "/resources",
  ];

  const isValidRoute = validRoutes.includes(location.pathname);

  if (!isValidRoute) {
    return <PageNotFound />;
  }

  return (
    <div>
      <Header />
      <div className="app-container">
        <Sidebar activeSection={activeSection} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/travel"
              element={<Travel setActiveSection={setActiveSection} />}
            />
            <Route path="/lesson1" element={<Lesson1 />} />
            <Route path="/lesson2" element={<Lesson2 />} />
            <Route path="/lesson3" element={<Lesson3 />} />
            <Route path="/lesson4" element={<Lesson4 />} />
            <Route path="/lesson5" element={<Lesson5 />} />
            <Route path="/lesson6" element={<Lesson6 />} />
            <Route path="/lesson7" element={<Lesson7 />} />
            <Route path="/lesson8" element={<Lesson8 />} />
            <Route path="/lesson9" element={<Lesson9 />} />
            <Route path="/lesson10" element={<Lesson10 />} />
            <Route path="/lesson11" element={<Lesson11 />} />
            <Route path="/lesson12" element={<Lesson12 />} />
            <Route path="/lesson13" element={<Lesson13 />} />
            <Route path="/lesson14" element={<Lesson14 />} />
            <Route path="/lesson15" element={<Lesson15 />} />
            <Route path="/lesson16" element={<Lesson16 />} />
            <Route path="/lesson17" element={<Lesson17 />} />
            <Route path="/lesson18" element={<Lesson18 />} />
            <Route path="/lesson19" element={<Lesson19 />} />
            <Route path="/lesson20" element={<Lesson20 />} />
            <Route path="/lesson21" element={<Lesson21 />} />
            <Route path="/lesson22" element={<Lesson22 />} />
            <Route path="/lesson23" element={<Lesson23 />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router basename="/genki_notes">
      <AppWrapper />
    </Router>
  );
}

export default App;
