import React, { useState, useEffect } from "react";
import "./Settings.css";

function SettingsModal({
  isVisible,
  onClose,
  onSettingsChange,
  initialSettings,
}) {
  const [darkMode, setDarkMode] = useState(initialSettings?.darkMode || false);
  const [fontSize, setFontSize] = useState(initialSettings?.fontSize || 0);
  const [fontFamily, setFontFamily] = useState(
    initialSettings?.fontFamily || "arial"
  );

  const handleFontSizeChange = (change) => {
    setFontSize((prev) => {
      const newSize = Math.min(2, Math.max(-2, prev + change));
      return newSize;
    });
  };

  useEffect(() => {
    // Manage Dark Mode
    document.body.classList.toggle("dark-mode", darkMode);

    // Manage Font Size
    const fontSizeClass = `font-size-${fontSize}`;
    document.documentElement.classList.remove(
      "font-size--2",
      "font-size--1",
      "font-size-0",
      "font-size-1",
      "font-size-2"
    );
    document.documentElement.classList.add(fontSizeClass);

    // Manage Font Family
    document.documentElement.classList.remove(
      "arial",
      "times",
      "courier",
      "comicsansms",
      "impact"
    );
    document.documentElement.classList.add(fontFamily);

    onSettingsChange({ darkMode, fontSize, fontFamily });
  }, [darkMode, fontSize, fontFamily, onSettingsChange]);

  if (!isVisible) return null;

  return (
    <div className="settings-modal">
      <h2>Settings</h2>
      <div className="setting">
        <label>Dark Mode</label>
        <label className="switch">
          <input
            type="checkbox"
            id="dark-mode"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="setting">
        <label>Font Size</label>
        <div className="font-size-controls">
          <button
            onClick={() => handleFontSizeChange(-1)}
            disabled={fontSize === -2}
          >
            -
          </button>
          <span className="font-size-value">
            {fontSize === 0 ? "0" : fontSize > 0 ? `+${fontSize}` : fontSize}
          </span>
          <button
            onClick={() => handleFontSizeChange(1)}
            disabled={fontSize === 2}
          >
            +
          </button>
        </div>
      </div>
      <div className="setting">
        <label htmlFor="font-family">Font Family</label>
        <select
          id="font-family"
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
        >
          <option value="arial">Arial</option>
          <option value="times">Times New Roman</option>
          <option value="courier">Courier</option>
          <option value="comicsansms">Comic Sans MS</option>
          <option value="impact">Impact</option>
        </select>
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default SettingsModal;
