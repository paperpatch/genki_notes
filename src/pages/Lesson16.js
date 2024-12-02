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

function Lesson16() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 16: 忘れ物 (Lost and Found)</h2>
      <section id="section1">
        <h3>16.1: ～てあげる / てくれる / てもらう</h3>
        <div className="indent">
          <p>
            Lesson 14 has the verbs あげる, くれる, and もらう describe
            transactions of things. In this lesson, these verbs can also be used
            as helping verbs. When these verbs follow the <i>te</i>-form of a
            verb, they describe the giving and receiving of services.
          </p>
          <Diagram />
          <p>
            We use the <i>te</i>-form + あげる when we do something for the sake
            of others, or somebody does something for somebody else. The
            addition of the helping verb あげる does not change the basic
            meaning of the sentences, but puts focus on the fact that the
            actions were performed "on demand" or "as a favor".
          </p>
          <p className="tab">
            <span className="kanji">
              私<span className="furigana">わたし</span>
            </span>
            は
            <span className="kanji">
              妹<span className="furigana">いもうと</span>
            </span>
            にお
            <span className="kanji">
              金<span className="furigana">かね</span>
            </span>
            を
            <span className="kanji">
              貸<span className="furigana">か</span>
            </span>
            して<span className="underline-green">あげました</span>。
            <br />
            <i>
              I (generously) lent my sister money (to help her out of her
              destitute conditions).
            </i>
            <br />
            c.f.{" "}
            <span className="kanji">
              私<span className="furigana">わたし</span>
            </span>
            は
            <span className="kanji">
              妹<span className="furigana">いもうと</span>
            </span>
            にお
            <span className="kanji">
              金<span className="furigana">かね</span>
            </span>
            を
            <span className="kanji">
              貸<span className="furigana">か</span>
            </span>
            しました。[an objective statement]
          </p>
          <p className="tab">
            ななみさんはヤスミンさんを
            <span className="kanji">
              駅<span className="furigana">えき</span>
            </span>
            に
            <span className="kanji">
              連<span className="furigana">つ</span>
            </span>
            れて行ってあげました。
            <br />
            <i>
              Nanami (kindly) took Yasmin to the station (because she would be
              lost if left all by herself).
            </i>
            <br />
            c.f. ななみさんはヤスミンさんを
            <span className="kanji">
              駅<span className="furigana">えき</span>
            </span>
            に
            <span className="kanji">
              連<span className="furigana">つ</span>
            </span>
            れて行きました。[an objective statement]
          </p>
          <p>We use くれる when somebody does something for us.</p>
          <p className="tab">
            <span className="kanji">
              友<span className="furigana">とも</span>
            </span>
            だちが
            <span className="kanji">
              宿題<span className="furigana">しゅくだい</span>
            </span>
            を
            <span className="kanji">
              手<span className="furigana">て</span>
            </span>
            <span className="kanji">
              伝<span className="furigana">つだ</span>
            </span>
            って<span className="underline-green">くれます</span>。
            <br />
            <i>A friend helps me with my homework (for which I am grateful).</i>
          </p>
          <p className="tab">
            <span className="kanji">
              親戚<span className="furigana">しんせき</span>
            </span>
            がリンゴを
            <span className="kanji">
              送<span className="furigana">おく</span>
            </span>
            って<span className="underline-green">くれました</span>。
            <br />
            <i>A relative sent me apples. (I should be so lucky.)</i>
          </p>
          <p>
            We use hte <i>te</i>-form + もらう to say that we get, persuade, or
            arrange for, somebody to do something for us. In other words, we
            "receive" somebody's favor. The person performing the action for us
            is accompanied by the particle に.
          </p>
          <p className="tab">
            <span className="kanji">
              私<span className="furigana">わたし</span>
            </span>
            は
            <span className="kanji">
              友<span className="furigana">とも</span>
            </span>
            だち<span className="underline-green">に</span>
            <span className="kanji">
              宿題<span className="furigana">しゅくだい</span>
            </span>
            を
            <span className="kanji">
              手<span className="furigana">て</span>
            </span>
            <span className="kanji">
              伝<span className="furigana">つだ</span>
            </span>
            って<span className="underline-green">もらいました</span>。
            <br />
            <i>I got a friend of mine to help me with my homework.</i>
          </p>
          <p>
            Compare the last sentence with the くれる version below. They
            describe more or less the same event, but the subjects are
            different. In もらう sentences, the subject is the beneficiary. In
            くれる sentences, the subject is the benefactor.
          </p>
          <p className="tab">
            <span className="kanji">
              友<span className="furigana">とも</span>
            </span>
            だちが
            <span className="kanji">
              宿題<span className="furigana">しゅくだい</span>
            </span>
            を
            <span className="kanji">
              手<span className="furigana">て</span>
            </span>
            <span className="kanji">
              伝<span className="furigana">つだ</span>
            </span>
            って<span className="underline-green">くれました</span>。
            <br />
            <i>A friend of mine helped me with my homework.</i>
          </p>
        </div>
      </section>

      <section id="section2">
        <h3>16.2: ～ていただけませんか</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section3">
        <h3>16.3: といい</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section4">
        <h3>16.4: ～時</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section5">
        <h3>16.5: ～てすみませんでした</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Lesson16;
