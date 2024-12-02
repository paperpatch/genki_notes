import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson17() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 17: ぐちとうわさ話 (Grumble and Gossip)</h2>
      <section id="section1">
        <h3>17.1: ～そうです (I hear)</h3>
        <div className="indent">
          <p>
            そうです means "seemingly". It can also mean a "hearsay report". The
            two そうです differ in semantics and forms of the predicates they
            are attached to.
          </p>
          <p>
            You can add そうです of a report to a sentence ending in the short
            form.
          </p>
          <table className="table-list table-border-green">
            <tbody>
              <tr>
                <td>If you heard someone say:</td>
                <td></td>
                <td>You can report it as:</td>
              </tr>
              <tr>
                <td style={{ paddingRight: "5px" }}>
                  「
                  <span className="kanji">
                    日<span className="furigana">に</span>
                  </span>
                  <span className="kanji">
                    本<span className="furigana">ほん</span>
                  </span>
                  <span className="kanji">
                    語<span className="furigana">ご</span>
                  </span>
                  の
                  <span className="kanji">
                    授業<span className="furigana">じゅぎょう</span>
                  </span>
                  は
                  <span className="kanji">
                    楽<span className="furigana">たの</span>
                  </span>
                  しいです。」
                  <br />
                  <i>"Our Japanese class is fun."</i>
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td style={{ paddingLeft: "5px" }}>
                  <span className="kanji">
                    日<span className="furigana">に</span>
                  </span>
                  <span className="kanji">
                    本<span className="furigana">ほん</span>
                  </span>
                  <span className="kanji">
                    語<span className="furigana">ご</span>
                  </span>
                  の
                  <span className="kanji">
                    授業<span className="furigana">じゅぎょう</span>
                  </span>
                  は
                  <span className="kanji">
                    楽<span className="furigana">たの</span>
                  </span>
                  しい<span className="underline-green">そうです</span>。<br />
                  <i>I've heard that their Japanese class is fun.</i>
                </td>
              </tr>
              <tr>
                <td style={{ paddingRight: "5px" }}>
                  「
                  <span className="kanji">
                    先<span className="furigana">せん</span>
                  </span>
                  <span className="kanji">
                    生<span className="furigana">せい</span>
                  </span>
                  はとても
                  <span className="kanji">
                    親<span className="furigana">しん</span>
                  </span>
                  <span className="kanji">
                    切<span className="furigana">せつ</span>
                  </span>
                  です。」
                  <br />
                  <i>"Our professor is very kind."</i>
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td style={{ paddingLeft: "5px" }}>
                  <span className="kanji">
                    先<span className="furigana">せん</span>
                  </span>
                  <span className="kanji">
                    生<span className="furigana">せい</span>
                  </span>
                  はとても
                  <span className="kanji">
                    親<span className="furigana">しん</span>
                  </span>
                  <span className="kanji">
                    切<span className="furigana">せつ</span>
                  </span>
                  だ<span className="underline-green">そうです</span>。<br />
                  <i>I've heard that their professor is very kind.</i>
                </td>
              </tr>
              <tr>
                <td style={{ paddingRight: "5px" }}>
                  「
                  <span className="kanji">
                    今日<span className="furigana">きょう</span>
                  </span>
                  は
                  <span className="kanji">
                    授業<span className="furigana">じゅぎょう</span>
                  </span>
                  がありませんでした。」
                  <br />
                  <i>"We did not have a class today."</i>
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td style={{ paddingLeft: "5px" }}>
                  その
                  <span className="kanji">
                    日<span className="furigana">ひ</span>
                  </span>
                  は
                  <span className="kanji">
                    授業<span className="furigana">じゅぎょう</span>
                  </span>
                  がなかった<span className="underline-green">そうです</span>。
                  <br />
                  <i>I've heard that they didn't have a class that day.</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            When we use そうです, the reported speech retains the tense and the
            polarity of the original utterance. We turn the predicates into
            their short forms. (Thus です after a な-adjective or a noun changes
            to だ, while です after an い-adjective is left out.) Compare the
            paradigms of the two そうです.
          </p>
          <table className="table-list table-mini table-border-green">
            <thead>
              <tr>
                <th colSpan={3} className="table-header text-green">
                  ～そうです
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <i>I hear that ...</i>
                </td>
                <td>
                  <i>It looks like ...</i>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <span className="kanji">
                    見<span className="furigana">み</span>
                  </span>
                  <span className="underline-green">ら</span>れる
                </td>
                <td>
                  <span className="kanji">
                    見<span className="furigana">み</span>
                  </span>
                  れる
                </td>
              </tr>
              <tr>
                <td>irregular verbs:</td>
                <td>くる</td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  こ<span className="underline-green">ら</span>れる
                </td>
                <td>これる</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section2">
        <h3>17.2: ～って</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section3">
        <h3>17.3: ～たら</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section4">
        <h3>17.4: ～なくてもいいです</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section5">
        <h3>17.5: ～みたいです</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section6">
        <h3>17.6: ～前に / ～てから</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Lesson17;
