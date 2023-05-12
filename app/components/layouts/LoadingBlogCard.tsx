import styles from "../../page.module.css"

const LoadingBlogCard = () => {
  return (
    <div className={styles.blogCard}>
      <div className="animate-pulse flex space-x-4">
        <div className="w-[31%] rounded-md bg-gray-300" style={{aspectRatio: '16/9'}}></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-3 w-3/4 bg-gray-300 rounded-full"></div>
          <div className="space-y-3">
            <div className="h-2 mb-4 w-1/2 bg-gray-300 rounded-full"></div>
            <div className="h-2 mb-10 w-1/2 bg-gray-300 rounded-full"></div>
            <div className="h-2 w-44 bg-gray-300 rounded-full"></div>
            <div className="h-2 w-44 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingBlogCard;