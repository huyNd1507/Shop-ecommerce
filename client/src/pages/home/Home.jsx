import React from "react";
import { useDispatch } from "react-redux";

import "./Home.scss";
import Sliders from "../../components/slider/Sliders";
import ImgLoading from "../../assets/spinner.jpg";

import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ADD_TO_CART } from "../../redux/slice/cartSlice";
import useFetchCollection from "../../customHooks/useFetchCollection";
import ProductItemHome from "../../components/product/ProductItem/ProductItemHome";
import About from "../../components/about/About";

const Home = () => {
  const { data, isLoading } = useFetchCollection("products");

  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(ADD_TO_CART(product));
  };

  return (
    <>
      <Sliders />
      <div className="container">
        <div className=" home-products">
          <h2>New Products</h2>
          <div className="row">
            {isLoading ? (
              <img src={ImgLoading} alt="Loading.." className="img-loading" />
            ) : (
              <>
                {data.slice(-8).map((product, id) => {
                  return <ProductItemHome product={product} key={product.id} />;
                })}
              </>
            )}
          </div>
        </div>

        <About />
      </div>
    </>
  );
};

export default Home;
