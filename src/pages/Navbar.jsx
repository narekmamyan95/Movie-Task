import React, { useState } from "react";
import { items } from "../data/navbarItems";
import "../App.css";

const Navbar = () => {
  const [open, setIsopen] = useState(false);
  const [drawer, setDrawer] = useState(150);

  const handleMouseEnter = () => {
    setIsopen(true);
    setDrawer(250);
  };

  const handleMouseLeave = () => {
    setIsopen(false);
    setDrawer(150);
  };

  return (
    <div
      style={{
        width: drawer,
        position: "fixed",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        cursor: "pointer",
        zIndex: open ? "7777" : "none",
        background: open
          ? "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9) 5px)"
          : "black",
        boxShadow: open ? "0 0 400px 400px rgba(1, 0, 0, 0.9)" : "none",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {items.map((item) => (
        <div key={item.id} style={{ display: "flex", alignItems: "center" }}>
          <img
            src={item.icon}
            alt={item.title}
            style={{ marginLeft: "50px", marginTop: "50px", width: "20px" }}
          />
          {open && (
            <p
              style={{
                color: "#F1F1F1",
                position: "relative",
                top: "40%",
                left: "35px",
                fontSize: "20px",
                fontWeight: "bold",
                fontStyle: "normal",
                fontFamily: "'Tajawal', sans-serif",
              }}
            >
              {item.title}
            </p>
          )}
        </div>
      ))}
      {open && (
        <div
          style={{
            marginTop: "130px",
          }}
        >
          <p
            style={{
              color: "#858688",
              fontSize: "15px",
              fontWeight: "bold",
              letterSpacing: "2px",
              marginLeft: "50px",
              marginTop: "50px",
              fontFamily: "'Tajawal', sans-serif",
            }}
          >
            Language
          </p>
          <p
            style={{
              color: "#858688",
              fontSize: "15px",
              fontWeight: "bold",
              letterSpacing: "2px",
              marginLeft: "50px",
              marginTop: "15px",
              fontFamily: "'Tajawal', sans-serif",
            }}
          >
            get help
          </p>
          <p
            style={{
              color: "#858688",
              fontSize: "15px",
              fontWeight: "bold",
              letterSpacing: "2px",
              marginLeft: "50px",
              marginTop: "15px",
              fontFamily: "'Tajawal', sans-serif",
            }}
          >
            Exit
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
