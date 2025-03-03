import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import './searchinput.css'

const SearchInput = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState("")

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query)
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder={placeholder || "Cari Artikel . . ."}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        <FaSearch size={13} />
      </button>
    </div>
  );
};

export default SearchInput
