import React from 'react';
import style from './navbar.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { HiMenu } from 'react-icons/hi';
import { FaUserGraduate } from 'react-icons/fa';
import logo from '../../images/logo.png';
export default function Navbar({ toggleOffcanvas, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isClick, setIsClick] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div className={`container px-5 ${style.abc}`}>
          <Link className="navbar-brand" to="/">
            <span className={`text-gradient d-inline fw-bolder  ${style.logo}`}>
              <img src={logo} alt="logo" />
            </span>
          </Link>
          {/* <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              setIsClick(!isClick);
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}

          <Button
            variant="primary"
            onClick={handleShow}
            className="me-2 d-lg-none"
          >
            <HiMenu size={30} />
          </Button>
          <Offcanvas
            className="w-30"
            show={show}
            onHide={handleClose}
            {...props}
          >
            <Offcanvas.Header className="p-0 text-gradient " closeButton>
              <Offcanvas.Title>
                <div className="d-flex align-items-center w-100">
                  <div className="p-2 w-100 " onClick={toggleOffcanvas}>
                    <FaUserGraduate className="me-3 " />
                    Profile
                  </div>
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                {props.menu.map((item) => {
                  return (
                    <li className="nav-item">
                      <Link className="nav-link" to={item.url}>
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Offcanvas.Body>
          </Offcanvas>

          <div
            className={`collapse navbar-collapse ${isClick ? 'show' : ''}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
              {props.menu.map((item) => {
                return (
                  <li className="nav-item">
                    <Link className="nav-link" to={item.url}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
