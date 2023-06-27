import { Metadata } from "next";
import { getList } from "@/libs/microcms";
import SideBar from "../components/layouts/SideBar";

export const metadata: Metadata = {
  title: "このブログについて",
};


export default async function OverviewLayout({
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
            <div className="lg:w-[70%] lg:mr-10 mb-6 lg:mb-none">{children}</div>
            <div className="lg:w-[30%]">
              <SideBar categories={categories} tags={tags} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
