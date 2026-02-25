function Searchbar({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="🔍  Rechercher..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/25 text-sm rounded-xl px-4 py-2 w-52 focus:outline-none focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/10 transition-all duration-200"
    />
  );
}

export default Searchbar;