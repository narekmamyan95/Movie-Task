import React from "react";
import Slider from "react-slick";
import data from "../data/data.json";
import imageOne from "../images/https_specials-1.png";
import imageTwo from "../images/https_specials-2.png";
import imageThree from "../images/https_specials-3.png";
import imageFour from "../images/https_specials-4.png";
import imageFive from "../images/https_specials-5.png";
import imageSix from "../images/https_specials-6.png";
import imageSeven from "../images/https_specials-7.png";
import imageEight from "../images/https_specials-8.png";
import "slick-carousel/slick/slick.css";
import { useDispatch } from "react-redux";
import { setCurrentMovie } from "../features/common/slice";
import { setISClicked } from "../features/common/slice";

const images = [
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
  imageSix,
  imageSeven,
  imageEight,
];

const List = () => {
  const dispatch = useDispatch();
  const settings = {
    slidesToShow: 8,
    slidesToScroll: 1,
    infinite: true,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
    dots: false,
  };

  const addCurentMovieHandler = (movie) => {
    dispatch(setCurrentMovie(movie));
    dispatch(setISClicked({ payload: true }));
    sessionStorage.setItem("movie", JSON.stringify(movie));
  };

  return (
    <Slider {...settings}>
      {data.TendingNow?.map((movie, index) => (
        <div
          key={index}
          style={{ cursor: "pointer" }}
          onClick={() => addCurentMovieHandler(movie)}
        >
          <img
            src={images[index % images.length]}
            alt="img"
            style={{
              height: "160px",
              width: "160px",
              cursor: "pointer",
            }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default List;
