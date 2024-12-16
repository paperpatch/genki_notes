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
          <table className="table-list table-border-orange">
            <thead>
              <tr>
                <th colSpan="4" className="table-header text-orange">
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
                  む
                </td>
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
                <td>
                  <span className="kanji">
                    静<span className="furigana">しず</span>
                  </span>
                  かです
                </td>
                <td>
                  <span className="kanji">
                    静<span className="furigana">しず</span>
                  </span>
                  かだ
                </td>
                <td>(Replace です with だ.)</td>
              </tr>
              <tr>
                <td>• noun + です:</td>
                <td>
                  <span className="kanji">
                    学生<span className="furigana">がくせい</span>
                  </span>
                  です (gakusei)
                </td>
                <td>
                  <span className="kanji">
                    学生<span className="furigana">がくせい</span>
                  </span>
                  だ
                </td>
                <td>(Replace です with だ.)</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th colSpan="4" className="table-header text-orange">
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
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  みません
                </td>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  まない
                </td>
                <td>→ See below for more info</td>
              </tr>
              <tr>
                <td>• い-adjectives:</td>
                <td>かわいくないです</td>
                <td>かわいくない</td>
                <td>(Drop です)</td>
              </tr>
              <tr>
                <td>　(exception) いい:</td>
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
                <td>
                  <span className="kanji">
                    静<span className="furigana">しず</span>
                  </span>
                  かじゃないです
                </td>
                <td>
                  <span className="kanji">
                    静<span className="furigana">しず</span>
                  </span>
                  かじゃない
                </td>
                <td>(Drop です)</td>
              </tr>
              <tr>
                <td>• noun + です:</td>
                <td>
                  <span className="kanji">
                    学生<span className="furigana">がくせい</span>
                  </span>
                  じゃないです
                </td>
                <td>
                  <span className="kanji">
                    学生<span className="furigana">がくせい</span>
                  </span>
                  じゃない
                </td>
                <td>(Drop です.)</td>
              </tr>
            </tbody>
          </table>
          <p>
            Verbs in negative. <i>Ru-</i>, <i>u-</i> and irregular vers
            conjugate differently.
          </p>
          <table className="table-list table-border-orange">
            <thead>
              <tr>
                <th colSpan="2" className="table-header text-orange">
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
                <td>
                  <span className="kanji">
                    食<span className="furigana">た</span>
                  </span>
                  べる →{" "}
                  <span className="kanji">
                    食<span className="furigana">た</span>
                  </span>
                  べない
                </td>
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
                <td>
                  <span className="kanji">
                    書<span className="furigana">か</span>
                  </span>
                  く →{" "}
                  <span className="kanji">
                    書<span className="furigana">か</span>
                  </span>
                  かない
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    会<span className="furigana">あ</span>
                  </span>
                  う (ao) →{" "}
                  <span className="kanji">
                    会<span className="furigana">あ</span>
                  </span>
                  わない
                </td>
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
            <i>hiragana</i> chart.
          </p>
          <table className="table-boxes">
            <tbody>
              <tr>
                <td className="border-none"></td>
                <td className="background-pink">
                  <span className="text-main">書</span>
                  <span className="text-sub">か</span>
                </td>
                <td className="background-pink">
                  <span className="text-main">話</span>
                  <span className="text-sub">はな</span>
                </td>
                <td className="background-pink">
                  <span className="text-main">待</span>
                  <span className="text-sub">ま</span>
                </td>
                <td className="background-pink">
                  <span className="text-main">死</span>
                  <span className="text-sub">し</span>
                </td>
                <td className="background-pink">
                  <span className="text-main">読</span>
                  <span className="text-sub">よ</span>
                </td>
                <td className="background-pink">
                  <span className="text-main">作</span>
                  <span className="text-sub">つく</span>
                </td>
                <td className="background-pink">
                  <span className="text-main">泳</span>
                  <span className="text-sub">およ</span>
                </td>
                <td className="background-pink">
                  <span className="text-main">遊</span>
                  <span className="text-sub">あそ</span>
                </td>
                <td className="background-pink">
                  <span className="text-main">買</span>
                  <span className="text-sub">か</span>
                </td>
                <td className="border-none"></td>
              </tr>
              <tr className="background-white">
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
                <td>～ない</td>
              </tr>
              <tr className="background-grey">
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
                <td>～ます</td>
              </tr>
              <tr className="background-white">
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
          <table className="table-list table-mini">
            <tbody>
              <tr>
                <td rowSpan={4} style={{ verticalAlign: "top" }}>
                  (Between friends)
                </td>
                <td>
                  A:{" "}
                  <span className="kanji">
                    今日<span className="furigana">きょう</span>
                  </span>
                  、
                  <span className="kanji">
                    学校<span className="furigana">がっこう</span>
                  </span>
                  に行く？ (Short form)
                </td>
              </tr>
              <tr>
                <td>
                  <i>Are you going to school today?</i>
                </td>
              </tr>
              <tr>
                <td>B: ううん、行かない。</td>
              </tr>
              <tr>
                <td>
                  <i>No, I'm not.</i>
                </td>
              </tr>
              <br />
              <tr>
                <td rowSpan={4} style={{ verticalAlign: "top" }}>
                  (To a stranger)
                </td>
                <td>
                  A: すみません、この
                  <span className="kanji">
                    電車<span className="furigana">でんしゃ</span>
                  </span>
                  は
                  <span className="kanji">
                    新宿<span className="furigana">しんじゅく</span>
                  </span>
                  にいきますか。 (Long form)
                </td>
              </tr>
              <tr>
                <td>
                  <i>Excuse me, does this train go to Shinjuku?</i>
                </td>
              </tr>
              <tr>
                <td>
                  B: いいえ、
                  <span className="kanji">
                    行<span className="furigana">い</span>
                  </span>
                  きませにょ。
                </td>
              </tr>
              <tr>
                <td>
                  <i>No, it doesn't.</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Be wary when switching to short forms, as Japanese speakers are very
            concious of seniority. Just because someone uses short forms with
            you does not mean it's a mutual relationshi in using short/long
            forms. Juniors often uses long forms to their senior while seniors
            are more free to use short forms to their juniors.
          </p>
          <table className="table-list table-mini">
            <tbody>
              <tr>
                <td>Profesor: この漢字、わかる？</td>
                <td>
                  <i>Do you know this kanji?</i>
                </td>
              </tr>
              <tr>
                <td>
                  Student: はい、わかります。
                  <br />
                  　　　　(
                  <span className="text-red"> ✕ </span>うん、わかる。)
                </td>
                <td>
                  <i>Yes, I do.</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            In casual conversations, you drop the question particle か, and use
            the rising intonation to ask a question.
          </p>
          <p className="tab">
            どんな
            <span className="kanji">
              音楽<span className="furigana">おんがく</span>
            </span>
            を
            <span className="kanji">
              聞<span className="furigana">き</span>
            </span>
            く？　　（ <span className="text-red">✕</span> どな
            <span className="kanji">
              音楽<span className="furigana">おんがく</span>
            </span>
            を
            <span className="kanji">
              聞<span className="furigana">き</span>
            </span>
            く<span className="underline-orange">か</span>？）
            <br />
            <i>Do you know this kanji?</i>
          </p>

          <p>
            In spoken language, you usually drop the sentence-final だ after a
            な-adjective or a noun. However, You keep the last だ in the written
            language.
          </p>
          <table className="table-list table-mini">
            <tbody>
              <tr>
                <td>A: 元気？</td>
                <td>
                  <i>Are you good?</i>
                </td>
              </tr>
              <tr>
                <td>B: うん、元気。</td>
                <td>
                  <i>Yes, I am.</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>Keep だ when you follow it up with ね or よ.</p>
          <table className="table-list table-mini">
            <tbody>
              <tr>
                <td>
                  メアリーさんは二年生
                  <span className="underline-orange">だ</span>
                  よ。
                </td>
                <td>
                  <i>Mary is a sophomore.</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            はい and いいえ are usually replaced by the less formal うん and
            ううん.
          </p>
          <table className="table-list table-mini">
            <tbody>
              <tr>
                <td>A: よくスポーツをする？</td>
                <td>
                  <i>Do you often play sports?</i>
                </td>
              </tr>
              <tr>
                <td>B: うん、する。/ ううん、しない。</td>
                <td>
                  <i>Yes, I do. / No, I don't.</i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section3">
        <h3>8.3: Short Forms in Quoted Speech: ～と思います</h3>
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
            common in Japanese to say ～ないと思います (I <i>think</i> that
            something is <i>not</i> the case) than ～と思いません (
            <i>I don't think</i>).
          </p>
          <p className="tab">
            (私は)メアリーさんはたけしさんが好きじゃないと思います。
            <br />
            <i>
              I don't think Mary likes Takeshi. ( = I think Mary doesn't like
              Takeshi.)
            </i>
          </p>
        </div>
      </section>

      <section id="section4">
        <h3>8.4: Short Forms in Quoted Speech: ～と言っていました</h3>
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
        <h3>8.5: ～ないでください</h3>
        <div className="indent">
          <p>
            To request that someone refrains from doing something, use a
            negative verbal short form plus でください.
          </p>
          <p className="tab">
            ここで写真を撮らないでください。
            <br />
            <i>Please don't take pictures here.</i>
          </p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>verb (short, negative) + でください</td>
                <td>
                  <i>Please don't...</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            ないでください often is a better answer than てはいけません to a
            てもいいですか question.
          </p>
          <p className="tab">
            A: この部屋に入ってもいいですか。
            <br />
            <i>May I enter this room?</i>
          </p>
          <p className="tab">
            B:{" "}
            <span className="kanji">
              入<span className="furigana">はい</span>
            </span>
            らないでください。
            <br />
            <i>Please don't.</i>
          </p>
          <p className="tab">
            Compare:{" "}
            <span className="kanji">
              入<span className="furigana">はい</span>
            </span>
            ってはいけません。
            <br />
            (Implies that you are in a position of authority.)
          </p>
        </div>
      </section>

      <section id="section6">
        <h3>8.6: Verb のが好きです/上手です</h3>
        <div className="indent">
          <p>
            A verb short form + の turns a verb into a noun describing an
            action. For example, you can describe what you like/dislike doing.
          </p>
          <p className="tab">
            (私は)日本語を
            <span className="underline-black">
              <span className="kanji">
                勉強<span className="furigana">べんきょう</span>
              </span>
              する
            </span>
            <span className="border-orange">の</span>
            が好きです。
            <br />
            <i>I like studying the Japanese language.</i>
          </p>
          <p className="tab">
            私は
            <span className="kanji">
              部屋<span className="furigana">へや</span>
            </span>
            を
            <span className="underline-black">
              <span className="kanji">
                掃除<span className="furigana">そうじ</span>
              </span>
              する
            </span>
            <span className="border-orange">の</span>
            がきらいです。
            <br />
            <i>I don't like cleaning my room.</i>
          </p>
          <p>
            "To be good/bad at doing something" is ～が上手です (is good at ...)
            and ～が下手です"
          </p>
          <p className="tab">
            ロバートさんは
            <span className="kanji">
              料理<span className="furigana">りょうり</span>
            </span>
            を
            <span className="underline-black">
              <span className="kanji">
                作<span className="furigana">つく</span>
              </span>
              る
            </span>
            <span className="border-orange">の</span>
            が上手です。
            <br />
            <i>Robert is good at cooking meals.</i>
          </p>
          <p className="tab">
            たけしさんは
            <span className="kanji">
              英語<span className="furigana">えいご</span>
            </span>
            を<span className="underline-black">話す</span>
            <span className="border-orange">の</span>
            が下手です。
            <br />
            <i>Takeshi is not a good speaker of English.</i>
          </p>
          <table className="table-list table-mini table-text-center table-border-orange">
            <tbody>
              <tr>
                <td rowSpan="4">person は activity (verb) のが</td>
                <td>好き</td>
                <td rowSpan="4">です。</td>
                <td>
                  <i>likes doing ...</i>
                </td>
              </tr>
              <tr>
                <td>きらい</td>
                <td>
                  <i>doesn't like doing ...</i>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    上手<span className="furigana">じょうず</span>
                  </span>
                </td>
                <td>
                  <i>is good at doing ...</i>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    下<span className="furigana">へ</span>
                  </span>
                  <span className="kanji">
                    手<span className="furigana">た</span>
                  </span>
                </td>
                <td>
                  <i>is poor at doing ...</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            It's a common mistake to use the <i>te</i>-form of a verb in such
            contexts, misled by the association between ～ている and the verb in
            the <i>-ing</i> form in English.
          </p>
          <p className="tab">
            <span className="text-red">✕</span> たけしさんは英語を
            <span className="underline-orange">話して</span>
            が下手です。
          </p>
        </div>
      </section>

      <section id="section7">
        <h3>8.7: The Subject Particle が</h3>
        <div className="indent">
          <p>
            One usage of replacing the particle は with が depends on what is
            emphasized and what word they're attached to. は, the topic
            particle, usually emphasizse what comes after, and not what it
            marks. が, the subject particle, does the opposite. It places
            emphasis on what comes before it.
          </p>
          <table className="table-list table-mini">
            <tbody>
              <tr>
                <td>
                  これは<span className="underline-orange">大きい犬です</span>。
                </td>
                <td>
                  <i>
                    This, <span className="underline-orange">IS A BIG DOG</span>
                    .
                  </i>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="underline-orange">これ</span>が大きい犬です。
                </td>
                <td>
                  <i>
                    <span className="underline-orange">THIS RIGHT HERE</span>,
                    is a big dog.
                  </i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            The は emphasize the 大きい犬です, while が is emphasize the これ.
          </p>
          <a
            href="https://www.youtube.com/watch?v=ytjRoTwWnzw"
            target="_blank"
            rel="noreferrer"
            className="tab link"
          >
            [Youtube Video] は and が Particles
          </a>
          <p>
            Question words like だれ and 何 in the subject of a sentence are
            followed by が instead of は.
          </p>
          <p className="tab">
            だれ<span className="underline-orange">が</span>沖縄に行きましたか。
            <br />
            <i>Who went to Okinawa.</i>
          </p>
          <p className="tab">
            Compare: <span className="text-red">✕</span> だれ
            <span className="underline-orange">は</span>
            沖縄に行きましたか。
          </p>
          <p>
            A question word that is the subject of a sentence is never followed
            by the particle は, but always by the particle が. A noun that will
            provide the answer to such a question is also followed by the
            particle が.
          </p>
          <p className="tab">
            A: どのクラス
            <span className="underline-orange">が</span>
            おもしろいですか。
            <br />
            <i>Which class is (the most) interesting?</i>
          </p>
          <p className="tab">
            B: 日本語のクラス
            <span className="underline-orange">が</span>
            おもしろいです。
            <br />
            <i>Japanese class is.</i>
          </p>
        </div>
      </section>

      <section id="section8">
        <h3>8.8: 何か and 何も</h3>
        <div className="indent">
          <p>
            The word for "something" is{" "}
            <span className="kanji">
              何<span className="furigana">なに</span>
            </span>
            か, and the word for "anything" in negative sentences is{" "}
            <span className="kanji">
              何<span className="furigana">なに</span>
            </span>
            も.
          </p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td colSpan="3">"Some" and "any" in</td>
              </tr>
              <tr>
                <td>• positive statements:</td>
                <td>
                  <span className="kanji">
                    何<span className="furigana">なに</span>
                  </span>
                  か
                </td>
                <td>
                  <i>something</i>
                </td>
              </tr>
              <tr>
                <td>• questions:</td>
                <td>
                  <span className="kanji">
                    何<span className="furigana">なに</span>
                  </span>
                  か
                </td>
                <td>
                  <i>anything?</i>
                </td>
              </tr>
              <tr>
                <td>• negative statements:</td>
                <td>
                  <span className="kanji">
                    何<span className="furigana">なに</span>
                  </span>
                  も + negative
                </td>
                <td>
                  <i>not ... anything</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            When 何か and 何も are used in places where the particles は, が,
            and を are expeted, they are often used on their own, without the
            help of particles.
          </p>
          <p className="tab">
            猫が
            <span className="underline-orange">何か</span>
            <span className="kanji">
              持<span className="furigana">も</span>
            </span>
            ってきました。
            <br />
            <i>The cat has brought something.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              猫<span className="furigana">ねこ</span>
            </span>
            は<span className="underline-orange">何か</span>
            食べましたか。
            <br />
            <i>Did the cat eat anything?</i>
          </p>
          <p className="tab">
            いいえ、
            <span className="kanji">
              猫<span className="furigana">ねこ</span>
            </span>
            は<span className="underline-orange">何も</span>
            食べませんでした。
            <br />
            <i>No, the cat did not eat anything.</i>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Lesson8;
