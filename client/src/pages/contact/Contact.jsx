import React, { useRef } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
        "service_c2cjdds",
        "template_g9yjurr",
        form.current,
        "CZjBzAI9bWCPx7HMG"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact">
      <div className="container">
        <div className="breadcumb">
          <Link to="/">Home</Link>
          <span>
            <AiOutlineDoubleRight />
          </span>
          <Link to="/shop">Contact</Link>
        </div>
        <div className="row">
          <div className=" col-6 col-sm-12 ">
            <div className="map-box">
              <img
                src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
            </div>
          </div>
          <div className=" col-6 col-sm-12 ">
            <div className="wrap-content">
              <div className="contact-header">
                <h1>Contact</h1>
              </div>
              <div className="contact-info">
                <ul className="list-info">
                  <li>
                    <HiLocationMarker />
                    <strong>
                      235 Hoàng Quốc Việt, Cổ Nhuế, Bắc Từ Liêm, Hà Nội
                    </strong>
                  </li>
                  <li>
                    <MdEmail />
                    <strong>daihocdienluc@edu.env.com</strong>
                  </li>
                  <li>
                    <BsFillTelephoneFill />
                    <strong>1900.636.099</strong>
                  </li>
                  <li>
                    <HiLocationMarker />
                    <strong>
                      Thứ 2 đến Thứ 6 từ 8h đến 18h; Thứ 7 và Chủ nhật từ 8h00
                      đến 17h00
                    </strong>
                  </li>
                </ul>
              </div>
              <div className="contact-send">
                <h2>Send us a question</h2>

                <form ref={form} onSubmit={sendEmail}>
                  <div className="input-group">
                    <input
                      required
                      type="text"
                      name="user_name"
                      className="form-control"
                      placeholder="Fullname"
                    />
                  </div>
                  <div className="input-group">
                    <input
                      required
                      type="email"
                      name="user_email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="input-group">
                    <input
                      required
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="input-group">
                    <textarea name="message" cols="30" rows="10"></textarea>
                  </div>
                  <button className="button dark" type="submit">
                    Send us
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
