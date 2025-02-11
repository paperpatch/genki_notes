import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

function Table() {
  const [genkiOneOpen, setGenkiOneOpen] = useState(true);
  const [genkiTwoOpen, setGenkiTwoOpen] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sidebarRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const location = useLocation();

  const toggleGenkiOne = () => setGenkiOneOpen(!genkiOneOpen);
  const toggleGenkiTwo = () => setGenkiTwoOpen(!genkiTwoOpen);

  // Check screen size for mobile view
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Handle click outside to close the sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSidebarVisible && // Sidebar is open
        sidebarRef.current && // Reference exist
        toggleButtonRef.current && // Toggle button reference exists
        !sidebarRef.current.contains(event.target) && // Click is outside sidebar
        !toggleButtonRef.current.contains(event.target) // Click is not on the toggle button
      ) {
        setIsSidebarVisible(false);
      }
    };

    if (isSidebarVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarVisible]);

  // Close sidebar when route changes
  useEffect(() => {
    if (isMobile) {
      setIsSidebarVisible(false);
    }
  }, [location, isMobile]);

  // Toggle sidebar visibility for mobile
  const toggleSidebar = (event) => {
    event.stopPropagation();
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      {isMobile && (
        <button
          ref={toggleButtonRef}
          className="sidebar-toggle"
          onClick={toggleSidebar}
        ></button>
      )}
      <nav
        ref={sidebarRef}
        className={`sidebar ${isMobile && isSidebarVisible ? "visible" : ""}`}
      >
        <h2>Table of Contents</h2>
        <ul className="toc">
          <li>
            <button onClick={toggleGenkiOne}>
              Genki I {genkiOneOpen ? "▼" : "☰"}
            </button>
            {genkiOneOpen && (
              <ul className="nested">
                <li
                  className={location.pathname === "/lesson1" ? "active" : ""}
                >
                  <Link to="/lesson1">Lesson 1: New Friends</Link>
                </li>
                <li
                  className={location.pathname === "/lesson2" ? "active" : ""}
                >
                  <Link to="/lesson2">Lesson 2: Shopping</Link>
                </li>
                <li
                  className={location.pathname === "/lesson3" ? "active" : ""}
                >
                  <Link to="/lesson3">Lesson 3: Making a Date</Link>
                </li>
                <li
                  className={location.pathname === "/lesson4" ? "active" : ""}
                >
                  <Link to="/lesson4">Lesson 4: The First Date</Link>
                </li>
                <li
                  className={location.pathname === "/lesson5" ? "active" : ""}
                >
                  <Link to="/lesson5">Lesson 5: A Trip to Okinawa</Link>
                </li>
                <li
                  className={location.pathname === "/lesson6" ? "active" : ""}
                >
                  <Link to="/lesson6">Lesson 6: A Day in Robert's Life</Link>
                </li>
                <li
                  className={location.pathname === "/lesson7" ? "active" : ""}
                >
                  <Link to="/lesson7">Lesson 7: Family Picture</Link>
                </li>
                <li
                  className={location.pathname === "/lesson8" ? "active" : ""}
                >
                  <Link to="/lesson8">Lesson 8: Barbecue</Link>
                </li>
                <li
                  className={location.pathname === "/lesson9" ? "active" : ""}
                >
                  <Link to="/lesson9">Lesson 9: Kabuki</Link>
                </li>
                <li
                  className={location.pathname === "/lesson10" ? "active" : ""}
                >
                  <Link to="/lesson10">Lesson 10: Winter Vacation Plans</Link>
                </li>
                <li
                  className={location.pathname === "/lesson11" ? "active" : ""}
                >
                  <Link to="/lesson11">Lesson 11: After the Vacation</Link>
                </li>
                <li
                  className={location.pathname === "/lesson12" ? "active" : ""}
                >
                  <Link to="/lesson12">Lesson 12: Feeling Ill</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={toggleGenkiTwo}>
              Genki II {genkiTwoOpen ? "▼" : "☰"}
            </button>
            {genkiTwoOpen && (
              <ul className="nested">
                <li
                  className={location.pathname === "/lesson13" ? "active" : ""}
                >
                  <Link to="/lesson13">
                    Lesson 13: Looking for a Part-time Job
                  </Link>
                </li>
                <li
                  className={location.pathname === "/lesson14" ? "active" : ""}
                >
                  <Link to="/lesson14">Lesson 14: Valentine's Day</Link>
                </li>
                <li
                  className={location.pathname === "/lesson15" ? "active" : ""}
                >
                  <Link to="/lesson15">Lesson 15: A Trip to Nagano</Link>
                </li>
                <li
                  className={location.pathname === "/lesson16" ? "active" : ""}
                >
                  <Link to="/lesson16">Lesson 16: Lost and Found</Link>
                </li>
                <li
                  className={location.pathname === "/lesson17" ? "active" : ""}
                >
                  <Link to="/lesson17">Lesson 17: Grumble and Gossip</Link>
                </li>
                <li
                  className={location.pathname === "/lesson18" ? "active" : ""}
                >
                  <Link to="/lesson18">Lesson 18: John's Part-Time Job</Link>
                </li>
                <li
                  className={location.pathname === "/lesson19" ? "active" : ""}
                >
                  <Link to="/lesson19">Lesson 19: Meeting the Boss</Link>
                </li>
                <li
                  className={location.pathname === "/lesson20" ? "active" : ""}
                >
                  <Link to="/lesson20">Lesson 20: Mary Goes Shopping</Link>
                </li>
                <li
                  className={location.pathname === "/lesson21" ? "active" : ""}
                >
                  <Link to="/lesson21">Lesson 21: Burglar</Link>
                </li>
                <li
                  className={location.pathname === "/lesson22" ? "active" : ""}
                >
                  <Link to="/lesson22">Lesson 22: Education in Japan</Link>
                </li>
                <li
                  className={location.pathname === "/lesson23" ? "active" : ""}
                >
                  <Link to="/lesson23">Lesson 23: Good-bye</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <footer id="footer" className="footer">
          <div className="footer-content">
            <nav>
              <Link to="/Resources">Terms of Service</Link>
              <Link to="/Resources">FAQ</Link>
              <Link to="/Resources">Contact</Link>
            </nav>
          </div>
        </footer>
      </nav>
    </>
  );
}

export default Table;
