import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";

function Lesson10() {
  useSmoothScrollToSection();

  return (
    <div>
      <h2>Lesson 10: 冬休みの予定 (Winter Vacations Plans)</h2>
      <section id="section1">
        <h3>10.1: Comparison between Two Items</h3>
        <div className="indent">
          <p>
            In Japanese, adjectives do not change form in comparative sentences,
            meaning there is no alteration as in "great/greater".
          </p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>
                  A <span className="underline-orange">のほうが</span>
                </td>
                <td>
                  B <span>より</span> (property)。
                </td>
                <td>=</td>
                <td>
                  <i>
                    A <span className="underline-orange">is more</span>{" "}
                    (property) <span className="underline-orange">than</span> B
                  </i>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="tab">
            中国<span className="underline-orange">のほうが</span>日本
            <span className="underline-orange">より</span>大きいです。
            <br />
            <i>China is larger than Japan.</i>
          </p>
          <p>If you want to ask a question comparing two items:</p>
          <table className="table-list table-mini table-border-orange">
            <tbody>
              <tr>
                <td>A と B と どちらのほう / どっちのほうが (property)。</td>
              </tr>
              <tr>
                <td style={{ textAlign: "right" }}>
                  <i>= Between A and B, which is more (property)?</i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section2">
        <h3>10.2: Comparison among Three or More Items</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section3">
        <h3>10.3: Adjective/Noun + の</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section4">
        <h3>10.4: ~つもりだ</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section5">
        <h3>10.5: Adjective + なる</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section6">
        <h3>10.6: どこかに / どこにも</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>

      <section id="section7">
        <h3>10.7: で</h3>
        <div className="indent">
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Lesson10;
