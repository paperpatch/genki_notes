import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson7() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 7: 家族の写真 (Family Picture)</h2>
      <section id="section1">
        <h3>7.1: ~ている (Action in Progress)</h3>
        <div className="indent">
          <p>
            Japanese verbs can be classified into the following three types:
          </p>
          <ol>
            <li>
              verbs that describe <i>activities</i> that last for some time
              (e.g., 食べる, 読む)
            </li>
            <li>
              verbs that describe <i>changes</i> that are more or less
              instantaneous (e.g., 死ぬ, 起きる)
            </li>
            <li>
              verbs that describe continuous <i>states</i> (e.g., ある, いる)
            </li>
          </ol>
          <p>
            You can use the verbs in the first group in their <i>te</i>-form
            with the helping verb いる to describe <i>actions in progress</i>.
          </p>
          <table className="table-list table-mini">
            <tbody>
              <tr>
                <td>activity verbs ている = action in progress</td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            ソラさんは今勉強しています。
            <br />
            Sora is studying right now.
          </p>
          <p>
            You can also use a ~ています sentence to describe what a person does
            by occupation or by habit.
          </p>
          <p className="tab">
            私は英語を教えています。
            <br />I teach English. / I am teaching English (right now).
          </p>
          <p>
            The helping verb いる conjugates as a <i>ru</i>-verb. It makes long
            forms as in the following:
          </p>
          <table className="table-list">
            <thead>
              <tr>
                <th colSpan="3" className="table-header">
                  e.g.{" "}
                  <span className="text-black">
                    食べ<span className="underline-orange">ている</span>
                  </span>
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
                <td>[Present]</td>
                <td>
                  食べ<span className="underline-orange">ています</span>
                  <br />
                  He is eating.
                </td>
                <td>
                  食べ<span className="underline-orange">ていません</span>
                  <br />
                  He is not eating.
                </td>
              </tr>
              <tr>
                <td>[Past]</td>
                <td>
                  食べ<span className="underline-orange">ていました</span>
                  <br />
                  He was eating.
                </td>
                <td>
                  食べ<span className="underline-orange">ていませんでした</span>
                  <br />
                  He was not eating.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section2">
        <h3>7.2: ~ている (Result of a Change)</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section3">
        <h3>7.3: メリーさんは髪が長いです</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section4">
        <h3>7.4: Adjective/Noun Te-forms for Joining Sentences</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section5">
        <h3>7.5: Verb Stem + に行く</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section6">
        <h3>7.6: Counting People</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Lesson7;
