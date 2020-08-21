import React from "react";
import "../assets/styles/components/CarouselItem.scss";

const CarouselItem = () => (
  <div className="carousel-item">
    <img
      className="carousel-item__img"
      src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt=""
    />
    <div className="carousel-item__details">
      <div>
        <img
          className="carousel-item__details--img"
          src="./assets/play-icon.png"
          alt="Play"
        />
        <img
          className="carousel-item__details--img"
          src="./assets/plus-icon.png"
          alt="Plus"
        />
      </div>
      <p className="carousel-item__details--title">Título descriptivo</p>
      <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
    </div>
  </div>
);

export default CarouselItem;
