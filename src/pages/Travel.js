import "./Pages.css";

function Travel() {
  return (
    <div>
      <div id="greetings">
        <h2>Greetings / Basic Phrases</h2>
        <section id="section1">
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
              しておください
              <br />
              <i>yukkuri hanashite kudasai</i>
            </p>
          </div>
        </section>
      </div>

      <div id="airport">
        <h2>Airport</h2>
        {/* Content for Airport --> */}
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
