import "./CategoryList.scss";

const CategoryList = () => {
  return (
    <div className="category-list__wrapper">
      <p className="category-list__name-wrapper">
        <span className="category-list__name"> categories </span>
      </p>
      <ul className="category-list">
        <li className="category-list__item">
          lifestyle <p>451</p>
        </li>
        <li className="category-list__item">
          fashion <p>451</p>
        </li>
        <li className="category-list__item">
          technology <p>451</p>
        </li>
        <li className="category-list__item">
          travel <p>451</p>
        </li>
        <li className="category-list__item">
          health <p>451</p>
        </li>
      </ul>
    </div>
  );
};

export default CategoryList;
