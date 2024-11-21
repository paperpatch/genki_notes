import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson9() {
  useSmoothScrollToSection();
  return (
    <div>
      <h2>Lesson 9: かぶき (Kabuki)</h2>
      <section id="section1">
        <h3>9.1: Past Tense Short Forms</h3>
        <div className="indent">
          <p>
            For past tense paradign of short forms, there are three rules to
            understand:
          </p>
          <ol>
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
                  食べ<span className="underline-orange">た</span>
                </td>
                <td>
                  食べ<span className="underline-orange">て</span>
                </td>
              </tr>
              <tr>
                <td>
                  読ん<span className="underline-orange">だ</span>
                </td>
                <td>
                  読ん<span className="underline-orange">で</span>
                </td>
              </tr>
              <tr>
                <td>• い-adjectives:</td>
                <td>
                  かわい<span className="underline-orange">かった</span>
                </td>
                <td>
                  かわいい / かわい
                  <span className="underline-orange">かったです</span>
                </td>
              </tr>
              <tr>
                <td>• な-adjectives:</td>
                <td>
                  静か<span className="underline-orange">だった</span>
                </td>
                <td>
                  静か<span className="underline-orange">でした</span>
                </td>
              </tr>
              <tr>
                <td>• noun + です:</td>
                <td>
                  学生<span className="underline-orange">だった</span>
                </td>
                <td>
                  学生<span className="underline-orange">でした</span>
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
                  読んな<span className="underline-orange">かった</span>
                </td>
                <td>
                  読んな<span className="underline-orange">い</span>
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
                  静かじゃな<span className="underline-orange">かった</span>
                </td>
                <td>
                  静かじゃな<span className="underline-orange">い</span>
                </td>
              </tr>
              <tr>
                <td>• noun + です:</td>
                <td>
                  学生じゃな<span className="underline-orange">かった</span>
                </td>
                <td>
                  学生じゃな<span className="underline-orange">い</span>
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
            <p>今朝、朝ご飯の食べた？</p>
            <p>
              <i>Did you have breakfast this morning?</i>
            </p>
          </div>
          <p>
            Unlike だ in the present tense, だった is not dropped in informal
            speech.
          </p>
          <div className="tab table-double-column">
            <p>A: 先週は忙しかった？</p>
            <p>
              <i>Were you busy last week?</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>B: ううん、忙しくなかった。ひまだった。</p>
            <p>
              <i>No, I wasn't. I had free time.</i>
            </p>
          </div>
        </div>
      </section>

      <section id="section3">
        <h3>9.3: Past Tense Short Forms in Quoted Speech: ~と思います</h3>
        <div className="indent">
          <p>
            Like the present tense, you use the short form in the past tense
            with ~と思います (to omoi masu), which means "I think", to report
            what you think took place in the past.
          </p>
          <div className="tab table-double-column">
            <p>A: あ、私のとんかつがない！</p>
            <p>
              <i>Hey, my pork cutlet is gone!</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>B: トムさんが食べたと思います。</p>
            <p>
              <i>I think Tom ate it.</i>
            </p>
          </div>
          <p className="tab">
            去年の冬はあまり寒くなかったと思い。
            <br />
            去年, kyounen, 冬 = fuyu, 寒 = samu
            <br />
            <i>
              I don't think last winter was very cold. (= I think last winter
              was not very cold.)
            </i>
          </p>
        </div>
      </section>

      <section id="section4">
        <h3>9.4: Past Tense Short Forms in Quoted Speech: ~と言っていました</h3>
        <div className="indent">
          <p>
            If you heard somebody utter a sentence in the past tense, you can
            report it with the short form past tense with ~と言っていました.
          </p>
          <p className="tab">
            ヤスミンさんは、昼ご飯を食べなかったと言っていました。。
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
            ヤスミンさんは晩御飯を食べて
            <span className="underline-orange">いる</span>と言っていました。。
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
          <p>Examples of noun modifications.</p>
          <ol>
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
                  <span className="text-main">人</span>
                  <span className="text-sub">ひと</span>
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
                  <span className="text-main">人</span>
                  <span className="text-sub">ひと</span>
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
                  <span className="text-main">人</span>
                  <span className="text-sub">ひと</span>
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
                  <span className="text-main">人</span>
                  <span className="text-sub">ひと</span>
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
            <p>A: ゆいさんはどの人ですか？</p>
            <p>
              <i>Which one is Yui?</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              B:{" "}
              <span className="underline-orange">あそこで本を読んでいる</span>
              人です。
            </p>
            <p>
              <i>Yui is the one who is reading a book over there.</i>
            </p>
          </div>
          <p className="tab">
            <span className="underline-orange">あそこで写真を撮っている</span>
            学生はロバートさんです。
            <br />
            <i>The student taking pictures over there is Robert.</i>
          </p>
        </div>
      </section>

      <section id="section6">
        <h3>9.6: もう~ました and まだ~ていません</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section7">
        <h3>9.7: Explanation から, Situation</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Lesson9;
