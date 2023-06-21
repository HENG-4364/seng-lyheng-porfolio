import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import About from '../components/About';
import Title from '../components/Helmet';

export default function HomePage() {
  return (
    <>
      <Title title={"Home"}/>
      <Layout>
        <Header />
        <About />
      </Layout>
    </>
  );
}
