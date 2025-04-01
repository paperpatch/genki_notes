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
import {
  Lesson1,
  Lesson2,
  Lesson3,
  Lesson4,
  Lesson5,
  Lesson6,
  Lesson7,
  Lesson8,
  Lesson9,
  Lesson10,
  Lesson11,
  Lesson12,
  Lesson13,
  Lesson14,
  Lesson15,
  Lesson16,
  Lesson17,
  Lesson18,
  Lesson19,
  Lesson20,
  Lesson21,
  Lesson22,
  Lesson23,
} from "./pages/lessons";
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
