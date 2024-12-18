import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson22() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 22: 日本の教育 (Education in Japan)</h2>
      <section id="section1">
        <h3>22.1: Causative Sentences</h3>
        <div className="indent">
          <p>
            There's another verb derivation called the "causative form". When
            you use the causative form of a verb, you can describe who{" "}
            <i>makes</i> someone do something, and who <i>lets</i> someone do
            something.
          </p>
          <p>Derive the causative form of a verb:</p>
          <table className="table-list table-mini table-border-green">
            <thead>
              <tr>
                <th colSpan="6" className="table-header text-green">
                  Causative form
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6">
                  • ru-verbs: Drop the final -<i>ru</i> and add -<i>sase-ru</i>.
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
                  べさせる
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
                  かせる
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
                  らせる
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
                  させる
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
                  がせる
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
                  たせる
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
                  ばせる
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
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
                  なせる
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
                  <span className="underline-green">わ</span>せる
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
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
                  ませる
                </td>
              </tr>
              <tr>
                <td colSpan="6">• irregular verbs:</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>くる</td>
                <td className="arrow-right">→</td>
                <td>こさせる</td>
                <td>する</td>
                <td className="arrow-right">→</td>
                <td>させる</td>
              </tr>
            </tbody>
          </table>
          <p>Basic structure of a causative sentence:</p>
          <table className="table-list table-mini table-border-green">
            <thead>
              <tr>
                <th className="table-header text-green">Causative sentence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ paddingBottom: "5px", paddingLeft: "3em" }}>
                  <span className="kanji">
                    先生<span className="furigana">せんせい</span>
                  </span>
                  は
                </td>
                <td style={{ paddingBottom: "5px" }}>
                  <span className="kanji">
                    学生<span className="furigana">がくせい</span>
                  </span>
                  に
                </td>
                <td style={{ paddingBottom: "5px" }}>
                  <span className="kanji">
                    会<span className="furigana">かい</span>
                  </span>
                  <span className="kanji">
                    話<span className="furigana">わ</span>
                  </span>
                  を
                  <span className="kanji">
                    覚<span className="furigana">おぼ</span>
                  </span>
                  えさせました。
                </td>
              </tr>
              <tr>
                <td style={{ paddingTop: 0, paddingLeft: "3em" }}>
                  <span className="text-green">(director)</span> は
                </td>
                <td style={{ paddingTop: 0 }}>
                  <span className="text-green">(cast)</span> に
                </td>
                <td style={{ paddingTop: 0 }}>
                  <span className="text-green">(action)</span>
                </td>
              </tr>
              <tr>
                <td colSpan={3} style={{ paddingLeft: "3em" }}>
                  <i>The professor made the students memorize the dialogue.</i>
                </td>
              </tr>
              <tr>
                <td colSpan={3} style={{ paddingBottom: 0 }}>
                  <ul style={{ padding: 0, margin: 0 }}>
                    <li>
                      • The <span className="text-green">director</span> decides
                      what is allowed and what is to be done. Marked with は or
                      が.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td colSpan={3} style={{ paddingBottom: 0 }}>
                  <ul style={{ padding: 0, margin: 0 }}>
                    <li>
                      • The <span className="text-green">cast</span> performs
                      the action. Marked with に.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <ul style={{ padding: 0, margin: 0 }}>
                    <li>
                      • The <span className="text-green">action</span> is
                      described with a causative form of a verb.
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            A causative verb can be interpreted either with the "<i>make</i>{" "}
            somebody do" reading or with the "<i>let</i> somebody do" reading.
            For example, you cannot conclude from the sentences below in
            isolation whether they describe an authoritarian parent (forcing
            children) or a doting parent (allowing the children what they want).
            Only our general knowledge about the parents' personalities, the
            children's attitudes, and the linguistic context of the sentence
            solves the issue.
          </p>
          <p className="tab">
            お
            <span className="kanji">
              父<span className="furigana">とう</span>
            </span>
            さんは
            <span className="kanji">
              子供<span className="furigana">こども</span>
            </span>
            に
            <span className="kanji">
              野菜<span className="furigana">やさい</span>
            </span>
            を
            <span className="kanji">
              食<span className="furigana">たた</span>
            </span>
            べさせました。
            <br />
            <i>The father made/let his child eat vegetables.</i>
          </p>
          <p className="tab">
            お
            <span className="kanji">
              母<span className="furigana">かあ</span>
            </span>
            さんは
            <span className="kanji">
              子供<span className="furigana">こども</span>
            </span>
            に
            <span className="kanji">
              本<span className="furigana">ほん</span>
            </span>
            を
            <span className="kanji">
              読<span className="furigana">よ</span>
            </span>
            ませました。
            <br />
            <i>The mother made/let her child read the book.</i>
          </p>
        </div>
      </section>

      <section id="section2">
        <h3>22.2: Causative + てあげる / てくれる / てもらう</h3>
        <div className="indent">
          <p>
            If the helping verb てあげる, てくれる, or てもらう follows a
            causative verb, you can assume in almost all cases that it is a
            "let" causative (see Lesson 16 for helping verbs).
          </p>
          <p className="tab">
            <span className="kanji">
              先生<span className="furigana">せんせい</span>
            </span>
            は私に
            <span className="kanji">
              英語<span className="furigana">えいご</span>
            </span>
            を
            <span className="kanji">
              話<span className="furigana">はな</span>
            </span>
            させてくれませんでした。
            <br />
            <i>The professor did not allow me to speak in English.</i>
          </p>
          <p className="tab">
            私は
            <span className="kanji">
              自分<span className="furigana">じぶん</span>
            </span>
            の
            <span className="kanji">
              子供<span className="furigana">こども</span>
            </span>
            に
            <span className="kanji">
              好<span className="furigana">す</span>
            </span>
            きなことをさせてあげるつもりです。
            <br />
            <i>I think I will let my children do what they love.</i>
          </p>
          <p>
            You can use the causative + てください to ask for permission to do
            something and to volunteer to do something.
          </p>
          <p className="tab">
            私にこの
            <span className="kanji">
              仕事<span className="furigana">しごと</span>
            </span>
            をやらせてください。
            <br />
            <i>Please let me do this job.</i>
          </p>
          <table className="table-list table-mini table-border-green">
            <thead>
              <tr>
                <th className="table-header text-green">
                  Usage of causative verb
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ paddingBottom: "5px", paddingLeft: "3em" }}>
                  • <span className="text-green">(director)</span> は　
                  <span className="text-green">(cast)</span> に　causative verb
                </td>
                <td style={{ paddingBottom: "5px" }}>
                  <span className="text-green">(director)</span>{" "}
                  <i>makes/lets</i> <span className="text-green">(cast)</span>{" "}
                  do...
                </td>
              </tr>
              <tr>
                <td style={{ paddingBottom: "5px", paddingLeft: "3em" }}>
                  • <span className="text-green">(director)</span> は　
                  <span className="text-green">(cast)</span> に　causative verb
                  + てあげる／てくれる
                </td>
                <td style={{ paddingBottom: "5px" }}>
                  <span className="text-green">(director)</span> <i>lets</i>{" "}
                  <span className="text-green">(cast)</span> do...
                </td>
              </tr>
              <tr>
                <td style={{ paddingBottom: "5px", paddingLeft: "3em" }}>
                  • causative verb + てください
                </td>
                <td style={{ paddingBottom: "5px" }}>
                  <i>please let me do...</i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section3">
        <h3>22.3: Verb Stem + なさい</h3>
        <div className="indent">
          <p>
            The verb stem + なさい is a command. なさい has a strong implication
            that you are "talking down" to somebody, or that you think you are
            more mature, know better, and should be obeyed. なさい, therefore,
            is appropriate for parents to use toward their children. You also
            often see なさい in exam instructions.
          </p>
          <p className="tab">
            <span className="kanji">
              十時<span className="furigana">じゅうじ</span>
            </span>
            までに
            <span className="kanji">
              帰<span className="furigana">かえ</span>
            </span>
            りなさい。
            <br />
            <i>Come home by 10 o'clock.</i>
          </p>
          <p className="tab">
            かっこの
            <span className="kanji">
              中<span className="furigana">なか</span>
            </span>
            に
            <span className="kanji">
              単語<span className="furigana">たんご</span>
            </span>
            を
            <span className="kanji">
              入<span className="furigana">い</span>
            </span>
            れなさい。
            <br />
            <i>Fill in the blanks with a word.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              文句<span className="furigana">もんく</span>
            </span>
            を
            <span className="kanji">
              言<span className="furigana">いい</span>
            </span>
            うのをやめなさい。
            <br />
            <i>Stop complaining.</i>
          </p>
          <p>
            You can express the idea of the negative "don't do..." using a verb
            followed by のを and やめなさい, which comes from the verb やめる.
          </p>
        </div>
      </section>

      <section id="section4">
        <h3>22.4: ～ば</h3>
        <div className="indent">
          <p>
            "Clause A ば Clause B" is a conditional statement: "if A, then B".
            See a previous reference in Lesson 18, where ば-form in the pattern
            ばよかった (I wish I had done...).
          </p>
          <p>Conjugation rule of the verb ば-form:</p>
          <table className="table-list table-mini table-border-green">
            <thead>
              <tr>
                <th colSpan={3} className="table-header text-green">
                  ば -form
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6}>
                  • Verbs in the affirmative: Drop the final -<i>u</i> and add -
                  <i>eba</i>.
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
                  べれば
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
                  えば
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
                  けば
                </td>
                <td>
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
                  てば
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>する</td>
                <td className="arrow-right">→</td>
                <td>すれば</td>
                <td>くる</td>
                <td className="arrow-right">→</td>
                <td>くれば</td>
              </tr>
              <tr>
                <td colSpan={6}>
                  • Verbs in the negative: Drop the final い and add ければ.
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  <span className="kanji">
                    行<span className="furigana">い</span>
                  </span>
                  かない
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    行<span className="furigana">い</span>
                  </span>
                  かなければ
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            In an "A ば B" sentence, the "A" part describes the condition,{" "}
            <i>provided</i> that the consequence described in "B" will follow.
          </p>
          <p className="tab">
            <span className="kanji">
              車<span className="furigana">くるま</span>
            </span>
            があれば、いろいろな
            <span className="kanji">
              所<span className="furigana">ところ</span>
            </span>
            に
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            けます。
            <br />
            <i>If you have a car, you can go to various places.</i>
          </p>
          <p className="tab">
            かぎをかけてあけば、どろぼうに
            <span className="kanji">
              入<span className="furigana">はい</span>
            </span>
            られません。
            <br />
            <i>
              If you lock the doors and windows, you won't have your apartment
              broken into.
            </i>
          </p>
          <table className="table-list table-mini">
            <tbody>
              <tr>
                <td>Student：</td>
                <td style={{ padding: 0 }}>
                  <span className="kanji">
                    試験<span className="furigana">しけん</span>
                  </span>
                  は
                  <span className="kanji">
                    難<span className="furigana">むずか</span>
                  </span>
                  しいでしょうか。
                </td>
                <td>
                  <i>Will the exam be hard?</i>
                </td>
              </tr>
              <tr>
                <td>Teacher：</td>
                <td style={{ padding: 0 }}>
                  <span className="kanji">
                    単語<span className="furigana">たんご</span>
                  </span>
                  を
                  <span className="kanji">
                    覚<span className="furigana">おぼ</span>
                  </span>
                  えれば、
                  <span className="kanji">
                    大丈夫<span className="furigana">だいじょうぶ</span>
                  </span>
                  ですよ。
                </td>
                <td>
                  <i>If you memorizse the words, you should be good.</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            You usually use the "A ば B" pattern when the condition "A"
            guarantees a <i>good result</i> in "B". Therefore, sentence (i)
            sounds natural, but sentence (ii), while it does makes sense, sounds
            odd.
          </p>
          <table className="table-list table-mini">
            <tbody>
              <tr>
                <td>(i)</td>
                <td style={{ padding: 0 }}>
                  <span className="kanji">
                    走<span className="furigana">はし</span>
                  </span>
                  れば、
                  <span className="kanji">
                    電車<span className="furigana">でんしゃ</span>
                  </span>
                  に
                  <span className="kanji">
                    間<span className="furigana">ま</span>
                  </span>
                  に
                  <span className="kanji">
                    合<span className="furigana">あ</span>
                  </span>
                  います。
                </td>
                <td>
                  <i>If I run, I will be able to catch the train.</i>
                </td>
              </tr>
              <tr>
                <td>(ii)　？？</td>
                <td style={{ padding: 0 }}>
                  <span className="kanji">
                    歩<span className="furigana">ある</span>
                  </span>
                  けば、
                  <span className="kanji">
                    電車<span className="furigana">でんしゃ</span>
                  </span>
                  に
                  <span className="kanji">
                    遅<span className="furigana">おく</span>
                  </span>
                  れます。
                </td>
                <td>
                  <i>If I walk, I will be late for the train.</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Beacuse of this "good result" implication, "A ば B" is often used to
            advise "A". Sometimes the part "B" contains generic expressions like{" "}
            <span className="kanji">
              大丈夫<span className="furigana">だいじょうぶ</span>
            </span>
            です or いいんです.
          </p>
          <p className="tab">
            この
            <span className="kanji">
              薬<span className="furigana">くすり</span>
            </span>
            を
            <span className="kanji">
              飲<span className="furigana">の</span>
            </span>
            めば
            <span className="kanji">
              大丈夫<span className="furigana">だいじょうぶ</span>
            </span>
            です。
            <br />
            <i>You will be okay, if you take this medicine.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              先生<span className="furigana">せんせい</span>
            </span>
            に
            <span className="kanji">
              聞<span className="furigana">き</span>
            </span>
            けばいいんです。
            <br />
            <i>
              All you have to do is ask the teacher. (If you ask, everything
              will be fine.)
            </i>
          </p>
        </div>
      </section>

      <section id="section5">
        <h3>22.5: ～のに</h3>
        <div className="indent">
          <p>
            のに connects two facts, A and B, which hold in spite of the
            expectation that if A is the case, B is not to be the case. "A のに
            B," means "A, but contrary to expectations, B, too" or "B, despite
            the fact A."
          </p>
          <p className="tab">
            この
            <span className="kanji">
              会社<span className="furigana">かいしゃ</span>
            </span>
            はお
            <span className="kanji">
              金<span className="furigana">かね</span>
            </span>
            があるのに、
            <span className="kanji">
              給料<span className="furigana">きゅうりょう</span>
            </span>
            は
            <span className="kanji">
              安<span className="furigana">やす</span>
            </span>
            いです。
            <br />
            <i>This company is rich, but its workers' salaries are low.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              八時間<span className="furigana">はちじかん</span>
            </span>
            も
            <span className="kanji">
              勉強<span className="furigana">べんきょう</span>
            </span>
            ができなかった。
            <br />
            <i>
              I studied for eight hours, but I couldn't do well on the
              examination.
            </i>
          </p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td>A (short form) のに B</td>
                <td>
                  <i>Despite the fact A, it is B.</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            The predicate in part A is in the short form. When A ends with a
            な-adjective or with a noun + です, it apperas as な, just like in
            the explanatory んです construction.
          </p>
          <p className="tab">
            <span className="kanji">
              田中<span className="furigana">たなか</span>
            </span>
            さんは
            <span className="kanji">
              親切<span className="furigana">しんせつ</span>
            </span>
            なのに、
            <span className="kanji">
              山田<span className="furigana">やまだ</span>
            </span>
            さんは
            <span className="kanji">
              田中<span className="furigana">たなか</span>
            </span>
            さんがきらいです。
            <br />
            <i>Ms.Tanaka is nice, but Ms.Yamada does not like her.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              大<span className="furigana">おお</span>
            </span>
            きい
            <span className="kanji">
              問題<span className="furigana">もんだい</span>
            </span>
            なのに、あの
            <span className="kanji">
              人<span className="furigana">ひと</span>
            </span>
            はだれにも
            <span className="kanji">
              相談<span className="furigana">そうだん</span>
            </span>
            しません。
            <br />
            <i>It is a big issue, but he does not consult with anybody.</i>
          </p>
          <p>
            Because のに connects two facts, you cannot have non-factual
            sentences, like requests or suggestions, in the B clause:
          </p>
          <table className="table-list table-mini">
            <tbody>
              <tr>
                <td className="text-red" style={{ textAlign: "right" }}>
                  ✕
                </td>
                <td>
                  この
                  <span className="kanji">
                    本<span className="furigana">ほん</span>
                  </span>
                  は
                  <span className="kanji">
                    日本語<span className="furigana">にほんご</span>
                  </span>
                  が
                  <span className="kanji">
                    少<span className="furigana">すこ</span>
                  </span>
                  し
                  <span className="kanji">
                    難<span className="furigana">むずか</span>
                  </span>
                  しいのに、
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  んでください。
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "right" }}>Compare:</td>
                <td>
                  この
                  <span className="kanji">
                    本<span className="furigana">ほん</span>
                  </span>
                  は
                  <span className="kanji">
                    日本語<span className="furigana">にほんご</span>
                  </span>
                  が
                  <span className="kanji">
                    少<span className="furigana">すこ</span>
                  </span>
                  し
                  <span className="kanji">
                    難<span className="furigana">むずか</span>
                  </span>
                  しい<span className="underline-green">ですが</span>、
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  んでください。
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <i>
                    Japanese in this book is a little difficult, but please read
                    it.
                  </i>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-list table-mini">
            <tbody>
              <tr>
                <td className="text-red" style={{ textAlign: "right" }}>
                  ✕
                </td>
                <td>
                  あまりおいしそうじゃないのに、ここで
                  <span className="kanji">
                    食<span className="furigana">た</span>
                  </span>
                  べましょう。
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "right" }}>Compare:</td>
                <td>
                  あまりおいしそうじゃない
                  <span className="underline-green">けど</span>、ここで
                  <span className="kanji">
                    食<span className="furigana">た</span>
                  </span>
                  べましょう。
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <i>
                    The food does not look very promising, but let's eat here.
                  </i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section6">
        <h3>22.6: ～のように / ～のような</h3>
        <div className="indent">
          <p>
            You can use "Noun A のように" when you want to describe an action
            which is "done in the same way as A" or a characteristic which is
            "comparable to A".
          </p>
          <p className="tab">
            メアリーさんは
            <span className="kanji">
              魚<span className="furigana">さかな</span>
            </span>
            <span className="underline-green">のように</span>
            <span className="kanji">
              上手<span className="furigana">じょうず</span>
            </span>
            に
            <span className="kanji">
              泳<span className="furigana">およ</span>
            </span>
            げます。
            <br />
            <i>Mary can swim very well, just like a fish.</i>
          </p>
          <p className="tab">
            アントニオさんは
            <span className="kanji">
              孫悟空<span className="furigana">そんごくう</span>
            </span>
            <span className="underline-green">のように</span>
            <span className="kanji">
              強<span className="furigana">つよ</span>
            </span>
            いです。
            <br />
            <i>
              Antonio is strong like Goku. (Goku is the martial arts hero of
              Dragon Ball manga and anime series.)
            </i>
          </p>
          <p>
            "Noun A のような Noun B" means "a B like/similar to A." When you say
            "A のような B," B has the same quality or appearance as A, or A is
            an example of B.
          </p>
          <p className="tab">
            私は
            <span className="kanji">
              鎌倉<span className="furigana">かまくら</span>
            </span>
            <span className="underline-green">のような</span>
            <span className="kanji">
              町<span className="furigana">まち</span>
            </span>
            が
            <span className="kanji">
              好<span className="furigana">す</span>
            </span>
            きです。
            <br />
            <i>I like towns like Kamakura.</i>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Lesson22;
