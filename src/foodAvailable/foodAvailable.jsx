import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { IoChevronDown } from "react-icons/io5";
import logo from "../../public/img/logo.gif";
import useAxiosSequ from "../hooks/useAxiosSequ";
import FoodAvailableCards from "./foodAvailableCards";

const FoodAvailable = () => {
  const [foodhave, setFoodhave] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSequer = useAxiosSequ();

  // data for how have available statuses
  useEffect(() => {
    axiosSequer
      .get("/availablefood", { params: { status: "available" } })
      .then((res) => {
        setFoodhave(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching available food:", error);
        setLoading(false);
      });
  }, [axiosSequer]);

  if (loading) {
    return <img src={logo} alt="" />;
  }
  // searching api get req from back end
  const handalSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;

    axiosSequer
      .get("/searchfood", {
        params: { Food_Name: search, status: "available" },
      })
      .then((res) => {
        setFoodhave(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error searching food:", error);
        setLoading(false);
      });
  };
  //
  const handelShort = (type) => {
    if (type === "all") {
      // Reset foodhave to its original value
      setFoodhave([...foodhave]);
    } else if (type === "FoodExpire") {
      console.log("Food Expire");
      const sortedFood = [...foodhave].sort((a, b) => {
        // Sorting by Expired_Date in ascending order
        return new Date(a.Expired_Date) - new Date(b.Expired_Date);
      });
      setFoodhave(sortedFood);
    }
  };

  return (
    <div className="my-2">
      <Helmet>
        <title>Food Vally | Available food</title>
      </Helmet>

      <div className="flex justify-evenly">
        <form onSubmit={handalSearch} className="flex gap-1">
          <input
            type="text"
            name="search"
            placeholder="Enter Food name"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn bg-sky-300 hover:bg-sky-500 font-semibold">
            Search
          </button>
        </form>
        <div>
          <details className="dropdown">
            <summary className="m-1 btn bg-green-500 hover:bg-green-600">
              sort by<IoChevronDown></IoChevronDown>
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <a onClick={() => handelShort("all")}>All</a>
              </li>
              <li>
                <a onClick={() => handelShort("FoodExpire")}>Food Expire</a>
              </li>
            </ul>
          </details>
        </div>
      </div>
      <div className="mx-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 relative sm:-top-12 md:top-0 lg:top-0">
        {foodhave.map((food, index) => (
          <FoodAvailableCards key={index} foodhave={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodAvailable;
