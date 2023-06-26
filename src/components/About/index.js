import React, { useEffect } from 'react';
import AOS from 'aos';
import { FaFacebook, FaGithub, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      delay: 100,
    });
  }, []);
  return (
    <>
      <section className="bg-light py-5" data-aos="zoom-in">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xxl-8">
              <div className="text-center my-5">
                <h2 className="display-5 fw-bolder">
                  <span className="text-gradient d-inline">About Me</span>
                </h2>
                <p className="lead fw-light mb-4">My name is SENG Lyheng.</p>
                <p className="text-muted">I am 21 years old.</p>
                <p className="text-muted">I am from Cambodia.</p>
                <div className="d-flex justify-content-center fs-2 gap-4">
                  <Link className="text-gradient" href="">
                    <FaGithub />
                  </Link>
                  <Link className="text-gradient" href="#!">
                    <FaFacebook />
                  </Link>
                  <Link className="text-gradient" href="#!">
                    <FaTelegram />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
