import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Movie = () => {
  const [currentMovie, setCurrentMovie] = useState(
    JSON.parse(sessionStorage.getItem("movie"))
  );
  const isSelected = useSelector((store) => store.common.currentMovie);
  const [videoPlay, setVideoPlay] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setCurrentMovie(JSON.parse(sessionStorage.getItem("movie")));
    setVideoPlay(true);
    const timeoutId = setTimeout(() => {
      if (videoRef.current && videoPlay) {
        videoRef.current.play();
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [isSelected]);

  return (
    <div
      style={{
        width: "100%",
        height: "550px",
      }}
    >
      <div
        style={{
          width: "300px",
          height: "400px",
          position: "fixed",
          left: "20%",
          top: "50px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: "30px",
            fontFamily: "Tajawal",
            fontWeight: "bold",
            marginTop: "50px",
          }}
        >
          {currentMovie?.Title}
        </span>
        <span
          style={{
            color: "white",
            fontSize: "25px",
            fontFamily: "Tajawal",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          {currentMovie?.ReleaseYear}
        </span>
        <span
          style={{
            color: "white",
            fontSize: "25px",
            fontFamily: "Tajawal",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          {currentMovie?.MpaRating}
        </span>
        <span
          style={{
            color: "white",
            fontSize: "25px",
            fontFamily: "Tajawal",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          {currentMovie?.Category}
        </span>
      </div>
      <video
        ref={videoRef}
        style={{
          height: "400px",
          position: "fixed",
          left: "50%",
          top: "50px",
        }}
        src={currentMovie?.VideoUrl}
      ></video>
    </div>
  );
};

export default Movie;
