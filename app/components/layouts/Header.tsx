import { DrawerNav } from "../elements/DrawerNav";
import GlovalNav from "./GlovalNav";

const Header = () => {
  return (
    <header className="backdrop-blur-sm bg-white/50 fixed top-0 left-0 w-full z-header h-headerHeightMD md:h-headerHeightPC shadow-[0_0_10px_rgba(0,0,0,0.1)]">
      <GlovalNav variant="headerNav" />
      <DrawerNav />
    </header>
  );
};

export default Header;
