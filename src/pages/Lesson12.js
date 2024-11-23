import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson12() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 12: 病気 (Feeling ill)</h2>
      <section id="section1">
        <h3>12.1: ~んです</h3>
        <div className="indent">
          <p>
            There are two distinct ways to make a statement in Japanese. One is
            to report the facts as they are observed. The other, is the mode of{" "}
            <i>explaining</i> things.
          </p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>short form (verbs/adjectives/nouns) + んです</td>
              </tr>
              <tr>
                <td>= explanation in terms of the verbs/adjectives/nouns</td>
              </tr>
            </tbody>
          </table>
          <p>
            You can sound more apologetic if you offer an <i>explanation</i> of
            being late by saying んです. Compare:
          </p>
          <div className="tab table-double-column">
            <p>
              バスが
              <span className="kanji">
                来<span className="furigana">き</span>
              </span>
              ませんでした。
            </p>
            <p>
              <i>The bus didn't come.</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              バスが
              <span className="kanji">
                来<span className="furigana">こ</span>
              </span>
              なかった<span className="underline-orange">んです</span>。
            </p>
            <p>
              <i>
                (<span className="underline-orange">As it happens,</span>) the
                bus didn't come.
              </i>
            </p>
          </div>
          <p>
            んです connects a fact to another element under discussion, serving
            as a link between what happened and an explanation for it.
          </p>
          <div className="tab table-double-column">
            <p>あしたテストがあります。</p>
            <p>
              <i>I have an exam tomorrow.</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              あしたテストがる<span className="underline-orange">んです</span>。
            </p>
            <p>
              <i>I have an exam tomorrow. (So I can't go out tonight.)</i>
            </p>
          </div>
          <br />
          <div className="tab table-double-column">
            <p>トイレにいきたいです。</p>
            <p>
              <i>I want to go to the bathroom.</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              トイレにいきたい<span className="underline-orange">んです</span>。
            </p>
            <p>
              <i>I want to go to the bathroom. (So tell me where it is.)</i>
            </p>
          </div>
          <p>
            んです itself is invariant and does not usually appear in negative
            or past tense forms, but the predicate before it can be affirmative
            or negative, present tense or past tense.
          </p>
          <p className="tab">
            <span className="kanji">
              成績<span className="furigana">せいせき</span>
            </span>
            がよくない<span className="underline-orange">んです</span>。 (in
            reponse to the question "Why do you look so upset?")
            <br />
            <i>
              (<span className="underline-orange">As a matter of fact</span>) My
              grade is not good.
            </i>
          </p>
          <p className="tab">
            <span className="kanji">
              試験<span className="furigana">しけん</span>
            </span>
            が
            <span className="kanji">
              終<span className="furigana">お</span>
            </span>
            わった
            <span className="underline-orange">んです</span>。(explaining to a
            person who has caught you smiling)
            <br />
            <i>
              The exam is over. (
              <span className="underline-orange">That's why</span> I'm smiling.)
            </i>
          </p>
          <p>
            When it follows a noun or a な-adjective in the present tense
            affirmative, な comes in between.
          </p>
          <table className="table-list table-mini table-border-orange">
            <thead>
              <tr>
                <th></th>
                <th>report sentences</th>
                <th>explanation sentences</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>な-adjectives:</td>
                <td>
                  <span className="kanji">
                    静<span className="furigana">しず</span>
                  </span>
                  かです
                </td>
                <td>
                  <span className="kanji">
                    静<span className="furigana">しず</span>
                  </span>
                  か<span className="underline-orange">な</span>んです
                </td>
              </tr>
              <tr>
                <td>nouns:</td>
                <td>
                  <span className="kanji">
                    学<span className="furigana">がく</span>
                  </span>
                  <span className="kanji">
                    生<span className="furigana">せい</span>
                  </span>
                  です
                </td>
                <td>
                  <span className="kanji">
                    学<span className="furigana">がく</span>
                  </span>
                  <span className="kanji">
                    生<span className="furigana">せい</span>
                  </span>
                  <span className="underline-orange">な</span>んです
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Use んです in questions to invite clarifications from the person you
            are talking to. It is often used with question words, such as
            どうして (why) どうした (what has happened).
          </p>
          <p className="tab">
            A: どうして
            <span className="kanji">
              彼<span className="furigana">かれ</span>
            </span>
            と
            <span className="kanji">
              別<span className="furigana">わか</span>
            </span>
            れた<span className="underline-orange">んですか</span>。
            <br />
            <i>
              Why did you break up with your boyfriend? (You've got to tell me.)
            </i>
            B:{" "}
            <span className="kanji">
              彼<span className="furigana">かれ</span>
            </span>
            、ぜんぜんお
            <span className="kanji">
              風<span className="furigana">ふ</span>
            </span>
            <span className="kanji">
              呂<span className="furigana">る</span>
            </span>
            に
            <span className="kanji">
              入<span className="furigana">はい</span>
            </span>
            らないんです。
            <br />
            <i>
              Oh, him. He never takes a bath. (That's a good enough reason,
              isn't it?)
            </i>
          </p>
          <p className="tab">
            A: どうした<span className="underline-orange">んですか</span>。
            <br />
            <i>What happened? (You look shattered.)</i>
            B: うちの
            <span className="kanji">
              猫<span className="furigana">ねこ</span>
            </span>
            が
            <span className="kanji">
              死<span className="furigana">しん</span>
            </span>
            だんです。
            <br />
            <i>My cat died. (That should explain how I look today.)</i>
          </p>
          <p>
            You can also use んです to provide additional comment/context on
            what was just said.
          </p>
          <p className="tab">
            A: かわいいノートですね。
            <br />
            <i>That's a cute notebook.</i>
          </p>
          <p className="tab">
            B: ええ。日本んで
            <span className="kanji">
              買<span className="furigana">か</span>
            </span>
            った<span className="underline-orange">んです</span>。
            <br />
            <i>You bet. I bought it in Japan (for your information).</i>
          </p>
          <p>
            In the written language, you see のです instead of んです. It has
            the same functions but it stylistically more formal.
          </p>
        </div>
      </section>

      <section id="section2">
        <h3>12.2: ~すぎる</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section3">
        <h3>12.3: ~ほうがいいです</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section4">
        <h3>12.4: ~ので</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section5">
        <h3>12.5: ~なければいけません / ~なきゃいけません</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section6">
        <h3>12.6: でしょうか</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Lesson12;
