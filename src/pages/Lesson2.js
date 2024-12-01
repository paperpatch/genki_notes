import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson2() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 2: かいもの (Shopping)</h2>
      <section id="section1">
        <h3>2.1: これ / それ / あれ / どれ</h3>
        <div className="indent">
          <p>これ = this</p>
          <p>それ = that</p>
          <p>あれ = that one over there</p>
          <p>どれ = which one</p>
        </div>
      </section>

      <section id="section2">
        <h3>2.2: この / その / あの / どの + Noun</h3>
        <div className="indent">
          <p>
            Unlike the previous section, <em>kono</em>, <em>sono</em>,{" "}
            <em>ano</em>, and dono has to be placed before a noun and cannot
            stand alone.
          </p>
          <p>この = this thing</p>
          <p>その = that thing</p>
          <p>あの = that thing over there</p>
          <p>どの = which thing</p>
          <p>
            Can be used in reference to people, unlike <em>kore</em>,{" "}
            <em>sore</em>, and <em>are</em>, which is considered impolite.
          </p>
        </div>
      </section>

      <section id="section3">
        <h3>2.3: ここ / そこ / あそこ / どこ</h3>
        <div className="indent">
          <p>Words for places:</p>
          <p>ここ = here, near me</p>
          <p>そこ = there, near you</p>
          <p>あそこ = over there</p>
          <p>どこ = where</p>
        </div>
      </section>

      <section id="section4">
        <h3>2.4: だれの Noun</h3>
        <div className="indent">
          <p>How to ask who something belongs to</p>
          <p>だれ = Who</p>
          <p>
            だれの = Whose (with the posessive term <em>no</em>)
          </p>
          <p>Example:</p>
          <p className="tab">
            これは <span className="underline-orange">だれの</span> かばんですか{" "}
            <br />
            Kore wa dare no kaban desu ka.
          </p>
        </div>
      </section>

      <section id="section5">
        <h3>2.5: Noun も</h3>
        <div className="indent">
          <p>The particle for the word "too"</p>
          <p>
            In Japanese, you can only put <em>mo</em> directly after the item.
          </p>
          <p className="tab">A は X です。 (A is X.)</p>
          <p className="tab">
            B <span className="underline-orange">も</span> X です。 (B{" "}
            <span className="underline-orange">too</span> is X.)
          </p>
        </div>
      </section>

      <section id="section6">
        <h3>2.6: Noun じゃないです</h3>
        <div className="indent">
          <p>
            To negate a statement, you replace <em>desu</em> with{" "}
            <em>ja nai desu</em>
          </p>
          <p className="tab">A は X じゃないです。 (A is not X.)</p>
          <p>
            <em>Ja nai desu</em> is colloquial (used in ordinary or familiar
            conversations).
          </p>
          <p>
            <strong>じゃ</strong> is a contraction of <em>de wa</em>, so you
            might find the more formal terms in the following:
          </p>
          <p className="tab">
            A は X <span className="underline-orange">じゃありません</span>。 (more
            formal speech style) <br />A は X
            <span className="underline-orange">でわありません</span>。 (formal for
            writing)
          </p>
        </div>
      </section>

      <section id="section7">
        <h3>2.7: ～ね / ～よ</h3>
        <div className="indent">
          <p>
            Statements often end with sentence enders with the tags <em>ne</em>{" "}
            or <em>yo</em>
          </p>
          <p>
            You use <strong>ね</strong> (ne) if you are seeking the listener's
            confirmation or agreement.
          </p>
          <p className="tab">
            A は X です<strong>ね</strong>。(A is X right?) <br />B は Y です
            <strong>ね</strong>。(B is Y isn't it?)
          </p>
          <p>
            If you want to tell the listener that you are confident and the
            listener to believe it, you can use よ (yo).
          </p>
          <p className="tab">
            A は X じゃないです<strong>よ</strong>。 (Let me assure you. A is
            not X.) <br />B は Y です<strong>よ</strong>。 (B is Y, I tell you.)
          </p>
        </div>
      </section>
    </div>
  );
}

export default Lesson2;
