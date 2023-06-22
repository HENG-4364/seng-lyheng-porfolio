import React, { useEffect } from 'react';
import AOS from 'aos';

export default function Education(props) {
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
        <h2 className="text-secondary fw-bolder mb-4">Education</h2>

        {props.education.map((item) => {
          return (
            <div
              className="card shadow border-0 rounded-4 mb-5"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-secondary fw-bolder mb-2">
                        {item.edu_years}
                      </div>
                      <div className="mb-2">
                        <div className="small fw-bolder">{item.edu_name}</div>
                        <div className="small text-muted">
                          {item.edu_school}
                        </div>
                      </div>
                      <div className="fst-italic">
                        <div className="small text-muted">
                          {item.edu_location}
                        </div>
                        {/* <div className="small text-muted">Web Development</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>{item.edu_des}</div>
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
