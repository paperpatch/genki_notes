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
          <div>
            <h3>1. Hello</h3>
            <p>
              こんにちは
              <br />
              <i>konnichiwa</i>
            </p>
          </div>
          <div>
            <h3>2. Good Morning</h3>
            <p>
              おはようございます
              <br />
              <i>ohayou gozaimasu</i>
            </p>
          </div>
          <div>
            <h3>3. Good Evening</h3>
            <p>
              こんばんは
              <br />
              <i>konbanwa</i>
            </p>
          </div>
          <div>
            <h3>4. Nice to meet you</h3>
            <p>
              <span className="kanji">
                初<span className="furigana">はじ</span>
              </span>
              めまして
              <br />
              <i>hajimemashite</i>
            </p>
          </div>
          <div>
            <h3>5. Goodbye</h3>
            <p>
              さようなら
              <br />
              <i>sayonara</i>
            </p>
          </div>
          <div>
            <h3>6. Please</h3>
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
          <div>
            <h3>7. Thank You</h3>
            <p>
              ありがとうございます
              <br />
              <i>arigatou gozaimasu</i>
            </p>
          </div>
          <div>
            <h3>8. Excuse Me / Sorry</h3>
            <p>
              すみません
              <br />
              <i>sumimasen</i>
            </p>
          </div>
          <div>
            <h3>9. Yes</h3>
            <p>
              はい
              <br />
              <i>hai</i>
            </p>
          </div>
          <div>
            <h3>10. No</h3>
            <p>
              いいえ
              <br />
              <i>iie</i>
            </p>
          </div>
          <div>
            <h3>11. I don't understand</h3>
            <p>
              <span className="kanji">
                分<span className="furigana">わ</span>
              </span>
              かりません
              <br />
              <i>wakarimasen</i>
            </p>
          </div>
          <div>
            <h3>12. I don't speak Japanese</h3>
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
          <div>
            <h3>13. Do you speak English?</h3>
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
          <div>
            <h3>14. Can you please repeat that?</h3>
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
          <div>
            <h3>15. Can you please speak slowly?</h3>
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
          <div className="indent">
            <p className="tab">
              いらっしゃいませ。どうぞお入りください。
              <br />
              <i>Irasshaimase. Dōzo o-hairi kudasai.</i>
            </p>
            <b className="indent">Response:</b>
            <p className="tab">
              ありがとうございます。
              <br />
              <i>Arigatō gozaimasu.</i>
            </p>
          </div>

          <h3>2. Please show your ticket</h3>
          <div className="indent">
            <p className="tab">
              チケットをお見せください。
              <br />
              <i>Chiketto o o-mise kudasai.</i>
            </p>
            <b className="indent">Response:</b>
            <p className="tab">
              はい、どうぞ。
              <br />
              <i>Hai, dōzo.</i>
            </p>
          </div>

          <h3>3. Please show your passport</h3>
          <div className="indent">
            <p className="tab">
              パスポートをお見せください。
              <br />
              <i>Pasupōto o o-mise kudasai.</i>
            </p>
            <b className="indent">Response:</b>
            <p className="tab">
              はい、どうぞ。
              <br />
              <i>Hai, dōzo.</i>
            </p>
          </div>

          <h3>4. The flight is delayed</h3>
          <div className="indent">
            <p className="tab">
              フライトが遅れています。
              <br />
              <i>Furaito ga okurete imasu.</i>
            </p>
            <b className="indent">Response:</b>
            <p className="tab">
              どのくらい遅れますか？
              <br />
              <i>Dono kurai okuremasu ka?</i>
              <br />
              <i>How long is the delay?</i>
            </p>
          </div>

          <h3>5. Flight has been cancelled</h3>
          <div className="indent">
            <p className="tab">
              フライトがキャンセルされました。
              <br />
              <i>Furaito ga kyanseru saremashita.</i>
            </p>
            <b className="indent">Response:</b>
            <p className="tab">
              次の便はいつですか？
              <br />
              <i>Tsugi no bin wa itsu desu ka?</i>
              <br />
              <i>When is the next flight?</i>
            </p>
          </div>

          <h3>6. Can I get a window seat?</h3>
          <div className="indent">
            <p className="tab">
              両替所はどこですか？
              <br />
              <i>Ryōgai-sho wa doko desu ka?</i>
            </p>
          </div>

          <h3>7. Your luggage is too heavy.</h3>
          <div className="indent">
            <p className="tab">
              お荷物が重すぎます。
              <br />
              <i>O-nimotsu ga omosugimasu.</i>
            </p>
            <b className="indent">Response:</b>
            <p className="tab">
              追加料金はいくらですか？
              <br />
              <i>Tsuika ryōkin wa ikura desu ka?</i>
              <br />
              <i>How much is the extra fee?</i>
            </p>
            <p className="tab">
              いくつか減らせますか？
              <br />
              <i>Ikutsuka herasemasu ka?</i>
              <br />
              <i>Can I remove some items?</i>
            </p>
          </div>

          <h3>8. We will depart for ... Airport</h3>
          <div className="indent">
            <p className="tab">
              ...空港に向けて出発します。
              <br />
              <i>... kūkō ni mukete shuppatsu shimasu.</i>
            </p>
          </div>

          <h3>9. We have arrived at ... Airport</h3>
          <div className="indent">
            <p className="tab">
              ...空港に到着しました。
              <br />
              <i>... kūkō ni tōchaku shimashita.</i>
            </p>
          </div>

          <h3>10. Where can I exchange money?</h3>
          <div className="indent">
            <p className="tab">
              両替所はどこですか？
              <br />
              <i>Ryōgai-sho wa doko desu ka?</i>
            </p>
          </div>
        </section>
      </div>

      <div id="directions">
        <h2>Directions</h2>
        <section>
          <h3>1. Where is it?</h3>
          <div className="indent">
            <p className="tab">
              どこですか？
              <br />
              <i>Doko desu ka?</i>
            </p>
          </div>

          <h3>2. I want to go to ~.</h3>
          <div className="indent">
            <p className="tab">
              ～へ行きたいです。
              <br />
              <i>~ e ikitai desu.</i>
            </p>
          </div>

          <h3>3. How do I get there?</h3>
          <div className="indent">
            <p className="tab">
              どうやって行きますか？
              <br />
              <i>Dō yatte ikimasu ka?</i>
            </p>
          </div>

          <h3>4. Please go straight.</h3>
          <div className="indent">
            <p className="tab">
              まっすぐ行ってください。
              <br />
              <i>Massugu itte kudasai.</i>
            </p>
          </div>

          <h3>5. Please turn right.</h3>
          <div className="indent">
            <p className="tab">
              右に曲がってください。
              <br />
              <i>Migi ni magatte kudasai.</i>
            </p>
          </div>

          <h3>6. Please turn left.</h3>
          <div className="indent">
            <p className="tab">
              左に曲がってください。
              <br />
              <i>Hidari ni magatte kudasai.</i>
            </p>
          </div>

          <h3>7. Is it close from here?</h3>
          <div className="indent">
            <p className="tab">
              ここから近いですか？
              <br />
              <i>Koko kara chikai desu ka?</i>
            </p>
          </div>

          <h3>8. Is it far?</h3>
          <div className="indent">
            <p className="tab">
              遠いですか？
              <br />
              <i>Tōi desu ka?</i>
            </p>
          </div>

          <h3>9. It’s next to it.</h3>
          <div className="indent">
            <p className="tab">
              隣にあります。
              <br />
              <i>Tonari ni arimasu.</i>
            </p>
          </div>

          <h3>10. It’s across from it.</h3>
          <div className="indent">
            <p className="tab">
              向かいにあります。
              <br />
              <i>Mukai ni arimasu.</i>
            </p>
          </div>

          <h3>11. Follow this road.</h3>
          <div className="indent">
            <p className="tab">
              この道を進んでください。
              <br />
              <i>Kono michi o susunde kudasai.</i>
            </p>
          </div>

          <h3>12. Turn at the corner.</h3>
          <div className="indent">
            <p className="tab">
              角を曲がってください。
              <br />
              <i>Kado o magatte kudasai.</i>
            </p>
          </div>

          <h3>13. Go up the stairs.</h3>
          <div className="indent">
            <p className="tab">
              階段を上がってください。
              <br />
              <i>Kaidan o agatte kudasai.</i>
            </p>
          </div>

          <h3>14. Take the elevator down.</h3>
          <div className="indent">
            <p className="tab">
              エレベーターで降りてください。
              <br />
              <i>Erebētā de orite kudasai.</i>
            </p>
          </div>

          <h3>15. Cross the traffic light.</h3>
          <div className="indent">
            <p className="tab">
              信号を渡ってください。
              <br />
              <i>Shingō o watatte kudasai.</i>
            </p>
          </div>

          <h3>16. It’s a little further ahead.</h3>
          <div className="indent">
            <p className="tab">
              もう少し先です。
              <br />
              <i>Mō sukoshi saki desu.</i>
            </p>
          </div>
        </section>
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
