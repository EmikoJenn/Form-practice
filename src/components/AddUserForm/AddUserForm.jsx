import React from 'react';
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';

const AddUserForm = (props) => {

    const { register, handleSubmit, errors } = useForm();

    const send = (data, event) => (
        data.id = uuidv4(),
        props.data(data),
        event.target.reset()
    )

    return (
        <form onSubmit={handleSubmit(send)}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name"
                    placeholder="Enter name" 
                    ref={
                        register({
                            required: {value: true, message: 'Name is required'},
                            maxLength: {value: 20, message: 'Add a name with less than 20 characters'}
                        })
                    }
                />
                <div className="font-weight-light text-danger">{errors?.name?.message}</div>                
            </div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    type="text" 
                    className="form-control" 
                    id="username" 
                    name="username"
                    placeholder="user" 
                    ref={
                        register({
                            required: {value: true, message: 'Name is required'},
                            maxLength: {value: 20, message: 'Add a name with less than 20 characters'}
                        })
                    }
                />
                <div className="font-weight-light text-danger">{errors?.username?.message}</div>                   
            </div>
            <button className="btn btn-outline-primary">Add New User</button>
        </form>
    );
}
 
export default AddUserForm;