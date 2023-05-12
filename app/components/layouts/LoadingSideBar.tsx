import styles from "../../page.module.css";

const LoadingSideBar = () => {
  return (
    <>
      <div className={styles.sideBar}>
        <div className="mb-6 bg-[#f9f9f9] p-2 rounded-[0.25em] text-center">
          <h2 className={styles.heading_ja}>About</h2>
        </div>
        <div className="animate-pulse">
          <div
            className="rounded-md bg-gray-300 mb-6"
            style={{ aspectRatio: "185/116" }}
          ></div>
          <div>
            <p className="h-3 w-2/6 bg-gray-300 rounded-full mx-auto"></p>
            <br />
            <br />
            <p className="h-3 w-full bg-gray-300 rounded-full"></p>
            <br />
            <p className="h-3 w-full bg-gray-300 rounded-full"></p>
            <br />
            <p className="h-3 w-3/4 bg-gray-300 rounded-full"></p>
            <br />
            <br />
            <p className="h-3 w-3/4 bg-gray-300 rounded-full"></p>
            <br />
            <p className="h-3 w-3/4 bg-gray-300 rounded-full"></p>
          </div>
        </div>
      </div>
      <div className={styles.sideBar}>
        <div className="mb-6 bg-[#f9f9f9] p-2 rounded-[0.25em] text-center">
          <h2 className={styles.heading_ja}>Category</h2>
        </div>
        <div className="animate-pulse">
          <div>
            <p className="h-3 w-28 bg-gray-300 rounded-full"></p>
            <br />
            <p className="h-3 w-28 bg-gray-300 rounded-full"></p>
            <br />
            <p className="h-3 w-28 bg-gray-300 rounded-full"></p>
            <br />
            <p className="h-3 w-28 bg-gray-300 rounded-full"></p>
            <br />
            <p className="h-3 w-28 bg-gray-300 rounded-full"></p>
          </div>
        </div>
      </div>
      <div className={styles.sideBar}>
        <div className="mb-6 bg-[#f9f9f9] p-2 rounded-[0.25em] text-center">
          <h2 className={styles.heading_ja}>Tag</h2>
        </div>
        <div className="animate-pulse">
          <div className="grid grid-cols-2 gap-4">
            <p className="h-3 w-28 bg-gray-300 rounded-full"></p>
            <p className="h-3 w-28 bg-gray-300 rounded-full"></p>
            <p className="h-3 w-28 bg-gray-300 rounded-full"></p>
            <p className="h-3 w-28 bg-gray-300 rounded-full"></p>
            <p className="h-3 w-28 bg-gray-300 rounded-full"></p>
            <p className="h-3 w-28 bg-gray-300 rounded-full"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingSideBar;
