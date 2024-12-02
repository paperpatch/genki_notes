import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

const Diagram = () => {
  return (
    <div
      style={{
        overflow: "auto",
        maxWidth: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <svg
        viewBox="0 0 500 500"
        preserveAspectRatio="xMidYMid meet"
        style={{ width: "100%", height: "auto", maxWidth: "500px" }}
      >
        {/* Circles */}
        <circle cx="100" cy="100" r="60" fill="blue" />
        <text
          x="100"
          y="100"
          textAnchor="middle"
          alignmentBaseline="middle"
          fill="white"
          style={{ fontWeight: "bold" }}
        >
          You
        </text>

        <circle cx="100" cy="400" r="60" fill="red" />
        <text
          x="100"
          y="400"
          textAnchor="middle"
          fill="white"
          style={{ fontWeight: "bold" }}
        >
          Close Friend
        </text>
        <text
          x="100"
          y="420"
          textAnchor="middle"
          fill="white"
          style={{ fontWeight: "bold" }}
        >
          Relatives
        </text>

        <circle cx="400" cy="100" r="60" fill="green" />
        <text
          x="400"
          y="100"
          textAnchor="middle"
          alignmentBaseline="middle"
          fill="white"
          style={{ fontWeight: "bold" }}
        >
          Random A
        </text>

        <circle cx="400" cy="400" r="60" fill="green" />
        <text
          x="400"
          y="400"
          textAnchor="middle"
          alignmentBaseline="middle"
          fill="white"
          style={{ fontWeight: "bold" }}
        >
          Random B
        </text>

        {/* Arrows */}
        {/* You to Close Friend */}
        <line
          x1="90"
          y1="170"
          x2="90"
          y2="330"
          stroke="red"
          strokeWidth="3"
          markerEnd="url(#arrowhead-red)"
        />
        <text
          transform="translate(80, 270) rotate(-90)"
          fill="red"
          style={{ fontWeight: "bold" }}
        >
          あげる
        </text>

        {/* Close Friend to You */}
        <line
          className="diagram-black-line"
          x1="115"
          y1="330"
          x2="115"
          y2="170"
          stroke="black"
          strokeWidth="3"
          markerEnd="url(#arrowhead-black)"
        />
        <text
          className="diagram-black-text"
          transform="translate(125, 220) rotate(90)"
          fill="black"
          style={{ fontWeight: "bold" }}
        >
          くれる
        </text>

        {/* You to Random A */}
        <line
          x1="170"
          y1="90"
          x2="330"
          y2="90"
          stroke="red"
          strokeWidth="3"
          markerEnd="url(#arrowhead-red)"
        />
        <text
          x="250"
          y="80"
          textAnchor="middle"
          fill="red"
          style={{ fontWeight: "bold" }}
        >
          あげる
        </text>

        {/* Random A to You */}
        <line
          className="diagram-black-line"
          x1="330"
          y1="115"
          x2="170"
          y2="115"
          stroke="black"
          strokeWidth="3"
          markerEnd="url(#arrowhead-black)"
        />
        <text
          className="diagram-black-text"
          x="250"
          y="140"
          textAnchor="middle"
          fill="black"
          style={{ fontWeight: "bold" }}
        >
          くれる
        </text>

        {/* Close Friend to Random B */}
        <line
          x1="170"
          y1="410"
          x2="330"
          y2="410"
          stroke="red"
          strokeWidth="3"
          markerEnd="url(#arrowhead-red)"
        />
        <text
          x="250"
          y="435"
          textAnchor="middle"
          fill="red"
          style={{ fontWeight: "bold" }}
        >
          あげる
        </text>

        {/* Random B to Close Friend */}
        <line
          className="diagram-black-line"
          x1="330"
          y1="385"
          x2="170"
          y2="385"
          stroke="black"
          strokeWidth="3"
          markerEnd="url(#arrowhead-black)"
        />
        <text
          className="diagram-black-text"
          x="250"
          y="375"
          textAnchor="middle"
          fill="black"
          style={{ fontWeight: "bold" }}
        >
          くれる
        </text>

        {/* Random A to Random B */}
        <line
          x1="385"
          y1="170"
          x2="385"
          y2="330"
          stroke="red"
          strokeWidth="3"
          markerEnd="url(#arrowhead-red)"
        />
        <text
          transform="translate(375, 270) rotate(-90)"
          fill="red"
          style={{ fontWeight: "bold" }}
        >
          あげる
        </text>

        {/* Random B to Random A */}
        <line
          x1="415"
          y1="330"
          x2="415"
          y2="170"
          stroke="red"
          strokeWidth="3"
          markerEnd="url(#arrowhead-red)"
        />
        <text
          transform="translate(425, 220) rotate(90)"
          fill="red"
          style={{ fontWeight: "bold" }}
        >
          くれる
        </text>

        {/* External Arrows */}
        {/* Random B to Close Friend */}
        <path
          d="M 370 465 C 300 510 210 510 135 460"
          fill="none"
          stroke="gray"
          strokeWidth="3"
          markerEnd="url(#arrowhead-curve)"
        />
        <text
          transform="translate(230, 480)"
          fill="gray"
          style={{ fontWeight: "bold" }}
        >
          もらう
        </text>

        {/* Close Friend to You */}
        <path
          d="M 50 350 C 15 300 0 230 50 140"
          fill="none"
          stroke="gray"
          strokeWidth="3"
          markerEnd="url(#arrowhead-curve)"
        />
        <text
          transform="translate(45, 275) rotate(-90)"
          fill="gray"
          style={{ fontWeight: "bold" }}
        >
          もらう
        </text>

        {/* Random A to You */}
        <path
          d="M 370 40 C 270 -20 200 0 140 45"
          fill="none"
          stroke="gray"
          strokeWidth="3"
          markerEnd="url(#arrowhead-curve)"
        />
        <text
          x="250"
          y="30"
          textAnchor="middle"
          fill="gray"
          style={{ fontWeight: "bold" }}
        >
          もらう
        </text>

        {/* Arrowhead Definitions */}
        <defs>
          <marker
            id="arrowhead-red"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="red" />
          </marker>

          <marker
            id="arrowhead-black"
            className="marker-black"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="black" />
          </marker>

          <marker
            id="arrowhead-curve"
            markerWidth="15"
            markerHeight="10"
            refX="15"
            refY="5"
            orient="auto"
          >
            <polygon points="0 0, 15 5, 0 10, 5 5" fill="gray" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

function Lesson14() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 14: バレンタインデー (Valentime’s Day)</h2>
      <section id="section1">
        <h3>14.1: ほしい</h3>
        <div className="indent">
          <p>
            ほしい means to want something. ほしい follows the い-adjective
            conjugation pattern. The object of desire is usually followed by the
            particle が. In negative sentences, the particle は is also used.
          </p>
          <p className="tab">
            いい
            <span className="kanji">
              成<span className="furigana">せい</span>
            </span>
            <span className="kanji">
              績<span className="furigana">せき</span>
            </span>
            がほしいです。
            <br />
            <i>I want a good grade.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              子<span className="furigana">こ</span>
            </span>
            <span className="kanji">
              月<span className="furigana">ども</span>
            </span>
            子の
            <span className="kanji">
              時<span className="furigana">とき</span>
            </span>
            、ポケモンのゲームがほしかったです。
            <br />
            <i>When I was young, I wanted a Pokémon game.</i>
          </p>
          <div className="tab table-double-column">
            <p>Q : プレゼントがほしい？</p>
            <p>
              <i>Do you want a present?</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>A : ううん、ほしくない。</p>
            <p>
              <i>No, I don't.</i>
            </p>
          </div>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td>
                  （
                  <span className="kanji">
                    私<span className="furigana">わたし</span>
                  </span>
                  は）X が　ほしい
                </td>
                <td>
                  <i>I want X.</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            ほしい is like たい (I want to do...), and its use is mostly limited
            to the first person, the speaker. We can say ほしい to say "I want
            this", but not someone else like "Mary wants that". To talk about
            someone else's wishes or desires, you either quote that person's
            expression of desire, or describe it as your guess.
          </p>
          <p className="tab">
            ヤスミンさんは
            <span className="kanji">
              新<span className="furigana">あたら</span>
            </span>
            しいスマホがほしい
            <span className="underline-green">
              と
              <span className="kanji">
                言<span className="furigana">い</span>
              </span>
              っています
            </span>
            。
            <br />
            <i>Yasmin says she wants a new phone.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              亜<span className="furigana">あ</span>
            </span>
            <span className="kanji">
              美<span className="furigana">み</span>
            </span>
            さんはぬいぐるみがほしくない
            <span className="underline-green">でしょう</span>。
            <br />
            <i>Ami probably doesn't want a stuffed animal.</i>
          </p>
          <p>
            You can replace ほしい with the derived verb ほしがる, which
            indivates that you can tell by the way the person acts that they
            want something. ほしがる conjugates as an <i>u</i>-verb and is
            usually used in the form ほしがっている. Unlike ほしい, the particle
            after the object of desire is を.
          </p>
          <p className="tab">
            ななみさんは
            <span className="kanji">
              英<span className="furigana">えい</span>
            </span>
            <span className="kanji">
              語<span className="furigana">ご</span>
            </span>
            を
            <span className="underline-green">
              <span className="kanji">
                習<span className="furigana">なら</span>
              </span>
              いたがって
            </span>
            います。
            <span style={{ paddingLeft: "2em" }}>
              ＜{" "}
              <span className="kanji">
                習<span className="furigana">なら</span>
              </span>
              いたい
            </span>
            <br />
            <i>(I understand that) Nanami wants to study English.</i>
          </p>
          <p className="tab">
            カルロスさんは
            <span className="kanji">
              友<span className="furigana">とも</span>
            </span>
            <span className="kanji">
              達<span className="furigana">だち</span>
            </span>
            を<span className="underline-green">ほしがって</span>います。
            <span style={{ paddingLeft: "2em" }}>＜ ほしい</span>
            <br />
            <i>(I understand that) Carlos wants a friend.</i>
          </p>
          <p>
            Because the core meaning of ほしい is "desire to possess", when you
            can use a verb + たい instead of ほしい, you should use the verb.
          </p>
          <div className="tab table-double-column">
            <p>
              <span className="kanji">
                昼<span className="furigana">ひる</span>
              </span>
              ご
              <span className="kanji">
                飯<span className="furigana">はん</span>
              </span>
              が
              <span className="kanji">
                食<span className="furigana">た</span>
              </span>
              べたい。
            </p>
            <p>
              ( <i>not</i>{" "}
              <span className="kanji">
                昼<span className="furigana">ひる</span>
              </span>
              ご
              <span className="kanji">
                飯<span className="furigana">はん</span>
              </span>
              がほしい )
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              <span className="kanji">
                旅<span className="furigana">りょ</span>
              </span>
              <span className="kanji">
                行<span className="furigana">こう</span>
              </span>
              に行きたい
            </p>
            <p>
              ( <i>not</i>{" "}
              <span className="kanji">
                旅<span className="furigana">りょ</span>
              </span>
              <span className="kanji">
                行<span className="furigana">こう</span>
              </span>
              がほしい )
            </p>
          </div>
        </div>
      </section>

      <section id="section2">
        <h3>14.2: ～かもしれません</h3>
        <div className="indent">
          <p>
            かもしれません means that something is a "possibility". When you
            think that something <i>may be</i> the case. When you say
            かもしれません, you are not sure about the state of affairs than
            when you say でしょう. In casual speech, you could say かもしれない
            or かも.
          </p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td>short form + かもしれません</td>
                <td>
                  <i>Maybe ...</i>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            You can add かもしれません to the short forms of predicates, in the
            affirmative and in the negative, in the present as well as the past
            tense.
          </p>
          <p className="tab">
            あしたは
            <span className="kanji">
              雨<span className="furigana">あめ</span>
            </span>
            が
            <span className="kanji">
              降<span className="furigana">ふ</span>
            </span>
            るかもしれません。
            <br />
            <i>It may rain tomorrow.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              田<span className="furigana">た</span>
            </span>
            <span className="kanji">
              中<span className="furigana">なか</span>
            </span>
            さんより、
            <span className="kanji">
              鈴<span className="furigana">すず</span>
            </span>
            <span className="kanji">
              木<span className="furigana">き</span>
            </span>
            さんのほうが
            <span className="kanji">
              背<span className="furigana">せ</span>
            </span>
            が
            <span className="kanji">
              高<span className="furigana">たか</span>
            </span>
            いかもしれない。
            <br />
            <i>Suzuki is perhaps taller than Tanaka.</i>
          </p>
          <p className="tab">
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
            がよくないかも。
            <br />
            <i>The weather may not be good tomorrow.</i>
          </p>
          <p className="tab">
            ロバートさんは、
            <span className="kanji">
              子<span className="furigana">こ</span>
            </span>
            <span className="kanji">
              供<span className="furigana">ども</span>
            </span>
            の
            <span className="kanji">
              時<span className="furigana">とき</span>
            </span>
            、いじわるだったかもしれません。
            <br />
            <i>Robert may have been a bully when he was a kid.</i>
          </p>
          <p>
            When the last part of a sentence is a noun or a な-adjective in the
            present tense, put かもしれません directly after that noun or
            な-adjective. だ is dropped in the sentences.
          </p>
          <table className="table-list table-mini">
            <tbody>
              <tr>
                <td>
                  ウデイさんはインド
                  <span className="kanji">
                    人<span className="furigana">じん</span>
                  </span>
                  <span className="underline-green">だ</span>。
                  <br />
                  <i>Uday is an Indian.</i>
                </td>
                <td style={{ padding: 0 }}>→</td>
                <td>
                  ウデイさんはインド
                  <span className="kanji">
                    人<span className="furigana">じん</span>
                  </span>
                  <span className="underline-green">かもしれません</span>。
                  <br />
                  <i>Uday may be an Indian.</i>
                </td>
              </tr>
              <tr>
                <td>
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
                    犬<span className="furigana">いぬ</span>
                  </span>
                  がきらい<span className="underline-green">だ</span>。
                  <br />
                  <i>Professor Yamashita doesn't like dogs.</i>
                </td>
                <td style={{ padding: 0 }}>→</td>
                <td>
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
                    犬<span className="furigana">いぬ</span>
                  </span>
                  がきらい
                  <span className="underline-green">かもしれません</span>。
                  <br />
                  <i>Professor Yamashita may not like dogs.</i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section3">
        <h3>14.3: あげる / くれる / もらう</h3>
        <div className="indent">
          <p>
            Japanese has two verbs for giving: あげる and くれる. The verb
            depends on the direction of the giving. Use くれる when the
            direction is moving closer to you, and あげる when things are moving
            away from you in a direction.
          </p>
          <Diagram />
          <p>
            With both あげる and くれる, the giver is the subject of the
            sentence, and is accompanied by the particle は or が. The recipient
            is accompanied by the particle に.
          </p>
          <p className="tab">
            <span className="kanji">
              私<span className="furigana">わたし</span>
            </span>
            <span className="underline-green">は</span>その
            <span className="kanji">
              女<span className="furigana">おんな</span>
            </span>
            の
            <span className="kanji">
              人<span className="furigana">ひと</span>
            </span>
            <span className="underline-green">に</span>
            <span className="kanji">
              花<span className="furigana">はな</span>
            </span>
            をあげます。
            <br />
            <i>I will give the woman flowers.</i>
          </p>
          <p className="tab">
            その
            <span className="kanji">
              女<span className="furigana">おんな</span>
            </span>
            の
            <span className="kanji">
              人<span className="furigana">ひと</span>
            </span>
            <span className="underline-green">は</span>
            <span className="kanji">
              男<span className="furigana">おとこ</span>
            </span>
            の人<span className="underline-green">に</span>
            <span className="kanji">
              時計<span className="furigana">とけい</span>
            </span>
            をあげますた。
            <br />
            <i>The woman give the man a watch.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              両親<span className="furigana">りょうしん</span>
            </span>
            <span className="underline-green">が</span>（
            <span className="kanji">
              私<span className="furigana">わたし</span>
            </span>
            <span className="underline-green">に</span>）
            <span className="kanji">
              新<span className="furigana">あたら</span>
            </span>
            しい
            <span className="kanji">
              車<span className="furigana">くるま</span>
            </span>
            をくれるかもしれません。
            <br />
            <i>My parents may give me a new car.</i>
          </p>
          <p className="tab">
            そのプレゼント、だれ<span className="underline-green">が</span>
            くれたんですか。
            <br />
            <i>Who gave you that present?</i>
          </p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td rowSpan={2}>
                  <span className="text-green">Giver</span> + は / が +{" "}
                  <span className="text-green">Receiver</span> + に +{" "}
                </td>
                <td>あげる</td>
                <td rowSpan={2}>
                  <span className="text-green">(giver)</span> <i>gives to</i>{" "}
                  <span className="text-green">(recipient)</span>
                </td>
              </tr>
              <tr>
                <td>くれる</td>
              </tr>
            </tbody>
          </table>
          <p>
            Transactions that are describe with the verb くれる can also be
            described in terms of "receiving" or もらう. With もらう, it is the
            recipient that is the subject of the sentence, and the giver is
            accompanied by the particle に or から.
          </p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td>
                  <span className="text-green">Receiver</span> + は / が +{" "}
                  <span className="text-green">Giver</span>+ に / から + もらう
                </td>
                <td>
                  <span className="text-green">(receiver)</span>{" "}
                  <i>receives from</i>{" "}
                  <span className="text-green">(giver)</span>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            私は　
            <span className="kanji">
              姉<span className="furigana">あね</span>
            </span>
            <span className="underline-green">に</span> /{" "}
            <span className="kanji">
              姉<span className="furigana">あね</span>
            </span>
            <span className="underline-green">から</span>
            　マフラーをもらいました。
            <br />
            <i>I received a winter scarf from my big sister.</i>
          </p>
          <p className="tab">
            <span className="kanji">
              姉<span className="furigana">あね</span>
            </span>
            が私にマフラーをくれました。
            <br />
            <i>My big sister gave me a winter scarf.</i>
          </p>
        </div>
      </section>

      <section id="section4">
        <h3>14.4: たらどうですか</h3>
        <div className="indent">
          <p>
            たらどうですか after a verb conveys advice or recommendation. The
            initial た in たらどうですか stands for the same ending as in the
            past tense short form of a verb in the affirmative. In casual
            speech, たらどうですか may be shortened to たらどう or たら.
          </p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td>verb (short, past) + らどうですか</td>
                <td>
                  <i>why don't you...</i>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="tab table-double-column">
            <p>
              <span className="kanji">
                薬<span className="furigana">くすり</span>
              </span>
              を
              <span className="kanji">
                飲<span className="furigana">の</span>
              </span>
              んだらどうですか。
            </p>
            <p>
              <i>How about taking some medicine?</i>
            </p>
          </div>
          <div className="tab table-double-column">
            <p>
              もっと
              <span className="kanji">
                勉強<span className="furigana">べんきょう</span>
              </span>
              したらどう。
            </p>
            <p>
              <i>Why don't you study harder?</i>
            </p>
          </div>
          <p>
            たらどうですか may sometimes have a disapproving tone, expressing
            criticism of the person for not having performed the action already.
            Therefore, it's safer to avoid using it unless you were asked for
            advice.
          </p>
          <p>
            On a side note, the phrase should not be used for extending
            invitations. If you want to invite your friend to visit, do not use
            たらどうですか, but use ませんか.
          </p>
          <div className="tab table-double-column">
            <p>
              うちに
              <span className="kanji">
                来<span className="furigana">き</span>
              </span>
              ませんか。
              <br />
              <i>Why don't you come to my place?</i>
            </p>
            <p>
              Compare: <span className="text-red">X</span> うちに
              <span className="kanji">
                来<span className="furigana">き</span>
              </span>
              たらどうですか。
            </p>
          </div>
        </div>
      </section>

      <section id="section5">
        <h3>14.5: Number + も / Number + しか + Negative</h3>
        <div className="indent">
          <p>Basic structure for expressing numbers in Japanese:</p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td rowSpan={2}>noun</td>
                <td>が</td>
                <td rowSpan={2}>+</td>
                <td rowSpan={2}>number</td>
              </tr>
              <tr>
                <td>を</td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            <span className="kanji">
              私<span className="furigana">わたし</span>
            </span>
            のうちには
            <span className="underline-green">
              <span className="kanji">
                猫<span className="furigana">ねこ</span>
              </span>
              が
            </span>
            <span className="underline-green">
              <span className="kanji">
                三<span className="furigana">さん</span>
              </span>
              <span className="kanji">
                匹<span className="furigana">びき</span>
              </span>
            </span>
            います。
            <br />
            <i>There are three cats in our house.</i>
          </p>
          <p className="tab">
            <span className="underline-green">
              <span className="kanji">
                傘<span className="furigana">かさ</span>
              </span>
              を
            </span>
            <span className="underline-green">
              <span className="kanji">
                二<span className="furigana">に</span>
              </span>
              <span className="kanji">
                本<span className="furigana">ほん</span>
              </span>
            </span>
            <span className="kanji">
              買<span className="furigana">か</span>
            </span>
            いました。
            <br />
            <i>We bought two umbrellas.</i>
          </p>
          <p>
            You can add も to the number word when you want to say "as many as".
          </p>
          <p className="tab">
            <span className="kanji">
              私<span className="furigana">わたし</span>
            </span>
            の
            <span className="kanji">
              母<span className="furigana">はは</span>
            </span>
            は
            <span className="kanji">
              猫<span className="furigana">ねこ</span>
            </span>
            を
            <span className="kanji">
              三<span className="furigana">さん</span>
            </span>
            <span className="kanji">
              匹<span className="furigana">びき</span>
            </span>
            <span className="underline-green">も</span>
            <span className="kanji">
              飼<span className="furigana">か</span>
            </span>
            っています。
            <br />
            <i>My mother owns three, count them, three cats.</i>
          </p>
          <p className="tab">
            きのパーティーには
            <span className="kanji">
              学生<span className="furigana">がくせい</span>
            </span>
            が
            <span className="kanji">
              二<span className="furigana">に</span>
            </span>
            <span className="kanji">
              十人<span className="furigana">じゅうにん</span>
            </span>
            <span className="underline-green">も</span>
            <span className="kanji">
              来<span className="furigana">き</span>
            </span>
            ました。
            <br />
            <i>As many as twenty students showed up at the party yesterday.</i>
          </p>
          <p>
            You can add しか to number word, <i>and</i> turn the predicate into
            the negative when you want to say "as few as" or "only".
          </p>
          <p className="tab">
            私は
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
              本<span className="furigana">ほん</span>
            </span>
            を
            <span className="kanji">
              一冊<span className="furigana">いっさつ</span>
            </span>
            <span className="underline-green">しか</span>
            <span className="kanji">
              持<span className="furigana">も</span>
            </span>
            っていません。
            <br />
            <i>I have only one Japanese book.</i>
          </p>
          <p className="tab">
            この
            <span className="kanji">
              会<span className="furigana">かい</span>
            </span>
            <span className="kanji">
              社<span className="furigana">しゃ</span>
            </span>
            にはパソコンが
            <span className="kanji">
              二<span className="furigana">に</span>
            </span>
            <span className="kanji">
              台<span className="furigana">だい</span>
            </span>
            <span className="underline-green">しか</span>あり
            <span className="underline-green">ません</span>。
            <br />
            <i>There are only two computers in this company.</i>
          </p>
          <table className="table-list table-mini table-border-green">
            <tbody>
              <tr>
                <td>number + も</td>
                <td>
                  <i>as many as</i>
                </td>
              </tr>
              <tr>
                <td>number + しか　ない</td>
                <td>
                  <i>as few as</i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Lesson14;
