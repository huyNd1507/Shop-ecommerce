import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineDoubleRight,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TO_CART,
  CALCULATE_TOTAL_QUANTITY,
  DECREASE_CART,
  selectCartItems,
} from "../../../redux/slice/cartSlice";
import useFetchDocument from "../../../customHooks/useFetchDocument";
import useFetchCollection from "../../../customHooks/useFetchCollection";
import StarsRating from "react-star-rate";
import "./ProductDetails.scss";
import imgLoading from "../../../assets/spinner.jpg";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { document } = useFetchDocument("products", id);
  const { data } = useFetchCollection("reviews");
  const filteredReviews = data.filter((review) => review.productID === id);

  const cart = cartItems.find((cart) => cart.id === id);
  const isCartAdded = cartItems.findIndex((cart) => {
    return cart.id === id;
  });

  useEffect(() => {
    setProduct(document);
  }, [document]);

  const addToCart = (product) => {
    dispatch(ADD_TO_CART(product));
    dispatch(CALCULATE_TOTAL_QUANTITY());
  };

  const decreaseCart = (product) => {
    dispatch(DECREASE_CART(product));
    dispatch(CALCULATE_TOTAL_QUANTITY());
  };
  return (
    <div className="container">
      {product === null ? (
        <img src={imgLoading} alt="Loading" className="img-loading " />
      ) : (
        <div className="product-detail">
          <div className="breadcumb">
            <Link to="./">Trang chủ</Link>
            <span>
              <AiOutlineDoubleRight />
            </span>
            <Link to="/shop">Tất cả sản phẩm</Link>
            <span>
              <AiOutlineDoubleRight />
            </span>
            <Link to="/">{product.name}</Link>
          </div>
          <div className="row product-row">
            <div className="col-5 col-sm-12 ">
              <div className="product-img">
                <img src={product.imageURL} alt={product.name} />
              </div>
            </div>
            <div className="col-7 col-sm-12 ">
              <div className="product-info">
                <h1>{product.name}</h1>
                <div className="product-info-detail">
                  <span className="product-info-detail-title">
                    Danh mục: <b>{product.category}</b>
                  </span>
                  <span className="product-info-detail-title">
                    Thương hiệu: <b>{product.brand}</b>
                  </span>
                </div>
                <p className="product-description">{product.desc}</p>
                <div className="product-info-price">${product.price}</div>

                {isCartAdded < 0 ? null : (
                  <div className="product-quantity-wrapper">
                    <span className="product-quantity-btn">
                      <AiOutlineMinus onClick={() => decreaseCart(product)} />
                    </span>
                    <span className="product-quantity">
                      {cart.cartQuantity}
                    </span>
                    <span className="product-quantity-btn">
                      <AiOutlinePlus onClick={() => addToCart(product)} />
                    </span>
                  </div>
                )}

                <div>
                  <button
                    className="--btn --btn-primary"
                    onClick={() => addToCart(product)}
                  >
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="product-review">
        <h3>Đánh giá sản phẩm</h3>
        <div>
          {filteredReviews.length === 0 ? (
            <p>Không có đánh giá cho sản phẩm này</p>
          ) : (
            <>
              {filteredReviews.map((item, index) => {
                const { rate, review, reviewDate, userName } = item;
                return (
                  <div key={index}>
                    <StarsRating value={rate} />
                    <p>{review}</p>
                    <div className="user-review">
                      <span>
                        <b>{reviewDate}</b>
                      </span>
                      <span>
                        <b>by: {userName}</b>
                      </span>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
