import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.scss";
import resetImg from "../../assets/image/passw.jpg";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase/config";
import Loader from "../../components/loader/Loader";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const ResetPassword = (e) => {
    e.preventDefault();
    setIsloading(true);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsloading(false);
        toast.success("Vui lòng kiểm tra email của bạn");
      })
      .catch((error) => {
        setIsloading(false);
        toast.error(error.message);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className="auth">
        <div className="auth-container">
          <div className="auth-img">
            <img src={resetImg} alt="Login" />
          </div>
          <div className="form">
            <h2>Reset Password</h2>
            <form onSubmit={ResetPassword}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Send
              </button>
              <div className="links">
                <p>
                  <Link to="/login">- Login</Link>
                </p>
                <p>
                  <Link to="/register">- Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reset;

{
  /* <section className="container auth">
  <div className="auth-img">
    <img
      src="https://media.istockphoto.com/id/1199008371/vi/vec-to/ng%C6%B0%E1%BB%9Di-ph%E1%BB%A5-n%E1%BB%AF-b%E1%BB%91i-r%E1%BB%91i-gi%E1%BB%AF-%C4%91%E1%BA%A7u-ng%C6%B0%E1%BB%9Di-%C4%91%C3%A0n-%C3%B4ng-v%E1%BB%9Bi-b%C3%B3-ch%C3%ACa-kh%C3%B3a-v%E1%BB%9Bi-d%E1%BA%A5u-ch%E1%BA%A5m-h%E1%BB%8Fi-tr%C3%AAn-%C4%91%E1%BA%A7u-t%C3%ACm.jpg?s=612x612&w=0&k=20&c=3CpHs4dDrbtcP-DRh97c1LcBnV05bQwtCMiqPFoWN3Q="
      alt="Reset Password"
      width="400"
    />
  </div>

  <Card>
    <div className="form">
      <h2>Đặt lại mật khẩu</h2>

      <form onSubmit={ResetPassword}>
        <input
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" className="--btn --btn-primary --btn-block">
          Đặt lại mật khẩu
        </button>
        <div className="links">
          <p>
            <Link to="/login">- Login</Link>
          </p>
          <p>
            <Link to="/register">- Register</Link>
          </p>
        </div>
      </form>
    </div>
  </Card>
</section>; */
}
