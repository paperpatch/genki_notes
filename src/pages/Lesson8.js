import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson8() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 8: バーベキュー (Barbecue)</h2>
      <section id="section1">
        <h3>8.1: Short Forms</h3>
        <div className="indent">
          <p>
            A new paradigm of conjugation, called "short forms". Short forms are
            used to quote someone else, in casual conversations (as signs of
            intimacy), and in making negative requests.
          </p>
          <table className="table-list">
            <thead>
              <tr>
                <th colSpan="4" className="table-header">
                  Present, affirmative
                </th>
              </tr>
              <tr>
                <th></th>
                <th>long forms</th>
                <th>short forms</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>• verbs:</td>
                <td>読みます (yomi)</td>
                <td>読む</td>
                <td>(= Dictionary form)</td>
              </tr>
              <tr>
                <td>• い-adjectives:</td>
                <td>かわいいです</td>
                <td>かわいい</td>
                <td>(Drop です)</td>
              </tr>
              <tr>
                <td>• な-adjectives:</td>
                <td>静かです (shizuka)</td>
                <td>静かだ</td>
                <td>(Replace です with だ.)</td>
              </tr>
              <tr>
                <td>• noun + です:</td>
                <td>学生です (gakusei)</td>
                <td>学生だ</td>
                <td>(Replace です with だ.)</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th colSpan="4" className="table-header">
                  Present, negative
                </th>
              </tr>
              <tr>
                <th></th>
                <th>long forms</th>
                <th>short forms</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>• verbs:</td>
                <td>読みません</td>
                <td>読まない</td>
                <td>→ See below for more info</td>
              </tr>
              <tr>
                <td>• い-adjectives:</td>
                <td>かわいくないです</td>
                <td>かわいくない</td>
                <td>(Drop です)</td>
              </tr>
              <tr>
                <td>(exception) いい:</td>
                <td>
                  <span className="underline-orange">よ</span>くないです
                </td>
                <td>
                  <span className="underline-orange">よ</span>くない
                </td>
                <td></td>
              </tr>
              <tr>
                <td>• な-adjectives:</td>
                <td>静かじゃないです</td>
                <td>静かじゃない</td>
                <td>(Drop です)</td>
              </tr>
              <tr>
                <td>• noun + です:</td>
                <td>学生じゃないです</td>
                <td>学生じゃない</td>
                <td>(Drop です.)</td>
              </tr>
            </tbody>
          </table>
          <p>
            Verbs in negative. <i>Ru-</i>, <i>u-</i> and irregular vers
            conjugate differently.
          </p>
          <table className="table-list">
            <thead>
              <tr>
                <th colSpan="2" className="table-header">
                  Verb short forms (present, negative)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="2">
                  <i>ru-</i>verbs:
                </td>
                <td>Drop the final る and add ない</td>
              </tr>
              <tr>
                <td>食べる → 食べない</td>
              </tr>
              <td colSpan="2">
                <div className="horizontal-line-orange"></div>
              </td>
              <tr>
                <td rowSpan="3">
                  <i>u-</i>verbs:
                </td>
                <td>
                  Drop the last <i>-u</i> and add <i>-anai</i>. Verbs that have
                  う, however, get わ instead of あ.
                </td>
              </tr>
              <tr>
                <td>書く (kaku) → 書かない</td>
              </tr>
              <tr>
                <td>会う (ao) → 会わない</td>
              </tr>
              <td colSpan="2">
                <div className="horizontal-line-orange"></div>
              </td>
              <tr>
                <td rowSpan="3">irregular verbs:</td>
                <td>The vowels change.</td>
              </tr>
              <tr>
                <td>する → しない</td>
              </tr>
              <tr>
                <td>くる → こない</td>
              </tr>
              <td colSpan="2">
                <div className="horizontal-line-orange"></div>
              </td>
              <tr>
                <td rowSpan="2">exception:</td>
                <td>The verb ある is replaced by the adjective ない.</td>
              </tr>
              <tr>
                <td>ある → ない</td>
              </tr>
            </tbody>
          </table>
          <p>
            Think of the <i>u</i>-verb conjugation as moving up and down in the{" "}
            <i>hirgana</i> chart.
          </p>
          <table class="table-boxes">
            <tbody>
              <tr>
                <td className="border-none"></td>
                <td className="background-pink">
                  <span class="text-main">書</span>
                  <span class="text-sub">か</span>
                </td>
                <td className="background-pink">
                  <span class="text-main">話</span>
                  <span class="text-sub">はな</span>
                </td>
                <td className="background-pink">
                  <span class="text-main">待</span>
                  <span class="text-sub">ま</span>
                </td>
                <td className="background-pink">
                  <span class="text-main">死</span>
                  <span class="text-sub">し</span>
                </td>
                <td className="background-pink">
                  <span class="text-main">読</span>
                  <span class="text-sub">よ</span>
                </td>
                <td className="background-pink">
                  <span class="text-main">作</span>
                  <span class="text-sub">つく</span>
                </td>
                <td className="background-pink">
                  <span class="text-main">泳</span>
                  <span class="text-sub">およ</span>
                </td>
                <td className="background-pink">
                  <span class="text-main">遊</span>
                  <span class="text-sub">あそ</span>
                </td>
                <td className="background-pink">
                  <span class="text-main">買</span>
                  <span class="text-sub">か</span>
                </td>
                <td className="border-none"></td>
              </tr>
              <tr class="background-white">
                <td>negative</td>
                <td>か</td>
                <td>さ</td>
                <td>た</td>
                <td>な</td>
                <td>ま</td>
                <td>ら</td>
                <td>が</td>
                <td>ば</td>
                <td>わ</td>
                <td>~ない</td>
              </tr>
              <tr class="background-grey">
                <td>stem</td>
                <td>き</td>
                <td>し</td>
                <td>ち</td>
                <td>に</td>
                <td>み</td>
                <td>り</td>
                <td>ぎ</td>
                <td>び</td>
                <td>い</td>
                <td>~ます</td>
              </tr>
              <tr class="white-row">
                <td>affirmative</td>
                <td>く</td>
                <td>す</td>
                <td>つ</td>
                <td>ぬ</td>
                <td>む</td>
                <td>る</td>
                <td>ぐ</td>
                <td>ぶ</td>
                <td>う</td>
                <td>= Dictionary form</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section2">
        <h3>8.2: Short Forms in Informal Speech</h3>
        <div className="indent">
          <p>
            Close friends or family members speak with each other using short
            forms. Long forms tends to imply the speaker's intention to "keep a
            proper distance" from the listener.
          </p>
          <p className="tab">
            今日、学校に行く？ (Short form)
            <br />
            <i>Are you going to school today?</i>
          </p>
          <p className="tab">
            すみません、この電車は新宿にいきますか。 (Long form)
            <br />
            <i>Excuse me, does this train go to Shinjuku?</i>
          </p>
          <p>
            Be wary when switching to short forms, as Japanese speakers are very
            concious of seniority. Just because someone uses short forms with
            you does not mean it's a mutual relationshi in using short/long
            forms. Juniors often uses long forms to their senior while seniors
            are more free to use short forms to their juniors.
          </p>
          <p className="tab">
            Profesor: この漢字、わかる？。
            <br />
            <i>Do you know this kanji?</i>
          </p>
          <p className="tab">
            Student: はい、わかります。
            <br />
            <span style={{ marginRight: "50px" }}></span>(X うん、わかる。)
            <br />
            <i>Yes, I do.</i>
          </p>
          <p>
            In casual conversations, you drop the question particle か, and use
            the rising intonation to ask a question.
          </p>
          <p>
            In spoken language, you usually drop the sentence-final だ after a
            な-adjective or a noun. However, You keep the last だ in the written
            language.
          </p>
          <p className="tab">
            A: 元気？
            <br />
            B: うん、元気。
          </p>
          <p>Keep だ when you follow it up with ね or よ.</p>
          <p className="tab">
            メアリーさんは二年生<span className="underline-orange">だ</span>よ。
            <br />
            <i>Mary is a sophomore.</i>
          </p>
          <p>
            はい and いいえ are usually replaced by the less formal うん and
            ううん.
          </p>
          <p className="tab">
            よくスポーツをする？
            <br />
            <i>Do you often play sports?</i>
          </p>
          <p className="tab">
            うん、する。/ ううん、しない。
            <br />
            <i>Yes, I do. / No, I don't.</i>
          </p>
        </div>
      </section>

      <section id="section3">
        <h3>8.3: Short Forms in Quoted Speech: ~と思います</h3>
        <div className="indent">
          <p>
            To describe what you think, use the short form, plus と思います (I
            think that...). と is a quotation particle, which does the job of
            both the English word "that" in indirect quotation and of quotation
            marks (" ") in direct quotation.
          </p>
          <p className="tab">
            (私は)たけしさんはメアリーさんが好きだと思います。
            <br />
            <i>I think Takeshi likes Mary.</i>
          </p>
          <p>
            To say that you <i>don't think</i> something is the case, it is more
            common in Japanese to say ~ないと思います (I <i>think</i> that
            something is <i>not</i> the case) than ~と思いません (
            <i>I don't think</i>).
          </p>
          <p className="tab">
            (私は)メアリーさんはたけしさんが好きじゃないと思います。
            <br />
            <i>
              I don't think Mary likes Takeshi. (= I think Mary doesn't like
              Takeshi.)
            </i>
          </p>
        </div>
      </section>

      <section id="section4">
        <h3>8.4: Short Forms in Quoted Speech: ~と言っていました</h3>
        <div className="indent">
          <p>
            To quote someone, use the short form plus と言っていました (They
            said "..."). Note that the present tense is preserved in the quote.
          </p>
          <p className="tab">
            ヤスミンさんは、あした試験があると言っていました。
            <br />
            <i>Yasmin said that there would be an exam tomorrow.</i>
          </p>
          <p className="tab">
            山下先生は結婚していないと言っていました。
            <br />
            <i>Professor Yamashita said that he is not married.</i>
          </p>
        </div>
      </section>

      <section id="section5">
        <h3>8.5: ~ないでください</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section6">
        <h3>8.6: のが好きです/上手です</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section7">
        <h3>8.7: The Subject Particle が</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section8">
        <h3>8.7: 何か and 何も</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Lesson8;
