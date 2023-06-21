import React from 'react';
import { Helmet } from 'react-helmet';
export default function Title(props) {
  return (
    <>
      <Helmet>
        <title>SENGLYHENG | {props.title}</title>
      </Helmet>
    </>
  );
}
