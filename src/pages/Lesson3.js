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
        <p>
          Conjugate dictionary words to their verb form. For example, the word
          "eat" can be conjugated to "to eat".
        </p>
        <p>
          <em>Ru</em>-verbs are sounds that ends with <em>eru</em> or{" "}
          <em>iru</em>.
        </p>
        <p>
          Replace <em>ru</em> with <em>masu</em> (affirmative) or <em>masen</em>{" "}
          (negative).
        </p>

        <table>
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
        <table>
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
        <table>
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
      </section>

      <section id="section2">
        <h3>3.2: Verb Types and the "Present Tense"</h3>
        <p>
          Action verbs and the "present tense" of these verbs either means that
          a person regularly performs these actions, or that they are planning
          to perform an action in the future.
        </p>
        <p>
          <strong>Habitual action:</strong>
        </p>
        <p>
          私はよくテレビを見ます。
          <br />I often watch TV.
        </p>
        <p>
          <strong>Future action:</strong>
        </p>
        <p>
          私は明日京都に行きます。
          <br />I will go to Kyoto tomorrow.
        </p>
      </section>

      <section id="section3">
        <h3>3.3: Particles</h3>
        <p>This lesson covers four paticles: を, で, に, へ.</p>
        <></>
      </section>

      <section id="section4">
        <h3>3.4: Time References</h3>
        <p></p>
      </section>

      <section id="section5">
        <h3>3.5: ~ませんか</h3>
        <p></p>
      </section>

      <section id="section6">
        <h3>3.6: Frequency Adverbs</h3>
        <p></p>
      </section>

      <section id="section7">
        <h3>3.7: Word Order</h3>
        <p></p>
      </section>

      <section id="section8">
        <h3>3.7: The Topic Particle は</h3>
        <p></p>
      </section>
    </div>
  );
}

export default Lesson3;
