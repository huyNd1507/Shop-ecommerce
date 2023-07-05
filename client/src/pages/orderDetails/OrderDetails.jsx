import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetchDocument from "../../customHooks/useFetchDocument";
import spinnerImg from "../../assets/spinner.jpg";
import "./OrderDetails.scss";
const OrderDetails = () => {
  const [order, setOrder] = useState(null);
  const { id } = useParams();
  const { document } = useFetchDocument("orders", id);

  useEffect(() => {
    setOrder(document);
  }, [document]);

  return (
    <section className="order-details">
      <div className="container ">
        <h2>Order Details</h2>

        <button className="--btn --btn-primary">
          <Link to="/order-history">&larr; Back To Orders</Link>
        </button>

        <br />
        {order === null ? (
          <img src={spinnerImg} alt="Loading..." className="img-loading" />
        ) : (
          <>
            <p>
              <b>Order ID: </b> {order.id}
            </p>
            <p>
              <b>Order Amount: </b> ${order.orderAmount}
            </p>
            <p>
              <b>Order Status: </b> {order.orderStatus}
            </p>
            <p>
              <b>Name: </b> {order.shippingAddress.name}
            </p>
            <p>
              <b>Phone: </b> {order.shippingAddress.phone}
            </p>
            <p>
              <b>Address: </b>
              {`${order.shippingAddress.city}, ${order.shippingAddress.country}`}
            </p>
            <br />
            <table>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Name product</th>
                  <th>Image Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {order.cartItems.map((cart, index) => {
                  const { id, name, price, imageURL, cartQuantity } = cart;
                  return (
                    <tr key={id}>
                      <td>
                        <b>{index + 1}</b>
                      </td>
                      <td>{name}</td>
                      <td>
                        <img src={imageURL} alt={name} />
                      </td>

                      <td>${price}</td>
                      <td>{cartQuantity}</td>
                      <td>${price * cartQuantity}</td>
                      <td className="icons">
                        <Link to={`/review-product/${id}`}>
                          <button className="--btn --btn-primary">
                            Review Product
                          </button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
    </section>
  );
};

export default OrderDetails;
