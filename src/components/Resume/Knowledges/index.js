import React, { useEffect } from 'react';
import Professional from './ProfessionalSkills';
import Languages from './Languages';
import { pro_skill_list } from '../../Data/ProfesstionalSkill';
import { languages_list } from '../../Data/Language';
import AOS from 'aos';

export default function Knowledges() {
  useEffect(()=>{
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
      delay: 100,
    });
  }, []);
  return (
    <>
      <section>
        <div className="card shadow border-0 rounded-4 mb-5" data-aos="zoom-in-right">
          <div className="card-body p-5" >
            <Professional proskill={pro_skill_list} />
            <Languages languages={languages_list} />
          </div>
        </div>
      </section>
    </>
  );
}
