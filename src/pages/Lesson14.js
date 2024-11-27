import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson14() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 14: バレンタインデー (Valentime’s Day)</h2>
      <section id="section1">
        <h3>14.1: ほしい</h3>
        <div className="indent">
          <p>
            ほしい means to want something. ほしい follows the い-adjective
            conjugation pattern. The object of desire is usually followed by the
            particle が. In negative sentences, the particle は is also used.
          </p>
          <p className="tab">
            いい
            <span className="kanji">
              成<span className="furigana">せい</span>
            </span>
            <span className="kanji">
              績<span className="furigana">せき</span>
            </span>
            がほしいです。
            <br />
            <i>I want a good grade.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              子<span className="furigana">こ</span>
            </span>
            <span className="kanji">
              月<span className="furigana">ども</span>
            </span>
            子の
            <span className="kanji">
              時<span className="furigana">とき</span>
            </span>
            、ポケモンのゲームがほしかったです。
            <br />
            <i>When I was young, I wanted a Pokémon game.</i>
          </p>
          <div className="tab table-double-column">
            <p>Q : プレゼントがほしい？</p>
            <p>
              <i>Do you want a present?</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>A : ううん、ほしくない。</p>
            <p>
              <i>No, I don't.</i>
            </p>
          </div>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td>
                  （
                  <span className="kanji">
                    私<span className="furigana">わたし</span>
                  </span>
                  は）X が　ほしい
                </td>
                <td>
                  <i>I want X.</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            ほしい is like たい (I want to do...), and its use is mostly limited
            to the first person, the speaker. We can say ほしい to say "I want
            this", but not someone else like "Mary wants that". To talk about
            someone else's wishes or desires, you either quote that person's
            expression of desire, or describe it as your guess.
          </p>
          <p className="tab">
            ヤスミンさんは
            <span className="kanji">
              新<span className="furigana">あたら</span>
            </span>
            しいスマホがほしい
            <span className="underline-green">
              と
              <span className="kanji">
                言<span className="furigana">い</span>
              </span>
              っています
            </span>
            。
            <br />
            <i>Yasmin says she wants a new phone.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              亜<span className="furigana">あ</span>
            </span>
            <span className="kanji">
              美<span className="furigana">み</span>
            </span>
            さんはぬいぐるみがほしくない
            <span className="underline-green">でしょう</span>。
            <br />
            <i>Ami probably doesn't want a stuffed animal.</i>
          </p>
          <p>
            You can replace ほしい with the derived verb ほしがる, which
            indivates that you can tell by the way the person acts that they
            want something. ほしがる conjugates as an <i>u</i>-verb and is
            usually used in the form ほしがっている. Unlike ほしい, the particle
            after the object of desire is を.
          </p>
          <p className="tab">
            ななみさんは
            <span className="kanji">
              英<span className="furigana">えい</span>
            </span>
            <span className="kanji">
              語<span className="furigana">ご</span>
            </span>
            を
            <span className="underline-green">
              <span className="kanji">
                習<span className="furigana">なら</span>
              </span>
              いたがって
            </span>
            います。
            <span style={{ paddingLeft: "2em" }}>
              &lt;{" "}
              <span className="kanji">
                習<span className="furigana">なら</span>
              </span>
              いたい
            </span>
            <br />
            <i>(I understand that) Nanami wants to study English.</i>
          </p>
          <p className="tab">
            カルロスさんは
            <span className="kanji">
              友<span className="furigana">とも</span>
            </span>
            <span className="kanji">
              達<span className="furigana">だち</span>
            </span>
            を<span className="underline-green">ほしがって</span>います。
            <span style={{ paddingLeft: "2em" }}>&lt; ほしい</span>
            <br />
            <i>(I understand that) Carlos wants a friend.</i>
          </p>
          <p>
            Because the core meaning of ほしい is "desire to possess", when you
            can use a verb + たい instead of ほしい, you should use the verb.
          </p>
          <div className="tab table-double-column">
            <p>
              <span className="kanji">
                昼<span className="furigana">ひる</span>
              </span>
              ご
              <span className="kanji">
                飯<span className="furigana">はん</span>
              </span>
              が
              <span className="kanji">
                食<span className="furigana">た</span>
              </span>
              べたい。
            </p>
            <p>
              ( <i>not</i>{" "}
              <span className="kanji">
                昼<span className="furigana">ひる</span>
              </span>
              ご
              <span className="kanji">
                飯<span className="furigana">はん</span>
              </span>
              がほしい )
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              <span className="kanji">
                旅<span className="furigana">りょ</span>
              </span>
              <span className="kanji">
                行<span className="furigana">こう</span>
              </span>
              に行きたい
            </p>
            <p>
              ( <i>not</i>{" "}
              <span className="kanji">
                旅<span className="furigana">りょ</span>
              </span>
              <span className="kanji">
                行<span className="furigana">こう</span>
              </span>
              がほしい )
            </p>
          </div>
        </div>
      </section>

      <section id="section2">
        <h3>14.2: ~かもしれません</h3>
        <div className="indent">
          <p>
            かもしれません means that something is a "possibility". When you
            think that something <i>may be</i> the case. When you say
            かもしれません, you are not sure about the state of affairs than
            when you say でしょう. In casual speech, you could say かもしれない
            or かも.
          </p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td>short form + かもしれません</td>
                <td>
                  <i>Maybe ...</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            You can add かもしれません to the short forms of predicates, in the
            affirmative and in the negative, in the present as well as the past
            tense.
          </p>
          <p className="tab">
            あしたは
            <span className="kanji">
              雨<span className="furigana">あめ</span>
            </span>
            が
            <span className="kanji">
              降<span className="furigana">ふ</span>
            </span>
            るかもしれません。
            <br />
            <i>It may rain tomorrow.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              田<span className="furigana">た</span>
            </span>
            <span className="kanji">
              中<span className="furigana">なか</span>
            </span>
            さんより、
            <span className="kanji">
              鈴<span className="furigana">すず</span>
            </span>
            <span className="kanji">
              木<span className="furigana">き</span>
            </span>
            さんのほうが
            <span className="kanji">
              背<span className="furigana">せ</span>
            </span>
            が
            <span className="kanji">
              高<span className="furigana">たか</span>
            </span>
            いかもしれない。
            <br />
            <i>Suzuki is perhaps taller than Tanaka.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              明日<span className="furigana">あした</span>
            </span>
            は
            <span className="kanji">
              天<span className="furigana">てん</span>
            </span>
            <span className="kanji">
              気<span className="furigana">き</span>
            </span>
            がよくないかも。
            <br />
            <i>The weather may not be good tomorrow.</i>
          </p>
          <p className="tab">
            ロバートさんは、
            <span className="kanji">
              子<span className="furigana">こ</span>
            </span>
            <span className="kanji">
              供<span className="furigana">ども</span>
            </span>
            の
            <span className="kanji">
              時<span className="furigana">とき</span>
            </span>
            、いじわるだったかもしれません。
            <br />
            <i>Robert may have been a bully when he was a kid.</i>
          </p>
          <p>
            When the last part of a sentence is a noun or a な-adjective in the
            present tense, put かもしれません directly after that noun or
            な-adjective. だ is dropped in the sentences.
          </p>
          <div className="tab table-triple-column">
            <p>
              ウデイさんはインド
              <span className="kanji">
                人<span className="furigana">じん</span>
              </span>
              <span className="underline-green">だ</span>。
              <br />
              <i>Uday is an Indian.</i>
            </p>
            <p>→</p>
            <p>
              ウデイさんはインド
              <span className="kanji">
                人<span className="furigana">じん</span>
              </span>
              <span className="underline-green">かもしれません</span>。
              <br />
              <i>Uday may be an Indian.</i>
            </p>
          </div>
          <div className="tab table-triple-column">
            <p>
              <span className="kanji">
                山<span className="furigana">やま</span>
              </span>
              <span className="kanji">
                下<span className="furigana">した</span>
              </span>
              <span className="kanji">
                先<span className="furigana">せん</span>
              </span>
              <span className="kanji">
                生<span className="furigana">せい</span>
              </span>
              は
              <span className="kanji">
                犬<span className="furigana">いぬ</span>
              </span>
              がきらい<span className="underline-green">だ</span>。
              <br />
              <i>Professor Yamashita doesn't like dogs.</i>
            </p>
            <p>→</p>
            <p>
              <span className="kanji">
                山<span className="furigana">やま</span>
              </span>
              <span className="kanji">
                下<span className="furigana">した</span>
              </span>
              <span className="kanji">
                先<span className="furigana">せん</span>
              </span>
              <span className="kanji">
                生<span className="furigana">せい</span>
              </span>
              は
              <span className="kanji">
                犬<span className="furigana">いぬ</span>
              </span>
              がきらい<span className="underline-green">かもしれません</span>。
              <br />
              <i>Professor Yamashita may not like dogs.</i>
            </p>
          </div>
        </div>
      </section>

      <section id="section3">
        <h3>14.3: あげる / くれる / もらう</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section4">
        <h3>14.4: たらどうですか</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section5">
        <h3>14.5: Number + も / Number + しか + Negative</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Lesson14;
