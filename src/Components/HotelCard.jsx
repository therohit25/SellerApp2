import React from "react";
import { NavLink } from "react-router-dom";

const HotelCard = ({ location, street, Img, Category, Price, id }) => {
  return (
    <>
      <NavLink
        to={`/Hotel/${id}`}
        className="card h-100 rounded-5 "
        style={{ background: "#fffef9", border: "none" }}
      >
        <div
          id="carouselId"
          className="carousel slide card-img-top  position-relative"
          data-bs-ride="carousel"
        >
          <ul className="carousel-indicators ">
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to="0"
              className="active "
              aria-current="true"
              aria-label="First slide"
              style={{
                listStyle: "none",
                width: "9px",
                height: "9px",
                borderRadius: "50%",
              }}
            ></li>
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to="1"
              aria-label="Second slide"
              style={{
                listStyle: "none",
                width: "9px",
                height: "9px",
                borderRadius: "50%",
              }}
            ></li>
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to="2"
              aria-label="Third slide"
              style={{
                listStyle: "none",
                width: "9px",
                height: "9px",
                borderRadius: "50%",
              }}
            ></li>
          </ul>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active ">
              <img
                src={Img}
                className="w-100 d-block p-2 rounded-5"
                alt="First slide"
                style={{ aspectRatio: 3 / 2 }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={Img}
                className="w-100 d-block p-2 rounded-5"
                alt="Second slide"
                style={{ aspectRatio: 3 / 2 }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={Img}
                className="w-100 d-block p-2 rounded-5"
                alt="Third slide"
                style={{ aspectRatio: 3 / 2 }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div
          className="d-flex position-absolute justify-content-between w-100 px-4"
          style={{
            top: 14,
          }}
        >
          <button
            className="btn rounded-5  px-3 py-2"
            style={{ background: "#fffef9" }}
          >
            For Rent
          </button>
          <button
            className="btn rounded-5  px-3 py-2"
            style={{ background: "#fffef9" }}
          >
            💗
          </button>
        </div>
        <div className="card-body px-4 d-flex flex-column gap-2">
          <div className="card-text">{location}</div>

          <h4 className="card-title">{street}</h4>
          <div className="row row-cols-md-4">
            <div className="col d-flex flex-column">
              <i className="fa-solid fa-gauge"></i> <span>3 room</span>
            </div>
            <div className="col d-flex flex-column">
              <i className="fa-solid fa-gauge"></i> <span>4 Bed</span>
            </div>
            <div className="col d-flex flex-column">
              <i className="fa-solid fa-gauge"></i> <span>1 Bath</span>
            </div>
            <div className="col d-flex flex-column">
              <i className="fa-solid fa-gauge"></i> <span>732 sft</span>
            </div>
          </div>
        </div>

        <div
          className="px-3 py-3"
          style={{ borderTop: "dotted rgb(226 199 226)" }}
        >
          <div className="container">
            <div className="d-flex justify-content-between">
              <div>
                <i className="fa-brands fa-dollar pl-2"></i>
                <span className="fw-bold">{Price}</span>
                <small>/month</small>
              </div>

              <button className="btn btn-primary rounded-5">Rent Now</button>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default HotelCard;
