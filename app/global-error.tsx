"use client";

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2 className="text-center py-8 text-2xl">予期しないエラーが発生しました。</h2>
        <div className="flex justify-center py-6">
          <button onClick={() => reset()}>Try again</button>
          <Link href="/">
            <button>Home</button>
          </Link>
        </div>
      </body>
    </html>
  );
}
