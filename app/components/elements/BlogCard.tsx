import Image from "next/image";
import Link from "next/link";
import Category from "./Category";
import FormatDate from "./FormatDate";
import Tag from "./Tag";
import { TagType } from "@/types/blog";
import styles from "../../page.module.css";

interface Props {
  id: string;
  title: string;
  imagePath: string;
  category: string;
  date: string;
  upDate: string;
  tags: TagType[];
}

const BlogCard = ({
  id,
  title,
  imagePath,
  category,
  date,
  upDate,
  tags,
}: Props) => {
  return (
    <Link href={`/blog/${id}`} className={styles.blogCard}>
      <div className="md:flex">
        <div className={styles.blogCardImg}>
          <Image src={imagePath} width={320} height={200} alt={title} />
        </div>
        <div className={styles.blogCardBody}>
          <div className="mb-[1em]">
            <h3 className={styles.heading_ja}>{title}</h3>
          </div>
          <div className="md:flex items-center mb-[1em]">
            <div className="mr-[1em] mb-[1em] md:mb-none">
              <Category category={category} />
            </div>
            <ul className="flex items-center flex-wrap">
              {tags.map((tag: TagType) => {
                return (
                  <li key={tag.id} className="mr-[0.5em] last:mr-none">
                    <Tag tag={tag.name} />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="ml-auto">
            <span className="text-right flex items-center">
              <div className="relative h-auto mr-[0.5em]">
                <Image
                  src="/common/published.svg"
                  width={64}
                  height={64}
                  style={{
                    width: "1em",
                    height: "1em",
                  }}
                  alt="投稿日"
                />
              </div>
              <FormatDate datetime={date} />
            </span>
            <span className="text-right flex items-center">
              <div className="relative h-auto mr-[0.5em]">
                <Image
                  src="/common/revised.svg"
                  width={64}
                  height={64}
                  style={{
                    width: "1em",
                    height: "1em",
                  }}
                  alt="更新日"
                />
              </div>
              <FormatDate datetime={upDate} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
