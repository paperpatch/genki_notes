import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson5() {
  useSmoothScrollToSection();

  return (
    <div>
      <div className="lesson-header">
        <h2 className="lesson-title background-orange">Lesson 5</h2>
        <h2 className="lesson-title-orange">
          <span className="kanji">
            沖縄旅行<span className="furigana">おきなわりょこう</span>
          </span>{" "}
          (A Trip to Okinawa)
        </h2>
      </div>

      <section id="section1">
        <div className="section-header">
          <h3 className="section-circle circle-orange">1</h3>
          <h3 className="section-text-orange">Adjectives (Present Tense)</h3>
        </div>
        <div className="indent">
          <p>
            Add です to both い-adjectives and な-adjectives for affirmative
            present tense sentences.
          </p>
          <p>
            In negative sentences, you replace the last い of an い-adjective
            with くない. な-adjectives are just like nouns and you only need to
            change です to じゃないです.
          </p>
          <table className="table-list table-border-orange">
            <thead>
              <tr>
                <th colSpan="3" className="table-header text-orange">
                  [Present]
                </th>
              </tr>
              <tr>
                <th></th>
                <th>affirmative</th>
                <th>negative</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>い-adjectives</strong>
                  <br />
                  <span className="text-orange">e.g.</span> さむい
                </td>
                <td>
                  さむい<span className="underline-orange">です</span>
                  <br />
                  <i>It is cold.</i>
                </td>
                <td>
                  さむ<span className="underline-orange">くないです</span>
                  <br />
                  <i>It is not cold.</i>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>な-adjectives</strong>
                  <br />
                  <span className="text-orange">e.g.</span> 元気 (な)
                </td>
                <td>
                  <span className="kanji">
                    元<span className="furigana">げん</span>
                  </span>
                  <span className="kanji">
                    気<span className="furigana">き</span>
                  </span>
                  <span className="underline-orange">です</span>
                  <br />
                  <i>She is healthy.</i>
                </td>
                <td>
                  <span className="kanji">
                    元<span className="furigana">げん</span>
                  </span>
                  <span className="kanji">
                    気<span className="furigana">き</span>
                  </span>
                  <span className="underline-orange">じゃないです</span>
                  <br />
                  <i>She is not healthy.</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            A: その
            <span className="kanji">
              本<span className="furigana">ほん</span>
            </span>
            は
            <span className="kanji">
              面白<span className="furigana">おもしろ</span>
            </span>
            いですか。
            <br />
            <i>Is that book interesting?</i>
          </p>
          <p className="tab">
            B: いいえ, あまりおもしろくないです。
            <br />
            <i>No, it is not very interesting.</i>
          </p>
          <p>
            One irregularity worth noticing is the adjective いい (good). The
            first syllable of いい is changed to よ in all forms except the
            dictionary form.
          </p>
          <p>
            Compound adjectives like かっこいい that are built with いい follow
            this syllable change and we say かっこ
            <span className="underline-orange">よ</span>くないです.
          </p>
          <table className="table-list table-border-orange">
            <thead>
              <tr>
                <th colSpan="3" className="table-header text-orange">
                  [Present] (irregular)
                </th>
              </tr>
              <tr>
                <th></th>
                <th>affirmative</th>
                <th>negative</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>いい</td>
                <td>いいです</td>
                <td>
                  <span className="underline-orange">よ</span>くないです
                  <br />
                  (or <span className="underline-orange">よ</span>くありません)
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            If you want to say things like "very hot", and "a little hot", you
            can add "degree adverbs" like すごく (extremely), とても (very) and
            ちょっと (a little; slightly) before adjectives.
          </p>
          <p className="tab">
            <span className="kanji">
              沖縄<span className="furigana">おきなわ</span>
            </span>
            の
            <span className="kanji">
              海<span className="furigana">うみ</span>
            </span>
            は<span className="underline-orange">とても</span>
            きれいです。
            <br />
            <i>The sea is very beautiful in Okinawa.</i>
          </p>
          <p className="tab">
            この
            <span className="kanji">
              部<span className="furigana">へ</span>
            </span>
            <span className="kanji">
              屋<span className="furigana">や</span>
            </span>
            は<span className="underline-orange">ちょっと</span>
            <span className="kanji">
              暑<span className="furigana">あつ</span>
            </span>
            いです。
            <br />
            <i>This room is a little hot.</i>
          </p>
        </div>
      </section>

      <section id="section2">
        <div className="section-header">
          <h3 className="section-circle circle-orange">2</h3>
          <h3 className="section-text-orange">Adjectives (Past Tense)</h3>
        </div>
        <div className="indent">
          <p>
            With い-adjectives, you change the last い to かったです in the
            affirmative. In the negative, you only need to cdhange the present
            tense くない to くなかったです.
          </p>
          <table className="table-list table-border-orange">
            <thead>
              <tr>
                <th colSpan="3" className="table-header text-orange">
                  [Past]
                </th>
              </tr>
              <tr>
                <th></th>
                <th>affirmative</th>
                <th>negative</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>い-adjectives</strong>
                  <br />
                  <span className="text-orange">e.g.</span> さむ
                </td>
                <td>
                  さむい<span className="underline-orange">かったです</span>
                  <br />
                  <i>It was cold.</i>
                </td>
                <td>
                  さむ<span className="underline-orange">くなかったです</span>
                  <br />
                  <i>It was not cold.</i>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>な-adjectives</strong>
                  <br />
                  <span className="text-orange">e.g.</span>{" "}
                  <span className="kanji">
                    元<span className="furigana">げん</span>
                  </span>
                  <span className="kanji">
                    気<span className="furigana">き</span>
                  </span>{" "}
                  (な)
                </td>
                <td>
                  <span className="kanji">
                    元<span className="furigana">げん</span>
                  </span>
                  <span className="kanji">
                    気<span className="furigana">き</span>
                  </span>
                  <span className="underline-orange">でした</span>
                  <br />
                  <i>She was healthy.</i>
                </td>
                <td>
                  <span className="kanji">
                    元<span className="furigana">げん</span>
                  </span>
                  <span className="kanji">
                    気<span className="furigana">き</span>
                  </span>
                  <span className="underline-orange">じゃなかったです</span>
                  <br />
                  <i>She was not healthy.</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            The い-adjective いい (good) is again irregular. Its first syllable
            is changed to よ.
          </p>
          <table className="table-list table-border-orange">
            <thead>
              <tr>
                <th colSpan="3" className="table-header text-orange">
                  [Past] (irregular)
                </th>
              </tr>
              <tr>
                <th></th>
                <th>affirmative</th>
                <th>negative</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>いい</td>
                <td>よかったです</td>
                <td>
                  <span className="underline-orange">よ</span>くなかったです
                  <br />
                  (or <span className="underline-orange">よ</span>
                  くありませんでした)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section3">
        <div className="section-header">
          <h3 className="section-circle circle-orange">3</h3>
          <h3 className="section-text-orange">
            Adjectives (Noun Modification)
          </h3>
        </div>
        <div className="indent">
          <p>
            You can use い- and な-adjectives to modify nouns. Place the
            dictionary form of an い-adjective before the noun you want to
            modify. With な-adjectives, place the missing な of the
            corresponding noun before です.
          </p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>い-adjectives:</td>
                <td>
                  おもしろい
                  <span className="kanji">
                    映<span className="furigana">えい</span>
                  </span>
                  <span className="kanji">
                    画<span className="furigana">が</span>
                  </span>
                </td>
                <td>
                  <i>an interesting movie</i>
                </td>
              </tr>
              <tr>
                <td>な-adjectives:</td>
                <td>
                  きれいな
                  <span className="kanji">
                    写<span className="furigana">しゃ</span>
                  </span>
                  <span className="kanji">
                    真<span className="furigana">しん</span>
                  </span>
                </td>
                <td>
                  <i>a beautiful picture</i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section4">
        <div className="section-header">
          <h3 className="section-circle circle-orange">4</h3>
          <h3 className="section-text-orange">好き (な) / きらい (な)</h3>
        </div>
        <div className="indent">
          <p>
            Some Japanese adjectives are like verbs in English, and they take a
            subject and an object. For example, 好き (な) (to be fond of; to
            like), and きらい (な) (to be disgusted with; to dislike) are
            examples. You can make 私は will be the subject and the object of
            your affection will be Y が.
          </p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td rowSpan="2">X は Y が</td>
                <td>好き</td>
                <td rowSpan="2">です。</td>
              </tr>
              <tr>
                <td>きらい</td>
              </tr>
            </tbody>
          </table>
          <p>
            If you like or dislike something (or somebody) a lot, you can use
            the intensified forms of{" "}
            <span className="kanji">
              好<span className="furigana">す</span>
            </span>
            きです and きらいです, by adjusting to
            <span className="kanji">
              大<span className="furigana">だい</span>
            </span>
            <span className="kanji">
              好<span className="furigana">す</span>
            </span>
            きです (like a lot) and{" "}
            <span className="kanji">
              大<span className="furigana">だい</span>
            </span>
            きらいです (hate), which are more often used than the degree
            modifier とても.
          </p>
          <p className="tab">
            たけしさんはコーヒーが
            <span className="kanji">
              大<span className="furigana">だい</span>
            </span>
            <span className="kanji">
              好<span className="furigana">す</span>
            </span>
            きです。
            <br />
            <i>Takeshi likes coffee a lot.</i>
          </p>
          <p>
            If you want to be neutral and say that you neither like or dislike
            something, you can say the following:
          </p>
          <p className="tab">
            <span className="kanji">
              好<span className="furigana">す</span>
            </span>
            きでもきらいでもないです。
            <br />
            <i>I neither like nor dislike (it).</i>
          </p>
          <p>
            You can use 好きな and きらいな as modifiers of nouns. For example:
          </p>
          <p className="tab">
            これは
            <span className="underline-orange">
              <span className="kanji">
                私<span className="furigana">わたし</span>
              </span>
              の
              <span className="kanji">
                好<span className="furigana">す</span>
              </span>
              きな
            </span>
            <span className="kanji">
              本<span className="furigana">ほん</span>
            </span>
            です。
            <br />
            <i>
              This is <span className="underline-orange">my favorite</span>{" "}
              book.
            </i>
          </p>
        </div>
      </section>

      <section id="section5">
        <div className="section-header">
          <h3 className="section-circle circle-orange">5</h3>
          <h3 className="section-text-orange">～ましょう / ～ましょうか</h3>
        </div>
        <div className="indent">
          <p>
            Take a long form of a verb and replace the ます ending with ましょう
            or ましょうか and you will get the Japanese expression for
            "let's...", which you can use to suggest a plan of action.
          </p>
          <p className="tab">
            <span className="kanji">
              一緒<span className="furigana">いっしょ</span>
            </span>
            に
            <span className="kanji">
              図書館<span className="furigana">としょかん</span>
            </span>
            で
            <span className="kanji">
              勉強<span className="furigana">べんきょう</span>
            </span>
            しましょう。
            <br />
            <i>Let's study in the library together.</i>
          </p>
        </div>
      </section>

      <section id="section6">
        <div className="section-header">
          <h3 className="section-circle circle-orange">6</h3>
          <h3 className="section-text-orange">Counting</h3>
        </div>
        <div className="indent">
          <p>
            When we count items in Japanese, we use different number words for
            different kinds of items, like counting people or counting books.
          </p>
          <p className="tab">
            リーさんは <span className="underline-orange">Tシャツ</span>を{" "}
            <span className="kanji">
              三枚<span className="furigana">さんまい</span>
            </span>{" "}
            <span className="kanji">
              買<span className="furigana">か</span>
            </span>
            いました。
            <br />
            <i>Lee bought three T-shirts.</i>
          </p>
          <p>
            The number word,{" "}
            <span className="kanji">
              三枚<span className="furigana">さんまい</span>
            </span>
            , is made up of the numeral{" "}
            <span className="kanji">
              三<span className="furigana">さん</span>
            </span>{" "}
            and the "counter"{" "}
            <span className="kanji">
              枚<span className="furigana">まい</span>
            </span>
            . This counter is used for sheets of paper and other flat objects.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Lesson5;
