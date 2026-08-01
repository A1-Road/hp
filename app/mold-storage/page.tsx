import Image from "next/image";

export { metadata } from "./metadata";

export const runtime = "edge";

const CAL_URL = "https://calendar.app.google/jNvg49b28NDbeg1M9";

function Label({ en, ja, light = false }: { en: string; ja: string; light?: boolean }) {
  return (
    <p className={`text-xs font-medium uppercase tracking-[0.3em] ${light ? "text-amber-600" : "text-amber-500/80"}`}>
      {en} <span className={light ? "text-black/30" : "text-white/40"}>/</span>{" "}
      <span className={`normal-case tracking-normal ${light ? "text-black/50" : "text-white/50"}`}>{ja}</span>
    </p>
  );
}

export default function MoldStoragePage() {
  return (
    <div className="bg-black text-white">
      {/* ===== HERO ===== */}
      <section className="border-b border-black/10 bg-white px-6 py-28 text-black md:py-36">
        <div className="mx-auto max-w-4xl">
          <Label en="Mold & Die Storage" ja="金型・治具・廃番部品" light />
          <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            金型の保管という課題に、
            <br />
            正面から取り組んでいます。
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-black/70">
            大型金型・治具の長納期と高コスト。廃番部品の再生産。少量多品種の採算。熟練工への依存。
            エーワンロード株式会社は、これらの課題に取り組んでいる横浜のスタートアップです。
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/70">
            まず、御社がいまどうやって作り、どこに何を保管し、年間どれだけの負担を抱えているのかを
            数字にして可視化します。そのうえで、保管し続けるより安く早い選択肢をご提案します。
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={CAL_URL}
              className="inline-flex items-center rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-black transition-colors hover:bg-amber-400"
            >
              30分の面談日程を選ぶ
            </a>
            <a
              href="#how"
              className="inline-flex items-center rounded-full border border-black/25 px-7 py-3 text-sm font-semibold text-black transition-colors hover:border-black/50"
            >
              進め方を見る
            </a>
          </div>
          <p className="mt-6 max-w-xl text-xs leading-relaxed text-black/45">
            <b className="text-black/65">この30分でやること：</b>現状のヒアリングと、保管コスト・稼働状況の可視化。
          </p>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Label en="The Problem" ja="課題" />
          <h2 className="mt-5 text-2xl font-bold leading-snug md:text-3xl">
            部品ではなく、
            <br />
            「作れる能力」が失われている。
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/60">
            日本の少量多品種生産を支えてきた前提が、いま同時に崩れつつあります。
            これは私たちが現場で繰り返し伺ってきた話であり、この事業の出発点です。
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                idx: "01",
                title: "町工場の廃業＝知識の消失",
                body: "廃業で失われるのは会社数ではありません。加工条件、治具、職人の判断、品質保証の知識が同時に消えます。図面が残っても、材料選定・加工順序・精度の出し方・検査方法が分からなければ再生産できません。",
              },
              {
                idx: "02",
                title: "数十年使う設備、消える供給元",
                body: "自動車・造船・鉄道・発電・産業機械では設備が数十年使われます。廃番部品・補修部品を「少量で供給し続ける能力」が事業継続の生命線ですが、その担い手は減り続けています。",
              },
              {
                idx: "03",
                title: "型は、置いてあるだけで負担になる",
                body: "大型金型・治具の長納期と高コスト、少量多品種の採算、熟練工依存、補修在庫。「いつ出番が来るか分からない型」の保管は、場所・管理・費用の三重の負担として現場に残り続けます。",
              },
            ].map((c) => (
              <div key={c.idx} className="border-t border-white/15 pt-5">
                <span className="text-xs font-mono text-amber-500/70">{c.idx}</span>
                <h3 className="mt-2 text-base font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-white/12 bg-white/[0.03] p-6">
            <p className="text-sm leading-relaxed text-white/65">
              <b className="text-white/85">参考：型の保管は、業界全体の制度課題としても整理されています。</b>
              <br />
              中小企業庁「型取引の適正化推進協議会 報告書」（令和元年12月）では、型に関する取引条件の曖昧さ、
              受注側企業の資金繰り負担、適正対価を伴わない長期保管、型の廃棄・返却、
              保管費用項目の目安が存在しないことなどが課題として挙げられています。
              また2016年には、下請法運用基準および下請中小企業振興基準において型管理の適正化が位置づけられ、
              型の無償保管要請が問題となることが明示されています。
            </p>
            <p className="mt-3 text-xs text-white/40">
              出典：
              <a
                href="https://www.chusho.meti.go.jp/faq/faq/200227tekiseika04.pdf"
                className="text-amber-500/80 underline underline-offset-2 hover:text-amber-400"
              >
                中小企業庁「型取引の適正化推進協議会 報告書」（令和元年12月）
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ===== BAND: 投資回収の最短経路 ===== */}
      <section className="border-b border-white/10 bg-white/[0.03] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Label en="Our First Meeting" ja="初回商談の方針" />
          <p className="mt-5 text-xl font-bold md:text-2xl">まず、投資回収の最短経路を一緒に見つけます。</p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60">
            現在の製造方法・年間の損失額・外注先・品質条件を確認したうえで、
            <b className="text-amber-500/90">調査 → 試作 → 受託製造 → 設備選定 → 補助金</b>{" "}
            の順に、リスクの小さい手段から案件を育てます。
          </p>
        </div>
      </section>

      {/* ===== POSITION ===== */}
      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Label en="Our Position" ja="私たちの立場" />
          <h2 className="mt-5 text-2xl font-bold leading-snug md:text-3xl">作らない。組み合わせる。</h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/60">
            世界中にすでにある技術と、国内にすでにある加工能力を組み合わせて、
            御社にとって投資回収が最短になる経路を設計します。
            特定メーカーに偏らない中立的な立場で、御社に一番合う選択肢だけをご提案します。
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { idx: "A", title: "海外SaaS・AI", body: "業務改善ツール、AIエージェント、CRM、営業自動化" },
              { idx: "B", title: "海外製造装置", body: "LFAM（大型積層造形）、ロボット加工、検査・制御" },
              { idx: "C", title: "国内加工会社", body: "切削・研磨・熱処理・表面処理・検査・組立の既存能力" },
              { idx: "D", title: "外部設備・研究機関", body: "メーカーデモ機、大学、造形会社、リース、空き時間" },
            ].map((c) => (
              <div key={c.idx} className="border-t border-white/15 pt-5">
                <span className="text-xs font-mono text-amber-500/70">{c.idx}</span>
                <h3 className="mt-2 text-sm font-semibold">{c.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-white/55">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/12 bg-white/[0.03] p-6 text-sm leading-relaxed text-white/65">
            <b className="text-white/85">これらを組み合わせて提供すること</b>
            <br />
            大型金型・治具の納期とコストの圧縮　／　廃番部品・補修部品の少量再生産　／
            設備導入前の試作・受託製造（買う前に試せる）　／　補助金活用を含む導入伴走と保守・教育　／
            問い合わせ・見積・追客など業務側の課題解決
          </div>

          <div className="mt-8 rounded-2xl border border-white/12 bg-white/[0.03] p-6">
            <p className="text-sm leading-relaxed text-white/65">
              <b className="text-white/85">「買う前に試せる」を武器にしています。</b>
              <br />
              数億円の設備を購入する前に、メーカーのデモ機・大学・研究機関・国内の造形会社・
              加工会社の空き時間・リースを使って、試作と受託製造を行います。
              私たちは自社設備ゼロのまま案件を処理するため、御社は設備投資を決める前に、
              実物と実データで判断できます。
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-amber-500/30 bg-amber-500/[0.04] p-6">
            <p className="text-sm leading-relaxed text-white/70">
              <b className="text-white">「保管する」のではなく、「必要な時に作り直す」という選択肢。</b>
              <br />
              使う頻度の低い大型金型・治具を、場所と費用をかけて保管し続けるのではなく、
              欧州の大型積層造形（WAAM/LFAM）で出番が来たときにオンデマンド再生産する——
              これが私たちの提案する、金型保管問題への具体的な解決手段のひとつです。
            </p>
          </div>
        </div>
      </section>

      {/* ===== HOW ===== */}
      <section id="how" className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Label en="How We Work" ja="進め方" />
          <h2 className="mt-5 text-2xl font-bold leading-snug md:text-3xl">有料診断から始めます。</h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/60">
            最初にお届けするのは、「投資回収の最短経路」を判断するための現場データと、その分析です。
            特定メーカーに偏らない中立の立場で診断するので、結論が「いまは何も買わないほうがよい」になることもあります。
          </p>

          <div className="mt-12 space-y-8">
            {[
              {
                no: "STEP 00",
                title: "30分の面談（費用はいただきません）",
                body: "現状のヒアリングと、課題の可視化を行います。診断に進むかどうかは、この後にご判断いただけます。",
              },
              {
                no: "STEP 01",
                title: "現場調査",
                body: "経営者・事業部長・現場責任者へのヒアリング。誰が何をどう判断しているかを、役職をまたいで確認します。",
              },
              {
                no: "STEP 02",
                title: "人月分析",
                body: "業務フローを人月・原価・損失額に分解します。感覚で語られている負担を、数字に置き換えます。",
              },
              {
                no: "STEP 03",
                title: "ROI試算",
                body: "削減人月・年間効果・回収期間を、保守的・標準・楽観の3シナリオで算定し、根拠とあわせてお渡しします。",
              },
              {
                no: "STEP 04",
                title: "予算リプレイス先の特定",
                body: "残業代・派遣費・外注費・保守費など、置き換え原資になりうる既存予算を特定します。",
              },
              {
                no: "STEP 05",
                title: "稟議資料",
                body: "社内の意思決定にそのまま使える形で納品します。診断の成果物は、稟議を通すための材料です。",
              },
            ].map((s) => (
              <div key={s.no} className="grid gap-2 border-t border-white/10 pt-6 md:grid-cols-[140px_1fr] md:gap-8">
                <div className="text-xs font-mono text-amber-500/70">{s.no}</div>
                <div>
                  <h3 className="text-sm font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/12 bg-white/[0.03] p-6 text-sm leading-relaxed text-white/65">
            <b className="text-white/85">診断のあと（ご希望があれば）</b>
            <br />
            手段選定：Lステップ・OSS・SaaS・AI・自社開発・ロボット・海外製造装置・国内加工網・補助金を同一基準で比較 →
            導入PM・調達・データ連携・現場定着 → 他部門への横展開
            <br />
            <b className="mt-3 inline-block text-white/85">金型・大型部品の案件</b>
            ：調査 → 試作 → 受託製造 → 設備選定 → 補助金 の順に進めます。
          </div>
        </div>
      </section>

      {/* ===== HONESTY ===== */}
      <section className="border-b border-white/10 bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Label en="What We Promise" ja="私たちがお約束すること" />
          <h2 className="mt-5 text-2xl font-bold leading-snug md:text-3xl">私たちが最初にお約束すること。</h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/60">
            メールを受け取ってこのページに来られた方に、最初にお約束することをまとめました。
          </p>

          <ul className="mt-10 space-y-6">
            {[
              {
                head: "各社の状況に合わせて、一から設計します。",
                sub: "この事業は始まったばかりで、いま各社の現場の実態を伺っている段階です。テンプレートの提案ではなく、御社の状況に合わせて一から組み立てます。",
              },
              {
                head: "選定・導入・統合・伴走を、一気通貫で担います。",
                sub: "技術の深い部分はメーカー・加工会社の専門窓口に直接つなぎ、御社の窓口は私たちひとつに集約します。",
              },
              {
                head: "特定メーカーに偏らない、中立的な選定をします。",
                sub: "在庫や販売ノルマを持たない立場だからこそ、世界中の選択肢から御社に一番合うものだけを選べます。",
              },
              {
                head: "技術的な質問には、48時間以内に書面で正式回答します。",
                sub: "その場の推測でお答えするより、持ち帰って正確な情報をお渡しすることを優先します。",
              },
              {
                head: "初回30分で、現状を正確に整理します。",
                sub: "ROI試算や具体的な改善策は、現場データを伺った後の有償診断でお出しします。30分では、まず正確な現状把握から始めます。",
              },
            ].map((item, i) => (
              <li key={i} className="border-t border-white/10 pt-5">
                <p className="text-sm font-semibold text-white/85">{item.head}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{item.sub}</p>
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-white/60">
            期待値を上げて受注することよりも、伺った内容に対して実際にできることだけをお約束することを優先しています。
          </p>
        </div>
      </section>

      {/* ===== FOUNDER ===== */}
      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Label en="Founder" ja="代表" />
          <div className="mt-8 grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-14">
            <div>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/founder-kazuma-tamura.jpg"
                  alt="田村 一馬 エーワンロード株式会社 代表取締役"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 768px) 320px, 100vw"
                />
              </div>
              <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-white/45">
                Representative Director
              </p>
              <p className="mt-1 text-xl font-bold">田村 一馬</p>
              <p className="mt-2 text-sm text-white/55">
                エーワンロード株式会社 代表取締役
                <br />
                神奈川県横浜市西区
              </p>
            </div>
            <div className="space-y-5 text-sm leading-relaxed text-white/65">
              <p>
                実家の祖父は、製造業で特許を取得していました。技術者としての仕事が、
                名前としても記録としても外にほとんど残らなかったこと。それが、
                日本のものづくりに本気で向き合いたいと考えるようになったきっかけです。
              </p>
              <p>
                製造業スタートアップCADDiでの調達実務と、町工場の現場経験があります。
                加工会社の言語と商習慣は、一定は分かっているつもりです。
                展示会・イベントでのリード獲得、海外企業との書面交渉、コミュニティ運営を
                一人で横断してきました。いまも自分の足で現場に伺い、
                外からは見えづらい価値を外に伝える仕事をしています。
              </p>
              <p>
                エーワンロードのミッションは「すべての人の正当な価値を取り戻す。」です。
                廃業とともに消えていく加工条件や職人の判断に、正当な価値を取り戻すこと。
                金型保管の課題から入っているのは、そこが一番手前にある入口だからです。
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            <div className="border-t border-white/15 pt-5">
              <div className="text-3xl font-bold">
                33<i className="ml-1 text-sm font-normal not-italic text-white/45">件</i>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-white/55">
                IVSで参加者向けツールを使い、1イベントで創出した商談数。参加者データ×一斉接触×同一会場×短期集中面談という構造を、法人営業に転用しています。
              </p>
            </div>
            <div className="border-t border-white/15 pt-5">
              <div className="text-3xl font-bold">
                29<i className="ml-1 text-sm font-normal not-italic text-white/45">社中トップクラス</i>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-white/55">
                製造業スタートアップの展示会出展における、リード獲得の実績。出展29社の中での位置づけです。
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-white/40">
            ※ 上記2件はいずれも代表個人の営業実績であり、金型・製造領域における納品実績ではありません。
            誤解が生じないよう、性質を明記しています。
          </p>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="border-b border-white/10 bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Label en="Next Step" ja="次の一歩" />
          <h2 className="mt-5 text-2xl font-bold leading-snug md:text-3xl">
            まず30分、現状をお聞かせください。
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/60">
            資料をお送りするより先に、伺いたいことがあります。
            以下のカレンダーから、ご都合の良い日時を直接お選びいただけます。
          </p>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-white/85">お伺いすること</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/60">
                <li>現在の製造方法</li>
                <li>型・治具の保管状況と、そこにかかっている負担</li>
                <li>年間の損失額の感覚</li>
                <li>外注先と品質条件</li>
                <li>社内の意思決定の流れ</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/85">この場でしないこと</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/60">
                <li>装置・ソフトウェアの売り込み</li>
                <li>その場での見積提示</li>
                <li>資料の一方的な送付</li>
                <li>答えを持っていない質問への、推測での回答</li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <a
              href={CAL_URL}
              className="inline-flex items-center rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-black transition-colors hover:bg-amber-400"
            >
              日程を選ぶ（Googleカレンダー）
            </a>
          </div>
          <p className="mt-5 text-xs text-white/45">
            カレンダーに合う枠が無い場合は{" "}
            <a href="mailto:admin@a1-road.com" className="text-amber-500/80 underline underline-offset-2 hover:text-amber-400">
              admin@a1-road.com
            </a>{" "}
            まで直接ご連絡ください。
          </p>
        </div>
      </section>

      {/* ===== COMPANY ===== */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <Label en="Company" ja="会社概要" />
          <h2 className="mt-5 text-xl font-bold">会社概要</h2>
          <table className="mt-8 w-full border-t border-white/10 text-sm">
            <tbody>
              {[
                ["商号", "エーワンロード株式会社（A-ONE ROAD CO., LTD.）"],
                ["設立", "2021年3月"],
                ["代表者", "代表取締役　田村 一馬"],
                ["所在地", "〒220-0072　神奈川県横浜市西区浅間町1丁目4-3　ウィザードビル402"],
              ].map(([k, v]) => (
                <tr key={k} className="border-b border-white/10">
                  <th className="w-32 py-3 pr-4 text-left align-top font-medium text-white/45">{k}</th>
                  <td className="py-3 text-white/75">{v}</td>
                </tr>
              ))}
              <tr className="border-b border-white/10">
                <th className="w-32 py-3 pr-4 text-left align-top font-medium text-white/45">電話</th>
                <td className="py-3 text-white/75">
                  <a href="tel:08048705690" className="hover:text-amber-400">
                    080-4870-5690
                  </a>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <th className="w-32 py-3 pr-4 text-left align-top font-medium text-white/45">メール</th>
                <td className="py-3 text-white/75">
                  <a href="mailto:admin@a1-road.com" className="hover:text-amber-400">
                    admin@a1-road.com
                  </a>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <th className="w-32 py-3 pr-4 text-left align-top font-medium text-white/45">Web</th>
                <td className="py-3 text-white/75">
                  <a href="https://a-oneroad.com" className="hover:text-amber-400">
                    https://a-oneroad.com
                  </a>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <th className="w-32 py-3 pr-4 text-left align-top font-medium text-white/45">事業内容</th>
                <td className="py-3 leading-relaxed text-white/75">
                  業務効率化・ROI診断事業（海外SaaS・AIの導入支援）
                  <br />
                  金型保管問題ソリューション事業（廃番部品の再生産・固定費削減）
                </td>
              </tr>
              <tr>
                <th className="w-32 py-3 pr-4 text-left align-top font-medium text-white/45">ミッション</th>
                <td className="py-3 text-white/75">すべての人の正当な価値を取り戻す。</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
