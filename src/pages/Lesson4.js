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
          <p>Past tense forms of verbs end with ました.</p>
          <table className="table-list">
            <thead>
              <tr>
                <th colSpan="3" className="table-header">
                  Verbs
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
                <td>~ ます</td>
                <td>~ ません</td>
              </tr>
              <tr>
                <td>
                  <strong>Past</strong>
                </td>
                <td>~ ました</td>
                <td>~ ませんでした</td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            メリーさんはく時頃家に帰りました。
            <br />
            Mary returned home at about nine.
          </p>
        </div>
      </section>

      <section id="section5">
        <h3>4.5: も</h3>
        <div className="indent">
          <p>
            You can also use も when two or more people perform the same
            activity. You can also use it when someone buys, sees, or eats two
            or more things.
          </p>
          <p className="tab">
            私は昨日京都に行きました。
            <br />I went to Kyoto yesterday.
          </p>
          <p className="tab">
            山下先生も昨日京都に行きました。
            <br />
            Professor Yamashita went to Kyoto yesterday, too.
          </p>
          <p>
            You replace は or を with も, but with other particles such as に
            and で, you keep them and follow them up with も.
          </p>
          <table className="table-list table-mini">
            <tbody>
              <tr>
                <td>は / が / を</td>
                <td>→</td>
                <td>も</td>
              </tr>
              <tr>
                <td>に / で / etc.</td>
                <td>→</td>
                <td>にも / でも / etc.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section6">
        <h3>4.6: 一時間</h3>
        <div className="indent">
          <p>The duration of an activity is expressed with a bare noun.</p>
          <p className="tab">
            メリーさんはそこで たけしさんを<strong>一時間</strong>に待ちました。
            <br />
            Mary waited for Takeshi there for an hour.
          </p>
          <p>Use ぐらい after ~時間 for an approximate measurement.</p>
          <p className="tab">
            私は昨日 日本語を<strong>三時間ぐらい</strong>勉強しました。
            <br />I studied Japanese for about three hours yesterday.
          </p>
          <p>
            To say one hour an a half, you can add 半 immediately after ~時間.
          </p>
          <p className="tab">
            昨日<strong>七時間半</strong>寝ました。
            <br />
            (I) slept for seven and a half hours last night.
          </p>
          <p>
            You can combine 半 and ぐらい, where ぐらい comes last, as in
            一時間半ぐらい.
          </p>
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
