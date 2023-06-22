import React from 'react';
import AOS from 'aos';
import { useEffect } from 'react';

export default function ListProjects(props) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      delay: 100,
    });
  }, []);
  return (
    <>
      {props.ProjectData.map((item) => {
        return (
          <div
            className="card shadow border-0 rounded-4 mb-5 "
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div className="card-body p-0">
              <div className="row align-items-center gx-5">
                <div className="col text-center text-lg-start mb-4 mb-lg-0">
                  <div className="p-5">
                    <h2 className="fw-bolder">{item.pro_name}</h2>
                    <p>{item.pro_des}</p>
                  </div>
                </div>
                <div className="col-lg-6  ">
                  <div style={{ width: '100%' }}>
                    <img
                      className="img-fluid rounded-end-4"
                      src={item.pro_img}
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
