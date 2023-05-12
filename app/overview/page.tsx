import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.css"

export default function Page() {
  return (
    <>
      <div
        className="bg-white p-8 lg:p-10 rounded-lg"
        style={{
          boxShadow:
            "0 10px 15px -3px rgba(122, 123, 179, 0.25), 0 4px 6px -4px rgba(122, 123, 179, 0.25)",
        }}
      >
        <div className="mb-10">
          <h1 className={styles.heading_ja}>このブログのご紹介</h1>
          <span>2023.05</span>
        </div>
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4">制作のきっかけ</h2>
          <div>
            <p>Jamstack開発などのモダン技術に関わらせて頂いて3ヶ月。</p>
            <br />
            <p>
              はじめてその技術に触れた時は、すごく驚きました。ここまで時代が進んだのか!!と(笑)。
            </p>
            <br />
            <p>
              これで何か作れるようになりたい。<br />勉強したことのアウトプットとして何か作ってみよう！<br />そう思い立ったのがきっかけです。
            </p>
            <br />
            <p>
              まだまだ半人前なので手直しが必要な部分がありますが、これからも少しづつ改善しながらこのブログを育てていきたいと思います。
            </p>
          </div>
        </div>
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4">
            使用している主な技術
          </h2>
          <div>
            <p className="mb-4">Next.jsはapp Directoryを採用しています。</p>
            <ul>
              <li className="list-disc list-inside">React: 18.2.0</li>
              <li className="list-disc list-inside">
                Next.js: 13.4.1-canary.2
              </li>
              <li className="list-disc list-inside">TypeScript: 5.0.4</li>
              <li className="list-disc list-inside">Tailwind CSS: 3.3.1</li>
              <li className="list-disc list-inside">microCMS</li>
            </ul>
          </div>
        </div>
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4">参考サイト</h2>
          <div>
            <ul>
              <li className="mb-4">
                <p>やっぱり一番参考になりました</p>
                <Link href="https://nextjs.org/docs">
                  <p className="underline text-blue-500">
                    Next.js 13 | Getting Started
                  </p>
                </Link>
              </li>
              <li className="mb-4">
                <p>
                  app Directoryでいまいち分からない時によく見ました
                  <br />
                  Vercelの Upgrade Next.js
                </p>
                <Link href="https://github.com/vercel/app-playground">
                  <p className="underline text-blue-500">Vercel | GitHub</p>
                </Link>
              </li>
              <li className="mb-4">
                <p>microCMS</p>
                <Link href="https://blog.microcms.io/nextjs13-microcms-rsc/">
                  <li className="underline text-blue-500">
                    microCMSとNext.js13 Server Components
                  </li>
                </Link>
              </li>
              <li className="mb-4">
                <p>
                  今の私にはちょと難しかったです
                  <br />
                  何度か読んで理解しないと
                </p>
                <Link href="https://react.dev/blog/2022/03/29/react-v18">
                  <p className="underline text-blue-500">React v18.0 | React</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4">GitHub</h2>
          <div className="relative h-auto">
            <Link href="https://github.com/Watanabe-Miki/nextjs-microcms-blog/tree/main">
              <Image
                src="/common/github.svg"
                width={200}
                height={200}
                style={{
                  width: "3em",
                  height: "auto",
                  objectFit: "cover",
                }}
                alt="GitHub リポジトリ"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
