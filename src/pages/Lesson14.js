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
              ( not{" "}
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
              ( not{" "}
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
          <p></p>
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
