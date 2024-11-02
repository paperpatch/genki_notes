import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson4() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 4: 初めてのデート (The First Date)</h2>
      <section id="section1">
        <h3>4.1: X があります / います</h3>
        <div className="indent">
          <p>があります / います means "there is / are X".</p>
          <p>Use があります for non-living things.</p>
          <p>Use います for living things.</p>
          <p>It's accompanied by the particle が, instead of は.</p>
          <p className="tab">
            テレビがありません。
            <br />I don't have a TV.
          </p>
        </div>
      </section>

      <section id="section2" className="location-words">
        <h3>4.2: Describing Where Things Are</h3>
        <div className="indent">
          <p>Describe the location of an item relative to another item.</p>
          <table className="table-list">
            <thead>
              <tr>
                <th colSpan="3" className="table-header">
                  Location Words
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="9">X は Y の</td>
                <td>みぎ</td>
                <td rowSpan="9">です。</td>
                <td rowSpan="9">X は</td>
                <td>to the right of</td>
                <td rowSpan="9">Y.</td>
              </tr>
              <tr>
                <td>ひだり</td>
                <td>to the left of</td>
              </tr>
              <tr>
                <td>まえ</td>
                <td>in front of</td>
              </tr>
              <tr>
                <td>うし</td>
                <td>behind</td>
              </tr>
              <tr>
                <td>なか</td>
                <td>inside</td>
              </tr>
              <tr>
                <td>うえ</td>
                <td>on/above</td>
              </tr>
              <tr>
                <td>した</td>
                <td>under/beneath</td>
              </tr>
              <tr>
                <td>ちかく</td>
                <td>near</td>
              </tr>
              <tr>
                <td>となり</td>
                <td>next to</td>
              </tr>
              <tr>
                <td colSpan="6">
                  X は Y と Z の あいだです。X is between Y and Z
                </td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            銀行は図書館の隣です。
            <br />
            The bank is next to the library.
          </p>
        </div>
      </section>

      <section id="section3">
        <h3>4.3: Past Tense of です</h3>
        <div className="indent">
          <p>The past tense of です (it is) becomes じゃないです (it was).</p>
          <table className="table-list">
            <thead>
              <tr>
                <th colSpan="3" className="table-header">
                  です
                </th>
              </tr>
              <tr>
                <th> </th>
                <th>affirmative</th>
                <th>negative</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Present</strong>
                </td>
                <td>~ です</td>
                <td>~ じゃないです</td>
              </tr>
              <tr>
                <td>
                  <strong>Past</strong>
                </td>
                <td>~ でした</td>
                <td>~ じゃなかったです</td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            あれは日本の映画じゃなかったです。
            <br />
            That was not a Japanese movie.
          </p>
        </div>
      </section>

      <section id="section4">
        <h3>4.4: Past Tense of Verbs</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section5">
        <h3>4.5: も</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section6">
        <h3>4.6: 一時間</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section7">
        <h3>4.7: たくさん</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section8">
        <h3>4.7: と</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Lesson4;
