import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/icons/SearchIcon.svg";

import "./SearchBar.css";

// ask Yra why does removing of x from search input worked from SearchBar.css and didn't from index.css
// finish styling                 DONE
// limit to 5 search results      DONE
// make search results overlap content under searchbar instead of shifting all down

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
    <div className="h-max w-full rounded p-0.5 bg-gradient-to-r from-[#e50914] from-[-0.08%] via-[#c94ff5] via-[81%] to-[#5b79f1] to-[99.92%]">
      <div className="rounded overflow-hidden">
        <form className="relative mb-[1px]">
          <input 
            onChange={(e) => setQuery(e.target.value)} 
            type="search" 
            value={query}
            placeholder="Type a question, topic or issue"
            className="w-full text-black text-base pl-[52px] appearance-none pr-4 py-[9px] focus:outline-none"
          />
          <SearchIcon className="w-6 h-6 fill-graySecondary absolute top-[9px] left-3.5 pointer-events-none" />
        </form>
        <div className=" bg-white">
          <ul className={`${filteredItems.length > 0 && query.length > 0 && "px-0.5 py-1 mx-4"}`}>
            {query.length > 0 && filteredItems.map((link, index) => {
              if (index < 5) return (
                <li 
                  key={`seach-item-${link.name}`} 
                  className="bg-white text-black hover:bg-[#fafafa] cursor-pointer border-b border-[#0000001a] last:border-0 py-[9px]"
                >
                  <Link to={link.path} className="text-base">
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
