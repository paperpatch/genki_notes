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
          "1.1, XはYです, topic particle, です, it is, noun structure, basic Japanese sentence structure",
      },
      {
        number: "1.2",
        title: "Question Sentences",
        id: "section2",
        content:
          "1.2, question sentences, ですか, ka particle, なんですか, nan desu ka, what is it",
      },
      {
        number: "1.3",
        title: "Noun1 の Noun2",
        id: "section3",
        content:
          "1.3, Noun1 の Noun2, Noun の Noun, possessive, の particle, of X, of Y, noun connection, connects two noun",
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
          "2.1, これ / それ / あれ / どれ, this, that, that one over there, which one",
      },
      {
        number: "2.2",
        title: "この / その / あの / どの + Noun",
        id: "section2",
        content:
          "2.2, この / その / あの / どの + Noun, this thing, that thing, that thing over there, which thing",
      },
      {
        number: "2.3",
        title: "ここ / そこ / あそこ / どこ",
        id: "section3",
        content:
          "2.3, ここ / そこ / あそこ / どこ, words for places, here, near me, there, near you, over there, where",
      },
      {
        number: "2.4",
        title: "だれの Noun",
        id: "section4",
        content:
          "2.4, How to ask who something belongs to, who, whose (with the posessive term no)" +
          "これはだれのかばんですか Kore wa dare no kaban desu ka.",
      },
      {
        number: "2.5",
        title: "Noun も",
        id: "section5",
        content:
          "2.5, Noun も, The particle for the word too, mo directly after, A は X です。 (A is X.), B も X です。 (B too is X.)",
      },
      {
        number: "2.6",
        title: "Noun じゃないです",
        id: "section6",
        content:
          "2.6, Noun じゃないです, negate a statement, you replace desu with ja nai desu" +
          "A は X じゃないです。 (A is not X.), Ja nai desu is colloquial (used in ordinary or familiar conversations)" +
          "じゃ is a contraction of de wa, A は X じゃありません, A は Xでわありません",
      },
      {
        number: "2.7",
        title: "~ね / ~よ",
        id: "section7",
        content:
          "2.7, ~ね / ~よ, end with sentence enders with the tags ne or yo, You use ね (ne) if you are seeking the listener's confirmation or agreement." +
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
        content: "3.1, Verb Conjugation, ",
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
        title: "~ませんか",
        id: "section5",
        content:
          "3.5, ~ませんか, to extend an invitation, ますか is used more like a question, not an invitation." +
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
          "It's accompanied by the particle が, instead of は. テレビがありません。I don't have a TV.",
      },
      {
        number: "4.2",
        title: "Describing Where Things Are",
        id: "section2",
        content:
          "4.2 Describing Where Things Are, Location Words, みぎ to the right of ひだり to the left of, まえ in front of" +
          "うし behind X は Y の なか です X は inside Y. うえ on/above した under/beneath ちかく near となり next to, X は Y と Z の あいだです。X is between Y and Z" +
          "銀行は図書館のとなりです。 The bank is next to the library.",
      },
      {
        number: "4.3",
        title: "Past Tense of です",
        id: "section3",
        content:
          "4.3 Past Tense of です, The past tense of です (it is) becomes じゃないです (it was). affirmative negative" +
          "Present ~ じゃないです Past	~ でした	~ じゃなかったです, あれは日本の映画じゃなかったです。 That was not a Japanese movie.",
      },
      {
        number: "4.4",
        title: "Past Tense of Verbs",
        id: "section4",
        content:
          "4.4 Past Tense of Verbs, Past tense forms of verbs end with ました. affirmative	negative, Present	~ ます	~ ません" +
          "Past	~ ました	~ ませんでした, メリーさんはく時頃家に帰りました。 Mary returned home at about nine.",
      },
      {
        number: "4.5",
        title: "も",
        id: "section5",
        content:
          "4.5 も You can also use も when two or more people perform the same activity. You can also use it when someone buys, sees, or eats two or more things." +
          "私は昨日京都に行きました。 I went to Kyoto yesterday. 山下先生も昨日京都に行きました。Professor Yamashita went to Kyoto yesterday, too." +
          "You replace は or を with も, but with other particles such as に and で, you keep them and follow them up with も." +
          "は / が / を	→	も に / で / etc.	→	にも / でも / etc.",
      },
      {
        number: "4.6",
        title: "一時間",
        id: "section6",
        content:
          "4.6 一時間, The duration of an activity is expressed with a bare noun., メリーさんはそこで たけしさんを一時間に待ちました。Mary waited for Takeshi there for an hour." +
          "Use ぐらい after ~時間 for an approximate measurement. 私は昨日 日本語を三時間ぐらい勉強しました。 I studied Japanese for about three hours yesterday." +
          "To say one hour an a half, you can add 半 immediately after ~時間. 昨日七時間半寝ました。(I) slept for seven and a half hours last night." +
          "You can combine 半 and ぐらい, where ぐらい comes last, as in 一時間半ぐらい. han",
      },
      {
        number: "4.7",
        title: "たくさん",
        id: "section7",
        content:
          "4.7 たくさん, If you want to add a quantity word to the direct object of a sentence, you can either place it before the noun, or after the particle を." +
          "京都で写真をたくさん撮りました。京都でたくさん写真を撮りました。You can also use both these orders in ある and いる sentences.",
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
      { number: "5.1", title: "", id: "section1", content: "5.1" },
      { number: "5.2", title: "", id: "section2", content: "5.2" },
      { number: "5.3", title: "", id: "section3", content: "5.3" },
      { number: "5.4", title: "", id: "section4", content: "5.4" },
      { number: "5.5", title: "", id: "section5", content: "5.5" },
      { number: "5.6", title: "", id: "section6", content: "5.6" },
    ],
  },
  {
    title: "Lesson 6: ロバートさんの一日 A Day in Robert's Life",
    path: "/lesson6",
    sections: [
      { number: "6.1", title: "", id: "section1", content: "6.1" },
      { number: "6.2", title: "", id: "section2", content: "6.2" },
      { number: "6.3", title: "", id: "section3", content: "6.3" },
      { number: "6.4", title: "", id: "section4", content: "6.4" },
      { number: "6.5", title: "", id: "section5", content: "6.5" },
      { number: "6.6", title: "", id: "section6", content: "6.6" },
      { number: "6.7", title: "", id: "section7", content: "6.7" },
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
        title: "Past Tense Short Forms in Quoted Speech: ~と思います",
        id: "section3",
        content: "9.3, Past Tense Short Forms in Quoted Speech: ~と思います",
      },
      {
        number: "9.4",
        title: "Past Tense Short Forms in Quoted Speech: ~と言っていました",
        id: "section4",
        content: "Past Tense Short Forms in Quoted Speech: ~と言っていました",
      },
      {
        number: "9.5",
        title: "Qualifying Nouns with Verbs and Adjectives",
        id: "section5",
        content: "9.5, Qualifying Nouns with Verbs and Adjectives",
      },
      {
        number: "9.6",
        title: "もう~ました and まだ~ていません",
        id: "section6",
        content: "9.6, もう~ました and まだ~ていません",
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
