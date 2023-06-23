import React from 'react';
import { FaHtml5, FaReact } from 'react-icons/fa';

const BuildIcon = (props) => {
  return (
    <i className={`${props?.type ? `fa-${props?.type}` : 'fa'} ${props.icon} fa-2xl`}
      style={{color:"#6396eeF" }}
    ></i>
  );
};

export default function Languages(props) {
  return (
    <>
      <div className="mb-0">
        <div className="d-flex align-items-center mb-4">
          <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
            <i className="bi bi-code-slash"></i>
          </div>
          <h3 className="fw-bolder mb-0">
            <span className="text-gradient d-inline">Languages</span>
          </h3>
        </div>
        <div className="row row-cols-1 row-cols-md-3">
          {props.languages.map((item) => {
            return (
              <div className="col mb-4 mb-md-4">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                  <BuildIcon type={item.lang_type} icon={item.lang_icon} />
                  <span style={{ marginLeft: '10px' }}>{item.lang_name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
