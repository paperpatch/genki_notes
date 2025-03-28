import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson19() {
  useSmoothScrollToSection();

  return (
    <div>
      <div className="lesson-header">
        <h2 className="lesson-title background-green">Lesson 19</h2>
        <h2 className="lesson-title-green">
          <span className="kanji">
            出<span className="furigana">で</span>
          </span>
          <span className="kanji">
            迎<span className="furigana">むか</span>
          </span>
          え (Meeting the Boss)
        </h2>
      </div>

      <section id="section1">
        <div className="section-header">
          <h3 className="section-circle circle-green">1</h3>
          <h3 className="section-text-green">Honorific Verbs</h3>
        </div>
        <div className="indent">
          <p>
            We use special verbs to describe the actions of people whom you
            respect. These special verbs are called honorific verbs, because
            they bestow honor on, or exalt, the person performing the activity.
          </p>
          <table className="table-list table-border-green">
            <tbody>
              <tr>
                <td></td>
                <td>
                  <span className="text-green">Honorific verbs</span>
                </td>
                <td>
                  <span className="text-green">Irregular conjugations</span>
                </td>
              </tr>
              <tr>
                <td colSpan="9" className="horizontal-line-wrapper">
                  <div className="horizontal-line-green"></div>
                </td>
              </tr>
              <tr>
                <td className="text-blue">いる</td>
                <td rowSpan={3} className="text-blue">
                  いらっしゃる
                </td>
                <td rowSpan={3} className="text-blue">
                  いらっしゃ<span className="underline-green">い</span>ます
                </td>
              </tr>
              <tr>
                <td className="text-blue">
                  <span className="kanji">
                    行<span className="furigana">い</span>
                  </span>
                  く
                </td>
              </tr>
              <tr>
                <td className="text-blue">
                  <span className="kanji">
                    来<span className="furigana">く</span>
                  </span>
                  る
                </td>
              </tr>
              <tr>
                <td className="text-purple">
                  <span className="kanji">
                    食<span className="furigana">た</span>
                  </span>
                  べる
                </td>
                <td rowSpan={2} className="text-purple">
                  <span className="kanji">
                    召<span className="furigana">め</span>
                  </span>
                  し
                  <span className="kanji">
                    上<span className="furigana">あ</span>
                  </span>
                  がる
                </td>
              </tr>
              <tr>
                <td className="text-purple">
                  <span className="kanji">
                    飲<span className="furigana">の</span>
                  </span>
                  む
                </td>
              </tr>
              <tr>
                <td>くれる</td>
                <td>くださる</td>
                <td>
                  くださ<span className="underline-green">い</span>ます
                </td>
              </tr>
              <tr>
                <td>する</td>
                <td>なさる</td>
                <td>
                  なさ<span className="underline-green">い</span>ます
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
                  お
                  <span className="kanji">
                    休<span className="furigana">やす</span>
                  </span>
                  みになる
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
                  ご
                  <span className="kanji">
                    覧<span className="furigana">らん</span>
                  </span>
                  になる
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    言<span className="furigana">い</span>
                  </span>
                  う
                </td>
                <td>おっしゃる</td>
                <td>
                  おっしゃ<span className="underline-green">い</span>ます
                </td>
              </tr>
              <tr>
                <td>～ている</td>
                <td>～ていらっしゃる</td>
                <td>
                  ～ていらっしゃ<span className="underline-green">い</span>ます
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            All the honorific verbs listed above are <i>u</i>-verbs, but some of
            them have irregular conjugations. The long forms of いらっしゃる,
            おっしゃる, なさる, くださる, and ～ていらっしゃる end with います,
            instead of the expected ります.
          </p>
          <p>
            When we use an honorific verb instead of a normal verb, we will have
            sentences which mean that somebody graciously does something. Thus,
            we never use these verbs to describe our own actions. Instead, we
            use them when we talk about what is done by (1) somebody higher up
            in the social hierarchy, or (2) somebody whom you do not know very
            well, especially when addressing them directly.
          </p>
          <p className="tab">
            <span className="kanji">
              先生<span className="furigana">せんせい</span>
            </span>
            は
            <span className="kanji">
              今日<span className="furigana">きょう</span>
            </span>
            <span className="kanji">
              学校<span className="furigana">がっこう</span>
            </span>
            に<span className="underline-green">いらっしゃいません</span>
            。　cf. 行きません・きません・いません
            <br />
            <i>
              The professor will (graciously) not go to/come to/be at the
              school.
            </i>
            　(three-way ambiguous)
          </p>
          <p className="tab">
            <span className="kanji">
              何<span className="furigana">なに</span>
            </span>
            を
            <span className="underline-green">
              <span className="kanji">
                召<span className="furigana">め</span>
              </span>
              し
              <span className="kanji">
                上<span className="furigana">あ</span>
              </span>
              がります
            </span>
            か。　cf. 食べますか・飲みますか
            <br />
            <i>What will you (graciously) eat/drink?</i>
          </p>
          <p className="tab">
            <span className="kanji">
              田<span className="furigana">た</span>
            </span>
            <span className="kanji">
              中<span className="furigana">なか</span>
            </span>
            さんのお
            <span className="kanji">
              母<span className="furigana">かあ</span>
            </span>
            さんがこの
            <span className="kanji">
              本<span className="furigana">ほん</span>
            </span>
            を<span className="underline-green">くださいました</span>。　cf.
            くれました
            <br />
            <i>Ms. Tanaka's mother (graciously) gave me this book.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              心<span className="furigana">しん</span>
            </span>
            <span className="kanji">
              配<span className="furigana">ぱい</span>
            </span>
            <span className="underline-green">なさらないで</span>ください。
            　cf.{" "}
            <span className="kanji">
              心<span className="furigana">しん</span>
            </span>
            <span className="kanji">
              配<span className="furigana">ぱい</span>
            </span>
            しないでください
            <br />
            <i>Please don't (graciously) worry.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              先生<span className="furigana">せんせい</span>
            </span>
            は
            <span className="kanji">
              十時<span className="furigana">じゅうじ</span>
            </span>
            ごろ
            <span className="underline-green">
              お
              <span className="kanji">
                休<span className="furigana">やす</span>
              </span>
              みになる
            </span>
            そうです。 　cf.{" "}
            <span className="kanji">
              寝<span className="furigana">ね</span>
            </span>
            るそうです
            <br />
            <i>Please don't (graciously) worry.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              社長<span className="furigana">しゃちょう</span>
            </span>
            はニュースを
            <span className="underline-green">
              ご
              <span className="kanji">
                覧<span className="furigana">らん</span>
              </span>
              になって
            </span>
            います。　cf.{" "}
            <span className="kanji">
              見<span className="furigana">み</span>
            </span>
            ています
            <br />
            <i>The president is (graciously) watching the news.</i>
          </p>
          <p>
            For the activities for which we lack special honorific verbs, we add
            the respect factor as follows:
          </p>
          <p>
            (1) Using ていらっしゃいます instead of ています, if the sentence
            has the helping verb ている.
          </p>
          <p className="tab">
            <span className="kanji">
              先生<span className="furigana">せんせい</span>
            </span>
            は
            <span className="kanji">
              電<span className="furigana">でん</span>
            </span>
            <span className="kanji">
              話<span className="furigana">わ</span>
            </span>
            で
            <span className="kanji">
              話<span className="furigana">はな</span>
            </span>
            し<span className="underline-green">ていらっしゃいます</span>
            。　（＜　
            <span className="kanji">
              話<span className="furigana">はな</span>
            </span>
            し<span className="underline-green">ています</span>）
            <br />
            <i>The president is (graciously) talking on the phone.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              部<span className="furigana">ぶ</span>
            </span>
            <span className="kanji">
              長<span className="furigana">ちょう</span>
            </span>
            は
            <span className="kanji">
              使<span className="furigana">つか</span>
            </span>
            れ<span className="underline-green">ていらっしゃる</span>
            みたいです。　（＜　
            <span className="kanji">
              使<span className="furigana">つか</span>
            </span>
            れ<span className="underline-green">ている</span>みたいです）
            <br />
            <i>It appears that the department manager is (graciously) tired.</i>
          </p>
          <p>(2) Flanking a verb stem with お and になる.</p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td>お　＋　verb stem　＋　になる</td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            <span className="kanji">
              先生<span className="furigana">せんせい</span>
            </span>
            はもうお
            <span className="kanji">
              帰<span className="furigana">かえ</span>
            </span>
            りになりました。　（＜　
            <span className="kanji">
              帰<span className="furigana">かえ</span>
            </span>
            りました）
            <br />
            <i>The professor has already (graciously) gone home.</i>
          </p>
          <p className="tab">
            この
            <span className="kanji">
              雑<span className="furigana">ざっ</span>
            </span>
            <span className="kanji">
              誌<span className="furigana">し</span>
            </span>
            をお
            <span className="kanji">
              読<span className="furigana">よ</span>
            </span>
            みになったことがありますか。　（＜　
            <span className="kanji">
              読<span className="furigana">よ</span>
            </span>
            んだことがありますか）
            <br />
            <i>Have you ever (graciously) read this magazine?</i>
          </p>
          <p className="tab">
            どうぞお
            <span className="kanji">
              使<span className="furigana">つか</span>
            </span>
            いになってください。　（＜　
            <span className="kanji">
              使<span className="furigana">つか</span>
            </span>
            ってください）
            <br />
            <i>Please (graciously) use it.</i>
          </p>
        </div>
      </section>

      <section id="section2">
        <div className="section-header">
          <h3 className="section-circle circle-green">2</h3>
          <h3 className="section-text-green">Giving Respectful Advice</h3>
        </div>
        <div className="indent">
          <p>
            You may hear the form "お ＋ verb stem ＋ ください" in public
            service announcements and in the speech of store attendants.
          </p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td>お　＋　verb stem　＋　ください</td>
              </tr>
            </tbody>
          </table>
          <table className="table-list table-mini">
            <tbody>
              <tr>
                <td>
                  <span className="kanji">
                    切<span className="furigana">きっ</span>
                  </span>
                  <span className="kanji">
                    符<span className="furigana">ぷ</span>
                  </span>
                  をお
                  <span className="kanji">
                    取<span className="furigana">と</span>
                  </span>
                  りください。
                </td>
                <td>
                  <i>Please take a ticket.</i>
                </td>
                <td>
                  （＜　
                  <span className="kanji">
                    取<span className="furigana">と</span>
                  </span>
                  る　）
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    説<span className="furigana">せつ</span>
                  </span>
                  <span className="kanji">
                    明<span className="furigana">めい</span>
                  </span>
                  をお
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  みください。
                </td>
                <td>
                  <i>Please read the instruction.</i>
                </td>
                <td>
                  （＜　
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  む　）
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Although such sentences end with ください, it is better to consider
            that they are (courteously phrased) commands, rather than requests.
            When somebody tells you お～ください, you are being encouraged to
            perform the actions <i>for your own good</i>. It is wrong to say if
            I want somebody to pass the salt for me:
          </p>
          <p className="tab">
            <span className="text-red">✕</span>　
            <span className="kanji">
              塩<span className="furigana">しお</span>
            </span>
            をお
            <span className="kanji">
              取<span className="furigana">と</span>
            </span>
            りください。
            <br />
            <i>Please take the salt (and pass it to me).</i>
          </p>
          <p>
            You should say instead:　
            <span className="kanji">
              塩<span className="furigana">しお</span>
            </span>
            を
            <span className="kanji">
              取<span className="furigana">と</span>
            </span>
            っていただけませんか。
          </p>
          <p>
            With most する compound verbs, for example, the prefix ご is used
            instead of お. Note the examples with special honorific verbs:
          </p>
          <table className="table-list table-mini">
            <tbody>
              <tr>
                <td>
                  ご
                  <span className="kanji">
                    注意<span className="furigana">ちゅうい</span>
                  </span>
                  ください。
                </td>
                <td>
                  <i>Please watch out.</i>
                </td>
                <td>
                  （＜　
                  <span className="kanji">
                    注意<span className="furigana">ちゅうい</span>
                  </span>
                  する　）
                </td>
              </tr>
              <tr>
                <td>
                  ご
                  <span className="kanji">
                    覧<span className="furigana">らん</span>
                  </span>
                  ください。
                </td>
                <td>
                  <i>Please look.</i>
                </td>
                <td>
                  （＜　ご
                  <span className="kanji">
                    覧<span className="furigana">らん</span>
                  </span>
                  になる　＜　見る　）
                </td>
              </tr>
              <tr>
                <td>
                  お
                  <span className="kanji">
                    召<span className="furigana">め</span>
                  </span>
                  し
                  <span className="kanji">
                    上<span className="furigana">あ</span>
                  </span>
                  がりください。
                </td>
                <td>
                  <i>Please help yourself.</i>
                </td>
                <td>
                  （＜　お
                  <span className="kanji">
                    召<span className="furigana">め</span>
                  </span>
                  し
                  <span className="kanji">
                    上<span className="furigana">あ</span>
                  </span>
                  がる　＜　食べる　）
                </td>
              </tr>
              <tr>
                <td>
                  お
                  <span className="kanji">
                    休<span className="furigana">やす</span>
                  </span>
                  みください。
                </td>
                <td>
                  <i>Please have a good rest.</i>
                </td>
                <td>
                  （＜　お
                  <span className="kanji">
                    休<span className="furigana">やす</span>
                  </span>
                  みになる　＜　
                  <span className="kanji">
                    寝<span className="furigana">ね</span>
                  </span>
                  る　）
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section3">
        <div className="section-header">
          <h3 className="section-circle circle-green">3</h3>
          <h3 className="section-text-green">～てくれてありがとう</h3>
        </div>
        <div className="indent">
          <p>
            When you want to express gratitude to someone for a specific action,
            you can use the <i>te</i>-form + くれてありがとう.
          </p>
          <p>
            If you are thanking someone who needs to be talked to with the
            honorific language, such as when you and the person are not close or
            when the person ranks higher than you in any of the social
            hierarchies, you should say "te-form +
            くださってありがとうございました."
          </p>
          <p className="tab">
            <span className="kanji">
              推薦状<span className="furigana">すいせんじょう</span>
            </span>
            を
            <span className="kanji">
              書<span className="furigana">か</span>
            </span>
            いてくださってありがとうございました。
            <br />
            <i>Thank you for writing a letter of recommendation for me.</i>
          </p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td rowSpan={2}>
                  verb <i>te</i>-form +
                </td>
                <td>くれてありがとう　(casual)</td>
                <td rowSpan={2}>
                  <i>Thank you for doing...</i>
                </td>
              </tr>
              <tr>
                <td>くださってありがとうございました　(polite)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section4">
        <div className="section-header">
          <h3 className="section-circle circle-green">4</h3>
          <h3 className="section-text-green">～てよかったです</h3>
        </div>
        <div className="indent">
          <p>
            <i>Te</i>-form + よかった means "I'm glad that such and scuh is/was
            the case." If you want to mention something in the negative in the
            part before よかった, you can use the negative <i>te</i>-form
            なくて.
          </p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td>～てよかったです</td>
                <td>
                  <i>I'm am glad that I did ... / ... was the case</i>
                </td>
              </tr>
              <tr>
                <td>～なくてよかったです</td>
                <td>
                  <i>I am glad that I didn't ... / ... was not the case</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            日本語を
            <span className="kanji">
              勉強<span className="furigana">べんきょう</span>
            </span>
            してよかったです。
            <br />
            <i>I'm glad that I have studied Japanese.</i>
          </p>
          <p className="tab">
            メアリーさんが
            <span className="kanji">
              元気<span className="furigana">げんき</span>
            </span>
            になってよかったです。
            <br />
            <i>I'm glad that Mary got well.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              約束<span className="furigana">やくそく</span>
            </span>
            の
            <span className="kanji">
              時間<span className="furigana">じかん</span>
            </span>
            に
            <span className="kanji">
              遅<span className="furigana">おく</span>
            </span>
            れなくてよかったです。
            <br />
            <i>I'm glad that I was not late for the appointment.</i>
          </p>
        </div>
      </section>

      <section id="section5">
        <div className="section-header">
          <h3 className="section-circle circle-green">5</h3>
          <h3 className="section-text-green">～はずです</h3>
        </div>
        <div className="indent">
          <p>
            You can say something is "supposed to be the case," by adding
            はずです to a sentence ending in the short form.
          </p>
          <p className="tab">
            <span className="kanji">
              今日<span className="furigana">きょう</span>
            </span>
            は
            <span className="kanji">
              日曜日<span className="furigana">にちようび</span>
            </span>
            だから、
            <span className="kanji">
              銀行<span className="furigana">ぎんこう</span>
            </span>
            は
            <span className="kanji">
              閉<span className="furigana">し</span>
            </span>
            まっているはずです。
            <br />
            <i>Banks must be closed, because today is a Sunday.</i>
          </p>
          <p className="tab">
            レポートの
            <span className="kanji">
              締<span className="furigana">し</span>
            </span>
            め
            <span className="kanji">
              切<span className="furigana">き</span>
            </span>
            りは
            <span className="kanji">
              明日<span className="furigana">あした</span>
            </span>
            じゃないはずです。
            <br />
            <i>I believe that the paper is not due tomorrow.</i>
          </p>
          <p>
            A はずです sentence is a statement about what you believe is true or
            likely, though you lack conclusive evidence. It is used when
            situations surrounding the case and/or our common sense point
            naturally to such a belief. はずです cannot be used in a situation
            in which you are "supposed" to do something because of duty,
            responsibility, or law.
          </p>
          <p>
            You can turn はずです into the past tense to describe something that
            was supposed to have been the case but actually turned out
            otherwise. The part that precedes はずでした is in the present
            tense.
          </p>
          <p className="tab">
            <span className="kanji">
              先週<span className="furigana">せんしゅう</span>
            </span>
            <span className="kanji">
              電話<span className="furigana">でんわ</span>
            </span>
            をもらう<span className="underline-green">はずでした</span>が、
            <span className="kanji">
              電話<span className="furigana">でんわ</span>
            </span>
            がありませんでした。
            <br />
            <i>
              I was supposed to receive a phone call last week, but I didn't.
            </i>
          </p>
          <p>You can use はずです with adjectives, nouns, and verbs.</p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td colSpan={2}>
                  short form + はずです　
                  <i>It is supposed to be the case...</i>
                </td>
              </tr>
              <tr>
                <td>• verbs:</td>
                <td>
                  <span className="kanji">
                    来<span className="furigana">く</span>
                  </span>
                  るはずです
                </td>
              </tr>
              <tr>
                <td>• い-adjectives:</td>
                <td>おもしろいはずです</td>
              </tr>
              <tr>
                <td>• な-adjectives:</td>
                <td>
                  <span className="kanji">
                    元気<span className="furigana">げんき</span>
                  </span>
                  なはずです
                </td>
              </tr>
              <tr>
                <td>• nouns:</td>
                <td>
                  <span className="kanji">
                    日本人<span className="furigana">にほんじん</span>
                  </span>
                  のはずです
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Lesson19;
