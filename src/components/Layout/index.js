import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { menu_list } from "../Data/Menu";

export default function Layout(props) {
  return (
    <>
      <Navbar menu={menu_list} />
      {props.children}
      <Footer />
    </>
  );
}
