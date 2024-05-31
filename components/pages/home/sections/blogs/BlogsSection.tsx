import BlogCard from "@/components/ui/cards/BlogCard";
import { blogSectionData } from "./blogSection.data";

function BlogsSection() {
  return (
    <div>
      <div className="grid gap-5 md:gap-10 grid-cols-12 px-5 md:px-10 lg:px-12 xl:px-14 py-8">
        {blogSectionData.map((item, index) => (
          <div key={index} className="col-span-12 md:col-span-6 lg:col-span-3">
            <BlogCard
              src={item.src}
              title={item.title}
              topic={item.topic}
              dsc={item.dsc}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogsSection;
