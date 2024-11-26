import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson12() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 12: 病気 (Feeling ill)</h2>
      <section id="section1">
        <h3>12.1: ~んです</h3>
        <div className="indent">
          <p>
            There are two distinct ways to make a statement in Japanese. One is
            to report the facts as they are observed. The other, is the mode of{" "}
            <i>explaining</i> things.
          </p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>short form (verbs/adjectives/nouns) + んです</td>
              </tr>
              <tr>
                <td>= explanation in terms of the verbs/adjectives/nouns</td>
              </tr>
            </tbody>
          </table>
          <p>
            You can sound more apologetic if you offer an <i>explanation</i> of
            being late by saying んです. Compare:
          </p>
          <div className="tab table-double-column">
            <p>
              バスが
              <span className="kanji">
                来<span className="furigana">き</span>
              </span>
              ませんでした。
            </p>
            <p>
              <i>The bus didn't come.</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              バスが
              <span className="kanji">
                来<span className="furigana">こ</span>
              </span>
              なかった<span className="underline-orange">んです</span>。
            </p>
            <p>
              <i>
                (<span className="underline-orange">As it happens,</span>) the
                bus didn't come.
              </i>
            </p>
          </div>
          <p>
            んです connects a fact to another element under discussion, serving
            as a link between what happened and an explanation for it.
          </p>
          <div className="tab table-double-column">
            <p>あしたテストがあります。</p>
            <p>
              <i>I have an exam tomorrow.</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              あしたテストがる<span className="underline-orange">んです</span>。
            </p>
            <p>
              <i>I have an exam tomorrow. (So I can't go out tonight.)</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>トイレにいきたいです。</p>
            <p>
              <i>I want to go to the bathroom.</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              トイレにいきたい<span className="underline-orange">んです</span>。
            </p>
            <p>
              <i>I want to go to the bathroom. (So tell me where it is.)</i>
            </p>
          </div>
          <p>
            んです itself is invariant and does not usually appear in negative
            or past tense forms, but the predicate before it can be affirmative
            or negative, present tense or past tense.
          </p>
          <p className="tab">
            <span className="kanji">
              成績<span className="furigana">せいせき</span>
            </span>
            がよくない<span className="underline-orange">んです</span>。 (in
            reponse to the question "Why do you look so upset?")
            <br />
            <i>
              (<span className="underline-orange">As a matter of fact</span>) My
              grade is not good.
            </i>
          </p>
          <p className="tab">
            <span className="kanji">
              試験<span className="furigana">しけん</span>
            </span>
            が
            <span className="kanji">
              終<span className="furigana">お</span>
            </span>
            わった
            <span className="underline-orange">んです</span>。(explaining to a
            person who has caught you smiling)
            <br />
            <i>
              The exam is over. (
              <span className="underline-orange">That's why</span> I'm smiling.)
            </i>
          </p>
          <p>
            When it follows a noun or a な-adjective in the present tense
            affirmative, な comes in between.
          </p>
          <table className="table-list table-mini table-border-orange">
            <thead>
              <tr>
                <th></th>
                <th>report sentences</th>
                <th>explanation sentences</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>な-adjectives:</td>
                <td>
                  <span className="kanji">
                    静<span className="furigana">しず</span>
                  </span>
                  かです
                </td>
                <td>
                  <span className="kanji">
                    静<span className="furigana">しず</span>
                  </span>
                  か<span className="underline-orange">な</span>んです
                </td>
              </tr>
              <tr>
                <td>nouns:</td>
                <td>
                  <span className="kanji">
                    学<span className="furigana">がく</span>
                  </span>
                  <span className="kanji">
                    生<span className="furigana">せい</span>
                  </span>
                  です
                </td>
                <td>
                  <span className="kanji">
                    学<span className="furigana">がく</span>
                  </span>
                  <span className="kanji">
                    生<span className="furigana">せい</span>
                  </span>
                  <span className="underline-orange">な</span>んです
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Use んです in questions to invite clarifications from the person you
            are talking to. It is often used with question words, such as
            どうして (why) どうした (what has happened).
          </p>
          <p className="tab">
            A: どうして
            <span className="kanji">
              彼<span className="furigana">かれ</span>
            </span>
            と
            <span className="kanji">
              別<span className="furigana">わか</span>
            </span>
            れた<span className="underline-orange">んですか</span>。
            <br />
            <i>
              Why did you break up with your boyfriend? (You've got to tell me.)
            </i>
            B:{" "}
            <span className="kanji">
              彼<span className="furigana">かれ</span>
            </span>
            、ぜんぜんお
            <span className="kanji">
              風<span className="furigana">ふ</span>
            </span>
            <span className="kanji">
              呂<span className="furigana">る</span>
            </span>
            に
            <span className="kanji">
              入<span className="furigana">はい</span>
            </span>
            らないんです。
            <br />
            <i>
              Oh, him. He never takes a bath. (That's a good enough reason,
              isn't it?)
            </i>
          </p>
          <p className="tab">
            A: どうした<span className="underline-orange">んですか</span>。
            <br />
            <i>What happened? (You look shattered.)</i>
            B: うちの
            <span className="kanji">
              猫<span className="furigana">ねこ</span>
            </span>
            が
            <span className="kanji">
              死<span className="furigana">しん</span>
            </span>
            だんです。
            <br />
            <i>My cat died. (That should explain how I look today.)</i>
          </p>
          <p>
            You can also use んです to provide additional comment/context on
            what was just said.
          </p>
          <p className="tab">
            A: かわいいノートですね。
            <br />
            <i>That's a cute notebook.</i>
          </p>
          <p className="tab">
            B: ええ。日本んで
            <span className="kanji">
              買<span className="furigana">か</span>
            </span>
            った<span className="underline-orange">んです</span>。
            <br />
            <i>You bet. I bought it in Japan (for your information).</i>
          </p>
          <p>
            In the written language, you see のです instead of んです. It has
            the same functions but it stylistically more formal.
          </p>
        </div>
      </section>

      <section id="section2">
        <h3>12.2: ~すぎる</h3>
        <div className="indent">
          <p>
            Verb stems may be followed by the helping verb すぎる, which means
            "too much", or "excess". すぎる conjugates as a regular <i>ru</i>
            -verb.
          </p>
          <div className="tab table-double-column">
            <p className="tab">
              <span className="kanji">
                早<span className="furigana">はや</span>
              </span>
              く
              <span className="kanji">
                起<span className="furigana">お</span>
              </span>
              き<span className="underline-orange">すぎました</span>。
              <br />
            </p>
            <p>
              <i>I got up too early.</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p className="tab">
              <span className="kanji">
                食<span className="furigana">た</span>
              </span>
              べ<span className="underline-orange">すぎて</span>はいけません。
              <br />
            </p>
            <p>
              <i>You must not eat too much.</i>
            </p>
          </div>
          <p>
            すぎる can also follow い- and な-adjective bases. You drop the い
            and な at the end of the adjectives and then add すぎる.
          </p>
          <div className="tab table-double-column">
            <p className="tab">
              (
              <span className="kanji">
                高<span className="furigana">たか</span>
              </span>
              い) この
              <span className="kanji">
                本<span className="furigana">ほん</span>
              </span>
              は
              <span className="kanji">
                高<span className="furigana">たか</span>
              </span>
              すぎます。
            </p>
            <p>
              <i>This book is too expensive.</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p className="tab">
              (
              <span className="kanji">
                静<span className="furigana">しず</span>
              </span>
              かな) この
              <span className="kanji">
                町<span className="furigana">まち</span>
              </span>
              は
              <span className="kanji">
                静<span className="furigana">しず</span>
              </span>
              かすぎます。
            </p>
            <p>
              <i>This town is too quiet.</i>
            </p>
          </div>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>verb stem/adjective stem + すぎる</td>
                <td>... too much</td>
              </tr>
            </tbody>
          </table>
          <p>
            Use すぎる when something is beyond normal or proper, suggesting
            that you do not welcome it. Thus{" "}
            <span className="kanji">
              親切<span className="furigana">しんせつ</span>
            </span>
            すぎます (too kind) for example is not a straightforward compliment.
            Use modifiers like とても and すごく if you want to say that
            something is in a high degree.
          </p>
        </div>
      </section>

      <section id="section3">
        <h3>12.3: ~ほうがいいです</h3>
        <div className="indent">
          <p>
            ほうがいいです means "it is better (for you) to do ..." sentence
            which you can use to give advice. ほうがいいです follows a verb in
            the short form. You usually use the past tense of a verb with
            ほうがいいです if the verb is in the affirmative. When the advice is
            in the negative, the verb is in the <i>present</i> tense.
          </p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>verb (short, past, affirmative)</td>
                <td rowSpan="2" style={{ padding: 0 }}>
                  + ほうがいいです
                </td>
                <td>
                  <i>It is better.</i>
                </td>
              </tr>
              <tr>
                <td>verb (short, present, negative)</td>
                <td>
                  <i>It is better not ...</i>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <div className="tab table-double-column">
            <p className="tab">
              もっと
              <span className="kanji">
                野<span className="furigana">や</span>
              </span>
              <span className="kanji">
                菜<span className="furigana">さい</span>
              </span>
              を
              <span className="underline-orange">
                <span className="kanji">
                  食<span className="furigana">た</span>
                </span>
                べた
              </span>
              ほうがいいですよ。
            </p>
            <p>
              <i>You'd better eat more vegetables.</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p className="tab">
              <span className="kanji">
                授業<span className="furigana">じゅぎゅう</span>
              </span>
              を
              <span className="underline-orange">
                <span className="kanji">
                  休<span className="furigana">やす</span>
                </span>
                まない
              </span>
              ほうがいいですよ。
            </p>
            <p>
              <i>It is better not to skip classes.</i>
            </p>
          </div>
        </div>
      </section>

      <section id="section4">
        <h3>12.4: ~ので</h3>
        <div className="indent">
          <p>
            Use ので to give the reason for the situation described in the
            balance of the sentence. Semantically, ので is similar to から.
            Stylistically, ので sounds slightly more formal and is used
            extensively in the written language.
          </p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>
                  <span className="text-orange">(reason)</span> ので &nbsp;
                  <span className="text-orange">(situation)</span>。
                </td>
                <td>
                  <span className="text-orange">(situation)</span>,{" "}
                  <i>because</i> <span className="text-orange">(reason)</span>.
                </td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            いつも日本語で
            <span className="kanji">
              話<span className="furigana">はな</span>
            </span>
            す<span className="underline-orange">ので</span>
            、日本語が
            <span className="kanji">
              上手<span className="furigana">じょうず</span>
            </span>
            になりました。
            <br />
            <i>My Japanese has improved, because I always speak Japanese.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              宿題<span className="furigana">しゅくだい</span>
            </span>
            がたくさんあなった<span className="underline-orange">ので</span>
            、きのうの
            <span className="kanji">
              夜<span className="furigana">よる</span>
            </span>
            、
            <span className="kanji">
              寝<span className="furigana">ね</span>
            </span>
            ませんでした。
            <br />
            <i>I did not sleep last night, because I had a lot of homework.</i>
          </p>
          <p>
            The reason part of ので sentence is usually in a short form. When
            ので follows a な-adjective or a noun in a present tense affirmative
            clause, な comes in between, as it did with the explanatory
            predicate んです.
          </p>
          <div className="tab table-double-column">
            <p>
              その{" "}
              <span className="kanji">
                人<span className="furigana">ひと</span>
              </span>
              とはいじわる<span className="underline-orange">なので</span>
              、きらいです。
              <br />
              <i>I do not like that person, because he is mean.</i>
            </p>
            <p>(Compare: いじわるだから )</p>
          </div>
          <div className="tab table-double-column">
            <p>
              今日
              <span className="kanji">
                今日<span className="furigana">きょう</span>
              </span>
              は
              <span className="kanji">
                日<span className="furigana">にち</span>
              </span>
              <span className="kanji">
                曜<span className="furigana">よう</span>
              </span>
              <span className="kanji">
                日<span className="furigana">び</span>
              </span>
              <span className="underline-orange">なので</span>、
              <span className="kanji">
                銀<span className="furigana">ぎん</span>
              </span>
              <span className="kanji">
                行<span className="furigana">こう</span>
              </span>
              は
              <span className="kanji">
                休<span className="furigana">やす</span>
              </span>
              みです。
              <br />
              <i>Banks are closed, because today is a Sunday.</i>
            </p>
            <p>
              (Compare:{" "}
              <span className="kanji">
                日<span className="furigana">にち</span>
              </span>
              <span className="kanji">
                曜<span className="furigana">よう</span>
              </span>
              <span className="kanji">
                日<span className="furigana">び</span>
              </span>
              だから )
            </p>
          </div>
        </div>
      </section>

      <section id="section5">
        <h3>12.5: ~なければいけません / ~なきゃいけません</h3>
        <div className="indent">
          <p>
            Use なければいけません and なきゃいけません to say it is necessary
            to do something. The なければ is more formal and often seen in the
            written language. The なきゃ version is more colloquial and mainly
            found in the spoken language.
          </p>
          <p className="tab">
            <span className="kanji">
              試<span className="furigana">し</span>
            </span>
            <span className="kanji">
              験<span className="furigana">けん</span>
            </span>
            があるから、
            <span className="kanji">
              勉強<span className="furigana">べんきょう</span>
            </span>
            し<span className="underline-orange">なければいけません</span> /{" "}
            <span className="underline-orange">なきゃいけません</span>。
            <br />
            <i>I have to study, because there will be an exam.</i>
          </p>
          <p>
            なければ and なきゃ mean "if you do not do ..." and いけません
            roughly means "you cannot go". Combined, you would get the meaning
            "you cannot go not doing ...", giving a sense of the affirmative
            mandate. Because of the double negatives, drop the last い and
            replace it with ければ or きゃ.
          </p>
          <table className="table-list table-mini table-border-orange">
            <thead>
              <tr>
                <th>verb</th>
                <th>short negative</th>
                <th style={{ textAlign: "center" }}>"must"</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="kanji">
                    食<span className="furigana">た</span>
                  </span>
                  べる
                </td>
                <td>
                  <span className="kanji">
                    食<span className="furigana">た</span>
                  </span>
                  べ<span className="underline-orange">ない</span>
                </td>
                <td>
                  <span className="kanji">
                    食<span className="furigana">た</span>
                  </span>
                  べ<span className="underline-orange">なければいけません</span>{" "}
                  /{" "}
                  <span className="kanji">
                    食<span className="furigana">た</span>
                  </span>
                  べ<span className="underline-orange">なきゃいけません</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    言<span className="furigana">い</span>
                  </span>
                  う
                </td>
                <td>
                  <span className="kanji">
                    言<span className="furigana">い</span>
                  </span>
                  わ<span className="underline-orange">ない</span>
                </td>
                <td>
                  <span className="kanji">
                    言<span className="furigana">い</span>
                  </span>
                  わ<span className="underline-orange">なければいけません</span>{" "}
                  /{" "}
                  <span className="kanji">
                    言<span className="furigana">い</span>
                  </span>
                  わ<span className="underline-orange">なきゃいけません</span>
                </td>
              </tr>
              <tr>
                <td>する</td>
                <td>
                  し<span className="underline-orange">ない</span>
                </td>
                <td>
                  し<span className="underline-orange">なければいけません</span>{" "}
                  / し<span className="underline-orange">なきゃいけません</span>
                </td>
              </tr>
              <tr>
                <td>くる</td>
                <td>
                  こ<span className="underline-orange">ない</span>
                </td>
                <td>
                  こ<span className="underline-orange">なければいけません</span>{" "}
                  / こ<span className="underline-orange">なきゃいけません</span>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            You can change いけません to いけませんでした to say you{" "}
            <i>had to</i>. You can use the short form なきゃいけない in causal
            speech. You can further shorten it to なきゃ.
          </p>
          <div className="tab table-double-column">
            <p>
              <span className="kanji">
                今朝<span className="furigana">けさ</span>
              </span>
              は、
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
              き<span className="underline-orange">なきゃいけませんでした</span>
              。
              <br />
              <i>I had to get up at six this morning.</i>
            </p>
            <p>(long form, past)</p>
          </div>
          <div className="tab table-double-column">
            <p>
              <span className="kanji">
                彼<span className="furigana">かの</span>
              </span>
              <span className="kanji">
                女<span className="furigana">じょ</span>
              </span>
              が
              <span className="kanji">
                来<span className="furigana">く</span>
              </span>
              るから、
              <span className="kanji">
                部<span className="furigana">へ</span>
              </span>
              <span className="kanji">
                屋<span className="furigana">や</span>
              </span>
              を
              <span className="kanji">
                掃<span className="furigana">そう</span>
              </span>
              <span className="kanji">
                除<span className="furigana">じ</span>
              </span>
              し<span className="underline-orange">なきゃ</span> ({" "}
              <span className="underline-orange">いけない</span> )。
              <br />
              <i>I must clean the room, because my girlfriend is coming.</i>
            </p>
            <p>(short form, present)</p>
          </div>
        </div>
      </section>

      <section id="section6">
        <h3>12.6: でしょうか</h3>
        <div className="indent">
          <p>
            If you ask somebody a question they don't know the answer to, they
            may be embarassed. You can avoid awkward situations by phrasing
            questions with でしょうか, which adds politeness.
          </p>
          <p className="tab">
            A: あした、
            <span className="kanji">
              雨<span className="furigana">あめ</span>
            </span>
            が
            <span className="kanji">
              降<span className="furigana">ふ</span>
            </span>
            る<span className="underline-orange">でしょうか</span>。
            <br />
            <i>Would it rain tomorrow?</i>
          </p>
          <p className="tab">
            B:{" "}
            <span className="kanji">
              降<span className="furigana">ふ</span>
            </span>
            ると
            <span className="kanji">
              思<span className="furigana">おも</span>
            </span>
            います。
            <br />
            <i>I think it will.</i>
          </p>
          <p>
            でしょう means "<i>probably</i>". By asking でしょうか, you are
            implying that you think the listener probably has a better-informed
            opinion.
          </p>
          <p>
            でしょうか follows short form predicates. When it follow a noun or a
            な-adjective in a present tense affirmative sentence, it follows
            them without だ in between.
          </p>
          <p className="tab">
            <span className="kanji">
              来週<span className="furigana">らいしゅう</span>
            </span>
            は
            <span className="kanji">
              暖<span className="furigana">あたた</span>
            </span>
            かいでしょうか。
            <br />
            <i>Would you say that it will be warm next week?</i>
          </p>
          <p className="tab">
            トマトは
            <span className="kanji">
              野<span className="furigana">や</span>
            </span>
            <span className="kanji">
              菜<span className="furigana">さい</span>
            </span>
            でしょうか。 ( <span className="text-red">X</span>{" "}
            <span className="kanji">
              野<span className="furigana">や</span>
            </span>
            <span className="kanji">
              菜<span className="furigana">さい</span>
            </span>
            <span className="underline-orange">だ</span>でしょうか)
            <br />
            <i>Is a tomato a vegetable?</i>
          </p>
          <p className="tab">
            これ、もう
            <span className="kanji">
              話<span className="furigana">はな</span>
            </span>
            したとしようか。
            <br />
            <i>What happened? (You look shattered.)</i>
          </p>
          <p>
            Use non-interrogative でしょう to make a guess. Add たぶん in the
            sentence to signal that it's a guess.
          </p>
          <p className="tab">
            たぶなしたは
            <span className="kanji">
              寒<span className="furigana">さむ</span>
            </span>
            くないでしょう。
            <br />
            <i>I bet it will not be cold tomorrow.</i>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Lesson12;
