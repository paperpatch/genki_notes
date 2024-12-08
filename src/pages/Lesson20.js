import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson20() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 20: メアリーさんの買い物 (Mary Goes Shopping)</h2>
      <section id="section1">
        <h3>20.1: Extra-modest Expressions</h3>
        <div className="indent">
          <p>
            When we want to <i>talk modestly of our own actions</i>, we use the
            verbs below when we want to sound modest and respectful in our
            speech, to show an extra amount of deference to the listener. These
            verbs are almost always used in long forms, because the purpose of
            using them is to be polite to the person you are talking to. Having
            one of these verbs is like ending a sentence with words like{" "}
            <i>sir</i> or <i>ma'am</i>.
          </p>
          <table className="table-list table-mini table-border-green">
            <thead>
              <tr>
                <th
                  colSpan={3}
                  style={{ textAlign: "center" }}
                  className="table-header text-green"
                >
                  Extra-modest expressions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>いる</td>
                <td>おります</td>
                <td>（おる）</td>
              </tr>
              <tr>
                <td className="text-blue">
                  <span className="kanji">
                    行<span className="furigana">い</span>
                  </span>
                  く
                </td>
                <td className="text-blue" rowSpan={2}>
                  <span className="kanji">
                    参<span className="furigana">まい</span>
                  </span>
                  ります
                </td>
                <td className="text-blue" rowSpan={2}>
                  （
                  <span className="kanji">
                    参<span className="furigana">まい</span>
                  </span>
                  る）
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
                <td>
                  <span className="kanji">
                    言<span className="furigana">い</span>
                  </span>
                </td>
                <td>
                  <span className="kanji">
                    申<span className="furigana">もう</span>
                  </span>
                  します
                </td>
                <td>
                  （
                  <span className="kanji">
                    申<span className="furigana">もう</span>
                  </span>
                  す ）
                </td>
              </tr>
              <tr>
                <td>する</td>
                <td>いただきます</td>
                <td>（いたす）</td>
              </tr>
              <tr>
                <td className="text-purple">
                  <span className="kanji">
                    食<span className="furigana">た</span>
                  </span>
                  べる
                </td>
                <td className="text-purple" rowSpan={2}>
                  いただきます
                </td>
                <td className="text-purple" rowSpan={2}>
                  （いただく）
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
                <td>ある</td>
                <td>
                  ござ<span className="underline-green">い</span>ます
                </td>
                <td>（ござる）</td>
              </tr>
              <tr>
                <td>～ている</td>
                <td>～ております</td>
                <td>（～ておる）</td>
              </tr>
              <tr>
                <td>～です</td>
                <td>
                  でござ<span className="underline-green">い</span>ます
                </td>
                <td>（～でござる）</td>
              </tr>
            </tbody>
          </table>
          <p>
            You can use these verbs instead of the normal ones on very formal
            occasions, for example, when you introduce yourself at a job
            interview. They typically use more stilted first-person word{" "}
            <span className="kanji">
              私<span className="furigana">わたくし</span>
            </span>
            , rather than the normal{" "}
            <span className="kanji">
              私<span className="furigana">わたし</span>.
            </span>
          </p>
          <table className="table-list">
            <tbody>
              <tr>
                <td>
                  <span className="kanji">
                    私<span className="furigana">わたくし</span>
                  </span>
                  は
                  <span className="kanji">
                    来年<span className="furigana">らいねん</span>
                  </span>
                  も日本い<span className="underline-green">おります</span>。
                  <br />
                  <i>I will be in Japan next year, too, sir/ma'am.</i>
                </td>
                <td>cf. います</td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    私<span className="furigana">わたくし</span>
                  </span>
                  は
                  <span className="kanji">
                    今年<span className="furigana">ことし</span>
                  </span>
                  の
                  <span className="kanji">
                    六月<span className="furigana">ろくがつ</span>
                  </span>
                  に
                  <span className="kanji">
                    大学<span className="furigana">だいがく</span>
                  </span>
                  を
                  <span className="kanji">
                    卒業<span className="furigana">そつぎょう</span>
                  </span>
                  <span className="underline-green">いたしました</span>。
                  <br />I graduated from college this June, sir/ma'am.
                </td>
                <td>
                  cf.{" "}
                  <span className="kanji">
                    卒業<span className="furigana">そつぎょう</span>
                  </span>
                  しました
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    私<span className="furigana">わたくし</span>
                  </span>
                  は
                  <span className="kanji">
                    一年間<span className="furigana">いちねんかん</span>
                  </span>
                  日本語を
                  <span className="kanji">
                    勉強<span className="furigana">べんきょう</span>
                  </span>
                  し<span className="underline-green">ております</span>。
                  <br />
                  <i>I have been studying Japanese for a year.</i>
                </td>
                <td>
                  cf.{" "}
                  <span className="kanji">
                    勉強<span className="furigana">べんきょう</span>
                  </span>
                  しています
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    私<span className="furigana">わたくし</span>
                  </span>
                  は
                  <span className="kanji">
                    木<span className="furigana">き</span>
                  </span>
                  <span className="kanji">
                    村<span className="furigana">むら</span>
                  </span>
                  たけしと
                  <span className="underline-green">
                    <span className="kanji">
                      申<span className="furigana">もう</span>
                    </span>
                    します
                  </span>
                  。
                  <br />
                  <i>My name is Takeshi Kimura.</i>
                </td>
                <td>
                  cf.{" "}
                  <span className="kanji">
                    言<span className="furigana">い</span>
                  </span>
                  います
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            You can also use these expressions to talk modestly about your own
            family or about the company you work for. Extra-modest expressions
            are frequently used by people in business when they talk to
            customers. You hear many extra-modest sentences like the examples
            below in public service announcements, and in the speech of shop
            clerks.
          </p>
          <table className="table-list">
            <tbody>
              <tr>
                <td>
                  <span className="kanji">
                    電車<span className="furigana">でんしゃ</span>
                  </span>
                  が
                  <span className="underline-green">
                    <span className="kanji">
                      参<span className="furigana">まい</span>
                    </span>
                    ります
                  </span>
                  。
                  <br />
                  <i>A train is pulling in.</i>
                </td>
                <td>
                  cf.{" "}
                  <span className="kanji">
                    来<span className="furigana">き</span>
                  </span>
                  ます
                </td>
              </tr>
              <tr>
                <td>
                  お
                  <span className="kanji">
                    手<span className="furigana">て</span>
                  </span>
                  <span className="kanji">
                    洗<span className="furigana">あら</span>
                  </span>
                  いは
                  <span className="kanji">
                    二<span className="furigana">に</span>
                  </span>
                  <span className="kanji">
                    階<span className="furigana">かい</span>
                  </span>
                  <span className="underline-green">でございます</span>。
                  <br />
                  The bathroom is on the second floor.
                </td>
                <td>cf. です</td>
              </tr>
            </tbody>
          </table>
          <p>
            ございます and でございます are very stylized and you would rarely
            hear them outside formal business-related situations.
          </p>
          <p>
            Because the effect of the extra-modest expressions is to put the
            subject in a modest light, you cannot use them to describe the
            actions performed by the person you are talking to or by somebody
            who is not in your group. It is wrong to say:
          </p>
          <p className="tab">
            <span className="text-red">X</span>　
            <span className="kanji">
              先生<span className="furigana">せんせい</span>
            </span>
            は
            <span className="kanji">
              明日<span className="furigana">あした</span>
            </span>
            <span className="kanji">
              学校<span className="furigana">がっこう</span>
            </span>
            に
            <span className="kanji">
              参<span className="furigana">まい</span>
            </span>
            りますか。
            <br />
            <i>Are you coming to school tomorrow, Professor?</i>
          </p>
        </div>
      </section>

      <section id="section2">
        <h3>20.2: Humble Expressions</h3>
        <div className="indent">
          <p>
            When you do something out of respect for somebody, you can sometimes
            describe your action using a verb in the humble pattern "お + verb
            stem + する." Not all verbs use this pattern, so use the ones that
            you are familiar with. You can speak of "humbly" meeting, leading
            to, or borrowing from someone, for example.
          </p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td>お + verb stem + する</td>
                <td>
                  <i>I (humbly) do...</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            私は
            <span className="kanji">
              昨日<span className="furigana">きのう</span>
            </span>
            <span className="underline-green">
              <span className="kanji">
                社長<span className="furigana">しゃちょう</span>
              </span>
              のご
              <span className="kanji">
                主人<span className="furigana">しゅじん</span>
              </span>
              に
            </span>
            お
            <span className="kanji">
              会<span className="furigana">あ</span>
            </span>
            いしました。
            <br />
            <i>I (humbly) met the president's husband yesterday.</i>
          </p>
          <p className="tab">
            私は
            <span className="underline-green">
              <span className="kanji">
                先生<span className="furigana">せんせい</span>
              </span>
              に
            </span>
            お
            <span className="kanji">
              本<span className="furigana">ほん</span>
            </span>
            をお
            <span className="kanji">
              貸<span className="furigana">か</span>
            </span>
            しするつもりです。
            <br />
            <i>I intend to (humbly) lend my professor a book.</i>
          </p>
          <p className="tab">
            私は
            <span className="underline-green">
              <span className="kanji">
                先生<span className="furigana">せんせい</span>
              </span>
              に
            </span>
            <span className="kanji">
              辞書<span className="furigana">じしょ</span>
            </span>
            をお
            <span className="kanji">
              借<span className="furigana">か</span>
            </span>
            りしました。
            <br />
            <i>
              I borrowed a dictionary from my professor (and feel very obliged).
            </i>
          </p>
          <p>
            Note that this "お + verb stem + する" pattern demotes the action (I
            humble do something) while the "お + stem + になる" pattern promotes
            the actor (Somebody graciously does something). They look similar,
            but semantically they are polar opposites.
          </p>
          <table className="table-mini">
            <tbody>
              <tr>
                <td className="no-wrap text-green">する</td>
                <td style={{ paddingLeft: "1.5em" }}>
                  する compound verbs do not follow this pattern. Instead they
                  simply have the prefix ご or お, such as ご
                  <span className="kanji">
                    紹介<span className="furigana">しょうかい</span>
                  </span>
                  する, ご
                  <span className="kanji">
                    案内<span className="furigana">あんない</span>
                  </span>
                  する, ご
                  <span className="kanji">
                    説明<span className="furigana">せつめい</span>
                  </span>
                  する, and お
                  <span className="kanji">
                    電話<span className="furigana">でんわ</span>
                  </span>
                  する.
                </td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            <span className="kanji">
              外国人<span className="furigana">がいこくじん</span>
            </span>
            に
            <span className="kanji">
              人気<span className="furigana">にんき</span>
            </span>
            がある
            <span className="kanji">
              店<span className="furigana">みせ</span>
            </span>
            をご しましょう。
            <br />
            <i>
              Let us tell you about a shop that is popular among foreigners.
            </i>
          </p>
          <p className="tab">
            きのうお
            <span className="kanji">
              電話<span className="furigana">でんわ</span>
            </span>
            した田中です。
            <br />
            <i>This is Tanaka. I called yesterday.</i>
          </p>
          <table className="table-mini">
            <tbody>
              <tr>
                <td className="text-green">もらう ／ あげる</td>
                <td style={{ paddingLeft: "1.5em" }}>
                  もらう and あげる have special replacement verbs:
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-list table-mini">
            <tbody>
              <tr>
                <td>もらう</td>
                <td className="arrow-right">→</td>
                <td>いただく</td>
                <td>
                  私は
                  <span className="underline-green">
                    <span className="kanji">
                      先生<span className="furigana">せんせい</span>
                    </span>
                    に
                  </span>
                  この{" "}
                  <span className="kanji">
                    本<span className="furigana">ほん</span>
                  </span>
                  をいただきました。
                  <br />
                  <i>I (humbly) received this book from my professor.</i>
                </td>
              </tr>
              <tr>
                <td colSpan={3}></td>
                <td>
                  私
                  <span className="underline-green">
                    <span className="kanji">
                      先生<span className="furigana">せんせい</span>
                    </span>
                    に
                  </span>
                  <span className="kanji">
                    漢字<span className="furigana">かんじ</span>
                  </span>
                  を
                  <span className="kanji">
                    教<span className="furigana">おし</span>
                  </span>
                  えていただきました。
                  <br />
                  <i>I (humbly) had my professor teach me kanji.</i>
                </td>
              </tr>
              <tr>
                <td>あげる</td>
                <td className="arrow-right">→</td>
                <td>さしあげる</td>
                <td>
                  私は
                  <span className="underline-green">
                    <span className="kanji">
                      先生<span className="furigana">せんせい</span>
                    </span>
                    に
                  </span>
                  <span className="kanji">
                    花<span className="furigana">はな</span>
                  </span>
                  をさしあげます。
                  <br />
                  <i>I will (humbly) give my professor flowers.</i>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-mini">
            <tbody>
              <tr>
                <td className="text-green">うかがう</td>
                <td style={{ paddingLeft: "1.5em" }}>
                  うかがう is a verb with which you can portray yourself as
                  humble in the actions of visiting and asking questions:
                </td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            私は
            <span className="underline-green">
              <span className="kanji">
                部長<span className="furigana">ぶちょう</span>
              </span>
              の
            </span>
            お
            <span className="kanji">
              宅<span className="furigana">たく</span>
            </span>
            にうかがいました。
            <br />
            <i>I (humbly) visited my department manager's house.</i>
          </p>
          <p className="tab">
            私は
            <span className="underline-green">
              <span className="kanji">
                先生<span className="furigana">せんせい</span>
              </span>
              に
            </span>
            テストについてうかがいました。
            <br />
            <i>I (humbly) asked my professor about the exam.</i>
          </p>
          <p>
            The subject with "I" performs the action in deference to the person
            underlined. The difference between this pattern and the extra-modest
            expressions is that the extra-modest expressions show respect to the
            listeners you are talking to, while the humble pattern shows respect
            to someone that appears in the event you are describing. For
            example:
          </p>
          <p className="tab">
            （私はあなたを）
            <span className="kanji">
              駅<span className="furigana">えき</span>
            </span>
            までお
            <span className="kanji">
              送<span className="furigana">おく</span>
            </span>
            りします。
            <br />
            <i>I will (humbly) walk you to the station.</i>
          </p>
          <p>
            Summary of the three types of "respect language", with the up and
            down arrow indicating the person whose profile is raised or lowered,
            respectively.
          </p>
          <ol>
            <li>
              <strong>Honorific expressions</strong> exalt the subject of the
              sentence.
              <br />
              <span className="kanji">
                先生<span className="furigana">せんせい</span>
              </span>
              が{" "}
              <span className="text-green" style={{ fontSize: "1.4em" }}>
                ↑
              </span>{" "}
              いらっしゃいました／お
              <span className="kanji">
                帰<span className="furigana">かえ</span>
              </span>
              りになりました。
              <br />
              <i>My professor has (graciously) arrived/left.</i>
            </li>
            <li>
              <strong>Extra-modest expressions</strong> talk modestly of what
              you do.
              <br />
              <span className="kanji">
                私<span className="furigana">わたくし</span>
              </span>
              は{" "}
              <span className="text-green" style={{ fontSize: "1.4em" }}>
                ↓
              </span>{" "}
              メアリー・ハートと申します。(person listening to you{" "}
              <span className="text-green" style={{ fontSize: "1.4em" }}>
                ↑
              </span>{" "}
              )<br />
              <i>My name is Mary Hart.</i>
            </li>
            <li>
              <strong>Humble expressions</strong> demote the subject and raise
              the profile of another person.
              <br />
              <span className="kanji">
                私<span className="furigana">わたし</span>
              </span>
              は{" "}
              <span className="text-green" style={{ fontSize: "1.4em" }}>
                ↓
              </span>{" "}
              <span className="kanji">
                先生<span className="furigana">せんせい</span>
              </span>
              に{" "}
              <span className="text-green" style={{ fontSize: "1.4em" }}>
                ↑
              </span>{" "}
              <span className="kanji">
                本<span className="furigana">ほん</span>
              </span>
              をお
              <span className="kanji">
                返<span className="furigana">かえ</span>
              </span>
              ししました。
              <br />
              <i>I (humbly) returned the book to my professor.</i>
            </li>
          </ol>
        </div>
      </section>

      <section id="section3">
        <h3>20.3: ないで</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section4">
        <h3>20.4: Questions within Larger Sentences</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section5">
        <h3>20.5: Name という Item</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section6">
        <h3>20.6: ～やすい / ～にくい</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Lesson20;
