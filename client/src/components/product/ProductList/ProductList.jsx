import React, { useState, useEffect } from "react";
import ProductItem from "../../../components/product/ProductItem/ProductItem";
import Search from "../../search/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  FILTER_BY_SEARCH,
  selectFilteredProducts,
  SORT_PRODUCTS,
} from "../../../redux/slice/filterSlice";
import Pagination from "../../pagination/Pagination";
import "./ProductList.scss";
// import { useSearchParams } from "react-router-dom";

const ProductList = ({ products }) => {
  // const [query, setquery] = useState("");
  // const [searchParams, setSearchParams] = useSearchParams({});
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const filteredProducts = useSelector(selectFilteredProducts);

  // const handleChange = (e) => {
  //   setSearchParams({ query: e.target.value });
  //   setquery(e.target.value);
  //   setSearch(e.target.value);
  // };
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  // Get Current Products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SORT_PRODUCTS({ products, sort }));
  }, [dispatch, products, sort]);

  useEffect(() => {
    dispatch(FILTER_BY_SEARCH({ products, search }));
  }, [dispatch, products, search]);

  return (
    <>
      <div className="filter-box">
        <div className="col-4 col-sm-12 ">
          <p>
            <b>{filteredProducts.length}</b>products
          </p>
        </div>
        <div className="col-4 col-sm-12 ">
          <div className="search-filter">
            <Search
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="col-4 col-sm-12 ">
          <div className="filter-sort">
            <label>Sort by:</label>
            <select onChange={(e) => setSort(e.target.value)}>
              <option value="latest">Lastest</option>
              <option value="lowest-price">lowest-price</option>
              <option value="highest-price">Highest-price</option>
              <option value="a-z">A - Z</option>
              <option value="z-a">Z - A</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        {products.length === 0 ? (
          <p>No products</p>
        ) : (
          <>
            {currentProducts.map((product, id) => {
              return (
                <ProductItem key={product.id} {...product} product={product} />
              );
            })}
          </>
        )}
      </div>
      <div>
        <Pagination
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={filteredProducts.length}
        />
      </div>
    </>
  );
};

export default ProductList;
