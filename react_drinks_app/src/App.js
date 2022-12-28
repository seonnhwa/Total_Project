// import { Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import Header from './components/Header';
import CoffeeCarousel from './components/Carousel/CoffeeCarousel';
import NonCarousel from './components/Carousel/NonCarousel';
import TeaCarousel from './components/Carousel/TeaCarousel';
import Modal from './components/Modal';
import ModalBody from './components/ModalBody';
import axios from 'axios';

const App = () => {
  const [drinks, setDrinks] = useState([]);
  const [nonCoffee, setNonCoffee] = useState([]);
  const [tea, setTea] = useState([]);
  // const [img, setImg] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.0.62:3001/drinks/Coffee').then((response) => {
      setDrinks(response.data.rows);
      // setImg(response.data.rows.img);
      // console.log('row2', response.data.rows.img);
    });
  }, []);

  useEffect(() => {
    axios.get('http://192.168.0.62:3001/drinks/Non-Coffee').then((response) => {
      setNonCoffee(response.data.rows);
      // setImg(response.data.rows.img);
      console.log('row2', response.data.rows.img);
    });
  }, []);

  useEffect(() => {
    axios.get('http://192.168.0.62:3001/drinks/Tea').then((response) => {
      setTea(response.data.rows);
      // setImg(response.data.rows.img);
      // console.log('row2', response.data.rows.img);
    });
  }, []);

  let options = {
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
  };

  return (
    <div>
      <ModalBody />
      <SectionsContainer {...options}>
        <Section className="section1 bg-amber-50">
          <Header />
          <Modal />
          <CoffeeCarousel drinks={drinks} />
        </Section>
        <Section className="section2 bg-sky-100">
          <Header />
          <Modal />
          <NonCarousel nonCoffee={nonCoffee} />
        </Section>
        <Section className="section3 bg-violet-50">
          <Header />
          <Modal />
          <TeaCarousel tea={tea} />
        </Section>
      </SectionsContainer>
    </div>
  );
};

export default App;
