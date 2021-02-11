import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carrousel from "../components/Carrousel";
import CarrouselItem from "../components/CarrouselItem";
import Footer from "../components/Footer";

import useInitialState from "../hooks/useInitialState";

import "../assets/styles/App.scss";

const API = "http://localhost:3000/initalState";
const App = () => {
  const initialState = useInitialState(API);
  return (
    <div className="App">
      <Header />
      <Search />
      {initialState.mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carrousel>
            {initialState.mylist.map((video) => (
              <CarrouselItem key={video.id} {...video} />
            ))}
          </Carrousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carrousel>
          {initialState.trends.map((video) => (
            <CarrouselItem key={video.id} {...video} />
          ))}
        </Carrousel>
      </Categories>

      <Categories title="Originales de Platzi Video">
        <Carrousel>
          {initialState.originals.map((video) => (
            <CarrouselItem key={video.id} {...video} />
          ))}
        </Carrousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
