import React, { useState, ChangeEvent } from "react";
import "./SearchBar.css";

type SearchBarProps = {
    onSearch: (searchTerm: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchTerm(value);
        onSearch(value);
    };

    const handleButtonClick = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search by manufacturer or model..."
            />
            <button onClick={handleButtonClick}>Search</button>
        </div>
    );
};

export default SearchBar;
