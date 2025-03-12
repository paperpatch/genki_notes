import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson7() {
  useSmoothScrollToSection();

  return (
    <div>
      <div className="lesson-header">
        <h2 className="lesson-title background-orange">Lesson 7</h2>
        <h2 className="lesson-title-orange">
          <span className="kanji">
            家<span className="furigana">か</span>
          </span>
          <span className="kanji">
            族<span className="furigana">ぞく</span>
          </span>
          の
          <span className="kanji">
            写真<span className="furigana">しゃしん</span>
          </span>{" "}
          (Family Picture)
        </h2>
      </div>

      <section id="section1">
        <div className="section-header">
          <h3 className="section-circle circle-orange">1</h3>
          <h3 className="section-text-orange">～ている (Action in Progress)</h3>
        </div>
        <div className="indent">
          <p>
            Japanese verbs can be classified into the following three types:
          </p>
          <ol>
            <li>
              verbs that describe <i>activities</i> that last for some time
              (e.g.,{" "}
              <span className="kanji">
                食<span className="furigana">た</span>
              </span>
              べる,{" "}
              <span className="kanji">
                読<span className="furigana">よ</span>
              </span>
              む)
            </li>
            <li>
              verbs that describe <i>changes</i> that are more or less
              instantaneous (e.g.,{" "}
              <span className="kanji">
                死<span className="furigana">し</span>
              </span>
              ぬ,{" "}
              <span className="kanji">
                起<span className="furigana">お</span>
              </span>
              きる)
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
            ソラさんは
            <span className="kanji">
              今<span className="furigana">いま</span>
            </span>
            <span className="kanji">
              勉強<span className="furigana">べんきょう</span>
            </span>
            しています。
            <br />
            <i>Sora is studying right now.</i>
          </p>
          <p>
            You can also use a ～ています sentence to describe what a person
            does by occupation or by habit.
          </p>
          <p className="tab">
            <span className="kanji">
              私<span className="furigana">わたし</span>
            </span>
            は
            <span className="kanji">
              英語<span className="furigana">えいご</span>
            </span>
            を
            <span className="kanji">
              教<span className="furigana">おし</span>
            </span>
            えています。
            <br />
            <i>I teach English. / I am teaching English (right now).</i>
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
                    <span className="kanji">
                      食<span className="furigana">た</span>
                    </span>
                    べ<span className="underline-orange">ている</span>
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
                  <span className="kanji">
                    食<span className="furigana">た</span>
                  </span>
                  べ<span className="underline-orange">ています</span>
                  <br />
                  <i>He is eating.</i>
                </td>
                <td>
                  <span className="kanji">
                    食<span className="furigana">た</span>
                  </span>
                  べ<span className="underline-orange">ていません</span>
                  <br />
                  <i>He is not eating.</i>
                </td>
              </tr>
              <tr>
                <td>[Past]</td>
                <td>
                  <span className="kanji">
                    食<span className="furigana">た</span>
                  </span>
                  べ<span className="underline-orange">ていました</span>
                  <br />
                  <i>He was eating.</i>
                </td>
                <td>
                  <span className="kanji">
                    食<span className="furigana">た</span>
                  </span>
                  べ<span className="underline-orange">ていませんでした</span>
                  <br />
                  <i>He was not eating.</i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section2">
        <div className="section-header">
          <h3 className="section-circle circle-orange">2</h3>
          <h3 className="section-text-orange">～ている (Result of a Change)</h3>
        </div>
        <div className="indent">
          <p>
            Verbs in the second group describe changes from one state to
            another. For example, if you get married{" "}
            <span className="kanji">
              結婚<span className="furigana">けっこん</span>
            </span>
            する, your status changes from being single to being married. The
            verb ている describes the <i>result of a change</i>.
          </p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>change verbs ている = result of a change</td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            <span className="kanji">
              山下<span className="furigana">やました</span>
            </span>
            <span className="kanji">
              先生<span className="furigana">せんせい</span>
            </span>
            は
            <span className="kanji">
              結婚<span className="furigana">けっこん</span>
            </span>
            しています。
            <br />
            <i>Professor Yamashita is married.</i>
          </p>
          <p>
            Examples of verbs that are commonly used in the ～ている framework:
          </p>
          <table className="table-short table-mini">
            <tbody>
              <tr>
                <td>
                  <span className="kanji">
                    持<span className="furigana">も</span>
                  </span>
                  つ
                </td>
                <td>→</td>
                <td>
                  <span className="kanji">
                    持<span className="furigana">も</span>
                  </span>
                  っている
                  <br />
                  (has)
                </td>
                <td>
                  ソラさんはお
                  <span className="kanji">
                    金<span className="furigana">かね</span>
                  </span>
                  をたくさん
                  <span className="kanji">
                    持<span className="furigana">も</span>
                  </span>
                  っています。
                  <br />
                  <i>Sora has a lot of money.</i>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    知<span className="furigana">し</span>
                  </span>
                  る
                </td>
                <td>→</td>
                <td>
                  <span className="kanji">
                    知<span className="furigana">し</span>
                  </span>
                  っている
                  <br />
                  (knows)
                </td>
                <td>
                  <span className="kanji">
                    山下<span className="furigana">やました</span>
                  </span>
                  <span className="kanji">
                    先生<span className="furigana">せんせい</span>
                  </span>
                  は
                  <span className="kanji">
                    母<span className="furigana">はは</span>
                  </span>
                  を
                  <span className="kanji">
                    知<span className="furigana">し</span>
                  </span>
                  っています。
                  <br />
                  <i>Professor Yamashita knows my mother.</i>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    太<span className="furigana">ふと</span>
                  </span>
                  る
                </td>
                <td>→</td>
                <td>
                  <span className="kanji">
                    太<span className="furigana">ふと</span>
                  </span>
                  るっている
                  <br />
                  (is overweight)
                </td>
                <td>
                  トムさんはちょうと
                  <span className="kanji">
                    太<span className="furigana">ふと</span>
                  </span>
                  っています。
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
                  <span className="kanji">
                    私<span className="furigana">わたし</span>
                  </span>
                  の
                  <span className="kanji">
                    弟<span className="furigana">おとうと</span>
                  </span>
                  はとてもやせています。
                  <br />
                  <i>My younger brother is very thin.</i>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    着<span className="furigana">き</span>
                  </span>
                  る
                </td>
                <td>→</td>
                <td>
                  <span className="kanji">
                    着<span className="furigana">き</span>
                  </span>
                  っている
                  <br />
                  (wears)
                </td>
                <td>
                  メアリーさんはTシャツを
                  <span className="kanji">
                    着<span className="furigana">き</span>
                  </span>
                  ています。
                  <br />
                  <i>Mary is wearing/wears a T-shirt.</i>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    起<span className="furigana">お</span>
                  </span>
                  きる
                </td>
                <td>→</td>
                <td>
                  <span className="kanji">
                    起<span className="furigana">お</span>
                  </span>
                  きている
                  <br />
                  (is awake)
                </td>
                <td>
                  お
                  <span className="kanji">
                    父<span className="furigana">とう</span>
                  </span>
                  さんは
                  <span className="kanji">
                    起<span className="furigana">お</span>
                  </span>
                  きています。
                  <br />
                  <i>Dad is up and awake.</i>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    住<span className="furigana">す</span>
                  </span>
                  む
                </td>
                <td>→</td>
                <td>
                  <span className="kanji">
                    住<span className="furigana">す</span>
                  </span>
                  んでいる
                  <br />
                  (lives in)
                </td>
                <td>
                  <span className="kanji">
                    家<span className="furigana">か</span>
                  </span>
                  <span className="kanji">
                    族<span className="furigana">ぞく</span>
                  </span>
                  は
                  <span className="kanji">
                    東京<span className="furigana">とうきょう</span>
                  </span>
                  に
                  <span className="kanji">
                    住<span className="furigana">す</span>
                  </span>
                  んでいます。
                  <br />
                  <i>My family lives in Tokyo.</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Verbs like{" "}
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            く and{" "}
            <span className="kanji">
              来<span className="furigana">く</span>
            </span>
            る belong to the change class. They indicate the result of prior
            movements, not movements that are currently in progress.
          </p>
          <p className="tab">
            <span className="kanji">
              中国<span className="furigana">ちゅうごく</span>
            </span>
            に
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            っています。
            <br />
            <i>Somebody has gone to/is in China.</i> (Not:{" "}
            <i>She is going to China</i>)
          </p>
          <p className="tab">
            うちに
            <span className="kanji">
              来<span className="furigana">き</span>
            </span>
            ています。
            <br />
            <i>Somebody has come over to visit.</i> (Not:{" "}
            <i>Somebody is coming over</i>)
          </p>
        </div>
      </section>

      <section id="section3">
        <div className="section-header">
          <h3 className="section-circle circle-orange">3</h3>
          <h3 className="section-text-orange">
            メリーさんは
            <span className="kanji">
              髪<span className="furigana">かみ</span>
            </span>
            が
            <span className="kanji">
              長<span className="furigana">なが</span>
            </span>
            いです
          </h3>
        </div>
        <div className="indent">
          <p>Normally, we would describe someone who has long hair with:</p>
          <p className="tab">
            トムさんの
            <span className="kanji">
              髪<span className="furigana">かみ</span>
            </span>
            は
            <span className="kanji">
              長<span className="furigana">なが</span>
            </span>
            いです。
            <br />
            <i>Tom's hair is long.</i>
          </p>
          <p>It is more natural in Japanese to say:</p>
          <p className="tab">
            トムさんは
            <span className="kanji">
              髪<span className="furigana">かみ</span>
            </span>
            <span className="underline-orange">が</span>
            <span className="kanji">
              長<span className="furigana">なが</span>
            </span>
            いです。
            <br />
            <i>Tom has long hair. (＝ As for Tom, he has long hair.)</i>
          </p>
          <p>
            This also applies to descriptions of a person's physical attributes
            in general.
          </p>
          <table className="table-list table-mini table-border-orange">
            <thead>
              <tr>
                <th colSpan="3" className="table-header text-orange">
                  <span className="kanji">
                    体<span className="furigana">からだ</span>
                  </span>
                  の
                  <span className="kanji">
                    部<span className="furigana">ぶ</span>
                  </span>
                  <span className="kanji">
                    分<span className="furigana">ぶん</span>
                  </span>
                  <span className="text-black"> Parts of the Body</span>
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
            <span className="kanji">
              背<span className="furigana">せ</span>
            </span>
            が
            <span className="kanji">
              高<span className="furigana">たか</span>
            </span>
            い。
            <br />
            <i>is tall</i>
          </p>
          <p className="tab">
            <span className="kanji">
              背<span className="furigana">せ</span>
            </span>
            が
            <span className="kanji">
              低<span className="furigana">ひく</span>
            </span>
            い。
            <br />
            <i>is short</i>
          </p>
          <p className="tab">
            <span className="kanji">
              頭<span className="furigana">あたま</span>
            </span>
            がいい。
            <br />
            <i>is bright/smart</i>
          </p>
        </div>
      </section>

      <section id="section4">
        <div className="section-header">
          <h3 className="section-circle circle-orange">4</h3>
          <h3 className="section-text-orange">
            Adjective/Noun Te-forms for Joining Sentences
          </h3>
        </div>
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
                <td>
                  <span className="kanji">
                    安<span className="furigana">やす</span>
                  </span>
                  い
                </td>
                <td>→</td>
                <td>
                  <span className="kanji">
                    安<span className="furigana">やす</span>
                  </span>
                  <span className="underline-orange">くて</span>
                </td>
              </tr>
              <tr>
                <td className="text-right">(irregular)</td>
                <td>いい</td>
                <td>→</td>
                <td>よくて</td>
              </tr>
              <tr>
                <td>な-adjectives:</td>
                <td>
                  <span className="kanji">
                    元<span className="furigana">げん</span>
                  </span>
                  <span className="kanji">
                    気<span className="furigana">き</span>
                  </span>{" "}
                  (な)
                </td>
                <td>→</td>
                <td>
                  <span className="kanji">
                    元<span className="furigana">げん</span>
                  </span>
                  <span className="kanji">
                    気<span className="furigana">き</span>
                  </span>
                  <span className="underline-orange">で</span>
                </td>
              </tr>
              <tr>
                <td>noun + です:</td>
                <td>
                  <span className="kanji">
                    日<span className="furigana">に</span>
                  </span>
                  <span className="kanji">
                    本<span className="furigana">ほん</span>
                  </span>
                  <span className="kanji">
                    人<span className="furigana">じん</span>
                  </span>
                  です
                </td>
                <td>→</td>
                <td>
                  <span className="kanji">
                    日<span className="furigana">に</span>
                  </span>
                  <span className="kanji">
                    本<span className="furigana">ほん</span>
                  </span>
                  <span className="kanji">
                    人<span className="furigana">じん</span>
                  </span>
                  <span className="underline-orange">で</span>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            あの
            <span className="kanji">
              店<span className="furigana">みせ</span>
            </span>
            の
            <span className="kanji">
              食<span className="furigana">た</span>
            </span>
            べ
            <span className="kanji">
              物<span className="furigana">もの</span>
            </span>
            は
            <span className="underline-orange">
              <span className="kanji">
                安<span className="furigana">やす</span>
              </span>
              くて
            </span>
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
        <div className="section-header">
          <h3 className="section-circle circle-orange">5</h3>
          <h3 className="section-text-orange">
            Verb Stem + に
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            く
          </h3>
        </div>
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
                <td>
                  <span className="kanji">
                    行<span className="furigana">い</span>
                  </span>
                  く
                </td>
              </tr>
              <tr>
                <td>へ</td>
                <td>
                  <span className="kanji">
                    来<span className="furigana">く</span>
                  </span>
                  る
                </td>
              </tr>
              <tr>
                <td colSpan="1"></td>
                <td>
                  <span className="kanji">
                    帰<span className="furigana">かえ</span>
                  </span>
                  る
                </td>
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
                <td>
                  <span className="kanji">
                    食<span className="furigana">た</span>
                  </span>
                  べる
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="underline-orange">
                    <span className="kanji">
                      食<span className="furigana">た</span>
                    </span>
                    べ
                  </span>{" "}
                  (ます)
                </td>
                <td></td>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  む
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="underline-orange">
                    <span className="kanji">
                      読<span className="furigana">よ</span>
                    </span>
                    み
                  </span>{" "}
                  (ます)
                </td>
                <td>etc.</td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            デパートに
            <span className="border-orange">
              かばんを
              <span className="kanji">
                買<span className="furigana">か</span>
              </span>
              い
            </span>
            に
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            きました。
            <br />
            <i>I went to a department store to buy a bag.</i>
          </p>
        </div>
      </section>

      <section id="section6">
        <div className="section-header">
          <h3 className="section-circle circle-orange">6</h3>
          <h3 className="section-text-orange">Counting People</h3>
        </div>
        <div className="indent">
          <p>
            The "counter" for people is{" "}
            <span className="kanji">
              人<span className="furigana">にん</span>
            </span>
            , but is irregular for "one" and "two" people.
          </p>
          <ol className="ordered-list">
            <li>
              <span
                className="underline-orange"
                style={{ marginRight: "20px" }}
              >
                ひとり
              </span>
              （一人）
            </li>
            <li>
              <span
                className="underline-orange"
                style={{ marginRight: "20px" }}
              >
                ふたり
              </span>
              （二人）
            </li>
            <li>
              <span style={{ marginRight: "20px" }}>さんにん</span>（三人）
            </li>
            <li>
              <span style={{ marginRight: "20px" }}>
                <span className="underline-orange">よ</span>にん
              </span>
              （四人）
            </li>
            <li>
              <span style={{ marginRight: "20px" }}>ごにん</span>（五人）
            </li>
            <li>
              <span style={{ marginRight: "20px" }}>ろくにん</span>（六人）
            </li>
            <li>
              <span style={{ marginRight: "20px" }}>しちにん／ななにん</span>
              （七人）
            </li>
            <li>
              <span style={{ marginRight: "20px" }}>はちにん</span>（八人）
            </li>
            <li>
              <span style={{ marginRight: "20px" }}>きゅうにん</span>（九人）
            </li>
            <li>
              <span style={{ marginRight: "20px" }}>じゅうにん</span>（十人）
            </li>
          </ol>
          <p>
            To count people in a class, for example, you can add ～人 after the
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
            <span className="kanji">
              私<span className="furigana">わたし</span>
            </span>
            のクラスに（は）インドネシア
            <span className="kanji">
              人<span className="furigana">にん</span>
            </span>
            の
            <span className="kanji">
              学生<span className="furigana">がくせい</span>
            </span>
            が
            <span className="kanji">
              一人<span className="furigana">ひとり</span>
            </span>
            います。
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
