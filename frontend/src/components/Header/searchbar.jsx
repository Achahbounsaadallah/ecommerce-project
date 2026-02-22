import "./navbar.css";

function Searchbar({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Rechercher..."
      className="search-input"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

export default Searchbar;