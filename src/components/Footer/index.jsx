import React from "react";
import { useHistory } from "react-router-dom";
import { BackTop } from 'antd';

function Footer() {
  let history = useHistory();
  return (
    <div className="container-fluid">
      <div className="footer">
      <div
          className="logo"
          onClick={() => {
            history.push("/");
          }}
        >
          <i className="fas fa-bolt"></i>
          <a>Phòng trọ nhanh cho sinh viên</a>
        </div>
        <ul className="socials">
          <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
          <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
        </ul>
        <div className="copyright">Copyright &copy; 2021 Developer Batch 7</div>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
}

export default Footer;
