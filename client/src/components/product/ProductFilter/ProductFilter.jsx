import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FILTER_BY_BRAND,
  FILTER_BY_CATEGORY,
  FILTER_BY_PRICE,
} from "../../../redux/slice/filterSlice";
import {
  selectMaxPrice,
  selectMinPrice,
  selectProducts,
} from "../../../redux/slice/productSlice";
import "./ProductFilter.scss";

const ProductFilter = () => {
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [price, setPrice] = useState(3000);
  const products = useSelector(selectProducts);
  const minPrice = useSelector(selectMinPrice);
  const maxPrice = useSelector(selectMaxPrice);

  const dispatch = useDispatch();

  const allCategories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const allBrands = [
    "All",
    ...new Set(products.map((product) => product.brand)),
  ];

  useEffect(() => {
    dispatch(FILTER_BY_BRAND({ products, brand }));
  }, [dispatch, products, brand]);

  useEffect(() => {
    dispatch(FILTER_BY_PRICE({ products, price }));
  }, [dispatch, products, price]);

  const filterProducts = (cat) => {
    setCategory(cat);
    dispatch(FILTER_BY_CATEGORY({ products, category: cat }));
  };

  const clearFilters = () => {
    setCategory("All");
    setBrand("All");
    setPrice(maxPrice);
  };

  return (
    <>
      <div className="category-filter">
        <span className="filter-header"> Danh mục </span>
        <ul className="filter-list">
          {allCategories.map((cat, index) => {
            return (
              <li
                key={index}
                onClick={() => filterProducts(cat)}
                className={`${category}` === cat ? "active" : null}
              >
                {cat}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="category-filter">
        <span className="filter-header">Thương hiệu</span>
        <select
          className="filter-select"
          onChange={(e) => setBrand(e.target.value)}
        >
          {allBrands.map((brand, index) => {
            return (
              <option key={index} value={brand}>
                {brand}
              </option>
            );
          })}
        </select>
      </div>
      <div className="category-filter">
        <span className="filter-header"> Giá </span>
        <p>${price}</p>
        <div className="price-range">
          <input
            type="range"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min={minPrice}
            max={maxPrice}
          />
        </div>
      </div>
      <div className="category-filter">
        <button className="--btn --btn-danger" onClick={clearFilters}>
          Xóa bộ lọc
        </button>
      </div>
    </>
  );
};

export default ProductFilter;
