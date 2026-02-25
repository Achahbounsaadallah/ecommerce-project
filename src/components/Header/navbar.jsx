import { Link, useLocation } from "react-router-dom";
import Searchbar from "./searchbar";

function Navbar({ searchQuery, setSearchQuery, cartCount }) {
  const location = useLocation();

  const links = [
    { label: "Accueil",     to: "/" },
    { label: "Smartwatch",  to: "/smartwatches" },
    { label: "Smartphone",  to: "/smartphones" },
    { label: "Accessoires", to: "/accessoires" },
    { label: "Contact",     to: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0b0713]/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-8">

        <Link to="/" className="flex-shrink-0 no-underline">
          <span className="font-serif font-black text-2xl bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent tracking-tight">
            MyStore
          </span>
        </Link>

        <ul className="flex items-center gap-1 flex-1 list-none p-0 m-0">
          {links.map((l) => {
            const isActive = location.pathname === l.to;
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`no-underline block px-3.5 py-1.5 rounded-lg text-sm transition-all duration-200 ${
                    isActive
                      ? "text-violet-400 font-semibold bg-violet-400/10"
                      : "text-white/50 hover:text-white/90 hover:bg-white/5"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <button className="relative text-xl flex-shrink-0 bg-transparent border-none cursor-pointer leading-none">
          🛒
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-[10px] font-black w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 border-[#0b0713]">
              {cartCount}
            </span>
          )}
        </button>

        <Link to="/login" className="no-underline flex-shrink-0">
          <button className="bg-violet-500/15 border border-violet-400/30 text-violet-400 font-semibold text-[13px] px-4 py-1.5 rounded-xl cursor-pointer hover:border-violet-400/60 hover:bg-violet-400/20 transition-all duration-200">
            Connexion →
          </button>
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;