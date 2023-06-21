import React from 'react';

export default function Professional(props) {
  return (
    <>
      <div className="mb-5">
        <div className="d-flex align-items-center mb-4">
          <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
            <i className="bi bi-tools"></i>
          </div>
          <h3 className="fw-bolder mb-0">
            <span className="text-gradient d-inline">Professional Skills</span>
          </h3>
        </div>

        <div className="row row-cols-1 row-cols-md-3">
          {
            props.proskill.map((item) => {
              return <div className="col mb-4 mb-md-4">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                  {item.pro_name}
                </div>
              </div>
            })
          }


        </div>
      </div>
    </>
  );
}
