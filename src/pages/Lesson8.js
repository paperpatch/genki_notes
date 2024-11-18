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
          <p>
            Think of the <i>u</i>-verb conjugation as moving up and down in the{" "}
            <i>hirgana</i> chart.
          </p>
          <table class="table-boxes">
            <tbody>
              <tr>
                <td className="border-none"></td>
                <td className="background-pink">
                  <span class="text-main">書</span>
                  <span class="text-sub">か</span>
                </td>
                <td className="background-pink">
                  <span class="text-main">話</span>
                  <span class="text-sub">はな</span>
                </td>
                <td className="background-pink">
                  <span class="text-main">待</span>
                  <span class="text-sub">ま</span>
                </td>
                <td className="background-pink">
                  <span class="text-main">死</span>
                  <span class="text-sub">し</span>
                </td>
                <td className="background-pink">
                  <span class="text-main">読</span>
                  <span class="text-sub">よ</span>
                </td>
                <td className="background-pink">
                  <span class="text-main">作</span>
                  <span class="text-sub">つく</span>
                </td>
                <td className="background-pink">
                  <span class="text-main">泳</span>
                  <span class="text-sub">およ</span>
                </td>
                <td className="background-pink">
                  <span class="text-main">遊</span>
                  <span class="text-sub">あそ</span>
                </td>
                <td className="background-pink">
                  <span class="text-main">買</span>
                  <span class="text-sub">か</span>
                </td>
                <td className="border-none"></td>
              </tr>
              <tr class="background-white">
                <td>negative</td>
                <td>か</td>
                <td>さ</td>
                <td>た</td>
                <td>な</td>
                <td>ま</td>
                <td>ら</td>
                <td>が</td>
                <td>ば</td>
                <td>わ</td>
                <td>~ない</td>
              </tr>
              <tr class="background-grey">
                <td>stem</td>
                <td>き</td>
                <td>し</td>
                <td>ち</td>
                <td>に</td>
                <td>み</td>
                <td>り</td>
                <td>ぎ</td>
                <td>び</td>
                <td>い</td>
                <td>~ます</td>
              </tr>
              <tr class="white-row">
                <td>affirmative</td>
                <td>く</td>
                <td>す</td>
                <td>つ</td>
                <td>ぬ</td>
                <td>む</td>
                <td>る</td>
                <td>ぐ</td>
                <td>ぶ</td>
                <td>う</td>
                <td>= Dictionary form</td>
              </tr>
            </tbody>
          </table>
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
