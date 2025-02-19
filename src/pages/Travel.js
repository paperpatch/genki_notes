import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";
import "./Pages.css";

function Travel() {
  useSmoothScrollToSection();

  return (
    <div>
      <div id="greetings">
        <h2>Greetings / Basic Phrases</h2>
        <section>
          <h3>1. Hello</h3>
          <div className="tab">
            <p>
              こんにちは
              <br />
              <i>konnichiwa</i>
            </p>
          </div>

          <h3>2. Good Morning</h3>
          <div className="tab">
            <p>
              おはようございます
              <br />
              <i>ohayou gozaimasu</i>
            </p>
          </div>

          <h3>3. Good Evening</h3>
          <div className="tab">
            <p>
              こんばんは
              <br />
              <i>konbanwa</i>
            </p>
          </div>

          <h3>4. Nice to meet you</h3>
          <div className="tab">
            <p>
              <span className="kanji">
                初<span className="furigana">はじ</span>
              </span>
              めまして
              <br />
              <i>hajimemashite</i>
            </p>
          </div>

          <h3>5. Goodbye</h3>
          <div className="tab">
            <p>
              さようなら
              <br />
              <i>sayonara</i>
            </p>
          </div>

          <h3>6. Please</h3>
          <div className="tab">
            <p>
              お
              <span className="kanji">
                願<span className="furigana">ねが</span>
              </span>
              いします
              <br />
              <i>onegaishimasu</i>
            </p>
          </div>

          <h3>7. Thank You</h3>
          <div className="tab">
            <p>
              ありがとうございます
              <br />
              <i>arigatou gozaimasu</i>
            </p>
          </div>

          <h3>8. Excuse Me / Sorry</h3>
          <div className="tab">
            <p>
              すみません
              <br />
              <i>sumimasen</i>
            </p>
          </div>

          <h3>9. Yes</h3>
          <div className="tab">
            <p>
              はい
              <br />
              <i>hai</i>
            </p>
          </div>

          <h3>10. No</h3>
          <div className="tab">
            <p>
              いいえ
              <br />
              <i>iie</i>
            </p>
          </div>

          <h3>11. I don't understand</h3>
          <div className="tab">
            <p>
              <span className="kanji">
                分<span className="furigana">わ</span>
              </span>
              かりません
              <br />
              <i>wakarimasen</i>
            </p>
          </div>

          <h3>12. I don't speak Japanese</h3>
          <div className="tab">
            <p>
              <span className="kanji">
                日<span className="furigana">に</span>
              </span>
              <span className="kanji">
                本<span className="furigana">ほん</span>
              </span>
              <span className="kanji">
                語<span className="furigana">ご</span>
              </span>
              を
              <span className="kanji">
                話<span className="furigana">はな</span>
              </span>
              しません
              <br />
              <i>nihongo o hanashimasen</i>
            </p>
          </div>

          <h3>13. Do you speak English?</h3>
          <div className="tab">
            <p>
              <span className="kanji">
                英<span className="furigana">えい</span>
              </span>
              <span className="kanji">
                語<span className="furigana">ご</span>
              </span>
              を
              <span className="kanji">
                話<span className="furigana">はな</span>
              </span>
              しますか？
              <br />
              <i>Eigo o hanashimasu ka?</i>
            </p>
          </div>

          <h3>14. Can you please repeat that?</h3>
          <div className="tab">
            <p>
              もう
              <span className="kanji">
                一度<span className="furigana">いちど</span>
              </span>
              <span className="kanji">
                言<span className="furigana">い</span>
              </span>
              ってください？
              <br />
              <i>mou ichido itte kudasai?</i>
            </p>
          </div>

          <h3>15. Can you please speak slowly?</h3>
          <div className="tab">
            <p>
              ゆっくり
              <span className="kanji">
                話<span className="furigana">はな</span>
              </span>
              してください
              <br />
              <i>yukkuri hanashite kudasai</i>
            </p>
          </div>
        </section>
      </div>

      <div id="airport">
        <h2>Airport</h2>
        <section>
          <h3>1. Please come in</h3>
          <div className="tab">
            <p>
              いらっしゃいませ。どうぞお入りください。
              <br />
              <i>Irasshaimase. Dōzo o-hairi kudasai.</i>
            </p>
            <b>Response:</b>
            <p>
              ありがとうございます。
              <br />
              <i>Arigatō gozaimasu.</i>
            </p>
          </div>

          <h3>2. Please show your ticket</h3>
          <div className="tab">
            <p>
              チケットをお見せください。
              <br />
              <i>Chiketto o o-mise kudasai.</i>
            </p>
            <b>Response:</b>
            <p>
              はい、どうぞ。
              <br />
              <i>Hai, dōzo.</i>
            </p>
          </div>

          <h3>3. Please show your passport</h3>
          <div className="tab">
            <p>
              パスポートをお見せください。
              <br />
              <i>Pasupōto o o-mise kudasai.</i>
            </p>
            <b>Response:</b>
            <p>
              はい、どうぞ。
              <br />
              <i>Hai, dōzo.</i>
            </p>
          </div>

          <h3>4. The flight is delayed</h3>
          <div className="tab">
            <p>
              フライトが遅れています。
              <br />
              <i>Furaito ga okurete imasu.</i>
            </p>
            <b>Response:</b>
            <p>
              どのくらい遅れますか？
              <br />
              <i>Dono kurai okuremasu ka?</i>
              <br />
              <i>How long is the delay?</i>
            </p>
          </div>

          <h3>5. Flight has been cancelled</h3>
          <div className="tab">
            <p>
              フライトがキャンセルされました。
              <br />
              <i>Furaito ga kyanseru saremashita.</i>
            </p>
            <b>Response:</b>
            <p>
              次の便はいつですか？
              <br />
              <i>Tsugi no bin wa itsu desu ka?</i>
              <br />
              <i>When is the next flight?</i>
            </p>
          </div>

          <h3>6. Can I get a window seat?</h3>
          <div className="tab">
            <p>
              両替所はどこですか？
              <br />
              <i>Ryōgai-sho wa doko desu ka?</i>
            </p>
          </div>

          <h3>7. Your luggage is too heavy.</h3>
          <div className="tab">
            <p>
              お荷物が重すぎます。
              <br />
              <i>O-nimotsu ga omosugimasu.</i>
            </p>
            <b>Response:</b>
            <p>
              追加料金はいくらですか？
              <br />
              <i>Tsuika ryōkin wa ikura desu ka?</i>
              <br />
              <i>How much is the extra fee?</i>
            </p>
            <p>
              いくつか減らせますか？
              <br />
              <i>Ikutsuka herasemasu ka?</i>
              <br />
              <i>Can I remove some items?</i>
            </p>
          </div>

          <h3>8. We will depart for ... Airport</h3>
          <div className="tab">
            <p>
              ...空港に向けて出発します。
              <br />
              <i>... kūkō ni mukete shuppatsu shimasu.</i>
            </p>
          </div>

          <h3>9. We have arrived at ... Airport</h3>
          <div className="tab">
            <p>
              ...空港に到着しました。
              <br />
              <i>... kūkō ni tōchaku shimashita.</i>
            </p>
          </div>

          <h3>10. Where can I exchange money?</h3>
          <div className="tab">
            <p>
              両替所はどこですか？
              <br />
              <i>Ryōgai-sho wa doko desu ka?</i>
            </p>
          </div>
        </section>
      </div>

      <div id="directions">
        <h2>Directions</h2>
        {/* Content for Directions */}
      </div>

      <div id="transportation">
        <h2>Transportation</h2>
        {/* Content for Transportation */}
      </div>

      <div id="hotel">
        <h2>Hotel</h2>
        {/* Content for Hotel */}
      </div>

      <div id="restaurant">
        <h2>Restaurant</h2>

        <div>
          <h3>15. Please refill</h3>
          <p>
            おかわり(を)ください
            <br />
            <i>okawari o kudasai</i>
          </p>
        </div>
      </div>

      <div id="shopping">
        <h2>Shopping</h2>
        {/* Content for Shopping */}
      </div>

      <div id="numbers">
        <h2>Numbers</h2>
        {/* Content for Numbers */}
      </div>
    </div>
  );
}

export default Travel;
