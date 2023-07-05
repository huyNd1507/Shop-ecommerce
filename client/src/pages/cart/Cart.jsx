import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiTwotoneDelete,
  AiOutlineDoubleRight,
} from "react-icons/ai";

import { selectIsLoggedIn } from "../../redux/slice/authSlice";
import "./Cart.scss";
import {
  ADD_TO_CART,
  CALCULATE_SUBTOTAL,
  CALCULATE_TOTAL_QUANTITY,
  CLEAR_CART,
  DECREASE_CART,
  REMOVE_FROM_CART,
  SAVE_URL,
  selectCartItems,
  selectCartTotalAmount,
  selectCartTotalQuantity,
} from "../../redux/slice/cartSlice";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotalAmount = useSelector(selectCartTotalAmount);
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const navigate = useNavigate();

  const increaseCart = (cart) => {
    dispatch(ADD_TO_CART(cart));
  };

  const decreaseCart = (cart) => {
    dispatch(DECREASE_CART(cart));
  };

  const removeFromCart = (cart) => {
    dispatch(REMOVE_FROM_CART(cart));
  };

  const clearCart = () => {
    dispatch(CLEAR_CART());
  };

  useEffect(() => {
    dispatch(CALCULATE_SUBTOTAL());
    dispatch(CALCULATE_TOTAL_QUANTITY());
    dispatch(SAVE_URL(""));
  }, [cartItems, dispatch]);

  const url = window.location.href;

  const checkout = () => {
    if (isLoggedIn) {
      navigate("/checkout-details");
    } else {
      dispatch(SAVE_URL(url));
      navigate("/login");
    }
  };
  return (
    <div className="cart">
      <div className="container">
        <div className="breadcumb">
          <Link to="/">Home</Link>
          <span>
            <AiOutlineDoubleRight />
          </span>
          <Link to="/shop">Cart</Link>
        </div>
        <div className="row">
          <div className="col-9 col-sm-12">
            {cartItems.length === 0 ? (
              <p>No product</p>
            ) : (
              <>
                {cartItems.map((cart, index) => {
                  const {
                    id,
                    name,
                    price,
                    category,
                    brand,
                    imageURL,
                    cartQuantity,
                  } = cart;
                  return (
                    <div className="cart-item" key={id}>
                      <div className="cart-item_info">
                        <div className="cart-item_info--img">
                          <img src={imageURL} alt={name} />
                        </div>
                        <div className="cart-item_info--title">
                          <Link to="/">
                            <h1>{name}</h1>
                          </Link>

                          <span>Category: {category}</span>
                          <span>Brand: {brand} </span>

                          <button
                            className="--btn "
                            onClick={() => removeFromCart(cart)}
                          >
                            <AiTwotoneDelete />
                          </button>
                        </div>
                      </div>
                      <div className="cart-item_content">
                        <div className="cart-item_content--price">
                          <span>${price}</span>
                        </div>
                        <div className="cart-item_content--quantity">
                          <div
                            className="--btn btn-left"
                            onClick={() => decreaseCart(cart)}
                          >
                            <AiOutlineMinus />
                          </div>
                          <div className="--btn quantity-selector">
                            {cartQuantity}
                          </div>
                          <div
                            className="--btn btn-left"
                            onClick={() => increaseCart(cart)}
                          >
                            <AiOutlinePlus />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <button className="--btn --btn-danger" onClick={clearCart}>
                  Clear Cart
                </button>
              </>
            )}
          </div>
          <div className="col-3 col-sm-12">
            <div className="cart-actions">
              <h2>You have {cartTotalQuantity} products</h2>
              <span>
                Total: <p>${cartTotalAmount}</p>
              </span>
              <button className="--btn --btn-primary" onClick={checkout}>
                Checkout
              </button>
              <button className="--btn --btn-primary">
                <Link to="/shop">Continue Shopping</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
