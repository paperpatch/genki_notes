import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson21() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 21: どろぼう (Burglar)</h2>
      <section id="section1">
        <h3>21.1: Passive Sentences</h3>
        <div className="indent">
          <p>
            When you are inconvenienced by something somebody else has done, you
            can express your dissatisfaction using a passive sentence.
          </p>
          <table className="table-list">
            <tbody>
              <tr>
                <td>
                  (a)　
                  <span className="kanji">
                    友達<span className="furigana">ともだち</span>
                  </span>
                  が
                  <span className="kanji">
                    車<span className="furigana">くるま</span>
                  </span>
                  を
                  <span className="kanji">
                    使<span className="furigana">つか</span>
                  </span>
                  いました。
                </td>
                <td>
                  <i>A friend of mine used my car.</i>
                </td>
              </tr>
              <tr>
                <td>
                  (b)　
                  <span className="kanji">
                    私<span className="furigana">わたし</span>
                  </span>
                  は
                  <span className="kanji">
                    友達<span className="furigana">ともだち</span>
                  </span>
                  に
                  <span className="kanji">
                    車<span className="furigana">くるま</span>
                  </span>
                  を
                  <span className="kanji">
                    使<span className="furigana">つか</span>
                  </span>
                  われました。
                </td>
                <td>
                  <i>
                    I had my car used by a friend of mine (and I am mad/sad
                    about it).
                  </i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>The basic makeup of a passive sentence is like the following:</p>
          <table className="table-list table-mini table-border-green">
            <thead>
              <tr>
                <th className="table-header text-green">Passive sentence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ paddingBottom: "5px", paddingLeft: "3em" }}>
                  <span className="kanji">
                    私<span className="furigana">わたし</span>
                  </span>
                  は
                </td>
                <td style={{ paddingBottom: "5px" }}>
                  <span className="kanji">
                    友達<span className="furigana">ともだち</span>
                  </span>
                  に
                </td>
                <td style={{ paddingBottom: "5px" }}>
                  <span className="kanji">
                    車<span className="furigana">くるま</span>
                  </span>
                  を
                  <span className="kanji">
                    使<span className="furigana">つか</span>
                  </span>
                  われました。
                </td>
              </tr>
              <tr>
                <td style={{ paddingTop: 0, paddingLeft: "3em" }}>
                  <span className="text-green">(victim)</span> は
                </td>
                <td style={{ paddingTop: 0 }}>
                  <span className="text-green">(villain)</span> に
                </td>
                <td style={{ paddingTop: 0 }}>
                  <span className="text-green">(evil act)</span>
                </td>
              </tr>
              <tr>
                <td colSpan={3} style={{ paddingLeft: "3em" }}>
                  <i>I had my car used by a friend.</i>
                </td>
              </tr>
              <tr>
                <td colSpan={3} style={{ paddingBottom: 0 }}>
                  <ul style={{ padding: 0, margin: 0 }}>
                    <li>
                      • The <span className="text-green">villain</span> is
                      affected by an event. Marked with the particle は or が.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td colSpan={3} style={{ paddingBottom: 0 }}>
                  <ul style={{ padding: 0, margin: 0 }}>
                    <li>
                      • The <span className="text-green">villain</span> performs
                      an action which causes the suffering. Marked with に.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <ul style={{ padding: 0, margin: 0 }}>
                    <li>
                      • The <span className="text-green">evil act</span> is
                      described with the passive form of a verb.
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <p>Passive form of a verb:</p>
          <table className="table-list table-mini table-border-green">
            <thead>
              <tr>
                <th colSpan="6" className="table-header text-green">
                  Passive form
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6">
                  • ru-verbs: Drop the final -<i>ru</i> and add -<i>rare-ru</i>.
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  <span className="kanji">
                    食<span className="furigana">た</span>
                  </span>
                  べる
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    食<span className="furigana">た</span>
                  </span>
                  べられる
                </td>
              </tr>
              <tr>
                <td colSpan="6">
                  • u-verbs: Drop the final -<i>u</i> and add -<i>are-ru</i>.
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  <span className="kanji">
                    行<span className="furigana">い</span>
                  </span>
                  く
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    行<span className="furigana">い</span>
                  </span>
                  かれる
                </td>
                <td>
                  <span className="kanji">
                    死<span className="furigana">し</span>
                  </span>
                  ぬ
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    死<span className="furigana">し</span>
                  </span>
                  なれる
                </td>
                <td>
                  <span className="kanji">
                    泳<span className="furigana">およ</span>
                  </span>
                  ぐ
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    泳<span className="furigana">およ</span>
                  </span>
                  がれる
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  <span className="kanji">
                    話<span className="furigana">はな</span>
                  </span>
                  す
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    話す<span className="furigana">はな</span>
                  </span>
                  される
                </td>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  む
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  まれる
                </td>
                <td>
                  <span className="kanji">
                    遊<span className="furigana">あそ</span>
                  </span>
                  ぶ
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    遊<span className="furigana">あそ</span>
                  </span>
                  ばれる
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  <span className="kanji">
                    待<span className="furigana">ま</span>
                  </span>
                  つ
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    待<span className="furigana">ま</span>
                  </span>
                  たれる
                </td>
                <td>
                  <span className="kanji">
                    取<span className="furigana">と</span>
                  </span>
                  る
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    取<span className="furigana">と</span>
                  </span>
                  られる
                </td>
                <td>
                  <span className="kanji">
                    買<span className="furigana">か</span>
                  </span>
                  う
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    買<span className="furigana">か</span>
                  </span>
                  <span className="underline-green">わ</span>れる
                </td>
              </tr>
              <tr>
                <td colSpan="6">• irregular verbs:</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>くる</td>
                <td className="arrow-right">→</td>
                <td>こられる</td>
                <td>する</td>
                <td className="arrow-right">→</td>
                <td>される</td>
              </tr>
            </tbody>
          </table>
          <p>
            The passive forms of <i>ru</i>-verbs and the irregular くる are the
            same as the potential verbs (reference Lesson 13), but the passive
            form of an <i>u</i>-verb looks different from the potential verb.
            For example, the verb{" "}
            <span className="kanji">
              読<span className="furigana">よ</span>
            </span>
            む, the passive is
            <span className="kanji">
              読<span className="furigana">よ</span>
            </span>
            まれる, while the potential is{" "}
            <span className="kanji">
              読<span className="furigana">よ</span>
            </span>
            める.
          </p>
          <p>
            Passive forms of verbs themselves conjugate as regular <i>ru</i>
            -verbs.
          </p>
          <table className="table-list table-mini table-border-green">
            <thead>
              <tr>
                <th colSpan="5" className="table-header text-green">
                  Conjugation of passive form
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="text-green">e.g.</span>{" "}
                  <strong>
                    <span className="kanji">
                      読<span className="furigana">よ</span>
                    </span>
                    まめる
                  </strong>
                </td>
                <td colSpan={2} style={{ textAlign: "center" }}>
                  short forms
                </td>
                <td colSpan={2} style={{ textAlign: "center" }}>
                  long forms
                </td>
              </tr>
              <tr>
                <td></td>
                <td>affirmative</td>
                <td>negative</td>
                <td>affirmative</td>
                <td>negative</td>
              </tr>
              <tr>
                <td>[Present]</td>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  まれる
                </td>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  まれない
                </td>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  まれます
                </td>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  まれません
                </td>
              </tr>
              <tr>
                <td>[Past]</td>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  まれた
                </td>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  なかった
                </td>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  まれました
                </td>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  まれませんでした
                </td>
              </tr>
              <tr>
                <td>[Te-form]</td>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  まれて
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            In most passive sentences, the "victim" has been unfavorably
            affected by the "villain's" act. They may be unfavorably affected in
            various ways, such as being angry, embarrassed, sad, or hurt.
          </p>
          <p className="tab">
            <span className="kanji">
              私<span className="furigana">わたし</span>
            </span>
            は　となりの
            <span className="kanji">
              人<span className="furigana">ひと</span>
            </span>
            に　たばこを
            <span className="kanji">
              吸<span className="furigana">す</span>
            </span>
            われました。
            <br />
            <i>I was annoyed with the person sitting next to me for smoking.</i>
          </p>
          <p className="tab">
            たけしさんは　メアリーさんに　よく
            <span className="kanji">
              笑<span className="furigana">わら</span>
            </span>
            われます。
            <br />
            <i>Takeshi is often laughed at by Mary.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              山下<span className="furigana">やました</span>
            </span>
            <span className="kanji">
              先生<span className="furigana">せんせい</span>
            </span>
            は　だれかに　パスワードを
            <span className="kanji">
              盗<span className="furigana">ぬす</span>
            </span>
            まれたそうです。
            <br />
            <i>
              I hear that Professor Yamashita had his password stolen by
              someone.
            </i>
          </p>
          <p>
            Compare the inadvertent/unfavorable focus of a passive sentence with
            the intended/favorable focus of a てもらう sentence (ref. Lesson
            16).
          </p>
          <p className="tab">
            <span className="kanji">
              子供<span className="furigana">こども</span>
            </span>
            の
            <span className="kanji">
              時<span className="furigana">とき</span>
            </span>
            　
            <span className="kanji">
              姉<span className="furigana">あね</span>
            </span>
            に　
            <span className="kanji">
              日記<span className="furigana">にっき</span>
            </span>
            を　
            <span className="kanji">
              読<span className="furigana">よ</span>
            </span>
            まれました。
            <br />
            <i>
              I was annoyed with my big sister for reading my diary when I was a
              kid.
            </i>
          </p>
          <p className="tab">
            <span className="kanji">
              子供<span className="furigana">こども</span>
            </span>
            の
            <span className="kanji">
              時<span className="furigana">とき</span>
            </span>
            　
            <span className="kanji">
              寝<span className="furigana">ね</span>
            </span>
            る
            <span className="kanji">
              前<span className="furigana">まえ</span>
            </span>
            に　
            <span className="kanji">
              父<span className="furigana">ちち</span>
            </span>
            に　
            <span className="kanji">
              本<span className="furigana">ほん</span>
            </span>
            を　
            <span className="kanji">
              読<span className="furigana">よ</span>
            </span>
            んでもらいました。
            <br />
            <i>
              I had my dad read a book for me before I went to sleep when I was
              a kid.
            </i>
          </p>
          <p>
            We have some passive sentences that are not perceptibly unfavorable.
          </p>
          <p className="tab">
            私は　その
            <span className="kanji">
              人<span className="furigana">ひと</span>
            </span>
            に　デートに
            <span className="kanji">
              誘<span className="furigana">さそ</span>
            </span>
            われました。
            <br />
            <i>I was asked out by that person for a date.</i>
          </p>
          <p className="tab">
            私は　
            <span className="kanji">
              兄<span className="furigana">あに</span>
            </span>
            に　
            <span className="kanji">
              友達<span className="furigana">ともだち</span>
            </span>
            に
            <span className="kanji">
              紹介<span className="furigana">しょうかい</span>
            </span>
            されました。
            <br />
            <i>I was introduced by my big brother to a friend of his.</i>
          </p>
          <p className="tab">
            その
            <span className="kanji">
              人<span className="furigana">ひと</span>
            </span>
            は　みんなに　
            <span className="kanji">
              尊敬<span className="furigana">そんけい</span>
            </span>
            されています。
            <br />
            <i>That person is looked up to by most people.</i>
          </p>
          <p>
            When someone says these phrases, they probably do not mean that they
            were inconvenienced by how things have turned out. There are
            relatively few verbs that come out neutral in their meaning when
            they are turned into the passive form.
          </p>
        </div>
      </section>

      <section id="section2">
        <h3>21.2: ～てある</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section3">
        <h3>21.3: ～間に</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section4">
        <h3>21.4: Adjective + する</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section5">
        <h3>21.5: ～てほしい</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Lesson21;
