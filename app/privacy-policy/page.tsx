import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "プライバシーポリシー | エーワンロード株式会社",
  description: "エーワンロード株式会社のプライバシーポリシーについて説明しています。",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "プライバシーポリシー",
      description: "エーワンロード株式会社のプライバシーポリシー",
      publisher: {
        "@type": "Organization",
        name: "エーワンロード株式会社",
        url: "https://a1road.com",
        logo: {
          "@type": "ImageObject",
          url: "https://a1road.com/logo.png",
        },
      },
      mainEntity: {
        "@type": "WebContent",
        name: "プライバシーポリシー",
        description: "エーワンロード株式会社のプライバシーポリシー",
        dateCreated: "2024-04-16",
        dateModified: "2025-04-21",
      },
    }),
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-24">
      <section className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">プライバシーポリシー</h1>

          <div className="prose prose-lg">
            <p className="text-muted-foreground mb-8">
              エーワンロード株式会社（以下「当社」）は、お客様の個人情報の保護を重要な責務と考え、以下のプライバシーポリシーに基づき、個人情報保護法およびその他の関連法令を遵守し、適切な保護と管理に努めます。
            </p>

            <h2 className="text-2xl font-bold mb-4">1. 個人情報の定義</h2>
            <p>
              本プライバシーポリシーにおいて、個人情報とは、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます）をいいます。
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">2. 個人情報の収集方法</h2>
            <p>当社は、以下の方法で個人情報を収集することがあります：</p>
            <ul className="list-disc pl-6">
              <li>お問い合わせフォーム、資料請求フォームなどのウェブフォームからの提出</li>
              <li>メール、電話、郵便などによるコミュニケーション</li>
              <li>イベントやセミナーへの参加登録</li>
              <li>当社サービスへの申し込みや契約</li>
              <li>ウェブサイト利用時の自動的な情報収集（Cookieなど）</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8">3. 収集する個人情報の種類</h2>
            <p>当社が収集する個人情報には、以下のような情報が含まれることがあります：</p>
            <ul className="list-disc pl-6">
              <li>氏名</li>
              <li>連絡先情報（メールアドレス、電話番号、住所など）</li>
              <li>会社名、部署名、役職</li>
              <li>ウェブサイトの利用状況や閲覧履歴</li>
              <li>IPアドレス、ブラウザの種類、言語設定などの技術情報</li>
              <li>サービス利用履歴</li>
              <li>アンケートへの回答内容</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8">4. 個人情報の利用目的</h2>
            <p>当社は、収集した個人情報を以下の目的で利用します：</p>
            <ul className="list-disc pl-6">
              <li>お問い合わせへの回答</li>
              <li>資料や製品・サービス情報の提供</li>
              <li>サービスの提供、改善、開発</li>
              <li>契約の締結・履行</li>
              <li>セミナーやイベントに関する情報提供</li>
              <li>マーケティング活動や統計分析</li>
              <li>当社ウェブサイトの改善</li>
              <li>法令等に基づく対応</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8">5. 個人情報の第三者提供</h2>
            <p>
              当社は、以下の場合を除き、あらかじめご本人の同意を得ることなく、第三者に個人情報を提供することはありません：
            </p>
            <ul className="list-disc pl-6">
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
              <li>
                国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合
              </li>
              <li>合併、会社分割、事業譲渡その他の事由による事業の承継に伴う場合</li>
              <li>個人情報保護法第27条第5項各号に該当する場合</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8">6. 個人情報の委託</h2>
            <p>
              当社は、利用目的の達成に必要な範囲内において、個人情報の取扱いの全部または一部を委託する場合があります。委託先の選定にあたっては、個人情報を適切に取り扱う能力があることを確認し、委託契約等において個人情報の安全管理について適切な措置を講じるよう定めます。
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">7. Cookieなどの使用について</h2>
            <p>
              当社ウェブサイトでは、ユーザーの利便性向上やウェブサイト利用状況の分析のためにCookieやウェブビーコン等の技術を使用することがあります。これらの技術により収集される情報には、IPアドレス、ブラウザの種類、言語設定、アクセス日時、リファラURLなどが含まれます。ユーザーはブラウザの設定によりCookieの受け入れを拒否することができますが、その場合、ウェブサイトの一部の機能が利用できなくなる可能性があります。
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">8. 個人情報の安全管理措置</h2>
            <p>
              当社は、個人情報の漏洩、滅失、毀損を防止するため、以下のような安全管理措置を講じます：
            </p>
            <ul className="list-disc pl-6">
              <li>組織的安全管理措置（個人情報保護責任者の設置、内部規程の整備など）</li>
              <li>人的安全管理措置（従業員教育、監督など）</li>
              <li>物理的安全管理措置（アクセス制御、施錠管理、防災対策など）</li>
              <li>技術的安全管理措置（アクセス制御、通信の暗号化、不正アクセス防止策など）</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8">9. 個人情報の保存期間</h2>
            <p>
              当社は、取得した個人情報について、利用目的の達成に必要な期間保存します。保存期間が経過した個人情報は、法令等により保存が義務付けられている場合を除き、速やかに廃棄または削除します。
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">10. 個人情報の開示・訂正・利用停止等</h2>
            <p>
              当社が保有する個人情報について、ご本人様から開示、訂正、追加、削除、利用停止または第三者への提供の停止等の請求があった場合、法令に従い、適切に対応します。これらの請求を行いたい場合は、下記お問い合わせ先までご連絡ください。
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">11. 未成年者の個人情報</h2>
            <p>
              当社のサービスは成人を対象としています。16歳未満の方が個人情報を提供する場合は、保護者の同意を得てください。当社が意図せず16歳未満の方の個人情報を収集したことが判明した場合、速やかに当該情報を削除します。
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">12. 国際データ移転</h2>
            <p>
              当社は、収集した個人情報を日本国内で管理・保管します。ただし、クラウドサービスプロバイダー等の利用により、個人情報が国外に保存される場合があります。その場合、個人情報保護法に基づき、適切な措置を講じます。
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">13. プライバシーポリシーの変更</h2>
            <p>
              当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当社ウェブサイトに掲載した時点で効力を生じるものとします。重要な変更がある場合は、ウェブサイト上で通知します。
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">14. お問い合わせ</h2>
            <p>本プライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いいたします。</p>
            <p className="mt-4">
              エーワンロード株式会社
              <br />
              個人情報保護管理者：代表取締役
              <br />
              メールアドレス：admin@a1-road.com
            </p>

            <p className="mt-8 text-sm text-muted-foreground">制定日：2024年4月16日</p>
            <p className="text-sm text-muted-foreground">最終更新日：2025年4月21日</p>
          </div>
        </div>
      </section>
    </div>
  );
}
