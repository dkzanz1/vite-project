import React from "react";
import "../styles/CategoryBoxes.css";

const categories: string[]=['Men', 'Women', 'Boys', 'Girls'];

const CategoryBoxes: React.FC = () => {
    return (
    <div className="category-container">
        {categories.map((category) => (
            <div className="category-box" key={category}>
                <h2>{category}</h2>
            </div>
        ))}
    </div>
  );
};
export default CategoryBoxes;