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
          <div className="md:flex">
            <div className="md:w-3/4 md:mr-10">{children}</div>
            <div className="hidden md:block w-1/4">
              <SideBar categories={categories} tags={tags} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
