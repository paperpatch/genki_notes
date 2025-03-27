import React, { useEffect, useRef } from "react";
import { useSmoothScrollToSection } from "../utils/Helpers";
import { useLocation } from "react-router-dom";
import "./Pages.css";

function Travel({ setActiveSection }) {
  const greetingsRef = useRef(null);
  const airportRef = useRef(null);
  const directionsRef = useRef(null);
  const transportationRef = useRef(null);
  const hotelRef = useRef(null);
  const restaurantRef = useRef(null);
  const shoppingRef = useRef(null);
  const numbersRef = useRef(null);
  const location = useLocation();

  useSmoothScrollToSection();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sectionId = params.get("section");

    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  // detect scroll and update activeSection
  useEffect(() => {
    const sections = document.querySelectorAll(".travel-section");

    const handleScroll = () => {
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  return (
    <div>
      <div id="greetings" ref={greetingsRef} className="travel-section">
        <section>
          <h1>👋 Greetings</h1>
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

      <div id="airport" ref={airportRef} className="travel-section">
        <section>
          <h1>✈️ Airport</h1>
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
                <td>
                  <span className="kanji">
                    空港<span className="furigana">くうこう</span>
                  </span>
                </td>
                <td>kūkō</td>
              </tr>
              <tr className="background-white">
                <td>Check-in</td>
                <td>チェックイン</td>
                <td>chekku in</td>
              </tr>
              <tr className="background-white">
                <td>Airline ticket</td>
                <td>
                  <span className="kanji">
                    航空券<span className="furigana">こうくうけん</span>
                  </span>
                </td>
                <td>kōkūken</td>
              </tr>
              <tr className="background-white">
                <td>Security check</td>
                <td>
                  <span className="kanji">
                    保安<span className="furigana">ほあん</span>
                  </span>
                  <span className="kanji">
                    検査<span className="furigana">けんさ</span>
                  </span>
                </td>
                <td>hoan kensa</td>
              </tr>
              <tr className="background-white">
                <td>Baggage</td>
                <td>
                  <span className="kanji">
                    荷<span className="furigana">に</span>
                  </span>
                  <span className="kanji">
                    物<span className="furigana">もつ</span>
                  </span>
                </td>
                <td>nimotsu</td>
              </tr>
              <tr className="background-white">
                <td>Carry-on luggage</td>
                <td>
                  <span className="kanji">
                    手<span className="furigana">て</span>
                  </span>
                  <span className="kanji">
                    荷<span className="furigana">に</span>
                  </span>
                  <span className="kanji">
                    物<span className="furigana">もつ</span>
                  </span>
                </td>
                <td>tenimotsu</td>
              </tr>
              <tr className="background-white">
                <td>Passport</td>
                <td>パスポート</td>
                <td>pasupōto</td>
              </tr>
              <tr className="background-white">
                <td>Boarding gate</td>
                <td>
                  <span className="kanji">
                    搭乗口<span className="furigana">とうじょうぐち</span>
                  </span>
                </td>
                <td>tōjōguchi</td>
              </tr>
              <tr className="background-white">
                <td>Departure</td>
                <td>
                  <span className="kanji">
                    出発<span className="furigana">しゅっぱつ</span>
                  </span>
                </td>
                <td>shuppatsu</td>
              </tr>
              <tr className="background-white">
                <td>Arrival</td>
                <td>
                  <span className="kanji">
                    到着<span className="furigana">とうちゃく</span>
                  </span>
                </td>
                <td>tōchaku</td>
              </tr>
              <tr className="background-white">
                <td>Boarding pass</td>
                <td>
                  <span className="kanji">
                    搭乗券<span className="furigana">とうじょうけん</span>
                  </span>
                </td>
                <td>tōjōken</td>
              </tr>
              <tr className="background-white">
                <td>Length of stay</td>
                <td>
                  <span className="kanji">
                    滞<span className="furigana">たい</span>
                  </span>
                  <span className="kanji">
                    在<span className="furigana">ざい</span>
                  </span>
                  <span className="kanji">
                    期<span className="furigana">き</span>
                  </span>
                  <span className="kanji">
                    間<span className="furigana">かん</span>
                  </span>
                </td>
                <td>taizai kikan</td>
              </tr>
              <tr className="background-white">
                <td>Tourism</td>
                <td>
                  <span className="kanji">
                    観光<span className="furigana">かんこう</span>
                  </span>
                </td>
                <td>kankō</td>
              </tr>
              <tr className="background-white">
                <td>Immigration check</td>
                <td>
                  <span className="kanji">
                    入国審査<span className="furigana">にゅうこくしんさ</span>
                  </span>
                </td>
                <td>nyūkoku shinsa</td>
              </tr>
              <tr className="background-white">
                <td>Have a good trip</td>
                <td>
                  <span className="kanji">
                    良<span className="furigana">よ</span>
                  </span>
                  い
                  <span className="kanji">
                    旅<span className="furigana">たび</span>
                  </span>
                  を
                </td>
                <td>yoi tabi o</td>
              </tr>
            </tbody>
          </table>

          <h2>🛄 Check-in Counter</h2>
          <p className="tab">
            👤 Passenger:
            <br />
            「すみません、チェックインをお
            <span className="kanji">
              願<span className="furigana">ねが</span>
            </span>
            いします。」
            <br />
            <i>Sumimasen, chekku in o onegai shimasu.</i>
            <br />
            <i>Excuse me, I'd like to check in.</i>
          </p>
          <p className="tab">
            ✈️ Staff:
            <br />
            「パスポートと
            <span className="kanji">
              航<span className="furigana">こう</span>
            </span>
            <span className="kanji">
              空<span className="furigana">くう</span>
            </span>
            <span className="kanji">
              券<span className="furigana">けん</span>
            </span>
            を
            <span className="kanji">
              拝<span className="furigana">はい</span>
            </span>
            <span className="kanji">
              見<span className="furigana">けん</span>
            </span>
            できますか？」
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
            「お
            <span className="kanji">
              預<span className="furigana">あず</span>
            </span>
            けの
            <span className="kanji">
              荷物<span className="furigana">にもつ</span>
            </span>
            はございますか？」
            <br />
            <i>Oazuke no nimotsu wa gozaimasu ka?</i>
            <br />
            <i>Do you have any checked luggage?</i>
          </p>
          <p className="tab">
            👤 Passenger:
            <br />
            「はい、このスーツケースをお
            <span className="kanji">
              願<span className="furigana">ねが</span>
            </span>
            いします。」
            <br />
            <i>Hai, kono sūtsukēsu o onegai shimasu.</i>
            <br />
            <i>Yes, this suitcase, please.</i>
          </p>
          <p className="tab">
            ✈️ Staff:
            <br />
            「こちら、
            <span className="kanji">
              荷物<span className="furigana">にもつ</span>
            </span>
            タグになります。」
            <br />
            <i>Kochira, nimotsu tagu ni narimasu.</i>
            <br />
            <i>Here is your baggage tag.</i>
          </p>
          <p className="tab">
            ✈️ Staff:
            <br />
            「お
            <span className="kanji">
              座席<span className="furigana">ざせき</span>
            </span>
            の
            <span className="kanji">
              希望<span className="furigana">きぼう</span>
            </span>
            はございますか？」
            <br />
            <i>O-zaseki no kibō wa gozaimasu ka?</i>
            <br />
            <i>Do you have a seating preference?</i>
          </p>
          <p className="tab">
            👤 Passenger:
            <br />「
            <span className="kanji">
              窓<span className="furigana">まど</span>
            </span>
            <span className="kanji">
              側<span className="furigana">がわ</span>
            </span>
            をお
            <span className="kanji">
              願<span className="furigana">ねが</span>
            </span>
            いします。」
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
            <br />「
            <span className="kanji">
              手荷物<span className="furigana">てにもつ</span>
            </span>
            をトレイに
            <span className="kanji">
              置<span className="furigana">お</span>
            </span>
            いてください。」
            <br />
            <i>Tenimotsu o tore ni oite kudasai.</i>
            <br />
            <i>Please place your carry-on baggage in the tray.</i>
          </p>
          <p className="tab">
            ✈️ Security Staff:
            <br />「
            <span className="kanji">
              金属類<span className="furigana">きんぞくるい</span>
            </span>
            、ベルト、スマートフォンを
            <span className="kanji">
              外<span className="furigana">はず</span>
            </span>
            してください。」
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
            「この
            <span className="kanji">
              中<span className="furigana">なか</span>
            </span>
            に
            <span className="kanji">
              液体物<span className="furigana">えきたいぶつ</span>
            </span>
            は
            <span className="kanji">
              入<span className="furigana">はい</span>
            </span>
            っていますか？」
            <br />
            <i>Kono naka ni ekitaibutsu wa haitteimasu ka?</i>
            <br />
            <i>Do you have any liquids inside?</i>
          </p>
          <p className="tab">
            👤 Passenger:
            <br />
            「いいえ、
            <span className="kanji">
              入<span className="furigana">はい</span>
            </span>
            っていません。」
            <br />
            <i>Iie, haitteimasen.</i>
            <br />
            <i>No, I don’t (have anything inside).</i>
          </p>
          <p className="tab">
            ✈️ Security Staff:
            <br />
            「ご
            <span className="kanji">
              協力<span className="furigana">きょうりょく</span>
            </span>
            ありがとうございます。」
            <br />
            <i>Go-kyōryoku arigatō gozaimasu.</i>
            <br />
            <i>Thank you for your cooperation.</i>
          </p>

          <h2>
            🛫 Boarding Gate (
            <span className="kanji">
              搭乗口<span className="furigana">とうじょうぐち</span>
            </span>
            , Tōjōguchi)
          </h2>
          <p className="tab">
            👤 Passenger:
            <br />
            「すみません、
            <span className="kanji">
              搭乗口<span className="furigana">とうじょうぐち</span>
            </span>
            はどこですか？」
            <br />
            <i>Sumimasen, tōjōguchi wa doko desu ka?</i>
            <br />
            <i>Excuse me, where is the boarding gate?</i>
          </p>
          <p className="tab">
            ✈️ Staff:
            <br />「
            <span className="kanji">
              搭乗口<span className="furigana">とうじょうぐち</span>
            </span>
            はあちらです。」
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
            「こちらが
            <span className="kanji">
              搭乗券<span className="furigana">とうじょうけん</span>
            </span>
            になります。どうぞお
            <span className="kanji">
              持<span className="furigana">も</span>
            </span>
            ちください。」
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
            <br />「
            <span className="kanji">
              搭乗開始<span className="furigana">とうじょうかいし</span>
            </span>
            は〇〇
            <span className="kanji">
              時<span className="furigana">じ</span>
            </span>
            です。」
            <br />
            <i>Tōjō kaishi wa 〇〇-ji desu.</i>
            <br />
            <i>Boarding starts at 〇〇 o'clock.</i>
          </p>

          <h2>
            🛂 Immigration (
            <span className="kanji">
              入国審査<span className="furigana">にゅうこくしんさ</span>
            </span>
            , Nyūkoku Shinsa)
          </h2>
          <p className="tab">
            👮 Officer:
            <br />
            「パスポートを
            <span className="kanji">
              見<span className="furigana">み</span>
            </span>
            せてください。」
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
            <br />「
            <span className="kanji">
              滞在<span className="furigana">たいざい</span>
            </span>
            の
            <span className="kanji">
              目的<span className="furigana">もくてき</span>
            </span>
            は
            <span className="kanji">
              何<span className="furigana">なん</span>
            </span>
            ですか？」
            <br />
            <i>Taizai no mokuteki wa nan desu ka?</i>
            <br />
            <i>What is the purpose of your stay?</i>
          </p>
          <p className="tab">
            👤 Passenger:
            <br />「
            <span className="kanji">
              観光<span className="furigana">かんこう</span>
            </span>
            です。」
            <br />
            <i>Kankō desu.</i>
            <br />
            <i>Tourism.</i>
          </p>
          <p className="tab">
            👮 Officer:
            <br />「
            <span className="kanji">
              滞在期間<span className="furigana">たいざいきかん</span>
            </span>
            はどのくらいですか？」
            <br />
            <i>Taizai kikan wa dono kurai desu ka?</i>
            <br />
            <i>How long will you be staying?</i>
          </p>
          <p className="tab">
            👤 Passenger:
            <br />「
            <span className="kanji">
              一週間<span className="furigana">いっしゅうかん</span>
            </span>
            です。」
            <br />
            <i>Isshūkan desu.</i>
            <br />
            <i>One week.</i>
          </p>
          <p className="tab">
            👮 Officer:
            <br />
            「どこに
            <span className="kanji">
              宿泊<span className="furigana">しゅくはく</span>
            </span>
            しますか？」
            <br />
            <i>Doko ni shukuhaku shimasu ka?</i>
            <br />
            <i>Where will you be staying?</i>
          </p>
          <p className="tab">
            👤 Passenger:
            <br />「
            <span className="kanji">
              東京<span className="furigana">ときょう</span>
            </span>
            のホテルに
            <span className="kanji">
              泊<span className="furigana">と</span>
            </span>
            まります。」
            <br />
            <i>Tōkyō no hoteru ni tomarimasu.</i>
            <br />
            <i>I'll be staying at a hotel in Tokyo.</i>
          </p>
          <p className="tab">
            👮 Officer:
            <br />「
            <span className="kanji">
              良<span className="furigana">よ</span>
            </span>
            い
            <span className="kanji">
              旅<span className="furigana">たび</span>
            </span>
            を。」
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

      <div id="directions" ref={directionsRef} className="travel-section">
        <section>
          <h1>🗺️ Directions</h1>
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
                <td>
                  <span className="kanji">
                    道<span className="furigana">みち</span>
                  </span>
                </td>
                <td>michi</td>
              </tr>
              <tr className="background-white">
                <td>Station</td>
                <td>
                  <span className="kanji">
                    駅<span className="furigana">えき</span>
                  </span>
                </td>
                <td>eki</td>
              </tr>
              <tr className="background-white">
                <td>Corner</td>
                <td>
                  <span className="kanji">
                    角<span className="furigana">かど</span>
                  </span>
                </td>
                <td> kado</td>
              </tr>
              <tr className="background-white">
                <td>Traffic light</td>
                <td>
                  <span className="kanji">
                    信<span className="furigana">しん</span>
                  </span>
                  <span className="kanji">
                    号<span className="furigana">ごう</span>
                  </span>
                </td>
                <td>shingō</td>
              </tr>
              <tr className="background-white">
                <td>Intersection</td>
                <td>
                  <span className="kanji">
                    交<span className="furigana">こう</span>
                  </span>
                  <span className="kanji">
                    差<span className="furigana">さ</span>
                  </span>
                  <span className="kanji">
                    差<span className="furigana">てん</span>
                  </span>
                </td>
                <td>kōsaten</td>
              </tr>
              <tr className="background-white">
                <td>Go straight</td>
                <td>
                  まっすぐ
                  <span className="kanji">
                    行<span className="furigana">い</span>
                  </span>
                  く
                </td>
                <td>massugu iku</td>
              </tr>
              <tr className="background-white">
                <td>Turn right</td>
                <td>
                  <span className="kanji">
                    右<span className="furigana">みぎ</span>
                  </span>
                  に
                  <span className="kanji">
                    曲<span className="furigana">ま</span>
                  </span>
                  がる
                </td>
                <td>migi ni magaru</td>
              </tr>
              <tr className="background-white">
                <td>Turn left</td>
                <td>
                  <span className="kanji">
                    左<span className="furigana">ひだり</span>
                  </span>
                  に
                  <span className="kanji">
                    曲<span className="furigana">ま</span>
                  </span>
                  がる
                </td>
                <td>hidari ni magaru</td>
              </tr>
              <tr className="background-white">
                <td>Close / Near</td>
                <td>
                  <span className="kanji">
                    近<span className="furigana">ちか</span>
                  </span>
                  い
                </td>
                <td>chikai</td>
              </tr>
              <tr className="background-white">
                <td>Far</td>
                <td>
                  <span className="kanji">
                    遠<span className="furigana">とお</span>
                  </span>
                  い
                </td>
                <td>tōi</td>
              </tr>
              <tr className="background-white">
                <td>This area</td>
                <td>
                  この
                  <span className="kanji">
                    辺<span className="furigana">へん</span>
                  </span>
                </td>
                <td>kono hen</td>
              </tr>
              <tr className="background-white">
                <td>How long does it take?</td>
                <td>どのくらいかかりますか？</td>
                <td>dono kurai kakarimasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>On foot</td>
                <td>
                  <span className="kanji">
                    徒<span className="furigana">と</span>
                  </span>
                  <span className="kanji">
                    歩<span className="furigana">ほ</span>
                  </span>
                </td>
                <td>toho</td>
              </tr>
              <tr className="background-white">
                <td>Train</td>
                <td>
                  <span className="kanji">
                    電<span className="furigana">でん</span>
                  </span>
                  <span className="kanji">
                    車<span className="furigana">しゃ</span>
                  </span>
                </td>
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
                <td>
                  <span className="kanji">
                    地<span className="furigana">ち</span>
                  </span>
                  <span className="kanji">
                    下<span className="furigana">か</span>
                  </span>
                  <span className="kanji">
                    鉄<span className="furigana">てつ</span>
                  </span>
                </td>
                <td>chikatetsu</td>
              </tr>
              <tr className="background-white">
                <td>Exit</td>
                <td>
                  <span className="kanji">
                    出<span className="furigana">で</span>
                  </span>
                  <span className="kanji">
                    口<span className="furigana">ぐち</span>
                  </span>
                </td>
                <td>deguchi</td>
              </tr>
              <tr className="background-white">
                <td>Entrance</td>
                <td>
                  <span className="kanji">
                    入<span className="furigana">い</span>
                  </span>
                  り
                  <span className="kanji">
                    口<span className="furigana">ぐち</span>
                  </span>
                </td>
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
            「すみません、東京タワーまでお
            <span className="kanji">
              願<span className="furigana">ねが</span>
            </span>
            いします。」
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
            「はい、お
            <span className="kanji">
              願<span className="furigana">ねが</span>
            </span>
            いします。」
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

      <div
        id="transportation"
        ref={transportationRef}
        className="travel-section"
      >
        <section>
          <h1>🚆 Transportation</h1>
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
                <td>
                  <span className="kanji">
                    駅<span className="furigana">えき</span>
                  </span>
                  はどこですか？
                </td>
                <td>Eki wa doko desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Where is the bus stop?</td>
                <td>
                  バス
                  <span className="kanji">
                    停<span className="furigana">てい</span>
                  </span>
                  はどこですか？
                </td>
                <td>Basutei wa doko desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Where is the taxi stand?</td>
                <td>
                  タクシー
                  <span className="kanji">
                    乗<span className="furigana">の</span>
                  </span>
                  り
                  <span className="kanji">
                    場<span className="furigana">ば</span>
                  </span>
                  はどこですか？
                </td>
                <td>Takushī noriba wa doko desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Does this train go to ~?</td>
                <td>
                  この
                  <span className="kanji">
                    電車<span className="furigana">でんしゃ</span>
                  </span>
                  は～に
                  <span className="kanji">
                    行<span className="furigana">い</span>
                  </span>
                  きますか？
                </td>
                <td>Kono densha wa ~ ni ikimasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Where is the train going to ~?</td>
                <td>
                  ～
                  <span className="kanji">
                    行<span className="furigana">い</span>
                  </span>
                  きの
                  <span className="kanji">
                    電車<span className="furigana">でんしゃ</span>
                  </span>
                  はどこですか？
                </td>
                <td>~ iki no densha wa doko desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Which platform number?</td>
                <td>
                  <span className="kanji">
                    何<span className="furigana">なん</span>
                  </span>
                  <span className="kanji">
                    番線<span className="furigana">ばんせん</span>
                  </span>
                  ですか？
                </td>
                <td>Nanbansen desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>A ticket, please.</td>
                <td>
                  <span className="kanji">
                    切<span className="furigana">きっ</span>
                  </span>
                  <span className="kanji">
                    符<span className="furigana">ぷ</span>
                  </span>
                  をください。
                </td>
                <td>Kippu o kudasai.</td>
              </tr>
              <tr className="background-white">
                <td>How much is it?</td>
                <td>いくらですか？</td>
                <td>Ikura desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>One-way or round trip?</td>
                <td>
                  <span className="kanji">
                    片<span className="furigana">かた</span>
                  </span>
                  <span className="kanji">
                    道<span className="furigana">みち</span>
                  </span>
                  ですか？
                  <span className="kanji">
                    往<span className="furigana">おう</span>
                  </span>
                  <span className="kanji">
                    復<span className="furigana">ふく</span>
                  </span>
                  ですか？
                </td>
                <td>Katamichi desu ka? Ōfuku desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>A ticket to ~, please.</td>
                <td>
                  ～までの
                  <span className="kanji">
                    切<span className="furigana">きっ</span>
                  </span>
                  <span className="kanji">
                    符<span className="furigana">ぷ</span>
                  </span>
                  をください。
                </td>
                <td>~ made no kippu o kudasai.</td>
              </tr>
              <tr className="background-white">
                <td>Where do I transfer?</td>
                <td>
                  <span className="kanji">
                    乗<span className="furigana">の</span>
                  </span>
                  り
                  <span className="kanji">
                    換<span className="furigana">か</span>
                  </span>
                  えはどこですか？
                </td>
                <td>Norikae wa doko desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Which bus should I take?</td>
                <td>
                  どのバスに
                  <span className="kanji">
                    乗<span className="furigana">の</span>
                  </span>
                  ればいいですか？
                </td>
                <td>Dono basu ni noreba ii desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Where is the timetable?</td>
                <td>
                  <span className="kanji">
                    時<span className="furigana">じ</span>
                  </span>
                  <span className="kanji">
                    刻表<span className="furigana">こくひょう</span>
                  </span>
                  はどこですか？
                </td>
                <td>Jikokuhyō wa doko desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>What time is the next train?</td>
                <td>
                  <span className="kanji">
                    次<span className="furigana">つぎ</span>
                  </span>
                  の
                  <span className="kanji">
                    電車<span className="furigana">でんしゃ</span>
                  </span>
                  は
                  <span className="kanji">
                    何<span className="furigana">なん</span>
                  </span>
                  <span className="kanji">
                    時<span className="furigana">じ</span>
                  </span>
                  ですか？
                </td>
                <td>Tsugi no densha wa nanji desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>What time is the last train?</td>
                <td>
                  <span className="kanji">
                    終電<span className="furigana">しゅうでん</span>
                  </span>
                  は
                  <span className="kanji">
                    何<span className="furigana">なん</span>
                  </span>
                  <span className="kanji">
                    時<span className="furigana">じ</span>
                  </span>
                  ですか？
                </td>
                <td>Shūden wa nanji desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Is it delayed?</td>
                <td>
                  <span className="kanji">
                    遅<span className="furigana">おく</span>
                  </span>
                  れていますか？
                </td>
                <td>Okurete imasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>I will get off here.</td>
                <td>
                  ここで
                  <span className="kanji">
                    降<span className="furigana">お</span>
                  </span>
                  ります。
                </td>
                <td>Koko de orimasu.</td>
              </tr>
              <tr className="background-white">
                <td>Is this ~ station?</td>
                <td>
                  ここは～
                  <span className="kanji">
                    駅<span className="furigana">えき</span>
                  </span>
                  ですか？
                </td>
                <td>Koko wa ~ eki desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>The doors are closing.</td>
                <td>
                  ドアが
                  <span className="kanji">
                    閉<span className="furigana">し</span>
                  </span>
                  まります。
                </td>
                <td>Doa ga shimarimasu.</td>
              </tr>
              <tr className="background-white">
                <td>Next is ~ station.</td>
                <td>
                  <span className="kanji">
                    次<span className="furigana">つぎ</span>
                  </span>
                  は～
                  <span className="kanji">
                    駅<span className="furigana">えき</span>
                  </span>
                  です。
                </td>
                <td>Tsugi wa ~ eki desu.</td>
              </tr>
            </tbody>
          </table>

          <h2>🚉 Buying a Ticket at the Station</h2>
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
            片道でお
            <span className="kanji">
              願<span className="furigana">ねが</span>
            </span>
            いします。
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

      <div id="hotel" ref={hotelRef} className="travel-section">
        <section>
          <h1>🏨 Hotel</h1>
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
                <td>
                  チェックインをお
                  <span className="kanji">
                    願<span className="furigana">ねが</span>
                  </span>
                  いします。
                </td>
                <td>Chekku in o onegai shimasu.</td>
              </tr>
              <tr className="background-white">
                <td>I have a reservation.</td>
                <td>
                  <span className="kanji">
                    予<span className="furigana">よ</span>
                  </span>
                  <span className="kanji">
                    約<span className="furigana">やく</span>
                  </span>
                  しています。
                </td>
                <td>Yoyaku shite imasu.</td>
              </tr>
              <tr className="background-white">
                <td>
                  I don’t have a reservation. Do you have any rooms available?
                </td>
                <td>
                  <span className="kanji">
                    予<span className="furigana">よ</span>
                  </span>
                  <span className="kanji">
                    約<span className="furigana">やく</span>
                  </span>
                  していませんが、
                  <span className="kanji">
                    部<span className="furigana">へ</span>
                  </span>
                  <span className="kanji">
                    屋<span className="furigana">や</span>
                  </span>
                  はありますか？
                </td>
                <td>Yoyaku shite imasen ga, heya wa arimasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>My name is 〇〇.</td>
                <td>
                  <span className="kanji">
                    名<span className="furigana">な</span>
                  </span>
                  <span className="kanji">
                    前<span className="furigana">まえ</span>
                  </span>
                  は〇〇です。
                </td>
                <td>Namae wa 〇〇 desu.</td>
              </tr>
              <tr className="background-white">
                <td>Please show your passport.</td>
                <td>
                  パスポートを
                  <span className="kanji">
                    見<span className="furigana">み</span>
                  </span>
                  せてください。
                </td>
                <td>Pasupōto o misete kudasai.</td>
              </tr>
              <tr className="background-white">
                <td>Is breakfast included?</td>
                <td>
                  <span className="kanji">
                    朝食<span className="furigana">ちょうしょく</span>
                  </span>
                  はついていますか？
                </td>
                <td>Chōshoku wa tsuite imasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>What time is breakfast served?</td>
                <td>
                  何
                  <span className="kanji">
                    時<span className="furigana">じ</span>
                  </span>
                  から
                  <span className="kanji">
                    何<span className="furigana">なん</span>
                  </span>
                  <span className="kanji">
                    時<span className="furigana">じ</span>
                  </span>
                  まで
                  <span className="kanji">
                    朝食<span className="furigana">ちょうしょく</span>
                  </span>
                  を
                  <span className="kanji">
                    食<span className="furigana">た</span>
                  </span>
                  べられますか？
                </td>
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
                <td>
                  Wi-Fiのパスワードを
                  <span className="kanji">
                    教<span className="furigana">おし</span>
                  </span>
                  えてください。
                </td>
                <td>Waifai no pasuwādo o oshiete kudasai.</td>
              </tr>
              <tr className="background-white">
                <td>What time is check-out?</td>
                <td>
                  チェックアウトは
                  <span className="kanji">
                    何<span className="furigana">なん</span>
                  </span>
                  <span className="kanji">
                    時<span className="furigana">じ</span>
                  </span>
                  ですか？
                </td>
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
                <td>
                  <span className="kanji">
                    温<span className="furigana">おん</span>
                  </span>
                  <span className="kanji">
                    泉<span className="furigana">せん</span>
                  </span>
                  はありますか？
                </td>
                <td>Onsen wa arimasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>I lost my key.</td>
                <td>
                  <span className="kanji">
                    鍵<span className="furigana">かぎ</span>
                  </span>
                  をなくしました。
                </td>
                <td>Kagi o nakushimashita.</td>
              </tr>
              <tr className="background-white">
                <td>Please clean my room.</td>
                <td>
                  <span className="kanji">
                    部<span className="furigana">へ</span>
                  </span>
                  <span className="kanji">
                    屋<span className="furigana">や</span>
                  </span>
                  を
                  <span className="kanji">
                    掃<span className="furigana">そう</span>
                  </span>
                  <span className="kanji">
                    除<span className="furigana">じ</span>
                  </span>
                  してください。
                </td>
                <td>Heya o sōji shite kudasai.</td>
              </tr>
              <tr className="background-white">
                <td>The air conditioner isn’t working.</td>
                <td>
                  エアコンが
                  <span className="kanji">
                    動<span className="furigana">うご</span>
                  </span>
                  きません。
                </td>
                <td>Eakon ga ugokimasen.</td>
              </tr>
              <tr className="background-white">
                <td>There’s no hot water.</td>
                <td>
                  お
                  <span className="kanji">
                    湯<span className="furigana">ゆ</span>
                  </span>
                  が
                  <span className="kanji">
                    出<span className="furigana">で</span>
                  </span>
                  ません。
                </td>
                <td>Oyu ga demasen.</td>
              </tr>
              <tr className="background-white">
                <td>Please give me one more towel.</td>
                <td>
                  タオルをもう
                  <span className="kanji">
                    一<span className="furigana">いち</span>
                  </span>
                  <span className="kanji">
                    枚<span className="furigana">まい</span>
                  </span>
                  ください。
                </td>
                <td>Tauru o mō ichimai kudasai.</td>
              </tr>
            </tbody>
          </table>

          <h2>🛎️ Check-in Conversation</h2>
          <p className="tab">
            👤 You:
            <br />
            「チェックインをお
            <span className="kanji">
              願<span className="furigana">ねが</span>
            </span>
            いします。」
            <br />
            <i>Chekku in o onegai shimasu.</i>
            <br />
            <i>I’d like to check in.</i>
          </p>
          <p className="tab">
            💁 Hotel Staff:
            <br />
            「お名前をお
            <span className="kanji">
              願<span className="furigana">ねが</span>
            </span>
            いします。」
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
            「チェックアウトをお
            <span className="kanji">
              願<span className="furigana">ねが</span>
            </span>
            いします。」
            <br />
            <i>Chekku auto o onegai shimasu.</i>
            <br />
            <i>I’d like to check out.</i>
          </p>
          <p className="tab">
            💁 Hotel Staff:
            <br />
            「かしこまりました。お部屋の鍵をお
            <span className="kanji">
              願<span className="furigana">ねが</span>
            </span>
            いします。」
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

      <div id="restaurant" ref={restaurantRef} className="travel-section">
        <section>
          <h1>🍽️ Restaurant</h1>
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
                <td>
                  <span className="kanji">
                    何<span className="furigana">なん</span>
                  </span>
                  <span className="kanji">
                    名<span className="furigana">めい</span>
                  </span>
                  <span className="kanji">
                    様<span className="furigana">さま</span>
                  </span>
                  ですか？
                </td>
                <td>Nanmei-sama desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>I’m alone.</td>
                <td>
                  <span className="kanji">
                    一<span className="furigana">ひと</span>
                  </span>
                  <span className="kanji">
                    人<span className="furigana">り</span>
                  </span>
                  です。
                </td>
                <td>Hitori desu.</td>
              </tr>
              <tr className="background-white">
                <td>We are two people.</td>
                <td>
                  <span className="kanji">
                    二<span className="furigana">ふた</span>
                  </span>
                  <span className="kanji">
                    人<span className="furigana">り</span>
                  </span>
                  です。
                </td>
                <td>Futari desu.</td>
              </tr>
              <tr className="background-white">
                <td>Would you like a non-smoking or smoking seat?</td>
                <td>
                  <span className="kanji">
                    禁<span className="furigana">きん</span>
                  </span>
                  <span className="kanji">
                    煙<span className="furigana">えん</span>
                  </span>
                  <span className="kanji">
                    席<span className="furigana">せき</span>
                  </span>
                  と
                  <span className="kanji">
                    喫<span className="furigana">きつ</span>
                  </span>
                  <span className="kanji">
                    煙<span className="furigana">えん</span>
                  </span>
                  <span className="kanji">
                    席<span className="furigana">せき</span>
                  </span>
                  、どちらがよろしいですか？
                </td>
                <td>
                  Kinen seki to kitsuen seki, dochira ga yoroshii desu ka?
                </td>
              </tr>
              <tr className="background-white">
                <td>A non-smoking seat, please.</td>
                <td>
                  <span className="kanji">
                    禁<span className="furigana">きん</span>
                  </span>
                  <span className="kanji">
                    煙<span className="furigana">えん</span>
                  </span>
                  <span className="kanji">
                    席<span className="furigana">せき</span>
                  </span>
                  をお
                  <span className="kanji">
                    願<span className="furigana">ねが</span>
                  </span>
                  いします。
                </td>
                <td>Kinen seki o onegai shimasu.</td>
              </tr>
              <tr className="background-white">
                <td>I have a reservation. My name is 〇〇.</td>
                <td>
                  <span className="kanji">
                    予<span className="furigana">よ</span>
                  </span>
                  <span className="kanji">
                    約<span className="furigana">やく</span>
                  </span>
                  しています。
                  <span className="kanji">
                    名<span className="furigana">な</span>
                  </span>
                  <span className="kanji">
                    前<span className="furigana">まえ</span>
                  </span>
                  は〇〇です。
                </td>
                <td>Yoyaku shite imasu. Namae wa 〇〇 desu.</td>
              </tr>
              <tr className="background-white">
                <td>
                  I don’t have a reservation. Do you have a table available?
                </td>
                <td>
                  <span className="kanji">
                    予<span className="furigana">よ</span>
                  </span>
                  <span className="kanji">
                    約<span className="furigana">やく</span>
                  </span>
                  していませんが、
                  <span className="kanji">
                    席<span className="furigana">せき</span>
                  </span>
                  はありますか？
                </td>
                <td>Yoyaku shite imasen ga, seki wa arimasu ka?</td>
              </tr>
              <tr>
                <td colSpan={3} className="background-grey table-text-center">
                  Ordering Food & Drinks
                </td>
              </tr>
              <tr className="background-white">
                <td>The menu, please.</td>
                <td>
                  メニューをお
                  <span className="kanji">
                    願<span className="furigana">ねが</span>
                  </span>
                  いします。
                </td>
                <td>Menyū o onegai shimasu.</td>
              </tr>
              <tr className="background-white">
                <td>What do you recommend?</td>
                <td>
                  おすすめは
                  <span className="kanji">
                    何<span className="furigana">なん</span>
                  </span>
                  ですか？
                </td>
                <td>Osusume wa nan desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Excuse me, I’d like to order.</td>
                <td>
                  すみません、
                  <span className="kanji">
                    注文<span className="furigana">ちゅうもん</span>
                  </span>
                  をお
                  <span className="kanji">
                    願<span className="furigana">ねが</span>
                  </span>
                  いします。
                </td>
                <td>Sumimasen, chūmon o onegai shimasu.</td>
              </tr>
              <tr className="background-white">
                <td>I’ll have this. (Pointing at the menu)</td>
                <td>これをください。</td>
                <td>Kore o kudasai.</td>
              </tr>
              <tr className="background-white">
                <td>I’d like to order 〇〇.</td>
                <td>
                  〇〇をお
                  <span className="kanji">
                    願<span className="furigana">ねが</span>
                  </span>
                  いします。
                </td>
                <td>〇〇 o onegai shimasu.</td>
              </tr>
              <tr className="background-white">
                <td>What drinks do you have?</td>
                <td>
                  <span className="kanji">
                    飲<span className="furigana">の</span>
                  </span>
                  み
                  <span className="kanji">
                    物<span className="furigana">もの</span>
                  </span>
                  は
                  <span className="kanji">
                    何<span className="furigana">なに</span>
                  </span>
                  がありますか？
                </td>
                <td>Nomimono wa nani ga arimasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Water, please.</td>
                <td>
                  お
                  <span className="kanji">
                    水<span className="furigana">みず</span>
                  </span>
                  をください。
                </td>
                <td>O-mizu o kudasai.</td>
              </tr>
              <tr className="background-white">
                <td>One beer, please.</td>
                <td>
                  ビールを
                  <span className="kanji">
                    一<span className="furigana">いっ</span>
                  </span>
                  <span className="kanji">
                    本<span className="furigana">ぽん</span>
                  </span>
                  ください。
                </td>
                <td>Bīru o ippon kudasai.</td>
              </tr>
              <tr>
                <td colSpan={3} className="background-grey table-text-center">
                  Dietary Restrictions & Special Requests
                </td>
              </tr>
              <tr className="background-white">
                <td>I can’t eat 〇〇.</td>
                <td>
                  〇〇は
                  <span className="kanji">
                    食<span className="furigana">たた</span>
                  </span>
                  べられません。
                </td>
                <td>〇〇 wa taberaremasen.</td>
              </tr>
              <tr className="background-white">
                <td>Please make it not spicy.</td>
                <td>
                  <span className="kanji">
                    辛<span className="furigana">から</span>
                  </span>
                  くしないでください。
                </td>
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
                <td>
                  すみません、お
                  <span className="kanji">
                    箸<span className="furigana">はし</span>
                  </span>
                  をください。
                </td>
                <td>Sumimasen, o-hashi o kudasai.</td>
              </tr>
              <tr className="background-white">
                <td>This is very delicious!</td>
                <td>
                  とても
                  <span className="kanji">
                    美味<span className="furigana">おい</span>
                  </span>
                  しいです！
                </td>
                <td>Totemo oishii desu!</td>
              </tr>
              <tr className="background-white">
                <td>Please give me a little more time.</td>
                <td>
                  もう
                  <span className="kanji">
                    少<span className="furigana">そこ</span>
                  </span>
                  し
                  <span className="kanji">
                    時<span className="furigana">じ</span>
                  </span>
                  <span className="kanji">
                    間<span className="furigana">かん</span>
                  </span>
                  をください。
                </td>
                <td>Mō sukoshi jikan o kudasai.</td>
              </tr>
              <tr>
                <td colSpan={3} className="background-grey table-text-center">
                  Paying the Bill & Leaving
                </td>
              </tr>
              <tr className="background-white">
                <td>The bill, please.</td>
                <td>
                  お
                  <span className="kanji">
                    会<span className="furigana">かい</span>
                  </span>
                  <span className="kanji">
                    計<span className="furigana">けい</span>
                  </span>
                  をお
                  <span className="kanji">
                    願<span className="furigana">ねが</span>
                  </span>
                  いします。
                </td>
                <td>O-kaikei o onegai shimasu.</td>
              </tr>
              <tr className="background-white">
                <td>Please split the bill.</td>
                <td>
                  <span className="kanji">
                    別々<span className="furigana">べつべつ</span>
                  </span>
                  にお
                  <span className="kanji">
                    願<span className="furigana">ねが</span>
                  </span>
                  いします。
                </td>
                <td>Betsubetsu ni onegai shimasu.</td>
              </tr>
              <tr className="background-white">
                <td>Do you accept credit cards?</td>
                <td>
                  カードは
                  <span className="kanji">
                    使<span className="furigana">つか</span>
                  </span>
                  えますか？
                </td>
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
            「いらっしゃいませ！
            <span className="kanji">
              何<span className="furigana">なん</span>
            </span>
            <span className="kanji">
              名<span className="furigana">めい</span>
            </span>
            <span className="kanji">
              様<span className="furigana">さま</span>
            </span>
            ですか？」
            <br />
            <i>Irasshaimase! Nanmei-sama desu ka?</i>
            <br />
            <i>Welcome! How many people?</i>
          </p>
          <p className="tab">
            👤 Customer:
            <br />「
            <span className="kanji">
              二人<span className="furigana">ふたり</span>
            </span>
            です。」
            <br />
            <i>Futari desu.</i>
            <br />
            <i>Two people.</i>
          </p>
          <p className="tab">
            💁 Staff:
            <br />
            「かしこまりました」
            <br />
            <i>Kashikomarimashita</i>
            <br />
            <i>Certainly.</i>
          </p>
          <p className="tab">
            💁 Staff:
            <br />
            「テーブルせきと、カワンターせき、どちらはよろしいですか？」
            <br />
            <i>Teeburu seki to kauntaa seki, dochira ga yoroshii desu ka?</i>
            <br />
            <i>Table seats or counter seat, which which one would you like?</i>
          </p>
          <p className="tab">
            👤 Customer:
            <br />
            「テーブルせきで。」
            <br />
            <i>Teeburu seki de.</i>
            <br />
            <i>Table seat please.</i>
          </p>
          <p className="tab">
            💁 Staff:
            <br />「
            <span className="kanji">
              禁煙<span className="furigana">きんえん</span>
            </span>
            <span className="kanji">
              席<span className="furigana">せき</span>
            </span>
            と
            <span className="kanji">
              喫煙<span className="furigana">きつえん</span>
            </span>
            <span className="kanji">
              席<span className="furigana">せき</span>
            </span>
            、どちらがよろしいですか？」
            <br />
            <i>Kinen seki to kitsuen seki, dochira ga yoroshii desu ka?</i>
            <br />
            <i>Non-smoking or smoking section?</i>
          </p>
          <p className="tab">
            👤 Customer:
            <br />「
            <span className="kanji">
              禁煙<span className="furigana">きんえん</span>
            </span>
            <span className="kanji">
              席<span className="furigana">せき</span>
            </span>
            をお
            <span className="kanji">
              願<span className="furigana">ねが</span>
            </span>
            いします。」
            <br />
            <i>Kinen seki o onegai shimasu.</i>
            <br />
            <i>Non-smoking, please.</i>
          </p>
          <p className="tab">
            💁 Staff:
            <br />
            「ご
            <span className="kanji">
              案<span className="furigana">あん</span>
            </span>
            <span className="kanji">
              内<span className="furigana">ない</span>
            </span>
            いたします。どうぞ。」
            <br />
            <i>Goannai itashimasu. Dōzo.</i>
            <br />
            <i>I'll guide you. This way please.</i>
          </p>

          <h2>📜 Ordering Food</h2>
          <p className="tab">
            💁 Staff:
            <br />
            「ご
            <span className="kanji">
              注文<span className="furigana">ちゅうもん</span>
            </span>
            お
            <span className="kanji">
              決<span className="furigana">き</span>
            </span>
            まりになりましたらお
            <span className="kanji">
              伺い<span className="furigana">うかがい</span>
            </span>
            いたします。」
            <br />
            <i>Gochuumon okimari ni narimashitara oukagai itashimasu.</i>
            <br />
            <i>I'll come take your order once you decided.</i>
          </p>
          <p className="tab">
            👤 Customer:
            <br />
            「すみません、
            <span className="kanji">
              注文<span className="furigana">ちゅうもん</span>
            </span>
            をお
            <span className="kanji">
              願<span className="furigana">ねが</span>
            </span>
            いします。」
            <br />
            <i>Sumimasen, chūmon o onegaishimasu.</i>
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
            <br />「
            <span className="kanji">
              以上<span className="furigana">いじょう</span>
            </span>
            でよろしいですか？」
            <br />
            <i>Ijoo de yoroshii desu ka?</i>
            <br />
            <i>Is that all?</i>
          </p>
          <p className="tab">
            👤 (Customer):
            <br />
            「はい。」
            <br />
            <i>Hai.</i>
            <br />
            <i>Yes.</i>
          </p>
          <p className="tab">
            💁 Staff:
            <br />
            「かしこまりました。
            <span className="kanji">
              失礼致<span className="furigana">しつれいいた</span>
            </span>
            します。」
            <br />
            <i>Kashikomarimashita. Shiturei itashi masu.</i>
            <br />
            <i>Certainly. Excuse me.</i>
          </p>

          <h2>🍱 Ordering Multiple Set Meals</h2>
          <p className="tab">
            💁 Staff:
            <br />
            「ご
            <span className="kanji">
              注文<span className="furigana">ちゅうもん</span>
            </span>
            はお
            <span className="kanji">
              決<span className="furigana">き</span>
            </span>
            まりですか？」
            <br />
            <i>Gochūmon wa okimari desu ka?</i>
            <br />
            <i>Have you decided on your order?</i>
          </p>
          <p className="tab">
            👤 Customer:
            <br />
            「はい、
            <span className="kanji">
              四<span className="furigana">よん</span>
            </span>
            <span className="kanji">
              番<span className="furigana">ばん</span>
            </span>
            のセットを
            <span className="kanji">
              三つ<span className="furigana">みっつ</span>
            </span>
            と、
            <span className="kanji">
              緑茶<span className="furigana">りょくちゃ</span>
            </span>
            を
            <span className="kanji">
              三つ<span className="furigana">みっつ</span>
            </span>
            お
            <span className="kanji">
              願<span className="furigana">ねが</span>
            </span>
            いします。」
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
            「かしこまりました。お
            <span className="kanji">
              飲<span className="furigana">の</span>
            </span>
            み
            <span className="kanji">
              物<span className="furigana">もの</span>
            </span>
            は、
            <span className="kanji">
              緑茶<span className="furigana">りょくちゃ</span>
            </span>
            <span className="kanji">
              三つ<span className="furigana">みっつ</span>
            </span>
            でよろしいですか？」
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
            「はい、お
            <span className="kanji">
              願<span className="furigana">ねが</span>
            </span>
            いします。」
            <br />
            <i>Hai, onegai shimasu.</i>
            <br />
            <i>Yes, please.</i>
          </p>
          <p className="tab">
            💁 Staff:
            <br />
            「ありがとうございます。
            <span className="kanji">
              少々<span className="furigana">しょうしょう</span>
            </span>
            お
            <span className="kanji">
              待<span className="furigana">ま</span>
            </span>
            ちください。」
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
            「お
            <span className="kanji">
              茶<span className="furigana">ちゃ</span>
            </span>
            （または お
            <span className="kanji">
              水<span className="furigana">みず</span>
            </span>
            ）のおかわりをお
            <span className="kanji">
              願<span className="furigana">ねが</span>
            </span>
            いします。」
            <br />
            <i>Ocha [mata wa omizu] no okawari o onegai shimasu.</i>
            <br />
            <i>Can I have a refill of tea (or water), please?</i>
          </p>
          <p className="tab">
            👤 Customer:
            <br />
            「ご
            <span className="kanji">
              飯<span className="furigana">はん</span>
            </span>
            のおかわりをお
            <span className="kanji">
              願<span className="furigana">ねが</span>
            </span>
            いします。」
            <br />
            <i>Gohan no okawari o onegai shimasu.</i>
            <br />
            <i>Can I have a refill of rice, please?</i>
          </p>
          <p className="tab">
            👤 Customer:
            <br />
            「ご
            <span className="kanji">
              飯<span className="furigana">はん</span>
            </span>
            はおかわり
            <span className="kanji">
              無料<span className="furigana">むりょう</span>
            </span>
            ですか？」
            <br />
            <i>Gohan wa okawari muryō desu ka?</i>
            <br />
            <i>
              Are rice refills free? (Some restaurants offer free rice refills)
            </i>
          </p>
          <p className="tab">
            👤 Customer:
            <br />「
            <span className="kanji">
              替<span className="furigana">か</span>
            </span>
            え
            <span className="kanji">
              玉<span className="furigana">だま</span>
            </span>
            をお
            <span className="kanji">
              願<span className="furigana">ねが</span>
            </span>
            いします。」
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
            「お
            <span className="kanji">
              会計<span className="furigana">かいけい</span>
            </span>
            をお
            <span className="kanji">
              願<span className="furigana">ねが</span>
            </span>
            いします。」
            <br />
            <i>O-kaikei o onegai shimasu.</i>
            <br />
            <i>The bill, please.</i>
          </p>
          <p className="tab">
            💁 Staff:
            <br />
            「はい、〇〇
            <span className="kanji">
              円<span className="furigana">えん</span>
            </span>
            になります。」
            <br />
            <i>Hai, 〇〇-en ni narimasu.</i>
            <br />
            <i>Sure, it will be 〇〇 yen.</i>
          </p>
          <p className="tab">
            👤 Customer:
            <br />
            「カードは
            <span className="kanji">
              使<span className="furigana">つか</span>
            </span>
            えますか？」
            <br />
            <i>Kādo wa tsukaemasu ka?</i>
            <br />
            <i>Can I use a credit card?</i>
          </p>
          <p className="tab">
            💁 Staff:
            <br />
            「はい、
            <span className="kanji">
              使<span className="furigana">つか</span>
            </span>
            えます。」
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

      <div id="shopping" ref={shoppingRef} className="travel-section">
        <section>
          <h1>🛍️ Shopping</h1>
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
                <td>
                  <span className="kanji">
                    何<span className="furigana">なに</span>
                  </span>
                  かお
                  <span className="kanji">
                    探<span className="furigana">さが</span>
                  </span>
                  しですか？
                </td>
                <td>Nanika osagashi desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>I'm just looking.</td>
                <td>
                  <span className="kanji">
                    見<span className="furigana">み</span>
                  </span>
                  ているだけです。
                </td>
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
                <td>
                  これの
                  <span className="kanji">
                    色<span className="furigana">いろ</span>
                  </span>
                  <span className="kanji">
                    違<span className="furigana">ちが</span>
                  </span>
                  いはありますか？
                </td>
                <td>Kore no iro chigai wa arimasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Do you have a larger size?</td>
                <td>
                  もっと
                  <span className="kanji">
                    大<span className="furigana">おお</span>
                  </span>
                  きいサイズはありますか？
                </td>
                <td>Motto ōkii saizu wa arimasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Can I try this on?</td>
                <td>
                  <span className="kanji">
                    試着<span className="furigana">しちゃく</span>
                  </span>
                  できますか？
                </td>
                <td>Shichaku dekimasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Do you have other designs?</td>
                <td>
                  <span className="kanji">
                    他<span className="furigana">ほか</span>
                  </span>
                  のデザインはありますか？
                </td>
                <td>Hoka no dezain wa arimasu ka?</td>
              </tr>

              <tr>
                <td colSpan={3} className="background-grey table-text-center">
                  Discounts & Payments
                </td>
              </tr>
              <tr className="background-white">
                <td>Is this on sale?</td>
                <td>
                  これはセール
                  <span className="kanji">
                    中<span className="furigana">ちゅう</span>
                  </span>
                  ですか？
                </td>
                <td>Kore wa seeru-chū desu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Do you offer discounts?</td>
                <td>
                  <span className="kanji">
                    割引<span className="furigana">わりびき</span>
                  </span>
                  はありますか？
                </td>
                <td>Waribiki wa arimasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Can I pay by card?</td>
                <td>
                  カードで
                  <span className="kanji">
                    払<span className="furigana">はら</span>
                  </span>
                  えますか？
                </td>
                <td>Kaado de haraemasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>We only accept cash.</td>
                <td>
                  <span className="kanji">
                    現金<span className="furigana">げんきん</span>
                  </span>
                  のみです。
                </td>
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
                <td>
                  <span className="kanji">
                    袋<span className="furigana">ふくろ</span>
                  </span>
                  はいりますか？
                </td>
                <td>Fukuro wa irimasu ka?</td>
              </tr>
              <tr className="background-white">
                <td>Please give me a receipt.</td>
                <td>レシートをください。</td>
                <td>Reshīto o kudasai.</td>
              </tr>
              <tr className="background-white">
                <td>Please come again!</td>
                <td>
                  またお
                  <span className="kanji">
                    越<span className="furigana">こ</span>
                  </span>
                  しくださいませ！
                </td>
                <td>Mata okoshi kudasaimase!</td>
              </tr>
            </tbody>
          </table>
          <h2>🏪 At a Convenience Store</h2>
          <p className="tab">
            💁Store Staff:
            <br />
            「あたためまづか？」
            <br />
            <i>Atatame masuka?</i>
            <br />
            <i>Do you want to warm it up?</i>
          </p>
          <p className="tab">
            👤 You:
            <br />
            「はい、お
            <span className="kanji">
              願<span className="furigana">ねが</span>
            </span>
            いします。」
            <br />
            <i>Hai, onegai shimasu.</i>
            <br />
            <i>Yes, please.</i>
          </p>
          <p className="tab">
            💁 Store Staff:
            <br />
            「おはしおつけしますか？」
            <br />
            <i>Ohashi otsuke shimasu ka?</i>
            <br />
            <i>May I add chopsticks?</i>
          </p>
          <p className="tab">
            👤 You:
            <br />
            「お
            <span className="kanji">
              願<span className="furigana">ねが</span>
            </span>
            いします。」
            <br />
            <i>Onegai shimasu.</i>
            <br />
            <i>Please.</i>
          </p>
          <p className="tab">
            💁 Store Staff:
            <br />
            「おしぼりおつけしますか？」
            <br />
            <i>Oshibori otsuke shimasu ka?</i>
            <br />
            <i>May I add wet tissue?</i>
          </p>
          <p className="tab">
            👤 You:
            <br />
            「はい」
            <br />
            <i>Hai.</i>
            <br />
            <i>Yes.</i>
          </p>
          <p className="tab">
            💁 Store Staff:
            <br />
            「ポイントカードわおもちですか？」
            <br />
            <i>Pointo kaado wa omochi desu ka?</i>
            <br />
            <i>Do you have point card? (rewards card)</i>
          </p>
          <p className="tab">
            👤 You:
            <br />
            「いいえ
            <span className="kanji">
              大丈夫<span className="furigana">だいじょうぶ</span>
            </span>
            です」
            <br />
            <i>Iie daijoubu desu</i>
            <br />
            <i>No, it's okay.</i>
          </p>
          <p className="tab">
            💁 Store Staff:
            <br />「
            <span className="kanji">
              袋<span className="furigana">ふくろ</span>
            </span>
            はごいりょうですか?」
            <br />
            <i>Fukuro wa goiriyou desuka?</i>
            <br />
            <i>Do you need a bag?</i>
          </p>
          <p className="tab">
            👤 You:
            <br />「
            <span className="kanji">
              大丈夫<span className="furigana">だいじょうぶ</span>
            </span>
            です」
            <br />
            <i>Daijoubu desu</i>
            <br />
            <i>It's okay.</i>
          </p>
          <p className="tab">
            💁 Store Staff:
            <br />
            「レシートはごいりょうですか？」
            <br />
            <i>Reshiito wa goiriyou desuka?</i>
            <br />
            <i>Do you need a receipt?</i>
          </p>
          <p className="tab">
            👤 You:
            <br />「
            <span className="kanji">
              大丈夫<span className="furigana">だいじょうぶ</span>
            </span>
            です」
            <br />
            <i>Daijoubu desu</i>
            <br />
            <i>It's okay.</i>
          </p>

          <h2>🏬 At a Clothing Store</h2>
          <p className="tab">
            👩 Customer:
            <br />
            「すみません、
            <span className="kanji">
              試着<span className="furigana">しちゃく</span>
            </span>
            できますか？」
            <br />
            <i>Sumimasen, shichaku dekimasu ka?</i>
            <br />
            <i>Excuse me, can I try this on?</i>
          </p>
          <p className="tab">
            🏪 Store Staff:
            <br />
            「はい、
            <span className="kanji">
              試着<span className="furigana">しちゃく</span>
            </span>
            <span className="kanji">
              室<span className="furigana">しつ</span>
            </span>
            はあちらです。」
            <br />
            <i>Hai, shichakushitsu wa achira desu.</i>
            <br />
            <i>Yes, the fitting room is over there.</i>
          </p>
          <p className="tab">
            👩 Customer:
            <br />
            「もう
            <span className="kanji">
              少<span className="furigana">すこ</span>
            </span>
            し
            <span className="kanji">
              大<span className="furigana">おお</span>
            </span>
            きいサイズはありますか？」
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
            <br />「
            <span className="kanji">
              袋<span className="furigana">ふくる</span>
            </span>
            はいりますか？」
            <br />
            <i>Fukuro wa irimasu ka?</i>
            <br />
            <i>Do you need a bag?</i>
          </p>
          <p className="tab">
            👩 Customer:
            <br />
            「はい、お
            <span className="kanji">
              願<span className="furigana">ねが</span>
            </span>
            いします。」
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

      <div id="numbers" ref={numbersRef} className="travel-section">
        <section>
          <h1>🔢 Numbers</h1>
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
              👉{" "}
              <span className="kanji">
                全部<span className="furigana">ぜんぶ</span>
              </span>
              で さんぜんにひゃくえん です。 (Zenbu de sanzen nihyaku en desu.)
            </span>
            <li>I’ll pay with a 10,000 yen bill.</li>
            <span>
              👉{" "}
              <span className="kanji">
                一万<span className="furigana">いちまん</span>
              </span>
              <span className="kanji">
                円札<span className="furigana">えんさつ</span>
              </span>
              で{" "}
              <span className="kanji">
                払<span className="furigana">はら</span>
              </span>
              います。 (Ichiman en satsu de haraimasu.)
            </span>
            <li>Do you accept credit cards?</li>
            <span>
              👉 クレジットカードは{" "}
              <span className="kanji">
                使<span className="furigana">つか</span>
              </span>
              えますか？ (Kurejitto kaado wa tsukaemasu ka?)
            </span>
          </ol>

          <h2>🍽️ Using Numbers in Restaurants</h2>
          <ol className="indent">
            <li>Table for three, please.</li>
            <span>
              👉{" "}
              <span className="kanji">
                三人<span className="furigana">さんにん</span>
              </span>{" "}
              です。 (San-nin desu.)
            </span>
            <li>I'd like to order two of the number 4 set meals.</li>
            <span>
              👉{" "}
              <span className="kanji">
                4番<span className="furigana">よんばん</span>
              </span>
              のセットを
              <span className="kanji">
                二つ<span className="furigana">ふたつ</span>
              </span>
              ください。 (Yon-ban no setto o futatsu kudasai.)
            </span>
            <li>Can I get one more glass of water?</li>
            <span>
              👉 お
              <span className="kanji">
                水<span className="furigana">みず</span>
              </span>
              を もう
              <span className="kanji">
                一杯<span className="furigana">いっぱい</span>
              </span>{" "}
              ください。 (Omizu o mou ippai kudasai.)
            </span>
            <li>Check, please.</li>
            <span>
              👉 お
              <span className="kanji">
                会計<span className="furigana">かいけい</span>
              </span>
              を お
              <span className="kanji">
                願<span className="furigana">ねが</span>
              </span>
              いします。 (Okaikei o onegai shimasu.)
            </span>
            <li>That costs 2,580 yen.</li>
            <span>
              👉{" "}
              <span className="kanji">
                二千<span className="furigana">にせん</span>
              </span>
              <span className="kanji">
                五百<span className="furigana">ごひゃく</span>
              </span>
              <span className="kanji">
                八十<span className="furigana">はちじゅう</span>
              </span>
              <span className="kanji">
                円<span className="furigana">えん</span>
              </span>{" "}
              です。 (Nisen gohyaku hachijuu en desu.)
            </span>
          </ol>

          <h2>🚆 Using Numbers in Transportation</h2>
          <ol className="indent">
            <li>I’d like one ticket to Tokyo.</li>
            <span>
              👉{" "}
              <span className="kanji">
                東京<span className="furigana">ときょう</span>
              </span>
              までの{" "}
              <span className="kanji">
                切符<span className="furigana">きっぷ</span>
              </span>
              を
              <span className="kanji">
                一枚<span className="furigana">いちまい</span>
              </span>
              ください。 (Tokyo made no kippu o ichimai kudasai.)
            </span>
            <li>What platform is train number 7 on?</li>
            <span>
              👉{" "}
              <span className="kanji">
                7番線<span className="furigana">ななばんせん</span>
              </span>{" "}
              はどこですか？ (Nanaban-sen wa doko desu ka?)
            </span>
            <li>The next train arrives at 3:45 PM.</li>
            <span>
              👉{" "}
              <span className="kanji">
                次<span className="furigana">つぎ</span>
              </span>
              の
              <span className="kanji">
                電車<span className="furigana">でんしゃ</span>
              </span>
              は{" "}
              <span className="kanji">
                午後<span className="furigana">ごご</span>
              </span>
              <span className="kanji">
                三時<span className="furigana">さんじ</span>
              </span>
              <span className="kanji">
                四十<span className="furigana">よんじゅう</span>
              </span>
              <span className="kanji">
                五分<span className="furigana">ごふん</span>
              </span>{" "}
              です。 (Tsugi no densha wa gogo sanji yonjuu gofun desu.)
            </span>
            <li>I want to take the 9:00 AM bus.</li>
            <span>
              👉{" "}
              <span className="kanji">
                午前<span className="furigana">ごぜん</span>
              </span>
              <span className="kanji">
                九時<span className="furigana">くうじ</span>
              </span>{" "}
              のバスに
              <span className="kanji">
                乗<span className="furigana">の</span>
              </span>
              りたいです。 (Gozen kuji no basu ni noritai desu.)
            </span>
            <li>Does this train stop at Kyoto?</li>
            <span>
              👉 この
              <span className="kanji">
                電車<span className="furigana">でんしゃ</span>
              </span>
              は{" "}
              <span className="kanji">
                京都<span className="furigana">きょうと</span>
              </span>
              に
              <span className="kanji">
                止<span className="furigana">と</span>
              </span>
              まりますか？ (Kono densha wa Kyoto ni tomarimasu ka?)
            </span>
          </ol>

          <h2>🏨 Using Numbers in Hotels</h2>
          <ol className="indent">
            <li>I have a reservation for two nights.</li>
            <span>
              👉{" "}
              <span className="kanji">
                二泊<span className="furigana">にはく</span>
              </span>{" "}
              の
              <span className="kanji">
                予約<span className="furigana">よやく</span>
              </span>
              があります。 (Nihaku no yoyaku ga arimasu.)
            </span>
            <li>The room number is 305.</li>
            <span>
              👉{" "}
              <span className="kanji">
                部屋番号<span className="furigana">へやばんごう</span>
              </span>
              は 305 です。 (Heya bangou wa sanmarugo desu.)
            </span>
            <li>Check-out is at 11:00 AM.</li>
            <span>
              👉 チェックアウトは{" "}
              <span className="kanji">
                午前<span className="furigana">ごぜん</span>
              </span>
              <span className="kanji">
                十一時<span className="furigana">じゅういちじ</span>
              </span>{" "}
              です。 (Chekkuauto wa gozen juuichiji desu.)
            </span>
            <li>Can I get two extra towels?</li>
            <span>
              👉 タオルを{" "}
              <span className="kanji">
                二枚<span className="furigana">にまい</span>
              </span>{" "}
              <span className="kanji">
                追加<span className="furigana">ついか</span>
              </span>
              できますか？ (Tauru o nimai tsuika dekimasu ka?)
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
