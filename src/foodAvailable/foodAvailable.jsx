import React, { useEffect, useState } from 'react';
import useAxiosSequ from '../hooks/useAxiosSequ';
import FoodAvailableCards from './foodAvailableCards';

const FoodAvailable = () => {
    const [foodhave, setFoodhave] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosSequer = useAxiosSequ();

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

    return (
        <div className="mx-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 relative sm:-top-12 md:top-0 lg:top-0">
            {foodhave.map((food, index) => (
                <FoodAvailableCards key={index} foodhave={food} />
            ))}
        </div>
    );
};

export default FoodAvailable;
