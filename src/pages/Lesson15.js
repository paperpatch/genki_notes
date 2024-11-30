import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson15() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 15: 長野旅行 (A Trip to Nagano)</h2>
      <section id="section1">
        <h3>15.1: Volitional Form</h3>
        <div className="indent">
          <p>
            The volitional form of a verb is a more casual equivalent of
            ましょう. You can use it to suggest a plan to a close friend.
          </p>
          <p className="tab">
            A:{" "}
            <span className="kanji">
              明日<span className="furigana">あした</span>
            </span>
            は
            <span className="kanji">
              授業<span className="furigana">じゅぎょう</span>
            </span>
            がないから、
            <span className="kanji">
              今<span className="furigana">こん</span>
            </span>
            <span className="kanji">
              晩<span className="furigana">ばん</span>
            </span>
            はどこかにいこう。
            <br />
            <i>
              We won't have any classes tomorrow. Let's go somewhere this
              evening.
            </i>
          </p>
          <p className="tab">
            B: いいえ、そうしよう。
            <br />
            <i>Sounds good. Let's do so.</i>
          </p>
          <p>You can make the volitional forms using the rules listed below:</p>
          <table className="table-list table-mini table-border-green">
            <thead>
              <tr>
                <th colSpan="6" className="table-header text-green">
                  Potential verbs
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6">
                  • ru-verbs: Drop the final -<i>ru</i> and add -<i>yoo</i>.
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  見る (<i>mi-ru</i>)
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td colSpan="2">
                  見よう (<i>mi-yoo</i>)
                </td>
              </tr>
              <tr>
                <td colSpan="6">
                  • u-verbs: Drop the final -<i>ru</i> and add -<i>oo</i>.
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  <span className="kanji">
                    行<span className="furigana">い</span>
                  </span>
                  く (<i>ik-u</i>)
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    行<span className="furigana">い</span>
                  </span>
                  こう (<i>ik-oo</i>)
                </td>
                <td>
                  <span className="kanji">
                    作<span className="furigana">つく</span>
                  </span>
                  る
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    作<span className="furigana">つく</span>
                  </span>
                  ろう
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  <span className="kanji">
                    話す<span className="furigana">はな</span>
                  </span>
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    話す<span className="furigana">はな</span>
                  </span>
                  そう
                </td>
                <td>
                  <span className="kanji">
                    泳<span className="furigana">およ</span>
                  </span>
                  ぐ
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    泳<span className="furigana">およ</span>
                  </span>
                  ごう
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  <span className="kanji">
                    待<span className="furigana">ま</span>
                  </span>
                  つ
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    待<span className="furigana">ま</span>
                  </span>
                  とう
                </td>
                <td>
                  <span className="kanji">
                    遊<span className="furigana">あそ</span>
                  </span>
                  ぶ
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    遊<span className="furigana">あそ</span>
                  </span>
                  ぼう
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  <span className="kanji">
                    死<span className="furigana">し</span>
                  </span>
                  ぬ
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    死<span className="furigana">し</span>
                  </span>
                  のう
                </td>
                <td>
                  <span className="kanji">
                    買<span className="furigana">か</span>
                  </span>
                  う
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    買<span className="furigana">か</span>
                  </span>
                  おう
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  む
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  もう
                </td>
              </tr>
              <tr>
                <td colSpan="6">• irregular verbs:</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>くる</td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>こよう</td>
                <td>する</td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>しよう</td>
              </tr>
            </tbody>
          </table>
          <p>
            We can think of the u-verb conjugation in terms of a hiragana chart.
          </p>
          <table className="table-boxes">
            <tbody>
              <tr>
                <td className="border-none"></td>
                <td className="background-mint">
                  <span className="text-main">書</span>
                  <span className="text-sub">か</span>
                </td>
                <td className="background-mint">
                  <span className="text-main">話</span>
                  <span className="text-sub">はな</span>
                </td>
                <td className="background-mint">
                  <span className="text-main">待</span>
                  <span className="text-sub">ま</span>
                </td>
                <td className="background-mint">
                  <span className="text-main">死</span>
                  <span className="text-sub">し</span>
                </td>
                <td className="background-mint">
                  <span className="text-main">読</span>
                  <span className="text-sub">よ</span>
                </td>
                <td className="background-mint">
                  <span className="text-main">作</span>
                  <span className="text-sub">つく</span>
                </td>
                <td className="background-mint">
                  <span className="text-main">泳</span>
                  <span className="text-sub">およ</span>
                </td>
                <td className="background-mint">
                  <span className="text-main">遊</span>
                  <span className="text-sub">あそ</span>
                </td>
                <td className="background-mint">
                  <span className="text-main">買</span>
                  <span className="text-sub">か</span>
                </td>
                <td className="border-none"></td>
              </tr>
              <tr className="background-white">
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
              <tr className="background-white">
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
              <tr className="background-white">
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
              <tr className="background-white">
                <td>potential</td>
                <td>け</td>
                <td>せ</td>
                <td>て</td>
                <td>ね</td>
                <td>め</td>
                <td>れ</td>
                <td>げ</td>
                <td>べ</td>
                <td>え</td>
                <td>~ る</td>
              </tr>
              <tr className="background-grey">
                <td>volitional</td>
                <td>こ</td>
                <td>そ</td>
                <td>と</td>
                <td>の</td>
                <td>も</td>
                <td>ろ</td>
                <td>ご</td>
                <td>ぼ</td>
                <td>お</td>
                <td>~ う</td>
              </tr>
            </tbody>
          </table>
          <p>
            You can use the volitional plus the question particle か to ask for
            an opinion in your offer or suggestion.
          </p>
          <div className="tab table-double-column">
            <p>
              A:{" "}
              <span className="kanji">
                手<span className="furigana">て</span>
              </span>
              <span className="kanji">
                伝<span className="furigana">つだ</span>
              </span>
              うおうか。
            </p>
            <p>
              <i>Shall I lend you a hand?</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              B: ううん、
              <span className="kanji">
                大丈夫<span className="furigana">だいじょうぶ</span>
              </span>
              。
            </p>
            <p>
              <i>No, I'm doing okay.</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              A:{" "}
              <span className="kanji">
                今<span className="furigana">こん</span>
              </span>
              <span className="kanji">
                度<span className="furigana">ど</span>
              </span>
              、いつ
              <span className="kanji">
                会<span className="furigana">あ</span>
              </span>
              おうか。
            </p>
            <p>
              <i>When shall we meet again?</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              B:{" "}
              <span className="kanji">
                来週<span className="furigana">らいしゅう</span>
              </span>
              の
              <span className="kanji">
                土<span className="furigana">ど</span>
              </span>
              <span className="kanji">
                曜<span className="furigana">よう</span>
              </span>
              <span className="kanji">
                日<span className="furigana">び</span>
              </span>
              はどう？
            </p>
            <p>
              <i>How about Saturday next week?</i>
            </p>
          </div>
        </div>
      </section>

      <section id="section2">
        <h3>15.2: Volitional Form + と思っています</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section3">
        <h3>15.3: ~ておく</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section4">
        <h3>15.4: Using Sentences to Qualify Nouns</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Lesson15;
