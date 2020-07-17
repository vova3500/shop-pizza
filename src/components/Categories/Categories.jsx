import React from "react";

const Categories = ({ items, activCategory, onSelectItem }) => {
  return (
    <div className="categories">
      <ul>
        <li
          className={activCategory === null ? "active" : ""}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items && items.map((item, index) => (
          <li
            className={activCategory === index ? "active" : ""}
            onClick={() => onSelectItem(index)}
            key={`${item}_${index}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
