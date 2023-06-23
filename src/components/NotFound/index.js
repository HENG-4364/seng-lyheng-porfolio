import { useEffect, useState } from 'react';
import AnimatedLetter from '../AnimatedLetter';
import React from 'react';
import style from './notfound.module.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <div className={`${style.background}`}>
      <div className={`container ${style.notfound_page}`}>
        <div className={`${style.text_zone}`}>
          <h1>   
            <AnimatedLetter
              letterClass={letterClass}
              strArray={'404 Not Found'.split('')}
              idx={16}
            />
          </h1>
          <div>
            <Link
              to={'/'}
              className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
            >
              {' '}
              Go back
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
