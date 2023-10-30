import tune from "../assets/icons/tune.png";
import fourSquares from "../assets/icons/four-squares.png";
import columns from "../assets/icons/column.png";

const FilterProducts = ({ cardStyleType, toggleFilter }) => {
  return (
    <div className="filter-products container">
      <div className="filter" onClick={toggleFilter}>
        <img src={tune} />
        <p>Filter</p>
      </div>
      <div className="display">
        <img
          onClick={() => cardStyleType("simple-card")}
          src={fourSquares}
          className="square-products__img"
        />
        <img
          onClick={() => cardStyleType("expanded-card")}
          src={columns}
          className="column-products__img"
        />
      </div>
    </div>
  );
};

export default FilterProducts;
