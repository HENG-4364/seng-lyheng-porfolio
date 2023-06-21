import React from 'react';
import Experience from './Experience';
import Education from './Education';
import Knowledges from './Knowledges';
import { experience_list } from '../Data/Experience';
import { education_list } from '../Data/Education';
import style from './resume.module.scss';

export default function Resume() {
  return (
    <>
      <section className={`bg-light py-5 ${style.resume}`}>
        <div className="container  px-5 ">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-gradient d-inline">Resume</span>
            </h1>
          </div>

          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              <Experience experiencedata={experience_list} />

              <Education education={education_list} />

              <div className="pb-5"></div>

              <Knowledges />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
