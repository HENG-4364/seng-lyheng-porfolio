import React from 'react';
import Professional from './ProfessionalSkills';
import Languages from './Languages';
import { pro_skill_list } from '../../Data/ProfesstionalSkill';
import { languages_list } from '../../Data/Language';

export default function Knowledges() {
  return (
    <>
      <section>
        <div className="card shadow border-0 rounded-4 mb-5">
          <div className="card-body p-5">
            <Professional proskill={pro_skill_list} />
            <Languages languages={languages_list} />
          </div>
        </div>
      </section>
    </>
  );
}
