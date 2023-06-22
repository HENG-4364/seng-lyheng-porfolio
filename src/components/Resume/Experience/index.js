import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
export default function Experience(props) {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
      delay: 100,
    });
  }, []);
  return (
    <>
      <section>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0">Experience</h2>

          <Link className="btn btn-primary px-4 py-3 text-center" href="#!">
            <div className="" style={{ fontSize: '15px' }}>
              Download
            </div>
          </Link>
        </div>
        {props.experiencedata.map((item) => {
          return (
            <div
              className="card shadow border-0 rounded-4 mb-5 "
         
              data-aos={item.exp_id % 2 === 0 ?("fade-right"):("fade-left")}
            >
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-primary fw-bolder mb-2">
                        {item.exp_years}
                      </div>
                      <div className="small fw-bolder">{item.exp_name}</div>
                      <div className="small text-muted">{item.exp_company}</div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>{item.exp_des}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
