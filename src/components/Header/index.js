import React from 'react';
import style from './header.module.scss';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <>
      <header className="py-5">
        <div className="container px-5 pb-5">
          <div className="row gx-5 align-items-center">
            <div className="col-xxl-5">
              
              <div className={`text-center text-xxl-start ${style.Header}`}>
                <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                  <div className={`text-uppercase ${style.text}`}>
                    Design · Development · Website
                  </div>
                </div>
                <div className="fs-3 fw-light text-muted">
                  I can help your business...
                </div>
                <h1 className="display-3 fw-bolder mb-5">
                  <span className="text-gradient d-inline">
                    I'm SENG Lyheng...
                  </span>
                </h1>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                  <Link
                    className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                    to="/resume"
                  >
                    Resume
                  </Link>
                  <Link
                    className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
                    to="/project"
                  >
                    Projects
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-7">
              <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                <div
                  className={` bg-gradient-primary-to-secondary ${style.background_img}`}
                >
                  <img
                    className="profile-img"
                    src="https://oggyinu.com/wp-content/uploads/2023/05/tokenomic-1.png"
                    alt="..."
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
