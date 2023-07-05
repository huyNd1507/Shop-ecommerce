import React from "react";
import "./Footer.scss";

import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-second">
      <div className="container">
        <div className="row">
          <div className="col-3 col-md-6">
            <h3 className="footer-head">Products</h3>
            <ul className="menu">
              <li>
                <Link to="/">Help center</Link>
              </li>
              <li>
                <Link to="/">Contact us</Link>
              </li>
              <li>
                <Link to="/">product help</Link>
              </li>
              <li>
                <Link to="/">warranty</Link>
              </li>
              <li>
                <Link to="/">order status</Link>
              </li>
            </ul>
          </div>
          <div className="col-3 col-md-6">
            <h3 className="footer-head">services</h3>
            <ul className="menu">
              <li>
                <Link to="/">Help center</Link>
              </li>
              <li>
                <Link to="/">Contact us</Link>
              </li>
              <li>
                <Link to="/">product help</Link>
              </li>
              <li>
                <Link to="/">warranty</Link>
              </li>
              <li>
                <Link to="/">order status</Link>
              </li>
            </ul>
          </div>
          <div className="col-3 col-md-6">
            <h3 className="footer-head">support</h3>
            <ul className="menu">
              <li>
                <Link to="/">Help center</Link>
              </li>
              <li>
                <Link to="/">Contact us</Link>
              </li>
              <li>
                <Link to="/">product help</Link>
              </li>
              <li>
                <Link to="/">warranty</Link>
              </li>
              <li>
                <Link to="/">order status</Link>
              </li>
            </ul>
          </div>
          <div className="col-3 col-md-6 col-sm-12">
            <div className="contact">
              <h3 className="contact-header">QHShop</h3>
              <ul className="contact-socials">
                <li>
                  <Link to="/">
                    <BsFacebook className="bx bxl-facebook-circle" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <AiFillInstagram className="bx bxl-instagram-alt" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <AiFillYoutube className="bx bxl-youtube" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <BsTwitter className="bx bxl-twitter" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="subscribe">
              <input type="email" placeholder="ENTER YOUR EMAIL" />
              <button>subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
