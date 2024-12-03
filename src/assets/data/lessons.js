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
      {
        number: "7.1",
        title: "～ている (Action in Progress)",
        id: "section1",
        content:
          "7.1 ～ている (Action in Progress) Japanese verbs can be classified into the following three types: verbs that describe activities that last for some time (e.g., 食べる, 読む)" +
          "verbs that describe changes that are more or less instantaneous (e.g., 死ぬ, 起きる), verbs that describe continuous states (e.g., ある, いる) You can use the verbs in the first group in their te-form with the helping verb いる to describe actions in progress." +
          "activity verbs ている = action in progress, ソラさんは今勉強しています。Sora is studying right now. You can also use a ～ています sentence to describe what a person does by occupation or by habit." +
          "私は英語を教えています。 I teach English. / I am teaching English (right now). The helping verb いる conjugates as a ru-verb. It makes long forms as in the following:" +
          "e.g. 食べている affirmative negative [Present] [Past] 食べています He is eating. 食べていません He is not eating. 食べていました He was eating. 食べていませんでした He was not eating.",
      },
      {
        number: "7.2",
        title: "～ている (Result of a Change)",
        id: "section2",
        content:
          "7.2 ～ている (Result of a Change) Verbs in the second group describe changes from one state to another. For example, if you get married 結婚する, your status changes from being single to being married. The verb て.いる describes the result of a change." +
          "change verbs ている = result of a change 山下先生は結婚しています。Professor Yamashita is married. Examples of verbs that are commonly used in the ～ている framework:" +
          "持つ (もつ) 持っている (has) ソラさんはお金をたくさん持っています。Sora has a lot of money. 知る (しる) 知っている (knows) 山下先生は母を知っています。Professor Yamashita knows my mother." +
          "太る (ふとる) 太るっている (is overweight) トムさんはちょうと太っています。Tom is a little overweight. やせる やせるている (is thin)" +
          "私の弟はとてもやせています。My younger brother is very thin. 着る (きる) 着っている (wears) メアリーさんはTシャツを着ています。Mary is wearing/wears a T-shirt." +
          "起きる (おきる) 起きている (is awake) お父さんは起きています。 Dad is up and awake. 住む (すむ) 住んでいる (lives in) 家族は東京に住んでいます。My family lives in Tokyo." +
          "Verbs like 行く and 来る belong to the change class. They indicate the result of prior movements, not movements that are currently in progress." +
          "中国に行っています。Somebody has gone to/is in China. (Not: She is going to China) うちに来ています。Somebody has come over to visit. (Not: Somebody is coming over)",
      },
      {
        number: "7.3",
        title: "メリーさんは髪が長いです",
        id: "section3",
        content:
          "7.3 メリーさんは髪が長いです Normally, we would describe someone who has long hair with: トムさんの髪は長いです。Tom's hair is long." +
          "It is more natural in Japanese to say: トムさんは髪が長いです。Tom has long hair. (= As for Tom, he has long hair.) This also applies to descriptions of a person's physical attributes in general." +
          "体の部分 (からだのぶぶん) Parts of the Body かみ (髪) Hair まゆげ (眉毛) Eyebrow め (目) Eye みみ (耳) Ear はな (鼻) Nose くち (口) Mouth" +
          "は (歯) Teeth くび (首) Neck て (手) Hand ゆび (指) Finger あたま (頭) Head かお (顔) Face かた (肩) Shoulder むね (胸) Chest せなか (背中) Back" +
          "おなか (お腹) Belly おしり (お尻) Butt あし (足) Foot In idiomatic collocations (words that naturally go together), we have:" +
          "背が高い。(se ga takai) is tall 背が低い。(se ga hikui) is short 頭がいい。(atamagaii) is bright/smart",
      },
      {
        number: "7.4",
        title: "Adjective/Noun Te-forms for Joining Sentences",
        id: "section4",
        content:
          "7.4 Adjective/Noun Te-forms for Joining Sentences The te-form of an い-adjective is formed by substituting くて for the final い. The te-form of a な-adjective and a noun + です sequence is formed by adding で to the base or the noun." +
          "い-adjectives:	安い → 安くて (irregular)	いい → よくて な-adjectives: 元気 (な) → 元気で noun + です: 安い	→ 安くて あの店の食べ物は安くて、おいしいです。 The food at that restaurant is inexpensive and delicious." +
          "ホテルはきれいで、よかったです。 The hotel was clean, and we were happy.",
      },
      {
        number: "7.5",
        title: "Verb Stem + に行く",
        id: "section5",
        content:
          "7.5 Verb Stem + に行く If a person moves to another place in order to do something, we can describe their movement and its purpose this way:" +
          "destination of movement に へ the purpose of movement 行く 来る 帰る The purpose of movement is a phrase consisting of a verb, its object, and so forth. Verbs describing the purpose of a movement must be in their stem forms. Stems are the part you get by removing ます from the verbs' present tense long forms." +
          "stems:	食べる → 食べ (ます) 読む → 読み (ます) etc. デパートにかばんを買いに行きました。 I went to a department store to buy a bag.",
      },
      {
        number: "7.6",
        title: "Counting People",
        id: "section6",
        content:
          "7.6 Counting People The counter for people is 人, but it irregular for one and two people." +
          "ひとり(一人) ふたり(二人) さんにん(三人) よにん(四人) ごにん(五人) ろくにん(六人) しちにん/ななにん(七人) はちにん(八人) きゅうにん(九人) じゅうにん(十人)" +
          "1 2 3 4 5 6 7 8 9 10 one two three four five six seven eight nine ten To count people in a class, for example, you can add ～人 after the noun and the particle が, and say:" +
          "person が X 人 います 私のクラスに（は）インドネシア人の学生が一人います。There is one Indonesian student in our class. The place expressions are often followed by には instead of に in this type of sentence." +
          "The place expressions are often followed by には instead of に in this type of sentence.",
      },
    ],
  },
  {
    title: "Lesson 8: バーベキュー (Barbecue)",
    path: "/lesson8",
    sections: [
      {
        number: "8.1",
        title: "Short Forms",
        id: "section1",
        content:
          "8.1 Short Forms table A new paradigm of conjugation, called short forms. Short forms are used to quote someone else, in casual conversations (as signs of intimacy), and in making negative requests." +
          "Present, affirmative Present, negative long forms short forms verbs:	読みます (yomi) 読む (= Dictionary form)  い-adjectives: かわいいです かわいい (Drop です)" +
          "な-adjectives:	静かです (shizuka) 静かだ (Replace です with だ.) noun + です: 学生です (gakusei) 学生だ (Replace です with だ.) 読みません	読まない" +
          "かわいくないです	かわいくない (exception) いい: よくないです	よくない 静かじゃないです	静かじゃない 学生じゃないです	学生じゃない" +
          "Verbs in negative. Ru-, u- and irregular vers conjugate differently. Verb short forms (present, negative) ru-verbs: Drop the final る and add ない 食べる → 食べない" +
          "u-verbs: Drop the last -u and add -anai. Verbs that have う, however, get わ instead of あ. 書く (kaku) → 書かない 会う (ao) → 会わない" +
          "irregular verbs: The vowels change. する → しない くる → こない exception: The verb ある is replaced by the adjective ない. ある → ない" +
          "Think of the u-verb conjugation as moving up and down in the hiragana chart. 書か話はな	待ま死し読よ作つく泳およ遊あそ買か negative	かさたなまらがばわ～ない stem	きしちにみりぎびい～ます affirmative	くすつぬむるぐぶう = Dictionary form",
      },
      {
        number: "8.2",
        title: "Short Forms in Informal Speech",
        id: "section2",
        content:
          "8.2 Short Forms in Informal Speech Close friends or family members speak with each other using short forms. Long forms tends to imply the speaker's intention to keep a proper distance from the listener. Friend A: 今日、学校に行く？ (Short form) Are you going to school today?" +
          "Friend B: ううん、行かない。 No, I'm not. Stranger A: すみません、この電車は新宿にいきますか。 (Long form) Excuse me, does this train go to Shinjuku? Stranger B: いいえ、行きませにょ。No, it doesn't." +
          "Be wary when switching to short forms, as Japanese speakers are very concious of seniority. Just because someone uses short forms with you does not mean it's a mutual relationshi in using short/long forms. Juniors often uses long forms to their senior while seniors are more free to use short forms to their juniors." +
          "Profesor: この漢字、わかる？ Do you know this kanji? Student: はい、わかります。(X うん、わかる。) Yes, I do. In casual conversations, you drop the question particle か, and use the rising intonation to ask a question." +
          "In spoken language, you usually drop the sentence-final だ after a な-adjective or a noun. However, You keep the last だ in the written language. A: 元気？ Are you good? B: うん、元気。 Yes, I am." +
          "Keep だ when you follow it up with ね or よ. メアリーさんは二年生だよ。Mary is a sophomore. はい and いいえ are usually replaced by the less formal うん and ううん. よくスポーツをする？ Do you often play sports? うん、する。/ ううん、しない。Yes, I do. / No, I don't.",
      },
      {
        number: "8.3",
        title: "Short Forms in Quoted Speech: ～と思います",
        id: "section3",
        content:
          "8.3 Short Forms in Quoted Speech: ～と思います To describe what you think, use the short form, plus と思います (I think that...). と is a quotation particle, which does the job of both the English word that in indirect quotation and of quotation marks (  ) in direct quotation." +
          "(私は)たけしさんはメアリーさんが好きだと思います。I think Takeshi likes Mary. To say that you don't think something is the case, it is more common in Japanese to say ～ないと思います (I think that something is not the case) than ～と思いません (I don't think). (私は)メアリーさんはたけしさんが好きじゃないと思います。I don't think Mary likes Takeshi. (= I think Mary doesn't like Takeshi.)",
      },
      {
        number: "8.4",
        title: "Short Forms in Quoted Speech: ～と言っていました",
        id: "section4",
        content:
          "8.4 Short Forms in Quoted Speech: ～と言っていました To quote someone, use the short form plus と言っていました (They said ...). Note that the present tense is preserved in the quote." +
          "ヤスミンさんは、あした試験があると言っていました。Yasmin said that there would be an exam tomorrow. 山下先生は結婚していないと言っていました。Professor Yamashita said that he is not married.",
      },
      {
        number: "8.5",
        title: "～ないでください",
        id: "section5",
        content:
          "8.5 ～ないでください To request that someone refrains from doing something, use a negative verbal short form plus でください." +
          "ここで写真を撮らないでください。Please don't take pictures here. verb (short, negative) + でください	Please don't... ないでください often is a better answer than てはいけません to a てもいいですか question." +
          "A: この部屋に入ってもいいですか。May I enter this room? B: 入らないでください。Please don't. (入 = はい) Compare: 入ってはいけません。(Implies that you are in a position of authority.)",
      },
      {
        number: "8.6",
        title: "Verb のが好きです/上手です",
        id: "section6",
        content:
          "8.6 Verb のが好きです/上手です A verb short form + の turns a verb into a noun describing an action. For example, you can describe what you like/dislike doing." +
          "(私は)日本語を勉強するのが好きです。I like studying the Japanese language. 私は部屋を掃除するのがきらいです。I don't like cleaning my room." +
          "To be good/bad at doing something is ～が上手です (is good at ...) and ～が下手です ロバートさんは料理を作るのが上手です。Robert is good at cooking meals." +
          "たけしさんは英語を話すのが下手です。Takeshi is not a good speaker of English. person は activity (verb) のが 好き likes doing ... きらい doesn't like doing ... 上手 is good at doing ... 下手 is poor at doing ..." +
          "It's a common mistake to use the te-form of a verb in such contexts, misled by the association between ～ている and the verb in the -ing form in English. X たけしさんは英語を話してが下手です。",
      },
      {
        number: "8.7",
        title: "The Subject Particle が",
        id: "section7",
        content:
          "8.7 The Subject Particle が One usage of replacing the particle は with が depends on what is emphasized and what word they're attached to. は, the topic particle, usually emphasizse what comes after, and not what it marks. が, the subject particle, does the opposite. It places emphasis on what comes before it." +
          "これは大きい犬です。This, IS A BIG DOG. これが大きい犬です。THIS RIGHT HERE, is a big dog. The は emphasize the 大きい犬です, while が is emphasize the これ. [Youtube Video] は and が Particles" +
          "Question words like だれ and 何 in the subject of a sentence are followed by が instead of は. だれが沖縄に行きましたか。Who went to Okinawa. Compare: X だれは沖縄に行きましたか。" +
          "In Lesson 2, we learned that a question word that is the subject of a sentence is never followed by the particle は, but always by the particle が. A noun that will provide the answer to such a question is also followed by the particle が. A: どのクラスがおもしろいですか。Which class is (the most) interesting? B: 日本語のクラスがおもしろいです。Japanese class is.",
      },
      {
        number: "8.8",
        title: "何か and 何も",
        id: "section8",
        content:
          "8.8 何か and 何も The word for something is 何か, and the word for anything in negative sentences is 何も. Some and any in" +
          "• positive statements: 何か something questions: anything? negative statements: 何も + negative not ... anything" +
          "When 何か and 何も are used in places where the particles は, が, and を are expeted, they are often used on their own, without the help of particles." +
          "猫が何か持ってきました。The cat has brought something. 猫は何か食べましたか。Did the cat eat anything? いいえ、猫は何も食べませんでした。No, the cat did not eat anything.",
      },
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
        content:
          "9.1, Past Tense Short Forms, For past tense paradign of short forms, there are three rules to understand: Verbs: Replace the te-form endings て and で with た and だ." +
          "い-adjectives: Replace the last い with かった. You may also think of this in terms of dropping です from the long form. な-adjectives and nouns: Replace the long form でした ending with だった." +
          "Negation: ない conjugates as an い-adjective. Therefore, for all categories, you can replace the last ない with なかった. Past, affirmative compare with: Past, negative" +
          "verbs:	食べた 食べて 読んだ 読んで い-adjectives: かわいかった	かわいい / かわいかったです な-adjectives: 静かだった	静かでした noun + です:	学生だった	学生でした" +
          "Past, negative 読んなかった	読んない かわいくなかった	かわいくない 静かじゃなかった	静かじゃない 学生じゃなかった	学生じゃない",
      },
      {
        number: "9.2",
        title: "Past Tense Short Forms in Informal Speech",
        id: "section2",
        content:
          "9.2, Past Tense Short Forms in Informal Speech Short form in the past tense can be used in the same way as the present tense forms. Note that the particle か is dropped in informal speech. 今朝、朝ご飯の食べた？ Did you have breakfast this morning?" +
          "Unlike だ in the present tense, だった is not dropped in informal speech. A: 先週は忙しかった？ Were you busy last week? B: ううん、忙しくなかった。ひまだった。No, I wasn't. I had free time.",
      },
      {
        number: "9.3",
        title: "Past Tense Short Forms in Quoted Speech: ～と思います",
        id: "section3",
        content:
          "9.3, Past Tense Short Forms in Quoted Speech: ～と思います Like the present tense, you use the short form in the past tense with ～と思います (to omoi masu), which means I think, to report what you think took place in the past." +
          "A: あ、私のとんかつがない！ Hey, my pork cutlet is gone! B: トムさんが食べたと思います。I think Tom ate it. 去年きょねんの冬ふゆはあまり寒さむくなかったと思おもい。I don't think last winter was very cold. ( = I think last winter was not very cold.)",
      },
      {
        number: "9.4",
        title: "Past Tense Short Forms in Quoted Speech: ～と言っていました",
        id: "section4",
        content:
          "Past Tense Short Forms in Quoted Speech: ～と言っていました If you heard somebody utter a sentence in the past tense, you can report it with the short form past tense with ～と言っていました." +
          "ヤスミンさんは、昼ひるご飯はんを食たべなかったと言っていました。Yasmin said that she didn't have lunch. Japanese does not have the sequence of tense rule, and the tense of the original utterance is preserved when it is reported. If you are quoting somebody who used the present tense, you must also use the present tense inside the quote." +
          "ヤスミンさんは晩ばんご晩ばん飯はんを食たべていると言っていました。Yasmin said that she was having dinner.",
      },
      {
        number: "9.5",
        title: "Qualifying Nouns with Verbs and Adjectives",
        id: "section5",
        content:
          "9.5, Qualifying Nouns with Verbs and Adjectives Examples of noun modifications. adjectival modification phrase describing a person's attribute な-adjective with a grammatical object verb in the short form" +
          "e.g. 1.	おもしろい 人ひと	a person who is inteeresting e.g. 2.	髪が長い	人 ひと	a person who has long hair e.g. 3.	おもしろい 人 ひと	a person who is inteeresting e.g. 4.	おもしろい	人 ひと	a person who is interesting ↑	↑ adjectives and verbs used as qualifiers	noun" +
          "A verb + ている, is frequently used as noun modifiers, describing people on the basis of their current actions and states. A: ゆいさんはどの人ですか？ Which one is Yui?" +
          "B: あそこで本を読んでいる人です。Yui is the one who is reading a book over there. あそこで写真を撮っている学生はロバートさんです。The student taking pictures over there is Robert.",
      },
      {
        number: "9.6",
        title: "もう～ました and まだ～ていません",
        id: "section6",
        content:
          "9.6, もう～ました and まだ～ていません Use affirmative past tense of a verb ～ ました both (i) to talk about an event that happened at a certain time in the past (きのう yesterday), and also (ii) to talk about a past event that still has an effect at present (used with adverbs like もう already)." +
          "きのう宿題をしました。I did the homework yesterday. もう宿題をしました。I have already done the homework. With the negative, the past is used only to talk about a finished time period like きのう, but ている is used if your intention is to talk about how things stand now (not yet)." +
          "きのう宿題をしませんでした。I did not do the homework yesterday. もう宿題をしていません。I have not done the homework yet. もう～ました have already ... まだ～ていません have not ... yet",
      },
      {
        number: "9.7",
        title: "Explanation から, Situation",
        id: "section7",
        content:
          "9.7, Explanation から, Situation から means because when added to a sentence. It can also mean a sort of explanation when combined with more sentences. If you put two sentences into one with から at the end of one of the sentence, the から sentence explains the situation." +
          "explanation から、situation。situation, because explanation. explanation; therefore, situation. あした試験があるから、今晩勉強します。I will study this evening, beacuse we will have an exam tomorrow. (= We will have an exam tomorrow; therefore, I will study this evening.)" +
          "寒かったから、出かけませんでした。We didn't go out, because it was cold. (= It was cold; therefore, we didn't go out.)",
      },
    ],
  },
  {
    title: "Lesson 10: 冬休みの予定 (Winter Vacations Plans)",
    path: "/lesson10",
    sections: [
      {
        number: "10.1",
        title: "Comparison between Two Items",
        id: "section1",
        content:
          "10.1 Comparison between Two Items In Japanese, adjectives do not change form in comparative sentences, meaning there is no alteration as in great/greater. A のほうが	B より (property)。	=	A is more (property) than B" +
          "中国ちゅうごくのほうが日本より大きいです。China is larger than Japan. If you want to ask a question comparing two items: A と B と どちらのほう / どっちのほうが (property)。= Between A and B, which is more (property)?",
      },
      {
        number: "10.2",
        title: "Comparison among Three or More Items",
        id: "section2",
        content:
          "10.2 Comparison among Three or More Items In comparing three or more items, the degree qualifier いちばん is used. 一番 (いちばん) = number one; first 中 (なか) = inside; interior[ A と B と C ]	の中なかで A がいちばん (property)。" +
          "= Between A and B, which is more (property)? A: カナダとフランスと日本の中で、どこがいちばん寒さむいですか? Among Canada, France, and Japan, which country has the coldest climate? B: カナダがいちばん寒いと思おもいます。Canada is the coldest, I think." +
          "Note that the words のほう and どっち are not used in statements of comparison among three or more items. Normal question words like だれ, どれ, 何なに, いつ, and どこ are used instead.",
      },
      {
        number: "10.3",
        title: "Adjective/Noun + の",
        id: "section3",
        content:
          "10.3 Adjective/Noun + の When a noun follows an adjective, and it's clear what the context is, you can replace the noun with the indefinite の, one, to avoid repetition. の mostly stands for things, not people." +
          "私は黒くろいセーターを持もっています。赤あかいの持っています。（の = ケーキ）I have a black sweater. I have a red one, too." +
          "い-adjective	な-adjective + noun + の You can also use の in the sense of mine, yours, and so forth, referring to things owned by a person, or characterized by a place name." +
          "A: これはソラさんのかばんですか？ Is this Sora's bag? B:いいえ、それはメアリーさんのかばんです。No, that is Mary's. アメリカの車くるまのほうがに日本の車くるまより大おおきいです。American cars are larger than Japanese ones. noun1 の noun2	→	noun1 の noun2",
      },
      {
        number: "10.4",
        title: "～つもりだ",
        id: "section4",
        content:
          "10.4 ～つもりだ つもり follows verbs in the present tense short forms to desribe what a person is planning to do in the future. You can also use a verb in the negative plus つもり to describe what you are planning not to do, or what you do not intend to do." +
          "verb (short, present) + つもりだ	(I) intend to do ... （私は）週末しゅうまつにたけしさんとテニスをするつもりです。I intend to play tennis with Takeshi this weekend. 山下先生はあした大学に来こないつもりです。Professor Yamashita does not intend to come to school tomorrow." +
          "You can also use the past tense to talk about your original intention. お寺てらを見に行くつもりでしたが、天気てんきがよくなかったから、行きませんでした。We were planning to visit a temple, but we didn't, because the weather was not good.",
      },
      {
        number: "10.5",
        title: "Adjective + なる",
        id: "section5",
        content:
          "10.5 Adjective + なる The verb なる means to become, indicating a change. なる follows nouns and both types of adjectives. い-adjectives:	暖あたたかい	→	暖かくなる	to become warm/warmer な-adjectives:	静しずか (な)	→	静かになる	to become quiet/quieter" +
          "nouns:	会社員かいしゃいん	→	会社員になる	to become a company employee 日本語の勉強が楽たのしくなりました。Studying the Japanese language is fun now. With い-adjectives, the final い is dropped and く is added." +
          "When you use an adjective with なる, you may be describing an absolute change (e.g., it has become warm; it is not cold anymore) or a relative change (e.g., it has become warmer, but it is still cold).Use the pattern for comparison with なる if you want to talk in relative terms." +
          "メアリーさんは前まえより日本語が上手じょうずになりました。 Mary has become better in Japanese than before.",
      },
      {
        number: "10.6",
        title: "どこかに / どこにも",
        id: "section6",
        content:
          "10.6 どこかに / どこにも something 何か someone	だれか somewhere	どこか not anything	何も	not anyone	だれも	not anywhere	どこも" +
          "You do not need the particles は, が, or を with these words. You do need other particles, such as に, へ, and で. A: どこかへいきましたか。Did you go anywhere?" +
          "B: いいえ、どこへも行きませんでした。No, I didn't go anywhere. A: だれかに会あいましたか。Did you see anybody? B: いいえ、だれもに会あいませんでした。 No, I didn't see anybody." +
          "A: 何かしましたか。Did you do anything? B: いいえ、何も* しませんでした。No, I didn't do anything. *Note that を was not used.",
      },
      {
        number: "10.7",
        title: "で",
        id: "section7",
        content:
          "10.7 で Use で with nouns that describe means of transportation and instruments you use." +
          "はしでご飯はんを食たべます。We eat our meals with chopsticks. 日本語で話はなしましょう。Let's talk in Japanese. バスで駅いえまでいきました。I went to the station by bus." +
          "テレビで映画えいがを見みました。I saw a movie on TV.",
      },
    ],
  },
  {
    title: "Lesson 11: 休みのあと (After the Vacation)",
    path: "/lesson11",
    sections: [
      {
        number: "11.1",
        title: "～たい",
        id: "section1",
        content:
          "11.1 ～たい Use a verb stem (before ます) + たいです to describe hope or aspiration. 今度こんどの週末しゅうまつは、映画いえがを見たいです。I want to see a film this weekend." +
          "いつか中国ちゅうごくに行いきたいです。I want to go to China someday. verb stem + たいです	I want to do ... A verb that usually takes the particle を can either have the particle を or が when it is followed by たい. Particles other than を remain the same, like に." +
          "たい conjugates as an い-adjective. Examples of negative and past tense: あの人ひとには会あいたくないです。I don't want to see that person. お弁当べんとうか買かいたかったから、コンビニに行いきました。I went to a convenience store, because I wanted to buy a boxed lunch." +
          "If you wanted something for some time, you can use たい思ともっています instead of たいです. 留学りゅうがくしたいと思ともっています。I've wanted to study abroad." +
          "You do not use たいです to describe wishes held by others. Somebody's else' wants or wishes are usually in quotations, observations, or guesses. If you want to say that somebody other than you wants to do something, use と言いっていました with たい. メアリーさんはチベットに行いきたい言いっていました。Mary said she wanted to go to Tibet." +
          "To describe your observation that somebody wants to do something, you use a special verb たがっている instead of たい. If a verb takes the particle を, the derived verb がっている will retain を, unlike たい. メアリーさんは着物きものを着きたがっています。(It seems) Mary wants to wear a kimono." +
          "The verb たがっている, which comes from the dictionary form たがる, indicates I  think that she wants to, because of the way she is behaving. I want to ... / Do you want to ... ?	They want to ..." +
          "• verb stem + たいです	• verb stem + たがっています • たい conjugates as an い-adjective	• たがる conjugates as an u-verb • が or を for direct object	• を only",
      },
      {
        number: "11.2",
        title: "～たり～たりする",
        id: "section2",
        content:
          "11.2 ～たり～たりする We know that te-form connects two clauses together: 大阪おおさかで買かい物ものをして、晩ばんご飯はんを食たべます。In Osaka, I will do some shopping and eat dinner." +
          "However, this only suggests that shopping and inner are the only activities planned and that those two activities will be done in that order. To avoid such implications and only want to mention activities or events as examples, and in no set order, use a special predicate form ～たり～たりする." +
          "大阪おおさかで買かい物ものをしたり、晩ばんご飯はんを食たべたりします。In Osaka, I will do such things as shopping and eating dinner. verb (short, past) + り、verb (short, past) + り do such things as this and that" +
          "To get たり form of a predicate (such as したり and 食べたり), add り to the past tense short form of a predicate (した and 食べた). The helping verb する at the end of the sentence indicates the tense of the sentence." +
          "週末しゅうまつは勉強べんきょうしたり、友だちと話はなしたりしました。I studied and talked with my friends, among other things, over the weekend." +
          "踊おどったり、音楽おんがくを聞きいたりするのが好きです。I like dancing, listening to music, and so forth.",
      },
      {
        number: "11.3",
        title: "～ことがある",
        id: "section3",
        content:
          "11.3 ～ことがある The past tense short form of a verb + ことがある describes that you did something, or something happened." +
          "富ふ富じ山さんに登のぼったことがあります。I have had the experience of climbing Mt. Fuji. たけしさんは授業じゅぎょうを休やすんだことがありません。Takeshi has never been absent from classes (in his life)." +
          "verb (short, past, affirmative) + ことがある	have the experience of ... If someone asks you a question using ことがありますか, you can reply あります/ありません or repeat the whole verbal complex but not ことがあります without a verb." +
          "A: ヨーロッパに行いったことがありますか。Have you ever been to Europe? B: はい、行いったことがあります。  はい、あります。( X はい、ことがあります。) Yes, I have.",
      },
      {
        number: "11.4",
        title: "Noun A や Noun B",
        id: "section4",
        content:
          "11.4 Noun A や Noun B や connects two nouns like と. や suggests that things referred to are proposed as examples, much like たり. Think of や as in etc." +
          "A や B	A and B, for example 京都きょうとや奈な良らに行いきました。I went to Kyoto and Nara (for example, and may have visited other places as well).",
      },
    ],
  },
  {
    title: "Lesson 12: 病気 (Feeling ill)",
    path: "/lesson12",
    sections: [
      {
        number: "12.1",
        title: "～んです",
        id: "section1",
        content:
          "12.1 ～んです There are two distinct ways to make a statement in Japanese. One is to report the facts as they are observed. The other, is the mode of explaining things. short form (verbs/adjectives/nouns) + んです" +
          "= explanation in terms of the verbs/adjectives/nouns You can sound more apologetic if you offer an explanation of being late by saying んです. Compare: バスが来きませんでした。The bus didn't come. バスが来こなかったんです。(As it happens,) the bus didn't come." +
          "んです connects a fact to another element under discussion, serving as a link between what happened and an explanation for it. あしたテストがあります。I have an exam tomorrow. あしたテストがるんです。I have an exam tomorrow. (So I can't go out tonight.)" +
          "トイレにいきたいです。I want to go to the bathroom. トイレにいきたいんです。I want to go to the bathroom. (So tell me where it is.) んです itself is invariant and does not usually appear in negative or past tense forms, but the predicate before it can be affirmative or negative, present tense or past tense." +
          "成績せいせきがよくないんです。 (in reponse to the question Why do you look so upset?) (As a matter of fact) My grade is not good. 試験しけんが終おわったんです。(explaining to a person who has caught you smiling) The exam is over. (That's why I'm smiling.)" +
          "When it follows a noun or a な-adjective in the present tense affirmative, な comes in between. report sentences explanation sentences な-adjectives: 静しずかです 静しずかなんです nouns: 学がく生せいです 学がく生せいなんです" +
          "Use んです in questions to invite clarifications from the person you are talking to. It is often used with question words, such as どうして (why) どうした (what has happened). A: どうして彼かれと別わかれたんですか。Why did you break up with your boyfriend? (You've got to tell me.)" +
          "B: 彼かれ、ぜんぜんお風ふ呂るに入はいらないんです。Oh, him. He never takes a bath. (That's a good enough reason, isn't it?) A: どうしたんですか What happened? (You look shattered.) B: うちの猫ねこが死しんだんです。My cat died. (That should explain how I look today.)" +
          "You can also use んです to provide additional comment/context on what was just said. A: かわいいノートですね。That's a cute notebook. B: ええ。日本んで買かったんです。You bet. I bought it in Japan (for your information)." +
          "In the written language, you see のです instead of んです. It has the same functions but it stylistically more formal.",
      },
      {
        number: "12.2",
        title: "～すぎる",
        id: "section2",
        content:
          "12.2 ～すぎる Verb stems may be followed by the helping verb すぎる, which means too much, or excess. すぎる conjugates as a regular ru-verb. 早はやく起おきすぎました。I got up too early." +
          "食たべすぎてはいけません。You must not eat too much. すぎる can also follow い- and な-adjective bases. You drop the い and な at the end of the adjectives and then add すぎる. (高たかい) この本ほんは高たかすぎます。This book is too expensive." +
          "(静しずかな) この町まちは静しずかすぎます。This town is too quiet. verb stem/adjective stem + すぎる	... too much Use すぎる when something is beyond normal or proper, suggesting that you do not welcome it. Thus 親切しんせつすぎます (too kind) for example is not a straightforward compliment. Use modifiers like とても and すごく if you want to say that something is in a high degree.",
      },
      {
        number: "12.3",
        title: "～ほうがいいです",
        id: "section3",
        content:
          "12.3 ～ほうがいいです ほうがいいです means it is better (for you) to do ... sentence which you can use to give advice. ほうがいいです follows a verb in the short form. You usually use the past tense of a verb with ほうがいいです if the verb is in the affirmative. When the advice is in the negative, the verb is in the present tense." +
          "verb (short, past, affirmative) verb (short, present, negative) + ほうがいいです It is better. It is better not ... もっと野や菜さいを食たべたほうがいいですよ。You'd better eat more vegetables. 授業じゅぎゅうを休やすまないほうがいいですよ。It is better not to skip classes.",
      },
      {
        number: "12.4",
        title: "～ので",
        id: "section4",
        content:
          "12.4 ～ので Use ので to give the reason for the situation described in the balance of the sentence. Semantically, ので is similar to から. Stylistically, ので sounds slightly more formal and is used extensively in the written language." +
          "(reason) ので  (situation)。	(situation), because (reason). いつも日本語で話はなすので、日本語が上手じょうずになりました。My Japanese has improved, because I always speak Japanese. 宿題しゅくだいがたくさんあなったので、きのうの夜よる、寝ねませんでした。I did not sleep last night, because I had a lot of homework." +
          "The reason part of ので sentence is usually in a short form. When ので follows a な-adjective or a noun in a present tense affirmative clause, な comes in between, as it did with the explanatory predicate んです." +
          "その 人ひととはいじわるなので、きらいです。I do not like that person, because he is mean. (Compare: いじわるだから ) " +
          "今日今日きょうは日にち曜よう日びなので、銀ぎん行こうは休やすみです。Banks are closed, because today is a Sunday. (Compare: 日にち曜よう日びだから )",
      },
      {
        number: "12.5",
        title: "～なければいけません / ～なきゃいけません",
        id: "section5",
        content:
          "12.5 ～なければいけません / ～なきゃいけません Use なければいけません and なきゃいけません to say it is necessary to do something. The なければ is more formal and often seen in the written language. The なきゃ version is more colloquial and mainly found in the spoken language." +
          "試し験けんがあるから、勉強べんきょうしなければいけません / なきゃいけません。I have to study, because there will be an exam. なければ and なきゃ mean if you do not do ... and いけません roughly means you cannot go. Combined, you would get the meaning you cannot go not doing ..., giving a sense of the affirmative mandate. Because of the double negatives, drop the last い and replace it with ければ or きゃ." +
          "verb	short negative must 食たべる	食たべない 食たべなければいけません / 食たべなきゃいけません 言いう	言いわない	言いわなければいけません / 言いわなきゃいけません する	しない	しなければいけません / しなきゃいけません くる	こない	こなければいけません / こなきゃいけません" +
          "You can change いけません to いけませんでした to say you had to. You can use the short form なきゃいけない in causal speech. You can further shorten it to なきゃ." +
          "今朝けさは、六ろく時じに起おきなきゃいけませんでした。(long form, past) I had to get up at six this morning. 彼かの女じょが来くるから、部へ屋やを掃そう除じしなきゃ ( いけない )。(short form, present) I must clean the room, because my girlfriend is coming.",
      },
      {
        number: "12.6",
        title: "でしょうか",
        id: "section6",
        content:
          "12.6 でしょうか If you ask somebody a question they don't know the answer to, they may be embarassed. You can avoid awkward situations by phrasing questions with でしょうか, which adds politeness." +
          "A: あした、雨あめが降ふるでしょうか。Would it rain tomorrow? B: 降ふると思おもいます。I think it will. でしょう means probably. By asking でしょうか, you are implying that you think the listener probably has a better-informed opinion. でしょうか follows short form predicates. When it follow a noun or a な-adjective in a present tense affirmative sentence, it follows them without だ in between." +
          "来週らいしゅうは暖あたたかいでしょうか。Would you say that it will be warm next week? トマトは野や菜さいでしょうか。 ( X 野や菜さいだでしょうか) Is a tomato a vegetable? これ、もう話はなしたとしようか。What happened? (You look shattered.)" +
          "Use non-interrogative でしょう to make a guess. Add たぶん in the sentence to signal that it's a guess. たぶなしたは寒さむくないでしょう。I bet it will not be cold tomorrow.",
      },
    ],
  },
  {
    title: "Lesson 13: アルバイト探し (Looking for a Part-time Job)",
    path: "/lesson13",
    sections: [
      {
        number: "13.1",
        title: "Potential Verbs",
        id: "section1",
        content:
          "13.1 Potential Verbs table Use the potential verb to say that someone can or has the ability to do something, or that something is possible." +
          "私は日本語が話はなせます。I can speak Japanese. 私は泳およげないんです。(The truth is) I cannot swim. 雨あめが降ふっ他ので、海うみに行いけませんでした。We could not go to the beach, because it rained." +
          "Potential verbs rules: Potential verbs • ru-verbs: Drop the final -ru and add -rareru. 見る (mi-ru)	→	見られる (mi-rare-ru) • u-verbs: Drop the final -ru and add -eru. 行いく (ik-u)	→	行いける (ik-eru)	作つくる	→	作つくれる" +
          "話すはな	→	話すはなせる	泳およぐ	→	泳およげる 待まつ	→	待まてる	遊あそぶ	→	遊あそべる 死しぬ	→	死しぬる	買かう	→	買かえる 読よむ	→	読よめる • irregular verbs: くる	→	こられる	する	→	できる" +
          "Think of the u-verb conjugation as moving up and down in the hiragana chart. 書か話はな	待ま死し読よ作つく泳およ遊あそ買か negative	かさたなまらがばわ～ない stem	きしちにみりぎびい～ます affirmative	くすつぬむるぐぶう = Dictionary form potential けせてねめれげべえ～る" +
          "The potential verbs for ru-verbs are longer than those for u-verbs. There are shorter, alternative potential verbs for ru-verbs and the irregular verb くる, which use the suffix -reru, instead of -rareru. With and without ra	potential forms	ra-less potential forms" +
          "ru-verbs:	出でる	→	出でられる	出でれる 見みる	→	見みられる	見みれる irregular verbs:	くる	→	こられる	これる Potential verbs themselves conjugate as regular ru-verbs. Table of conjugation pattern of potential verbs: Conjugation of potential verbs" +
          "e.g. 書かける	short form	long form affirmative	negative [Present]	書かける	書かけない	書かけます	書かません 書かけた	書かけなかった	書かけました	書かけませんでした [Te-form]	書かけて" +
          "Verbs that take the particle を can take either を or が when they turn into potential verbs. できる, the potential counterpart of する, almost takes が all the time. All particles other than を remains the same when converted into the potential. Particles in potential sentences" +
          "• verbs with を: 漢かん字じを読よむ	→	漢かん字じが読よめる or漢かん字じを読よむ • するーできる: 仕し事ごとをする	→	仕し事ごとができる (仕し事ごとをできる is much less commonly used.) • verbs with particles other than を: 山やまに登のぼる	→	山やまに登のぼれる(No particle change involved.)" +
          "You can express the idea of can do using a more complex construction: verb dictionary form + ことができる. メアリーさんはギターを弾ひくことができます。(Compare: ギターを弾ひけます) Mary can play the guitar." +
          "このアパートでは犬いぬを飼かうことができません。(Compare: 犬いぬが飼かえません) You cannot keep dogs in this apartment.",
      },
      {
        number: "13.2",
        title: "～し",
        id: "section2",
        content:
          "13.2 ～し Similar to から, as in to give a reason for something, し can also be used to give a reason. 日本語は面おも白しろいから、日本語の授業じゅぎょうが大だい好きです。I really like my Japanese class, because Japanese is interesting." +
          "When you mention more than one reasons, you can use し in place of から. し usually follows a predicate in the short form. (reason1) し、(reason2) し、(situation)。日本語は面おも白しろいし、先せん生せいはいいし、私は日本語の授業じゅぎょうが大だい好きです。I really like my Japanese class, because Japanese is interesting, and our teacher is good." +
          "When you use just one し clause, you imply that it is not the only reason for the situation. 物ぶっ価かが安やすいし、この町まちの生せい活かつは楽らくです。Life in this city is easygoing. Things are inexpensive, for one thing. You can also add the し clause in a separate sentence, providing reasons for the situation mentioned." +
          "山やま下した先せん生せいはいい先せん生せいです。教おしえるのが上じょう手ずだし、親しん切せつだし。Professor Yamashita is a great teacher. He is good at teaching, and he is kind. Note that you find だ in the present tense with な-adjectives and nouns, but not with い-adjectives." +
          "い-adjectives:	おもしろいし	(X おもしろいだし) な-adjectives:	好すきだし	(X 好すきし) noun + です:	学がく生せいだし	(X 学がく生せいし)",
      },
      {
        number: "13.3",
        title: "～そうです (It looks like...)",
        id: "section3",
        content:
          "13.3 ～そうです (It looks like...) We add そうで to い- and な-adjective bases to say that something seemingly has those properties. We are guessing what something is like on the basis of our impressions. このりんごはおいしそうです。This apple looks delicious." +
          "明日あしたは天てん気きが良よさそうです。It looks like the weather will be fine tomorrow. To form ～そうです sentences with い-adjectives, you drop the final い; with な-adjectives, you just drop な. An exception is い-adjective いい, which changes to よさ before そう." +
          "い-adjectives:	おいしい	→	おいしそうです (exception)	いい	→	よさそうです な-adjectives:	元げん気き（な）	→	元げん気きそうです You can use そうです with negative adjectives too. ない is changed to なさ before そう." +
          "この本ほんは難むずかしくなさそうです。This book does not look difficult. ソラさんはテニスが上じょう手ずじゃなさそうです。It does not look like Sora is good at tennis. You can use the adjective + そう combination to qualify a noun. そう is a な-adjective, so we say そうな before a noun." +
          "暖あたたかそうなセーターを着きています。She is wearing a warm-looking sweater. In many そうです sentences, the guesswork is done on the basis of visual impressions. We use そうです when we lack conclusive evidence. We do not use そう for visual evidence, such as X きれいそうです for looking something pretty. If we can see it, then we have evidence to conclude that it is pretty.",
      },
      {
        number: "13.4",
        title: "～てみる",
        id: "section4",
        content:
          "13.4 ～てみる You can use the te-form of a verb plus the helping verb みる to express the idea of doing something tentatively, or trying something. You're not sure what the outcome is, but you try it and see what the consequences are." +
          "漢かん字じがわからなかったので、日本人じんの友達だち に聞きいてみました。I did not know the kanji, so I tried asking a Japanese friend of mine. A: この本ほん、面おも白しろかったですよ。This book was interesting." +
          "B: じゃあ、読よんでみます。Okay, I will take a look at it. みる comes form the verb 見る, and conjugates as a regular ru-verb. Unlike the main verb, 見る, ～てみる is always written in hiragana.",
      },
      {
        number: "13.5",
        title: "なら",
        id: "section5",
        content:
          "13.5 なら なら is attached to a sentence which describes the condition where certain events or situations happen. Often translated as if. The main ideas of a なら sentence are contrast and limitation, usually indicating specific situation or condition where something applies." +
          "Example 1: A: ブラジルに行いったことがありますか。Have you ever been to Brazil? B: チリなら行いったことがありますが、ブラジルは行いったことがありません。I've been to Chile, but never to Brazil (If the question were about Chile, yes, but Brazil, no.)" +
          "Example 2: A: 日本語が読よめますか。Can you read Japanese? B: ひらがななら読よめます。If it is (written) in hiragana, yes. なら introduces a sentence that says something positive about the item that is contrasted.",
      },
      {
        number: "13.6",
        title: "一週間に三回",
        id: "section6",
        content:
          "13.6 一週間に三回 You can describe the frequency of events over a period of time by using the following framework: (period) に (frequency)	(frequency) per (period)" +
          "Q : 一いっ週間しゅうかんに何なん回かい髪かみを洗あらいますか。How many times a week do you shampoo? A : 私は一いっ週間しゅうかんに三回かい髪かみを洗あらいます。I shampoo three times a week." +
          "一いち日にちに三時じ間かんぐらいゲームをします。I play games for about three hours a day. 一いっか月げつに三日みっかか四日よっか、アルバイトをします。I work part-time three or four days a month.",
      },
    ],
  },
  {
    title: "Lesson 14: バレンタインデー (Valentime’s Day)",
    path: "/lesson14",
    sections: [
      {
        number: "14.1",
        title: "ほしい",
        id: "section1",
        content:
          "14.1 ほしい ほしい means to want something. ほしい follows the い-adjective conjugation pattern. The object of desire is usually followed by the particle が. In negative sentences, the particle は is also used. いい成せい績せきがほしいです。I want a good grade." +
          "子こ月ども子の時とき、ポケモンのゲームがほしかったです。When I was young, I wanted a Pokémon game. Q : プレゼントがほしい？ Do you want a present? A : ううん、ほしくない。No, I don't. （私わたしは）X が　ほしい	I want X." +
          "ほしい is like たい (I want to do...), and its use is mostly limited to the first person, the speaker. We can say ほしい to say I want this, but not someone else like Mary wants that. To talk about someone else's wishes or desires, you either quote that person's expression of desire, or describe it as your guess." +
          "ヤスミンさんは新あたらしいスマホがほしいと言いっています。Yasmin says she wants a new phone. 亜あ美みさんはぬいぐるみがほしくないでしょう。Ami probably doesn't want a stuffed animal. You can replace ほしい with the derived verb ほしがる, which indivates that you can tell by the way the person acts that they want something. ほしがる conjugates as an u-verb and is usually used in the form ほしがっている. Unlike ほしい, the particle after the object of desire is を." +
          "ななみさんは英えい語ごを習ならいたがっています。＜ 習ならいたい (I understand that) Nanami wants to study English. カルロスさんは友とも達だちをほしがっています。＜ ほしい (I understand that) Carlos wants a friend." +
          "Because the core meaning of ほしい is desire to possess, when you can use a verb + たい instead of ほしい, you should use the verb. 昼ひるご飯はんが食たべたい。( not 昼ひるご飯はんがほしい ) 旅りょ行こうに行きたい ( not 旅りょ行こうがほしい )",
      },
      {
        number: "14.2",
        title: "～かもしれません",
        id: "section2",
        content:
          "14.2 ～かもしれません かもしれません means that something is a possibility. When you think that something may be the case. When you say かもしれません, you are not sure about the state of affairs than when you say でしょう. In casual speech, you could say かもしれない or かも." +
          "short form + かもしれません	Maybe ... You can add かもしれません to the short forms of predicates, in the affirmative and in the negative, in the present as well as the past tense. あしたは雨あめが降ふるかもしれません。It may rain tomorrow. 田た中なかさんより、鈴すず木きさんのほうが背せが高たかいかもしれない。Suzuki is perhaps taller than Tanaka." +
          "明日あしたは天てん気きがよくないかも。The weather may not be good tomorrow. ロバートさんは、子こ供どもの時とき、いじわるだったかもしれません。Robert may have been a bully when he was a kid. When the last part of a sentence is a noun or a な-adjective in the present tense, put かもしれません directly after that noun or な-adjective. だ is dropped in the sentences." +
          "ウデイさんはインド人じんだ。Uday is an Indian. ウデイさんはインド人じんかもしれません。Uday may be an Indian. 山やま下した先せん生せいは犬いぬがきらいだ。Professor Yamashita doesn't like dogs. 山やま下した先せん生せいは犬いぬがきらいかもしれません。Professor Yamashita may not like dogs.",
      },
      {
        number: "14.3",
        title: "あげる / くれる / もらう",
        id: "section3",
        content:
          "14.3 あげる / くれる / もらう chart diagram picture frame drawing arrow circle you close friend relatives random a b Japanese has two verbs for giving: あげる and くれる. The verb depends on the direction of the giving. Use くれる when the direction is moving closer to you, and あげる when things are moving away from you in a direction." +
          "With both あげる and くれる, the giver is the subject of the sentence, and is accompanied by the particle は or が. The recipient is accompanied by the particle に. 私わたしはその女おんなの人ひとに花はなをあげます。I will give the woman flowers. その女おんなの人ひとは男おとこの人に時計とけいをあげますた。The woman give the man a watch." +
          "両親りょうしんが（私わたしに）新あたらしい車くるまをくれるかもしれません。My parents may give me a new car. そのプレゼント、だれがくれたんですか。Who gave you that present? Giver + は / が + Receiver + に + あげる くれる (giver) gives to (recipient)" +
          "Transactions that are describe with the verb くれる can also be described in terms of receiving or もらう. With もらう, it is the recipient that is the subject of the sentence, and the giver is accompanied by the particle に or から. Receiver + は / が + Giver+ に / から + もらう	(receiver) receives from (giver)" +
          "私は　姉あねに / 姉あねから　マフラーをもらいました。I received a winter scarf from my big sister. 姉あねが私にマフラーをくれました。My big sister gave me a winter scarf.",
      },
      {
        number: "14.4",
        title: "たらどうですか",
        id: "section4",
        content:
          "14.4 たらどうですか たらどうですか after a verb conveys advice or recommendation. The initial た in たらどうですか stands for the same ending as in the past tense short form of a verb in the affirmative. In casual speech, たらどうですか may be shortened to たらどう or たら." +
          "verb (short, past) + らどうですか	why don't you... 薬くすりを飲のんだらどうですか。How about taking some medicine? もっと勉強べんきょうしたらどう。Why don't you study harder? たらどうですか may sometimes have a disapproving tone, expressing criticism of the person for not having performed the action already. Therefore, it's safer to avoid using it unless you were asked for advice." +
          "On a side note, the phrase should not be used for extending invitations. If you want to invite your friend to visit, do not use たらどうですか, but use ませんか. うちに来きませんか。Why don't you come to my place? Compare: X うちに来きたらどうですか。",
      },
      {
        number: "14.5",
        title: "Number + も / Number + しか + Negative",
        id: "section5",
        content:
          "14.5 Number + も / Number + しか + Negative Basic structure for expressing numbers in Japanese: noun	が を +	number" +
          "私わたしのうちには猫ねこが三さん匹びきいます。There are three cats in our house. 傘かさを二に本ほん買かいました。We bought two umbrellas. You can add も to the number word when you want to say as many as." +
          "私わたしの母ははは猫ねこを三さん匹びきも飼かっています。My mother owns three, count them, three cats. きのパーティーには学生がくせいが二に十人じゅうにんも来きました。As many as twenty students showed up at the party yesterday. You can add しか to number word, and turn the predicate into the negative when you want to say as few as or only." +
          "私は日に本ほん語ごの本ほんを一冊いっさつしか持もっていません。I have only one Japanese book. この会かい社しゃにはパソコンが二に台だいしかありません。There are only two computers in this company. number + も as many as number + しか　ない	as few as",
      },
    ],
  },
  {
    title: "Lesson 15: A Trip to Nagano",
    path: "/lesson15",
    sections: [
      {
        number: "15.1",
        title: "Volitional Form",
        id: "section1",
        content:
          "15.1 Volitional Form The volitional form of a verb is a more casual equivalent of ましょう. You can use it to suggest a plan to a close friend. A: 明日あしたは授業じゅぎょうがないから、今こん晩ばんはどこかにいこう。We won't have any classes tomorrow. Let's go somewhere this evening." +
          "B: いいえ、そうしよう。Sounds good. Let's do so. You can make the volitional forms using the rules listed below: Potential verbs • ru-verbs: Drop the final -ru and add -yoo. 見る (mi-ru)	→	見よう (mi-yoo)" +
          "• u-verbs: Drop the final -ru and add -oo. 行いく (ik-u)	→	行いこう (ik-oo)	作つくる	→	作つくろう 話すはな	→	話すはなそう	泳およぐ	→	泳およごう 待まつ	→	待まとう	遊あそぶ	→	遊あそぼう 死しぬ	→	死しのう	買かう	→	買かおう 読よむ	→	読よもう • irregular verbs: くる	→	こよう	する	→	しよう" +
          "Think of the u-verb conjugation as moving up and down in the hiragana chart. 書か話はな	待ま死し読よ作つく泳およ遊あそ買か negative	かさたなまらがばわ～ない stem	きしちにみりぎびい～ます affirmative	くすつぬむるぐぶう = Dictionary form potential けせてねめれげべえ～る volitional	こそとのもろごぼお～う" +
          "You can use the volitional plus the question particle か to ask for an opinion in your offer or suggestion. A: 手て伝つだうおうか。Shall I lend you a hand? B: ううん、大丈夫だいじょうぶ。No, I'm doing okay. A: 今こん度ど、いつ会あおうか。When shall we meet again? B: 来週らいしゅうの土ど曜よう日びはどう？ How about Saturday next week?",
      },
      {
        number: "15.2",
        title: "Volitional Form + と思っています",
        id: "section2",
        content:
          "15.2 Volitional Form + と思っています We use the volitional form + と思っています to talk about our resolutions. 毎まい日にち三さん時じ間かん日に本ほん語ごを勉強べんきょうしようと思おもっています。I've decided to / I'm going to study Japanese for three hours every day." +
          "You can also use the volitional + と思います, suggesting that the decision to perform the activity is being made on the spot, or spontaneously, at the time of speaking. と思っています, in contrast, suggests that you have already decided to do something." +
          "Situation 1 Q: 十万円じゅうまんえあげましょう。何なにに使つかいますか。I will give you 100,000 yen. What will you use it for? A: 旅りょ行こうに行いこうと思おもいます。I will go on a trip. (decision made on the spot)" +
          "Situation 2 Q: 両親りょうしんから十万円じゅうまんえもらったんですか。何なにに使つかいますか。You got 100,000 yen from your parents? What are you going to use it for? A: 旅りょ行こうに行いこうと思おもっています。I am going to go on a trip. (decision already made)" +
          "Note that verbs in volitional forms and verbs in the present tense convey different ideas when they are used with と思います or と思っています. When you use volitionals, you are talking about your intention. When you use the present tense, you are talking about your prediction." +
          "日に本ほんの会かい社しゃで働はたらこうと思おもいます。I will / intend to work for a Japanese company. 日に本ほんの会かい社しゃで働はたらくと思おもいます。I think they / I will be working for a Japanese company.",
      },
      {
        number: "15.3",
        title: "～ておく",
        id: "section3",
        content:
          "15.3 ～ておく The te-form of a verb plus the helping verb おく describes an action performed in preparation for something. 明日あした試し験けんがあるので、今こん晩ばん勉強べんきょうしておきます。Since there will be an exam tomorrow, I will study (for it) tonight." +
          "だともだちが来くるから、部へ屋やを掃そう除じしておかなきゃいけません。I have to clean the room, because my friends are coming. ～ておく	do something in preparation" +
          "ておく is often shortened to とく in speech. ホテルを予よやく約やくしとくね。I will make a hotel reservation in advance.",
      },
      {
        number: "15.4",
        title: "Using Sentences to Qualify Nouns",
        id: "section4",
        content:
          "15.4 Using Sentences to Qualify Nouns In the phrase おもしろい qualifies the noun 本ほん and tells us what kind of book it is. You can also use sentences to qualify nouns. Examples of sentences that use qualifiers of nouns:" +
          "1.	昨日買った	本	the book that I bought yesterday 2.	彼かれがくれた	本	the book my boyfriend gave me 3.	つくえの上うえにある	本	the book that is on the table 4.	日本で買えない	本	the book that you can't buy in Japan" +
          "Qualifier sentences shows what kind of book we are talking aboutm just like adjectives. A qualifier sentence + noun combination is just like one big noun phrase. You can put it anywhere in a sentence that has a noun. これは去年きょねんの誕生たんじょう日びに彼かの女じょがくれた本ほんです。(cf. これは本ほんです。) This is a book that my girlfriend gave me on my birthday last year." +
          "父ちちが村むら上かみ春はる樹きが書かいた本ほんをくれました。(cf. 父ちちが本ほんをくれました。) My father gave me a book that Haruki Murakami wrote." +
          "私わたしが一いち番ばん感かん動どうした映えい画がは「生いきる」です。(cf. 映えい画がは「生いきる」です。) The movie I was touched by the most is To Live, a 1952 film directed by Akira Kurosawa.",
      },
    ],
  },
  {
    title: "Lesson 16: Lost and Found",
    path: "/lesson16",
    sections: [
      {
        number: "16.1",
        title: "～てあげる / てくれる / てもらう",
        id: "section1",
        content:
          "16.1 ～てあげる / てくれる / てもらう Lesson 14 has the verbs あげる, くれる, and もらう describe transactions of things. In this lesson, these verbs can also be used as helping verbs. When these verbs follow the te-form of a verb, they describe the giving and receiving of services." +
          "We use the te-form + あげる when we do something for the sake of others, or somebody does something for somebody else. The addition of the helping verb あげる does not change the basic meaning of the sentences, but puts focus on the fact that the actions were performed on demand or as a favor." +
          "私わたしは妹いもうとにお金かねを貸かしてあげました。I (generously) lent my sister money (to help her out of her destitute conditions). c.f. 私わたしは妹いもうとにお金かねを貸かしました。[an objective statement]" +
          "ななみさんはヤスミンさんを駅えきに連つれて行ってあげました。Nanami (kindly) took Yasmin to the station (because she would be lost if left all by herself). c.f. ななみさんはヤスミンさんを駅えきに連つれて行きました。[an objective statement]" +
          "We use くれる when somebody does something for us. 友ともだちが宿題しゅくだいを手て伝つだってくれます。A friend helps me with my homework (for which I am grateful). 親戚しんせきがリンゴを送おくってくれました。A relative sent me apples. (I should be so lucky.)" +
          "We use the te-form + もらう to say that we get, persuade, or arrange for, somebody to do something for us. In other words, we receive somebody's favor. The person performing the action for us is accompanied by the particle に." +
          "私わたしは友ともだちに宿題しゅくだいを手て伝つだってもらいました。I got a friend of mine to help me with my homework." +
          "Compare the last sentence with the くれる version below. They describe more or less the same event, but the subjects are different. In もらう sentences, the subject is the beneficiary. In くれる sentences, the subject is the benefactor." +
          "友ともだちが宿題しゅくだいを手て伝つだってくれました。A friend of mine helped me with my homework.",
      },
      {
        number: "16.2",
        title: "～ていただけませんか",
        id: "section2",
        content:
          "16.2 ～ていただけませんか Here are three ways to make a request. They differ in degrees of politeness shown to the person you are asking. ～て + いただけませんか	(polite) くれませんか くれない？	(casual)" +
          "We use the te-form of a verb + いただけませんか to make a polite request. This is more appropriate than ください when you request a favor from a nonpeer such as your professor or your boss or from a stranger. 手て伝つだっていただけませんか。Would you lend me a hand?" +
          "The te-form + くれませんか is a request which is roughly equal in the degree of politeness to ください. くれませんか comes from the verb くれる. This is probably the form most appropriate in the host-family context. ちょっと待まってくれませんか。Will you wait for a second?" +
          "You can use the te-form + くれない, or the te-form by itself, to ask for a favor in a very casual way. This is good for speaking with members of your peer group. それ取とってくれない？ or それ取とって。Pick that thing up (and pass it to me), will you?",
      },
      {
        number: "16.3",
        title: "～といい",
        id: "section3",
        content:
          "16.3 ～といい You can use the present tense short form + といいですね (polite) or といいね (casual) to say that you hope something nice happens. When you say といいですね or といいね, you are wishing for the good luck of somebody other than yourself." +
          "いいアルバイトが見みつかるといいですね。I hope you find a good part-time job. 雨あめが降ふらないといいね。I hope it doesn't rain." +
          "To say what you hope for, for your own good, you can use といいんですが (polite) or といいんだけど (casual). These endings show the speaker's attitude is more tentative and make the sentence sound more modest." +
          "試し験けんが易やさしいといいんですが。I am hoping that the exam is easy. 八はち時じの電でん車しゃに乗のれるといいんだけど。I hope I can catch the eight o'clock train." +
          "(short, present) と + いいですね / いいね I hope ... (for you/them) いいんですが / いいんだけど	I hope ... (for myself)" +
          "Note that all these といい sentences mean that you are hoping that something nice happens. This means that these patterns cannot be used in cases where you hope to do something nice, which is under your control. In such cases, you can usually turn the verb into the potential form." +
          "大だい学がくに行いけるといいんですが。Compare: X 大だい学がくに行いくといいんですが。I am hoping to go to college. = I am hoping that I can go to college.",
      },
      {
        number: "16.4",
        title: "～時",
        id: "section4",
        content:
          "16.4 ～時 We use the word 時とき to describe when something happens or happened. sentence A　時とき、	sentence B。	When A, B time reference	main event ↑" +
          "In the present tense of a verb, the verb is either at the same time as the main event or before it. 行いく時とき、ピザを食たべます。When I go, I eat pizza. 行いく時とき、ピザを食たべました。When I was going, I ate pizza." +
          "悲かなしい時とき、ピザを食たべます。When I'm sad, I eat pizza. 元げん気きな時とき、ピザを食たべます。When I'm energetic, I eat pizza. 病気びょうきな時とき、ピザを食たべます。When I'm sick, I eat pizza." +
          "When the verb is in the past tense, the main event happens after, or in the future. 行いった時とき、ピザを食たべます。When I've gone, I will eat pizza. 行いった時とき、ピザを食たべました。When I went (was already there), I ate pizza." +
          "悲かなしかった時とき、ピザを食たべました。When I was sad, I ate pizza. 元げん気きだった時とき、ピザを食たべました。When I was energetic, I ate pizza. 病気びょうきだった時とき、ピザを食たべました。When I was sick, I ate pizza." +
          "When something happens during an event, you can use te-iru form. ピザを食たべている時とき、幸しあわせだ。When I'm eating pizza, life is good.",
      },
      {
        number: "16.5",
        title: "～てすみませんでした",
        id: "section5",
        content:
          "16.5 ～てすみませんでした You use the te-form of a verb to describe the things you have done that you want to apologize for." +
          "汚きたない言こと葉ばを使つかってすみませんでした。I'm sorry for using foul language. デートの約やく束そくを忘わすれてごめん。Sorry that I stood you up. ～て　＋ すみませんでした (polite)	ごめん (casual) Sorry for doing ..." +
          "When you want to apologize for something you have failed to do, you use ～なくて, the short, negative te-form of a verb. (To derive the form, turn the verb into the short, negative ～ない, and then replace the last い with くて.)" +
          "宿題しゅくだいを持もってこなくて済みませんでした。早はやく言いわなくてごめん。I'm sorry I did not bring the homework. もっと早はやく言いわなくてごめん。Sorry that I did not tell you earlier.",
      },
    ],
  },
  {
    title: "Lesson 17: Grumble and Gossip",
    path: "/lesson17",
    sections: [
      {
        number: "17.1",
        title: "～そうです (I hear)",
        id: "section1",
        content:
          "17.1 ～そうです (I hear) table そうです means seemingly. It can also mean a hearsay report. The two そうです differ in semantics and forms of the predicates they are attached to. You can add そうです of a report to a sentence ending in the short form." +
          "If you heard someone say:		You can report it as: 「日に本ほん語ごの授業じゅぎょうは楽たのしいです。」Our Japanese class is fun.	→	日に本ほん語ごの授業じゅぎょうは楽たのしいそうです。I've heard that their Japanese class is fun." +
          "「先せん生せいはとても親しん切せつです。」Our professor is very kind.	→	先せん生せいはとても親しん切せつだそうです。I've heard that their professor is very kind." +
          "「今日きょうは授業じゅぎょうがありませんでした。」We did not have a class today.	→	その日ひは授業じゅぎょうがなかったそうです。I've heard that they didn't have a class that day." +
          "When we use そうです, the reported speech retains the tense and the polarity of the original utterance. We turn the predicates into their short forms. (Thus です after a な-adjective or a noun changes to だ, while です after an い-adjective is left out.) Compare the paradigms of the two そうです." +
          "～そうです I hear that ...	It looks like ... • verbs:	話はなす	→	話はなすそうです • い-adjectives:	さびしい	→	さびしいそうです	さびしそうです • な-adjectives:	好すきだ	→	好すきだそうです	好すきそうです • noun + です:	学がく生せいだ	→	学がく生せいだそうです" +
          "To specify the information source, you can preface a sentence with the phrase ～によると, as in トムさんによると (according to Tom), 新聞しんぶんによると (according to the newspaper report), and 天てん気き予よ報ぼうによると (according to the weather forecast)." +
          "天てん気き予よ報ぼうによると、台たい風ふうが来くるそうです。According to the weather forecast, a typhoon is approaching.",
      },
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
