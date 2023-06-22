import React from 'react';
import ListProjects from './ListProjects';
import { Link } from 'react-router-dom';
import { project_list } from '../Data/Projects';
import style from './project.module.scss';

export default function Project() {
  return (
    <>
      <section className={`bg-light py-5 ${style.project}`}>
        <div className="container px-5 mb-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-gradient d-inline">Projects</span>
            </h1>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              <ListProjects ProjectData={project_list} />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-gradient-primary-to-secondary text-white">
        <div className="container px-5 my-5">
          <div className="text-center">
            <h2 className="display-4 fw-bolder mb-4">
              Let's build something together
            </h2>
            <Link
              className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder"
              to="/contact"
            >
              Contact me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
