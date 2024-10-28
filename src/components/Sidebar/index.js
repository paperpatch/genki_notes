import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import Footer from "../Footer";

function Table() {
  const [genkiOneOpen, setGenkiOneOpen] = useState(true);
  const [genkiTwoOpen, setGenkiTwoOpen] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sidebarRef = useRef(null);
  const location = useLocation();

  const toggleGenkiOne = () => setGenkiOneOpen(!genkiOneOpen);
  const toggleGenkiTwo = () => setGenkiTwoOpen(!genkiTwoOpen);

  // Check screen size for mobile view
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Toggle sidebar visibility for mobile
  const toggleSidebar = () => {
    if (isMobile) {
      setIsSidebarVisible(!isSidebarVisible);
    }
  };

  // Handle click outside to close the sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSidebarVisible && // Sidebar is open
        sidebarRef.current && // Reference exist
        !sidebarRef.current.contains(event.target) // Click is outside sidebar
      ) {
        setIsSidebarVisible(false); // Close sidebar
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

  return (
    <>
      {isMobile && (
        <button className="sidebar-toggle" onClick={toggleSidebar}></button>
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
                <li>
                  <Link to="/lesson1">Lesson 1: New Friends</Link>
                </li>
                <li>
                  <Link to="/lesson2">Lesson 2: Shopping</Link>
                </li>
                <li>
                  <Link to="/lesson3">Lesson 3: Making a Date</Link>
                </li>
                <li>
                  <Link to="/lesson4">Lesson 4: The First Date</Link>
                </li>
                <li>
                  <Link to="/lesson5">Lesson 5: A Trip to Okinawa</Link>
                </li>
                <li>
                  <Link to="/lesson6">Lesson 6: A Day in Robert's Life</Link>
                </li>
                <li>
                  <Link to="/lesson7">Lesson 7: Family Picture</Link>
                </li>
                <li>
                  <Link to="/lesson8">Lesson 8: Barbecue</Link>
                </li>
                <li>
                  <Link to="/lesson9">Lesson 9: Kabuki</Link>
                </li>
                <li>
                  <Link to="/lesson10">Lesson 10: Winter Vacation Plans</Link>
                </li>
                <li>
                  <Link to="/lesson11">Lesson 11: After the Vacation</Link>
                </li>
                <li>
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
                <li>
                  <Link to="/lesson13">
                    Lesson 13: Looking for a Part-time Job
                  </Link>
                </li>
                <li>
                  <Link to="/lesson14">Lesson 14: Valentine's Day</Link>
                </li>
                <li>
                  <Link to="/lesson15">Lesson 15: A Trip to Nagano</Link>
                </li>
                <li>
                  <Link to="/lesson16">Lesson 16: Lost and Found</Link>
                </li>
                <li>
                  <Link to="/lesson17">Lesson 17: Grumble and Gossip</Link>
                </li>
                <li>
                  <Link to="/lesson18">Lesson 18: John's Part-Time Job</Link>
                </li>
                <li>
                  <Link to="/lesson19">Lesson 19: Meeting the Boss</Link>
                </li>
                <li>
                  <Link to="/lesson20">Lesson 20: Mary Goes Shopping</Link>
                </li>
                <li>
                  <Link to="/lesson21">Lesson 21: Burglar</Link>
                </li>
                <li>
                  <Link to="/lesson22">Lesson 22: Education in Japan</Link>
                </li>
                <li>
                  <Link to="/lesson23">Lesson 23: Good-bye</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <Footer />
      </nav>
    </>
  );
}

export default Table;
