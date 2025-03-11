import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson6() {
  useSmoothScrollToSection();

  return (
    <div>
      <div className="lesson-header">
        <h2 className="lesson-title">Lesson 6</h2>
        <h2 className="lesson-title-orange">
          ロバートさんの
          <span className="kanji">
            一日<span className="furigana">いちにち</span>
          </span>{" "}
          (A Day in Robert's Life)
        </h2>
      </div>

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
          <table className="table-expand table-border-orange">
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
        <h3>6.2: ～てください</h3>
        <div className="indent">
          <p>
            Use a verbal <i>te</i>-form together with ください to make a polite
            request to another person "please do ... for me."
          </p>
          <p className="tab">
            <span className="kanji">
              教科書<span className="furigana">きょうかしょ</span>
            </span>
            を
            <span className="kanji">
              読<span className="furigana">よ</span>
            </span>
            んでください。
            <br />
            <i>Please read the textbook.</i>
          </p>
        </div>
      </section>

      <section id="section3">
        <h3>6.3: Describing Two Activities</h3>
        <div className="indent">
          <p>
            You can use a <i>te</i>-form to combine two or more verbs, as in "I
            did this and then I did that". Note that two verbs cannot be joined
            by と, which only connects nouns.
          </p>
          <p className="tab">
            <span className="kanji">
              図書館<span className="furigana">としょかん</span>
            </span>
            に
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            って，
            <span className="kanji">
              本<span className="furigana">ほん</span>
            </span>
            を
            <span className="kanji">
              借<span className="furigana">か</span>
            </span>
            ります。
            <br />
            <i>I will go to the library and check out the books.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              今日<span className="furigana">きょう</span>
            </span>
            は，
            <span className="kanji">
              六<span className="furigana">ろく</span>
            </span>
            <span className="kanji">
              時<span className="furigana">じ</span>
            </span>
            に
            <span className="kanji">
              起<span className="furigana">お</span>
            </span>
            きて，
            <span className="kanji">
              勉強<span className="furigana">べんきょう</span>
            </span>
            しました。
            <br />
            <i>Today I got up at six and studied.</i>
          </p>
          <p>
            The <i>te</i>-form of a verb can also be used to connect a verb more
            "loosely" with the rest of a sentence. I can describe the manner in
            which the action described by the second verb is performed. It also
            can describe the situation for which an apology is made.
          </p>
          <p className="tab">
            バスに
            <span className="kanji">
              乗<span className="furigana">の</span>
            </span>
            って，
            <span className="kanji">
              会社<span className="furigana">かいしゃ</span>
            </span>
            に
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            きます。
            <br />
            <i>I go to work by bus. (I take a bus to work.)</i>
          </p>
          <p className="tab">
            <span className="kanji">
              教科書<span className="furigana">きょうかしょ</span>
            </span>
            を
            <span className="kanji">
              忘<span className="furigana">わす</span>
            </span>
            れて，すみません。
            <br />
            <i>
              I am sorry for not bringing in the textbook. (I left the book at
              home, and I am sorry.)
            </i>
          </p>
        </div>
      </section>

      <section id="section4">
        <h3>6.4: ～てもいいです</h3>
        <div className="indent">
          <p>
            A verbal <i>te</i>-form plus もいいです means "you may do...", which
            describes an activity that is permitted. To ask for permission, you
            can turn it into a questino sentence, ～てもいいですか
          </p>
          <p>
            The polite and graceful way to grant permission is to say どうぞ.
          </p>
          <p className="tab">
            <span className="kanji">
              教科書<span className="furigana">きょうかしょ</span>
            </span>
            を
            <span className="kanji">
              見<span className="furigana">み</span>
            </span>
            てもいいですよ。
            <br />
            <i>You may use the textbook.</i>
          </p>
          <p className="tab">
            A: トイレに行ってもいいですか。
            <br />
            <i>May I go to the bathroom?</i>
          </p>
          <p className="tab">
            B: はい，いいですよ。/ どうぞ。
            <br />
            <i>You may. / Please.</i>
          </p>
        </div>
      </section>

      <section id="section5">
        <h3>6.5: ～てはいけません</h3>
        <div className="indent">
          <p>
            A verbal <i>te</i>-form plus はいけません means "you must not do
            ...", a strong prohibition statement, as in rules and regulations.
          </p>
          <p className="tab">
            ここで
            <span className="kanji">
              写真<span className="furigana">しゃしん</span>
            </span>
            を
            <span className="kanji">
              撮<span className="furigana">と</span>
            </span>
            ってはいけません。
            <br />
            <i>You must not take pictures here.</i>
          </p>
          <p>
            If somebody asks for permission but you want to deny it, you could
            use てはいけません but the setence will come off as harsh unless you
            are in a place of authority. There are softer ways of saying "please
            don't" in lesson 8.
          </p>
        </div>
      </section>

      <section id="section6">
        <h3>6.6: ～から</h3>
        <div className="indent">
          <p>
            A sentence that ends with から (because) explains the reason or
            cause of a situation.
          </p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>
                  <span className="text-orange">(situation)</span>。{" "}
                  <span className="text-orange">(explanation)</span> から。
                </td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            <span className="kanji">
              私<span className="furigana">わたし</span>
            </span>
            は
            <span className="kanji">
              今晩<span className="furigana">こんばん</span>
            </span>
            <span className="kanji">
              勉強<span className="furigana">べんきょう</span>
            </span>
            します。
            <span className="kanji">
              明日<span className="furigana">あした</span>
            </span>
            テストがありますから。
            <br />
            <i>
              I will study this evening. (Because) we will have an exam
              tomorrow.
            </i>
          </p>
        </div>
      </section>

      <section id="section7">
        <h3>6.7: ～ましょうか (Offering Assistance)</h3>
        <div className="indent">
          <p>
            In Lesson 5, ましょうか means "Let's ..." ～ましょうか is also used
            in the sense of "let me do ...", as in offering assistance.
          </p>
          <p className="tab">
            <span className="kanji">
              荷<span className="furigana">に</span>
            </span>
            <span className="kanji">
              物<span className="furigana">もつ</span>
            </span>
            を
            <span className="kanji">
              持<span className="furigana">も</span>
            </span>
            ちましょうか。
            <br />
            <i>Shall I carry your bag?</i>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Lesson6;
