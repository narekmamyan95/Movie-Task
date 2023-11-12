import React, { useEffect } from "react";
import generalImg from "../images/FeaturedCoverImage.png";
import movieTitle from "../images/FeaturedTitleImage.png";
import playIcon from "../btnStyle/play.png";
import List from "./List";
import { useSelector } from "react-redux";
import Movie from "./Movie";
import { useState } from "react";

const General = () => {
  const [currentMovie, setCurrentMovie] = useState(
    JSON.parse(sessionStorage.getItem("movie"))
  );
  const isSelected = useSelector((store) => store.common.currentMovie);
  useEffect(() => {
    setCurrentMovie(JSON.parse(sessionStorage.getItem("movie")));
  }, [isSelected]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        overflow: "hidden",
      }}
    >
      {currentMovie ? (
        <Movie />
      ) : (
        <>
          <img
            style={{
              width: "100%",
              height: "550px",
            }}
            src={generalImg}
            alt="Img"
          />

          <span
            style={{
              color: "#858688",
              position: "fixed",
              left: "205px",
              top: "30px",
              fontWeight: "bold",
              letterSpacing: "2px",
              fontSize: "18px",
              fontFamily: "Tajawal",
            }}
          >
            MOVIE
          </span>
          <img
            src={movieTitle}
            alt="Movie Title"
            style={{
              position: "fixed",
              left: "200px",
              top: "50px",
              width: "500px",
            }}
          />
          <div
            style={{
              position: "fixed",
              left: "205px",
              top: "150px",
              fontFamily: "Tajawal",
            }}
          >
            <span
              style={{
                color: "#F1F1F1",
                fontFamily: "Tajawal",
                fontWeight: "bold",
              }}
            >
              2021
            </span>
            <span
              style={{
                color: "#F1F1F1",
                marginLeft: "10px",
                fontFamily: "Tajawal",
                fontWeight: "bold",
              }}
            >
              18+
            </span>
            <span
              style={{
                color: "#F1F1F1",
                marginLeft: "10px",
                fontFamily: "Tajawal",
                fontWeight: "bold",
              }}
            >
              1h 48m
            </span>
            <br />
            <p
              style={{
                color: "#F1F1F1",
                width: "500px",
                marginTop: "10px",
                lineHeight: "20px",
                textAlign: "left",
                fontStyle: "normal",
                fontSize: "20px",
                fontWeight: "normal",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit Autem sit
              minus vero blanditiis commodi temporibus animi recusandae beatae
              estmolestias dignissimos voluptatum quibusdam architecto
              explicaboip
            </p>
            <button
              style={{
                width: "200px",
                height: "50px",
                borderRadius: "45px",
                fontWeight: "bold",
                marginTop: "50px",
                cursor: "pointer",
              }}
            >
              <img
                src={playIcon}
                alt="Play Icon"
                style={{
                  width: "10px",
                  marginRight: "5px",
                }}
              />{" "}
              Play
            </button>
            <button
              style={{
                width: "200px",
                height: "50px",
                borderRadius: "45px",
                fontWeight: "bold",
                backgroundColor: "blue",
                border: "none",
                color: "white",
                marginLeft: "15px",
                cursor: "pointer",
              }}
            >
              More Info
            </button>
          </div>
        </>
      )}
      <List />
    </div>
  );
};

export default General;
