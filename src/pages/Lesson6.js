import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson6() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 6: ロバートさんの一日 A Day in Robert's Life</h2>
      <section id="section1">
        <h3>6.1: Te-form</h3>
        <div className="indent">
          <p>Te-forms are very important. Among its uses:</p>
          <ul className="bullet">
            <li>making requests ("..., please.")</li>
            <li>
              forming a sentence that describes two events or activities. ("I
              did this and did that.")
            </li>
            <li>giving and asking permission ("You may.../May I...?")</li>
            <li>stating that something is foridden ("You must not...")</li>
          </ul>
          <p>
            Te-forms conjugation paradigm is complex. There are separate rules
            for ru-, u-, and irregular verbs. Furthermore, the rule for u-verbs
            is divided into five sub-rules.
          </p>
          <table className="table-expand">
            <tbody>
              <tr>
                <th rowSpan="1" className="table-subheader">
                  Ru-verbs
                </th>
                <td>る</td>
                <td>→</td>
                <td>て</td>
                <td></td>
                <td>食べる</td>
                <td>→</td>
                <td>食べて</td>
              </tr>
              <tr>
                <td colSpan="9" className="horizontal-line-wrapper">
                  <div className="horizontal-line-orange"></div>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th rowSpan="14" className="table-subheader">
                  U-verbs with final
                </th>
                <td>う</td>
                <td rowSpan="3">→</td>
                <td rowSpan="3">って</td>
                <td rowSpan="3"></td>
                <td>会う</td>
                <td rowSpan="3">→</td>
                <td>会って</td>
              </tr>
              <tr>
                <td>つ</td>
                <td>待つ</td>
                <td>待って</td>
              </tr>
              <tr>
                <td>る</td>
                <td>とる</td>
                <td>とって</td>
              </tr>
              <tr>
                <td colSpan="9" className="horizontal-line-wrapper">
                  <div className="horizontal-line-orange"></div>
                </td>
              </tr>
              <tr>
                <td>む</td>
                <td rowSpan="3">→</td>
                <td rowSpan="3">んで</td>
                <td rowSpan="3"></td>
                <td>読む</td>
                <td rowSpan="3">→</td>
                <td>読んで</td>
              </tr>
              <tr>
                <td>ぶ</td>
                <td>遊ぶ</td>
                <td>遊んで</td>
              </tr>
              <tr>
                <td>ぬ</td>
                <td>死ぬ</td>
                <td>死んで</td>
              </tr>
              <tr>
                <td colSpan="9" className="horizontal-line-wrapper">
                  <div className="horizontal-line-orange"></div>
                </td>
              </tr>
              <tr>
                <td>く</td>
                <td>→</td>
                <td>いて</td>
                <td rowSpan="2"></td>
                <td>書く</td>
                <td rowSpan="2">→</td>
                <td>書いて</td>
              </tr>
              <tr>
                <td colSpan="3">(Exception)</td>
                <td>行く</td>
                <td>行って</td>
              </tr>
              <tr>
                <td colSpan="9" className="horizontal-line-wrapper">
                  <div className="horizontal-line-orange"></div>
                </td>
              </tr>
              <tr>
                <td>ぐ</td>
                <td>→</td>
                <td>いで</td>
                <td></td>
                <td>泳ぐ</td>
                <td>→</td>
                <td>泳いで</td>
              </tr>
              <tr>
                <td colSpan="9" className="horizontal-line-wrapper">
                  <div className="horizontal-line-orange"></div>
                </td>
              </tr>
              <tr>
                <td>す</td>
                <td>→</td>
                <td>して</td>
                <td></td>
                <td>話す</td>
                <td>→</td>
                <td>話して</td>
              </tr>
            </tbody>
            <tr>
              <td colSpan="9" className="horizontal-line-wrapper">
                <div className="horizontal-line-orange"></div>
              </td>
            </tr>
            <tbody>
              <tr>
                <th rowSpan="2" className="table-subheader">
                  Irregular verbs
                </th>
                <td>する</td>
                <td rowSpan="2"></td>
                <td rowSpan="2"></td>
                <td rowSpan="2"></td>
                <td>する</td>
                <td rowSpan="2">→</td>
                <td>して</td>
              </tr>
              <tr>
                <td>くる</td>
                <td>くる</td>
                <td>きて</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section2">
        <h3>6.2: ~てください</h3>
        <div className="indent">
          <p>
            Use a verbal <i>te</i>-form together with ください to amke a polite
            request to another person "please do ... for me."
          </p>
          <p className="tab">
            教科書を読んでください。
            <br />
            Please read the textbook.
          </p>
        </div>
      </section>

      <section id="section3">
        <h3>6.3: Describing Two Activities</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section4">
        <h3>6.4: ~てもいいです</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section5">
        <h3>6.5: ~てはいけません</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section6">
        <h3>6.6: ~から</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section7">
        <h3>6.7: ~ましょうか (Offering Assistance)</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Lesson6;
