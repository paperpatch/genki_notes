import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lessons from "../../assets/data/lessons";
import { iconGithub, iconGear } from "../../assets/images/icons";
import "./Header.css";
import SettingsModal from "../Settings";

function Header() {
  const [query, setQuery] = useState("");
  const [allContent, setAllContent] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);
  const searchRef = useRef(null);

  // Searchbar
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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsVisible(false);
      }
    };

    const handleEscapePress = (e) => {
      if (e.key === "Escape") {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapePress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapePress);
    };
  }, []);

  const handleResultClick = () => {
    setIsVisible(false);
    // setQuery('');
  };

  // Header Scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const header = document.querySelector(".header");
      if (currentScrollY > lastScrollY) {
        header.classList.add("scroll-hidden");
      } else {
        header.classList.remove("scroll-hidden");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Settings Modal
  const toggleSettingsModal = () => {
    setIsSettingsModalVisible(!isSettingsModalVisible);
  };

  const handleSettingsChange = (settings) => {
    localStorage.setItem('settings', JSON.stringify(settings));
  };

  useEffect(() => {
    const savedSettings = JSON.parse(localStorage.getItem('settings'));
    if(savedSettings) {
      if (savedSettings.darkMode) {
        document.body.classList.add('dark-mode');
      }
      document.documentElement.classList.add(savedSettings.fontSize);
      document.documentElement.classList.add(savedSettings.fontFamily);
    }
  })

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
        <img className="icon icon-github" src={iconGithub} alt="icon-github" />
      </a>
      <img
        className="icon icon-gear"
        src={iconGear}
        alt="settings-gear"
        onClick={toggleSettingsModal}
      />
      <SettingsModal
        isVisible={isSettingsModalVisible}
        onClose={toggleSettingsModal}
        onSettingsChange={handleSettingsChange}
      />
    </header>
  );
}

export default Header;
