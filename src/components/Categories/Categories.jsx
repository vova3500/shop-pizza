import React, { useState, memo } from "react";

const Categories = memo(({ items, onClickItem }) => {
  const [activCategory, setActivCategory] = useState(null);

  const onSelectItem = (categoryId) => {
    setActivCategory(categoryId);
    onClickItem(categoryId);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activCategory === null ? "active" : ""}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((item, index) => (
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
});

export default Categories;
