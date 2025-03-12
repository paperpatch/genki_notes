import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson9() {
  useSmoothScrollToSection();
  return (
    <div>
      <div className="lesson-header">
        <h2 className="lesson-title background-orange">Lesson 9</h2>
        <h2 className="lesson-title-orange">かぶき (Kabuki)</h2>
      </div>

      <section id="section1">
        <h3>9.1: Past Tense Short Forms</h3>
        <div className="indent">
          <p style={{ marginBottom: "0px" }}>
            For past tense paradigm of short forms, there are three rules to
            understand:
          </p>
          <ol style={{ marginTop: "5px" }}>
            <li>
              Verbs: Replace the <i>te</i>-form endings て and で with た and
              だ.
            </li>
            <li>
              い-adjectives: Replace the last い with かった. You may also think
              of this in terms of "dropping です from the long form".
            </li>
            <li>
              な-adjectives and nouns: Replace the long form でした ending with
              だった.
              <br />
              Negation: ない conjugates as an い-adjective. Therefore, for all
              categories, you can replace the last ない with なかった.
            </li>
          </ol>
          <table className="table-list table-mini table-border-orange">
            <thead>
              <tr>
                <th colSpan="2" className="table-header text-orange">
                  Past, affirmative
                </th>
                <th className="table-header text-black">compare with:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="2" style={{ verticalAlign: "top" }}>
                  • verbs:
                </td>
                <td>
                  <span className="kanji">
                    食<span className="furigana">た</span>
                  </span>
                  べ<span className="underline-orange">た</span>
                </td>
                <td>
                  <span className="kanji">
                    食<span className="furigana">た</span>
                  </span>
                  べ<span className="underline-orange">て</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  ん<span className="underline-orange">だ</span>
                </td>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  ん<span className="underline-orange">で</span>
                </td>
              </tr>
              <tr>
                <td>• い-adjectives:</td>
                <td>
                  かわい<span className="underline-orange">かった</span>
                </td>
                <td>
                  かわいい ／ かわい
                  <span className="underline-orange">かったです</span>
                </td>
              </tr>
              <tr>
                <td>• な-adjectives:</td>
                <td>
                  <span className="kanji">
                    静<span className="furigana">しず</span>
                  </span>
                  か<span className="underline-orange">だった</span>
                </td>
                <td>
                  <span className="kanji">
                    静<span className="furigana">しず</span>
                  </span>
                  か<span className="underline-orange">でした</span>
                </td>
              </tr>
              <tr>
                <td>• noun + です:</td>
                <td>
                  <span className="kanji">
                    学生<span className="furigana">がくせい</span>
                  </span>
                  <span className="underline-orange">だった</span>
                </td>
                <td>
                  <span className="kanji">
                    学生<span className="furigana">がくせい</span>
                  </span>
                  <span className="underline-orange">でした</span>
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th colSpan="3" className="table-header text-orange">
                  Past, negative
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>• verbs:</td>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  んな<span className="underline-orange">かった</span>
                </td>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  んな<span className="underline-orange">い</span>
                </td>
              </tr>
              <tr>
                <td>• い-adjectives:</td>
                <td>
                  かわいくな<span className="underline-orange">かった</span>
                </td>
                <td>
                  かわいくな
                  <span className="underline-orange">い</span>
                </td>
              </tr>
              <tr>
                <td>• な-adjectives:</td>
                <td>
                  <span className="kanji">
                    静<span className="furigana">しず</span>
                  </span>
                  かじゃな<span className="underline-orange">かった</span>
                </td>
                <td>
                  <span className="kanji">
                    静<span className="furigana">しず</span>
                  </span>
                  かじゃな<span className="underline-orange">い</span>
                </td>
              </tr>
              <tr>
                <td>• noun + です:</td>
                <td>
                  <span className="kanji">
                    学生<span className="furigana">がくせい</span>
                  </span>
                  じゃな<span className="underline-orange">かった</span>
                </td>
                <td>
                  <span className="kanji">
                    学生<span className="furigana">がくせい</span>
                  </span>
                  じゃな<span className="underline-orange">い</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section2">
        <h3>9.2: Past Tense Short Forms in Informal Speech</h3>
        <div className="indent">
          <p>
            Short form in the past tense can be used in the same way as the
            present tense forms. Note that the particle か is dropped in
            informal speech.
          </p>
          <div className="tab table-double-column">
            <p>
              <span className="kanji">
                今朝<span className="furigana">けさ</span>
              </span>
              、
              <span className="kanji">
                朝<span className="furigana">あさ</span>
              </span>
              ご
              <span className="kanji">
                飯<span className="furigana">はん</span>
              </span>
              の
              <span className="kanji">
                食<span className="furigana">た</span>
              </span>
              べた？
            </p>
            <p>
              <i>Did you have breakfast this morning?</i>
            </p>
          </div>
          <p>
            Unlike だ in the present tense, だった is not dropped in informal
            speech.
          </p>
          <div className="tab table-double-column">
            <p>
              A:{" "}
              <span className="kanji">
                先週<span className="furigana">せんしゅう</span>
              </span>
              は
              <span className="kanji">
                忙<span className="furigana">いそが</span>
              </span>
              しかった？
            </p>
            <p>
              <i>Were you busy last week?</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              B: ううん、
              <span className="kanji">
                忙<span className="furigana">いそが</span>
              </span>
              しくなかった。ひまだった。
            </p>
            <p>
              <i>No, I wasn't. I had free time.</i>
            </p>
          </div>
        </div>
      </section>

      <section id="section3">
        <h3>
          9.3: Past Tense Short Forms in Quoted Speech: ～と
          <span className="kanji">
            思<span className="furigana">おも</span>
          </span>
          います
        </h3>
        <div className="indent">
          <p>
            Like the present tense, you use the short form in the past tense
            with ～と
            <span className="kanji">
              思<span className="furigana">おも</span>
            </span>
            います (to omoi masu), which means "I think", to report what you
            think took place in the past.
          </p>
          <div className="tab table-double-column">
            <p>
              A: あ、
              <span className="kanji">
                私<span className="furigana">わたし</span>
              </span>
              のとんかつがない！
            </p>
            <p>
              <i>Hey, my pork cutlet is gone!</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              B: トムさんが
              <span className="kanji">
                食<span className="furigana">た</span>
              </span>
              べたと
              <span className="kanji">
                思<span className="furigana">おも</span>
              </span>
              います。
            </p>
            <p>
              <i>I think Tom ate it.</i>
            </p>
          </div>
          <p className="tab">
            <span className="kanji">
              去年<span className="furigana">きょねん</span>
            </span>
            の
            <span className="kanji">
              冬<span className="furigana">ふゆ</span>
            </span>
            はあまり
            <span className="kanji">
              寒<span className="furigana">さむ</span>
            </span>
            くなかったと
            <span className="kanji">
              思<span className="furigana">おも</span>
            </span>
            い。
            <br />
            <i>
              I don't think last winter was very cold. ( = I think last winter
              was not very cold.)
            </i>
          </p>
        </div>
      </section>

      <section id="section4">
        <h3>
          9.4: Past Tense Short Forms in Quoted Speech: ～と
          <span className="kanji">
            言<span className="furigana">い</span>
          </span>
          っていました
        </h3>
        <div className="indent">
          <p>
            If you heard somebody utter a sentence in the past tense, you can
            report it with the short form past tense with ～と
            <span className="kanji">
              言<span className="furigana">い</span>
            </span>
            っていました.
          </p>
          <p className="tab">
            ヤスミンさんは、
            <span className="kanji">
              昼<span className="furigana">ひる</span>
            </span>
            ご
            <span className="kanji">
              飯<span className="furigana">はん</span>
            </span>
            を
            <span className="kanji">
              食<span className="furigana">た</span>
            </span>
            べなかったと
            <span className="kanji">
              言<span className="furigana">い</span>
            </span>
            っていました。
            <br />
            <i>Yasmin said that she didn't have lunch.</i>
          </p>
          <p>
            Japanese does not have the "sequence of tense" rule, and the tense
            of the original utterance is preserved when it is reported. If you
            are quoting somebody who used the present tense, you must also use
            the present tense inside the quote.
          </p>
          <p className="tab">
            ヤスミンさんは
            <span className="kanji">
              晩<span className="furigana">ばん</span>
            </span>
            ご
            <span className="kanji">
              晩<span className="furigana">ばん</span>
            </span>
            <span className="kanji">
              飯<span className="furigana">はん</span>
            </span>
            を
            <span className="kanji">
              食<span className="furigana">た</span>
            </span>
            べて
            <span className="underline-orange">いる</span>と
            <span className="kanji">
              言<span className="furigana">い</span>
            </span>
            っていました。
            <br />
            <i>
              Yasmin said that she <span className="underline-orange">was</span>{" "}
              having dinner.
            </i>
          </p>
        </div>
      </section>

      <section id="section5">
        <h3>9.5: Qualifying Nouns with Verbs and Adjectives</h3>
        <div className="indent">
          <p style={{ marginBottom: "0px" }}>Examples of noun modifications.</p>
          <ol style={{ marginTop: "5px" }}>
            <li>adjectival modification</li>
            <li>phrase describing a person's attribute</li>
            <li>な-adjective with a grammatical object</li>
            <li>verb in the short form</li>
          </ol>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>
                  <span className="text-orange">e.g. 1.</span>
                </td>
                <td>
                  <span className="border-orange">おもしろい</span>
                </td>
                <td>
                  <span className="kanji">
                    人<span className="furigana">ひと</span>
                  </span>
                </td>
                <td>
                  <i>
                    a person{" "}
                    <span className="border-orange">who is inteeresting</span>
                  </i>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-orange">e.g. 2.</span>
                </td>
                <td>
                  <span className="border-orange">髪が長い</span>
                </td>
                <td>
                  <span className="kanji">
                    人<span className="furigana">ひと</span>
                  </span>
                </td>
                <td>
                  <i>
                    a person{" "}
                    <span className="border-orange">who has long hair</span>
                  </i>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-orange">e.g. 3.</span>
                </td>
                <td>
                  <span className="border-orange">おもしろい</span>
                </td>
                <td>
                  <span className="kanji">
                    人<span className="furigana">ひと</span>
                  </span>
                </td>
                <td>
                  <i>
                    a person{" "}
                    <span className="border-orange">who is inteeresting</span>
                  </i>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-orange">e.g. 4.</span>
                </td>
                <td>
                  <span className="border-orange">おもしろい</span>
                </td>
                <td>
                  <span className="kanji">
                    人<span className="furigana">ひと</span>
                  </span>
                </td>
                <td>
                  <i>
                    a person{" "}
                    <span className="border-orange">who is interesting</span>
                  </i>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>↑</td>
                <td>↑</td>
              </tr>
              <tr>
                <td colSpan="2">adjectives and verbs used as qualifiers</td>
                <td>noun</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p>
            A verb + ている, is frequently used as noun modifiers, describing
            people on the basis of their current actions and states.
          </p>
          <div className="tab table-double-column">
            <p>
              A: ゆいさんはどの
              <span className="kanji">
                人<span className="furigana">ひと</span>
              </span>
              ですか？
            </p>
            <p>
              <i>Which one is Yui?</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              B:{" "}
              <span className="underline-orange">
                あそこで
                <span className="kanji">
                  本<span className="furigana">ほん</span>
                </span>
                を
                <span className="kanji">
                  読<span className="furigana">よ</span>
                </span>
                んでいる
              </span>
              <span className="kanji">
                人<span className="furigana">ひと</span>
              </span>
              です。
            </p>
            <p>
              <i>Yui is the one who is reading a book over there.</i>
            </p>
          </div>
          <p className="tab">
            <span className="underline-orange">
              あそこで
              <span className="kanji">
                写真<span className="furigana">しゃしん</span>
              </span>
              を
              <span className="kanji">
                撮<span className="furigana">と</span>
              </span>
              っている
            </span>
            <span className="kanji">
              学生<span className="furigana">がくせい</span>
            </span>
            はロバートさんです。
            <br />
            <i>The student taking pictures over there is Robert.</i>
          </p>
        </div>
      </section>

      <section id="section6">
        <h3>9.6: もう～ました and まだ～ていません</h3>
        <div className="indent">
          <p>
            Use affirmative past tense of a verb ～ ました both (i) to talk
            about an event that happened at a certain time in the past (きのう{" "}
            <i>yesterday</i>), and also (ii) to talk about a past event that
            still has an effect at present (used with adverbs like もう{" "}
            <i>already</i>).
          </p>
          <div className="tab table-double-column">
            <p>
              きのう
              <span className="kanji">
                宿題<span className="furigana">しゅくだい</span>
              </span>
              をし<span className="underline-orange">ました</span>。
            </p>
            <p>
              <i>I did the homework yesterday.</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              もう
              <span className="kanji">
                宿題<span className="furigana">しゅくだい</span>
              </span>
              をし
              <span className="underline-orange">ました</span>。
            </p>
            <p>
              <i>I have already done the homework.</i>
            </p>
          </div>
          <p>
            With the negative, the past is used only to talk about a finished
            time period like きのう, but ている is used if your intention is to
            talk about how things stand now ("not yet").
          </p>
          <div className="tab table-double-column">
            <p>
              きのう
              <span className="kanji">
                宿題<span className="furigana">しゅくだい</span>
              </span>
              をし
              <span className="underline-orange">ませんでした</span>。
            </p>
            <p>
              <i>I did not do the homework yesterday.</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              もう
              <span className="kanji">
                宿題<span className="furigana">しゅくだい</span>
              </span>
              をし
              <span className="underline-orange">ていません</span>。
            </p>
            <p>
              <i>I have not done the homework yet.</i>
            </p>
          </div>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>もう～ました</td>
                <td>
                  <i>have already ...</i>
                </td>
              </tr>
              <tr>
                <td>まだ～ていません</td>
                <td>
                  <i>have not ... yet</i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section7">
        <h3>9.7: Explanation から, Situation</h3>
        <div className="indent">
          <p>
            から means "because" when added to a sentence. It can also mean a
            sort of explanation when combined with more sentences.
          </p>
          <p>
            If you put two sentences into one with から at the end of one of the
            sentence, the から sentence explains the situation.
          </p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>
                  <span className="border-orange">explanation</span> から、
                  <span className="border-orange">situation</span>。
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "50px" }}>
                  = <span className="border-orange">situation</span>,{" "}
                  <i>because</i>{" "}
                  <span className="border-orange">explanation</span>.
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "50px" }}>
                  = <span className="border-orange">explanation</span>;{" "}
                  <i>therefore,</i>
                  <span className="border-orange">situation</span>.
                </td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            あした
            <span className="kanji">
              試<span className="furigana">し</span>
            </span>
            <span className="kanji">
              験<span className="furigana">けん</span>
            </span>
            があるから、
            <span className="kanji">
              今晩<span className="furigana">こんばん</span>
            </span>
            <span className="kanji">
              勉強<span className="furigana">べんきょう</span>
            </span>
            します。
            <br />
            <i>
              I will study this evening, beacuse we will have an exam tomorrow.
            </i>
            <br />
            <i>
              (= We will have an exam tomorrow; therefore, I will study this
              evening.)
            </i>
          </p>
          <p className="tab">
            <span className="kanji">
              寒<span className="furigana">さむ</span>
            </span>
            かったから、
            <span className="kanji">
              出<span className="furigana">で</span>
            </span>
            かけませんでした。
            <br />
            <i>We didn't go out, because it was cold.</i>
            <br />
            <i>(= It was cold; therefore, we didn't go out.)</i>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Lesson9;
