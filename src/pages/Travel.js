import React from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";
import "./Pages.css";

function Travel() {
  useSmoothScrollToSection();

  return (
    <div>
      <div id="greetings">
        <h2>👋 Greetings</h2>
        <section>
          <h2>📖 Vocabulary</h2>
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
                <td>Hello</td>
                <td>こんにちは</td>
                <td>konnichiwa</td>
              </tr>
              <tr className="background-white">
                <td>Good Morning</td>
                <td>おはようございます</td>
                <td>ohayou gozaimasu</td>
              </tr>
              <tr className="background-white">
                <td>Good Evening</td>
                <td>こんばんは</td>
                <td>konbanwa</td>
              </tr>
              <tr className="background-white">
                <td>Nice to meet you</td>
                <td>
                  <span className="kanji">
                    初<span className="furigana">はじ</span>
                  </span>
                  めまして
                </td>
                <td>hajimemashite</td>
              </tr>
              <tr className="background-white">
                <td>Goodbye</td>
                <td>さようなら</td>
                <td>sayonara</td>
              </tr>
              <tr className="background-white">
                <td>Please</td>
                <td>
                  お
                  <span className="kanji">
                    願<span className="furigana">ねが</span>
                  </span>
                  いします
                </td>
                <td>onegaishimasu</td>
              </tr>
              <tr className="background-white">
                <td>Thank You</td>
                <td>ありがとうございます</td>
                <td>arigatou gozaimasu</td>
              </tr>
              <tr className="background-white">
                <td>Excuse Me / Sorry</td>
                <td>すみません</td>
                <td>sumimasen</td>
              </tr>
              <tr className="background-white">
                <td>Yes</td>
                <td>はい</td>
                <td>hai</td>
              </tr>
              <tr className="background-white">
                <td>No</td>
                <td>いいえ</td>
                <td>iie</td>
              </tr>
              <tr className="background-white">
                <td>I don't understand</td>
                <td>
                  <span className="kanji">
                    分<span className="furigana">わ</span>
                  </span>
                  かりません
                </td>
                <td>wakarimasen</td>
              </tr>
              <tr className="background-white">
                <td>I don't speak Japanese</td>
                <td>
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
                </td>
                <td>nihongo o hanashimasen</td>
              </tr>

              <tr className="background-white">
                <td>Do you speak English?</td>
                <td>
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
                </td>
                <td>Eigo o hanashimasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Can you please repeat that?</td>
                <td>
                  もう
                  <span className="kanji">
                    一度<span className="furigana">いちど</span>
                  </span>
                  <span className="kanji">
                    言<span className="furigana">い</span>
                  </span>
                  ってください？
                </td>
                <td>mou ichido itte kudasai?</td>
              </tr>
              <tr className="background-white">
                <td>Can you please speak slowly?</td>
                <td>
                  ゆっくり
                  <span className="kanji">
                    話<span className="furigana">はな</span>
                  </span>
                  してください
                </td>
                <td>yukkuri hanashite kudasai</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      <div id="airport">
        <h2>✈️ Airport</h2>
        <section>
          <h2>📖 Vocabulary</h2>
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
                <td>Airport</td>
                <td>空港</td>
                <td>kūkō</td>
              </tr>
              <tr className="background-white">
                <td>Check-in</td>
                <td>チェックイン</td>
                <td>chekku in</td>
              </tr>
              <tr className="background-white">
                <td>Airline ticket</td>
                <td>航空券</td>
                <td>kōkūken</td>
              </tr>
              <tr className="background-white">
                <td>Security check</td>
                <td>保安検査</td>
                <td>hoan kensa</td>
              </tr>
              <tr className="background-white">
                <td>Baggage</td>
                <td>荷物</td>
                <td>nimotsu</td>
              </tr>
              <tr className="background-white">
                <td>Carry-on luggage</td>
                <td>手荷物</td>
                <td>tenimotsu</td>
              </tr>
              <tr className="background-white">
                <td>Passport</td>
                <td>パスポート</td>
                <td>pasupōto</td>
              </tr>
              <tr className="background-white">
                <td>Boarding gate</td>
                <td>搭乗口</td>
                <td>tōjōguchi</td>
              </tr>
              <tr className="background-white">
                <td>Departure</td>
                <td>出発</td>
                <td>shuppatsu</td>
              </tr>
              <tr className="background-white">
                <td>Arrival</td>
                <td>到着</td>
                <td>tōchaku</td>
              </tr>
              <tr className="background-white">
                <td>Boarding pass</td>
                <td>搭乗券</td>
                <td>tōjōken</td>
              </tr>

              <tr className="background-white">
                <td>Length of stay</td>
                <td>滞在期間</td>
                <td>taizai kikan</td>
              </tr>
              <tr className="background-white">
                <td>Tourism</td>
                <td>観光</td>
                <td>kankō</td>
              </tr>
              <tr className="background-white">
                <td>Immigration check</td>
                <td>入国審査</td>
                <td>nyūkoku shinsa</td>
              </tr>
              <tr className="background-white">
                <td>Have a good trip</td>
                <td>良い旅を</td>
                <td>yoi tabi o</td>
              </tr>
            </tbody>
          </table>

          <h2>🛄 Check-in Counter</h2>
          <p className="tab">
            👤 Passenger:
            <br />
            「すみません、チェックインをお願いします。」
            <br />
            <i>Sumimasen, chekku in o onegai shimasu.</i>
            <br />
            <i>Excuse me, I'd like to check in.</i>
          </p>
          <p className="tab">
            ✈️ Staff:
            <br />
            「パスポートと航空券を拝見できますか？」
            <br />
            <i>Pasupōto to kōkūken o haiken dekimasu ka?</i>
            <br />
            <i>May I see your passport and ticket?</i>
          </p>
          <p className="tab">
            👤 Passenger:
            <br />
            「はい、どうぞ。」
            <br />
            <i>Hai, dōzo.</i>
            <br />
            <i>Yes, here you go.</i>
          </p>
          <p className="tab">
            ✈️ Staff:
            <br />
            「お預けの荷物はございますか？」
            <br />
            <i>Oazuke no nimotsu wa gozaimasu ka?</i>
            <br />
            <i>Do you have any checked luggage?</i>
          </p>
          <p className="tab">
            👤 Passenger:
            <br />
            「はい、このスーツケースをお願いします。」
            <br />
            <i>Hai, kono sūtsukēsu o onegai shimasu.</i>
            <br />
            <i>Yes, this suitcase, please.</i>
          </p>
          <p className="tab">
            ✈️ Staff:
            <br />
            「こちら、荷物タグになります。」
            <br />
            <i>Kochira, nimotsu tagu ni narimasu.</i>
            <br />
            <i>Here is your baggage tag.</i>
          </p>
          <p className="tab">
            ✈️ Staff:
            <br />
            「お座席の希望はございますか？」
            <br />
            <i>O-zaseki no kibō wa gozaimasu ka?</i>
            <br />
            <i>Do you have a seating preference?</i>
          </p>
          <p className="tab">
            👤 Passenger:
            <br />
            「窓側をお願いします。」
            <br />
            <i>Mado-gawa o onegai shimasu.</i>
            <br />
            <i>Window seat, please.</i>
          </p>
          <p className="tab">
            ✈️ Staff:
            <br />
            「かしこまりました。」
            <br />
            <i>Kashikomarimashita.</i>
            <br />
            <i>Understood.</i>
          </p>

          <h2>🛃 Security Check</h2>
          <p className="tab">
            ✈️ Security Staff:
            <br />
            「手荷物をトレイに置いてください。」
            <br />
            <i>Tenimotsu o tore ni oite kudasai.</i>
            <br />
            <i>Please place your carry-on baggage in the tray.</i>
          </p>
          <p className="tab">
            ✈️ Security Staff:
            <br />
            「金属類、ベルト、スマートフォンを外してください。」
            <br />
            <i>Kinzokurui, beruto, sumātofon o hazushite kudasai.</i>
            <br />
            <i>Please remove any metal items, your belt, and smartphone.</i>
          </p>
          <p className="tab">
            👤 Passenger:
            <br />
            「はい、わかりました。」
            <br />
            <i>Hai, wakarimashita.</i>
            <br />
            <i>Okay, understood.</i>
          </p>
          <p className="tab">
            ✈️ Security Staff:
            <br />
            「この中に液体物は入っていますか？」
            <br />
            <i>Kono naka ni ekitaimono wa haitteimasu ka?</i>
            <br />
            <i>Do you have any liquids inside?</i>
          </p>
          <p className="tab">
            👤 Passenger:
            <br />
            「いいえ、入っていません。」
            <br />
            <i>Iie, haitteimasen.</i>
            <br />
            <i>No, I don’t (have anything inside).</i>
          </p>
          <p className="tab">
            ✈️ Security Staff:
            <br />
            「ご協力ありがとうございます。」
            <br />
            <i>Go-kyōryoku arigatō gozaimasu.</i>
            <br />
            <i>Thank you for your cooperation.</i>
          </p>

          <h2>🛫 Boarding Gate (搭乗口, Tōjōguchi)</h2>
          <p className="tab">
            👤 Passenger:
            <br />
            「すみません、搭乗口はどこですか？」
            <br />
            <i>Sumimasen, tōjōguchi wa doko desu ka?</i>
            <br />
            <i>Excuse me, where is the boarding gate?</i>
          </p>
          <p className="tab">
            ✈️ Staff:
            <br />
            「搭乗口はあちらです。」
            <br />
            <i>Tōjōguchi wa achira desu.</i>
            <br />
            <i>The boarding gate is over there.</i>
          </p>
          <p className="tab">
            👤 Passenger:
            <br />
            「ありがとうございます。」
            <br />
            <i>Arigatō gozaimasu.</i>
            <br />
            <i>Thank you very much.</i>
          </p>
          <p className="tab">
            ✈️ Staff:
            <br />
            「こちらが搭乗券になります。どうぞお持ちください。」
            <br />
            <i>Kochira ga tōjōken ni narimasu. Dōzo o-mochi kudasai.</i>
            <br />
            <i>Here is your boarding pass. Please take it.</i>
          </p>
          <p className="tab">
            👤 Passenger:
            <br />
            「はい、ありがとうございます。」
            <br />
            <i>Hai, arigatō gozaimasu.</i>
            <br />
            <i>Yes, thank you.</i>
          </p>
          <p className="tab">
            ✈️ Staff:
            <br />
            「搭乗開始は○○時です。」
            <br />
            <i>Tōjō kaishi wa ○○-ji desu.</i>
            <br />
            <i>Boarding starts at ○○ o'clock.</i>
          </p>

          <h2>🛂 Immigration (入国審査, Nyūkoku Shinsa)</h2>
          <p className="tab">
            👮 Officer:
            <br />
            「パスポートを見せてください。」
            <br />
            <i>Pasupōto o misete kudasai.</i>
            <br />
            <i>Please show me your passport.</i>
          </p>
          <p className="tab">
            👤 Passenger:
            <br />
            「はい、どうぞ。」
            <br />
            <i>Hai, dōzo.</i>
            <br />
            <i>Here you go.</i>
          </p>
          <p className="tab">
            👮 Officer:
            <br />
            「滞在の目的は何ですか？」
            <br />
            <i>Taizai no mokuteki wa nan desu ka?</i>
            <br />
            <i>What is the purpose of your stay?</i>
          </p>
          <p className="tab">
            👤 Passenger:
            <br />
            「観光です。」
            <br />
            <i>Kankō desu.</i>
            <br />
            <i>Tourism.</i>
          </p>
          <p className="tab">
            👮 Officer:
            <br />
            「滞在期間はどのくらいですか？」
            <br />
            <i>Taizai kikan wa dono kurai desu ka?</i>
            <br />
            <i>How long will you be staying?</i>
          </p>
          <p className="tab">
            👤 Passenger:
            <br />
            「一週間です。」
            <br />
            <i>Isshūkan desu.</i>
            <br />
            <i>One week.</i>
          </p>
          <p className="tab">
            👮 Officer:
            <br />
            「どこに宿泊しますか？」
            <br />
            <i>Doko ni shukuhaku shimasu ka?</i>
            <br />
            <i>Where will you be staying?</i>
          </p>
          <p className="tab">
            👤 Passenger:
            <br />
            「東京のホテルに泊まります。」
            <br />
            <i>Tōkyō no hoteru ni tomarimasu.</i>
            <br />
            <i>I'll be staying at a hotel in Tokyo.</i>
          </p>
          <p className="tab">
            👮 Officer:
            <br />
            「良い旅を。」
            <br />
            <i>Yoi tabi o.</i>
            <br />
            <i>Have a good trip.</i>
          </p>
          <p className="tab">
            👤 Passenger:
            <br />
            「ありがとうございます。」
            <br />
            <i>Arigatō gozaimasu.</i>
            <br />
            <i>Thank you very much.</i>
          </p>
        </section>
      </div>

      <div id="directions">
        <h2>🗺️ Directions</h2>
        <section>
          <h2>📖 Vocabulary</h2>
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
                <td>Road / Street</td>
                <td>道</td>
                <td>michi</td>
              </tr>
              <tr className="background-white">
                <td>Station</td>
                <td>駅</td>
                <td>eki</td>
              </tr>
              <tr className="background-white">
                <td>Corner</td>
                <td>角</td>
                <td> kado</td>
              </tr>
              <tr className="background-white">
                <td>Traffic light</td>
                <td>信号</td>
                <td>shingō</td>
              </tr>
              <tr className="background-white">
                <td>Intersection</td>
                <td>交差点</td>
                <td>kōsaten</td>
              </tr>
              <tr className="background-white">
                <td>Go straight</td>
                <td>まっすぐ行く</td>
                <td>massugu iku</td>
              </tr>
              <tr className="background-white">
                <td>Turn right</td>
                <td>右に曲がる</td>
                <td>migi ni magaru</td>
              </tr>
              <tr className="background-white">
                <td>Turn left</td>
                <td>左に曲がる</td>
                <td>hidari ni magaru</td>
              </tr>
              <tr className="background-white">
                <td>Close / Near</td>
                <td>近い</td>
                <td>chikai</td>
              </tr>
              <tr className="background-white">
                <td>Far</td>
                <td>遠い</td>
                <td>tōi</td>
              </tr>
              <tr className="background-white">
                <td>This area</td>
                <td>この辺</td>
                <td>kono hen</td>
              </tr>
              <tr className="background-white">
                <td>How long does it take?</td>
                <td>どのくらいかかりますか？</td>
                <td>dono kurai kakarimasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>On foot</td>
                <td>徒歩</td>
                <td>toho</td>
              </tr>
              <tr className="background-white">
                <td>Train</td>
                <td>電車</td>
                <td>densha</td>
              </tr>
              <tr className="background-white">
                <td>Bus</td>
                <td>バス</td>
                <td>basu</td>
              </tr>
              <tr className="background-white">
                <td>Taxi</td>
                <td>タクシー</td>
                <td>takushī</td>
              </tr>
              <tr className="background-white">
                <td>Subway</td>
                <td>地下鉄</td>
                <td>chikatetsu</td>
              </tr>
              <tr className="background-white">
                <td>Exit</td>
                <td>出口</td>
                <td>deguchi</td>
              </tr>
              <tr className="background-white">
                <td>Entrance</td>
                <td>入り口</td>
                <td>iriguchi</td>
              </tr>
            </tbody>
          </table>

          <h2>🚶‍♂️ Asking for Directions</h2>
          <p className="tab">
            👤 Traveler:
            <br />
            「すみません、ちょっとお尋ねしますが…」
            <br />
            <i>Sumimasen, chotto o-tazune shimasu ga…</i>
            <br />
            <i>Excuse me, may I ask something…?</i>
          </p>
          <p className="tab">
            🧑 Local:
            <br />
            「はい、どうしましたか？」
            <br />
            <i>Hai, dō shimashita ka?</i>
            <br />
            <i>Yes, how can I help you?</i>
          </p>
          <p className="tab">
            👤 Traveler:
            <br />
            「〇〇駅はどこですか？」
            <br />
            <i>〇〇-eki wa doko desu ka?</i>
            <br />
            <i>Where is ○○ Station?</i>
          </p>
          <p className="tab">
            🧑 Local:
            <br />
            「この道をまっすぐ行って、二つ目の信号を右に曲がると見えます。」
            <br />
            <i>
              Kono michi o massugu itte, futatsume no shingō o migi ni magaru to
              miemasu.
            </i>
            <br />
            <i>
              Go straight down this road, then turn right at the second traffic
              light. You'll see it.
            </i>
          </p>
          <p className="tab">
            👤 Traveler:
            <br />
            「ありがとうございます！」
            <br />
            <i>Arigatō gozaimasu!</i>
            <br />
            <i>Thank you very much!</i>
          </p>

          <h2>🚏 Giving More Detailed Directions</h2>
          <p className="tab">
            👤 Traveler:
            <br />
            「この近くにコンビニはありますか？」
            <br />
            <i>Kono chikaku ni konbini wa arimasu ka?</i>
            <br />
            <i>Is there a convenience store nearby?</i>
          </p>
          <p className="tab">
            🧑 Local:
            <br />
            「はい、ありますよ。ここを左に曲がると、すぐ右側にあります。」
            <br />
            <i>
              Hai, arimasu yo. Koko o hidari ni magaru to, sugu migi-gawa ni
              arimasu.
            </i>
            <br />
            <i>
              Yes, there is. Turn left here, and you'll see it immediately on
              your right.
            </i>
          </p>
          <p className="tab">
            👤 Traveler:
            <br />
            「どのくらいかかりますか？」
            <br />
            <i>Dono kurai kakarimasu ka?</i>
            <br />
            <i>How long will it take?</i>
          </p>
          <p className="tab">
            🧑 Local:
            <br />
            「歩いて５分くらいです。」
            <br />
            <i>Aruite go-fun kurai desu.</i>
            <br />
            <i>It's about a five-minute walk.</i>
          </p>

          <h2>🚆 Asking for Directions in a Train Station</h2>
          <p className="tab">
            👤 Traveler:
            <br />
            「すみません、新宿駅へ行きたいのですが、どの電車に乗ればいいですか？」
            <br />
            <i>
              Sumimasen, Shinjuku-eki e ikitai no desu ga, dono densha ni noreba
              ii desu ka?
            </i>
            <br />
            <i>
              Excuse me, I want to go to Shinjuku Station. Which train should I
              take?
            </i>
          </p>
          <p className="tab">
            🚉 Station Staff:
            <br />
            「山手線に乗れば、新宿駅に行けます。」
            <br />
            <i>Yamanote-sen ni noreba, Shinjuku-eki ni ikemasu.</i>
            <br />
            <i>
              If you take the Yamanote Line, you can get to Shinjuku Station.
            </i>
          </p>
          <p className="tab">
            👤 Traveler:
            <br />
            「何番ホームですか？」
            <br />
            <i>Nan-ban hōmu desu ka?</i>
            <br />
            <i>Which platform is it?</i>
          </p>
          <p className="tab">
            🚉 Station Staff:
            <br />
            「３番ホームです。」
            <br />
            <i>San-ban hōmu desu.</i>
            <br />
            <i>Platform 3.</i>
          </p>
          <p className="tab">
            👤 Traveler:
            <br />
            「ありがとうございます！」
            <br />
            <i>Arigatō gozaimasu!</i>
            <br />
            <i>Thank you very much!</i>
          </p>

          <h2>🚕 Asking for Directions in a Taxi</h2>
          <p className="tab">
            👤 Passenger:
            <br />
            「すみません、東京タワーまでお願いします。」
            <br />
            <i>Sumimasen, Tōkyō Tawā made onegai shimasu.</i>
            <br />
            <i>Excuse me, please take me to Tokyo Tower.</i>
          </p>
          <p className="tab">
            🚖 Driver:
            <br />
            「わかりました。高速道路を使いますか？」
            <br />
            <i>Wakarimashita. Kōsoku-dōro o tsukaimasu ka?</i>
            <br />
            <i>Understood. Would you like to take the highway?</i>
          </p>
          <p className="tab">
            👤 Passenger:
            <br />
            「はい、お願いします。」
            <br />
            <i>Hai, onegai shimasu.</i>
            <br />
            <i>Yes, please.</i>
          </p>
          <p className="tab">
            🚖 Driver:
            <br />
            「渋滞があるかもしれませんので、少し時間がかかります。」
            <br />
            <i>
              Jūtai ga aru kamo shiremasen no de, sukoshi jikan ga kakarimasu.
            </i>
            <br />
            <i>
              There might be some traffic, so it could take a little longer.
            </i>
          </p>
          <p className="tab">
            👤 Passenger:
            <br />
            「大丈夫です。」
            <br />
            <i>Daijōbu desu.</i>
            <br />
            <i>That's fine.</i>
          </p>
        </section>
      </div>

      <div id="transportation">
        <h2>🚆 Transportation</h2>
        <section>
          <h2>📖 Vocabulary</h2>
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

          <h2 className="indent">🚉 Buying a Ticket at the Station</h2>
          <p className="tab">
            👤 You:
            <br />
            すみません、新宿駅までの切符をください。
            <br />
            <i>Sumimasen, Shinjuku-eki made no kippu o kudasai.</i>
            <br />
            <i>Excuse me, a ticket to Shinjuku Station, please.</i>
          </p>
          <p className="tab">
            🚉 Staff:
            <br />
            3番線の電車です。5分後に出発します。
            <br />
            <i>San-bansen no densha desu. Go-fun go ni shuppatsu shimasu.</i>
            <br />
            <i>It’s on platform 3. It departs in 5 minutes.</i>
          </p>
          <p className="tab">
            👤 You:
            <br />
            片道でお願いします。
            <br />
            <i>Katamichi de onegaishimasu.</i>
            <br />
            <i>One-way, please.</i>
          </p>
          <p className="tab">
            🚉 Staff:
            <br />
            150円になります。
            <br />
            <i>Hyaku gojū en ni narimasu.</i>
            <br />
            <i>That will be 150 yen.</i>
          </p>
          <p className="tab">
            👤 You:
            <br />
            ありがとうございます。
            <br />
            <i>Arigatou gozaimasu.</i>
            <br />
            <i>Thank you very much.</i>
          </p>
          <p className="tab">
            🚉 Staff:
            <br />
            どうぞ、切符です。
            <br />
            <i>Dōzo, kippu desu.</i>
            <br />
            <i>Here’s your ticket.</i>
          </p>

          <h2>👩‍💼 Asking a Station Worker Which Train to Take</h2>
          <p className="tab">
            👤 You:
            <br />
            すみません、東京駅へ行く電車はどれですか？
            <br />
            <i>Sumimasen, Tōkyō-eki e iku densha wa dore desu ka?</i>
            <br />
            <i>Excuse me, which train goes to Tokyo Station?</i>
          </p>
          <p className="tab">
            🚉 Staff:
            <br />
            3番線の電車です。5分後に出発します。
            <br />
            <i>San-bansen no densha desu. Go-fun go ni shuppatsu shimasu.</i>
            <br />
            <i>It’s on platform 3. It departs in 5 minutes.</i>
          </p>
          <p className="tab">
            👤 You:
            <br />
            ありがとうございます！
            <br />
            <i>Arigatou gozaimasu!</i>
            <br />
            <i>Thank you very much!</i>
          </p>
          <p className="tab">
            🚉 Staff:
            <br />
            どういたしまして。
            <br />
            <i>Dōitashimashite.</i>
            <br />
            <i>You’re welcome.</i>
          </p>

          <h2>🚏 Asking a Local About a Bus Stop</h2>
          <p className="tab">
            👤 You:
            <br />
            すみません、成田空港行きのバス停はどこですか？
            <br />
            <i>Sumimasen, Narita kūkō yuki no basutei wa doko desu ka?</i>
            <br />
            <i>Excuse me, where is the bus stop for Narita Airport?</i>
          </p>
          <p className="tab">
            🚉 Staff:
            <br />
            あの交差点を渡って、右側にありますよ。
            <br />
            <i>Ano kōsaten o watatte, migi-gawa ni arimasu yo.</i>
            <br />
            <i>Cross that intersection, and it’s on the right side.</i>
          </p>
          <p className="tab">
            👤 You:
            <br />
            ありがとうございます！何番のバスですか？
            <br />
            <i>Arigatou gozaimasu! Nan-ban no basu desu ka?</i>
            <br />
            <i>Thank you! Which bus number is it?</i>
          </p>
          <p className="tab">
            🚉 Staff:
            <br />
            16番のバスです。20分ごとに来ます。
            <br />
            <i>Jū-roku-ban no basu desu. Nijuppun-goto ni kimasu.</i>
            <br />
            <i>It’s bus number 16. It comes every 20 minutes.</i>
          </p>
          <p className="tab">
            👤 You:
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
        <h2>🏨 Hotel</h2>
        <section>
          <h2>📖 Vocabulary</h2>
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

          <h2>🛎️ Check-in Conversation</h2>
          <p className="tab">
            👤 You:
            <br />
            「チェックインをお願いします。」
            <br />
            <i>Chekku in o onegai shimasu.</i>
            <br />
            <i>I’d like to check in.</i>
          </p>
          <p className="tab">
            💁 Hotel Staff:
            <br />
            「お名前をお願いします。」
            <br />
            <i>Onamae o onegai shimasu.</i>
            <br />
            <i>May I have your name?</i>
          </p>
          <p className="tab">
            👤 You:
            <br />
            「名前はスミスです。」
            <br />
            <i>Namae wa Sumisu desu.</i>
            <br />
            <i>My name is Smith.</i>
          </p>
          <p className="tab">
            💁 Staff:
            <br />
            「パスポートを見せてください。」
            <br />
            <i>Pasupōto o misete kudasai.</i>
            <br />
            <i>Please show your passport.</i>
          </p>
          <p className="tab">
            👤 You:
            <br />
            「はい、どうぞ。」
            <br />
            <i>Hai, dōzo.</i>
            <br />
            <i>Here you go.</i>
          </p>
          <p className="tab">
            💁 Staff:
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

          <h2>☕ Asking About Breakfast</h2>
          <p className="tab">
            👤 You:
            <br />
            「朝食はついていますか？」
            <br />
            <i>Chōshoku wa tsuite imasu ka?</i>
            <br />
            <i>Is breakfast included?</i>
          </p>
          <p className="tab">
            💁 Hotel Staff:
            <br />
            「はい、ついています。朝食は 7 時から 10 時までです。」
            <br />
            <i>
              Hai, tsuite imasu. Chōshoku wa shichi-ji kara jū-ji made desu.
            </i>
            <br />
            <i>Yes, it is included. Breakfast is from 7 AM to 10 AM.</i>
          </p>

          <h2>🧴 Requesting More Towels</h2>
          <p className="tab">
            👤 You:
            <br />
            「すみません、タオルをもう一枚ください。」
            <br />
            <i>Sumimasen, taoru o mō ichimai kudasai.</i>
            <br />
            <i>Excuse me, can I have one more towel?</i>
          </p>
          <p className="tab">
            💁 Hotel Staff:
            <br />
            「かしこまりました。すぐにお持ちします。」
            <br />
            <i>Kashikomarimashita. Sugu ni omochi shimasu.</i>
            <br />
            <i>Certainly. I will bring it right away.</i>
          </p>

          <h2>🏷️ Checking Out</h2>
          <p className="tab">
            👤 You:
            <br />
            「チェックアウトをお願いします。」
            <br />
            <i>Chekku auto o onegai shimasu.</i>
            <br />
            <i>I’d like to check out.</i>
          </p>
          <p className="tab">
            💁 Hotel Staff:
            <br />
            「かしこまりました。お部屋の鍵をお願いします。」
            <br />
            <i>Kashikomarimashita. Oheya no kagi o onegai shimasu.</i>
            <br />
            <i>Understood. Please return your room key.</i>
          </p>
          <p className="tab">
            👤 You:
            <br />
            「はい、どうぞ。」
            <br />
            <i>Hai, dōzo.</i>
            <br />
            <i>Here you go.</i>
          </p>
          <p className="tab">
            💁 Hotel Staff:
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
        <h2>🍽️ Restaurant</h2>
        <section>
          <h2>📖 Vocabulary</h2>
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

          <h2>🪑 Getting Seated</h2>
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

          <h2>📜 Ordering Food</h2>
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

          <h2>🍱 Ordering Multiple Set Meals</h2>
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

          <h2>🫖 Asking for Refills</h2>
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

          <h2>💳 Asking for the Bill</h2>
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
        <h2>🛍️ Shopping</h2>
        <section>
          <h2>📖 Vocabulary</h2>
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
                  Entering a Store
                </td>
              </tr>
              <tr className="background-white">
                <td>Welcome! (Said by staff when you enter)</td>
                <td>いらっしゃいませ！</td>
                <td>Irasshaimase!</td>
              </tr>
              <tr className="background-white">
                <td>Are you looking for something?</td>
                <td>何かお探しですか？</td>
                <td>Nanika osagashi desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>I'm just looking.</td>
                <td>見ているだけです。</td>
                <td>Miteiru dake desu.</td>
              </tr>

              <tr>
                <td colSpan={3} className="background-grey table-text-center">
                  Asking About Products
                </td>
              </tr>
              <tr className="background-white">
                <td>How much is this?</td>
                <td>これはいくらですか？</td>
                <td>Kore wa ikura desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Do you have this in a different color?</td>
                <td>これの色違いはありますか？</td>
                <td>Kore no iro chigai wa arimasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Do you have a larger size?</td>
                <td>もっと大きいサイズはありますか？</td>
                <td>Motto ōkii saizu wa arimasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Can I try this on?</td>
                <td>試着できますか？</td>
                <td>Shichaku dekimasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Do you have other designs?</td>
                <td>他のデザインはありますか？</td>
                <td>Hoka no dezain wa arimasu ka?</td>
              </tr>

              <tr>
                <td colSpan={3} className="background-grey table-text-center">
                  Discounts & Payments
                </td>
              </tr>
              <tr className="background-white">
                <td>Is this on sale?</td>
                <td>これはセール中ですか？</td>
                <td>Kore wa seeru-chū desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Do you offer discounts?</td>
                <td>割引はありますか？</td>
                <td>Waribiki wa arimasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Can I pay by card?</td>
                <td>カードで払えますか？</td>
                <td>Kaado de haraemasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>We only accept cash.</td>
                <td>現金のみです。</td>
                <td>Genkin nomi desu.</td>
              </tr>

              <tr>
                <td colSpan={3} className="background-grey table-text-center">
                  Buying & Leaving
                </td>
              </tr>
              <tr className="background-white">
                <td>I'll take this.</td>
                <td>これをください。</td>
                <td>Kore o kudasai.</td>
              </tr>
              <tr className="background-white">
                <td>Do you need a bag?</td>
                <td>袋はいりますか？</td>
                <td>Fukuro wa irimasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Please give me a receipt.</td>
                <td>レシートをください。</td>
                <td>Reshīto o kudasai.</td>
              </tr>
              <tr className="background-white">
                <td>Please come again!</td>
                <td>またお越しくださいませ！</td>
                <td>Mata okoshi kudasaimase!</td>
              </tr>
            </tbody>
          </table>

          <h2>🏬 At a Clothing Store</h2>
          <p className="tab">
            👩 Customer:
            <br />
            「すみません、試着できますか？」
            <br />
            <i>Sumimasen, shichaku dekimasu ka?</i>
            <br />
            <i>Excuse me, can I try this on?</i>
          </p>
          <p className="tab">
            🏪 Store Staff:
            <br />
            「はい、試着室はあちらです。」
            <br />
            <i>Hai, shichakushitsu wa achira desu.</i>
            <br />
            <i>Yes, the fitting room is over there.</i>
          </p>
          <p className="tab">
            👩 Customer:
            <br />
            「もう少し大きいサイズはありますか？」
            <br />
            <i>Mō sukoshi ōkii saizu wa arimasu ka?</i>
            <br />
            <i>Do you have a slightly larger size?</i>
          </p>
          <p className="tab">
            🏪 Store Staff:
            <br />
            「はい、こちらのLサイズはいかがですか？」
            <br />
            <i>Hai, kochira no L saizu wa ikaga desu ka?</i>
            <br />
            <i>Yes, how about this L size?</i>
          </p>
          <p className="tab">
            👩 Customer:
            <br />
            「これをください。」
            <br />
            <i>Kore o kudasai.</i>
            <br />
            <i>I'll take this.</i>
          </p>
          <p className="tab">
            🏪 Store Staff:
            <br />
            「袋はいりますか？」
            <br />
            <i>Fukuro wa irimasu ka?</i>
            <br />
            <i>Do you need a bag?</i>
          </p>
          <p className="tab">
            👩 Customer:
            <br />
            「はい、お願いします。」
            <br />
            <i>Hai, onegai shimasu.</i>
            <br />
            <i>Yes, please.</i>
          </p>
          <p className="tab">
            🏪 Store Staff:
            <br />
            「ありがとうございました！」
            <br />
            <i>Arigatou gozaimashita!</i>
            <br />
            <i>Thank you very much!</i>
          </p>
        </section>
      </div>

      <div id="numbers">
        <h2>🔢 Numbers</h2>
        <section>
          <h2>📖 Vocabulary</h2>
          <table className="table-travel">
            <tbody>
              <tr>
                <td className="background-grey">
                  <span>Number</span>
                </td>
                <td className="background-grey">
                  <span>Kanji</span>
                </td>
                <td className="background-grey">
                  <span>Japanese (Hirigana)</span>
                </td>
              </tr>
              <tr className="background-white">
                <td>1</td>
                <td>一</td>
                <td>いち (ichi)</td>
              </tr>
              <tr className="background-white">
                <td>2</td>
                <td>二</td>
                <td>に (ni)</td>
              </tr>
              <tr className="background-white">
                <td>3</td>
                <td>三</td>
                <td>さん (san)</td>
              </tr>
              <tr className="background-white">
                <td>4</td>
                <td>四</td>
                <td>し / よん (shi / yon)</td>
              </tr>
              <tr className="background-white">
                <td>5</td>
                <td>五</td>
                <td>ご (go)</td>
              </tr>
              <tr className="background-white">
                <td>6</td>
                <td>六</td>
                <td>ろく (roku)</td>
              </tr>
              <tr className="background-white">
                <td>7</td>
                <td>七</td>
                <td>しち / なな (shichi / nana)</td>
              </tr>
              <tr className="background-white">
                <td>8</td>
                <td>八</td>
                <td>はち (hachi)</td>
              </tr>
              <tr className="background-white">
                <td>9</td>
                <td>九</td>
                <td>きゅう / く (kyuu / ku)</td>
              </tr>
              <tr className="background-white">
                <td>10</td>
                <td>十</td>
                <td>じゅう (juu)</td>
              </tr>
              <tr className="background-white">
                <td>100</td>
                <td>百</td>
                <td>ひゃく (hyaku)</td>
              </tr>
              <tr className="background-white">
                <td>1,000</td>
                <td>千</td>
                <td>せん (sen)</td>
              </tr>
              <tr className="background-white">
                <td>10,000</td>
                <td>一万</td>
                <td>いちまん (ichiman)</td>
              </tr>
            </tbody>
          </table>
          <div className="indent">
            <p>
              "し (shi)" and "しち (shichi)" are sometimes avoided due to
              associations with bad luck, so "よん (yon)" and "なな (nana)" are
              more commonly used.
            </p>
            <p>
              When counting objects, counters (like 個, 本, 枚, etc.) are
              required.
            </p>
          </div>

          <h2>🛒 Using Numbers in Shopping</h2>
          <ol className="indent">
            <li>How much is this?</li>
            <span>👉 これは いくら ですか？ (Kore wa ikura desu ka?)</span>
            <li>I'll take two of these.</li>
            <span>👉 これを 二つ ください。 (Kore o futatsu kudasai.)</span>
            <li>Do you have this in size M?</li>
            <span>👉 Mサイズは ありますか？ (Emu saizu wa arimasu ka?)</span>
            <li>The total is 3,200 yen.</li>
            <span>
              👉 全部で さんぜんにひゃくえん です。 (Zenbu de sanzen nihyaku en
              desu.)
            </span>
            <li>I’ll pay with a 10,000 yen bill.</li>
            <span>
              👉 一万円札で 払います。 (Ichiman en satsu de haraimasu.)
            </span>
            <li>Do you accept credit cards?</li>
            <span>
              👉 クレジットカードは 使えますか？ (Kurejitto kaado wa tsukaemasu
              ka?)
            </span>
          </ol>

          <h2>🍽️ Using Numbers in Restaurants</h2>
          <ol className="indent">
            <li>Table for three, please.</li>
            <span>👉 三人 です。 (San-nin desu.)</span>
            <li>I'd like to order two of the number 4 set meals.</li>
            <span>
              👉 4番のセットを二つください。 (Yon-ban no setto o futatsu
              kudasai.)
            </span>
            <li>Can I get one more glass of water?</li>
            <span>
              👉 お水を もう一杯 ください。 (Omizu o mou ippai kudasai.)
            </span>
            <li>Check, please.</li>
            <span>👉 お会計を お願いします。 (Okaikei o onegai shimasu.)</span>
            <li>That costs 2,580 yen.</li>
            <span>
              👉 二千五百八十円 です。 (Nisen gohyaku hachijuu en desu.)
            </span>
          </ol>

          <h2>🚆 Using Numbers in Transportation</h2>
          <ol className="indent">
            <li>I’d like one ticket to Tokyo.</li>
            <span>
              👉 東京までの 切符を一枚ください。 (Tokyo made no kippu o ichimai
              kudasai.)
            </span>
            <li>What platform is train number 7 on?</li>
            <span>👉 7番線 はどこですか？ (Nanaban-sen wa doko desu ka?)</span>
            <li>The next train arrives at 3:45 PM.</li>
            <span>
              👉 次の電車は 午後三時四十五分 です。 (Tsugi no densha wa gogo
              sanji yonjuu gofun desu.)
            </span>
            <li>I want to take the 9:00 AM bus.</li>
            <span>
              👉 午前九時 のバスに乗りたいです。 (Gozen kuji no basu ni noritai
              desu.)
            </span>
            <li>Does this train stop at Kyoto?</li>
            <span>
              👉 この電車は 京都に止まりますか？ (Kono densha wa Kyoto ni
              tomarimasu ka?)
            </span>
          </ol>

          <h2>🏨 Using Numbers in Hotels</h2>
          <ol className="indent">
            <li>I have a reservation for two nights.</li>
            <span>
              👉 二泊 の予約があります。 (Nihaku no yoyaku ga arimasu.)
            </span>
            <li>The room number is 305.</li>
            <span>
              👉 部屋番号は 305 です。 (Heya bangou wa sanmarugo desu.)
            </span>
            <li>Check-out is at 11:00 AM.</li>
            <span>
              👉 チェックアウトは 午前十一時 です。 (Chekkuauto wa gozen
              juuichiji desu.)
            </span>
            <li>Can I get two extra towels?</li>
            <span>
              👉 タオルを 二枚 追加できますか？ (Tauru o nimai tsuika dekimasu
              ka?)
            </span>
          </ol>

          <h2>📦 Common Counters</h2>
          <table className="table-travel">
            <tbody>
              <tr>
                <td className="background-grey">
                  <span>Counter</span>
                </td>
                <td className="background-grey">
                  <span>Used For</span>
                </td>
                <td className="background-grey">
                  <span>Example</span>
                </td>
              </tr>
              <tr className="background-white">
                <td>個 (こ, ko)</td>
                <td>Small objects, general counter </td>
                <td>りんご 三個 (Ringo sanko → 3 apples)</td>
              </tr>
              <tr className="background-white">
                <td>本 (ほん, hon)</td>
                <td>Long cylindrical objects (bottles, pens)</td>
                <td>水 二本 (Mizu nihon → 2 bottles of water)</td>
              </tr>
              <tr className="background-white">
                <td>枚 (まい, mai) </td>
                <td>Flat/thin objects (paper, towels, tickets)</td>
                <td>チケット 一枚 (Chiketto ichimai → 1 ticket)</td>
              </tr>
              <tr className="background-white">
                <td>人 (にん, nin)</td>
                <td>People (except 1 and 2)</td>
                <td>五人 (Gonin → 5 people)</td>
              </tr>
              <tr className="background-white">
                <td>杯 (はい, hai)</td>
                <td>Cups/glasses of drinks</td>
                <td>お茶 三杯 (Ocha sanbai → 3 cups of tea)</td>
              </tr>
              <tr className="background-white">
                <td>泊 (はく, haku) </td>
                <td>Nights of stay</td>
                <td>二泊 (Nihaku → 2 nights)</td>
              </tr>
            </tbody>
          </table>
          <div className="indent">
            <p>
              Japanese numbers change slightly depending on the counter used.
            </p>
            <p>
              "ひとつ, ふたつ, みっつ" (native Japanese) is used when no
              specific counter is needed.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Travel;
