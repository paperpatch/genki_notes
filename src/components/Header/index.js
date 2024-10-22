import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import lessons from "../../assets/data/lessons";
import "./Header.css";

function Header() {
  const [query, setQuery] = useState("");
  const [allContent, setAllContent] = useState([]);

  useEffect(() => {
    const content = lessons.flatMap((lesson) => [
      lesson.title,
      ...lesson.sections.map((section) => section.content),
    ]);
    setAllContent(content);
  }, []);

  const handleSearch = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const filteredContent = allContent.filter((content) =>
    content.toLowerCase().includes(query)
  );

  return (
    <nav className="header">
      <div className="header-title">
        <h1>Genki Notes</h1>
      </div>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search lessons..."
          value={query}
          onChange={handleSearch}
        />
        {query && (
          <ul>
          {filteredContent.length > 0 ? (
            filteredContent.map((content) => {
              // Find the lesson and section for the content
              const { lesson, section } = lessons.find(({ title, sections }) =>
                [title, ...sections.map((s) => s.content)].includes(content)
              );

              const link = `${lesson.path}#${section.id}`;

              return (
                <li key={content}>
                  <Link to={link}>{content}</Link>
                </li>
              );
            })
          ) : (
            <p>No results found</p>
          )}
        </ul>
        )}
      </div>
      <div className="header-info">
        <span className="info-icon">i</span>
      </div>
    </nav>
  );
}

export default Header;
