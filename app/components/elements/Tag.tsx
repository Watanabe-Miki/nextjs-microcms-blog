import Image from "next/image";

interface Props {
  tag: string
}

const Tag = ({ tag }: Props) => {
  return (
    <div className="flex items-center">
      <div className="relative h-auto mr-[0.2em]">
        <Image
          src="/common/tag.svg"
          width={64}
          height={64}
          style={{
            width: "1em",
            height: "1em",
          }}
          alt="タグ"
        />
      </div>
      <div className="text-sm">{tag}</div>
    </div>
  );
}

export default Tag;