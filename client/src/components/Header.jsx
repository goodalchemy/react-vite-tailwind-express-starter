import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-moss text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center justify-between h-full">
          <Link
            to="/"
            className="text-lg font-display font-bold tracking-wide hover:text-eggshell transition-colors"
          >
            RVTE
          </Link>

          <nav className="h-full">
            <ul className="flex items-center h-full space-x-8 font-body">
              <li>
                <Link to="/" className="hover:text-eggshell transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-eggshell transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
