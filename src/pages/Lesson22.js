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
                    話す<span className="furigana">はな</span>
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
          <p></p>
        </div>
      </section>

      <section id="section5">
        <h3>22.5: ～のに</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section6">
        <h3>22.6: ～のように / ～のような</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Lesson22;
