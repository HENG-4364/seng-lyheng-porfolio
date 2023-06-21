import React from 'react';
import Layout from '../components/Layout';
import Project from '../components/Project';
import Title from '../components/Helmet';

export default function ProjectPage() {
  return (
    <>
      <Title title={"Projects"} />
      <Layout>
        <Project />
      </Layout>
    </>
  );
}
