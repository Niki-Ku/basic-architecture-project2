import { useState } from "react";
import { Link } from "react-router-dom";

interface SearchBarProps {
  links: {
    name: string;
    path: string;
  }[];
}

const SearchBar:React.FC<SearchBarProps> = ({ links }) => {
  const [query, setQuery] = useState("");
  const filteredItems = links.filter(item => item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));

  return (
    <div className="h-max">
      <form>
        <input 
          onChange={(e) => setQuery(e.target.value)} 
          type="search" 
          value={query}
          className="text-black"
        />
        <button>Search</button>
      </form>
      {query.length > 0 && filteredItems.map((link) => (
        <div key={`seach-item-${link.name}`}>
          <Link to={link.path}>
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SearchBar;
