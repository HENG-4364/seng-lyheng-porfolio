import React from 'react';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import Title from '../components/Helmet';

export default function ContactPage() {
  return (
    <>
      <Title title={'Contact'} />
      <Layout>
        <Contact />
      </Layout>
    </>
  );
}
