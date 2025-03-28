import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson11() {
  useSmoothScrollToSection();

  return (
    <div>
      <div className="lesson-header">
        <h2 className="lesson-title background-orange">Lesson 11</h2>
        <h2 className="lesson-title-orange">
          <span className="kanji">
            休<span className="furigana">やす</span>
          </span>
          みのあと (After the Vacation)
        </h2>
      </div>

      <section id="section1">
        <div className="section-header">
          <h3 className="section-circle circle-orange">1</h3>
          <h3 className="section-text-orange">～たい</h3>
        </div>
        <div className="indent">
          <p>
            Use a verb stem (before ます) + たいです to describe hope or
            aspiration.
          </p>
          <p className="tab">
            <span className="kanji">
              今<span className="furigana">こん</span>
            </span>
            <span className="kanji">
              度<span className="furigana">ど</span>
            </span>
            の
            <span className="kanji">
              週末<span className="furigana">しゅうまつ</span>
            </span>
            は、
            <span className="kanji">
              映<span className="furigana">いえ</span>
            </span>
            <span className="kanji">
              画<span className="furigana">が</span>
            </span>
            を
            <span className="kanji">
              見<span className="furigana">み</span>
            </span>
            <span className="underline-orange">たい</span>です。
            <br />
            <i>I want to see a film this weekend.</i>
          </p>
          <p className="tab">
            いつか
            <span className="kanji">
              中国<span className="furigana">ちゅうごく</span>
            </span>
            に
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            き<span className="underline-orange">たい</span>です。
            <br />
            <i>I want to go to China someday.</i>
          </p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>verb stem + たいです</td>
                <td>
                  <i>I want to do ...</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            A verb that usually takes the particle を can either have the
            particle を or が when it is followed by たい. Particles other than
            を remain the same, like に.
          </p>
          <p>
            たい conjugates as an い-adjective. Examples of negative and past
            tense:
          </p>
          <p className="tab">
            あの
            <span className="kanji">
              人<span className="furigana">ひと</span>
            </span>
            には
            <span className="kanji">
              会<span className="furigana">あ</span>
            </span>
            い<span className="underline-orange">たくないです</span>。
            <br />
            <i>I don't want to see that person.</i>
          </p>
          <p className="tab">
            お
            <span className="kanji">
              弁当<span className="furigana">べんとう</span>
            </span>
            か
            <span className="kanji">
              買<span className="furigana">か</span>
            </span>
            い<span className="underline-orange">たかった</span>から、コンビニに
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            きました。
            <br />
            <i>
              I went to a convenience store, because I wanted to buy a boxed
              lunch.
            </i>
          </p>
          <p>
            If you wanted something for some time, you can use たい
            <span className="kanji">
              思<span className="furigana">とも</span>
            </span>
            っています instead of たいです.
          </p>
          <p className="tab">
            <span className="kanji">
              留学<span className="furigana">りゅうがく</span>
            </span>
            し
            <span className="underline-orange">
              たいと
              <span className="kanji">
                思<span className="furigana">とも</span>
              </span>
              っています
            </span>
            。
            <br />
            <i>I've wanted to study abroad.</i>
          </p>
          <p>
            You do not use たいです to describe wishes held by others.
            Somebody's else' wants or wishes are usually in quotations,
            observations, or guesses. If you want to say that somebody other
            than you wants to do something, use と
            <span className="kanji">
              言<span className="furigana">い</span>
            </span>
            っていました with たい.
          </p>
          <p className="tab">
            メアリーさんはチベットに
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            き
            <span className="underline-orange">
              たい
              <span className="kanji">
                言<span className="furigana">い</span>
              </span>
              っていました
            </span>
            。
            <br />
            <i>Mary said she wanted to go to Tibet.</i>
          </p>
          <p>
            To describe your observation that somebody wants to do something,
            you use a special verb たがっている instead of たい. If a verb takes
            the particle を, the derived verb がっている will retain を, unlike
            たい.
          </p>
          <p className="tab">
            メアリーさんは
            <span className="kanji">
              着<span className="furigana">き</span>
            </span>
            <span className="kanji">
              物<span className="furigana">もの</span>
            </span>
            <span className="underline-orange">を</span>
            <span className="kanji">
              着<span className="furigana">き</span>
            </span>
            <span className="underline-orange">たがっています</span>
            。
            <br />
            <i>(It seems) Mary wants to wear a kimono.</i>
          </p>
          <p>
            The verb たがっている, which comes from the dictionary form たがる,
            indicates "I think that she wants to, because of the way she is
            behaving."
          </p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>
                  <i>I want to ... / Do you want to ... ?</i>
                </td>
                <td>
                  <i>They want to ...</i>
                </td>
              </tr>
              <tr>
                <td>• verb stem + たいです</td>
                <td>
                  <i>• verb stem + たがっています</i>
                </td>
              </tr>
              <tr>
                <td>• たい conjugates as an い-adjective</td>
                <td>
                  <i>• たがる conjugates as an u-verb</i>
                </td>
              </tr>
              <tr>
                <td>• が or を for direct object</td>
                <td>
                  <i>• を only</i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section2">
        <div className="section-header">
          <h3 className="section-circle circle-orange">2</h3>
          <h3 className="section-text-orange">～たり～たりする</h3>
        </div>
        <div className="indent">
          <p>
            We know that <i>te</i>-form connects two clauses together:
          </p>
          <p className="tab">
            <span className="kanji">
              大阪<span className="furigana">おおさか</span>
            </span>
            で
            <span className="kanji">
              買<span className="furigana">か</span>
            </span>
            い
            <span className="kanji">
              物<span className="furigana">もの</span>
            </span>
            をし
            <span className="underline-orange">て</span>、
            <span className="kanji">
              晩<span className="furigana">ばん</span>
            </span>
            ご
            <span className="kanji">
              飯<span className="furigana">はん</span>
            </span>
            を
            <span className="kanji">
              食<span className="furigana">た</span>
            </span>
            べます。
            <br />
            <i>In Osaka, I will do some shopping and eat dinner.</i>
          </p>
          <p>
            However, this only suggests that shopping and inner are the only
            activities planned and that those two activities will be done in
            that order. To avoid such implications and only want to mention
            activities or events as <i>examples</i>, and in <i>no set order</i>,
            use a special predicate form ～たり～たりする.
          </p>
          <p className="tab">
            <span className="kanji">
              大阪<span className="furigana">おおさか</span>
            </span>
            で
            <span className="kanji">
              買<span className="furigana">か</span>
            </span>
            い
            <span className="kanji">
              物<span className="furigana">もの</span>
            </span>
            をし
            <span className="underline-orange">たり</span>、
            <span className="kanji">
              晩<span className="furigana">ばん</span>
            </span>
            ご
            <span className="kanji">
              飯<span className="furigana">はん</span>
            </span>
            を
            <span className="kanji">
              食<span className="furigana">た</span>
            </span>
            べたりします。
            <br />
            <i>
              In Osaka, I will{" "}
              <span className="underline-orange">do such things as</span>{" "}
              shopping <span className="underline-orange">and</span> eating
              dinner.
            </i>
          </p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>verb (short, past) + り、verb (short, past) + り</td>
              </tr>
              <tr>
                <td>
                  <i>do such things as this and that</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            To get たり form of a predicate (such as したり and 食べたり), add
            り to the past tense short form of a predicate (した and 食べた).
            The helping verb する at the end of the sentence indicates the tense
            of the sentence.
          </p>
          <p className="tab">
            <span className="kanji">
              週末<span className="furigana">しゅうまつ</span>
            </span>
            は
            <span className="kanji">
              勉強<span className="furigana">べんきょう</span>
            </span>
            したり、
            <span className="kanji">
              友<span className="furigana">とも</span>
            </span>
            だちと
            <span className="kanji">
              話<span className="furigana">はな</span>
            </span>
            したり<span className="underline-orange">しました</span>。
            <br />
            <i>
              I studied and talked with my friends, among other things, over the
              weekend.
            </i>
          </p>
          <p className="tab">
            <span className="kanji">
              踊<span className="furigana">おど</span>
            </span>
            ったり、
            <span className="kanji">
              音楽<span className="furigana">おんがく</span>
            </span>
            を
            <span className="kanji">
              聞<span className="furigana">き</span>
            </span>
            いたり<span className="underline-orange">する</span>のが好きです。
            <br />
            <i>I like dancing, listening to music, and so forth.</i>
          </p>
        </div>
      </section>

      <section id="section3">
        <div className="section-header">
          <h3 className="section-circle circle-orange">3</h3>
          <h3 className="section-text-orange">～ことがある</h3>
        </div>
        <div className="indent">
          <p>
            The past tense short form of a verb + ことがある describes that you
            did something, or something happened.
          </p>
          <p className="tab">
            <span className="kanji">
              富<span className="furigana">ふ</span>
            </span>
            <span className="kanji">
              富<span className="furigana">じ</span>
            </span>
            <span className="kanji">
              山<span className="furigana">さん</span>
            </span>
            に
            <span className="kanji">
              登<span className="furigana">のぼ</span>
            </span>
            った<span className="underline-orange">ことがあります</span>。
            <br />
            <i>I have had the experience of climbing Mt. Fuji.</i>
          </p>
          <p className="tab">
            たけしさんは
            <span className="kanji">
              授業<span className="furigana">じゅぎょう</span>
            </span>
            を
            <span className="kanji">
              休<span className="furigana">やす</span>
            </span>
            んだ<span className="underline-orange">ことがありません</span>。
            <br />
            <i>Takeshi has never been absent from classes (in his life).</i>
          </p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>verb (short, past, affirmative) + ことがある</td>
                <td>
                  <i>have the experience of ...</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            If someone asks you a question using ことがありますか, you can reply
            あります/ありません or repeat the whole verbal complex but not
            ことがあります without a verb.
          </p>
          <p className="tab">
            A: ヨーロッパに
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            った<span className="underline-orange">ことがありますか</span>。
            <br />
            <i>Have you ever been to Europe?</i>
          </p>
          <p className="tab">
            B: はい、
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            ったことがあります。
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;はい、あります。
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;(<span className="text-red"> ✕</span>{" "}
            はい、ことがあります。)
            <br />
            <i>Yes, I have.</i>
          </p>
        </div>
      </section>

      <section id="section4">
        <div className="section-header">
          <h3 className="section-circle circle-orange">4</h3>
          <h3 className="section-text-orange">Noun A や Noun B</h3>
        </div>
        <div className="indent">
          <p>
            や connects two nouns like と. や suggests that things referred to
            are proposed as examples, much like たり. Think of や as in etc.
          </p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>A や B</td>
                <td>
                  <i>A and B, for example</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            <span className="kanji">
              京都<span className="furigana">きょうと</span>
            </span>
            や
            <span className="kanji">
              奈<span className="furigana">な</span>
            </span>
            <span className="kanji">
              良<span className="furigana">ら</span>
            </span>
            に
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            きました。
            <br />
            <i>
              I went to Kyoto and Nara (for example, and may have visited other
              places as well).
            </i>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Lesson11;
