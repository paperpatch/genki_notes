import React, { useState } from "react";
import { Link } from "react-router-dom";

const lessons = [
  {
    title: "Lesson 1: New Friends",
    path: "/lesson1",
    sections: [
      { title: "1.1", id: "section1" },
      { title: "1.2", id: "section2" },
      { title: "1.3", id: "section3" },
    ],
  },
  {
    title: "Lesson 2: Shopping",
    path: "/lesson2",
    sections: [
      { title: "2.1", id: "section1" },
      { title: "2.2", id: "section2" },
      { title: "2.3", id: "section3" },
      { title: "2.4", id: "section4" },
      { title: "2.5", id: "section5" },
      { title: "2.6", id: "section6" },
      { title: "2.7", id: "section7" },
    ],
  },
  {
    title: "Lesson 3: Making a Date",
    path: "/lesson3",
    sections: [
      { title: "3.1", id: "section1" },
      { title: "3.2", id: "section2" },
      { title: "3.3", id: "section3" },
      { title: "3.4", id: "section4" },
      { title: "3.5", id: "section5" },
      { title: "3.6", id: "section6" },
      { title: "3.7", id: "section7" },
      { title: "3.8", id: "section8" },
    ],
  },
  {
    title: "Lesson 4: The First Date",
    path: "/lesson4",
    sections: [
      { title: "4.1", id: "section1" },
      { title: "4.2", id: "section2" },
      { title: "4.3", id: "section3" },
      { title: "4.4", id: "section4" },
      { title: "4.5", id: "section5" },
      { title: "4.6", id: "section6" },
      { title: "4.7", id: "section7" },
      { title: "4.8", id: "section8" },
    ],
  },
  {
    title: "Lesson 5: The First Date",
    path: "/lesson5",
    sections: [
      { title: "5.1", id: "section1" },
      { title: "5.2", id: "section2" },
      { title: "5.3", id: "section3" },
      { title: "5.4", id: "section4" },
      { title: "5.5", id: "section5" },
      { title: "5.6", id: "section6" },
    ],
  },
  {
    title: "Lesson 6: A Day in Robert's Life",
    path: "/lesson6",
    sections: [
      { title: "6.1", id: "section1" },
      { title: "6.2", id: "section2" },
      { title: "6.3", id: "section3" },
      { title: "6.4", id: "section4" },
      { title: "6.5", id: "section5" },
      { title: "6.6", id: "section6" },
      { title: "6.7", id: "section7" },
    ],
  },
  {
    title: "Lesson 7: Family Picture",
    path: "/lesson7",
    sections: [
      { title: "7.1", id: "section1" },
      { title: "7.2", id: "section2" },
      { title: "7.3", id: "section3" },
      { title: "7.4", id: "section4" },
      { title: "7.5", id: "section5" },
      { title: "7.6", id: "section6" },
    ],
  },
  {
    title: "Lesson 8: Barbeque",
    path: "/lesson8",
    sections: [
      { title: "8.1", id: "section1" },
      { title: "8.2", id: "section2" },
      { title: "8.3", id: "section3" },
      { title: "8.4", id: "section4" },
      { title: "8.5", id: "section5" },
      { title: "8.6", id: "section6" },
      { title: "8.7", id: "section7" },
      { title: "8.8", id: "section8" },
    ],
  },
  {
    title: "Lesson 9: Kabuki",
    path: "/lesson9",
    sections: [
      { title: "8.1", id: "section1" },
      { title: "8.2", id: "section2" },
      { title: "8.3", id: "section3" },
      { title: "8.4", id: "section4" },
      { title: "8.5", id: "section5" },
      { title: "8.6", id: "section6" },
      { title: "8.7", id: "section7" },
    ],
  },
  {
    title: "Lesson 9: Kabuki",
    path: "/lesson9",
    sections: [
      { title: "8.1", id: "section1" },
      { title: "8.2", id: "section2" },
      { title: "8.3", id: "section3" },
      { title: "8.4", id: "section4" },
      { title: "8.5", id: "section5" },
      { title: "8.6", id: "section6" },
      { title: "8.7", id: "section7" },
    ],
  },
];

function Searchbar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const filteredLessons = lessons.filter(
    (lesson) =>
      lesson.title.toLowerCase().includes(query) ||
      lesson.sections.some((section) =>
        section.title.toLowerCase().includes(query)
      )
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search lessons..."
        value={query}
        onChange={handleSearch}
      />
      {query && (
        <ul>
          {filteredLessons.map((lesson) => (
            <li key={lesson.path}>
              <Link to={lesson.path}>{lesson.title}</Link>
              <ul>
                {lesson.sections.map((section) => {
                  <li key={section.id}>
                    <Link to={`${lesson.path}#${section.id}`}>
                    {section.title}
                    </Link>
                  </li>
                })}
              </ul>
            </li>
          ))}
          {filteredLessons.length === 0 && <p>No results found</p>}
        </ul>
      )}
    </div>
  );
}

export default Searchbar;
