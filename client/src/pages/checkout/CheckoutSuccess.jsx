import { Link } from "react-router-dom";
import imgSuccess from "../../../src/assets/image/check.png";

const CheckoutSuccess = () => {
  return (
    <section className="checkout-success">
      <div className="container">
        <h2>Thanh toán thành công</h2>
        <img src={imgSuccess} alt="" />
        <p>Cảm ơn vì đã mua hàng:))</p>
        <br />

        <button className="--btn --btn-primary">
          <Link to="/order-history">Xem trạng thái đơn hàng</Link>
        </button>
      </div>
    </section>
  );
};

export default CheckoutSuccess;
