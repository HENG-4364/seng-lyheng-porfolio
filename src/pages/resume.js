import React from 'react';
import Layout from '../components/Layout';
import Resume from '../components/Resume';
import Title from '../components/Helmet';

export default function ResumePage() {
  return (
    <>
      <Title title={"Resume"}/>
      <Layout>
        <Resume />
      </Layout>
    </>
  );
}
