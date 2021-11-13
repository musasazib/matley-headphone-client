import React from 'react';
import './Review.css';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        fetch("https://sleepy-garden-68669.herokuapp.com/reviews", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Added successfully');
                    reset({ name: '', review: '', rating: '' });
                }
            })
    }
    return (
        <div className="add-product">
            <h2 className="m-5 header-style">Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="mt-4">Name:</label>
                <input
                    {...register("name")}
                    Name
                    defaultValue={user?.displayName}
                    className="p-2 mb-2"
                />
                <label>Review</label>
                <textarea
                    {...register("review", { required: true })}
                    // defaultValue={}
                    className="p-2 mb-2"
                    type="text"
                    placeholder="Write your comments about our website"
                />

                <label>Rating</label>
                <input
                    {...register("rating", { required: true })}
                    // defaultValue={}
                    className="p-2 mb-2"
                    type="number"
                    placeholder="Rating our website (Out of 5)"
                />
                <input className="btn-style" type="submit" />
            </form>
        </div>
    );
};

export default Review;