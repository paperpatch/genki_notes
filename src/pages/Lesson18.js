import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson18() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 18: ジョンさんのアルバイト (John’s Part-time Job)</h2>
      <section id="section1">
        <h3>18.1: Transitivity Pairs</h3>
        <div className="indent">
          <p>
            Some verbs describe situations in which people act on things. For
            example, I open the door, you turn on the TV, and they break the
            computer. Such verbs are called "transitive verbs". Other verbs
            describe changes that things or people undergo. For example, the
            door opens, the TV turns on, and the computer breaks down. These
            verbs are called "intransitive verbs".
          </p>
          <p>
            While most verbs are loners and do not have a counterpart of the
            opposite transitivity, some important verbs come in pairs.
          </p>
          <table className="table-list table-border-green">
            <tbody>
              <tr>
                <td></td>
                <td>
                  <span className="text-green">Transitive</span>
                </td>
                <td></td>
                <td>
                  <span className="text-green">Intransitive</span>
                </td>
              </tr>
              <tr>
                <td colSpan="9" className="horizontal-line-wrapper">
                  <div className="horizontal-line-green"></div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    開<span className="furigana">あ</span>
                  </span>
                  ける
                </td>
                <td>
                  <i>open something</i>
                </td>
                <td>
                  <span className="kanji">
                    開<span className="furigana">あ</span>
                  </span>
                  く
                </td>
                <td>
                  <i>something opens</i>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    閉<span className="furigana">し</span>
                  </span>
                  める
                </td>
                <td>
                  <i>close something</i>
                </td>
                <td>
                  <span className="kanji">
                    閉<span className="furigana">し</span>
                  </span>
                  まる
                </td>
                <td>
                  <i>something closes</i>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    入<span className="furigana">い</span>
                  </span>
                  れる
                </td>
                <td>
                  <i>put something in</i>
                </td>
                <td>
                  <span className="kanji">
                    入<span className="furigana">い</span>
                  </span>
                  る
                </td>
                <td>
                  <i>something goes inside</i>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    出<span className="furigana">だ</span>
                  </span>
                  す
                </td>
                <td>
                  <i>take something out</i>
                </td>
                <td>
                  <span className="kanji">
                    出<span className="furigana">だ</span>
                  </span>
                  る
                </td>
                <td>
                  <i>something goes out</i>
                </td>
              </tr>
              <tr>
                <td>つける</td>
                <td>
                  <i>turn something on</i>
                </td>
                <td>つく</td>
                <td>
                  <i>something goes on</i>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    消<span className="furigana">け</span>
                  </span>
                  す
                </td>
                <td>
                  <i>turn something off;</i>
                </td>
                <td>
                  <span className="kanji">
                    消<span className="furigana">け</span>
                  </span>
                  える
                </td>
                <td>
                  <i>something goes off</i>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <i>extinguish something</i>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    壊<span className="furigana">こわ</span>
                  </span>
                  す
                </td>
                <td>
                  <i>break something</i>
                </td>
                <td>
                  <span className="kanji">
                    壊<span className="furigana">こわ</span>
                  </span>
                  れる
                </td>
                <td>
                  <i>something breaks</i>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    汚<span className="furigana">よご</span>
                  </span>
                  す
                </td>
                <td>
                  <i>make something dirty</i>
                </td>
                <td>
                  <span className="kanji">
                    汚<span className="furigana">よご</span>
                  </span>
                  れる
                </td>
                <td>
                  <i>something becomes dirty</i>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    落<span className="furigana">お</span>
                  </span>
                  とす
                </td>
                <td>
                  <i>drop something</i>
                </td>
                <td>
                  <span className="kanji">
                    落<span className="furigana">お</span>
                  </span>
                  ちる
                </td>
                <td>
                  <i>something drops</i>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="kanji">
                    沸<span className="furigana">わ</span>
                  </span>
                  かす
                </td>
                <td>
                  <i>boil water</i>
                </td>
                <td>
                  <span className="kanji">
                    沸<span className="furigana">わ</span>
                  </span>
                  く
                </td>
                <td>
                  <i>water boils</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Transitive verbs call for both the subject (agent) and the object
            (the thing that is acted upon). Intransitive verbs call only for the
            subject (the thing or the person that goes through the change).
          </p>
          <div className="tab table-double-column">
            <p>
              たけしさん<span className="underline-green">が</span>
              <span className="kanji">
                天<span className="furigana">てん</span>
              </span>
              <span className="kanji">
                気<span className="furigana">き</span>
              </span>
              <span className="underline-green">を</span>つけました。
              <br />
              <i>Takeshi turned the light on.</i>
            </p>
            <p>
              <span className="kanji">
                天<span className="furigana">てん</span>
              </span>
              <span className="kanji">
                気<span className="furigana">き</span>
              </span>
              <span className="underline-green">が</span>つきました。
              <br />
              <i>The light came on.</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              たけしさん<span className="underline-green">が</span>お
              <span className="kanji">
                湯<span className="furigana">ゆ</span>
              </span>
              <span className="underline-green">を</span>
              <span className="kanji">
                沸<span className="furigana">わ</span>
              </span>
              かしました。
              <br />
              <i>Takeshi boiled the water.</i>
            </p>
            <p>
              お
              <span className="kanji">
                湯<span className="furigana">ゆ</span>
              </span>
              <span className="underline-green">が</span>
              <span className="kanji">
                沸<span className="furigana">わ</span>
              </span>
              きました 。
              <br />
              <i>The water boiled.</i>
            </p>
          </div>
        </div>
      </section>

      <section id="section2">
        <h3>18.2: Paired Intransitive Verbs + ている</h3>
        <div className="indent">
          <p>
            Transitive verbs describe activities, while instransitive verbs
            decribe changes. They behave differently when they are followed by
            the helping verb ている. Activity verbs + ている refers to action in
            progress, while change verbs + ている refer to the states resulting
            from the change.
          </p>
          <p className="tab">
            ソラさんは
            <span className="kanji">
              今<span className="furigana">いま</span>
            </span>
            、
            <span className="kanji">
              友<span className="furigana">とも</span>
            </span>
            だちと
            <span className="kanji">
              話<span className="furigana">はな</span>
            </span>
            しています。　(activity, action in progress)
            <br />
            <i>Sora is talking with a friend right now.</i>
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
            は
            <span className="kanji">
              結<span className="furigana">けっ</span>
            </span>
            <span className="kanji">
              婚<span className="furigana">こん</span>
            </span>
            しています。　(change, result state)
            <br />
            <i>Professor Yamashita is married.</i>
          </p>
          <p>
            Similarly, when followed by ている, transitive verbs refer to
            actions in progress, while intransitive verbs refer to states that
            hold true after the change takes place.
          </p>
          <div className="tab table-double-column">
            <p>Transitive (action in progress):</p>
            <p>Intransitive (result of a change):</p>
          </div>
          <div className="tab table-double-column">
            <p>
              ウデイさん
              <span className="kanji">
                窓<span className="furigana">まど</span>
              </span>
              を
              <span className="kanji">
                開<span className="furigana">け</span>
              </span>
              けています。
              <br />
              <i>Uday is opening the windows.</i>
            </p>
            <p>
              <span className="kanji">
                窓<span className="furigana">まど</span>
              </span>
              を
              <span className="kanji">
                開<span className="furigana">け</span>
              </span>
              いています。
              <br />
              <i>The windows are open.</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              ともさんは
              <span className="kanji">
                電<span className="furigana">でん</span>
              </span>
              <span className="kanji">
                気<span className="furigana">き</span>
              </span>
              を
              <span className="kanji">
                消<span className="furigana">き</span>
              </span>
              しています。
              <br />
              <i>Tomo is turning the light off.</i>
            </p>
            <p>
              <span className="kanji">
                電<span className="furigana">でん</span>
              </span>
              <span className="kanji">
                気<span className="furigana">き</span>
              </span>
              は
              <span className="kanji">
                消<span className="furigana">き</span>
              </span>
              えています。
              <br />
              <i>The light is off.</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              ゴジラが
              <span className="kanji">
                町<span className="furigana">まち</span>
              </span>
              を
              <span className="kanji">
                壊<span className="furigana">こわ</span>
              </span>
              しています。
              <br />
              <i>Godzilla is destroying the city.</i>
            </p>
            <p>
              このパソコンは
              <span className="kanji">
                壊<span className="furigana">こわ</span>
              </span>
              れています。
              <br />
              <i>This computer is broken.</i>
            </p>
          </div>
        </div>
      </section>

      <section id="section3">
        <h3>18.3: ～てしもう</h3>
        <div className="indent">
          <p>
            The <i>te</i>-form of a verb + しまう has two meanings. In the first
            instance, しまう indicates that one "carries out with determination"
            a plan described by the verb. It typically involves bringing
            something to a culmination. You, in other words, do something
            completely, or finish doing something, or have something done.
          </p>
          <p className="tab">
            <span className="kanji">
              本<span className="furigana">ほん</span>
            </span>
            を
            <span className="kanji">
              読<span className="furigana">よ</span>
            </span>
            んでしまいました。
            <br />
            <i>I read the book completely. / I finished reading the book.</i>
          </p>
        </div>
      </section>

      <section id="section4">
        <h3>18.4: ～と</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section5">
        <h3>18.5: ～ながら</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section6">
        <h3>18.6: ばよかったです</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Lesson18;
