import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson4() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>
        Lesson 4:{" "}
        <span className="kanji">
          初<span className="furigana">はじ</span>
        </span>
        めてのデート (The First Date)
      </h2>
      <section id="section1">
        <h3>4.1: X があります / います</h3>
        <div className="indent">
          <p>があります / います means "there is / are X".</p>
          <p>Use があります for non-living things.</p>
          <p>Use います for living things.</p>
          <p>It's accompanied by the particle が, instead of は.</p>
          <p className="tab">
            テレビがありません。
            <br />
            <i>I don't have a TV.</i>
          </p>
        </div>
      </section>

      <section id="section2" className="location-words">
        <h3>4.2: Describing Where Things Are</h3>
        <div className="indent">
          <p>Describe the location of an item relative to another item.</p>
          <table className="table-list table-border-orange">
            <thead>
              <tr>
                <th colSpan="3" className="table-header text-orange">
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
            <span className="kanji">
              銀行<span className="furigana">ぎんこう</span>
            </span>
            は
            <span className="kanji">
              図書館<span className="furigana">としょかん</span>
            </span>
            の<span className="underline-orange">となり</span>です。
            <br />
            <i>The bank is next to the library.</i>
          </p>
        </div>
      </section>

      <section id="section3">
        <h3>4.3: Past Tense of です</h3>
        <div className="indent">
          <p>The past tense of です (it is) becomes じゃないです (it was).</p>
          <table className="table-list table-border-orange">
            <thead>
              <tr>
                <th colSpan="3" className="table-header text-orange">
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
                <td>～ です</td>
                <td>～ じゃないです</td>
              </tr>
              <tr>
                <td>
                  <strong>Past</strong>
                </td>
                <td>～ でした</td>
                <td>～ じゃなかったです</td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            あれは
            <span className="kanji">
              日<span className="furigana">に</span>
            </span>
            <span className="kanji">
              本<span className="furigana">ほん</span>
            </span>
            の
            <span className="kanji">
              映画<span className="furigana">えいが</span>
            </span>
            じゃなかったです。
            <br />
            <i>That was not a Japanese movie.</i>
          </p>
        </div>
      </section>

      <section id="section4">
        <h3>4.4: Past Tense of Verbs</h3>
        <div className="indent">
          <p>Past tense forms of verbs end with ました.</p>
          <table className="table-list table-border-orange">
            <thead>
              <tr>
                <th colSpan="3" className="table-header text-orange">
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
                <td>～ ます</td>
                <td>～ ません</td>
              </tr>
              <tr>
                <td>
                  <strong>Past</strong>
                </td>
                <td>～ ました</td>
                <td>～ ませんでした</td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            メリーさんはく
            <span className="kanji">
              時<span className="furigana">じ</span>
            </span>
            <span className="kanji">
              頃<span className="furigana">ごろ</span>
            </span>
            <span className="kanji">
              家<span className="furigana">うち</span>
            </span>
            に
            <span className="kanji">
              帰<span className="furigana">かえ</span>
            </span>
            りました。
            <br />
            <i>Mary returned home at about nine.</i>
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
            私は
            <span className="kanji">
              昨日<span className="furigana">きのう</span>
            </span>
            <span className="kanji">
              京都<span className="furigana">きょうと</span>
            </span>
            に
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            きました。
            <br />
            <i>I went to Kyoto yesterday.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              山下<span className="furigana">やました</span>
            </span>
            <span className="kanji">
              先生<span className="furigana">せんせい</span>
            </span>
            <span className="underline-orange">も</span>
            <span className="kanji">
              昨日<span className="furigana">きのう</span>
            </span>
            <span className="kanji">
              京都<span className="furigana">きょうと</span>
            </span>
            に
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            きました。
            <br />
            <i>Professor Yamashita went to Kyoto yesterday, too.</i>
          </p>
          <p>
            You replace は or を with も, but with other particles such as に
            and で, you keep them and follow them up with も.
          </p>
          <table className="table-list table-mini table-border-orange">
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
        <h3>
          4.6:{" "}
          <span className="kanji">
            一<span className="furigana">いち</span>
          </span>
          <span className="kanji">
            時<span className="furigana">じ</span>
          </span>
          <span className="kanji">
            間<span className="furigana">かん</span>
          </span>
        </h3>
        <div className="indent">
          <p>The duration of an activity is expressed with a bare noun.</p>
          <p className="tab">
            メリーさんはそこで たけしさんを
            <span className="underline-orange">
              <span className="kanji">
                一<span className="furigana">いち</span>
              </span>
              <span className="kanji">
                時<span className="furigana">じ</span>
              </span>
              <span className="kanji">
                間<span className="furigana">かん</span>
              </span>
            </span>
            に
            <span className="kanji">
              待<span className="furigana">ま</span>
            </span>
            ちました。
            <br />
            <i>Mary waited for Takeshi there for an hour.</i>
          </p>
          <p>
            Use ぐらい after ～
            <span className="kanji">
              時<span className="furigana">じ</span>
            </span>
            <span className="kanji">
              間<span className="furigana">かん</span>
            </span>{" "}
            for an approximate measurement.
          </p>
          <p className="tab">
            <span className="kanji">
              私<span className="furigana">わたし</span>
            </span>
            は
            <span className="kanji">
              昨日<span className="furigana">きのう</span>
            </span>
            <span className="kanji">
              日<span className="furigana">に</span>
            </span>
            <span className="kanji">
              本<span className="furigana">ほん</span>
            </span>
            <span className="kanji">
              語<span className="furigana">ご</span>
            </span>
            を
            <span className="underline-orange">
              <span className="kanji">
                三<span className="furigana">さん</span>
              </span>
              <span className="kanji">
                時<span className="furigana">じ</span>
              </span>
              <span className="kanji">
                間<span className="furigana">かん</span>
              </span>
              ぐらい
            </span>
            <span className="kanji">
              勉強<span className="furigana">べんきょう</span>
            </span>
            しました。
            <br />
            <i>I studied Japanese for about three hours yesterday.</i>
          </p>
          <p>
            To say one hour an a half, you can add{" "}
            <span className="kanji">
              半<span className="furigana">はん</span>
            </span>{" "}
            immediately after ～
            <span className="kanji">
              時<span className="furigana">じ</span>
            </span>
            <span className="kanji">
              間<span className="furigana">かん</span>
            </span>
            .
          </p>
          <p className="tab">
            <span className="kanji">
              昨日<span className="furigana">きのう</span>
            </span>
            <span className="underline-orange">
              <span className="kanji">
                七<span className="furigana">しち</span>
              </span>
              <span className="kanji">
                時<span className="furigana">じ</span>
              </span>
              <span className="kanji">
                間<span className="furigana">かん</span>
              </span>
              <span className="kanji">
                半<span className="furigana">はん</span>
              </span>
            </span>
            <span className="kanji">
              寝<span className="furigana">ね</span>
            </span>
            ました。
            <br />
            <i>(I) slept for seven and a half hours last night.</i>
          </p>
          <p>
            You can combine{" "}
            <span className="kanji">
              半<span className="furigana">はん</span>
            </span>{" "}
            and ぐらい, where ぐらい comes last, as in{" "}
            <span className="kanji">
              一<span className="furigana">いち</span>
            </span>
            <span className="kanji">
              時<span className="furigana">じ</span>
            </span>
            <span className="kanji">
              間<span className="furigana">かん</span>
            </span>
            <span className="kanji">
              半<span className="furigana">はん</span>
            </span>
            ぐらい.
          </p>
        </div>
      </section>

      <section id="section7">
        <h3>4.7: たくさん</h3>
        <div className="indent">
          <p>
            If you want to add a quantity word to the direct object of a
            sentence, you can either place it before the noun, or after the
            particle を.
          </p>
          <table className="table-short table-mini">
            <tbody>
              <tr>
                <td rowSpan="2">
                  <span className="kanji">
                    京都<span className="furigana">きょうと</span>
                  </span>
                  で
                </td>
                <td>
                  <span className="kanji">
                    写真<span className="furigana">しゃしん</span>
                  </span>
                  を<span className="underline-orange">たくさん</span>
                </td>
                <td rowSpan="2">
                  <span className="kanji">
                    撮<span className="furigana">と</span>
                  </span>
                  りました。
                </td>
              </tr>
              <tr>
                <td>
                  <span className="underline-orange">たくさん</span>
                  <span className="kanji">
                    写真<span className="furigana">しゃしん</span>
                  </span>
                  を
                </td>
              </tr>
            </tbody>
          </table>
          <p>You can also use both these orders in ある and いる sentences.</p>
        </div>
      </section>

      <section id="section8">
        <h3>4.8: と</h3>
        <div className="indent">
          <p>
            The particle has two functions. One is to connect two nouns A and B.
          </p>
          <p className="tab">
            <span className="kanji">
              日<span className="furigana">に</span>
            </span>
            <span className="kanji">
              本<span className="furigana">ほん</span>
            </span>
            <span className="kanji">
              語<span className="furigana">ご</span>
            </span>
            <span className="underline-orange">と</span>
            <span className="kanji">
              英語<span className="furigana">えいご</span>
            </span>
            を
            <span className="kanji">
              話<span className="furigana">はな</span>
            </span>
            します。
            <br />
            <i>
              I speak Japanese <span className="underline-orange">and</span>{" "}
              English.
            </i>
          </p>
          <p>
            The other meaning of と is "together with". It describes <i>with</i>{" "}
            whom you do something.
          </p>
          <p className="tab">
            メリーさんはソラさん
            <span className="underline-orange">と</span>
            <span className="kanji">
              韓国<span className="furigana">かんこく</span>
            </span>
            に
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            きます。
            <br />
            <i>
              Mary will go to Korea{" "}
              <span className="underline-orange">with</span> Sora.
            </i>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Lesson4;
