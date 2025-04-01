import React from "react";
import { useSmoothScrollToSection } from "../../utils/Helpers";

function Lesson15() {
  useSmoothScrollToSection();

  return (
    <div>
      <div className="lesson-header">
        <h2 className="lesson-title background-green">Lesson 15</h2>
        <h2 className="lesson-title-green">
          <span className="kanji">
            長<span className="furigana">なが</span>
          </span>
          <span className="kanji">
            野<span className="furigana">の</span>
          </span>
          <span className="kanji">
            旅<span className="furigana">りょ</span>
          </span>
          <span className="kanji">
            行<span className="furigana">こう</span>
          </span>
          (A Trip to Nagano)
        </h2>
      </div>

      <section id="section1">
        <div className="section-header">
          <h3 className="section-circle circle-green">1</h3>
          <h3 className="section-text-green">Volitional Form</h3>
        </div>
        <div className="indent">
          <p>
            The volitional form of a verb is a more casual equivalent of
            ましょう. You can use it to suggest a plan to a close friend.
          </p>
          <p className="tab">
            A:{" "}
            <span className="kanji">
              明日<span className="furigana">あした</span>
            </span>
            は
            <span className="kanji">
              授業<span className="furigana">じゅぎょう</span>
            </span>
            がないから、
            <span className="kanji">
              今<span className="furigana">こん</span>
            </span>
            <span className="kanji">
              晩<span className="furigana">ばん</span>
            </span>
            はどこかにいこう。
            <br />
            <i>
              We won't have any classes tomorrow. Let's go somewhere this
              evening.
            </i>
          </p>
          <p className="tab">
            B: いいえ、そうしよう。
            <br />
            <i>Sounds good. Let's do so.</i>
          </p>
          <p>You can make the volitional forms using the rules listed below:</p>
          <table className="table-list table-mini table-border-green">
            <thead>
              <tr>
                <th colSpan="6" className="table-header text-green">
                  Potential verbs
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6">
                  • ru-verbs: Drop the final -<i>ru</i> and add -<i>yoo</i>.
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  見る (<i>mi-ru</i>)
                </td>
                <td className="arrow-right">→</td>
                <td colSpan="2">
                  見よう (<i>mi-yoo</i>)
                </td>
              </tr>
              <tr>
                <td colSpan="6">
                  • u-verbs: Drop the final -<i>ru</i> and add -<i>oo</i>.
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  <span className="kanji">
                    行<span className="furigana">い</span>
                  </span>
                  く (<i>ik-u</i>)
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    行<span className="furigana">い</span>
                  </span>
                  こう (<i>ik-oo</i>)
                </td>
                <td>
                  <span className="kanji">
                    作<span className="furigana">つく</span>
                  </span>
                  る
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    作<span className="furigana">つく</span>
                  </span>
                  ろう
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  <span className="kanji">
                    話<span className="furigana">はな</span>
                  </span>
                  す
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    話<span className="furigana">はな</span>
                  </span>
                  そう
                </td>
                <td>
                  <span className="kanji">
                    泳<span className="furigana">およ</span>
                  </span>
                  ぐ
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    泳<span className="furigana">およ</span>
                  </span>
                  ごう
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  <span className="kanji">
                    待<span className="furigana">ま</span>
                  </span>
                  つ
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    待<span className="furigana">ま</span>
                  </span>
                  とう
                </td>
                <td>
                  <span className="kanji">
                    遊<span className="furigana">あそ</span>
                  </span>
                  ぶ
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    遊<span className="furigana">あそ</span>
                  </span>
                  ぼう
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  <span className="kanji">
                    死<span className="furigana">し</span>
                  </span>
                  ぬ
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    死<span className="furigana">し</span>
                  </span>
                  のう
                </td>
                <td>
                  <span className="kanji">
                    買<span className="furigana">か</span>
                  </span>
                  う
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    買<span className="furigana">か</span>
                  </span>
                  おう
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  む
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  もう
                </td>
              </tr>
              <tr>
                <td colSpan="6">• irregular verbs:</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>くる</td>
                <td className="arrow-right">→</td>
                <td>こよう</td>
                <td>する</td>
                <td className="arrow-right">→</td>
                <td>しよう</td>
              </tr>
            </tbody>
          </table>
          <p>
            We can think of the u-verb conjugation in terms of a hiragana chart.
          </p>
          <table className="table-boxes">
            <tbody>
              <tr>
                <td className="border-none"></td>
                <td className="background-mint">
                  <span className="text-main">書</span>
                  <span className="text-sub">か</span>
                </td>
                <td className="background-mint">
                  <span className="text-main">話</span>
                  <span className="text-sub">はな</span>
                </td>
                <td className="background-mint">
                  <span className="text-main">待</span>
                  <span className="text-sub">ま</span>
                </td>
                <td className="background-mint">
                  <span className="text-main">死</span>
                  <span className="text-sub">し</span>
                </td>
                <td className="background-mint">
                  <span className="text-main">読</span>
                  <span className="text-sub">よ</span>
                </td>
                <td className="background-mint">
                  <span className="text-main">作</span>
                  <span className="text-sub">つく</span>
                </td>
                <td className="background-mint">
                  <span className="text-main">泳</span>
                  <span className="text-sub">およ</span>
                </td>
                <td className="background-mint">
                  <span className="text-main">遊</span>
                  <span className="text-sub">あそ</span>
                </td>
                <td className="background-mint">
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
              <tr className="background-white">
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
              <tr className="background-white">
                <td>potential</td>
                <td>け</td>
                <td>せ</td>
                <td>て</td>
                <td>ね</td>
                <td>め</td>
                <td>れ</td>
                <td>げ</td>
                <td>べ</td>
                <td>え</td>
                <td>～る</td>
              </tr>
              <tr className="background-grey">
                <td>volitional</td>
                <td>こ</td>
                <td>そ</td>
                <td>と</td>
                <td>の</td>
                <td>も</td>
                <td>ろ</td>
                <td>ご</td>
                <td>ぼ</td>
                <td>お</td>
                <td>～う</td>
              </tr>
            </tbody>
          </table>
          <p>
            You can use the volitional plus the question particle か to ask for
            an opinion in your offer or suggestion.
          </p>
          <div className="tab table-double-column">
            <p>
              A:{" "}
              <span className="kanji">
                手<span className="furigana">て</span>
              </span>
              <span className="kanji">
                伝<span className="furigana">つだ</span>
              </span>
              うおうか。
            </p>
            <p>
              <i>Shall I lend you a hand?</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              B: ううん、
              <span className="kanji">
                大丈夫<span className="furigana">だいじょうぶ</span>
              </span>
              。
            </p>
            <p>
              <i>No, I'm doing okay.</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              A:{" "}
              <span className="kanji">
                今<span className="furigana">こん</span>
              </span>
              <span className="kanji">
                度<span className="furigana">ど</span>
              </span>
              、いつ
              <span className="kanji">
                会<span className="furigana">あ</span>
              </span>
              おうか。
            </p>
            <p>
              <i>When shall we meet again?</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              B:{" "}
              <span className="kanji">
                来週<span className="furigana">らいしゅう</span>
              </span>
              の
              <span className="kanji">
                土<span className="furigana">ど</span>
              </span>
              <span className="kanji">
                曜<span className="furigana">よう</span>
              </span>
              <span className="kanji">
                日<span className="furigana">び</span>
              </span>
              はどう？
            </p>
            <p>
              <i>How about Saturday next week?</i>
            </p>
          </div>
        </div>
      </section>

      <section id="section2">
        <div className="section-header">
          <h3 className="section-circle circle-green">2</h3>
          <h3 className="section-text-green">
            Volitional Form + と思っています
          </h3>
        </div>
        <div className="indent">
          <p>
            We use the volitional form + と思っています to talk about our
            resolutions.
          </p>
          <p className="tab">
            <span className="kanji">
              毎<span className="furigana">まい</span>
            </span>
            <span className="kanji">
              日<span className="furigana">にち</span>
            </span>
            <span className="kanji">
              三<span className="furigana">さん</span>
            </span>
            <span className="kanji">
              時<span className="furigana">じ</span>
            </span>
            <span className="kanji">
              間<span className="furigana">かん</span>
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
            を
            <span className="kanji">
              勉強<span className="furigana">べんきょう</span>
            </span>
            しようと
            <span className="kanji">
              思<span className="furigana">おも</span>
            </span>
            っています。
            <br />
            <i>
              I've decided to / I'm going to study Japanese for three hours
              every day.
            </i>
          </p>
          <p>
            You can also use the volitional + と思います, suggesting that the
            decision to perform the activity is being made <i>on the spot</i>,
            or spontaneously, at the time of speaking. と思っています, in
            contrast, suggests that you have <i>already decided</i> to do
            something.
          </p>
          <p className="tab">Situation 1</p>
          <p className="tab">
            Q:{" "}
            <span className="kanji">
              十万円<span className="furigana">じゅうまんえ</span>
            </span>
            あげましょう。
            <span className="kanji">
              何<span className="furigana">なに</span>
            </span>
            に
            <span className="kanji">
              使<span className="furigana">つか</span>
            </span>
            いますか。
            <br />
            <i>I will give you 100,000 yen. What will you use it for?</i>
          </p>
          <p className="tab">
            A:{" "}
            <span className="kanji">
              旅<span className="furigana">りょ</span>
            </span>
            <span className="kanji">
              行<span className="furigana">こう</span>
            </span>
            に
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            こう
            <span className="underline-green">
              と
              <span className="kanji">
                思<span className="furigana">おも</span>
              </span>
              います
            </span>
            。
            <br />
            <i>I will go on a trip. (decision made on the spot)</i>
          </p>
          <p className="tab">Situation 2</p>
          <p className="tab">
            Q:{" "}
            <span className="kanji">
              両親<span className="furigana">りょうしん</span>
            </span>
            から
            <span className="kanji">
              十万円<span className="furigana">じゅうまんえ</span>
            </span>
            もらったんですか。
            <span className="kanji">
              何<span className="furigana">なに</span>
            </span>
            に
            <span className="kanji">
              使<span className="furigana">つか</span>
            </span>
            いますか。
            <br />
            <i>
              You got 100,000 yen from your parents? What are you going to use
              it for?
            </i>
          </p>
          <p className="tab">
            A:{" "}
            <span className="kanji">
              旅<span className="furigana">りょ</span>
            </span>
            <span className="kanji">
              行<span className="furigana">こう</span>
            </span>
            に
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            こう
            <span className="underline-green">
              と
              <span className="kanji">
                思<span className="furigana">おも</span>
              </span>
              っています
            </span>
            。
            <br />
            <i>I am going to go on a trip. (decision already made)</i>
          </p>
          <p>
            Note that verbs in volitional forms and verbs in the present tense
            convey different ideas when they are used with と思います or
            と思っています. When you use volitionals, you are talking about your
            intention. When you use the present tense, you are talking about
            your prediction.
          </p>
          <p className="tab">
            <span className="kanji">
              日<span className="furigana">に</span>
            </span>
            <span className="kanji">
              本<span className="furigana">ほん</span>
            </span>
            の
            <span className="kanji">
              会<span className="furigana">かい</span>
            </span>
            <span className="kanji">
              社<span className="furigana">しゃ</span>
            </span>
            で
            <span className="underline-green">
              <span className="kanji">
                働<span className="furigana">はたら</span>
              </span>
              こう
            </span>
            と
            <span className="kanji">
              思<span className="furigana">おも</span>
            </span>
            います。
            <br />
            <i>I will / intend to work for a Japanese company.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              日<span className="furigana">に</span>
            </span>
            <span className="kanji">
              本<span className="furigana">ほん</span>
            </span>
            の
            <span className="kanji">
              会<span className="furigana">かい</span>
            </span>
            <span className="kanji">
              社<span className="furigana">しゃ</span>
            </span>
            で
            <span className="underline-green">
              <span className="kanji">
                働<span className="furigana">はたら</span>
              </span>
              く
            </span>
            と
            <span className="kanji">
              思<span className="furigana">おも</span>
            </span>
            います。
            <br />
            <i>I think they / I will be working for a Japanese company.</i>
          </p>
        </div>
      </section>

      <section id="section3">
        <div className="section-header">
          <h3 className="section-circle circle-green">3</h3>
          <h3 className="section-text-green">～ておく</h3>
        </div>
        <div className="indent">
          <p>
            The te-form of a verb plus the helping verb おく describes an action
            performed <i>in preparation for something</i>.
          </p>
          <p className="tab">
            <span className="kanji">
              明日<span className="furigana">あした</span>
            </span>
            <span className="kanji">
              試<span className="furigana">し</span>
            </span>
            <span className="kanji">
              験<span className="furigana">けん</span>
            </span>
            があるので、
            <span className="kanji">
              今<span className="furigana">こん</span>
            </span>
            <span className="kanji">
              晩<span className="furigana">ばん</span>
            </span>
            <span className="kanji">
              勉強<span className="furigana">べんきょう</span>
            </span>
            しておきます。
            <br />
            <i>
              Since there will be an exam tomorrow, I will study (for it)
              tonight.
            </i>
          </p>
          <p className="tab">
            <span className="kanji">
              だ<span className="furigana">とも</span>
            </span>
            だちが
            <span className="kanji">
              来<span className="furigana">く</span>
            </span>
            るから、
            <span className="kanji">
              部<span className="furigana">へ</span>
            </span>
            <span className="kanji">
              屋<span className="furigana">や</span>
            </span>
            を
            <span className="kanji">
              掃<span className="furigana">そう</span>
            </span>
            <span className="kanji">
              除<span className="furigana">じ</span>
            </span>
            しておかなきゃいけません。
            <br />
            <i>I have to clean the room, because my friends are coming.</i>
          </p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td>～ておく</td>
                <td>
                  <i>do something in preparation</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>ておく is often shortened to とく in speech.</p>
          <p className="tab">
            ホテルを
            <span className="kanji">
              予<span className="furigana">よやく</span>
            </span>
            <span className="kanji">
              約<span className="furigana">やく</span>
            </span>
            しとくね。
            <br />
            <i>I will make a hotel reservation in advance.</i>
          </p>
        </div>
      </section>

      <section id="section4">
        <div className="section-header">
          <h3 className="section-circle circle-green">4</h3>
          <h3 className="section-text-green">
            Using Sentences to Qualify Nouns
          </h3>
        </div>
        <div className="indent">
          <p>
            In the phrase おもしろい qualifies the noun{" "}
            <span className="kanji">
              本<span className="furigana">ほん</span>
            </span>{" "}
            and tells us what kind of book it is. You can also use sentences to
            qualify nouns. Examples of sentences that use qualifiers of nouns:
          </p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td>1.</td>
                <td>
                  <span className="border-green">昨日買った</span>
                </td>
                <td>本</td>
                <td>
                  <i>
                    the book{" "}
                    <span className="border-green">
                      that I bought yesterday
                    </span>
                  </i>
                </td>
              </tr>
              <tr>
                <td>2.</td>
                <td>
                  <span className="border-green">
                    <span className="kanji">
                      彼<span className="furigana">かれ</span>
                    </span>
                    がくれた
                  </span>
                </td>
                <td>本</td>
                <td>
                  <i>
                    the book{" "}
                    <span className="border-green">my boyfriend gave me</span>
                  </i>
                </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>
                  <span className="border-green">
                    つくえの
                    <span className="kanji">
                      上<span className="furigana">うえ</span>
                    </span>
                    にある
                  </span>
                </td>
                <td>本</td>
                <td>
                  <i>
                    the book{" "}
                    <span className="border-green">that is on the table</span>
                  </i>
                </td>
              </tr>
              <tr>
                <td>4.</td>
                <td>
                  <span className="border-green">日本で買えない</span>
                </td>
                <td>本</td>
                <td>
                  <i>
                    the book{" "}
                    <span className="border-green">
                      that you can't buy in Japan
                    </span>
                  </i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Qualifier sentences shows what kind of book we are talking aboutm
            just like adjectives.
          </p>
          <p>
            A "qualifier sentence + noun" combination is just like one big noun
            phrase. You can put it anywhere in a sentence that has a noun.
          </p>
          <div className="tab table-double-column">
            <p>
              これは
              <span className="border-green">
                <span className="kanji">
                  去年<span className="furigana">きょねん</span>
                </span>
                の
                <span className="kanji">
                  誕生<span className="furigana">たんじょう</span>
                </span>
                <span className="kanji">
                  日<span className="furigana">び</span>
                </span>
                に
                <span className="kanji">
                  彼<span className="furigana">かの</span>
                </span>
                <span className="kanji">
                  女<span className="furigana">じょ</span>
                </span>
                がくれた
              </span>
              <span className="kanji">
                本<span className="furigana">ほん</span>
              </span>
              です。
              <br />
              <i>
                This is a book that my girlfriend gave me on my birthday last
                year.
              </i>
            </p>
            <p>
              (cf. これは
              <span className="underline-green">
                <span className="kanji">
                  本<span className="furigana">ほん</span>
                </span>
              </span>
              です。)
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              <span className="kanji">
                父<span className="furigana">ちち</span>
              </span>
              が
              <span className="border-green">
                <span className="kanji">
                  村<span className="furigana">むら</span>
                </span>
                <span className="kanji">
                  上<span className="furigana">かみ</span>
                </span>
                <span className="kanji">
                  春<span className="furigana">はる</span>
                </span>
                <span className="kanji">
                  樹<span className="furigana">き</span>
                </span>
                が
                <span className="kanji">
                  書<span className="furigana">か</span>
                </span>
                いた
              </span>
              <span className="kanji">
                本<span className="furigana">ほん</span>
              </span>
              をくれました。
              <br />
              <i>My father gave me a book that Haruki Murakami wrote.</i>
            </p>
            <p>
              (cf.{" "}
              <span className="kanji">
                父<span className="furigana">ちち</span>
              </span>
              が
              <span className="underline-green">
                <span className="kanji">
                  本<span className="furigana">ほん</span>
                </span>
              </span>
              をくれました。)
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              <span className="border-green">
                <span className="kanji">
                  私<span className="furigana">わたし</span>
                </span>
                が
                <span className="kanji">
                  一<span className="furigana">いち</span>
                </span>
                <span className="kanji">
                  番<span className="furigana">ばん</span>
                </span>
                <span className="kanji">
                  感<span className="furigana">かん</span>
                </span>
                <span className="kanji">
                  動<span className="furigana">どう</span>
                </span>
                した
              </span>
              <span className="kanji">
                映<span className="furigana">えい</span>
              </span>
              <span className="kanji">
                画<span className="furigana">が</span>
              </span>
              は「
              <span className="kanji">
                生<span className="furigana">い</span>
              </span>
              きる」です。
              <br />
              <i>
                The movie I was touched by the most is "To Live", a 1952 film
                directed by Akira Kurosawa.
              </i>
            </p>
            <p>
              (cf.{" "}
              <span className="underline-green">
                <span className="kanji">
                  映<span className="furigana">えい</span>
                </span>
                <span className="kanji">
                  画<span className="furigana">が</span>
                </span>
              </span>
              は「
              <span className="kanji">
                生<span className="furigana">い</span>
              </span>
              きる」です。)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Lesson15;
