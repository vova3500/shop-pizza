import React, { memo } from "react";

const Categories = memo(({ activCategory, items, onSelectCategory }) => {
  return (
    <div className="categories">
      <ul>
        <li
          className={activCategory === null ? "active" : ""}
          onClick={() => onSelectCategory(null)}
        >
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              className={activCategory === index ? "active" : ""}
              onClick={() => onSelectCategory(index)}
              key={`${item}_${index}`}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
