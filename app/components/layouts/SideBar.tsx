import Link from "next/link"
import { CategoryType, TagType } from "@/types/blog"
import Category from "../elements/Category"
import Tag from "../elements/Tag"
import styles from "../../page.module.css"

interface Props {
  categories: CategoryType[]
  tags: TagType[]
}

const SideBar = ({ categories, tags }: Props) => {
  
  return (
    <>
      <div className="mb-10">
        <div className="mb-4 text-center">
          <h2 className={styles.heading_ja}>Category</h2>
        </div>
        <div className={styles.sideBar}>
          <ul>
            {categories.map((category: CategoryType) => {
              return (
                <li key={category.id} className="mb-4">
                  <Link
                    href={`/category/${category.id}`}
                  >
                    <Category category={category.tag} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="mb-10">
        <div className="mb-4 text-center">
          <h2 className={styles.heading_ja}>Tag</h2>
        </div>
        <div className={styles.sideBar}>
          <ul>
            {tags.map((tag: TagType) => {
              return (
                <li key={tag.id} className="mb-4">
                  <Link href={`/tag/${tag.id}`}>
                    <Tag tag={tag.name} />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default SideBar;
