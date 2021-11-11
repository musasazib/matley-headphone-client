import React from 'react';
import './AddProduct.css'
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch("http://localhost:5000/moreProducts", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res =>res.json())
            .then(data=>{
                if (data?.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-product">
            <h2 className="m-5 text-style">Added Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("ProductName", { required: true, maxLength: 20 })} placeholder="Product Name" />
                <textarea {...register("about")} placeholder="Description" />

                <input {...register("picture")} placeholder="Image url" />
                <input {...register("price")} placeholder="price" />
                <input className="btn-style" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;