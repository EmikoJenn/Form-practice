import React from 'react';
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {

    const { register, handleSubmit, errors, setValue } = useForm();

    setValue('name', props.data.name)
    setValue('username', props.data.username)

    const send = (data) => (
        data.id = props.data.id,
        props.update(props.data.id, data)
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
                    defaultValue={props.data.name}
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
                    defaultValue={props.data.username}
                    ref={
                        register({
                            required: {value: true, message: 'Name is required'},
                            maxLength: {value: 20, message: 'Add a name with less than 20 characters'}
                        })
                    }
                />
                <div className="font-weight-light text-danger">{errors?.username?.message}</div>                   
            </div>
            <div className="btn-group">
                <button className="btn btn-outline-primary">Save User</button>
                <button className="btn btn-primary" onClick={() => props.cancel(false)}>Cancel</button>
            </div>
        </form>
    );
}
 
export default EditUserForm;