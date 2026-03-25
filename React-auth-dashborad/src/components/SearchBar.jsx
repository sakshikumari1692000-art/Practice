const SearchBar = ({ setSearch }) => {
    return (
      <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
    );
  };
  
  export default SearchBar;