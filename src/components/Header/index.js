import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import lessons from "../../assets/data/lessons";
import {
  iconGear,
  iconGithub,
  iconGearDark,
  iconGithubDark,
} from "../../assets/images/icons";
import "./Header.css";
import SettingsModal from "../Settings";

function Header() {
  const [query, setQuery] = useState("");
  const [allContent, setAllContent] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const searchRef = useRef(null);
  const settingsModalRef = useRef(null);
  const settingsIconRef = useRef(null);
  const itemRefs = useRef([]);
  const navigate = useNavigate();

  // Load settings from LocalStorage
  useEffect(() => {
    let savedSettings = JSON.parse(localStorage.getItem("settings"));
    if (!savedSettings) {
      savedSettings = {
        darkMode: false,
        fontSize: 0,
        fontFamily: "arial",
      };
      localStorage.setItem("settings", JSON.stringify(savedSettings));
    }

    if (savedSettings.darkMode) {
      document.body.classList.add("dark-mode");
    }
    const fontSizeClass = `font-size-${savedSettings.fontSize}`;
    document.documentElement.classList.add(fontSizeClass);
    document.documentElement.classList.add(savedSettings.fontFamily);
    setDarkMode(savedSettings.darkMode);
  }, []);

  // Populate Search Content
  useEffect(() => {
    const content = lessons.flatMap((lesson) =>
      lesson.sections.map((section) => ({
        lessonTitle: lesson.title,
        sectionNumber: section.number,
        sectionTitle: section.title,
        sectionContent: section.content,
        path: lesson.path,
        sectionId: section.id,
      }))
    );
    setAllContent(content);
  }, []);

  // Close Results and Modals on Outside Clicks or Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Handle Search Results Visibility
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsVisible(false);
      }

      // Handle Settings Modal Visibility
      if (
        settingsIconRef.current &&
        !settingsIconRef.current.contains(e.target) &&
        settingsModalRef.current &&
        !settingsModalRef.current.contains(e.target)
      ) {
        setIsSettingsModalVisible(false);
      }
    };

    const handleEscapePress = (e) => {
      if (e.key === "Escape") {
        setIsVisible(false);
        setIsSettingsModalVisible(false);
        setActiveIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapePress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapePress);
    };
  }, []);

  /* Search Functionality */
  const handleSearch = (e) => {
    setQuery(e.target.value);
    setIsVisible(true);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (!isVisible) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((prevIndex) => {
          const newIndex =
            prevIndex < filteredContent.length - 1 ? prevIndex + 1 : 0;
          scrollToItem(newIndex);
          return newIndex;
        });
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((prevIndex) => {
          const newIndex =
            prevIndex > 0 ? prevIndex - 1 : filteredContent.length - 1;
          scrollToItem(newIndex);
          return newIndex;
        });
        break;
      case "Enter":
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < filteredContent.length) {
          const selectedItem = filteredContent[activeIndex];
          navigate(`${selectedItem.path}#${selectedItem.sectionId}`);
          setIsVisible(false);
          setQuery("");
        }
        break;
      default:
        break;
    }
  };

  const scrollToItem = (index) => {
    if (itemRefs.current[index]) {
      itemRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  const filteredContent = allContent.filter((item) => {
    const cleanQuery = query.replace(/['"]/g, "").toLowerCase();
    const cleanLessonTitle = item.lessonTitle
      .replace(/['"]/g, "")
      .toLowerCase();
    const cleanSectionContent = item.sectionContent
      .replace(/['"]/g, "")
      .toLowerCase();

    return (
      cleanLessonTitle.includes(cleanQuery) ||
      cleanSectionContent.includes(cleanQuery)
    );
  });

  /* Settings */
  const toggleSettingsModal = () => {
    setIsSettingsModalVisible((prev) => !prev);
  };

  const handleSettingsChange = (settings) => {
    localStorage.setItem("settings", JSON.stringify(settings));
    setDarkMode(settings.darkMode);
  };

  return (
    <header className="header">
      <div className="header-title">
        <Link to="/">
          <h1>Genki Notes</h1>
        </Link>
      </div>
      <div className="searchbar" ref={searchRef}>
        <input
          type="text"
          placeholder="Search lessons..."
          value={query}
          onClick={() => setIsVisible(true)}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
        />
        {query && isVisible && (
          <ul>
            {filteredContent.length > 0 ? (
              filteredContent.map((item, index) => (
                <Link
                  to={`${item.path}#${item.sectionId}`}
                  className={`search-item ${
                    index === activeIndex ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => {
                    setIsVisible(false);
                    setQuery("");
                  }}
                >
                  <li ref={(list) => (itemRefs.current[index] = list)}>
                    {item.sectionNumber}
                    <span className="searchresult-title">
                      {item.sectionTitle}
                    </span>
                  </li>
                </Link>
              ))
            ) : (
              <p>No results found</p>
            )}
          </ul>
        )}
      </div>
      <a
        className="icon-container"
        href="https://www.github.com/paperpatch/genki_notes"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="icon icon-github"
          src={darkMode ? iconGithubDark : iconGithub}
          alt="icon-github"
        />
      </a>
      <div
        className="icon-container"
        onClick={toggleSettingsModal}
        ref={settingsIconRef}
      >
        <img
          className="icon icon-gear"
          src={darkMode ? iconGearDark : iconGear}
          alt="settings-gear"
        />
      </div>
      {isSettingsModalVisible && (
        <div ref={settingsModalRef}>
          <SettingsModal
            isVisible={isSettingsModalVisible}
            onClose={toggleSettingsModal}
            onSettingsChange={handleSettingsChange}
            initialSettings={{
              darkMode,
              fontSize:
                JSON.parse(localStorage.getItem("settings"))?.fontSize || 0,
              fontFamily:
                JSON.parse(localStorage.getItem("settings"))?.fontFamily ||
                "arial",
            }}
          />
        </div>
      )}
    </header>
  );
}

export default Header;
