import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";
import "./Pages.css";

function Lesson3() {
  useSmoothScrollToSection();

  return (
    <div>
      <div className="lesson-header">
        <h2 className="lesson-title background-orange">Lesson 3</h2>
        <h2 className="lesson-title-orange">
          デートの
          <span className="kanji">
            約<span className="furigana">やく</span>
          </span>
          <span className="kanji">
            束<span className="furigana">そく</span>
          </span>{" "}
          (Making a Date)
        </h2>
      </div>

      <section id="section1">
        <div className="section-header">
          <h3 className="section-circle circle-orange">1</h3>
          <h3 className="section-text-orange">Verb Conjugation</h3>
        </div>
        <div className="indent">
          <p>
            Conjugate dictionary words to their verb form. For example, the word
            "eat" can be conjugated to "to eat".
          </p>
          <p>
            <em>Ru</em>-verbs are sounds that ends with <em>eru</em> or{" "}
            <em>iru</em>.
          </p>
          <p>
            Replace <em>ru</em> with <em>masu</em> (affirmative) or{" "}
            <em>masen</em> (negative).
          </p>

          <table className="table-list table-border-orange">
            <thead>
              <tr>
                <th colSpan="3" className="table-header text-orange">
                  Ru-verbs
                </th>
              </tr>
              <tr>
                <th>Dictionary Form</th>
                <th>Present, Affirmative</th>
                <th>Present, Negative</th>
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
                  べます
                </td>
                <td>
                  <span className="kanji">
                    食<span className="furigana">た</span>
                  </span>
                  べません
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    寝<span className="furigana">ね</span>
                  </span>
                  る
                </td>
                <td>
                  <span className="kanji">
                    寝<span className="furigana">ね</span>
                  </span>
                  ます
                </td>
                <td>
                  <span className="kanji">
                    寝<span className="furigana">ね</span>
                  </span>
                  ません
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    起<span className="furigana">お</span>
                  </span>
                  きる
                </td>
                <td>
                  <span className="kanji">
                    起<span className="furigana">お</span>
                  </span>
                  ます
                </td>
                <td>
                  <span className="kanji">
                    起<span className="furigana">お</span>
                  </span>
                  ません
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    見<span className="furigana">み</span>
                  </span>
                  る
                </td>
                <td>
                  <span className="kanji">
                    見<span className="furigana">み</span>
                  </span>
                  ます
                </td>
                <td>
                  <span className="kanji">
                    見<span className="furigana">み</span>
                  </span>
                  ません
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            With <em>u</em>-verbs, replace <em>u</em> with <em>imasu</em> and{" "}
            <em>imasen</em>.
          </p>
          <table className="table-list table-border-orange">
            <thead>
              <tr>
                <th colSpan="3" className="table-header text-orange">
                  U-verbs
                </th>
              </tr>
              <tr>
                <th>Dictionary Form</th>
                <th>Present, Affirmative</th>
                <th>Present, Negative</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="kanji">
                    飲<span className="furigana">の</span>
                  </span>
                  む
                </td>
                <td>
                  <span className="kanji">
                    飲<span className="furigana">の</span>
                  </span>
                  みます
                </td>
                <td>
                  <span className="kanji">
                    飲<span className="furigana">の</span>
                  </span>
                  みません
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  む
                </td>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  みます
                </td>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  みません
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    話<span className="furigana">はな</span>
                  </span>
                  す
                </td>
                <td>
                  <span className="kanji">
                    話<span className="furigana">はな</span>
                  </span>
                  します
                </td>
                <td>
                  <span className="kanji">
                    話<span className="furigana">はな</span>
                  </span>
                  しません
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    行<span className="furigana">い</span>
                  </span>
                  く
                </td>
                <td>
                  <span className="kanji">
                    行<span className="furigana">い</span>
                  </span>
                  きます
                </td>
                <td>
                  <span className="kanji">
                    行<span className="furigana">い</span>
                  </span>
                  きません
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            Some words are irregular, using a different format than to its
            expected consonant.
          </p>
          <table className="table-list table-border-orange">
            <thead>
              <tr>
                <th colSpan="3" className="table-header text-orange">
                  Irregular verbs
                </th>
              </tr>
              <tr>
                <th>Dictionary Form</th>
                <th>Present, Affirmative</th>
                <th>Present, Negative</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>する</td>
                <td>します</td>
                <td>しません</td>
              </tr>
              <tr>
                <td>くる</td>
                <td>きます</td>
                <td>きません</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section2">
        <div className="section-header">
          <h3 className="section-circle circle-orange">2</h3>
          <h3 className="section-text-orange">
            Verb Types and the "Present Tense"
          </h3>
        </div>
        <div className="indent">
          <p>
            Action verbs and the "present tense" of these verbs either means
            that a person regularly performs these actions, or that they are
            planning to perform an action in the future.
          </p>
          <p>
            <strong>Habitual action:</strong>
          </p>
          <p className="tab">
            <span className="kanji">
              私<span className="furigana">わたし</span>
            </span>
            はよくテレビを
            <span className="kanji">
              見<span className="furigana">み</span>
            </span>
            ます。
            <br />
            <i>I often watch TV.</i>
          </p>
          <p>
            <strong>Future action:</strong>
          </p>
          <p className="tab">
            私は
            <span className="kanji">
              明日<span className="furigana">あした</span>
            </span>
            <span className="kanji">
              京都<span className="furigana">きょうと</span>
            </span>
            に
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            きます。
            <br />
            <i>I will go to Kyoto tomorrow.</i>
          </p>
        </div>
      </section>

      <section id="section3">
        <div className="section-header">
          <h3 className="section-circle circle-orange">3</h3>
          <h3 className="section-text-orange">Particles</h3>
        </div>
        <div className="indent">
          <p>This lesson covers four paticles: を, で, に, へ.</p>
          <p>
            を indicates "direct objects", things that are directly involved in,
            or affected by, the event.
          </p>
          <p className="tab">
            コーヒー<span className="underline-orange">を</span>
            <span className="kanji">
              飲<span className="furigana">の</span>
            </span>
            みます。
            <br />
            <i>I drink coffee.</i>
          </p>
          <p>で indicates where event described by the verb takes place.</p>
          <p className="tab">
            <span className="kanji">
              図<span className="furigana">と</span>
            </span>
            <span className="kanji">
              書館<span className="furigana">しょかん</span>
            </span>
            <span className="underline-orange">で</span>
            <span className="kanji">
              本<span className="furigana">ほん</span>
            </span>
            を
            <span className="kanji">
              読<span className="furigana">よ</span>
            </span>
            みます。
            <br />
            <i>I will read books in the library.</i>
          </p>
          <p>に has many meanings, but usually means:</p>
          <p className="indent">(1) Goal of movement</p>
          <p className="tab">
            <span className="kanji">
              今日<span className="furigana">きょう</span>
            </span>
            <span className="kanji">
              学校<span className="furigana">がっこう</span>
            </span>
            <span className="underline-orange">に</span>
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            きません。
            <br />
            <i>I will not go to school today.</i>
          </p>
          <p className="indent">(2) Time (at which an event takes place)</p>
          <p className="tab">
            <span className="kanji">
              日曜日<span className="furigana">にちようび</span>
            </span>
            <span className="underline-orange">に</span>
            <span className="kanji">
              京都<span className="furigana">きょうと</span>
            </span>
            に
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            きます。
            <br />
            <i>I will go to Kyoto on Sunday.</i>
          </p>
          <p>
            へ (Goal of movement). You can replace に with へ for goal of
            movement, but not with time reference.{" "}
          </p>
          <p className="tab">
            <span className="kanji">
              家<span className="furigana">うち</span>
            </span>
            <span className="underline-orange">へ</span>
            <span className="kanji">
              帰<span className="furigana">かえ</span>
            </span>
            ります。
            <br />
            <i>I will return home.</i>
          </p>
        </div>
      </section>

      <section id="section4">
        <div className="section-header">
          <h3 className="section-circle circle-orange">4</h3>
          <h3 className="section-text-orange">Time References</h3>
        </div>
        <div className="indent">
          <p>Use に for days of week and numerical time expressions.</p>
          <p className="tab">
            <span className="underline-orange">
              <span className="kanji">
                日曜日<span className="furigana">にちようび</span>
              </span>
              に
            </span>
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            きます。
            <br />
            <i>I will go on Sunday.</i>
          </p>
          <p>
            You don't use it with defined time expressions such as "today" and
            "tomorrow"
          </p>
          <p className="tab">
            <span className="underline-orange">
              <span className="kanji">
                明日<span className="furigana">あした</span>
              </span>
            </span>
            <span className="kanji">
              来<span className="furigana">き</span>
            </span>
            ます。
            <br />
            <i>I will come tomorrow.</i>
          </p>
        </div>
      </section>

      <section id="section5">
        <div className="section-header">
          <h3 className="section-circle circle-orange">5</h3>
          <h3 className="section-text-orange">～ませんか</h3>
        </div>
        <div className="indent">
          <p>
            Use ませんか to extend an invitation. ますか is used more like a
            question, not an invitation.
          </p>
          <p className="tab">
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
            べませんか。
            <br />
            <i>Would you like to have lunch?</i>
          </p>
        </div>
      </section>

      <section id="section6">
        <div className="section-header">
          <h3 className="section-circle circle-orange">6</h3>
          <h3 className="section-text-orange">Frequency Adverbs</h3>
        </div>
        <div className="indent">
          <p>Use frequency adverb to describe how often you do something.</p>
          <p>
            <span className="kanji">
              毎日<span className="furigana">まいにち</span>
            </span>{" "}
            (every day)
          </p>
          <p>よく (often)</p>
          <p>
            <span className="kanji">
              時々<span className="furigana">ときどき</span>
            </span>{" "}
            (sometimes)
          </p>
          <p>
            <span className="kanji">
              全然<span className="furigana">ぜんぜん</span>
            </span>{" "}
            (never)
          </p>
          <p className="tab">
            <span className="kanji">
              私<span className="furigana">わたし</span>
            </span>
            は
            <span className="underline-orange">
              <span className="kanji">
                時々<span className="furigana">ときどき</span>
              </span>
            </span>
            <span className="kanji">
              図<span className="furigana">と</span>
            </span>
            <span className="kanji">
              書館<span className="furigana">しょかん</span>
            </span>
            に
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            きます。
            <br />
            <i>I sometimes go to the library.</i>
          </p>
        </div>
      </section>

      <section id="section7">
        <div className="section-header">
          <h3 className="section-circle circle-orange">7</h3>
          <h3 className="section-text-orange">Word Order</h3>
        </div>
        <div className="indent">
          <p>
            Japanese sentences are fairly flexible, but generally are made up of
            several noun-particle sequences followed by a verb or an adjective.
          </p>
          <table className="table-short table-mini">
            <tbody>
              <tr>
                <td>
                  <span className="kanji">
                    私<span className="furigana">わたし</span>
                  </span>
                  は
                </td>
                <td>
                  <span className="kanji">
                    今日<span className="furigana">きょう</span>
                  </span>
                </td>
                <td>
                  <span className="kanji">
                    図<span className="furigana">と</span>
                  </span>
                  <span className="kanji">
                    書館<span className="furigana">しょかん</span>
                  </span>
                  で
                </td>
                <td>
                  <span className="kanji">
                    日<span className="furigana">に</span>
                  </span>
                  <span className="kanji">
                    本<span className="furigana">ほん</span>
                  </span>
                  <span className="kanji">
                    語<span className="furigana">ご</span>
                  </span>
                  を
                </td>
                <td>
                  <span className="kanji">
                    勉強<span className="furigana">べんきょう</span>
                  </span>
                  します
                </td>
              </tr>
              <tr className="text-orange">
                <td>topic</td>
                <td>time</td>
                <td>place</td>
                <td>object</td>
                <td>verb</td>
              </tr>
              <tr>
                <td colSpan="5">
                  <i>I will study Japanese in the library today.</i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section8">
        <div className="section-header">
          <h3 className="section-circle circle-orange">8</h3>
          <h3 className="section-text-orange">The Topic Particle は</h3>
        </div>
        <div className="indent">
          <p>
            The particle は puts forward the item that you want to talk about.
          </p>
          <p className="tab">
            メアリさん,{" "}
            <span className="underline-orange">
              <span className="kanji">
                週末<span className="furigana">しゅうまつ</span>
              </span>
              は
            </span>
            たいてい{" "}
            <span className="kanji">
              何<span className="furigana">なに</span>
            </span>
            をしますか。
            <br />
            <i>Mary, what do you usually do on the weekend?</i>
            <br />
            <span>
              Paraphrased: Let's talk about weekends, what do you do on
              weekends?
            </span>
          </p>
          <p className="tab">
            <span className="underline-orange">
              <span className="kanji">
                今日<span className="furigana">きょう</span>
              </span>
              は
            </span>
            <span className="kanji">
              京都<span className="furigana">きょうと</span>
            </span>
            に
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            きます。
            <br />
            <i>I'm going to Kyoto today.</i>
            <br />
            <span>
              Paraphrased: Let me say what I will do today; I will go to Kyoto.
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Lesson3;
