import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson10() {
  useSmoothScrollToSection();

  return (
    <div>
      <div className="lesson-header">
        <h2 className="lesson-title background-orange">Lesson 10</h2>
        <h2 className="lesson-title-orange">
          <span className="kanji">
            冬<span className="furigana">ふゆ</span>
          </span>
          <span className="kanji">
            休<span className="furigana">やす</span>
          </span>
          みの
          <span className="kanji">
            予<span className="furigana">よ</span>
          </span>
          <span className="kanji">
            定<span className="furigana">てい</span>
          </span>{" "}
          (Winter Vacations Plans)
        </h2>
      </div>

      <section id="section1">
        <h3>10.1: Comparison between Two Items</h3>
        <div className="indent">
          <p>
            In Japanese, adjectives do not change form in comparative sentences,
            meaning there is no alteration as in "great/greater".
          </p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>
                  A <span className="underline-orange">のほうが</span>
                </td>
                <td>
                  B <span>より</span> (property)。
                </td>
                <td>=</td>
                <td>
                  <i>
                    A <span className="underline-orange">is more</span>{" "}
                    (property) <span className="underline-orange">than</span> B
                  </i>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            <span className="kanji">
              中国<span className="furigana">ちゅうごく</span>
            </span>
            <span className="underline-orange">のほうが</span>
            <span className="kanji">
              日<span className="furigana">に</span>
            </span>
            <span className="kanji">
              本<span className="furigana">ほん</span>
            </span>
            <span className="underline-orange">より</span>
            <span className="kanji">
              大<span className="furigana">おお</span>
            </span>
            きいです。
            <br />
            <i>China is larger than Japan.</i>
          </p>
          <p>If you want to ask a question comparing two items:</p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>A と B と どちらのほう / どっちのほうが (property)。</td>
              </tr>
              <tr>
                <td style={{ textAlign: "right" }}>
                  <i>= Between A and B, which is more (property)?</i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section2">
        <h3>10.2: Comparison among Three or More Items</h3>
        <div className="indent">
          <p>
            In comparing three or more items, the degree qualifier いちばん is
            used.
          </p>
          <p className="tab">
            <span className="kanji">
              一<span className="furigana">いち</span>
            </span>
            <span className="kanji">
              番<span className="furigana">ばん</span>
            </span>{" "}
            = number one; first
          </p>
          <p className="tab">
            <span className="kanji">
              中<span className="furigana">なか</span>
            </span>{" "}
            = inside; interior
          </p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>[ A と B と C ]</td>
                <td>
                  <span className="underline-orange">
                    の
                    <span className="kanji">
                      中<span className="furigana">なか</span>
                    </span>
                    で
                  </span>{" "}
                  A <span className="underline-orange">がいちばん</span>{" "}
                  (property)。
                </td>
              </tr>
              <tr>
                <td colSpan="2" style={{ textAlign: "right" }}>
                  <i>
                    = <span className="underline-orange">A is</span> the most
                    (property) [<span className="underline-orange">among</span>{" "}
                    the group of items].
                  </i>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            A: カナダとフランスと
            <span className="kanji">
              日<span className="furigana">に</span>
            </span>
            <span className="kanji">
              本<span className="furigana">ほん</span>
            </span>
            <span className="underline-orange">
              の
              <span className="kanji">
                中<span className="furigana">なか</span>
              </span>
              で
            </span>
            、どこが<span className="underline-orange">いちばん</span>
            <span className="kanji">
              寒<span className="furigana">さむ</span>
            </span>
            いですか?
            <br />
            <i>
              Among Canada, France, and Japan, which country has the coldest
              climate?
            </i>
          </p>
          <p className="tab">
            B: カナダが
            <span className="underline-orange">いちばん</span>
            <span className="kanji">
              寒<span className="furigana">さむ</span>
            </span>
            いと
            <span className="kanji">
              思<span className="furigana">おも</span>
            </span>
            います。
            <br />
            <i>Canada is the coldest, I think.</i>
          </p>
          <p>
            Note that the words のほう and どっち are not used in statements of
            comparison among three or more items. Normal question words like
            だれ, どれ,{" "}
            <span className="kanji">
              何<span className="furigana">なに</span>
            </span>
            , いつ, and どこ are used instead.
          </p>
        </div>
      </section>

      <section id="section3">
        <h3>10.3: Adjective/Noun + の</h3>
        <div className="indent">
          <p>
            When a noun follows an adjective, and it's clear what the context
            is, you can replace the noun with the indefinite の, "one", to avoid
            repetition. の mostly stands for things, not people.
          </p>
          <p className="tab">
            <span className="kanji">
              私<span className="furigana">わたし</span>
            </span>
            は
            <span className="kanji">
              黒<span className="furigana">くろ</span>
            </span>
            い<span className="underline-orange">セーター</span>を
            <span className="kanji">
              持<span className="furigana">も</span>
            </span>
            っています。
            <span className="kanji">
              赤<span className="furigana">あか</span>
            </span>
            い<span className="underline-orange">の</span>
            <span className="kanji">
              持<span className="furigana">も</span>
            </span>
            っています。（の = セーター）
            <br />
            <i>I have a black sweater. I have a red one, too.</i>
          </p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td style={{ paddingRight: 0 }}>い-adjective</td>
                <td style={{ paddingLeft: "15px" }} rowSpan="2">
                  + <span className="underline-orange">noun</span>
                </td>
                <td rowSpan="2">→</td>
                <td style={{ paddingRight: 0 }}>い-adjective</td>
                <td style={{ paddingLeft: "15px" }} rowSpan="2">
                  + <span className="underline-orange">の</span>
                </td>
              </tr>
              <tr>
                <td style={{ paddingRight: 0 }}>な-adjective</td>
                <td style={{ paddingRight: 0 }}>な-adjective</td>
              </tr>
            </tbody>
          </table>
          <p>
            You can also use の in the sense of "mine", "yours", and so forth,
            referring to things owned by a person, or characterized by a place
            name.
          </p>
          <div className="tab table-double-column">
            <p>
              A: これはソラさんの
              <span className="underline-orange">かばん</span>ですか？
            </p>
            <p>
              <i>Is this Sora's bag?</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              B:いいえ、それはメアリーさんの
              <span className="strikethrough-orange">かばん</span>
              です。
            </p>
            <p>
              <i>No, that is Mary's.</i>
            </p>
          </div>
          <p className="tab">
            アメリカの
            <span className="underline-orange">
              <span className="kanji">
                車<span className="furigana">くるま</span>
              </span>
            </span>
            のほうがに
            <span className="kanji">
              日<span className="furigana">に</span>
            </span>
            <span className="kanji">
              本<span className="furigana">ほん</span>
            </span>
            の
            <span className="kanji">
              <span className="strikethrough-orange">車</span>
              <span className="furigana">くるま</span>
            </span>
            より
            <span className="kanji">
              大<span className="furigana">おお</span>
            </span>
            きいです。
            <br />
            <i>American cars are larger than Japanese ones.</i>
          </p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>
                  noun<sub>1</sub> の noun<sub>2</sub>
                </td>
                <td className="arrow-right">→</td>
                <td>
                  noun<sub>1</sub> の{" "}
                  <span className="strikethrough-orange">
                    noun<sub>2</sub>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section4">
        <h3>10.4: ～つもりだ</h3>
        <div className="indent">
          <p>
            つもり follows verbs in the present tense short forms to desribe
            what a person is planning to do in the future. You can also use a
            verb in the negative plus つもり to describe what you are planning{" "}
            <i>not</i> to do, or what you do <i>not</i> intend to do.
          </p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>verb (short, present) + つもりだ</td>
                <td>
                  <i>(I) intend to do ...</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            （
            <span className="kanji">
              私<span className="furigana">わたし</span>
            </span>
            は）
            <span className="kanji">
              週末<span className="furigana">しゅうまつ</span>
            </span>
            にたけしさんとテニスをする
            <span className="underline-orange">つもりです</span>。
            <br />
            <i>I intend to play tennis with Takeshi this weekend.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              山下<span className="furigana">やました</span>
            </span>
            <span className="kanji">
              先生<span className="furigana">せんせい</span>
            </span>
            はあした
            <span className="kanji">
              大学<span className="furigana">だいがく</span>
            </span>
            に
            <span className="kanji">
              来<span className="furigana">こ</span>
            </span>
            <span className="underline-orange">ない</span>
            <span className="underline-orange">つもりです</span>。
            <br />
            <i>
              Professor Yamashita does not intend to come to school tomorrow.
            </i>
          </p>
          <p>
            You can also use the past tense to talk about your original
            intention.
          </p>
          <p className="tab">
            お
            <span className="kanji">
              寺<span className="furigana">てら</span>
            </span>
            を
            <span className="kanji">
              見<span className="furigana">み</span>
            </span>
            に
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            く<span className="underline-orange">つもりでした</span>
            が、
            <span className="kanji">
              天<span className="furigana">てん</span>
            </span>
            <span className="kanji">
              気<span className="furigana">き</span>
            </span>
            がよくなかったから、
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            きませんでした。
            <br />
            <i>
              We were planning to visit a temple, but we didn't, because the
              weather was not good.
            </i>
          </p>
        </div>
      </section>

      <section id="section5">
        <h3>10.5: Adjective + なる</h3>
        <div className="indent">
          <p>
            The verb なる means "to become", indicating a change. なる follows
            nouns and both types of adjectives.
          </p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>い-adjectives:</td>
                <td>
                  <span className="kanji">
                    暖<span className="furigana">あたた</span>
                  </span>
                  か<span className="underline-orange">い</span>
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    暖<span className="furigana">あたた</span>
                  </span>
                  か<span className="underline-orange">くなる</span>
                </td>
                <td>
                  <i>to become warm/warmer</i>
                </td>
              </tr>
              <tr>
                <td>な-adjectives:</td>
                <td>
                  <span className="kanji">
                    静<span className="furigana">しず</span>
                  </span>
                  か (な)
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    静<span className="furigana">しず</span>
                  </span>
                  か<span className="underline-orange">になる</span>
                </td>
                <td>
                  <i>to become quiet/quieter</i>
                </td>
              </tr>
              <tr>
                <td>nouns:</td>
                <td>
                  <span className="kanji">
                    会社員<span className="furigana">かいしゃいん</span>
                  </span>
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    会社員<span className="furigana">かいしゃいん</span>
                  </span>
                  <span className="underline-orange">になる</span>
                </td>
                <td>
                  <i>to become a company employee</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            <span className="kanji">
              日<span className="furigana">に</span>
            </span>
            <span className="kanji">
              本<span className="furigana">ほん</span>
            </span>
            <span className="kanji">
              語<span className="furigana">ご</span>
            </span>
            の
            <span className="kanji">
              勉強<span className="furigana">べんきょう</span>
            </span>
            が
            <span className="kanji">
              楽<span className="furigana">たの</span>
            </span>
            しくなりました。
            <br />
            <i>
              Studying the Japanese language is fun now (though it was like
              torture before).
            </i>
          </p>
          <p>With い-adjectives, the final い is dropped and く is added.</p>
          <p>
            When you use an adjective with なる, you may be describing an
            absolute change (e.g., "it has become warm; it is not cold anymore")
            or a relative change (e.g., "it has become warmer, but it is still
            cold").Use the pattern for comparison with なる if you want to talk
            in relative terms.
          </p>
          <p className="tab">
            メアリーさんは
            <span className="underline-orange">
              <span className="kanji">
                前<span className="furigana">まえ</span>
              </span>
              より
            </span>
            <span className="kanji">
              日<span className="furigana">に</span>
            </span>
            <span className="kanji">
              本<span className="furigana">ほん</span>
            </span>
            <span className="kanji">
              語<span className="furigana">ご</span>
            </span>
            が
            <span className="kanji">
              上手<span className="furigana">じょうず</span>
            </span>
            になりました。
            <br />
            <i>
              Mary has become better in Japanese{" "}
              <span className="underline-orange">than before</span>.
            </i>
          </p>
        </div>
      </section>

      <section id="section6">
        <h3>10.6: どこかに / どこにも</h3>
        <div className="indent">
          <table className="table-list table-mini">
            <tbody>
              <tr>
                <td style={{ paddingRight: "10px", paddingLeft: "10px" }}>
                  <i>something</i>
                </td>
                <td style={{ paddingLeft: 0 }}>
                  <span className="kanji">
                    何<span className="furigana">なに</span>
                  </span>
                  か
                  <span className="underline-orange">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </td>
                <td style={{ paddingRight: "10px", paddingLeft: "10px" }}>
                  <i>someone</i>
                </td>
                <td style={{ paddingLeft: 0 }}>
                  だれか
                  <span className="underline-orange">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </td>
                <td style={{ paddingRight: "10px", paddingLeft: "10px" }}>
                  <i>somewhere</i>
                </td>
                <td>
                  どこか
                  <span className="underline-orange">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </td>
              </tr>
              <tr>
                <td style={{ paddingRight: "10px", paddingLeft: "10px" }}>
                  <i>not anything</i>
                </td>
                <td style={{ paddingLeft: 0 }}>
                  <span className="kanji">
                    何<span className="furigana">なに</span>
                  </span>
                  <span className="underline-orange">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  も
                </td>
                <td style={{ paddingRight: "10px", paddingLeft: "10px" }}>
                  <i>not anyone</i>
                </td>
                <td style={{ paddingLeft: 0 }}>
                  だれ
                  <span className="underline-orange">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  も
                </td>
                <td style={{ paddingRight: "10px", paddingLeft: "10px" }}>
                  <i>not anywhere</i>
                </td>
                <td>
                  どこ
                  <span className="underline-orange">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  も
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            You do not need the particles は, が, or を with these words. You do
            need other particles, such as に, へ, and で.
          </p>
          <div className="tab table-double-column">
            <p>
              A: どこか<span className="underline-orange">へ</span>
              いきましたか。
            </p>
            <p>
              <i>Did you go anywhere?</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              B: いいえ、どこ<span className="underline-orange">へ</span>
              も行きませんでした。
            </p>
            <p>
              <i>No, I didn't go anywhere.</i>
            </p>
          </div>
          <br />
          <div className="tab table-double-column">
            <p>
              A: だれか<span className="underline-orange">に</span>
              <span className="kanji">
                会<span className="furigana">あ</span>
              </span>
              いましたか。
            </p>
            <p>
              <i>Did you see anybody?</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              B: いいえ、だれも<span className="underline-orange">に</span>
              <span className="kanji">
                会<span className="furigana">あ</span>
              </span>
              いませんでした。
            </p>
            <p>
              <i>No, I didn't see anybody.</i>
            </p>
          </div>
          <br />
          <div className="tab table-double-column">
            <p>
              A:{" "}
              <span className="kanji">
                何<span className="furigana">なに</span>
              </span>
              かしましたか。
            </p>
            <p>
              <i>Did you do anything?</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              B: いいえ、
              <span className="kanji">
                何<span className="furigana">なに</span>
              </span>
              <span className="underline-orange">も</span>* しませんでした。
            </p>
            <p>
              <i>No, I didn't do anything.</i>
            </p>
          </div>
          <p style={{ textAlign: "center" }}>*Note that を was not used.</p>
        </div>
      </section>

      <section id="section7">
        <h3>10.7: で</h3>
        <div className="indent">
          <p>
            Use で with nouns that describe means of transportation and
            instruments you use.
          </p>
          <div className="tab table-double-column">
            <p>
              <span className="underline-orange">はしで</span>ご
              <span className="kanji">
                飯<span className="furigana">はん</span>
              </span>
              を
              <span className="kanji">
                食<span className="furigana">た</span>
              </span>
              べます。
            </p>
            <p>
              <i>
                We eat our meals{" "}
                <span className="underline-orange">with chopsticks</span>.
              </i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              <span className="underline-orange">
                <span className="kanji">
                  日<span className="furigana">に</span>
                </span>
                <span className="kanji">
                  本<span className="furigana">ほん</span>
                </span>
                <span className="kanji">
                  語<span className="furigana">ご</span>
                </span>
                で
              </span>
              <span className="kanji">
                話<span className="furigana">はな</span>
              </span>
              しましょう。
            </p>
            <p>
              <i>
                Let's talk <span className="underline-orange">in Japanese</span>
                .
              </i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              <span className="underline-orange">バスで</span>
              <span className="kanji">
                駅<span className="furigana">いえ</span>
              </span>
              までいきました。
            </p>
            <p>
              <i>
                I went to the station{" "}
                <span className="underline-orange">by bus</span>.
              </i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              <span className="underline-orange">テレビで</span>
              <span className="kanji">
                映<span className="furigana">えい</span>
              </span>
              <span className="kanji">
                画<span className="furigana">が</span>
              </span>
              を
              <span className="kanji">
                見<span className="furigana">み</span>
              </span>
              ました。
            </p>
            <p>
              <i>
                I saw a movie <span className="underline-orange">on TV</span>.
              </i>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Lesson10;
