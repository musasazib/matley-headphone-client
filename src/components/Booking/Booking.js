import React, { useEffect, useState } from 'react';
import './Booking.css';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Booking = () => {

    const { user } = useAuth();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const { productId } = useParams();
    const [details, setDetails] = useState([]);
    console.log(details)
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                const book = data.find(td => td._id === productId);
                setDetails(book)

            });
        
        fetch('http://localhost:5000/moreProducts')
            .then(res => res.json())
            .then(data => {
                const book = data.find(td => td._id === productId);
                setDetails(book)

            });
    }, [productId, details])
    // const { placeName, price } = details;


    const onSubmit = (data) => {
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert('Booking successfully');
                    reset({ name: '', email: '', ProductName: '', price: '' });
                }
                console.log(result);
            });


    };



    return (
        <div>
            <h1 className="pt-5 text-center text-style">
                Please Confirm Order
            </h1>
            <div className="login-box w-50 m-auto mt-5">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className="mt-4">Name:</label>
                            <br />
                            <input
                                {...register("name")}
                                Name
                                defaultValue={user?.displayName}
                                className="p-2 mb-2"
                            />
                            <br />
                            <label>Email</label>
                            <br />
                            <input
                                {...register("email", { required: true })}
                                defaultValue={user?.email}
                                className="p-2 mb-2"
                            />
                            <br />
                            <label>Product</label>
                            <br />
                            <input
                                {...register("ProductName", { required: true })}
                                defaultValue={details?.ProductName}
                                className="p-2 mb-2"
                            />
                            <br />
                            <label>Price</label>
                            <br />
                            <input
                                {...register("price", { required: true })}
                                defaultValue={details?.price}
                                className="p-2 mb-2"
                            />
                            <br />
                            <label>Phone Number</label>
                            <br />
                            <input
                                {...register("phone", { required: true })}
                                // defaultValue={}
                                className="p-2 mb-2"
                                type="number"
                            />
                            <br />
                            <label>Address</label>
                            <br />
                            <input
                                {...register("address", { required: true })}
                                // defaultValue={}
                                className="p-2 mb-2"
                                type="text"
                            />
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" className="btn btn-style w-50 mb-5" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;