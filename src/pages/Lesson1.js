import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";
import "../styles/pages.css";

function Lesson1() {
  useSmoothScrollToSection();

  return (
    <div>
      <div className="lesson-header">
        <h2 className="lesson-title background-orange">Lesson 1</h2>
        <h2 className="lesson-title-orange">
          あたらしいともだち (New Friends)
        </h2>
      </div>

      <section id="section1">
        <div className="section-header">
          <h3 className="section-circle circle-orange">1</h3>
          <h3 className="section-text-orange">X は Y です</h3>
        </div>
        <div className="indent">
          <p>です (noun) = It is...</p>
          <p>は = topic particle (read as wa)</p>
          <p>X は Y です。= X is Y. As for X, it is Y.</p>
        </div>
      </section>

      <section id="section2">
        <div className="section-header">
          <h3 className="section-circle circle-orange">2</h3>
          <h3 className="section-text-orange">Question Sentences</h3>
        </div>
        <div className="indent">
          <p>To ask a question, add a ka to です ={">"} ですか?.</p>
          <p>
            <span className="underline-orange">なん</span>ですか (nan desu ka) =
            what is it?
          </p>
        </div>
      </section>

      <section id="section3">
        <div className="section-header">
          <h3 className="section-circle circle-orange">3</h3>
          <h3 className="section-text-orange">
            Noun<sub>1</sub> の Noun<sub>2</sub>
          </h3>
        </div>
        <div className="indent">
          <p>の (pronounced no) is a particle that connects two noun.</p>
          <p>Can use の like the posessive (Example: Takeshi's).</p>
          <p>Can also mean "of X", or "of the Y".</p>
          <p>Similar to the Chinese character 的.</p>
        </div>
      </section>
    </div>
  );
}

export default Lesson1;
