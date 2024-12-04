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
          <p></p>
        </div>
      </section>

      <section id="section4">
        <h3>17.4: ～なくてもいいです</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section5">
        <h3>17.5: ～みたいです</h3>
        <div className="indent">
          <p></p>
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
