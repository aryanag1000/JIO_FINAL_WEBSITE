import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap";
import "./styles.css";
import tts from "./JIO_ICON.png";
function Footer() {
  return (
    <div>
      <h2 class="devlp">Developers</h2>
      <div class="content">
        <section id="testimonials">
          <div
            id="testimonial-carousel"
            class="carousel slide"
            data-bs-ride="false"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="testimonial-img" src="user.png" alt="profile pic" />
                <h2 class="intro">Debanshu Mishra</h2>
                <div class="details">
                  <li> Electronics and Communication </li>
                  <li> BITS PILANI, GOA CAMPUS </li>
                  <li> Email: f20201051@goa.bits-pilani.ac.in </li>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="testimonial-img"
                  src="user.png"
                  alt="profile pic "
                />
                <h2 class="intro">Madhav Gupta</h2>
                <div class="details">
                  <li> Computer Science </li>
                  <li> BITS PILANI, PILANI CAMPUS </li>
                  <li> Email: f20200106@pilani.bits-pilani.ac.in </li>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="testimonial-img"
                  src="user.png"
                  alt="profile pic "
                />
                <h2 class="intro">Aryan Agrawal</h2>
                <div class="details">
                  <li> Electrical & Electronics </li>
                  <li> BITS PILANI, PILANI CAMPUS </li>
                  <li> Email: f20201548@pilani.bits-pilani.ac.in </li>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="testimonial-img"
                  src="user.png"
                  alt="profile pic "
                />
                <h2 class="intro">Prakhar Garg</h2>
                <div class="details">
                  <li> Electrical & Electronics </li>
                  <li> BITS PILANI, GOA CAMPUS </li>
                  <li> Email: f20200468@goa.bits-goa.ac.in </li>
                </div>
              </div>
            </div>

            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#testimonial-carousel"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#testimonial-carousel"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </button>
          </div>
        </section>
      </div>

      <div class="footer foot" id="contact">
        <div className="row ">
          <div class="col-lg">
            <div class="row">
              <div class="col-lg-6">
                <div class="footer-widget text-var--2">
                  <div class="log">
                    <a href="/">
                      <img src={tts} className="img3" alt="" />
                    </a>
                  </div>
                  <div class="footer-inner">
                    <span class="text-white">
                      Jio Platforms is an Indian technology company and a
                      subsidiary of Reliance Industries, headquartered in
                      Mumbai, India. Established in 2019, it acts as a holding
                      company for India's largest mobile network operator Jio
                      and other digital businesses of Reliance
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="footer-widget text-var--2 menu--contact">
                  <div class="footer-menu">
                    <ul class="ft-menu-list bk-hover row" />
                    <div>
                      <h3>Contact :</h3>
                      <h4>
                        Name : Venkatswaranl <br /> Email :
                        Venkateshwaran1.M@ril.com
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="copyright pt--10 pb--50 text-var-2">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div class="copyright-right text-md-right text-center">
                    <p>© 2022 JIO. All Rights Reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
