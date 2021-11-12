
// import React from "react";
// import { useForm } from "react-hook-form";
// const MakeAdmin = () => {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data) => {
//     fetch("http://localhost:5000/makeAdmin", {
//       method: "PUT",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((result) => console.log(result));
//     console.log(data);
//   };
//   return (
//     <div>
//       <h1>make admin</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input
//           className="input-field"
//           name="email"
//           placeholder="Email"
//           type="email"
//           {...register("email", { required: true })}
//         />
//         <br />

//         <input
//           className="submit-btn btn btn-danger mt-3"
//           type="submit"
//           value="make as Admin"
//         />
//       </form>
//     </div>
//   );
// };

// export default MakeAdmin;


import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [adminSuccess, setAdminSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setAdminSuccess(true);
                }
            })
        e.preventDefault()
    }
    return (
        <div className="login-box w-50 m-auto mt-5">
            <div className="event-box border border justify-content-center align-items-center">
                <h2>Make an Admin</h2>
                <br />
                <Form onSubmit={handleAdminSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            onBlur={handleOnBlur}
                            name="email"
                            type="email"
                            placeholder="Enter email" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                {adminSuccess && <Alert variant="success"> Made admin successfully </Alert>}
            </div>
        </div>
    );
};

export default MakeAdmin;