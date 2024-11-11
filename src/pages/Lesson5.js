import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson5() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 5: 沖縄旅行 (A Trip to Okinawa)</h2>
      <section id="section1">
        <h3>5.1: Adjectives (Present Tense)</h3>
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
          <table className="table-list">
            <thead>
              <tr>
                <th colSpan="3" className="table-header">
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
                  It is cold.
                </td>
                <td>
                  さむ<span className="underline-orange">くないです</span>
                  <br />
                  It is not cold.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>な-adjectives</strong>
                  <br />
                  <span className="text-orange">e.g.</span> 元気 (な)
                </td>
                <td>
                  元気<span className="underline-orange">です</span>
                  <br />
                  She is healthy.
                </td>
                <td>
                  元気<span className="underline-orange">じゃないです</span>
                  <br />
                  She is not healthy.
                </td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            A: その本は面白いですか。
            <br />
            Is that book interesting?
          </p>
          <p className="tab">
            B: いいえ, あまりおもしろくないです。
            <br />
            No, it is not very interesting.
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
          <table className="table-list">
            <thead>
              <tr>
                <th colSpan="3" className="table-header">
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
            If you want to say things like "very hot", and "a littlehot", you
            can add "degree adverbs" like すごく (extremely), とても (very) and
            ちょっと (a little; slightly) before adjectives.
          </p>
          <p className="tab">
            沖縄の海は<span className="underline-orange">とても</span>
            きれいです。
            <br />
            The sea is very beautiful in Okinawa.
          </p>
          <p className="tab">
            この部屋は<span className="underline-orange">ちょっと</span>
            暑いです。
            <br />
            This room is a little hot.
          </p>
        </div>
      </section>

      <section id="section2">
        <h3>5.2: Adjectives (Past Tense)</h3>
        <div className="indent">
          <p>
            With い-adjectives, you change the last い to かったです in the
            affirmative. In the negative, you only need to cdhange the present
            tense くない to くなかったです.
          </p>
          <table className="table-list">
            <thead>
              <tr>
                <th colSpan="3" className="table-header">
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
                  It was cold.
                </td>
                <td>
                  さむ<span className="underline-orange">くなかったです</span>
                  <br />
                  It was not cold.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>な-adjectives</strong>
                  <br />
                  <span className="text-orange">e.g.</span> 元気 (な)
                </td>
                <td>
                  元気<span className="underline-orange">でした</span>
                  <br />
                  She was healthy.
                </td>
                <td>
                  元気<span className="underline-orange">じゃなかったです</span>
                  <br />
                  She was not healthy.
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            The い-adjective いい (good) is again irregular. Its first syllable
            is changed to よ.
          </p>
          <table className="table-list">
            <thead>
              <tr>
                <th colSpan="3" className="table-header">
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
        <h3>5.3: Adjectives (Noun Modification)</h3>
        <div className="indent">
          <p>
            You can use い- and な-adjectives to modify nouns. Place the
            dictionary form of an い-adjective before the noun you want to
            modify. With な-adjectives, place the missing な of the
            corresponding noun before です.
          </p>
          <table className="table-list table-mini">
            <tbody>
              <tr>
                <td>い-adjectives:</td>
                <td>おもしろい映画</td>
                <td>
                  <i>an interesting movie</i>
                </td>
              </tr>
              <tr>
                <td>な-adjectives:</td>
                <td>きれいな写真</td>
                <td>
                  <i>a beautiful picture</i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section4">
        <h3>5.4: 好き (な) / きらい (な)</h3>
        <div className="indent">
          <p>
            Some Japanese adjectives are like verbs in English, and they take a
            subject and an object. For example, 好き (な) (to be fond of; to
            like), and きらい (な) (to be disgusted with; to dislike) are
            examples. You can make 私は will be the subject and the object of
            your affection will be Y が.
          </p>
          <table className="table-list table-mini">
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
            If you like ro dislike something (or somebody) a lot, you can use
            the intensidifed forms of 好きです and きらいです, by adjusting to
            大好きです (like a lot) and 大きらいです (hate), which are more
            often used than the degree modifier とても.
          </p>
          <p className="tab">
            たけしさんはコーヒーが大好きです。
            <br />
            Takeshi likes coffee a lot.
          </p>
          <p>
            If you want to be neutral and say that you neither like or dislike
            something, you can say the following:
          </p>
          <p className="tab">
            好きでもきらいでもないです。
            <br />I neither like nor dislike (it).
          </p>
          <p>
            You can use 好きな and きらいな as modifiers of nouns. For example:
          </p>
          <p className="tab">
            これは<span className="underline-orange">私の好な</span>本です。
            <br />
            This is <span className="underline-orange">my favorite</span> book.
          </p>
        </div>
      </section>

      <section id="section5">
        <h3>5.5: ~ましょう / ~ましょうか</h3>
        <div className="indent">
          <p>
            Take a long form of a verb and replace the ます ending with ましょう
            or ましょうか and you will get the Japanese expression for
            "let's...", which you can use to suggest a plan of action.
          </p>
          <p className="tab">
            一緒に図書館で勉強しましょう。
            <br />
            Let's study in the library together.
          </p>
        </div>
      </section>

      <section id="section6">
        <h3>5.6: Counting</h3>
        <div className="indent">
          <p>
            When we count items in Japanese, we use different number words for
            different kinds of items, like counting people or counting books.
          </p>
          <p className="tab">
            リーさんは Tシャツを三枚買いました。
            <br />
            Lee bought three T-shirts.
          </p>
          <p>
            The number word, 三枚 (san mai), is made up of the numeral 三 and
            the "counter" 枚. This counter is used for sheets of paper and other
            flat objects.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Lesson5;
