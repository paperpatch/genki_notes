import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson13() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 13: アルバイト探し (Looking for a Part-time Job)</h2>
      <section id="section1">
        <h3>13.1: Potential Verbs</h3>
        <div className="indent">
          <p>
            Use the potential verb to say that someone "can" or "has the ability
            to" do something, or that something is "possible".
          </p>
          <p className="tab">
            私は日本語が
            <span className="underline-green">
              <span className="kanji">
                話<span className="furigana">はな</span>
              </span>
              せます
            </span>
            。
            <br />
            <i>I can speak Japanese.</i>
          </p>
          <p className="tab">
            私は
            <span className="underline-green">
              <span className="kanji">
                泳<span className="furigana">およ</span>
              </span>
              げない
            </span>
            んです。
            <br />
            <i>(The truth is) I cannot swim.</i>
          </p>
          <p className="tab">
            <span className="underline-green">
              <span className="kanji">
                雨<span className="furigana">あめ</span>
              </span>
              が
              <span className="kanji">
                降<span className="furigana">ふ</span>
              </span>
              っ他ので、
              <span className="kanji">
                海<span className="furigana">うみ</span>
              </span>
              に
              <span className="kanji">
                行<span className="furigana">い</span>
              </span>
              けませんでした。
            </span>
            <br />
            <i>We could not go to the beach, because it rained.</i>
          </p>
          <p>Potential verbs rules:</p>
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
                  • ru-verbs: Drop the final -<i>ru</i> and add -<i>rareru</i>.
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  見る (<i>mi-ru</i>)
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td colSpan="2">
                  見られる (<i>mi-rare-ru</i>)
                </td>
              </tr>
              <tr>
                <td colSpan="6">
                  • u-verbs: Drop the final -<i>ru</i> and add -<i>eru</i>.
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  <span className="kanji">
                    行<span className="furigana">い</span>
                  </span>
                  く (<i>ik-u</i>)
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    行<span className="furigana">い</span>
                  </span>
                  ける (<i>ik-eru</i>)
                </td>
                <td>
                  <span className="kanji">
                    作<span className="furigana">つく</span>
                  </span>
                  る
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    作<span className="furigana">つく</span>
                  </span>
                  れる
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  <span className="kanji">
                    話す<span className="furigana">はな</span>
                  </span>
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    話す<span className="furigana">はな</span>
                  </span>
                  せる
                </td>
                <td>
                  <span className="kanji">
                    泳<span className="furigana">およ</span>
                  </span>
                  ぐ
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    泳<span className="furigana">およ</span>
                  </span>
                  げる
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  <span className="kanji">
                    待<span className="furigana">ま</span>
                  </span>
                  つ
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    待<span className="furigana">ま</span>
                  </span>
                  てる
                </td>
                <td>
                  <span className="kanji">
                    遊<span className="furigana">あそ</span>
                  </span>
                  ぶ
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    遊<span className="furigana">あそ</span>
                  </span>
                  べる
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  <span className="kanji">
                    死<span className="furigana">し</span>
                  </span>
                  ぬ
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    死<span className="furigana">し</span>
                  </span>
                  ぬる
                </td>
                <td>
                  <span className="kanji">
                    買<span className="furigana">か</span>
                  </span>
                  う
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    買<span className="furigana">か</span>
                  </span>
                  える
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
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
                  める
                </td>
              </tr>
              <tr>
                <td colSpan="6">• irregular verbs:</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>くる</td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>こられる</td>
                <td>する</td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>できる</td>
              </tr>
            </tbody>
          </table>
          <p>
            Think of the u-verb conjugation in terms of a <i>hiragana</i> table:
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
                <td>~ない</td>
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
                <td>~ます</td>
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
              <tr className="background-grey">
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
                <td>~ る</td>
              </tr>
            </tbody>
          </table>
          <p>
            The potential verbs for <i>ru</i>-verbs are longer than those for{" "}
            <i>u</i>-verbs. There are shorter, alternative potential verbs for{" "}
            <i>ru</i>-verbs and the irregular verb くる, which use the suffix -
            <i>reru</i>, instead of -
            <i>
              <span className="underline-green">ra</span>reru.
            </i>
          </p>
          <table className="table-list table-mini table-border-green">
            <thead>
              <tr>
                <th colSpan="3" className="table-header text-green">
                  With and without <i>ra</i>
                </th>
                <th>potential forms</th>
                <th>
                  <i>ra</i>-less potential forms
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="2" style={{ verticalAlign: "top" }}>
                  <i>ru</i>-verbs:
                </td>
                <td>
                  <span className="kanji">
                    出<span className="furigana">で</span>
                  </span>
                  る
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    出<span className="furigana">で</span>
                  </span>
                  <span className="underline-green">ら</span>れる
                </td>
                <td>
                  <span className="kanji">
                    出<span className="furigana">で</span>
                  </span>
                  れる
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    見<span className="furigana">み</span>
                  </span>
                  る
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    見<span className="furigana">み</span>
                  </span>
                  <span className="underline-green">ら</span>れる
                </td>
                <td>
                  <span className="kanji">
                    見<span className="furigana">み</span>
                  </span>
                  れる
                </td>
              </tr>
              <tr>
                <td>irregular verbs:</td>
                <td>くる</td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  こ<span className="underline-green">ら</span>れる
                </td>
                <td>これる</td>
              </tr>
            </tbody>
          </table>
          <p>
            Potential verbs themselves conjugate as regular <i>ru</i>-verbs.
            Table of conjugation pattern of potential verbs:
          </p>
          <table className="table-list table-mini table-border-green">
            <thead>
              <tr>
                <th colSpan="3" className="table-header text-green">
                  Conjugation of potential verbs
                </th>
              </tr>
              <tr>
                <th style={{ paddingRight: 0 }}>
                  <span className="text-green">e.g.</span>{" "}
                  <span className="kanji">
                    書<span className="furigana">か</span>
                  </span>
                  ける
                </th>
                <th colSpan="2" style={{ textAlign: "center" }}>
                  short form
                </th>
                <th colSpan="2" style={{ textAlign: "center" }}>
                  long form
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>affirmative</td>
                <td>negative</td>
                <td>affirmative</td>
                <td>negative</td>
              </tr>
              <tr>
                <td>[Present]</td>
                <td>
                  <span className="kanji">
                    書<span className="furigana">か</span>
                  </span>
                  け<span className="underline-green">る</span>
                </td>
                <td>
                  <span className="kanji">
                    書<span className="furigana">か</span>
                  </span>
                  け<span className="underline-green">ない</span>
                </td>
                <td>
                  <span className="kanji">
                    書<span className="furigana">か</span>
                  </span>
                  け<span className="underline-green">ます</span>
                </td>
                <td>
                  <span className="kanji">
                    書<span className="furigana">か</span>
                  </span>
                  <span className="underline-green">ません</span>
                </td>
              </tr>
              <tr>
                <td>[Present]</td>
                <td>
                  <span className="kanji">
                    書<span className="furigana">か</span>
                  </span>
                  け<span className="underline-green">た</span>
                </td>
                <td>
                  <span className="kanji">
                    書<span className="furigana">か</span>
                  </span>
                  け<span className="underline-green">なかった</span>
                </td>
                <td>
                  <span className="kanji">
                    書<span className="furigana">か</span>
                  </span>
                  け<span className="underline-green">ました</span>
                </td>
                <td>
                  <span className="kanji">
                    書<span className="furigana">か</span>
                  </span>
                  け<span className="underline-green">ませんでした</span>
                </td>
              </tr>
              <tr>
                <td>
                  [<i>Te</i>-form]
                </td>
                <td>
                  <span className="kanji">
                    書<span className="furigana">か</span>
                  </span>
                  け<span className="underline-green">て</span>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Verbs that take the particle を can take either を or が when they
            turn into potential verbs. できる, the potential counterpart of
            する, almost takes が all the time. All particles other than を
            remains the same when converted into the potential.
          </p>
          <table className="table-list table-mini table-border-green">
            <thead>
              <tr>
                <th colSpan="3" className="table-header text-green">
                  Particles in potential sentences
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="3">• verbs with を:</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  <span className="kanji">
                    漢<span className="furigana">かん</span>
                  </span>
                  <span className="kanji">
                    字<span className="furigana">じ</span>
                  </span>
                  を
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  む
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    漢<span className="furigana">かん</span>
                  </span>
                  <span className="kanji">
                    字<span className="furigana">じ</span>
                  </span>
                  が
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  める <span style={{ padding: "1em" }}>or</span>
                  <span className="kanji">
                    漢<span className="furigana">かん</span>
                  </span>
                  <span className="kanji">
                    字<span className="furigana">じ</span>
                  </span>
                  を
                  <span className="kanji">
                    読<span className="furigana">よ</span>
                  </span>
                  む
                </td>
              </tr>
              <tr>
                <td colSpan="3">• するーできる:</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  <span className="kanji">
                    仕<span className="furigana">し</span>
                  </span>
                  <span className="kanji">
                    事<span className="furigana">ごと</span>
                  </span>
                  をする
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    仕<span className="furigana">し</span>
                  </span>
                  <span className="kanji">
                    事<span className="furigana">ごと</span>
                  </span>
                  ができる{" "}
                  <span style={{ paddingLeft: "1em" }}>
                    (
                    <span className="kanji">
                      仕<span className="furigana">し</span>
                    </span>
                    <span className="kanji">
                      事<span className="furigana">ごと</span>
                    </span>
                    をできる is much less commonly used.)
                  </span>
                </td>
              </tr>
              <tr>
                <td colSpan="3">• verbs with particles other than を:</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "2em" }}>
                  <span className="kanji">
                    山<span className="furigana">やま</span>
                  </span>
                  に
                  <span className="kanji">
                    登<span className="furigana">のぼ</span>
                  </span>
                  る
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    山<span className="furigana">やま</span>
                  </span>
                  に
                  <span className="kanji">
                    登<span className="furigana">のぼ</span>
                  </span>
                  れる
                  <span style={{ paddingLeft: "1em" }}>
                    (No particle change involved.)
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            You can express the idea of "can do" using a more complex
            construction: verb dictionary form + ことができる.
          </p>
          <div className="tab table-double-column">
            <p>
              メアリーさんはギターを
              <span className="kanji">
                弾<span className="furigana">ひ</span>
              </span>
              く<span className="underline-green">ことができます</span>。
              <br />
              <i>Mary can play the guitar.</i>
            </p>
            <p>
              (Compare: ギターを
              <span className="kanji">
                弾<span className="furigana">ひ</span>
              </span>
              けます)
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              このアパートでは
              <span className="kanji">
                犬<span className="furigana">いぬ</span>
              </span>
              を
              <span className="kanji">
                飼<span className="furigana">か</span>
              </span>
              う<span className="underline-green">ことができません</span>。
              <br />
              <i>You cannot keep dogs in this apartment.</i>
            </p>
            <p>
              (Compare:{" "}
              <span className="kanji">
                犬<span className="furigana">いぬ</span>
              </span>
              が
              <span className="kanji">
                飼<span className="furigana">か</span>
              </span>
              えません)
            </p>
          </div>
        </div>
      </section>

      <section id="section2">
        <h3>13.2: ~し</h3>
        <div className="indent">
          <p>
            Similar to から, as in to give a reason for something, し can also
            be used to give a reason.
          </p>
          <p className="tab">
            日本語は
            <span className="kanji">
              面<span className="furigana">おも</span>
            </span>
            <span className="kanji">
              白<span className="furigana">しろ</span>
            </span>
            いから、日本語の
            <span className="kanji">
              授業<span className="furigana">じゅぎょう</span>
            </span>
            が
            <span className="kanji">
              大<span className="furigana">だい</span>
            </span>
            好きです。
            <br />
            <i>
              I really like my Japanese class, because Japanese is interesting.
            </i>
          </p>
          <p>
            When you mention more than one reasons, you can use し in place of
            から. し usually follows a predicate in the short form.
          </p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td>
                  <span className="text-green">
                    (reason<sub>1</sub>)
                  </span>{" "}
                  し、
                  <span className="text-green">
                    (reason<sub>2</sub>)
                  </span>{" "}
                  し、<span className="text-green">(situation)</span>。
                </td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            日本語は
            <span className="kanji">
              面<span className="furigana">おも</span>
            </span>
            <span className="kanji">
              白<span className="furigana">しろ</span>
            </span>
            いし、
            <span className="kanji">
              先<span className="furigana">せん</span>
            </span>
            <span className="kanji">
              生<span className="furigana">せい</span>
            </span>
            はいいし、私は日本語の
            <span className="kanji">
              授業<span className="furigana">じゅぎょう</span>
            </span>
            が
            <span className="kanji">
              大<span className="furigana">だい</span>
            </span>
            好きです。
            <br />
            <i>
              I really like my Japanese class, because Japanese is interesting,
              and our teacher is good.
            </i>
          </p>
          <p>
            When you use just one し clause, you imply that it is not the only
            reason for the situation.
          </p>
          <p className="tab">
            <span className="kanji">
              物<span className="furigana">ぶっ</span>
            </span>
            <span className="kanji">
              価<span className="furigana">か</span>
            </span>
            が
            <span className="kanji">
              安<span className="furigana">やす</span>
            </span>
            いし、この
            <span className="kanji">
              町<span className="furigana">まち</span>
            </span>
            の
            <span className="kanji">
              生<span className="furigana">せい</span>
            </span>
            <span className="kanji">
              活<span className="furigana">かつ</span>
            </span>
            は
            <span className="kanji">
              楽<span className="furigana">らく</span>
            </span>
            です。
            <br />
            <i>
              Life in this city is easygoing. Things are inexpensive, for one
              thing.
            </i>
          </p>
          <p>
            You can also add the し clause in a separate sentence, providing
            reasons for the situation mentioned.
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
            はいい
            <span className="kanji">
              先<span className="furigana">せん</span>
            </span>
            <span className="kanji">
              生<span className="furigana">せい</span>
            </span>
            です。
            <span className="kanji">
              教<span className="furigana">おし</span>
            </span>
            えるのが
            <span className="kanji">
              上<span className="furigana">じょう</span>
            </span>
            <span className="kanji">
              手<span className="furigana">ず</span>
            </span>
            だし、
            <span className="kanji">
              親<span className="furigana">しん</span>
            </span>
            <span className="kanji">
              切<span className="furigana">せつ</span>
            </span>
            だし。
            <br />
            <i>
              Professor Yamashita is a great teacher. He is good at teaching,
              and he is kind.
            </i>
          </p>
          <p>
            Note that you find だ in the present tense with な-adjectives and
            nouns, but not with い-adjectives.
          </p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td>い-adjectives:</td>
                <td>おもしろいし</td>
                <td>
                  (<span className="text-red">X</span> おもしろいだし)
                </td>
              </tr>
              <tr>
                <td>な-adjectives:</td>
                <td>
                  <span className="kanji">
                    好<span className="furigana">す</span>
                  </span>
                  き<span className="underline-green">だ</span>し
                </td>
                <td>
                  (<span className="text-red">X</span>{" "}
                  <span className="kanji">
                    好<span className="furigana">す</span>
                  </span>
                  きし)
                </td>
              </tr>
              <tr>
                <td>noun + です:</td>
                <td>
                  <span className="kanji">
                    学<span className="furigana">がく</span>
                  </span>
                  <span className="kanji">
                    生<span className="furigana">せい</span>
                  </span>
                  <span className="underline-green">だ</span>し
                </td>
                <td>
                  (<span className="text-red">X</span>{" "}
                  <span className="kanji">
                    学<span className="furigana">がく</span>
                  </span>
                  <span className="kanji">
                    生<span className="furigana">せい</span>
                  </span>
                  し)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section3">
        <h3>13.3: ~そうです (It looks like...)</h3>
        <div className="indent">
          <p>
            We add そうで to い- and な-adjective bases to say that
            something"seemingly" has those properties. We are guessing what
            something is like on the basis of our impressions.
          </p>
          <div className="tab table-double-column">
            <p>このりんごはおいしそうです。</p>
            <p>
              <i>This apple looks delicious.</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              <span className="kanji">
                明日<span className="furigana">あした</span>
              </span>
              は
              <span className="kanji">
                天<span className="furigana">てん</span>
              </span>
              <span className="kanji">
                気<span className="furigana">き</span>
              </span>
              が
              <span className="kanji">
                良<span className="furigana">よ</span>
              </span>
              さそうです。
            </p>
            <p>
              <i>It looks like the weather will be fine tomorrow.</i>
            </p>
          </div>
          <p>
            To form ~そうです sentences with い-adjectives, you drop the final
            い; with な-adjectives, you just drop な. An exception is
            い-adjective いい, which changes to よさ before そう.
          </p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td>い-adjectives:</td>
                <td>おいしい</td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>おいしそうです</td>
              </tr>
              <tr>
                <td>(exception)</td>
                <td>いい</td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>よさそうです</td>
              </tr>
              <tr>
                <td>な-adjectives:</td>
                <td>
                  <span className="kanji">
                    元<span className="furigana">げん</span>
                  </span>
                  <span className="kanji">
                    気<span className="furigana">き</span>
                  </span>
                  （な）
                </td>
                <td style={{ textAlign: "center", padding: 0 }}>→</td>
                <td>
                  <span className="kanji">
                    元<span className="furigana">げん</span>
                  </span>
                  <span className="kanji">
                    気<span className="furigana">き</span>
                  </span>
                  そうです
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            You can use そうです with negative adjectives too. ない is changed
            to なさ before そう.
          </p>
          <p className="tab">
            この
            <span className="kanji">
              本<span className="furigana">ほん</span>
            </span>
            は
            <span className="kanji">
              難<span className="furigana">むずか</span>
            </span>
            しく<span className="underline-green">なさそうです</span>。
            <br />
            <i>This book does not look difficult.</i>
          </p>
          <p className="tab">
            ソラさんはテニスが
            <span className="kanji">
              上<span className="furigana">じょう</span>
            </span>
            <span className="kanji">
              手<span className="furigana">ず</span>
            </span>
            じゃ<span className="underline-green">なさそうです</span>。
            <br />
            <i>It does not look like Sora is good at tennis.</i>
          </p>
          <p>
            You can use the adjective + そう combination to qualify a noun. そう
            is a な-adjective, so we say そうな before a noun.
          </p>
          <p className="tab">
            <span className="kanji">
              暖<span className="furigana">あたた</span>
            </span>
            か<span className="underline-green">そうな</span>セーターを
            <span className="kanji">
              着<span className="furigana">き</span>
            </span>
            ています。
            <br />
            <i>She is wearing a warm-looking sweater.</i>
          </p>
          <p>
            In many そうです sentences, the guesswork is done on the basis of
            visual impressions. We use そうです when we{" "}
            <i>lack conclusive evidence</i>. We do not use そう for visual
            evidence, such as <span className="text-red">X</span> きれいそうです
            for looking something pretty. If we can see it, then we have
            evidence to conclude that it is pretty.
          </p>
        </div>
      </section>

      <section id="section4">
        <h3>13.4: ~てみる</h3>
        <div className="indent">
          <p>
            You can use the <i>te</i>-form of a verb plus the helping verb みる
            to express the idea of "doing something tentatively", or "trying
            something". You're not sure what the outcome is, but you try it and
            see what the consequences are.
          </p>
          <p className="tab">
            <span className="kanji">
              漢<span className="furigana">かん</span>
            </span>
            <span className="kanji">
              字<span className="furigana">じ</span>
            </span>
            がわからなかったので、日本
            <span className="kanji">
              人<span className="furigana">じん</span>
            </span>
            の友
            <span className="kanji">
              達<span className="furigana">だち</span>
            </span>{" "}
            に
            <span className="kanji">
              聞<span className="furigana">き</span>
            </span>
            いてみました。
            <br />
            <i>
              I did not know the kanji, so I tried asking a Japanese friend of
              mine.
            </i>
          </p>
          <div className="tab table-double-column">
            <p>
              A: この
              <span className="kanji">
                本<span className="furigana">ほん</span>
              </span>
              、
              <span className="kanji">
                面<span className="furigana">おも</span>
              </span>
              <span className="kanji">
                白<span className="furigana">しろ</span>
              </span>
              かったですよ。
            </p>
            <p>
              <i>This book was interesting.</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              B: じゃあ、
              <span className="kanji">
                読<span className="furigana">よ</span>
              </span>
              んでみます。
            </p>
            <p>
              <i>Okay, I will take a look at it.</i>
            </p>
          </div>
          <p>
            みる comes form the verb 見る, and conjugates as a regular <i>ru</i>
            -verb. Unlike the main verb, 見る, ~てみる is always written in{" "}
            <i>hiragana</i>.
          </p>
        </div>
      </section>

      <section id="section5">
        <h3>13.5: なら</h3>
        <div className="indent">
          <p>
            なら is attached to a sentence which describes the condition where
            certain events or situations happen. Often translated as "if". The
            main ideas of a なら sentence are contrast and limitation, usually
            indicating specific situation or condition where something applies.
          </p>
          <p>Example 1:</p>
          <p className="tab">
            A: ブラジルに
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            ったことがありますか。
            <br />
            <i>Have you ever been to Brazil?</i>
          </p>
          <p className="tab">
            チリ<span className="underline-green">なら</span>
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            ったことがありますが、ブラジルは
            <span className="kanji">
              行<span className="furigana">い</span>
            </span>
            ったことがありません。
            <br />
            <i>
              I've been to Chile, but never to Brazil (If the question were
              about Chile, yes, but Brazil, no.)
            </i>
          </p>
          <p>Example 2:</p>
          <p className="tab">
            日本語が
            <span className="kanji">
              読<span className="furigana">よ</span>
            </span>
            めますか。
            <br />
            <i>Can you read Japanese?</i>
          </p>
          <p className="tab">
            ひらがな<span className="underline-green">なら</span>
            <span className="kanji">
              読<span className="furigana">よ</span>
            </span>
            めます。
            <br />
            <i>If it is (written) in hirgana, yes.</i>
          </p>
          <p>
            なら introduces a sentence that says something "positive" about the
            item that is contrasted.
          </p>
        </div>
      </section>

      <section id="section6">
        <h3>13.6: 一週間に三回</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Lesson13;
