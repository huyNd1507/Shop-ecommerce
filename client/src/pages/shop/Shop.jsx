import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import ProductFilter from "../../components/product/ProductFilter/ProductFilter";
import {
  GET_PRICE_RANGE,
  selectProducts,
  STORE_PRODUCTS,
} from "../../redux/slice/productSlice";
import useFetchCollection from "../../customHooks/useFetchCollection";
import ImgLoading from "../../assets/spinner.jpg";
import ProductList from "../../components/product/ProductList/ProductList";
import "./Shop.scss";

const Shop = () => {
  const { data, isLoading } = useFetchCollection("products");
  // console.log("data:", data)
  const [showFilter, setShowFilter] = useState(false);
  const products = useSelector(selectProducts);
  // console.log("products:", products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      STORE_PRODUCTS({
        products: data,
      })
    );

    dispatch(
      GET_PRICE_RANGE({
        products: data,
      })
    );
  }, [dispatch, data]);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };
  return (
    <div className="container">
      <div className="breadcumb">
        <Link to="/">Home</Link>
        <span>
          <AiOutlineDoubleRight />
        </span>
        <Link to="/shop">All products</Link>
      </div>

      <div className="row">
        <div
          className={
            showFilter ? "col-3 filter-col active" : "col-3 filter-col"
          }
        >
          <div className=" filter-toggle-box">
            <button className="--btn --btn-primary" onClick={toggleFilter}>
              Đóng
            </button>
          </div>
          <ProductFilter />
        </div>
        <div className="col-9 col-md-12">
          <div className=" filter-toggle-box">
            <button className="--btn --btn-primary" onClick={toggleFilter}>
              Bộ lọc
            </button>
          </div>
          {isLoading ? (
            <img src={ImgLoading} alt="Loading.." className="img-loading" />
          ) : (
            <div>
              <ProductList products={products} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
