import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lessons from "../../assets/data/lessons";
import { iconGithub, iconInfo } from "../../assets/images/icons";
import "./Header.css";

function Header() {
  const [query, setQuery] = useState("");
  const [allContent, setAllContent] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <nav className="header">
      <div className="header-title">
        <h1>Genki Notes</h1>
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
                >
                  <li key={index}>{item.sectionTitle}</li>
                </Link>
              ))
            ) : (
              <p>No results found</p>
            )}
          </ul>
        )}
      </div>
      <img className="icon icon-info" src={iconInfo} alt="info-icon" />
      <img className="icon icon-github" src={iconGithub} alt="icon-github" />
    </nav>
  );
}

export default Header;
