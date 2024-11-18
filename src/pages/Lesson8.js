import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson8() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 8: バーベキュー (Barbecue)</h2>
      <section id="section1">
        <h3>8.1: Short Forms</h3>
        <div className="indent">
          <p>
            A new paradigm of conjugation, called "short forms". Short forms are
            used to quote someone else, in casual conversations (as signs of
            intimacy), and in making negative requests.
          </p>
          <table className="table-list">
            <thead>
              <tr>
                <th colSpan="4" className="table-header">
                  Present, affirmative
                </th>
              </tr>
              <tr>
                <th></th>
                <th>long forms</th>
                <th>short forms</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>• verbs:</td>
                <td>読みます (yomi)</td>
                <td>読む</td>
                <td>(= Dictionary form)</td>
              </tr>
              <tr>
                <td>• い-adjectives:</td>
                <td>かわいいです</td>
                <td>かわいい</td>
                <td>(Drop です)</td>
              </tr>
              <tr>
                <td>• な-adjectives:</td>
                <td>静かです (shizuka)</td>
                <td>静かだ</td>
                <td>(Replace です with だ.)</td>
              </tr>
              <tr>
                <td>• noun + です:</td>
                <td>学生です (gakusei)</td>
                <td>学生だ</td>
                <td>(Replace です with だ.)</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th colSpan="4" className="table-header">
                  Present, negative
                </th>
              </tr>
              <tr>
                <th></th>
                <th>long forms</th>
                <th>short forms</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>• verbs:</td>
                <td>読みません</td>
                <td>読まない</td>
                <td>→ See below for more info</td>
              </tr>
              <tr>
                <td>• い-adjectives:</td>
                <td>かわいくないです</td>
                <td>かわいくない</td>
                <td>(Drop です)</td>
              </tr>
              <tr>
                <td>(exception) いい:</td>
                <td>
                  <span className="underline-orange">よ</span>くないです
                </td>
                <td>
                  <span className="underline-orange">よ</span>くない
                </td>
                <td></td>
              </tr>
              <tr>
                <td>• な-adjectives:</td>
                <td>静かじゃないです</td>
                <td>静かじゃない</td>
                <td>(Drop です)</td>
              </tr>
              <tr>
                <td>• noun + です:</td>
                <td>学生じゃないです</td>
                <td>学生じゃない</td>
                <td>(Drop です.)</td>
              </tr>
            </tbody>
          </table>
          <p>
            Verbs in negative. <i>Ru-</i>, <i>u-</i> and irregular vers
            conjugate differently.
          </p>
          <table className="table-list">
            <thead>
              <tr>
                <th colSpan="2" className="table-header">
                  Verb short forms (present, negative)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="2">
                  <i>ru-</i>verbs:
                </td>
                <td>Drop the final る and add ない</td>
              </tr>
              <tr>
                <td>食べる → 食べない</td>
              </tr>
              <td colSpan="2">
                <div className="horizontal-line-orange"></div>
              </td>
              <tr>
                <td rowSpan="3">
                  <i>u-</i>verbs:
                </td>
                <td>
                  Drop the last <i>-u</i> and add <i>-anai</i>. Verbs that have
                  う, however, get わ instead of あ.
                </td>
              </tr>
              <tr>
                <td>書く (kaku) → 書かない</td>
              </tr>
              <tr>
                <td>会う (ao) → 会わない</td>
              </tr>
              <td colSpan="2">
                <div className="horizontal-line-orange"></div>
              </td>
              <tr>
                <td rowSpan="3">irregular verbs:</td>
                <td>The vowels change.</td>
              </tr>
              <tr>
                <td>する → しない</td>
              </tr>
              <tr>
                <td>くる → こない</td>
              </tr>
              <td colSpan="2">
                <div className="horizontal-line-orange"></div>
              </td>
              <tr>
                <td rowSpan="2">exception:</td>
                <td>The verb ある is replaced by the adjective ない.</td>
              </tr>
              <tr>
                <td>ある → ない</td>
              </tr>
            </tbody>
          </table>
          <p></p>
        </div>
      </section>

      <section id="section2">
        <h3>8.2: Short Forms in Informal Speech</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section3">
        <h3>8.3: Short Forms in Quoted Speech: ~と思います</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section4">
        <h3>8.4: Short Forms in Quoted Speech: ~と言っていました</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section5">
        <h3>8.5: ~ないでください</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section6">
        <h3>8.6: のが好きです/上手です</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section7">
        <h3>8.7: The Subject Particle が</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section8">
        <h3>8.7: 何か and 何も</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Lesson8;
