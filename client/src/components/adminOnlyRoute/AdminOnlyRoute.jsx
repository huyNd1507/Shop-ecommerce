import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectEmail } from "../../redux/slice/authSlice";
import "./AdminOnly.scss";

const AdminOnlyRoute = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  if (userEmail === process.env.REACT_APP_ADMIN_USER) {
    return children;
  }

  return (
    <section className="admin-only">
      <div className="container">
        <h2>Quyền truy cập bị từ chối</h2>
        <p>Trang này chỉ có thể được xem bởi người dùng Quản trị viên.</p>
        <br />
        <Link to="/">
          <button className="--btn --btn-prrimary">
            &larr; Trở lại trang chủ
          </button>
        </Link>
      </div>
    </section>
  );
};

export const AdminOnlyLink = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  if (userEmail === process.env.REACT_APP_ADMIN_USER) {
    return children;
  }
  return null;
};

export default AdminOnlyRoute;
