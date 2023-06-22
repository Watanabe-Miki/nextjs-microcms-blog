import LoadingBlogCard from "../components/layouts/LoadingBlogCard";
import LoadingSideBar from "../components/layouts/LoadingSideBar";
import styles from "../page.module.css";

const Loading = () => {
  return (
    <>
      <div className="bg-[#f9f9f9] py-24">
        <div className="inner">
          <div className="md:flex">
            <div className="md:w-3/4 md:mr-10">
              <div className="mb-8 text-center">
                <h2 className={styles.heading_ja}>記事一覧</h2>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
