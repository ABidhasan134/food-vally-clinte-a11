import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../pages/context/AuthProvider";
import useAxiosSequ from "../hooks/useAxiosSequ";
import UpdateManage from "./updateManage";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const ManageFood = () => {
  const [myFood, setMyFood] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  // console.log(user.email);
  const axiosSequer = useAxiosSequ();
//   data get api
  useEffect(() => {
    axiosSequer
      .get("/managefood", { params: { email: `${user.email}` } })
      .then((res) => {
        setMyFood(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching available food:", error);
        setLoading(false);
      });
  }, [axiosSequer]);
// wait for data
  if (loading) {
    return (
      <div>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
//   delet functionality
  const handeldelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You to delete  this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSequer.delete(`/managefood/${_id}`).then((res) => {
          // console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Deleted your Pottery",
              icon: "success",
            });

            const remanning = myFood.filter((item) => item._id !== _id);
            setMyFood(remanning);
          }
        });
      }
    });
  };
  // console.log(myFood)
  return (
    <div className="overflow-x-auto">
      <Helmet>
        <title>Food vally | Manage Food</title>
      </Helmet>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <div></div>
              </label>
            </th>
            <th>Name</th>
            <th>Expired Date & Time</th>
            <th>Location</th>
            <th>Food Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {myFood.map((food) => {
            return (
              <UpdateManage
                food={food}
                key={food._id}
                handeldelete={handeldelete}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageFood;
