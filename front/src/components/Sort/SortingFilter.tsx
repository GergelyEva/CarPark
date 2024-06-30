import React from "react";
import "./SortingFilter.css";

type SortingFilterProps = {
    onSortChange: (SortBy: string, sortOrder: string) => void;
};

const SortingFilter = ({ onSortChange }: SortingFilterProps) => {
    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.value;
        const [SortBy, sortOrder] = selectedOption.split("-");
        onSortChange(SortBy, sortOrder);
    };

    return (
        <div className="sorting-filter">
            <label htmlFor="sort-dropdown">Sort by:</label>
            <select id="sort-dropdown" className="sort-dropdown" onChange={handleSortChange}>
                <option value="manufacturer-ascending">Manufacturer Ascending</option>
                <option value="manufacturer-descending">Manufacturer Descending</option>
                <option value="model-ascending">Model Ascending</option>
                <option value="model-descending">Model Descending</option>
                <option value="constructionYear-ascending">Construction Year Ascending</option>
                <option value="constructionYear-descending">Construction Year Descending</option>
            </select>
        </div>
    );
};

export default SortingFilter;
