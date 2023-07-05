import React, { useEffect } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import {
  selectProducts,
  STORE_PRODUCTS,
} from "../../../redux/slice/productSlice";
import {
  CALC_TOTAL_ORDER_AMOUNT,
  selectOrderHistory,
  selectTotalOrderAmount,
  STORE_ORDERS,
} from "../../../redux/slice/orderSlice";

import InfoBox from "../../infoBox/InfoBox";
import "./Home.scss";
import { selectUserName } from "../../../redux/slice/authSlice";
import useFetchCollection from "../../../customHooks/useFetchCollection";
import Chart from "../../chart/Chart";

//Icons
const earningIcon = <AiFillDollarCircle size={30} color="#b624ff" />;
const productIcon = <BsCart4 size={30} color="#1f93ff" />;
const ordersIcon = <FaCartArrowDown size={30} color="orangered" />;

const Home = () => {
  const products = useSelector(selectProducts);
  const orders = useSelector(selectOrderHistory);
  const totalOrderAmount = useSelector(selectTotalOrderAmount);
  const users = useSelector(selectUserName);
  // console.log("userlogin: ", users);

  const fbProducts = useFetchCollection("products");
  const { data } = useFetchCollection("orders");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      STORE_PRODUCTS({
        products: fbProducts.data,
      })
    );

    dispatch(STORE_ORDERS(data));

    dispatch(CALC_TOTAL_ORDER_AMOUNT());
  }, [dispatch, data, fbProducts]);

  return (
    <div className="home">
      <h2>Admin Home</h2>

      <div className="row">
        <div className="col-3  col-sm-6 ">
          <InfoBox
            Cardclass="card1"
            title={"Earnings"}
            count={`$${totalOrderAmount}`}
            icon={earningIcon}
          />
        </div>
        <div className="col-3  col-sm-6 ">
          <InfoBox
            Cardclass="card2"
            title={"Products"}
            count={products.length}
            icon={productIcon}
          />
        </div>
        <div className="col-3  col-sm-6 ">
          <InfoBox
            Cardclass="card3"
            title={"Orders"}
            count={orders.length}
            icon={ordersIcon}
          />
        </div>
        <div className="col-3  col-sm-6 ">
          <InfoBox
            Cardclass="card4"
            title={"Users"}
            count={users.length}
            icon={productIcon}
          />
        </div>
      </div>
      <div>
        <Chart />
      </div>
    </div>
  );
};

export default Home;
