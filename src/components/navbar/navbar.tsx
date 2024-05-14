import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  to: string;
  currentPath: string;
  children: React.ReactNode;
}

const NavItem = ({ to, currentPath, children }: NavItemProps) => {
  const isActive = currentPath === to;
  return (
    <li>
      <Link
        to={to}
        className={`text-slate-200 hover:text-slate-400 ${
          isActive ? "border-b-2 border-cyan-500 rounded-sm" : ""
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="py-4 flex items-center justify-between">
      <div>
        <Link to="/">
          <h1 className="text-2xl font-bold text-white">PlannedIt.ai</h1>
        </Link>
      </div>
      <div>
        <ul className="flex justify-center space-x-4">
          {/* Add more NavItems here */}
          <NavItem to="/" currentPath={location.pathname}>
            Home
          </NavItem>
          <NavItem to="/about" currentPath={location.pathname}>
            About
          </NavItem>
          <NavItem to="/chatPage" currentPath={location.pathname}>
            Chat
          </NavItem>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
