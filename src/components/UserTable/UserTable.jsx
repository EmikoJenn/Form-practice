import React from 'react';

const UserTable = () => {
    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name Data</td>
                    <td>Username Data</td>
                    <td>
                        <button className="btn btn-outline-secondary mr-3">Edit</button>
                        <button className="btn btn-outline-secondary">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
 
export default UserTable;