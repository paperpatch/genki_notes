import React, { useEffect } from "react";

function Lesson1() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  return (
    <div>
      <h2>Lesson 1: New Friends</h2>
      <section id="section1">
        <h3>1.1: X は Y です</h3>
        <p>です (noun) = It is...</p>
        <p>は = topic particle (read as wa)</p>
        <p>X は Y です。= X is Y. As for X, it is Y.</p>
      </section>

      <section id="section2">
        <h3>1.2 : Question Sentences</h3>
        <p>To ask a question, add a ka to です ={">"} ですか?.</p>
        <p>なんですか (nan desu ka) = what is it?</p>
      </section>

      <section id="section3">
        <h3>
          1.3 Noun<sub>1</sub> の Noun<sub>2</sub>
        </h3>
        <p>の (pronounced no) is a particle that connects two noun.</p>
        <p>Can use の like the posessive (Example: Takeshi's).</p>
        <p>Can also mean "of X", or "of the Y".</p>
        <p>Similar to Chinese 的.</p>
      </section>
    </div>
  );
}

export default Lesson1;
