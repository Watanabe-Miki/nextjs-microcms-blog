import Link from 'next/link'

interface Props {
  className: string
}

const GlovalNav = ({ className }: Props) => {
  return (
    <nav className={className}>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/overview">
            このブログについて
          </Link>
        </li>
        <li>
          <Link href="/blog">
            記事一覧
          </Link>
        </li>
        <li>
          <Link href="/searchList">
            検索
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default GlovalNav;