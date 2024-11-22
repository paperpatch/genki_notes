import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson10() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 10: 冬休みの予定 (Winter Vacations Plans)</h2>
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
            <span className="underline-orange">のほうが</span>日本
            <span className="underline-orange">より</span>大きいです。
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
          <p className="tab">一番 (いちばん) = number one; first</p>
          <p className="tab">中 (なか) = inside; interior</p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>[ A と B と C ]</td>
                <td>
                  の
                  <span className="kanji">
                    中<span className="furigana">なか</span>
                  </span>
                  で A がいちばん (property)。
                </td>
              </tr>
              <tr>
                <td colSpan="2" style={{ textAlign: "right" }}>
                  <i>= Between A and B, which is more (property)?</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            A: カナダとフランスと日本
            <span className="underline-orange">の中で</span>
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
            <span className="underline-orange">いちばん</span>寒いと
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
            私は
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
            持っています。（の = ケーキ）
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
            のほうがに日本の
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
                <td style={{ padding: 0 }}>→</td>
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
        <h3>10.4: ~つもりだ</h3>
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
            （私は）
            <span className="kanji">
              週末<span className="furigana">しゅうまつ</span>
            </span>
            にたけしさんとテニスをする
            <span className="underline-orange">つもりです</span>。
            <br />
            <i>I intend to play tennis with Takeshi this weekend.</i>
          </p>
          <p className="tab">
            山下先生はあした大学に
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
            を見に行く<span className="underline-orange">つもりでした</span>
            が、
            <span className="kanji">
              天気<span className="furigana">てんき</span>
            </span>
            がよくなかったから、行きませんでした。
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
                <td style={{ padding: 0 }}>→</td>
                <td>
                  暖か<span className="underline-orange">くなる</span>
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
                <td style={{ padding: 0 }}>→</td>
                <td>
                  静か<span className="underline-orange">になる</span>
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
                <td style={{ padding: 0 }}>→</td>
                <td>
                  会社員<span className="underline-orange">になる</span>
                </td>
                <td>
                  <i>to become a company employee</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            日本語の勉強が
            <span className="kanji">
              楽<span className="furigana">たの</span>
            </span>
            しくなりました。
            <br />
            <i>Studying the Japanese language is fun now.</i>
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
            日本語が
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
          <p></p>
        </div>
      </section>

      <section id="section7">
        <h3>10.7: で</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Lesson10;
