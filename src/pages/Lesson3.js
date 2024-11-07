import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";
import "./Pages.css";

function Lesson3() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 3: デートの約束 (Making a Date)</h2>
      <section id="section1">
        <h3>3.1: Verb Conjugation</h3>
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

          <table className="table-list">
            <thead>
              <tr>
                <th colSpan="3" className="table-header">
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
                <td>食べる (taberu)</td>
                <td>食べます (tabemasu)</td>
                <td>食べません (tabemasen)</td>
              </tr>
              <tr>
                <td>見る (miru)</td>
                <td>見ます (mimasu)</td>
                <td>見ません (mimasen)</td>
              </tr>
              <tr>
                <td>寝る (neru)</td>
                <td>寝ます (nemasu)</td>
                <td>寝ません (nemasen)</td>
              </tr>
            </tbody>
          </table>

          <p>
            With <em>u</em>-verbs, replace <em>u</em> with <em>imasu</em> and{" "}
            <em>imasen</em>.
          </p>
          <table className="table-list">
            <thead>
              <tr>
                <th colSpan="3" className="table-header">
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
                <td>飲む (nomu)</td>
                <td>飲みます (nomimasu)</td>
                <td>飲みません (nomimasen)</td>
              </tr>
              <tr>
                <td>話す (hanasu)</td>
                <td>話します (hanashimasu)</td>
                <td>話しません (hanashimasen)</td>
              </tr>
              <tr>
                <td>行く (iku)</td>
                <td>行きます (ikimasu)</td>
                <td>行きません (ikimasen)</td>
              </tr>
            </tbody>
          </table>

          <p>
            Some words are irregular, using a different format than to its
            expected consonant.
          </p>
          <table className="table-list">
            <thead>
              <tr>
                <th colSpan="3" className="table-header">
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
                <td>する (suru)</td>
                <td>します (shimasu)</td>
                <td>しません (shimasen)</td>
              </tr>
              <tr>
                <td>くる (kuru)</td>
                <td>きます (kimasu)</td>
                <td>きません (kimasen)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section2">
        <h3>3.2: Verb Types and the "Present Tense"</h3>
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
            私はよくテレビを見ます。
            <br />I often watch TV.
          </p>
          <p>
            <strong>Future action:</strong>
          </p>
          <p className="tab">
            私は明日京都に行きます。
            <br />I will go to Kyoto tomorrow.
          </p>
        </div>
      </section>

      <section id="section3">
        <h3>3.3: Particles</h3>
        <div className="indent">
          <p>This lesson covers four paticles: を, で, に, へ.</p>
          <p>
            を indicates "direct objects", things that are directly involved in,
            or affected by, the event.
          </p>
          <p className="tab">
            コーヒー<span class="underline-orange">を</span>飲みます。
            <br />I drink coffee.
          </p>
          <p>で indicates where event described by the verb takes place.</p>
          <p className="tab">
            図書館<span class="underline-orange">で</span>本を読みます。
            <br />I will read books in the library.
          </p>
          <p>に has many meanings, but usually means:</p>
          <p className="indent">(1) Goal of movement</p>
          <p className="tab">
            今日学校<span class="underline-orange">に</span>行きません。
            <br />I will not go to school today.
          </p>
          <p className="indent">(2) Time (at which an event takes place)</p>
          <p className="tab">
            日曜日<span class="underline-orange">に</span>京都に行きます。
            <br />I will go to Kyoto on Sunday.
          </p>
          <p>
            へ (Goal of movement). You can replace に with へ for goal of
            movement, but not with time reference.{" "}
          </p>
          <p className="tab">
            家<span class="underline-orange">へ</span>帰ります。
            <br />I will return home.
          </p>
        </div>
      </section>

      <section id="section4">
        <h3>3.4: Time References</h3>
        <div className="indent">
          <p>Use に for days of week and numerical time expressions.</p>
          <p className="tab">
            <span class="underline-orange">日曜日に</span>行きます。
            <br />I will go on Sunday.
          </p>
          <p>
            You don't use it with defined time expressions such as "today" and
            "tomorrow"
          </p>
          <p className="tab">
            <span class="underline-orange">明日</span>来ます。
            <br />I will come tomorrow.
          </p>
        </div>
      </section>

      <section id="section5">
        <h3>3.5: ~ませんか</h3>
        <div className="indent">
          <p>
            Use ませんか to extend an invitation. ますか is used more like a
            question, not an invitation.
          </p>
          <p className="tab">
            昼ご飯を食べませんか。
            <br />
            Would you like to have lunch?
          </p>
        </div>
      </section>

      <section id="section6">
        <h3>3.6: Frequency Adverbs</h3>
        <div className="indent">
          <p>Use frequency adverb to describe how often you do something.</p>
          <p>毎日 (every day)</p>
          <p>よく (often)</p>
          <p>時々 (sometimes)</p>
          <p>全然 (never)</p>
          <p className="tab">
            私は<span class="underline-orange">時々</span>図書館に行きます。
            <br />I sometimes go to the library.
          </p>
        </div>
      </section>

      <section id="section7">
        <h3>3.7: Word Order</h3>
        <div className="indent">
          <p>
            Japanese sentences are fairly flexible, but generally are amde up of
            several noun-particle sequences followed by a verb or an adjective.
          </p>
          <table className="table-short">
            <tbody>
              <tr>
                <td>私は</td>
                <td>今日</td>
                <td>図書館で</td>
                <td>日本語を</td>
                <td>勉強します</td>
              </tr>
              <tr className="text-orange">
                <td>topic</td>
                <td>time</td>
                <td>place</td>
                <td>object</td>
                <td>verb</td>
              </tr>
              <tr>
                <td colSpan="5">I will study Japanese in the library today.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section8">
        <h3>3.8: The Topic Particle は</h3>
        <div className="indent">
          <p>
            The particle は puts forward the item that you want to talk about.
          </p>
          <p className="tab">
            メアリさん, <span class="underline-orange">週末は</span>大抵
            何をしますか。
            <br />
            Mary, what do you usually do on the weekend?
          </p>
          <p class="tab">
            Paraphrased: Let's talk about weekends, what do you do on weekends?
          </p>
          <p className="tab">
            <span class="underline-orange">今日は</span>京都に行きます。
            <br />
            I'm going to Kyoto today.
          </p>
          <p class="tab">
            Paraphrased: Let me say what I will do today; I will go to Kyoto.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Lesson3;
