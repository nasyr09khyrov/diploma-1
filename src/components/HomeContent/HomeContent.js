import "./HomeContent.css";
import React from "react";
import { NavLink } from "react-router-dom";

export default function HomeContent() {
  return (
    <div className="Home">
      <div className="video">
        <video autoPlay muted loop>
        </video>

        <div className="header-text">
          <h1 className="header-title">Welcome to our store</h1>
          <p className="header-subtitle">Let your home feel the style</p>
        </div>
      </div>

      <div className="box-2">
        <h1>the ski site was written "Nasyr"</h1>
        <p>
          We are your reliable partner. In our
          store you will find a wide selection of high-quality skis of all
          sizes.
        </p>
        <p>
          At our ski gear shop, we prioritize customer satisfaction above all else. We strive to create a welcoming and friendly atmosphere where skiers of all ages and abilities can find everything they need to pursue their passion for the sport. Whether you're a first-time skier or a seasoned pro, we're here to fulfill your skiing dreams and make your visit to our store an unforgettable one.

        </p>
      </div>
      <div className="product-Home">
        <NavLink
          className="product-a cush-1"
          to="/products/willow-ii-slipcovered-bench-queen-sleeper-sofa"
        >
        </NavLink>
      </div>
    </div>
  );
}