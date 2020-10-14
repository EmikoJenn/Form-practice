import React from 'react';

const UserTable = (props) => {
    return (
        <table className="table table-striped table-hover" >
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.length > 0 ?
                    props.data.map(user => (
                        <tr key={user.id}>
                            <td className="py-3">{user.name}</td>
                            <td className="py-3">{user.username}</td>
                            <td>
                                <button className="btn btn-outline-secondary mr-3" onClick={() => props.edit(user)}>Edit</button>
                                <button className="btn btn-outline-secondary" onClick={() => props.delete(user.id)}> Delete </button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={3} className="muted">No users</td>
                        </tr>
                    )                    
                }
            </tbody>
        </table>
    );
}
 
export default UserTable;