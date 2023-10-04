import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SetHotelDetails } from "../features/HotelSlice";
import { useDispatch, useSelector } from "react-redux";
import HotelCard from "../Components/HotelCard";

const Hotel = () => {
  const { id } = useParams();
  const { hotelData } = useSelector((state) => state.HotelSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SetHotelDetails(id));
  }, []);
  return (
    <div style={{ width: "100vw" }}>
      <div className="row row-cols-1  mx-auto align-items-center px-5 my-4 w-50">
        <div className="col mb-2 ">
          <HotelCard {...hotelData[0]} />
        </div>
      </div>
    </div>
  );
};

export default Hotel;
