import React from 'react';
import UserTable from './components/UserTable/UserTable';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD APP</h1>
      <hr/>
      <div className="row">
        <div className="col-6">
          <h2 className="text-center">Add users</h2>
        </div>
        <div className="col-6">
          <h2 className="text-center">View users</h2>
          <UserTable />
        </div>
      </div>
    </div>
  );
}

export default App;
