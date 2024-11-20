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
          <table className="table-list table-mini table-border-orange">
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
          <table className="table-list table-border-orange">
            <thead>
              <tr>
                <th colSpan="3" className="table-header text-orange">
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
          <p>
            Verbs in the second group describe changes from one state to
            another. For example, if you get married 結婚する, your status
            changes from being single to being married. The verb て.いる
            describes the <i>result of a change</i>.
          </p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>change verbs ている = result of a change</td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            山下先生は結婚しています。
            <br />
            Professor Yamashita is married.
          </p>
          <p>
            Examples of verbs that are commonly used in the ~ている framework:
          </p>
          <table className="table-short table-mini">
            <tbody>
              <tr>
                <td>
                  持つ
                  <br />
                  (もつ)
                </td>
                <td>→</td>
                <td>
                  持っている
                  <br />
                  (has)
                </td>
                <td>
                  ソラさんはお金をたくさん持っています。
                  <br />
                  <i>Sora has a lot of money.</i>
                </td>
              </tr>
              <tr>
                <td>
                  知る
                  <br />
                  (しる)
                </td>
                <td>→</td>
                <td>
                  知っている
                  <br />
                  (knows)
                </td>
                <td>
                  山下先生は母を知っています。
                  <br />
                  <i>Professor Yamashita knows my mother.</i>
                </td>
              </tr>
              <tr>
                <td>
                  太る
                  <br />
                  (ふとる)
                </td>
                <td>→</td>
                <td>
                  太るっている
                  <br />
                  (is overweight)
                </td>
                <td>
                  トムさんはちょうと太っています。
                  <br />
                  <i>Tom is a little overweight.</i>
                </td>
              </tr>
              <tr>
                <td>やせる</td>
                <td>→</td>
                <td>
                  やせるている
                  <br />
                  (is thin)
                </td>
                <td>
                  私の弟はとてもやせています。
                  <br />
                  <i>My younger brother is very thin.</i>
                </td>
              </tr>
              <tr>
                <td>
                  着る
                  <br />
                  (きる)
                </td>
                <td>→</td>
                <td>
                  着っている
                  <br />
                  (wears)
                </td>
                <td>
                  メアリーさんはTシャツを着ています。
                  <br />
                  <i>Mary is wearing/wears a T-shirt.</i>
                </td>
              </tr>
              <tr>
                <td>
                  起きる
                  <br />
                  (おきる)
                </td>
                <td>→</td>
                <td>
                  起きている
                  <br />
                  (is awake)
                </td>
                <td>
                  お父さんは起きています。
                  <br />
                  <i>Dad is up and awake.</i>
                </td>
              </tr>
              <tr>
                <td>
                  住む
                  <br />
                  (すむ)
                </td>
                <td>→</td>
                <td>
                  住んでいる
                  <br />
                  (lives in)
                </td>
                <td>
                  家族は東京に住んでいます。
                  <br />
                  <i>My family lives in Tokyo.</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Verbs like 行く and 来る belong to the change class. They indicate
            the result of prior movements, not movements that are currently in
            progress.
          </p>
          <p className="tab">
            中国に行っています。
            <br />
            <i>Somebody has gone to/is in China.</i> (Not:{" "}
            <i>She is going to China</i>)
          </p>
          <p className="tab">
            うちに来ています。
            <br />
            <i>Somebody has come over to visit.</i> (Not:{" "}
            <i>Somebody is coming over</i>)
          </p>
        </div>
      </section>

      <section id="section3">
        <h3>7.3: メリーさんは髪が長いです</h3>
        <div className="indent">
          <p>Normally, we would describe someone who has long hair with:</p>
          <p className="tab">
            トムさんの髪は長いです。
            <br />
            <i>Tom's hair is long.</i>
          </p>
          <p>It is more natural in Japanese to say:</p>
          <p className="tab">
            トムさんは髪<span className="underline-orange">が</span>長いです。
            <br />
            <i>Tom has long hair. (= As for Tom, he has long hair.)</i>
          </p>
          <p>
            This also applies to descriptions of a person's physical attributes
            in general.
          </p>
          <table className="table-list table-mini table-border-orange">
            <thead>
              <tr>
                <th colSpan="3" className="table-header text-orange">
                  体の部分
                  <span className="text-black">
                    {" "}
                    (からだのぶぶん) Parts of the Body
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  かみ (髪)
                  <br />
                  Hair
                </td>
                <td>
                  まゆげ (眉毛)
                  <br />
                  Eyebrow
                </td>
                <td>
                  め (目)
                  <br />
                  Eye
                </td>
              </tr>
              <tr>
                <td>
                  みみ (耳)
                  <br />
                  Ear
                </td>
                <td>
                  はな (鼻)
                  <br />
                  Nose
                </td>
                <td>
                  くち (口)
                  <br />
                  Mouth
                </td>
              </tr>
              <tr>
                <td>
                  は (歯)
                  <br />
                  Teeth
                </td>
                <td>
                  くび (首)
                  <br />
                  Neck
                </td>
                <td>
                  て (手)
                  <br />
                  Hand
                </td>
              </tr>
              <tr>
                <td>
                  ゆび (指)
                  <br />
                  Finger
                </td>
                <td>
                  あたま (頭)
                  <br />
                  Head
                </td>
                <td>
                  かお (顔)
                  <br />
                  Face
                </td>
              </tr>
              <tr>
                <td>
                  かた (肩)
                  <br />
                  Shoulder
                </td>
                <td>
                  むね (胸)
                  <br />
                  Chest
                </td>
                <td>
                  せなか (背中)
                  <br />
                  Back
                </td>
              </tr>
              <tr>
                <td>
                  おなか (お腹)
                  <br />
                  Belly
                </td>
                <td>
                  おしり (お尻)
                  <br />
                  Butt
                </td>
                <td>
                  あし (足)
                  <br />
                  Foot
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            In idiomatic collocations (words that naturally go together), we
            have:
          </p>
          <p className="tab">
            背が高い。(se ga takai)
            <br />
            <i>is tall</i>
          </p>
          <p className="tab">
            背が低い。(se ga hikui)
            <br />
            <i>is short</i>
          </p>
          <p className="tab">
            頭がいい。(atamagaii)
            <br />
            <i>is bright/smart</i>
          </p>
        </div>
      </section>

      <section id="section4">
        <h3>7.4: Adjective/Noun Te-forms for Joining Sentences</h3>
        <div className="indent">
          <p>
            The <i>te</i>-form of an い-adjective is formed by substituting くて
            for the final い. The <i>te</i>-form of a な-adjective and a noun +
            です sequence is formed by adding で to the base or the noun.
          </p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>い-adjectives:</td>
                <td>安い</td>
                <td>→</td>
                <td>安くて</td>
              </tr>
              <tr>
                <td className="text-right">(irregular)</td>
                <td>いい</td>
                <td>→</td>
                <td>よくて</td>
              </tr>
              <tr>
                <td>な-adjectives:</td>
                <td>元気 (な)</td>
                <td>→</td>
                <td>元気で</td>
              </tr>
              <tr>
                <td>noun + です:</td>
                <td>安い</td>
                <td>→</td>
                <td>安くて</td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            あの店の食べ物は<span className="underline-orange">安くて</span>
            、おいしいです。
            <br />
            <i>
              The food at that restaurant is{" "}
              <span className="underline-orange">inexpensive</span>{" "}
              <span className="underline-orange">and</span> delicious.
            </i>
          </p>
          <p className="tab">
            ホテルは<span className="underline-orange">きれいで</span>
            、よかったです。
            <br />
            <i>
              The hotel was <span className="underline-orange">clean</span>,{" "}
              <span className="underline-orange">and</span> we were happy.
            </i>
          </p>
        </div>
      </section>

      <section id="section5">
        <h3>7.5: Verb Stem + に行く</h3>
        <div className="indent">
          <p>
            If a person moves to another place in order to do something, we can
            describe their movement and its purpose this way:
          </p>
          <table className="table-list table-mini table-text-center table-border-orange">
            <tbody>
              <tr>
                <td rowSpan="3">destination of movement</td>
                <td>に</td>
                <td rowSpan="3">
                  <span className="border-orange">the purpose of movement</span>
                </td>
                <td rowSpan="3">に</td>
                <td>行く</td>
              </tr>
              <tr>
                <td>へ</td>
                <td>来る</td>
              </tr>
              <tr>
                <td colSpan="1"></td>
                <td>帰る</td>
              </tr>
            </tbody>
          </table>
          <p>
            The purpose of movement is a phrase consisting of a verb, its
            object, and so forth. Verbs describing the purpose of a movement
            must be in their stem forms. Stems are the part you get by removing
            ます from the verbs' present tense long forms.
          </p>
          <table className="table-list table-mini table-text-center table-border-orange">
            <tbody>
              <tr>
                <td>stems:</td>
                <td>食べる</td>
                <td>→</td>
                <td>
                  <span className="underline-orange">食べ</span> (ます)
                </td>
                <td></td>
                <td>読む</td>
                <td>→</td>
                <td>
                  <span className="underline-orange">読み</span> (ます)
                </td>
                <td>etc.</td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            デパートに<span className="border-orange">かばんを買い</span>
            に行きました。
            <br />
            <i>I went to a department store to buy a bag.</i>
          </p>
        </div>
      </section>

      <section id="section6">
        <h3>7.6: Counting People</h3>
        <div className="indent">
          <p>
            The "counter" for people is 人, but it irregular for "one" and "two"
            people.
          </p>
          <ol className="ordered-list">
            <li>
              <span
                className="underline-orange"
                style={{ marginRight: "20px" }}
              >
                ひとり
              </span>
              (一人)
            </li>
            <li>
              <span
                className="underline-orange"
                style={{ marginRight: "20px" }}
              >
                ふたり
              </span>
              (二人)
            </li>
            <li>
              <span style={{ marginRight: "20px" }}>さんにん</span>(三人)
            </li>
            <li>
              <span style={{ marginRight: "20px" }}>
                <span className="underline-orange">よ</span>にん
              </span>
              (四人)
            </li>
            <li>
              <span style={{ marginRight: "20px" }}>ごにん</span>(五人)
            </li>
            <li>
              <span style={{ marginRight: "20px" }}>ろくにん</span>(六人)
            </li>
            <li>
              <span style={{ marginRight: "20px" }}>しちにん/ななにん</span>
              (七人)
            </li>
            <li>
              <span style={{ marginRight: "20px" }}>はちにん</span>(八人)
            </li>
            <li>
              <span style={{ marginRight: "20px" }}>きゅうにん</span>(九人)
            </li>
            <li>
              <span style={{ marginRight: "20px" }}>じゅうにん</span>(十人)
            </li>
          </ol>
          <p>
            To count people in a class, for example, you can add ~人 after the
            noun and the particle が, and say:
          </p>
          <table className="table-list table-mini table-text-center table-border-orange">
            <tbody>
              <tr>
                <td>person が</td>
                <td>X 人</td>
                <td>います</td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            私のクラスに（は）インドネシア人の学生が一人います。
            <br />
            <i>There is one Indonesian student in our class.</i>
          </p>
          <p>
            The place expressions are often followed by には instead of に in
            this type of sentence.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Lesson7;
