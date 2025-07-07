import { Link, useLocation } from "react-router";
import HeaderIcon from "../assets/header-icon.svg";
import LoginIcon from "../assets/login.svg";

const Header = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/home";

  return (
    <header className="flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={HeaderIcon} alt="Foo-rum Logo" />
        <span className="text-[16px] font-bold leading-none text-black">
          foo-rum
        </span>
      </div>

      {/* Right CTA */}
      {isHome ? (
        <Link
          to="/signin"
          className="flex items-center gap-x-2 text-[14px] font-semibold text-black hover:underline"
        >
          <span>Login</span>
          <img src={LoginIcon} alt="Login Icon" className="h-5 w-5" />
        </Link>
      ) : (
        <Link
          to="/"
          className="text-[14px] font-semibold text-black hover:underline"
        >
          Back to home
        </Link>
      )}
    </header>
  );
};

export default Header;
