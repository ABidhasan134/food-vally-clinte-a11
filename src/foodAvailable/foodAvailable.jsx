import React, { useEffect, useState } from 'react';
import useAxiosSequ from '../hooks/useAxiosSequ';
import FoodAvailableCards from './foodAvailableCards';
import { Helmet } from 'react-helmet';


const FoodAvailable = () => {
    const [foodhave, setFoodhave] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosSequer = useAxiosSequ();
// data for how have available statuses
    useEffect(() => {
        axiosSequer.get('/availablefood', { params: { status: 'available' } })
            .then(res => {
                setFoodhave(res.data);
                setLoading(false);
                 
            })
            .catch(error => {
                console.error('Error fetching available food:', error);
                setLoading(false);
            });
    }, [axiosSequer]);

    if (loading) {
        return <div><span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span></div>;
    }
    // searching api get req from back end
    const handalSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value;

        axiosSequer.get('/searchfood', { params: { Food_Name: search } })
            .then(res => {
                setFoodhave(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error searching food:', error);
                setLoading(false);
            });
    };

    return (
        <div className='my-2'>
            <Helmet>
                <title>Food Vally | Available food</title>
            </Helmet>
            
            <div>
                <form onSubmit={handalSearch}>
                <input type="text" name='search' placeholder="Enter Food name" className="input input-bordered w-full max-w-xs" />
                <button className='btn'>Search</button>
                </form>
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
