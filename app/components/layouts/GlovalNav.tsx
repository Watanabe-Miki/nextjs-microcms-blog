import Link from 'next/link'
import { links } from '@/libs/links'

interface GlobalNavProps {
  variant: "headerNav" | "drawerNav"
}

const styleVariants = {
  headerNav: {
    nav: "h-headerHeightMD md:h-headerHeightPC hidden md:block",
    ul: "flex justify-center",
  },
  drawerNav: {
    nav: "block md:hidden",
    ul: "flex flex-col",
  },
};

const GlovalNav = ({ variant }: GlobalNavProps) => {
  const headerNavItemstyle = "relative mr-10 last:mr-none"
  const commonStyle = "h-headerHeightMD md:h-headerHeightPC flex items-center"


  return (
    <nav className={styleVariants[variant].nav}>
      <ul className={styleVariants[variant].ul}>
        {links.map((link) => (
          <li 
            key={link.name} 
            className={headerNavItemstyle}
          >
            <Link 
              href={`${link.slug}`} 
              className={commonStyle}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GlovalNav;