import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson23() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 23: 別れ (Good-bye)</h2>
      <section id="section1">
        <h3>23.1: Causative-passive Sentences</h3>
        <div className="indent">
          <p>
            "Causative-passive" sentences are the passive version of causative
            sentences. You can use causative-passive sentences when you want to
            say that you were made to do, or haraased or talked into doing
            something you did not want to.
          </p>
          <p className="tab">
            （
            <span className="kanji">
              下<span className="furigana">へ</span>
            </span>
            <span className="kanji">
              手<span className="furigana">た</span>
            </span>
            がから
            <span className="kanji">
              歌<span className="furigana">うた</span>
            </span>
            いたくなかったのに）
            <span className="kanji">
              歌<span className="furigana">うた</span>
            </span>
            を
            <span className="kanji">
              歌<span className="furigana">うた</span>
            </span>
            わされました。
            <br />
            <i>
              (I didn't want to sing because I'm not a good singer, but) I was
              forced to sing.
            </i>
          </p>
          <p>You can make the causative-passive forms in the following:</p>
          <table className="table-list table-mini table-border-green">
            <thead>
              <tr>
                <th colSpan="6" className="table-header text-green">
                  Causative-passive form
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6">
                  • ru-verbs: Drop the final -<i>ru</i> and add -
                  <i>sase-rare-ru</i>.
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  <span className="kanji">
                    食<span className="furigana">た</span>
                  </span>
                  べる
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    食<span className="furigana">た</span>
                  </span>
                  べさせられる
                </td>
              </tr>
              <tr>
                <td colSpan="6">
                  • u-verbs that end with す: Drop -<i>u</i> and add -
                  <i>ase-rare-ru</i>.
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
                  させられる
                </td>
              </tr>
              <tr>
                <td colSpan="6">
                  • all other u-verbs: Drop -<i>u</i> and add -<i>asare-ru</i>.
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  <span className="kanji">
                    行<span className="furigana">い</span>
                  </span>
                  く
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    行<span className="furigana">い</span>
                  </span>
                  かされる
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
                  がされる
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
                  たされる
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
                  ばされる
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
                  まされる
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
                  <span className="underline-green">わ</span>される
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  <span className="kanji">
                    取<span className="furigana">と</span>
                  </span>
                  る
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    取<span className="furigana">と</span>
                  </span>
                  らされる
                </td>
              </tr>
              <tr>
                <td colSpan="6">• irregular verbs:</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>する</td>
                <td className="arrow-right">→</td>
                <td>させられる</td>
                <td>くる</td>
                <td className="arrow-right">→</td>
                <td>こさせられる</td>
              </tr>
            </tbody>
          </table>
          <p>
            Notice tha tthe causative-passive in <i>ru</i>-verbs, <i>u</i>-verbs
            ending with す, and irregular verbs is the combination of causative
            and the passive forms: -<i>(s)ase-rare</i>. In <i>u</i>-verbs other
            than those that end with す, the causative passive suffix -
            <i>asare</i> is shorter than the sum of the causative (-<i>ase</i>)
            and the passive (-<i>rare</i>) suffixes.
          </p>
          <p>Basic structure of a causative-passive sentence:</p>
          <table className="table-list table-mini table-border-green">
            <thead>
              <tr>
                <th className="table-header text-green">
                  Causative-passive sentence
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ paddingBottom: "5px", paddingLeft: "3em" }}>
                  <span className="kanji">
                    私<span className="furigana">わたし</span>
                  </span>
                  は
                </td>
                <td style={{ paddingBottom: "5px" }}>
                  <span className="kanji">
                    彼女<span className="furigana">かのじょ</span>
                  </span>
                  に
                </td>
                <td style={{ paddingBottom: "5px" }}>
                  <span className="kanji">
                    車<span className="furigana">くるま</span>
                  </span>
                  を
                  <span className="kanji">
                    洗<span className="furigana">あら</span>
                  </span>
                  わされました。
                </td>
              </tr>
              <tr>
                <td style={{ paddingTop: 0, paddingLeft: "3em" }}>
                  <span className="text-green">(puppet)</span> は
                </td>
                <td style={{ paddingTop: 0 }}>
                  <span className="text-green">(puppet master)</span> に
                </td>
                <td style={{ paddingTop: 0 }}>
                  <span className="text-green">(action)</span>
                </td>
              </tr>
              <tr>
                <td colSpan={3} style={{ paddingLeft: "3em" }}>
                  <i>I was tricked by my girlfriend into washing her car.</i>
                </td>
              </tr>
              <tr>
                <td colSpan={3} style={{ paddingBottom: 0 }}>
                  <ul style={{ padding: 0, margin: 0 }}>
                    <li>
                      • The <span className="text-green">puppet</span> is forced
                      into performing an action. Marked with は or が.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td colSpan={3} style={{ paddingBottom: 0 }}>
                  <ul style={{ padding: 0, margin: 0 }}>
                    <li>
                      • The <span className="text-green">puppet master</span>{" "}
                      wields power over, and manipulates, the puppet. Marked
                      with に.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <ul style={{ padding: 0, margin: 0 }}>
                    <li>
                      • The <span className="text-green">action</span> forced
                      upon the puppet is described with a causative-passive
                      verb.
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            If you compare a causative-passive sentence with a causative
            sentence, notice that the actors are switched between the two:
          </p>
          <table className="table-list table-mini">
            <tbody>
              <tr>
                <td>Causative-passive:</td>
                <td>
                  <span className="border-green">私</span>　
                  <span className="underline-green">は</span>　
                  <span className="border-green">
                    <span className="kanji">
                      友達<span className="furigana">ともだち</span>
                    </span>
                  </span>
                  　<span className="underline-green">に</span>
                </td>
                <td>
                  <span className="kanji">
                    宿題<span className="furigana">しゅくだい</span>
                  </span>
                  を
                  <span className="kanji">
                    手伝<span className="furigana">てつだ</span>
                  </span>
                  わされました。
                </td>
              </tr>
              <tr>
                <td></td>
                <td colSpan={2} style={{ paddingTop: 0 }}>
                  I was forced by my friend into helping with with his homework.
                </td>
              </tr>
              <tr>
                <td>Causative:</td>
                <td>
                  <span className="border-green">
                    <span className="kanji">
                      友達<span className="furigana">ともだち</span>
                    </span>
                  </span>
                  　<span className="underline-green">は</span>　
                  <span className="border-green">私</span>　
                  <span className="underline-green">に</span>
                </td>
                <td>
                  <span className="kanji">
                    宿題<span className="furigana">しゅくだい</span>
                  </span>
                  を
                  <span className="kanji">
                    手伝<span className="furigana">てつだ</span>
                  </span>
                  わされました。
                </td>
              </tr>
              <tr>
                <td></td>
                <td colSpan={2} style={{ paddingTop: 0 }}>
                  My friend made me help him with his homework.
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Compare a causative-passive sentence with a plain (noncausative,
            nonpassive) sentence. These two sentences have the same subject. You
            add the "puppet master" role to a plain sentence and make the verb
            longer, and you get a causative-passive sentence.
          </p>
          <table className="table-list table-mini">
            <tbody>
              <tr>
                <td>Causative-passive:</td>
                <td>
                  まなは　お
                  <span className="kanji">
                    母<span className="furigana">かあ</span>
                  </span>
                  さんに　
                  <span className="kanji">
                    勉強<span className="furigana">べんきょう</span>
                  </span>
                  させられました。
                </td>
              </tr>
              <tr>
                <td></td>
                <td style={{ paddingTop: 0 }}>
                  <i>Mana was ordered by her mother to study.</i>
                </td>
              </tr>
              <tr>
                <td>Plain:</td>
                <td>
                  まなは　―――――　
                  <span className="kanji">
                    勉強<span className="furigana">べんきょう</span>
                  </span>
                  しました。
                </td>
              </tr>
              <tr>
                <td></td>
                <td style={{ paddingTop: 0 }}>
                  <i>Mana studied.</i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section2">
        <h3>23.2: ～ても</h3>
        <div className="indent">
          <p>
            "A ても B" is "B, even if A". In short, B is still true in case of
            A. Compare ても sentences with たら sentences, which have a more
            straightforward "if-then" meaning:
          </p>
          <p className="tab">
            <span className="kanji">
              雨<span className="furigana">あめ</span>
            </span>
            が
            <span className="kanji">
              降<span className="furigana">ふ</span>
            </span>
            っ<span className="underline-green">ても</span>
            、バーベキューをします。
            <br />
            <i>We will have a barbecue, even if it rains.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              雨<span className="furigana">あめ</span>
            </span>
            が
            <span className="kanji">
              降<span className="furigana">ふ</span>
            </span>
            ったら、バーベキューをしません。
            <br />
            <i>We will have a barbecue, even if it rains.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              暑<span className="furigana">あつ</span>
            </span>
            く<span className="underline-green">ても</span>
            、エアコンをつけません。
            <br />
            <i>I will not turn on the air conditioner, even if it is hot.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              暑<span className="furigana">あつ</span>
            </span>
            かったら、エアコンをつけます。
            <br />
            <i>I will turn on the air conditioner, if it is hot.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              子供<span className="furigana">こども</span>
            </span>
            <span className="underline-green">でも</span>、わかります。
            <br />
            <i>
              Even a child will get it. (You will be able to understand it, even
              if you are a child.)
            </i>
          </p>
          <p className="tab">
            <span className="kanji">
              子供<span className="furigana">こども</span>
            </span>
            だったら、わかりません。
            <br />
            <i>If you are a child, you will not get it.</i>
          </p>
          <p>
            You can form a ても clause by adding も to the verb or adjective{" "}
            <i>te</i>-form. With な-adjectives and nouns, you have でも. Note
            that verb たら and ても forms look very much alike, but adjective
            たら and ても forms look distinct.
          </p>
          <table className="table-list table-mini table-border-green">
            <thead>
              <tr>
                <th colSpan={5} className="table-header text-green">
                  ～ても (affirmative)
                </th>
                <td>Compare:</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>• verbs:</td>
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
                  っても
                </td>
                <td></td>
                <td>
                  <span className="kanji">
                    買<span className="furigana">か</span>
                  </span>
                  ったら
                </td>
              </tr>
              <tr>
                <td>• い-adjectives:</td>
                <td>
                  <span className="kanji">
                    悲<span className="furigana">かな</span>
                  </span>
                  しい
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    悲<span className="furigana">かな</span>
                  </span>
                  しくても
                </td>
                <td>
                  （　<span className="text-red">✕</span>　
                  <span className="kanji">
                    悲<span className="furigana">かな</span>
                  </span>
                  しかっても）
                </td>
                <td>
                  <span className="kanji">
                    悲<span className="furigana">かな</span>
                  </span>
                  しかったら
                </td>
              </tr>
              <tr>
                <td>• な-adjectives:</td>
                <td>
                  <span className="kanji">
                    元気<span className="furigana">げんき</span>
                  </span>
                  （な）
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    元気<span className="furigana">げんき</span>
                  </span>
                  でも
                </td>
                <td>
                  （　<span className="text-red">✕</span>　
                  <span className="kanji">
                    元気<span className="furigana">げんき</span>
                  </span>
                  だっても）
                </td>
                <td>
                  <span className="kanji">
                    元気<span className="furigana">げんき</span>
                  </span>
                  だったら
                </td>
              </tr>
              <tr>
                <td>nouns:</td>
                <td>
                  <span className="kanji">
                    学生<span className="furigana">がくせい</span>
                  </span>
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    学生<span className="furigana">がくせい</span>
                  </span>
                  でも
                </td>
                <td>
                  （　<span className="text-red">✕</span>　
                  <span className="kanji">
                    学生<span className="furigana">がくせい</span>
                  </span>
                  だっても）
                </td>
                <td>
                  <span className="kanji">
                    学生<span className="furigana">がくせい</span>
                  </span>
                  だったら
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            You can also form a negative ても clause, based on the short form
            negative.
          </p>
          <table className="table-list table-mini table-border-green">
            <thead>
              <tr>
                <th colSpan={4} className="table-header text-green">
                  ～ても (negative)
                </th>
                <td>Compare:</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>• verbs:</td>
                <td>
                  <span className="kanji">
                    買<span className="furigana">か</span>
                  </span>
                  わない
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    買<span className="furigana">か</span>
                  </span>
                  わなくても
                </td>
                <td>
                  <span className="kanji">
                    買<span className="furigana">か</span>
                  </span>
                  わなかったら
                </td>
              </tr>
              <tr>
                <td>• い-adjectives:</td>
                <td>
                  <span className="kanji">
                    悲<span className="furigana">かな</span>
                  </span>
                  しくない
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    悲<span className="furigana">かな</span>
                  </span>
                  しくなくても
                </td>
                <td>
                  <span className="kanji">
                    悲<span className="furigana">かな</span>
                  </span>
                  しくなかったら
                </td>
              </tr>
              <tr>
                <td>• な-adjectives:</td>
                <td>
                  <span className="kanji">
                    元気<span className="furigana">げんき</span>
                  </span>
                  じゃない
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    元気<span className="furigana">げんき</span>
                  </span>
                  じゃなくても
                </td>
                <td>
                  <span className="kanji">
                    元気<span className="furigana">げんき</span>
                  </span>
                  じゃなかったら
                </td>
              </tr>
              <tr>
                <td>nouns:</td>
                <td>
                  <span className="kanji">
                    学生<span className="furigana">がくせい</span>
                  </span>
                  じゃない
                </td>
                <td className="arrow-right">→</td>
                <td>
                  <span className="kanji">
                    学生<span className="furigana">がくせい</span>
                  </span>
                  じゃなくても
                </td>
                <td>
                  <span className="kanji">
                    学生<span className="furigana">がくせい</span>
                  </span>
                  じゃなかったら
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            The ても clause itself does not have tense. It can be followed
            either by a present tense clause, or by a past tense clause.
          </p>
          <p className="tab">
            私は、
            <span className="kanji">
              風<span className="furigana">か</span>
            </span>
            <span className="kanji">
              邪<span className="furigana">ぜ</span>
            </span>
            をひいていても、
            <span className="kanji">
              毎日<span className="furigana">まいにち</span>
            </span>
            、
            <span className="kanji">
              授業<span className="furigana">じゅぎょう</span>
            </span>
            に
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            きました。
            <br />
            <i>I went to class every day, even when I had a cold.</i>
          </p>
          <p className="tab">
            日本
            <span className="kanji">
              語<span className="furigana">ご</span>
            </span>
            の
            <span className="kanji">
              授業<span className="furigana">じゅぎょう</span>
            </span>
            が
            <span className="kanji">
              難<span className="furigana">むずか</span>
            </span>
            しくても、
            <span className="kanji">
              取<span className="furigana">と</span>
            </span>
            ったでしょう。
            <br />
            <i>
              I would have taken the Japanese class, even if it could have been
              difficult.
            </i>
          </p>
        </div>
      </section>

      <section id="section3">
        <h3>23.3: ～にとにする</h3>
        <div className="indent">
          <p>
            ことにする means "decide to do..." It follows the short form present
            tense of a verb. You can use a negated verb too.
          </p>
          <p className="tab">
            <span className="kanji">
              車<span className="furigana">くるま</span>
            </span>
            を
            <span className="kanji">
              買<span className="furigana">か</span>
            </span>
            うことにしました。
            <br />
            <i>We have decided to buy a car.</i>
          </p>
          <p className="tab">
            あの
            <span className="kanji">
              人<span className="furigana">ひと</span>
            </span>
            がかわいそうだから、あまり
            <span className="kanji">
              文句<span className="furigana">もんく</span>
            </span>
            を
            <span className="kanji">
              言<span className="furigana">い</span>
            </span>
            わないことにします。
            <br />
            <i>
              I will not make too many complaints. I am feeling sorry for him
              already.
            </i>
          </p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td>verb (short, present) + ことにする</td>
                <td>
                  <i>decide to do...</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            We sometimes use the volitional form of this construction, such as
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            くことにしょう, instead of the simple volitional form of a verb,{" "}
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            こう, in suggesting an activity. ことにしょう has the additional
            implication that the suggestion is begin made after a deliberation.
          </p>
          <p className="tab">
            <span className="kanji">
              今年<span className="furigana">ことし</span>
            </span>
            の
            <span className="kanji">
              夏<span className="furigana">なつ</span>
            </span>
            はベトナムに
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            くことにしょう。
            <br />
            <i>Let's take the plunge. Let's go to Vietnam this summer.</i>
          </p>
        </div>
      </section>

      <section id="section4">
        <h3>23.4: ～にとにしている</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section5">
        <h3>23.5: ～まで</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section6">
        <h3>23.6: ～方</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Lesson23;
