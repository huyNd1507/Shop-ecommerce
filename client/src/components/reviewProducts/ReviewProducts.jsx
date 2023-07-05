import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectUserID, selectUserName } from "../../redux/slice/authSlice";
import "./ReviewProducts.scss";
import StarsRating from "react-star-rate";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/config";
import { toast } from "react-toastify";
import useFetchDocument from "../../customHooks/useFetchDocument";
import spinnerImg from "../../assets/spinner.jpg";

const ReviewProducts = () => {
  const [rate, setRate] = useState(0);
  const [review, setReview] = useState("");
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { document } = useFetchDocument("products", id);
  const userID = useSelector(selectUserID);
  const userName = useSelector(selectUserName);

  useEffect(() => {
    setProduct(document);
  }, [document]);

  const submitReview = (e) => {
    e.preventDefault();

    const today = new Date();
    const date = today.toDateString();
    const reviewConfig = {
      userID,
      userName,
      productID: id,
      rate,
      review,
      reviewDate: date,
      createdAt: Timestamp.now().toDate(),
    };
    try {
      addDoc(collection(db, "reviews"), reviewConfig);
      toast.success("Đánh giá thành công");
      setRate(0);
      setReview("");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section>
      <div className="container ">
        <div className="review">
          <h2>Đánh giá sản phẩm</h2>
          {product === null ? (
            <img src={spinnerImg} alt="Loading..." />
          ) : (
            <>
              <p>
                <b>Tên sản phẩm:</b> {product.name}
              </p>
              <img
                src={product.imageURL}
                alt={product.name}
                style={{ width: "100px" }}
              />
            </>
          )}

          <div className="form-review">
            <form onSubmit={(e) => submitReview(e)}>
              <label>Xếp hạng:</label>
              <StarsRating
                value={rate}
                onChange={(rate) => {
                  setRate(rate);
                }}
              />
              <label>Đánh giá</label>
              <textarea
                value={review}
                required
                onChange={(e) => setReview(e.target.value)}
                cols="30"
                rows="10"
              ></textarea>
              <button type="submit" className="--btn --btn-primary">
                Gửi đánh giá
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewProducts;
