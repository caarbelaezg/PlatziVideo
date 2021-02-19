import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Search from "../components/Search";
import Carrousel from "../components/Carrousel";
import Categories from "../components/Categories";
import CarrouselItem from "../components/CarrouselItem";

import "../assets/styles/App.scss";

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Search />
      {myList.length > 0 && (
        <Categories title="Mi lista">
          <Carrousel>
            {myList.map((video) => (
              <CarrouselItem key={video.id} {...video} isList />
            ))}
          </Carrousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carrousel>
          {trends.map((video) => (
            <CarrouselItem key={video.id} {...video} />
          ))}
        </Carrousel>
      </Categories>

      <Categories title="Originales de Platzi Video">
        <Carrousel>
          {originals.map((video) => (
            <CarrouselItem key={video.id} {...video} />
          ))}
        </Carrousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
