const lessons = [
  {
    title: "Lesson 1: あたらしいともだち (New Friends)",
    path: "/lesson1",
    sections: [
      {
        number: "1.1",
        title: "X は Y です",
        id: "section1",
        content:
          "1.1, XはYです, topic particle, です, it is, noun structure, basic Japanese sentence structure" +
          "wa ha desu",
      },
      {
        number: "1.2",
        title: "Question Sentences",
        id: "section2",
        content:
          "1.2, question sentences, ですか, ka particle, なんですか, nan desu ka, nandesuka what is it",
      },
      {
        number: "1.3",
        title: "Noun1 の Noun2",
        id: "section3",
        content:
          "1.3, Noun1 の Noun2, Noun の Noun, possessive, の particle, of X, of Y, noun connection, connects two noun" +
          "Similar to Chinese 的",
      },
    ],
  },
  {
    title: "Lesson 2: かいもの (Shopping)",
    path: "/lesson2",
    sections: [
      {
        number: "2.1",
        title: "これ / それ / あれ / どれ",
        id: "section1",
        content:
          "2.1, これ / それ / あれ / どれ, this, that, that one over there, which one" +
          "kore sore are dore",
      },
      {
        number: "2.2",
        title: "この / その / あの / どの + Noun",
        id: "section2",
        content:
          "2.2, この / その / あの / どの + Noun, this thing, that thing, that thing over there, which thing" +
          "Unlike the previous section, kono, sono, ano, and dono has to be placed before a noun and cannot stand alone. kono sono ano dono" +
          "Can be used in reference to people, unlike kore, sore, and are, which is considered impolite.",
      },
      {
        number: "2.3",
        title: "ここ / そこ / あそこ / どこ",
        id: "section3",
        content:
          "2.3, ここ / そこ / あそこ / どこ, words for places, here, near me, there, near you, over there, where" +
          "koko soko asoko doko",
      },
      {
        number: "2.4",
        title: "だれの Noun",
        id: "section4",
        content:
          "2.4, How to ask who something belongs to, who, whose (with the posessive term no)" +
          "これはだれのかばんですか Kore wa dare no kaban desu ka." +
          "dare dareno korewadarenokabandesuka",
      },
      {
        number: "2.5",
        title: "Noun も",
        id: "section5",
        content:
          "2.5, Noun も, The particle for the word too, mo directly after, A は X です。 (A is X.), B も X です。 (B too is X.)" +
          "wa ha mo",
      },
      {
        number: "2.6",
        title: "Noun じゃないです",
        id: "section6",
        content:
          "2.6, Noun じゃないです, negate a statement, you replace desu with ja nai desu" +
          "A は X じゃないです。 (A is not X.), Ja nai desu is colloquial (used in ordinary or familiar conversations)" +
          "じゃ is a contraction of de wa, A は X じゃありません (more formal speech style), A は Xでわありません (formal for writing)" +
          "ja jiya janaidesu",
      },
      {
        number: "2.7",
        title: "～ね / ～よ",
        id: "section7",
        content:
          "2.7, ～ね / ～よ, end with sentence enders with the tags ne or yo, You use ね (ne) if you are seeking the listener's confirmation or agreement." +
          "A は X ですね。(A is X right?), B は Y ですね。(B is Y isn't it?)",
      },
    ],
  },
  {
    title: "Lesson 3: デートの約束 (Making a Date)",
    path: "/lesson3",
    sections: [
      {
        number: "3.1",
        title: "Verb Conjugation",
        id: "section1",
        content:
          "3.1, Verb Conjugation, Conjugate dictionary words to their verb form. For example, the word eat can be conjugated to to eat. Ru-verbs are sounds that ends with eru or iru." +
          "Replace ru with masu (affirmative) or masen (negative). Ru-verbs Dictionary Form	Present, Affirmative	Present, Negative" +
          "食べる (taberu)	食べます (tabemasu)	食べません (tabemasen)" +
          "見る (miru)	見ます (mimasu)	見ません (mimasen)" +
          "寝る (neru)	寝ます (nemasu)	寝ません (nemasen)" +
          "U-verbs With u-verbs, replace u with imasu and imasen." +
          "飲む (nomu)	飲みます (nomimasu)	飲みません (nomimasen)" +
          "話す (hanasu)	話します (hanashimasu)	話しません (hanashimasen)" +
          "行く (iku)	行きます (ikimasu)	行きません (ikimasen)" +
          "Irregular verbs Some words are irregular, using a different format than to its expected consonant." +
          "する (suru)	します (shimasu)	しません (shimasen)" +
          "くる (kuru)	きます (kimasu)	きません (kimasen)",
      },
      {
        number: "3.2",
        title: "Verb Types and the Present Tense",
        id: "section2",
        content:
          "3.2, Verb Types and the Present Tense, Action verbs and the present tense of these verbs either means that a person regularly performs these actions, or that they are planning to perform an action in the future." +
          "Habitual action:, 私はよくテレビを見ます。I often watch TV., Future action:, 私は明日京都に行きます。I will go to Kyoto tomorrow.",
      },
      {
        number: "3.3",
        title: "Particles",
        id: "section3",
        content:
          "3.3, Particles, four paticles: を, で, に, へ., を indicates direct objects things that are directly involved in, or affected by, the event." +
          "コーヒーを飲みます。I drink coffee., で indicates where event described by the verb takes place., 図書館で本を読みます。I will read books in the library." +
          "に has many meanings, (1) Goal of movement 今日学校に行きません。I will not go to school today., (2) Time (at which an event takes place), 日曜日に京都に行きます。I will go to Kyoto on Sunday." +
          "へ (Goal of movement). You can replace に with へ for goal of movement, but not with time reference., 家へ帰ります。I will return home.",
      },
      {
        number: "3.4",
        title: "Time References",
        id: "section4",
        content:
          "3.4, Time References, Use に for days of week and numerical time expressions. 日曜日に行きます。I will go on Sunday." +
          "You don't use it with defined time expressions such as today and tomorrow, 明日来ます。I will come tomorrow.",
      },
      {
        number: "3.5",
        title: "～ませんか",
        id: "section5",
        content:
          "3.5, ～ませんか, to extend an invitation, ますか is used more like a question, not an invitation." +
          "昼ご飯を食べませんか。 Would you like to have lunch?",
      },
      {
        number: "3.6",
        title: "Frequency Adverbs",
        id: "section6",
        content:
          "3.6, Frequency Adverbs, Use frequency adverb to describe how often you do something. 毎日 (every day)" +
          "よく (often), 時々 (sometimes) toki tokidoki, 全然 (never) zen zen zenzen, 私は時々図書館に行きます。I sometimes go to the library.",
      },
      {
        number: "3.7",
        title: "Word Order",
        id: "section7",
        content:
          "3.7, Word Order, Japanese sentences are fairly flexible, but generally are made up of several noun-particle sequences followed by a verb or an adjective." +
          "私は今日図書館で日本語を勉強します, topic	time place	object verb, I will study Japanese in the library today.",
      },
      {
        number: "3.8",
        title: "The Topic Particle は",
        id: "section8",
        content:
          "3.8, The Topic Particle は, The particle は puts forward the item that you want to talk about." +
          "メアリさん, 週末は大抵 何をしますか。Mary, what do you usually do on the weekend?, Paraphrased: Let's talk about weekends, what do you do on weekends?" +
          "今日は京都に行きます。I'm going to Kyoto today. Paraphrased: Let me say what I will do today; I will go to Kyoto.",
      },
    ],
  },
  {
    title: "Lesson 4: 初めてのデート (The First Date)",
    path: "/lesson4",
    sections: [
      {
        number: "4.1",
        title: "X があります / います",
        id: "section1",
        content:
          "4.1, X があります / います, があります / います means there is / are X., Use があります for non-living things., Use います for living things." +
          "It's accompanied by the particle が, instead of は. テレビがありません。I don't have a TV." +
          "gaarimasu imasu",
      },
      {
        number: "4.2",
        title: "Describing Where Things Are",
        id: "section2",
        content:
          "4.2 Describing Where Things Are, Location Words, みぎ to the right of ひだり to the left of, まえ in front of" +
          "うし behind X は Y の なか です X は inside Y. うえ on/above した under/beneath ちかく near となり next to, X は Y と Z の あいだです。X is between Y and Z" +
          "銀行は図書館のとなりです。 The bank is next to the library." +
          "migi hidari, mae ushi naka ue shita chikaku tonari aidadesu",
      },
      {
        number: "4.3",
        title: "Past Tense of です",
        id: "section3",
        content:
          "4.3 Past Tense of です, The past tense of です (it is) becomes じゃないです (it was). affirmative negative" +
          "Present ～ じゃないです Past	～ でした	～ じゃなかったです, あれは日本の映画じゃなかったです。 That was not a Japanese movie.",
      },
      {
        number: "4.4",
        title: "Past Tense of Verbs",
        id: "section4",
        content:
          "4.4 Past Tense of Verbs, Past tense forms of verbs end with ました. affirmative	negative, Present	～ ます	～ ません" +
          "Past	～ ました	～ ませんでした, メリーさんはく時頃家に帰りました。 Mary returned home at about nine." +
          "masu masen mashita masendeshita",
      },
      {
        number: "4.5",
        title: "も",
        id: "section5",
        content:
          "4.5 も You can also use も when two or more people perform the same activity. You can also use it when someone buys, sees, or eats two or more things." +
          "私は昨日京都に行きました。 I went to Kyoto yesterday. 山下先生も昨日京都に行きました。Professor Yamashita went to Kyoto yesterday, too." +
          "You replace は or を with も, but with other particles such as に and で, you keep them and follow them up with も." +
          "は / が / を	→	も に / で / etc.	→	にも / でも / etc." +
          "wa ha ga wo mo ni de nimo demo",
      },
      {
        number: "4.6",
        title: "一時間",
        id: "section6",
        content:
          "4.6 一時間, The duration of an activity is expressed with a bare noun., メリーさんはそこで たけしさんを一時間に待ちました。Mary waited for Takeshi there for an hour." +
          "Use ぐらい after ～時間 for an approximate measurement. 私は昨日 日本語を三時間ぐらい勉強しました。 I studied Japanese for about three hours yesterday." +
          "To say one hour an a half, you can add 半 immediately after ～時間. 昨日七時間半寝ました。(I) slept for seven and a half hours last night." +
          "You can combine 半 and ぐらい, where ぐらい comes last, as in 一時間半ぐらい. han gurai ichijihangurai",
      },
      {
        number: "4.7",
        title: "たくさん",
        id: "section7",
        content:
          "4.7 たくさん, If you want to add a quantity word to the direct object of a sentence, you can either place it before the noun, or after the particle を." +
          "京都で写真をたくさん撮りました。京都でたくさん写真を撮りました。You can also use both these orders in ある and いる sentences." +
          "takusan",
      },
      {
        number: "4.8",
        title: "と",
        id: "section8",
        content:
          "4.8  と, The particle has two functions. One is to connect two nouns A and B. 日本語と英語を話します。 I speak Japanese and English." +
          "The other meaning of と is together with. It describes with whom you do something. メリーさんはソラさんと韓国に行きます。Mary will go to Korea with Sora.",
      },
    ],
  },
  {
    title: "Lesson 5: 沖縄旅行 (A Trip to Okinawa)",
    path: "/lesson5",
    sections: [
      {
        number: "5.1",
        title: "Adjectives (Present Tense)",
        id: "section1",
        content:
          "5.1 Adjectives (Present Tense), Add です to both い-adjectives and な-adjectives for affirmative present tense sentences.," +
          "In negative sentences, you replace the last い of an い-adjective with くない. な-adjectives are just like nouns and you only need to change です to じゃないです." +
          "[Present] affirmative negative, い-adjectives e.g. さむい	さむいです It is cold.	さむくないです It is not cold." +
          "な-adjectives e.g. 元気 (な)	元気です She is healthy.	元気じゃないです She is not healthy." +
          "A: その本は面白いですか。Is that book interesting? B: いいえ, あまりおもしろくないです。No, it is not very interesting." +
          "One irregularity worth noticing is the adjective いい (good). The first syllable of いい is changed to よ in all forms except the dictionary form." +
          "Compound adjectives like かっこいい that are built with いい follow this syllable change and we say かっこよくないです." +
          "[Present] (irregular) いい	いいです よくないです (or よくありません)" +
          "If you want to say things like very hot, and a littlehot, you can add degree adverbs like すごく (extremely), とても (very) and ちょっと (a little; slightly) before adjectives." +
          "沖縄の海はとてもきれいです。The sea is very beautiful in Okinawa. この部屋はちょっと暑いです。This room is a little hot." +
          "desu kunaidesu janaidesu ii iidesu yokunaidesu yokuarimasen totemo chotto",
      },
      {
        number: "5.2",
        title: "Adjectives (Past Tense)",
        id: "section2",
        content:
          "5.2 Adjectives (Past Tense) With い-adjectives, you change the last い to かったです in the affirmative. In the negative, you only need to cdhange the present tense くない to くなかったです." +
          "[Past] affirmative	negative い-adjectives e.g. さむ	さむいかったです It was cold.	さむくなかったです It was not cold." +
          "な-adjectives e.g. 元気 (な)	元気でした She was healthy.	元気じゃなかったです She was not healthy." +
          "The い-adjective いい (good) is again irregular. Its first syllable is changed to よ." +
          "[Past] (irregular) いい	よかったです	よくなかったです (or よくありませんでした)" +
          "samuikattadesu kunakattadesu deshita janakattadesu genki samu ii yokattadesu",
      },
      {
        number: "5.3",
        title: "Adjectives (Noun Modification)",
        id: "section3",
        content:
          "5.3 Adjectives (Noun Modification) You can use い- and な-adjectives to modify nouns. Place the dictionary form of an い-adjective before the noun you want to modify. With な-adjectives, place the missing な of the corresponding noun before です." +
          "い-adjectives:	おもしろい映画	an interesting movie な-adjectives:	きれいな写真	a beautiful picture" +
          "omoshiroieiga, kireinashashin",
      },
      {
        number: "5.4",
        title: "好き (な) / きらい (な)",
        id: "section4",
        content:
          "5.4 好き (な) / きらい (な) Some Japanese adjectives are like verbs in English, and they take a subject and an object. For example, 好き (な) (to be fond of; to like), and きらい (な) (to be disgusted with; to dislike) are examples. You can make 私は will be the subject and the object of your affection will be Y が." +
          "X は Y が	好き	です。きらい If you like ro dislike something (or somebody) a lot, you can use the intensidifed forms of 好きです and きらいです, by adjusting to 大好きです (like a lot) and 大きらいです (hate), which are more often used than the degree modifier とても." +
          "たけしさんはコーヒーが大好きです。 Takeshi likes coffee a lot. If you want to be neutral and say that you neither like or dislike something, you can say the following:" +
          "好きでもきらいでもないです。I neither like nor dislike (it). You can use 好きな and きらいな as modifiers of nouns. For example:" +
          "これは私の好な本です。 This is my favorite book." +
          "suki kirai desu wa ga sukina kiraina",
      },
      {
        number: "5.5",
        title: "～ましょう / ～ましょうか",
        id: "section5",
        content:
          "5.5 ～ましょう / ～ましょうか Take a long form of a verb and replace the ます ending with ましょう or ましょうか and you will get the Japanese expression for let's..., which you can use to suggest a plan of action." +
          "一緒に図書館で勉強しましょう。 Let's study in the library together." +
          "mashou mashouka",
      },
      {
        number: "5.6",
        title: "Counting",
        id: "section6",
        content:
          "5.6 Counting When we count items in Japanese, we use different number words for different kinds of items, like counting people or counting books." +
          "リーさんは Tシャツを三枚買いました。 Lee bought three T-shirts. The number word, 三枚 (san mai), is made up of the numeral 三 and the counter 枚. This counter is used for sheets of paper and other flat objects.",
      },
    ],
  },
  {
    title: "Lesson 6: ロバートさんの一日 A Day in Robert's Life",
    path: "/lesson6",
    sections: [
      {
        number: "6.1",
        title: "Te-form",
        id: "section1",
        content:
          "6.1 Te-form, Te-forms are very important. Among its uses:, making requests (..., please.)" +
          "forming a sentence that describes two events or activities. (I did this and did that.)" +
          "giving and asking permission (You may.../May I...?) stating that something is foridden (You must not...)" +
          "Te-forms conjugation paradigm is complex. There are separate rules for ru-, u-, and irregular verbs. Furthermore, the rule for u-verbs is divided into five sub-rules." +
          "Ru-verbs 	る →	て 食べる	→	食べて" +
          "U-verbs with final う	→	って		会う	→	会って つ	待つ	待って る	とる	とって む	→	んで	読む	→	読んで ぶ	遊ぶ	遊んで" +
          "ぬ	死ぬ	死んで く	→	いて		書く	→	書いて (Exception)	行く	行って ぐ	→	いで		泳ぐ	→	泳いで す	→	して		話す	→	話して" +
          "Irregular verbs 	する	する	→	して	くる	きて" +
          "robatosannoichinichi",
      },
      {
        number: "6.2",
        title: "～てください",
        id: "section2",
        content:
          "6.2 ～てください Use a verbal te-form together with ください to make a polite request to another person please do ... for me." +
          "教科書を読んでください。 Please read the textbook." +
          "tekudasai",
      },
      {
        number: "6.3",
        title: "Describing Two Activities",
        id: "section3",
        content:
          "6.3 Describing Two Activities You can use a te-form to combine two or more verbs, as in I did this and then I did that." +
          "Note that two verbs cannot be joined by と, which only connects nouns. 図書館に行って，本を帰ります。 I will go to the library and check out the books." +
          "今日は，六時に起きて，勉強しました。 Today I got up at six and studied. The te-form of a verb can also be used to connect a verb more loosely with the rest of a sentence." +
          "I can describe the manner in which the action described by the second verb is performed. It also can describe the situation for which an apology is made." +
          "バスに乗って，会社に行きます。 I go to work by bus. (I take a bus to work.)" +
          "教科書を忘れて，すみません。 I am sorry for not bringing in the textbook. (I left the book at home, and I am sorry.)",
      },
      {
        number: "6.4",
        title: "～てもいいです",
        id: "section4",
        content:
          "6.4 ～てもいいです A verbal te-form plus もいいです means you may do..., which describes an activity that is permitted. To ask for permission, you can turn it into a questino sentence, ～てもいいですか" +
          "The polite and graceful way to grant permission is to say どうぞ. 教科書を見てもいいですよ。 You may use the textbook." +
          "A: トイレに行ってもいいですか。 May I go to the bathroom? B: はい，いいですよ。/ どうぞ。 You may. / Please." +
          "temoiidesu temoiidesuka douzo dozo",
      },
      {
        number: "6.5",
        title: "～てはいけません",
        id: "section5",
        content:
          "6.5 ～てはいけません A verbal te-form plus はいけません means you must not do ..., a strong prohibition statement, as in rules and regulations." +
          "ここで写真を撮ってはいけません。 You must not take pictures here." +
          "If somebody asks for permission but you want to deny it, you could use てはいけません but the setence will come off as harsh unless you are in a place of authority." +
          "There are softer ways of saying please don't in lesson 8." +
          "tewaikemasen tehaikemasen",
      },
      {
        number: "6.6",
        title: "～から",
        id: "section6",
        content:
          "6.6 ～から A sentence that ends with から (because) explains the reason or cause of a situation." +
          "(situation)。 (explanation) から。 私は今晩勉強します。明日はテストがありますから。" +
          "I will study this evening. (Because) we will have an exam tomorrow." +
          "kara",
      },
      {
        number: "6.7",
        title: "～ましょうか (Offering Assistance)",
        id: "section7",
        content:
          "6.7 ～ましょうか (Offering Assistance) In Lesson 5, ましょうか means Let's .... ～ましょうか is also used in the sense of let me do ..., as in offering assistance." +
          "荷物を持ちましょうか。 Shall I carry your bag?" +
          "mashouka",
      },
    ],
  },
  {
    title: "Lesson 7: 家族の写真 (Family Picture)",
    path: "/lesson7",
    sections: [
      { number: "7.1", title: "", id: "section1", content: "7.1" },
      { number: "7.2", title: "", id: "section2", content: "7.2" },
      { number: "7.3", title: "", id: "section3", content: "7.3" },
      { number: "7.4", title: "", id: "section4", content: "7.4" },
      { number: "7.5", title: "", id: "section5", content: "7.5" },
      { number: "7.6", title: "", id: "section6", content: "7.6" },
    ],
  },
  {
    title: "Lesson 8: バーベキュー (Barbecue)",
    path: "/lesson8",
    sections: [
      { number: "8.1", title: "", id: "section1", content: "8.1" },
      { number: "8.2", title: "", id: "section2", content: "8.2" },
      { number: "8.3", title: "", id: "section3", content: "8.3" },
      { number: "8.4", title: "", id: "section4", content: "8.4" },
      { number: "8.5", title: "", id: "section5", content: "8.5" },
      { number: "8.6", title: "", id: "section6", content: "8.6" },
      { number: "8.7", title: "", id: "section7", content: "8.7" },
      { number: "8.8", title: "", id: "section8", content: "8.8" },
    ],
  },
  {
    title: "Lesson 9: かぶき (Kabuki)",
    path: "/lesson9",
    sections: [
      {
        number: "9.1",
        title: "Past Tense Short Forms",
        id: "section1",
        content: "9.1, Past Tense Short Forms, ",
      },
      {
        number: "9.2",
        title: "Past Tense Short Forms in Informal Speech",
        id: "section2",
        content: "9.2, Past Tense Short Forms in Informal Speech",
      },
      {
        number: "9.3",
        title: "Past Tense Short Forms in Quoted Speech: ～と思います",
        id: "section3",
        content: "9.3, Past Tense Short Forms in Quoted Speech: ～と思います",
      },
      {
        number: "9.4",
        title: "Past Tense Short Forms in Quoted Speech: ～と言っていました",
        id: "section4",
        content: "Past Tense Short Forms in Quoted Speech: ～と言っていました",
      },
      {
        number: "9.5",
        title: "Qualifying Nouns with Verbs and Adjectives",
        id: "section5",
        content: "9.5, Qualifying Nouns with Verbs and Adjectives",
      },
      {
        number: "9.6",
        title: "もう～ました and まだ～ていません",
        id: "section6",
        content: "9.6, もう～ました and まだ～ていません",
      },
      {
        number: "9.7",
        title: "Explanation から, Situation",
        id: "section7",
        content: "9.7, Explanation から, Situation",
      },
    ],
  },
  {
    title: "Lesson 10: 冬休みの予定 (Winter Vacations Plans)",
    path: "/lesson10",
    sections: [
      { number: "10.1", title: "", id: "section1", content: "10.1" },
      { number: "10.2", title: "", id: "section2", content: "10.2" },
      { number: "10.3", title: "", id: "section3", content: "10.3" },
      { number: "10.4", title: "", id: "section4", content: "10.4" },
      { number: "10.5", title: "", id: "section5", content: "10.5" },
      { number: "10.6", title: "", id: "section6", content: "10.6" },
      { number: "10.7", title: "", id: "section7", content: "10.7" },
    ],
  },
  {
    title: "Lesson 11: 休みのあと (After the Vacation)",
    path: "/lesson11",
    sections: [
      { number: "11.1", title: "", id: "section1", content: "11.1" },
      { number: "11.2", title: "", id: "section2", content: "11.2" },
      { number: "11.3", title: "", id: "section3", content: "11.3" },
      { number: "11.4", title: "", id: "section4", content: "11.4" },
    ],
  },
  {
    title: "Lesson 12: 病気 (Feeling ill)",
    path: "/lesson12",
    sections: [
      { number: "12.1", title: "", id: "section1", content: "12.1" },
      { number: "12.2", title: "", id: "section2", content: "12.2" },
      { number: "12.3", title: "", id: "section3", content: "12.3" },
      { number: "12.4", title: "", id: "section4", content: "12.4" },
      { number: "12.5", title: "", id: "section5", content: "12.5" },
      { number: "12.6", title: "", id: "section6", content: "12.6" },
    ],
  },
  {
    title: "Lesson 13: アルバイト探し (Looking for a Part-time Job)",
    path: "/lesson13",
    sections: [
      { number: "13.1", title: "", id: "section1", content: "13.1" },
      { number: "13.2", title: "", id: "section2", content: "13.2" },
      { number: "13.3", title: "", id: "section3", content: "13.3" },
      { number: "13.4", title: "", id: "section4", content: "13.4" },
      { number: "13.5", title: "", id: "section5", content: "13.5" },
      { number: "13.6", title: "", id: "section6", content: "13.6" },
    ],
  },
  {
    title: "Lesson 14: バレンタインデー (Valentime’s Day)",
    path: "/lesson14",
    sections: [
      { number: "14.1", title: "", id: "section1", content: "14.1" },
      { number: "14.2", title: "", id: "section2", content: "14.2" },
      { number: "14.3", title: "", id: "section3", content: "14.3" },
      { number: "14.4", title: "", id: "section4", content: "14.4" },
      { number: "14.5", title: "", id: "section5", content: "14.5" },
      { number: "14.6", title: "", id: "section6", content: "14.6" },
    ],
  },
  {
    title: "Lesson 15: A Trip to Nagano",
    path: "/lesson15",
    sections: [
      { number: "15.1", title: "", id: "section1", content: "15.1" },
      { number: "15.2", title: "", id: "section2", content: "15.2" },
      { number: "15.3", title: "", id: "section3", content: "15.3" },
      { number: "15.4", title: "", id: "section4", content: "15.4" },
    ],
  },
  {
    title: "Lesson 16: Lost and Found",
    path: "/lesson16",
    sections: [
      { number: "16.1", title: "", id: "section1", content: "16.1" },
      { number: "16.2", title: "", id: "section2", content: "16.2" },
      { number: "16.3", title: "", id: "section3", content: "16.3" },
      { number: "16.4", title: "", id: "section4", content: "16.4" },
      { number: "16.5", title: "", id: "section5", content: "16.5" },
      { number: "16.6", title: "", id: "section6", content: "16.6" },
    ],
  },
  {
    title: "Lesson 17: Grumble and Gossip",
    path: "/lesson17",
    sections: [
      { number: "17.1", title: "", id: "section1", content: "17.1" },
      { number: "17.2", title: "", id: "section2", content: "17.2" },
      { number: "17.3", title: "", id: "section3", content: "17.3" },
      { number: "17.4", title: "", id: "section4", content: "17.4" },
      { number: "17.5", title: "", id: "section5", content: "17.5" },
      { number: "17.6", title: "", id: "section6", content: "17.6" },
    ],
  },
  {
    title: "Lesson 18: John's Part-time Job",
    path: "/lesson18",
    sections: [
      { number: "18.1", title: "", id: "section1", content: "18.1" },
      { number: "18.2", title: "", id: "section2", content: "18.2" },
      { number: "18.3", title: "", id: "section3", content: "18.3" },
      { number: "18.4", title: "", id: "section4", content: "18.4" },
      { number: "18.5", title: "", id: "section5", content: "18.5" },
      { number: "18.6", title: "", id: "section6", content: "18.6" },
    ],
  },
  {
    title: "Lesson 19: Meeting the Boss",
    path: "/lesson19",
    sections: [
      { number: "19.1", title: "", id: "section1", content: "19.1" },
      { number: "19.2", title: "", id: "section2", content: "19.2" },
      { number: "19.3", title: "", id: "section3", content: "19.3" },
      { number: "19.4", title: "", id: "section4", content: "19.4" },
      { number: "19.5", title: "", id: "section5", content: "19.5" },
    ],
  },
  {
    title: "Lesson 20: Mary Goes Shopping",
    path: "/lesson20",
    sections: [
      { number: "20.1", title: "", id: "section1", content: "20.1" },
      { number: "20.2", title: "", id: "section2", content: "20.2" },
      { number: "20.3", title: "", id: "section3", content: "20.3" },
      { number: "20.4", title: "", id: "section4", content: "20.4" },
      { number: "20.5", title: "", id: "section5", content: "20.5" },
      { number: "20.6", title: "", id: "section6", content: "20.6" },
    ],
  },
  {
    title: "Lesson 21: Burglar",
    path: "/lesson21",
    sections: [
      { number: "21.1", title: "", id: "section1", content: "21.1" },
      { number: "21.2", title: "", id: "section2", content: "21.2" },
      { number: "21.3", title: "", id: "section3", content: "21.3" },
      { number: "21.4", title: "", id: "section4", content: "21.4" },
      { number: "21.5", title: "", id: "section5", content: "21.5" },
    ],
  },
  {
    title: "Lesson 22: Education in Japan",
    path: "/lesson22",
    sections: [
      { number: "22.1", title: "", id: "section1", content: "22.1" },
      { number: "22.2", title: "", id: "section2", content: "22.2" },
      { number: "22.3", title: "", id: "section3", content: "22.3" },
      { number: "22.4", title: "", id: "section4", content: "22.4" },
      { number: "22.5", title: "", id: "section5", content: "22.5" },
      { number: "22.6", title: "", id: "section6", content: "22.6" },
    ],
  },
  {
    title: "Lesson 23: Good-bye",
    path: "/lesson23",
    sections: [
      { number: "23.1", title: "", id: "section1", content: "23.1" },
      { number: "23.2", title: "", id: "section2", content: "23.2" },
      { number: "23.3", title: "", id: "section3", content: "23.3" },
      { number: "23.4", title: "", id: "section4", content: "23.4" },
      { number: "23.5", title: "", id: "section5", content: "23.5" },
      { number: "23.6", title: "", id: "section6", content: "23.6" },
    ],
  },
];

export default lessons;
