import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson1() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 1: あたらしいともだち (New Friends)</h2>
      <section id="section1">
        <h3>1.1: X は Y です</h3>
        <div className="indent">
          <p>です (noun) = It is...</p>
          <p>は = topic particle (read as wa)</p>
          <p>X は Y です。= X is Y. As for X, it is Y.</p>
        </div>
      </section>

      <section id="section2">
        <h3>1.2 : Question Sentences</h3>
        <div className="indent">
          <p>To ask a question, add a ka to です ={">"} ですか?.</p>
          <p>
            <span class="underline-orange">なん</span>ですか (nan desu ka) =
            what is it?
          </p>
        </div>
      </section>

      <section id="section3">
        <h3>
          1.3 Noun<sub>1</sub> の Noun<sub>2</sub>
        </h3>
        <div className="indent">
          <p>の (pronounced no) is a particle that connects two noun.</p>
          <p>Can use の like the posessive (Example: Takeshi's).</p>
          <p>Can also mean "of X", or "of the Y".</p>
          <p>Similar to Chinese 的.</p>
        </div>
      </section>
    </div>
  );
}

export default Lesson1;
