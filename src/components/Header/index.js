import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
  const searchRef = useRef(null);
  const settingsModalRef = useRef(null);
  const settingsIconRef = useRef(null);

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
        sectionTitle: section.title,
        sectionContent: section.content,
        path: lesson.path,
        sectionId: section.id,
      }))
    );
    setAllContent(content);
  }, []);

  // Close Modals on Outside Clicks or Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Handle Search Results Visibility
      if (
        searchRef.current &&
        !searchRef.current.contains(e.target)
      ) {
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
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapePress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapePress);
    };
  }, []);

  const handleSearch = (e) => {
    setQuery(e.target.value.toLowerCase());
    setIsVisible(true);
  };

  const handleSearchBarClick = () => {
    if (!isVisible && query.trim()) {
      setIsVisible(true);
    }
  };

  const filteredContent = allContent.filter(
    (item) =>
      item.lessonTitle.toLowerCase().includes(query) ||
      item.sectionContent.toLowerCase().includes(query)
  );

  const handleResultClick = () => {
    setIsVisible(false);
    // setQuery('');
  };

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
          onClick={handleSearchBarClick}
          onChange={handleSearch}
        />
        {query && isVisible && (
          <ul>
            {filteredContent.length > 0 ? (
              filteredContent.map((item, index) => (
                <Link
                  to={`${item.path}#${item.sectionId}`}
                  className="search-item"
                  key={index}
                  onClick={handleResultClick}
                >
                  <li>{item.sectionTitle}</li>
                </Link>
              ))
            ) : (
              <p>No results found</p>
            )}
          </ul>
        )}
      </div>
      <a
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
      <img
        className="icon icon-gear"
        src={darkMode ? iconGearDark : iconGear}
        alt="settings-gear"
        onClick={toggleSettingsModal}
        ref={settingsIconRef}
      />
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
