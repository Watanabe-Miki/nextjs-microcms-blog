"use client";

const Error = ({ error }: { error: Error }) => {
  return (
    <div className="pt-40 md:pt-50">
      <p className="text-center text-red-500">
        サーバーでのデータの取得に失敗しました。
      </p>
    </div>
  );
};

export default Error;
