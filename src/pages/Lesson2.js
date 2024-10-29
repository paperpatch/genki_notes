import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson2() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 2: かいもの (Shopping)</h2>
      <section id="section1">
        <h3>2.1: これ / それ / あれ / どれ</h3>
        <p>これ = this</p>
        <p>それ = that</p>
        <p>あれ = that one over there</p>
        <p>どれ = which one</p>
      </section>

      <section id="section2">
        <h3>2.2: この / その / あの / どの + Noun</h3>
        <p>
          Unlike the previous section, <em>kono</em>, <em>sono</em>,{" "}
          <em>ano</em>, and dono has to be placed before a noun and cannot stand
          alone.
        </p>
        <p>この = this thing</p>
        <p>その = that thing</p>
        <p>あの = that thing over there</p>
        <p>どの = which thing</p>
        <p>
          Can be used in reference to people, unlike <em>kore</em>,{" "}
          <em>sore</em>, and <em>are</em>, which is considered impolite.
        </p>
      </section>

      <section id="section3">
        <h3>2.3: ここ / そこ / あそこ / どこ</h3>
        <p>Words for places</p>
        <p>ここ = here, near me</p>
        <p>そこ = there, near you</p>
        <p>あそこ = over there</p>
        <p>どこ = where</p>
      </section>

      <section id="section4">
        <h3>2.4: だれの Noun</h3>
        <p>How to ask who something belongs to</p>
        <p>だれ = Who</p>
        <p>
          だれの = Whose (with the posessive term <em>no</em>)
        </p>
        <p>Example:</p>
        <p>
          これは だれの かばんですか <br />
          Kore wa dare no kaban desu ka.
        </p>
      </section>

      <section id="section5">
        <h3>2.5: Noun も</h3>
        <p>The particle for the word "too"</p>
        <p>
          In Japanese, you can only put <em>mo</em> directly after the item.
        </p>
        <p>A は X です。 (A is X.)</p>
        <p>B も X です。 (B too is X.)</p>
      </section>

      <section id="section6">
        <h3>2.6: Noun じゃないです</h3>
        <p>
          To negate a statement, you replace <em>desu</em> with{" "}
          <em>ja nai desu</em>
        </p>
        <p>A は X じゃないです。 (A is not X.)</p>
        <p>
          <em>Ja nai desu</em> is colloquial (used in ordinary or familiar
          conversations).
        </p>
        <p>
          <strong>じゃ</strong> is a contraction of <em>de wa</em>, so you might
          find the more formal terms in the following:
        </p>
        <p>
          A は X じゃありません。 (more formal speech style) <br />A は X
          でわありません。 (formal for writing)
        </p>
      </section>

      <section id="section7">
        <h3>2.7: ~ね / ~よ</h3>
        <p>
          Statements often end with sentence enders with the tags <em>ne</em> or{" "}
          <em>yo</em>
        </p>
        <p>
          You use <strong>ね</strong> (ne) if you are seeking the listener's
          confirmation or agreement.
        </p>
        <p>
          A は X です<strong>ね</strong>。(A is X right?) <br />B は Y です
          <strong>ね</strong>。(B is Y isn't it?)
        </p>
        <p>
          If you want to tell the listener that you are confident and the
          listener to believe it, you can use よ (yo).
        </p>
        <p>
          A は X じゃないです<strong>よ</strong>。 (Let me assure you. A is not
          X.) <br />B は Y ですよ。 (B is Y, I tell you.)
        </p>
        <p></p>
      </section>
    </div>
  );
}

export default Lesson2;
