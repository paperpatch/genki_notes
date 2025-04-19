import React from "react";
import { useSmoothScrollToSection } from "../../utils/Helpers";
import "../../styles/pages.css";
import "../../styles/jlpt.css";

function JLPT5() {
  useSmoothScrollToSection();

  return (
    <div>
      <div className="lesson-header">
        <h2 className="lesson-title background-orange">JLPT5</h2>
        <h2 className="lesson-title-orange">
          Japanese-Language Proficiency Test
        </h2>
      </div>

      <section id="section1">
        <div className="section-header">
          <h3 className="section-text-orange">JLPT N5 Kanji List</h3>
        </div>
        <table className="kanji-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Kanji</th>
              <th>Onyomi</th>
              <th>Kunyomi</th>
              <th>Kanji Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>日</td>
              <td>nichi, jitsu</td>
              <td>hi, -bi, -ka</td>
              <td>day, sun, Japan, counter for days</td>
            </tr>
            <tr>
              <td>2</td>
              <td>一</td>
              <td>ichi</td>
              <td>hito(tsu)</td>
              <td>one</td>
            </tr>
            <tr>
              <td>3</td>
              <td>国</td>
              <td>koku</td>
              <td>kuni</td>
              <td>country</td>
            </tr>
            <tr>
              <td>4</td>
              <td>人</td>
              <td>jin, nin</td>
              <td>hito</td>
              <td>person</td>
            </tr>
            <tr>
              <td>5</td>
              <td>年</td>
              <td>nen</td>
              <td>toshi</td>
              <td>year, counter for years</td>
            </tr>
            <tr>
              <td>6</td>
              <td>大</td>
              <td>dai, tai</td>
              <td>oo(kii)</td>
              <td>large, big</td>
            </tr>
            <tr>
              <td>7</td>
              <td>十</td>
              <td>juu</td>
              <td>tou, to</td>
              <td>ten, 10</td>
            </tr>
            <tr>
              <td>8</td>
              <td>二</td>
              <td>ni, ji</td>
              <td>futa(tsu)</td>
              <td>two, 2</td>
            </tr>
            <tr>
              <td>9</td>
              <td>本</td>
              <td>hon</td>
              <td>moto</td>
              <td>book, present, true, counter for long cylindrical things</td>
            </tr>
            <tr>
              <td>10</td>
              <td>中</td>
              <td>chuu</td>
              <td>naka, uchi, ata(ru)</td>
              <td>in, inside, middle, mean, center</td>
            </tr>
            <tr>
              <td>11</td>
              <td>長</td>
              <td>chou</td>
              <td>naga(i), osa</td>
              <td>long, leader, superior, senior</td>
            </tr>
            <tr>
              <td>12</td>
              <td>出</td>
              <td>shutsu, sui</td>
              <td>de(ru), da(su), i(deru)</td>
              <td>exit, leave, go out</td>
            </tr>
            <tr>
              <td>13</td>
              <td>三</td>
              <td>san</td>
              <td>mi(tsu)</td>
              <td>three, 3</td>
            </tr>
            <tr>
              <td>14</td>
              <td>時</td>
              <td>ji</td>
              <td>toki, doki</td>
              <td>time, hour</td>
            </tr>
            <tr>
              <td>15</td>
              <td>行</td>
              <td>kou, gyou, an</td>
              <td>i(ku), yu(ku), okona(u)</td>
              <td>going, journey, carry out, line, row</td>
            </tr>
            <tr>
              <td>16</td>
              <td>見</td>
              <td>ken</td>
              <td>mi(ru), mi(seru)</td>
              <td>see, hopes, chances, idea, opinion, look at, visible</td>
            </tr>
            <tr>
              <td>17</td>
              <td>月</td>
              <td>getsu, gatsu</td>
              <td>tsuki</td>
              <td>month, moon</td>
            </tr>
            <tr>
              <td>18</td>
              <td>分</td>
              <td>bun, fun, bu</td>
              <td>wa(keru)</td>
              <td>part, minute of time, understand</td>
            </tr>
            <tr>
              <td>19</td>
              <td>後</td>
              <td>go, kou</td>
              <td>nochi, ushi(ro), ato</td>
              <td>behind, back, later</td>
            </tr>
            <tr>
              <td>20</td>
              <td>前</td>
              <td>zen</td>
              <td>mae</td>
              <td>in front, before</td>
            </tr>
            <tr>
              <td>21</td>
              <td>生</td>
              <td>sei, shou</td>
              <td>i(kiru), u(mu), o(u), ha(eru), nama</td>
              <td>life, genuine, birth</td>
            </tr>
            <tr>
              <td>22</td>
              <td>五</td>
              <td>go</td>
              <td>itsu(tsu)</td>
              <td>five, 5</td>
            </tr>
            <tr>
              <td>23</td>
              <td>間</td>
              <td>kan, ken</td>
              <td>aida, ma, ai</td>
              <td>interval, space</td>
            </tr>
            <tr>
              <td>24</td>
              <td>上</td>
              <td>jou, shou, shan</td>
              <td>ue, uwa, kami, a(geru), nobo(ru), tatematsu(ru)</td>
              <td>above, up</td>
            </tr>
            <tr>
              <td>25</td>
              <td>東</td>
              <td>tou</td>
              <td>higashi</td>
              <td>east</td>
            </tr>
            <tr>
              <td>26</td>
              <td>豚肉</td>
              <td>butaniku</td>
              <td>ぶたにく</td>
              <td>pork</td>
            </tr>
            <tr>
              <td>27</td>
              <td>病院</td>
              <td>byouin</td>
              <td>びょういん</td>
              <td>hospital</td>
            </tr>
            <tr>
              <td>28</td>
              <td>病気</td>
              <td>byouki</td>
              <td>びょうき</td>
              <td>illness; disease; sickness</td>
            </tr>
            <tr>
              <td>29</td>
              <td>茶色</td>
              <td>chairo</td>
              <td>ちゃいろ</td>
              <td>brown</td>
            </tr>
            <tr>
              <td>30</td>
              <td>茶碗</td>
              <td>chawan</td>
              <td>ちゃわん</td>
              <td>rice bowl; tea cup; teacup</td>
            </tr>
            <tr>
              <td>31</td>
              <td>父</td>
              <td>chichi</td>
              <td>ちち</td>
              <td>father</td>
            </tr>
            <tr>
              <td>32</td>
              <td>地下鉄</td>
              <td>chikatetsu</td>
              <td>ちかてつ</td>
              <td>subway; underground train</td>
            </tr>
            <tr>
              <td>33</td>
              <td>地図</td>
              <td>chizu</td>
              <td>ちず</td>
              <td>map</td>
            </tr>
            <tr>
              <td>34</td>
              <td>台所</td>
              <td>daidokoro</td>
              <td>だいどころ</td>
              <td>kitchen</td>
            </tr>
            <tr>
              <td>35</td>
              <td>大学</td>
              <td>daigaku</td>
              <td>だいがく</td>
              <td>university; college</td>
            </tr>
            <tr>
              <td>36</td>
              <td>出口</td>
              <td>deguchi</td>
              <td>でぐち</td>
              <td>exit; gateway; way out</td>
            </tr>
            <tr>
              <td>37</td>
              <td>電気</td>
              <td>denki</td>
              <td>でんき</td>
              <td>electricity</td>
            </tr>
            <tr>
              <td>38</td>
              <td>電車</td>
              <td>densha</td>
              <td>でんしゃ</td>
              <td>train; electric train</td>
            </tr>
            <tr>
              <td>39</td>
              <td>電話</td>
              <td>denwa</td>
              <td>でんわ</td>
              <td>telephone (call / device); phone call</td>
            </tr>
            <tr>
              <td>40</td>
              <td>デパート</td>
              <td>depaato</td>
              <td>デパート</td>
              <td>department store</td>
            </tr>
            <tr>
              <td>41</td>
              <td>ドア</td>
              <td>doa</td>
              <td>ドア</td>
              <td>door</td>
            </tr>
            <tr>
              <td>42</td>
              <td>どなた</td>
              <td>donata</td>
              <td>どなた</td>
              <td>who</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default JLPT5;
