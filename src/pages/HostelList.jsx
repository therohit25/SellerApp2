import { useEffect, useState } from "react";
import HotelCard from "../Components/HotelCard";
import { hotelData } from "../data/HotelData";

const HostelList = () => {
  const [hotelDetails, setHotelDetails] = useState([]);
  const [filteredHotel, setFilteredHotel] = useState([]);
  const [searchParams, setSearchParams] = useState("New York");
  const [limit, setLimit] = useState(3);

  const FilterHotel = () => {
    const result1 = hotelData.filter((hotel) => hotel.City === searchParams);
    setHotelDetails(result1);
    setLimit(6);
    setFilteredHotel(result1.filter((hotel, ind) => ind < 6));
  };

  const LimitHotel = () => {
    if (hotelDetails.length > limit) {
      setLimit(limit + 3);
      setFilteredHotel(hotelDetails.filter((hotel, ind) => ind < limit + 3));
    }
  };

  useEffect(() => {
    FilterHotel();
  }, [searchParams]);

  return (
    <div
      style={{
        width: "100vw",
        background: "#f8f5f7",
      }}
      className="py-5"
    >
      <div className="row row-cols-md-1 row-cols-2 justify-content-center">
        <div className="col text-center w-25">
          <h3>Featured Listed Property</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            facilis ratione...
          </p>
        </div>
      </div>
      <div className="container px-5 my-3">
        <div className="d-flex w-100 justify-content-between flex-wrap">
          <div className="d-flex gap-2 flex-wrap">
            <button
              className={`btn btn-outline-primary rounded-5 ${
                searchParams === `New York` ? `active` : ``
              }`}
              onClick={(e) => setSearchParams(e.target.innerText)}
            >
              New York
            </button>
            <button
              className={`btn btn-outline-primary rounded-5 ${
                searchParams === `Mumbai` ? `active` : ``
              }`}
              style={{ outline: "#f5ebf6" }}
              onClick={(e) => setSearchParams(e.target.innerText)}
            >
              Mumbai
            </button>
            <button
              className={`btn btn-outline-primary rounded-5 ${
                searchParams === `Paris` ? `active` : ``
              }`}
              onClick={(e) => setSearchParams(e.target.innerText)}
            >
              Paris
            </button>
            <button
              className={`btn btn-outline-primary rounded-5 ${
                searchParams === `London` ? `active` : ``
              }`}
              onClick={(e) => setSearchParams(e.target.innerText)}
            >
              London
            </button>
          </div>
          <div>
            <button className="btn btn-outline-primary rounded-5">
              View All
            </button>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-lg-3 justify-content-center align-items-center container mx-auto my-4">
        {filteredHotel?.map((hotel, ind) => (
          <div className="col my-2" key={ind}>
            <HotelCard {...hotel} />
          </div>
        ))}
      </div>
      <div className=" d-flex justify-content-center my-2">
        {hotelDetails.length > limit ? (
          <button
            className="btn btn-outline-primary rounded-5 px-5 py-2"
            onClick={() => LimitHotel()}
          >
            Show More
          </button>
        ) : (
          <div className="alert-dismissible">
            <div
              className="alert alert-primary alert-dismissible fade show"
              role="alert"
            >
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
              <strong>All Results Are Shown</strong> You should check Other
              Filters.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HostelList;
