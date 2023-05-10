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
          <Link href="/about">
            このブログについて
          </Link>
        </li>
        <li>
          <Link href="/works">
            作ったもの
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default GlovalNav;