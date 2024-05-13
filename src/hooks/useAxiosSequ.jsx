import axios from "axios";
const axiosSequer = axios.create({
  baseURL: "https://hunger-food-chi.vercel.app",
  withCredentials: true,
});

const useAxiosSequ = () => {
  return axiosSequer;
};

export default useAxiosSequ;
