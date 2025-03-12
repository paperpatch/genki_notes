import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson21() {
  useSmoothScrollToSection();

  return (
    <div>
      <div className="lesson-header">
        <h2 className="lesson-title background-green">Lesson 21</h2>
        <h2 className="lesson-title-green">どろぼう (Burglar)</h2>
      </div>

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
                    話<span className="furigana">はな</span>
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
          <p>
            You can use the <i>te</i>-form of a verb + the helping verb ある to
            characterize a situation that{" "}
            <i>has been brought about on purpose</i> by somebody who remains
            unnamed in the sentence.
          </p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td>～が</td>
                <td>verb + てある</td>
                <td>
                  <i>... has been done on purpose</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            <span className="kanji">
              寒<span className="furigana">さむ</span>
            </span>
            いので、ヒーターがつけてあります。
            <br />
            <i>The heater is on, because it is cold.</i>
            <br />( ={" "}
            <i>The heater was turned on and has been kept that way.</i>)
          </p>
          <p className="tab">
            テーブルの
            <span className="kanji">
              上<span className="furigana">うえ</span>
            </span>
            に
            <span className="kanji">
              花<span className="furigana">はな</span>
            </span>
            が
            <span className="kanji">
              置<span className="furigana">お</span>
            </span>
            いてあります。
            <br />
            <i>Flowers are on the table.</i>
            <br />( ={" "}
            <i>
              Flowers were put on the table and they have remained there ever
              since.
            </i>
            )
          </p>
          <p>
            You can say ～てあります if somebody, possibly yourself, performed
            an action on purpose earlier, which can be described in terms of
            ～ておきました ("do something by way of prepraration" ref. Lesson
            15), and if the result of that action can still be observed at this
            moment. Note that ～てあります describes a current state, hence the
            present tense.
          </p>
          <table className="table-list table-mini">
            <tbody>
              <tr>
                <td>
                  レストランの
                  <span className="kanji">
                    予<span className="furigana">よ</span>
                  </span>
                  <span className="kanji">
                    約<span className="furigana">やく</span>
                  </span>
                  がしてあります。
                  <br />
                  <i>A restaurant reservation has been made.</i>
                </td>
                <td style={{ padding: 0 }}>is the result of</td>
                <td>
                  <span className="kanji">
                    予<span className="furigana">よ</span>
                  </span>
                  <span className="kanji">
                    約<span className="furigana">やく</span>
                  </span>
                  をしておきました。
                  <br />
                  <i>(I) made a reservation in advance.</i>
                </td>
              </tr>
              <tr>
                <td>
                  パンが
                  <span className="kanji">
                    買<span className="furigana">か</span>
                  </span>
                  ってあります。
                  <br />
                  <i>Bread has been bought (and is ready).</i>
                </td>
                <td style={{ padding: 0 }}>is the result of</td>
                <td>
                  パンを
                  <span className="kanji">
                    買<span className="furigana">か</span>
                  </span>
                  っておきました。
                  <br />
                  <i>(I) bought bread (for future use).</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            てある normally assigns the particle が (or は) to the noun, which
            is usually marked with を. てある almost exclusively goes with a
            transitive verb.
          </p>
          <p>
            Compare also てある sentences with ている sentences that describe
            current states. ている goes with intransitive verbs, in contrast
            with てある.
          </p>
          <table className="table-list table-mini">
            <tbody>
              <tr>
                <td>
                  <span className="kanji">
                    窓<span className="furigana">まど</span>
                  </span>
                  が
                  <span className="kanji">
                    閉<span className="furigana">し</span>
                  </span>
                  めてあります。
                  <br />
                  <i>The window has been kept closed.</i>
                </td>
                <td>
                  (
                  <span className="kanji">
                    閉<span className="furigana">し</span>
                  </span>
                  める = transitive)
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    窓<span className="furigana">まど</span>
                  </span>
                  が
                  <span className="kanji">
                    閉<span className="furigana">し</span>
                  </span>
                  まっています。
                  <br />
                  <i>The window is closed.</i>
                </td>
                <td>
                  (
                  <span className="kanji">
                    閉<span className="furigana">し</span>
                  </span>
                  まる = intransitive)
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            These sentences describe the same situation: the window is closed.
            However, they differ in connotations. The transition てある
            sentence, the current state of the window is the result of a human
            action; somebody closed it and kept it that way. With the
            intransitive ている sentence, there is no such clear implication of
            human intervention. The window is closed, but may or may not be the
            result of somebody closing it.
          </p>
        </div>
      </section>

      <section id="section3">
        <h3>21.3: ～間に</h3>
        <div className="indent">
          <p>
            Use the pattern "A{" "}
            <span className="kanji">
              間<span className="furigana">あいだ</span>
            </span>
            に B" when a certain event B takes place <i>in the middle of</i>{" "}
            another event, A. Most often, event A is described with ている if
            the verb takes ている for an action in progress. The verb for A is
            in the present tense, even wehn clause A describes a situation in
            the past.
          </p>
          <p className="tab">
            お
            <span className="kanji">
              風<span className="furigana">ふ</span>
            </span>
            <span className="kanji">
              呂<span className="furigana">ろ</span>
            </span>
            に
            <span className="kanji">
              入<span className="furigana">はい</span>
            </span>
            っている
            <span className="kanji">
              間<span className="furigana">あいだ</span>
            </span>
            に
            <span className="kanji">
              電話<span className="furigana">でんわ</span>
            </span>
            がありました。
            <br />
            <i>There was a phone call while I was taking a bath.</i>
          </p>
          <p className="tab">
            きのうの
            <span className="kanji">
              夜<span className="furigana">よる</span>
            </span>
            、
            <span className="kanji">
              寝<span className="furigana">ね</span>
            </span>
            ている
            <span className="kanji">
              間<span className="furigana">あいだ</span>
            </span>
            に
            <span className="kanji">
              地震<span className="furigana">じしん</span>
            </span>
            がありました。
            <br />
            <i>There was an earthquake while I was asleep last night.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              両親<span className="furigana">りょしん</span>
            </span>
            が
            <span className="kanji">
              日本<span className="furigana">にほん</span>
            </span>
            にいる
            <span className="kanji">
              間<span className="furigana">あいだ</span>
            </span>
            に
            <span className="kanji">
              京都<span className="furigana">きょうと</span>
            </span>
            に
            <span className="kanji">
              連<span className="furigana">つ</span>
            </span>
            れていきたいです。　（<span className="text-red">✕</span>{" "}
            日本にいている間に）
            <br />
            <i>I want to take my parents to Kyoto while they are in Japan.</i>
          </p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <td>
                A (ている){" "}
                <span className="kanji">
                  間<span className="furigana">あいだ</span>
                </span>
                に B
              </td>
              <td>
                <i>B takes place while A occurs.</i>
              </td>
            </tbody>
          </table>
          <p>The "A" above can be a noun as well.</p>
          <p className="tab">
            <span className="kanji">
              留<span className="furigana">る</span>
            </span>
            <span className="kanji">
              守<span className="furigana">す</span>
            </span>
            の
            <span className="kanji">
              間<span className="furigana">あいだ</span>
            </span>
            に
            <span className="kanji">
              友達<span className="furigana">ともだち</span>
            </span>
            が
            <span className="kanji">
              来<span className="furigana">き</span>
            </span>
            ました。
            <br />
            <i>A friend came while I was out.</i>
          </p>
          <p>
            Event B must be of short duration and begin and end within the
            bounds of activity A. If B extends <i>throughout</i> the time when A
            occurs, we use{" "}
            <span className="kanji">
              間<span className="furigana">あいだ</span>
            </span>{" "}
            instead of{" "}
            <span className="kanji">
              間<span className="furigana">あいだ</span>
            </span>
            に.
          </p>
          <p className="tab">
            ルームメイトが
            <span className="kanji">
              買<span className="furigana">か</span>
            </span>
            い
            <span className="kanji">
              物<span className="furigana">もの</span>
            </span>
            をしている
            <span className="kanji">
              間<span className="furigana">あいだ</span>
            </span>
            、私は本を
            <span className="kanji">
              読<span className="furigana">よ</span>
            </span>
            んで
            <span className="kanji">
              待<span className="furigana">ま</span>
            </span>
            ちました。
            <br />
            <i>I waited, reading a book, while my roommate was shopping.</i>
          </p>
        </div>
      </section>

      <section id="section4">
        <h3>21.4: Adjective + する</h3>
        <div className="indent">
          <p>
            Similar to Lesson 10 where something can "become" something, as in{" "}
            <span className="kanji">
              寒<span className="furigana">さむ</span>
            </span>
            くなる (become cold/colder) and{" "}
            <span className="kanji">
              上手<span className="furigana">じょうず</span>
            </span>
            になる (become good/better at doing X), we can use adjectives
            together with the irregular verb する, which in combination with
            adjectives means "to make".
          </p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td>
                  <span className="kanji">
                    冷<span className="furigana">つめ</span>
                  </span>
                  たい
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    冷<span className="furigana">つめ</span>
                  </span>
                  たくする
                </td>
                <td>
                  <i>to make something cold/colder</i>
                </td>
              </tr>
              <tr>
                <td>いい</td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="underline-green">よ</span>くする
                </td>
                <td>
                  <i>to make something better</i>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    簡単<span className="furigana">かんたん</span>
                  </span>
                  な
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    簡単<span className="furigana">かんたん</span>
                  </span>
                  にする
                </td>
                <td>
                  <i>to make something simple/simpler</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            この
            <span className="kanji">
              間<span className="furigana">あいだ</span>
            </span>
            の
            <span className="kanji">
              試<span className="furigana">し</span>
            </span>
            <span className="kanji">
              験<span className="furigana">けん</span>
            </span>
            は
            <span className="kanji">
              難<span className="furigana">むずか</span>
            </span>
            しすぎたので、
            <span className="kanji">
              次<span className="furigana">つぎ</span>
            </span>
            の
            <span className="kanji">
              試<span className="furigana">し</span>
            </span>
            <span className="kanji">
              験<span className="furigana">けん</span>
            </span>
            はやさしくしてください。
            <br />
            <i>
              Please make the next exam easier, because the last one was too
              difficult.
            </i>
          </p>
          <p className="tab">
            みんなで
            <span className="kanji">
              世<span className="furigana">せ</span>
            </span>
            <span className="kanji">
              界<span className="furigana">かい</span>
            </span>
            をよくしましょう。
            <br />
            <i>Let's join our forces and make the world a better place.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              部<span className="furigana">へ</span>
            </span>
            <span className="kanji">
              屋<span className="furigana">や</span>
            </span>
            をきれいにしました。
            <br />
            <i>I cleaned the room. (lit., I made the room clean.)</i>
          </p>
          <p>Note that the following idiomatic use of this pattern:</p>
          <table className="table-list table-mini">
            <tbody>
              <tr>
                <td>
                  <span className="kanji">
                    静<span className="furigana">しず</span>
                  </span>
                  かにする
                </td>
                <td>make it quiet</td>
                <td className="arrow-right">→</td>
                <td>keep quiet</td>
                <td>
                  <span className="kanji">
                    静<span className="furigana">しず</span>
                  </span>
                  かにしてください。
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section5">
        <h3>21.5: ～てほしい</h3>
        <div className="indent">
          <p>
            When you want somebody to do something, you can describe your wish
            by using the <i>te</i>-form of a verb and the adjective ほしい. The
            person the wish is directed to is marked with the particle に.
          </p>
          <p className="tab">
            私は　
            <span className="kanji">
              病気<span className="furigana">びょうき</span>
            </span>
            の
            <span className="kanji">
              友<span className="furigana">とも</span>
            </span>
            だちに　
            <span className="kanji">
              元気<span className="furigana">げんき</span>
            </span>
            になってほしいです。
            <br />
            <i>I want my sick friend to get well.</i>
          </p>
          <p className="tab">
            私は　ルームメイトに　
            <span className="kanji">
              宿題<span className="furigana">しゅくだい</span>
            </span>
            を
            <span className="kanji">
              手伝<span className="furigana">てつだ</span>
            </span>
            ってほしかったです。
            <br />
            <i>I wanted my roommate to help me with my homework.</i>
          </p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td>（私は）person に</td>
                <td>
                  verb <i>te</i>-form ほしい
                </td>
                <td>
                  <i>I want</i> (person) <i>to do</i>...
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            When you want to say you don't want them to do something, you can
            negate ほしい and say ～てほしくないです or negate the verb and say
            ～ないでほしいです.
          </p>
          <p className="tab">
            私は　お
            <span className="kanji">
              父<span className="furigana">とう</span>
            </span>
            さんに　
            <span className="kanji">
              昔<span className="furigana">むかし</span>
            </span>
            の
            <span className="kanji">
              話<span className="furigana">はなし</span>
            </span>
            をし<span className="underline-green">てほしくない</span>です。
            <br />
            <i>I don't want my father to talk about the good old times.</i>
          </p>
          <p className="tab">
            私は　
            <span className="kanji">
              日本人<span className="furigana">にほんじん</span>
            </span>
            の
            <span className="kanji">
              友<span className="furigana">とも</span>
            </span>
            だちに　
            <span className="kanji">
              英語<span className="furigana">えいご</span>
            </span>
            さ<span className="underline-green">ないでほしい</span>です。
            <br />
            <i>I don't want my Japanese friends to speak in English.</i>
          </p>
          <p>Summarization of "want":</p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td>verb stem + たい (Lesson 11)</td>
                <td>
                  <i>I want to do ...</i>
                </td>
              </tr>
              <tr>
                <td>noun が　ほしい (Lesson 14)</td>
                <td>
                  <i>I want something.</i>
                </td>
              </tr>
              <tr>
                <td>
                  verb <i>te</i>-form + ほしい (this lesson)
                </td>
                <td>
                  <i>I want somebody to do ...</i>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-list table-mini">
            <tbody>
              <tr>
                <td>
                  私はベトナムに
                  <span className="kanji">
                    行<span className="furigana">い</span>
                  </span>
                  きたいです。
                </td>
                <td>
                  <i>I want to go to Vietnam.</i>
                </td>
              </tr>
              <tr>
                <td>
                  私は
                  <span className="kanji">
                    歩<span className="furigana">ある</span>
                  </span>
                  きやすい
                  <span className="kanji">
                    靴<span className="furigana">くつ</span>
                  </span>
                  がほしいです。
                </td>
                <td>
                  <i>I want comfortable shoes.</i>
                </td>
              </tr>
              <tr>
                <td>
                  私は
                  <span className="kanji">
                    妹<span className="furigana">いもうと</span>
                  </span>
                  に
                  <span className="kanji">
                    部<span className="furigana">へ</span>
                  </span>
                  <span className="kanji">
                    屋<span className="furigana">や</span>
                  </span>
                  を
                  <span className="kanji">
                    片付<span className="furigana">かたづ</span>
                  </span>
                  けてほしいです。
                </td>
                <td>
                  <i>I want my little sister to clean up her room.</i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Lesson21;
