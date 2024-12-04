import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson17() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 17: ぐちとうわさ話 (Grumble and Gossip)</h2>
      <section id="section1">
        <h3>17.1: ～そうです (I hear)</h3>
        <div className="indent">
          <p>
            そうです means "seemingly". It can also mean a "hearsay report". The
            two そうです differ in semantics and forms of the predicates they
            are attached to.
          </p>
          <p>
            You can add そうです of a report to a sentence ending in the short
            form.
          </p>
          <table className="table-list table-border-green">
            <tbody>
              <tr>
                <td>If you heard someone say:</td>
                <td></td>
                <td>You can report it as:</td>
              </tr>
              <tr>
                <td style={{ paddingRight: "5px" }}>
                  「
                  <span className="kanji">
                    日<span className="furigana">に</span>
                  </span>
                  <span className="kanji">
                    本<span className="furigana">ほん</span>
                  </span>
                  <span className="kanji">
                    語<span className="furigana">ご</span>
                  </span>
                  の
                  <span className="kanji">
                    授業<span className="furigana">じゅぎょう</span>
                  </span>
                  は
                  <span className="kanji">
                    楽<span className="furigana">たの</span>
                  </span>
                  しいです。」
                  <br />
                  <i>"Our Japanese class is fun."</i>
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td style={{ paddingLeft: "5px" }}>
                  <span className="kanji">
                    日<span className="furigana">に</span>
                  </span>
                  <span className="kanji">
                    本<span className="furigana">ほん</span>
                  </span>
                  <span className="kanji">
                    語<span className="furigana">ご</span>
                  </span>
                  の
                  <span className="kanji">
                    授業<span className="furigana">じゅぎょう</span>
                  </span>
                  は
                  <span className="kanji">
                    楽<span className="furigana">たの</span>
                  </span>
                  しい<span className="underline-green">そうです</span>。<br />
                  <i>I've heard that their Japanese class is fun.</i>
                </td>
              </tr>
              <tr>
                <td style={{ paddingRight: "5px" }}>
                  「
                  <span className="kanji">
                    先<span className="furigana">せん</span>
                  </span>
                  <span className="kanji">
                    生<span className="furigana">せい</span>
                  </span>
                  はとても
                  <span className="kanji">
                    親<span className="furigana">しん</span>
                  </span>
                  <span className="kanji">
                    切<span className="furigana">せつ</span>
                  </span>
                  です。」
                  <br />
                  <i>"Our professor is very kind."</i>
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td style={{ paddingLeft: "5px" }}>
                  <span className="kanji">
                    先<span className="furigana">せん</span>
                  </span>
                  <span className="kanji">
                    生<span className="furigana">せい</span>
                  </span>
                  はとても
                  <span className="kanji">
                    親<span className="furigana">しん</span>
                  </span>
                  <span className="kanji">
                    切<span className="furigana">せつ</span>
                  </span>
                  だ<span className="underline-green">そうです</span>。<br />
                  <i>I've heard that their professor is very kind.</i>
                </td>
              </tr>
              <tr>
                <td style={{ paddingRight: "5px" }}>
                  「
                  <span className="kanji">
                    今日<span className="furigana">きょう</span>
                  </span>
                  は
                  <span className="kanji">
                    授業<span className="furigana">じゅぎょう</span>
                  </span>
                  がありませんでした。」
                  <br />
                  <i>"We did not have a class today."</i>
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td style={{ paddingLeft: "5px" }}>
                  その
                  <span className="kanji">
                    日<span className="furigana">ひ</span>
                  </span>
                  は
                  <span className="kanji">
                    授業<span className="furigana">じゅぎょう</span>
                  </span>
                  がなかった<span className="underline-green">そうです</span>。
                  <br />
                  <i>I've heard that they didn't have a class that day.</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            When we use そうです, the reported speech retains the tense and the
            polarity of the original utterance. We turn the predicates into
            their short forms. (Thus です after a な-adjective or a noun changes
            to だ, while です after an い-adjective is left out.) Compare the
            paradigms of the two そうです.
          </p>
          <table className="table-list table-border-green">
            <thead>
              <tr>
                <th colSpan={3} className="table-header text-green">
                  ～そうです
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <i>I hear that ...</i>
                </td>
                <td>
                  <i>It looks like ...</i>
                </td>
              </tr>
              <tr>
                <td>• verbs:</td>
                <td>
                  <span className="kanji">
                    話<span className="furigana">はな</span>
                  </span>
                  す
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    話<span className="furigana">はな</span>
                  </span>
                  すそうです
                </td>
                <td style={{ textAlign: "center" }}>ー</td>
              </tr>
              <tr>
                <td>• い-adjectives:</td>
                <td>さびしい</td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>さびしいそうです</td>
                <td>さびしそうです</td>
              </tr>
              <tr>
                <td>• な-adjectives:</td>
                <td>
                  <span className="kanji">
                    好<span className="furigana">す</span>
                  </span>
                  きだ
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    好<span className="furigana">す</span>
                  </span>
                  きだそうです
                </td>
                <td>
                  <span className="kanji">
                    好<span className="furigana">す</span>
                  </span>
                  きそうです
                </td>
              </tr>
              <tr>
                <td>• noun + です:</td>
                <td>
                  <span className="kanji">
                    学<span className="furigana">がく</span>
                  </span>
                  <span className="kanji">
                    生<span className="furigana">せい</span>
                  </span>
                  だ
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    学<span className="furigana">がく</span>
                  </span>
                  <span className="kanji">
                    生<span className="furigana">せい</span>
                  </span>
                  だそうです
                </td>
                <td style={{ textAlign: "center" }}>ー</td>
              </tr>
            </tbody>
          </table>
          <p>
            To specify the information source, you can preface a sentence with
            the phrase ～によると, as in トムさんによると (according to Tom),{" "}
            <span className="kanji">
              新聞<span className="furigana">しんぶん</span>
            </span>
            によると (according to the newspaper report), and{" "}
            <span className="kanji">
              天<span className="furigana">てん</span>
            </span>
            <span className="kanji">
              気<span className="furigana">き</span>
            </span>
            <span className="kanji">
              予<span className="furigana">よ</span>
            </span>
            <span className="kanji">
              報<span className="furigana">ぼう</span>
            </span>
            によると (according to the weather forecast).
          </p>
          <p className="tab">
            <span className="kanji">
              天<span className="furigana">てん</span>
            </span>
            <span className="kanji">
              気<span className="furigana">き</span>
            </span>
            <span className="kanji">
              予<span className="furigana">よ</span>
            </span>
            <span className="kanji">
              報<span className="furigana">ぼう</span>
            </span>
            によると、
            <span className="kanji">
              台<span className="furigana">たい</span>
            </span>
            <span className="kanji">
              風<span className="furigana">ふう</span>
            </span>
            が
            <span className="kanji">
              来<span className="furigana">く</span>
            </span>
            るそうです。
            <br />
            <i>According to the weather forecast, a typhoon is approaching.</i>
          </p>
        </div>
      </section>

      <section id="section2">
        <h3>17.2: ～って</h3>
        <div className="indent">
          <p>
            In informal speech, you can add って at the end of a sentence,
            instead of そうです, to quote what you have heard. って is the
            informal variant of the quotation particle と and follows the short
            forms in much the same way as と言っていました and そうです.
          </p>
          <p>When your friend Mary says,</p>
          <p className="tab">
            「
            <span className="kanji">
              今日<span className="furigana">きょう</span>
            </span>
            は
            <span className="kanji">
              忙<span className="furigana">いそが</span>
            </span>
            しいです。あした、
            <span className="kanji">
              試<span className="furigana">し</span>
            </span>
            <span className="kanji">
              験<span className="furigana">けん</span>
            </span>
            があるんです。」
          </p>
          <p>you can report it as:</p>
          <p className="tab">
            メアリーさん、{" "}
            <span className="kanji">
              今日<span className="furigana">きょう</span>
            </span>
            は
            <span className="kanji">
              忙<span className="furigana">いそが</span>
            </span>
            しい<span className="underline-green">って</span>。あした、
            <span className="kanji">
              試<span className="furigana">し</span>
            </span>
            <span className="kanji">
              験<span className="furigana">けん</span>
            </span>
            があるんだ<span className="underline-green">って</span>。
            <br />
            <i>
              Mary says she's busy today. She says she has an exam tomorrow.
            </i>
          </p>
          <p>
            You can also use って in place of the quotation particle と before
            verbs like
            <span className="kanji">
              言<span className="furigana">い</span>
            </span>
            う.
          </p>
          <div className="tab table-double-column">
            <p>
              ロバートさんは
              <span className="kanji">
                何<span className="furigana">なに</span>
              </span>
              <span className="underline-green">て</span>
              <span className="kanji">
                言<span className="furigana">い</span>
              </span>
              ってた？
            </p>
            <p>
              <i>What did Robert say?</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              チョコレートを
              <span className="kanji">
                食<span className="furigana">た</span>
              </span>
              べすぎた<span className="underline-green">って</span>
              <span className="kanji">
                言<span className="furigana">い</span>
              </span>
              ってた。
            </p>
            <p>
              <i>He said he ate too much chocolate.</i>
            </p>
          </div>
        </div>
      </section>

      <section id="section3">
        <h3>17.3: ～たら</h3>
        <div className="indent">
          <p>
            たら is one of the several words in Japanese that refers to
            conditional (<i>if</i>) dependence. When we say "A たら B", we mean
            that the event, action, or situation in B is realized if and when
            the condition in A is met.
          </p>
          <p className="tab">
            <span className="kanji">
              日<span className="furigana">に</span>
            </span>
            <span className="kanji">
              本<span className="furigana">ほん</span>
            </span>
            に
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            ったら、
            <span className="kanji">
              着<span className="furigana">き</span>
            </span>
            <span className="kanji">
              物<span className="furigana">もの</span>
            </span>
            を
            <span className="kanji">
              買<span className="furigana">か</span>
            </span>
            います。
            <br />
            <i>I will buy kimono if and when I go to Japan.</i>
          </p>
          <p>
            The initial た in たら comes from the short form past tense endings
            of predicates.
          </p>
          <table className="table-list table-border-green">
            <thead>
              <tr>
                <th colSpan={3} className="table-header text-green">
                  ～たら
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>short form (aff.)</td>
                <td></td>
                <td>～たら (if...)</td>
              </tr>
              <tr>
                <td></td>
                <td>short form (neg.)</td>
              </tr>
              <tr>
                <td colSpan="9" className="horizontal-line-wrapper">
                  <div className="horizontal-line-green"></div>
                </td>
              </tr>
              <tr>
                <td>• verbs:</td>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  む
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  んだら
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  まない
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  まなかったら
                </td>
              </tr>
              <tr>
                <td>• い-adjectives:</td>
                <td>やさしい</td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>やさしかったら</td>
              </tr>
              <tr>
                <td></td>
                <td>やさしくない</td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>やさしくなかったら</td>
              </tr>
              <tr>
                <td>• な-adjectives:</td>
                <td>
                  <span className="kanji">
                    静<span className="furigana">しず</span>
                  </span>
                  かだ
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    静<span className="furigana">しず</span>
                  </span>
                  かだったら
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <span className="kanji">
                    静<span className="furigana">しず</span>
                  </span>
                  かじゃない
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    静<span className="furigana">しず</span>
                  </span>
                  かじゃなかったら
                </td>
              </tr>
              <tr>
                <td>• noun + です:</td>
                <td>
                  <span className="kanji">
                    休<span className="furigana">やす</span>
                  </span>
                  みだ
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    休<span className="furigana">やす</span>
                  </span>
                  みだったら
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <span className="kanji">
                    休<span className="furigana">やす</span>
                  </span>
                  みじゃない
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    休<span className="furigana">やす</span>
                  </span>
                  みじゃなかったら
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Sometimes, the clause before たら describes a <i>possible</i>{" "}
            condition and the clause after it the consequence which <i>then</i>{" "}
            follows. Whether or not the condition is actually met is largely an
            open issue with this set of sentences.
          </p>
          <p className="tab">
            <span className="kanji">
              山<span className="furigana">やま</span>
            </span>
            <span className="kanji">
              下<span className="furigana">した</span>
            </span>
            <span className="kanji">
              先<span className="furigana">せん</span>
            </span>
            <span className="kanji">
              生<span className="furigana">せい</span>
            </span>
            に
            <span className="kanji">
              会<span className="furigana">あ</span>
            </span>
            ったら、そのことを
            <span className="kanji">
              聞<span className="furigana">き</span>
            </span>
            こうと
            <span className="kanji">
              思<span className="furigana">おも</span>
            </span>
            います。
            <br />
            <i>I will ask about it, if I see Professor Yamashita.</i>
          </p>

          <p className="tab">
            日本
            <span className="kanji">
              人<span className="furigana">じん</span>
            </span>
            だったら、この
            <span className="kanji">
              言<span className="furigana">こと</span>
            </span>
            <span className="kanji">
              葉<span className="furigana">ば</span>
            </span>
            を
            <span className="kanji">
              知<span className="furigana">し</span>
            </span>
            っているでしょう。
            <br />
            <i>
              If somebody is a Japanese person, then they will probably know
              this word.
            </i>
          </p>
          <p className="tab">
            <span className="kanji">
              天気<span className="furigana">てんき</span>
            </span>
            がよくなかったら、キャンプに
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            きません。
            <br />
            <i>We will not go camping, if the weather is not good.</i>
          </p>
          <p>
            When you say "A たら B", you cannot express a sequence of events in
            which B occurs before A. B can only take place at the time A comes
            true or later. You cannot use たら to describe an "if" sentence like
            the following. ("B" = this weekend, which comes before "A" = next
            week.)
          </p>
          <p className="tab">
            <span className="text-red">X</span>{" "}
            <span className="kanji">
              来週<span className="furigana">らいしゅう</span>
            </span>
            <span className="kanji">
              試<span className="furigana">し</span>
            </span>
            <span className="kanji">
              験<span className="furigana">けん</span>
            </span>
            があったら、
            <span className="kanji">
              今度<span className="furigana">こんど</span>
            </span>
            の
            <span className="kanji">
              週末<span className="furigana">しゅうまつ</span>
            </span>
            は
            <span className="kanji">
              勉強<span className="furigana">べんきょう</span>
            </span>
            したほうがいいですよ。
            <br />
            <i>
              It will be better for you to study this weekend, if you have an
              exam next week.
            </i>
          </p>
          <p>
            Sometimes, the たら clause describes a very <i>probably</i>{" "}
            condition, and the second clause describes the event that will take
            place <i>as soon as</i> the situation is realized. With this type of
            sentence, たら arranges future events and activities in a temporal
            sequence.
          </p>
          <p className="tab">
            <span className="kanji">
              宿題<span className="furigana">しゅくだい</span>
            </span>
            が
            <span className="kanji">
              終<span className="furigana">お</span>
            </span>
            わったら、
            <span className="kanji">
              遊<span className="furigana">あそ</span>
            </span>
            びに
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            きましょう。
            <br />
            <i>
              Let's go out and have some fun once we are done with the homework.
            </i>
          </p>
          <p>
            Note that the sentences could be interpreted in different ways. The
            difference lies not in the sentences themselves, but in context. For
            example, if you think that you can finish your homework in due
            course, the sentence means that you want to go out <i>when</i> it is
            done. If you are not sure whether you can finish your homework, the
            sentence describes what you will do <i>if</i> it gets finished.
          </p>
          <p>
            Finally, the たら clause describes a condition that is unreal and
            contrary to fact. You can express a purely hypothetical condition
            and its probably result.
          </p>
          <p className="tab">
            <span className="kanji">
              私<span className="furigana">わたし</span>
            </span>
            が
            <span className="kanji">
              猫<span className="furigana">ねこ</span>
            </span>
            がったら、
            <span className="kanji">
              一日中寝<span className="furigana">いちにちじゅうね</span>
            </span>
            ているでしょう。
            <br />
            <i>If I were a cat, I would be asleep all day long.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              百万円<span className="furigana">ひゃくまんえん</span>
            </span>
            あったら、
            <span className="kanji">
              車<span className="furigana">くるま</span>
            </span>
            を
            <span className="kanji">
              買<span className="furigana">か</span>
            </span>
            うんですけど。
            <br />
            <i>If I had a million yen, I would buy a car.</i>
          </p>
        </div>
      </section>

      <section id="section4">
        <h3>17.4: ～なくてもいいです</h3>
        <div className="indent">
          <p>
            To describe what you <i>do not need to</i> do, take a negative
            sentence in the short form, drop the final い of ない, and add
            くてもいいです. なくて is the negative <i>te</i>-form.
          </p>
          <p className="tab">
            <span className="kanji">
              靴<span className="furigana">くつ</span>
            </span>
            を
            <span className="kanji">
              脱<span className="furigana">ぬ</span>
            </span>
            がなくてもいいです。
            <br />
            <i>You do not need to take off your shoes.</i>
          </p>
          <p className="tab">
            プレゼントは
            <span className="kanji">
              高<span className="furigana">たか</span>
            </span>
            くなくてもいいです。
            <br />
            <i>The present does not need to be anything expensive.</i>
          </p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td>～ない</td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>～なくてもいいです</td>
                <td>
                  <i>does not need to ...</i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section5">
        <h3>17.5: ～みたいです</h3>
        <div className="indent">
          <p>
            みたいです follows a noun and expresses the idea that something or
            somebody <i>resembles</i> the thing or person described by the noun.
            The resemblance is usually noted in terms of external
            characteristics.
          </p>
          <p className="tab">
            <span className="kanji">
              私<span className="furigana">わたし</span>
            </span>
            の
            <span className="kanji">
              父<span className="furigana">ちち</span>
            </span>
            はカーネルおじさんみたいです。
            <br />
            <i>My dad looks/acts like Colonel Sanders, the KFC founder.</i>
            <br />
            (Has a portly figure? Has a white goatee? Stands on the street
            24/7?)
          </p>
          <p>
            みたいです can also follow a verb and expresses the idea that
            something "appears to be the case". It can follow the short form of
            the present tense and the past tense, both in the affirmative and in
            the negative.
          </p>
          <p className="tab">
            <span className="kanji">
              雨<span className="furigana">あめ</span>
            </span>
            が
            <span className="kanji">
              降<span className="furigana">ふ</span>
            </span>
            ったみたいですね。
            <br />
            <i>It looks like it has rained, doesn't it?</i>
          </p>
          <p className="tab">
            あの
            <span className="kanji">
              人<span className="furigana">ひと</span>
            </span>
            はおなかがすいているみたいです。
            <br />
            <i>It looks like that person is hungry.</i>
          </p>
          <p className="tab">
            あの
            <span className="kanji">
              人<span className="furigana">ひと</span>
            </span>
            はきのうの
            <span className="kanji">
              夜<span className="furigana">よる</span>
            </span>
            <span className="kanji">
              寝<span className="furigana">ね</span>
            </span>
            なかったみたいです。
            <br />
            <i>It looks like that person did not sleep last night.</i>
          </p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td>noun/verb + みたいです</td>
                <td>
                  <i>It looks like ...</i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section6">
        <h3>17.6: ～前に / ～てから</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Lesson17;
