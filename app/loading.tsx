import Image from "next/image";
import LoadingBlogCard from "./components/layouts/LoadingBlogCard";
import LoadingSideBar from "./components/layouts/LoadingSideBar";
import styles from "./page.module.css";

const Loading = () => {
  return (
    <>
      <div className="inner">
        <div className="lg:flex items-center py-16">
          <div className="mb-16 lg:mb-none lg:mr-16 text-center lg:w-2/5">
            <h1 className={styles.title}>Solo Delight!</h1>
            <span className={styles.heading_ja}>- ひとりの愉しみ -</span>
            <p className="text-sm md:text-base leading-7 py-6">
              みんなでワイワイもいいけどひとりも愉しい。
              <br />
              そんなひとり時間のあれこれを発信します。
            </p>
          </div>
          <div className="relative h-auto md:w-3/5 mx-auto lg:mx-none">
            <Image
              src="/main/main.svg"
              width={600}
              height={500}
              alt="Slolo Delight! - ひとりの愉しみ -"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#f9f9f9] py-24">
        <div className="inner">
          <div className="md:flex">
            <div className="md:w-3/4 md:mr-10">
              <div className="mb-8 text-center">
                <h2 className={styles.heading_ja}>新着記事一覧</h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <LoadingBlogCard />
                <LoadingBlogCard />
                <LoadingBlogCard />
                <LoadingBlogCard />
                <LoadingBlogCard />
                <LoadingBlogCard />
              </div>
            </div>
            <div className="hidden md:block w-1/4">
              <LoadingSideBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
