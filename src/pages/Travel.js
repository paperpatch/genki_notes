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
        <section>
          <h2>1. Common Phrases for Transportation (交通 – Kōtsū)</h2>
          <table className="table-travel">
            <tbody>
              <tr>
                <td className="background-grey">
                  <span>English</span>
                </td>
                <td className="background-grey">
                  <span>Japanese</span>
                </td>
                <td className="background-grey">
                  <span>Romanji</span>
                </td>
              </tr>
              <tr className="background-white">
                <td>Where is the station?</td>
                <td>駅はどこですか？</td>
                <td>Eki wa doko desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Where is the bus stop?</td>
                <td>バス停はどこですか？</td>
                <td>Basutei wa doko desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Where is the taxi stand?</td>
                <td>タクシー乗り場はどこですか？</td>
                <td>Takushī noriba wa doko desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Does this train go to ~?</td>
                <td>この電車は～に行きますか？</td>
                <td>Kono densha wa ~ ni ikimasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Where is the train going to ~?</td>
                <td>～行きの電車はどこですか？</td>
                <td>~ iki no densha wa doko desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Which platform number?</td>
                <td>何番線ですか？</td>
                <td>Nanbansen desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>A ticket, please.</td>
                <td>切符をください。</td>
                <td>Kippu o kudasai.</td>
              </tr>
              <tr className="background-white">
                <td>How much is it?</td>
                <td>いくらですか？</td>
                <td>Ikura desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>One-way or round trip?</td>
                <td>片道ですか？往復ですか？</td>
                <td>Katamichi desu ka? Ōfuku desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>A ticket to ~, please.</td>
                <td>～までの切符をください。</td>
                <td>~ made no kippu o kudasai.</td>
              </tr>
              <tr className="background-white">
                <td>Where do I transfer?</td>
                <td>乗り換えはどこですか？</td>
                <td>Norikae wa doko desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Which bus should I take?</td>
                <td>どのバスに乗ればいいですか？</td>
                <td>Dono basu ni noreba ii desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Where is the timetable?</td>
                <td>時刻表はどこですか？</td>
                <td>Jikokuhyō wa doko desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>What time is the next train?</td>
                <td>次の電車は何時ですか？</td>
                <td>Tsugi no densha wa nanji desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>What time is the last train?</td>
                <td>終電は何時ですか？</td>
                <td>Shūden wa nanji desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Is it delayed?</td>
                <td>遅れていますか？</td>
                <td>Okurete imasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>I will get off here.</td>
                <td>ここで降ります。</td>
                <td>Koko de orimasu.</td>
              </tr>
              <tr className="background-white">
                <td>Is this ~ station?</td>
                <td>ここは～駅ですか？</td>
                <td>Koko wa ~ eki desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>The doors are closing.</td>
                <td>ドアが閉まります。</td>
                <td>Doa ga shimarimasu.</td>
              </tr>
              <tr className="background-white">
                <td>Next is ~ station.</td>
                <td>次は～駅です。</td>
                <td>Tsugi wa ~ eki desu.</td>
              </tr>
            </tbody>
          </table>

          <h2>2. Sample Conversation for Buying a Train Ticket</h2>
          <b className="indent">Situation: Buying a Ticket at the Station</b>
          <p className="tab">
            👤 (You):
            <br />
            すみません、新宿駅までの切符をください。
            <br />
            <i>Sumimasen, Shinjuku-eki made no kippu o kudasai.</i>
            <br />
            <i>Excuse me, a ticket to Shinjuku Station, please.</i>
          </p>
          <p className="tab">
            🚉 (Staff):
            <br />
            3番線の電車です。5分後に出発します。
            <br />
            <i>San-bansen no densha desu. Go-fun go ni shuppatsu shimasu.</i>
            <br />
            <i>It’s on platform 3. It departs in 5 minutes.</i>
          </p>
          <p className="tab">
            👤 (You):
            <br />
            片道でお願いします。
            <br />
            <i>Katamichi de onegaishimasu.</i>
            <br />
            <i>One-way, please.</i>
          </p>
          <p className="tab">
            🚉 (Staff):
            <br />
            150円になります。
            <br />
            <i>Hyaku gojū en ni narimasu.</i>
            <br />
            <i>That will be 150 yen.</i>
          </p>
          <p className="tab">
            👤 (You):
            <br />
            ありがとうございます。
            <br />
            <i>Arigatou gozaimasu.</i>
            <br />
            <i>Thank you very much.</i>
          </p>
          <p className="tab">
            🚉 (Staff):
            <br />
            どうぞ、切符です。
            <br />
            <i>Dōzo, kippu desu.</i>
            <br />
            <i>Here’s your ticket.</i>
          </p>

          <h2>3. Sample Conversation for Asking for the Right Train</h2>
          <b className="indent">
            Situation: Asking a Station Worker Which Train to Take
          </b>
          <p className="tab">
            👤 (You):
            <br />
            すみません、東京駅へ行く電車はどれですか？
            <br />
            <i>Sumimasen, Tōkyō-eki e iku densha wa dore desu ka?</i>
            <br />
            <i>Excuse me, which train goes to Tokyo Station?</i>
          </p>
          <p className="tab">
            🚉 (Staff):
            <br />
            3番線の電車です。5分後に出発します。
            <br />
            <i>San-bansen no densha desu. Go-fun go ni shuppatsu shimasu.</i>
            <br />
            <i>It’s on platform 3. It departs in 5 minutes.</i>
          </p>
          <p className="tab">
            👤 (You):
            <br />
            ありがとうございます！
            <br />
            <i>Arigatou gozaimasu!</i>
            <br />
            <i>Thank you very much!</i>
          </p>
          <p className="tab">
            🚉 (Staff):
            <br />
            どういたしまして。
            <br />
            <i>Dōitashimashite.</i>
            <br />
            <i>You’re welcome.</i>
          </p>

          <h2>4. Sample Conversation for Asking About a Bus</h2>
          <b className="indent">Situation: Asking a Local About a Bus Stop</b>
          <p className="tab">
            👤 (You):
            <br />
            すみません、成田空港行きのバス停はどこですか？
            <br />
            <i>Sumimasen, Narita kūkō yuki no basutei wa doko desu ka?</i>
            <br />
            <i>Excuse me, where is the bus stop for Narita Airport?</i>
          </p>
          <p className="tab">
            🚉 (Staff):
            <br />
            あの交差点を渡って、右側にありますよ。
            <br />
            <i>Ano kōsaten o watatte, migi-gawa ni arimasu yo.</i>
            <br />
            <i>Cross that intersection, and it’s on the right side.</i>
          </p>
          <p className="tab">
            👤 (You):
            <br />
            ありがとうございます！何番のバスですか？
            <br />
            <i>Arigatou gozaimasu! Nan-ban no basu desu ka?</i>
            <br />
            <i>Thank you! Which bus number is it?</i>
          </p>
          <p className="tab">
            🚉 (Staff):
            <br />
            16番のバスです。20分ごとに来ます。
            <br />
            <i>Jū-roku-ban no basu desu. Nijuppun-goto ni kimasu.</i>
            <br />
            <i>It’s bus number 16. It comes every 20 minutes.</i>
          </p>
          <p className="tab">
            👤 (You):
            <br />
            助かりました！
            <br />
            <i>Tasukarimashita!</i>
            <br />
            <i>That was helpful!</i>
          </p>
        </section>
      </div>

      <div id="hotel">
        <h2>Hotel</h2>
        <section>
          <h2>1. Common Hotel Related Phrases</h2>
          <table className="table-travel">
            <tbody>
              <tr>
                <td className="background-grey">
                  <span>English</span>
                </td>
                <td className="background-grey">
                  <span>Japanese</span>
                </td>
                <td className="background-grey">
                  <span>Romanji</span>
                </td>
              </tr>
              <tr className="background-white">
                <td>I’d like to check in.</td>
                <td>チェックインをお願いします。</td>
                <td>Chekku in o onegai shimasu.</td>
              </tr>
              <tr className="background-white">
                <td>I have a reservation.</td>
                <td>予約しています。</td>
                <td>Yoyaku shite imasu.</td>
              </tr>
              <tr className="background-white">
                <td>
                  I don’t have a reservation. Do you have any rooms available?
                </td>
                <td>予約していませんが、部屋はありますか？</td>
                <td>Yoyaku shite imasen ga, heya wa arimasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>My name is 〇〇.</td>
                <td>名前は〇〇です。</td>
                <td>Namae wa 〇〇 desu.</td>
              </tr>
              <tr className="background-white">
                <td>Please show your passport.</td>
                <td>パスポートを見せてください。</td>
                <td>Pasupōto o misete kudasai.</td>
              </tr>
              <tr className="background-white">
                <td>Is breakfast included?</td>
                <td>朝食はついていますか？</td>
                <td>Chōshoku wa tsuite imasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>What time is breakfast served?</td>
                <td>何時から何時まで朝食を食べられますか？</td>
                <td>Nanji kara nanji made chōshoku o taberaremasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Where is the elevator?</td>
                <td>エレベーターはどこですか？</td>
                <td>Erebētā wa doko desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Is there Wi-Fi?</td>
                <td>Wi-Fiはありますか？</td>
                <td>Waifai wa arimasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Please tell me the Wi-Fi password.</td>
                <td>Wi-Fiのパスワードを教えてください。</td>
                <td>Waifai no pasuwādo o oshiete kudasai.</td>
              </tr>
              <tr className="background-white">
                <td>What time is check-out?</td>
                <td>チェックアウトは何時ですか？</td>
                <td>Chekku auto wa nanji desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Is there room service?</td>
                <td>ルームサービスはありますか？</td>
                <td>Rūmu sābisu wa arimasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Do you have a laundry service?</td>
                <td>クリーニングサービスはありますか？</td>
                <td>Kurīningu sābisu wa arimasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Do you have a hot spring?</td>
                <td>温泉はありますか？</td>
                <td>Onsen wa arimasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>I lost my key.</td>
                <td>鍵をなくしました。</td>
                <td>Kagi o nakushimashita.</td>
              </tr>
              <tr className="background-white">
                <td>Please clean my room.</td>
                <td>部屋を掃除してください。</td>
                <td>Heya o sōji shite kudasai.</td>
              </tr>
              <tr className="background-white">
                <td>The air conditioner isn’t working.</td>
                <td>エアコンが動きません。</td>
                <td>Eakon ga ugokimasen.</td>
              </tr>
              <tr className="background-white">
                <td>There’s no hot water.</td>
                <td>お湯が出ません。</td>
                <td>Oyu ga demasen.</td>
              </tr>
              <tr className="background-white">
                <td>Please give me one more towel.</td>
                <td>タオルをもう一枚ください。</td>
                <td>Tauru o mō ichimai kudasai.</td>
              </tr>
            </tbody>
          </table>

          <h2>2. Sample Conversations at a Hotel</h2>
          <b className="indent">Check-in Conversation</b>
          <p className="tab">
            👤 (You):
            <br />
            「チェックインをお願いします。」
            <br />
            <i>Chekku in o onegai shimasu.</i>
            <br />
            <i>I’d like to check in.</i>
          </p>
          <p className="tab">
            💁 (Hotel Staff):
            <br />
            「お名前をお願いします。」
            <br />
            <i>Onamae o onegai shimasu.</i>
            <br />
            <i>May I have your name?</i>
          </p>
          <p className="tab">
            👤 (You):
            <br />
            「名前はスミスです。」
            <br />
            <i>Namae wa Sumisu desu.</i>
            <br />
            <i>My name is Smith.</i>
          </p>
          <p className="tab">
            💁 (Staff):
            <br />
            「パスポートを見せてください。」
            <br />
            <i>Pasupōto o misete kudasai.</i>
            <br />
            <i>Please show your passport.</i>
          </p>
          <p className="tab">
            👤 (You):
            <br />
            「はい、どうぞ。」
            <br />
            <i>Hai, dōzo.</i>
            <br />
            <i>Here you go.</i>
          </p>
          <p className="tab">
            💁 (Staff):
            <br />
            「ありがとうございます。こちらが鍵です。お部屋は 305 号室です。」
            <br />
            <i>
              Arigatō gozaimasu. Kochira ga kagi desu. Oheya wa san-zero-go
              gōshitsu desu.
            </i>
            <br />
            <i>Thank you. Here is your key. Your room is 305.</i>
          </p>

          <b className="indent">Asking About Breakfast</b>
          <p className="tab">
            👤 (You):
            <br />
            「朝食はついていますか？」
            <br />
            <i>Chōshoku wa tsuite imasu ka?</i>
            <br />
            <i>Is breakfast included?</i>
          </p>
          <p className="tab">
            💁 (Hotel Staff):
            <br />
            「はい、ついています。朝食は 7 時から 10 時までです。」
            <br />
            <i>
              Hai, tsuite imasu. Chōshoku wa shichi-ji kara jū-ji made desu.
            </i>
            <br />
            <i>Yes, it is included. Breakfast is from 7 AM to 10 AM.</i>
          </p>

          <b className="indent">Requesting More Towels</b>
          <p className="tab">
            👤 (You):
            <br />
            「すみません、タオルをもう一枚ください。」
            <br />
            <i>Sumimasen, taoru o mō ichimai kudasai.</i>
            <br />
            <i>Excuse me, can I have one more towel?</i>
          </p>
          <p className="tab">
            💁 (Hotel Staff):
            <br />
            「かしこまりました。すぐにお持ちします。」
            <br />
            <i>Kashikomarimashita. Sugu ni omochi shimasu.</i>
            <br />
            <i>Certainly. I will bring it right away.</i>
          </p>

          <b className="indent">Checking Out</b>
          <p className="tab">
            👤 (You):
            <br />
            「チェックアウトをお願いします。」
            <br />
            <i>Chekku auto o onegai shimasu.</i>
            <br />
            <i>I’d like to check out.</i>
          </p>
          <p className="tab">
            💁 (Hotel Staff):
            <br />
            「かしこまりました。お部屋の鍵をお願いします。」
            <br />
            <i>Kashikomarimashita. Oheya no kagi o onegai shimasu.</i>
            <br />
            <i>Understood. Please return your room key.</i>
          </p>
          <p className="tab">
            👤 (You):
            <br />
            「はい、どうぞ。」
            <br />
            <i>Hai, dōzo.</i>
            <br />
            <i>Here you go.</i>
          </p>
          <p className="tab">
            💁 (Hotel Staff):
            <br />
            「ありがとうございました。またのお越しをお待ちしております。」
            <br />
            <i>Arigatō gozaimashita. Mata no okoshi o omachi shite orimasu.</i>
            <br />
            <i>Thank you very much. We look forward to your next visit.</i>
          </p>
        </section>
      </div>

      <div id="restaurant">
        <h2>Restaurant</h2>
        <section>
          <h2>1. Common Restaurant Related Phrases</h2>
          <table className="table-travel">
            <tbody>
              <tr>
                <td className="background-grey">
                  <span>English</span>
                </td>
                <td className="background-grey">
                  <span>Japanese</span>
                </td>
                <td className="background-grey">
                  <span>Romanji</span>
                </td>
              </tr>
              <tr>
                <td colSpan={3} className="background-grey table-text-center">
                  Arriving at the Restaurant
                </td>
              </tr>
              <tr className="background-white">
                <td>Welcome! (Said by staff when you enter)</td>
                <td>いらっしゃいませ！</td>
                <td>Irasshaimase!</td>
              </tr>
              <tr className="background-white">
                <td>How many people are in your party?</td>
                <td>何名様ですか？</td>
                <td>Nanmei-sama desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>I’m alone.</td>
                <td>一人です。</td>
                <td>Hitori desu.</td>
              </tr>
              <tr className="background-white">
                <td>We are two people.</td>
                <td>二人です。</td>
                <td>Futari desu.</td>
              </tr>
              <tr className="background-white">
                <td>Would you like a non-smoking or smoking seat?</td>
                <td>禁煙席と喫煙席、どちらがよろしいですか？</td>
                <td>
                  Kinen seki to kitsuen seki, dochira ga yoroshii desu ka?
                </td>
              </tr>
              <tr className="background-white">
                <td>A non-smoking seat, please.</td>
                <td>禁煙席をお願いします。</td>
                <td>Kinen seki o onegai shimasu.</td>
              </tr>
              <tr className="background-white">
                <td>I have a reservation. My name is 〇〇.</td>
                <td>予約しています。名前は〇〇です。</td>
                <td>Yoyaku shite imasu. Namae wa 〇〇 desu.</td>
              </tr>
              <tr className="background-white">
                <td>
                  I don’t have a reservation. Do you have a table available?
                </td>
                <td>予約していませんが、席はありますか？</td>
                <td>Yoyaku shite imasen ga, seki wa arimasu ka?</td>
              </tr>
              <tr>
                <td colSpan={3} className="background-grey table-text-center">
                  Ordering Food & Drinks
                </td>
              </tr>
              <tr className="background-white">
                <td>The menu, please.</td>
                <td>メニューをお願いします。</td>
                <td>Menyū o onegai shimasu.</td>
              </tr>
              <tr className="background-white">
                <td>What do you recommend?</td>
                <td>おすすめは何ですか？</td>
                <td>Osusume wa nan desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Excuse me, I’d like to order.</td>
                <td>すみません、注文をお願いします。</td>
                <td>Sumimasen, chūmon o onegai shimasu.</td>
              </tr>
              <tr className="background-white">
                <td>I’ll have this. (Pointing at the menu)</td>
                <td>これをください。</td>
                <td>Kore o kudasai.</td>
              </tr>
              <tr className="background-white">
                <td>I’d like to order 〇〇.</td>
                <td>〇〇をお願いします。</td>
                <td>〇〇 o onegai shimasu.</td>
              </tr>
              <tr className="background-white">
                <td>What drinks do you have?</td>
                <td>飲み物は何がありますか？</td>
                <td>Nomimono wa nani ga arimasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Water, please.</td>
                <td>お水をください。</td>
                <td>O-mizu o kudasai.</td>
              </tr>
              <tr className="background-white">
                <td>One beer, please.</td>
                <td>ビールを一本ください。</td>
                <td>Bīru o ippon kudasai.</td>
              </tr>
              <tr>
                <td colSpan={3} className="background-grey table-text-center">
                  Dietary Restrictions & Special Requests
                </td>
              </tr>
              <tr className="background-white">
                <td>I can’t eat 〇〇.</td>
                <td>〇〇は食べられません。</td>
                <td>〇〇 wa taberaremasen.</td>
              </tr>
              <tr className="background-white">
                <td>Please make it not spicy.</td>
                <td>辛くしないでください。</td>
                <td>Karakushinaide kudasai.</td>
              </tr>
              <tr>
                <td colSpan={3} className="background-grey table-text-center">
                  During the Meal
                </td>
              </tr>
              <tr className="background-white">
                <td>
                  Said before eating (like "Let's eat!" or "Thank you for the
                  food").
                </td>
                <td>いただきます！</td>
                <td>Itadakimasu!</td>
              </tr>
              <tr className="background-white">
                <td>Excuse me, please give me chopsticks.</td>
                <td>すみません、お箸をください。</td>
                <td>Sumimasen, o-hashi o kudasai.</td>
              </tr>
              <tr className="background-white">
                <td>This is very delicious!</td>
                <td>とても美味しいです！</td>
                <td>Totemo oishii desu!</td>
              </tr>
              <tr className="background-white">
                <td>Please give me a little more time.</td>
                <td>もう少し時間をください。</td>
                <td>Mō sukoshi jikan o kudasai.</td>
              </tr>
              <tr>
                <td colSpan={3} className="background-grey table-text-center">
                  Paying the Bill & Leaving
                </td>
              </tr>
              <tr className="background-white">
                <td>The bill, please.</td>
                <td>お会計をお願いします。</td>
                <td>O-kaikei o onegai shimasu.</td>
              </tr>
              <tr className="background-white">
                <td>Please split the bill.</td>
                <td>別々にお願いします。</td>
                <td>Betsubetsu ni onegai shimasu.</td>
              </tr>
              <tr className="background-white">
                <td>Do you accept credit cards?</td>
                <td>カードは使えますか？</td>
                <td>Kādo wa tsukaemasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Said after eating (like "Thank you for the meal!").</td>
                <td>ごちそうさまでした！</td>
                <td>Gochisōsama deshita!</td>
              </tr>
            </tbody>
          </table>

          <h2>2. Sample Conversations at a Restaurant</h2>
          <b className="indent">Getting Seated</b>
          <p className="tab">
            💁 Staff:
            <br />
            「いらっしゃいませ！何名様ですか？」
            <br />
            <i>Irasshaimase! Nanmei-sama desu ka?</i>
            <br />
            <i>Welcome! How many people?</i>
          </p>
          <p className="tab">
            👤 Customer:
            <br />
            「二人です。」
            <br />
            <i>Futari desu.</i>
            <br />
            <i>Two people.</i>
          </p>
          <p className="tab">
            💁 Staff:
            <br />
            「禁煙席と喫煙席、どちらがよろしいですか？」
            <br />
            <i>Kinen seki to kitsuen seki, dochira ga yoroshii desu ka?</i>
            <br />
            <i>Non-smoking or smoking section?</i>
          </p>
          <p className="tab">
            👤 Customer:
            <br />
            「禁煙席をお願いします。」
            <br />
            <i>Kinen seki o onegai shimasu.</i>
            <br />
            <i>Non-smoking, please.</i>
          </p>
          <p className="tab">
            💁 Staff:
            <br />
            「こちらへどうぞ。」
            <br />
            <i>Kochira e dōzo.</i>
            <br />
            <i>This way, please.</i>
          </p>

          <b className="indent">Ordering Food</b>
          <p className="tab">
            👤 Customer:
            <br />
            「すみません、注文をお願いします。」
            <br />
            <i>Sumimasen, chūmon o onegai shimasu.</i>
            <br />
            <i>Excuse me, I’d like to order.</i>
          </p>
          <p className="tab">
            💁 Staff:
            <br />
            「はい、どうぞ。」
            <br />
            <i>Hai, dōzo.</i>
            <br />
            <i>Yes, go ahead.</i>
          </p>
          <p className="tab">
            👤 (Customer):
            <br />
            「ラーメンとビールをください。」
            <br />
            <i>Rāmen to bīru o kudasai.</i>
            <br />
            <i>I’ll have ramen and a beer.</i>
          </p>
          <p className="tab">
            💁 Staff:
            <br />
            「かしこまりました。」
            <br />
            <i>Kashikomarimashita.</i>
            <br />
            <i>Understood.</i>
          </p>

          <b className="indent">Ordering Multiple Set Meals</b>
          <p className="tab">
            💁 Staff:
            <br />
            「ご注文はお決まりですか？」
            <br />
            <i>Gochūmon wa okimari desu ka?</i>
            <br />
            <i>Have you decided on your order?</i>
          </p>
          <p className="tab">
            👤 Customer:
            <br />
            「はい、4番のセットを三つと、緑茶を三つお願いします。」
            <br />
            <i>
              Hai, yonban no setto o mittsu to, ryokucha o mittsu onegai
              shimasu.
            </i>
            <br />
            <i>Yes, three No. 4 set meals and three green teas, please.</i>
          </p>
          <p className="tab">
            💁 Staff:
            <br />
            「かしこまりました。お飲み物は、緑茶三つでよろしいですか？」
            <br />
            <i>
              Kashikomarimashita. Onomimono wa, ryokucha mittsu de yoroshii desu
              ka?
            </i>
            <br />
            <i>Understood. For drinks, is three green teas correct?</i>
          </p>
          <p className="tab">
            👤 Customer:
            <br />
            「はい、お願いします。」
            <br />
            <i>Hai, onegai shimasu.</i>
            <br />
            <i>Yes, please.</i>
          </p>
          <p className="tab">
            💁 Staff:
            <br />
            「ありがとうございます。少々お待ちください。」
            <br />
            <i>Arigatō gozaimasu. Shōshō omachi kudasai.</i>
            <br />
            <i>Thank you. Please wait a moment.</i>
          </p>
          <p className="tab">
            セット (setto) is commonly used in casual and fast-food-style
            restaurants in Japan, especially for Western-style meals or combo
            meals. If you are at a traditional Japanese restaurant, the word
            定食 (ていしょく, teishoku) is more appropriate for set meals that
            come with rice, miso soup, and side dishes.
          </p>

          <b className="indent">Asking for Refills</b>
          <p className="tab">
            👤 Customer:
            <br />
            「お茶（または お水）のおかわりをお願いします。」
            <br />
            <i>Ocha [mata wa omizu] no okawari o onegai shimasu.</i>
            <br />
            <i>Can I have a refill of tea (or water), please?</i>
          </p>
          <p className="tab">
            👤 Customer:
            <br />
            「ご飯のおかわりをお願いします。」
            <br />
            <i>Gohan no okawari o onegai shimasu.</i>
            <br />
            <i>Can I have a refill of rice, please?</i>
          </p>
          <p className="tab">
            👤 Customer:
            <br />
            「ご飯はおかわり無料ですか？」
            <br />
            <i>Gohan wa okawari muryō desu ka?</i>
            <br />
            <i>
              Are rice refills free? (Some restaurants offer free rice refills)
            </i>
          </p>
          <p className="tab">
            👤 Customer:
            <br />
            「替え玉（かえだま）をお願いします。」
            <br />
            <i>Kaedama o onegai shimasu.</i>
            <br />
            <i>I'd like a noodle refill, please.</i>
          </p>
          <p className="tab">
            You can probably use おかわり(を)ください as a short form depending
            on context (if it's obvious on what you're referring to). Refilling
            noodles is common in ramen or udon shops. Typically, ramen shops
            offer extra noodles for a small fee, called 替え玉 (kaedama).
          </p>

          <b className="indent">Asking for the Bill</b>
          <p className="tab">
            👤 Customer:
            <br />
            「お会計をお願いします。」
            <br />
            <i>O-kaikei o onegai shimasu.</i>
            <br />
            <i>The bill, please.</i>
          </p>
          <p className="tab">
            💁 Staff:
            <br />
            「はい、〇〇円になります。」
            <br />
            <i>Hai, 〇〇-en ni narimasu.</i>
            <br />
            <i>Sure, it will be 〇〇 yen.</i>
          </p>
          <p className="tab">
            👤 Customer:
            <br />
            「カードは使えますか？」
            <br />
            <i>Kādo wa tsukaemasu ka?</i>
            <br />
            <i>Can I use a credit card?</i>
          </p>
          <p className="tab">
            💁 Staff:
            <br />
            「はい、使えます。」
            <br />
            <i>Hai, tsukaemasu.</i>
            <br />
            <i>Yes, you can.</i>
          </p>
          <p className="tab">
            👤 Customer:
            <br />
            「ごちそうさまでした！」
            <br />
            <i>Gochisōsama deshita!</i>
            <br />
            <i>Thank you for the meal!</i>
          </p>
          <p className="tab">
            💁 Staff:
            <br />
            「ありがとうございました！」
            <br />
            <i>Arigatō gozaimashita!</i>
            <br />
            <i>Thank you very much!</i>
          </p>
        </section>
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
