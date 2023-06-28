import Link from "next/link"
import Image from "next/image"
import { CategoryType, TagType } from "@/types/blog"
import Category from "../elements/Category"
import Tag from "../elements/Tag"
import styles from "../../page.module.css"

interface SideBarProps {
  categories: CategoryType[];
  tags: TagType[];
}

const SideBar = ({ 
  categories, 
  tags, 
}: SideBarProps) => {

  return (
    <>
      <div className={styles.sideBar}>
        <div className="mb-6 bg-[#f9f9f9] p-2 rounded-[0.25em] text-center">
          <h2 className={styles.heading_ja}>About</h2>
        </div>
        <div className="relative h-auto mb-6 rounded-sm overflow-hidden sm:w-1/2 mx-auto lg:w-full lg:mx-none">
          <Image
            src="/common/usagi02.png"
            width={185}
            height={116}
            alt="プロフィール"
            priority
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>
        <div>
          <p className="text-xl font-medium text-center">Miki</p>
          <br />
          <p>Webサイトを作っています。</p>
          <br />
          <p>
            Next.js,TypeScriptが最近多め。
            <br /> でもまだまだ半人前です。
          </p>
          <p>勉強メモと公開備忘録としてこのブログを開設しました。</p>
          <br />
          <p>時々Web以外の雑記も。</p>
        </div>
      </div>
      <div className={styles.sideBar}>
        <div className="mb-6 bg-[#f9f9f9] p-2 rounded-[0.25em] text-center">
          <h2 className={styles.heading_ja}>Category</h2>
        </div>
        <ul>
          {categories.map((category: CategoryType) => {
            return (
              <li key={category.id} className="mb-4">
                <Link href={`/category/${category.id}`}>
                  <Category category={category.tag} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.sideBar}>
        <div className="mb-6 bg-[#f9f9f9] p-2 rounded-[0.25em] text-center">
          <h2 className={styles.heading_ja}>Tag</h2>
        </div>
        <ul className="flex flex-wrap">
          {tags.map((tag: TagType) => {
            return (
              <li key={tag.id} className="mb-4 mr-4">
                <Link href={`/tag/${tag.id}`}>
                  <Tag tag={tag.name} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default SideBar;
