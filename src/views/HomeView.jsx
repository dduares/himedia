import React from 'react';
import Skip from '../components/Skip';
import Header from '../components/Header';
import Main from '../components/Main';
import Intro from '../components/Intro';
import Skill from '../components/Skill';
import Footer from '../components/Footer';
import Site from '../components/Site';
import Contact from '../components/Contact';
import Port from '../components/Port';




const HomeView = () => {
  return (
    <>
        <Skip />
        <Header />
        <Main>
            <Intro />
            <Skill />
            <Site />
            <Port />
            <Contact />
        </Main>
        <Footer/>
    </>
  )
}

export default HomeView
