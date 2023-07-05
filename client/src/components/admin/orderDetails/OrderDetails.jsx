import React, { useEffect, useState } from "react";
import useFetchDocument from "../../../customHooks/useFetchDocument";
import "./OrderDetails.scss";
import spinnerImg from "../../../assets/spinner.jpg";
import { Link, useParams } from "react-router-dom";
import ChangeOrderStatus from "../changeOrderStatus/ChangeOrderStatus";

const OrderDetails = () => {
  const [order, setOrder] = useState(null);
  const { id } = useParams();
  const { document } = useFetchDocument("orders", id);

  useEffect(() => {
    setOrder(document);
  }, [document]);

  return (
    <>
      <div className="table">
        <h2>Order Details</h2>
        <button className="--btn --btn-primary">
          <Link to="/admin/orders">&larr; Back To Orders</Link>
        </button>
        <br />
        {order === null ? (
          <img src={spinnerImg} alt="Loading..." style={{ width: "50px" }} />
        ) : (
          <>
            <p>
              <b>Order ID</b> {order.id}
            </p>
            <p>
              <b>Order Amount</b> ${order.orderAmount}
            </p>
            <p>
              <b>Order Status</b> {order.orderStatus}
            </p>
            <p>
              <b>Name: </b> {order.shippingAddress.name}
            </p>
            <p>
              <b>Phone: </b> {order.shippingAddress.phone}
            </p>
            <p>
              <b>City: </b> {order.shippingAddress.city},
            </p>
            <p>
              <b>Country: </b> {order.shippingAddress.country}
            </p>

            <table>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Name product</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
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
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
        <ChangeOrderStatus order={order} id={id} />
      </div>
    </>
  );
};

export default OrderDetails;
