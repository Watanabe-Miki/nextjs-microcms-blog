type CategoryProps = {
  category: string
}

const Category = ({ category }: CategoryProps) => {
  return (
    <span className="rounded-full border border-slate-300 leading-none px-3">
      {category}
    </span>
  );
}

export default Category;