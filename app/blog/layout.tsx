import { getList } from "@/libs/microcms";
import SideBar from "../components/layouts/SideBar";

export default async function BlogLayout({
  children, 
}: {
  children: React.ReactNode;
}) {

  const { categories, tags } = await getList();

  return (
    <section>
      <div className="bg-[#f9f9f9] py-24">
        <div className="inner">
          <div className="lg:flex">
            <div className="mb-6 lg:mb-none lg:w-[70%] lg:mr-10">{children}</div>
            <div className="lg:w-[30%]">
              <SideBar categories={categories} tags={tags} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
