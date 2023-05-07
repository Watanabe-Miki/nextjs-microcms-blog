interface Props {
  category: string
}

const Category = ({ category }: Props) => {
  return (
    <span className="rounded-full border border-slate-300 leading-none px-3">
      {category}
    </span>
  );
}

export default Category;