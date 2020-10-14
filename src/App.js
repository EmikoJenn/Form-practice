import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import UserTable from './components/UserTable/UserTable';
import AddUserForm from './components/AddUserForm/AddUserForm';
import EditUserForm from './components/EditUserForm/EditUserForm';

function App() {

  // Base de datos provicional
  const userData = [
    { name: 'Natalia', username: 'Drama Fox', id: uuidv4() },
    { name: 'Alicia', username: 'Zapato Gamer', id: uuidv4() },
    { name: 'Jennifer', username: 'FoxLady', id: uuidv4() },
    { name: 'Jonatan', username: 'Mano tiesa', id: uuidv4() }
  ]

  const [users, setUsers] = useState(userData)

  //Agregar datos
  const addUser = user => (
    setUsers([
      ...users, user
    ])
  )

  //Eliminar datos
  const delUser = id => (
    setUsers(users.filter(user => user.id !== id))
  )

  //Stage Editar Usuarios
  const [editing, setEditing] = useState(false)

  //Usuario Seleccionado
  const [currentUser, setCurrentUser] = useState({
    name: '', username: '', id: null
  })

  const editUser = (user) => (
    setEditing(true),
    setCurrentUser({
      name: user.name, username: user.username, id: user.id
    })
  )

  //Edicion de Usuario
  const updateUser = (id, updatedUser) => (
    setEditing(false),
    setUsers(users.map(user => user.id === id ? updatedUser : user))
  )

  //Cancelar Modificacion
  const setAddUser = (value) => (
    setEditing(value)
  )

  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD APP</h1>
      <hr/>
      <div className="row">
        <div className="col-6">
          {
            !editing ?
              <Fragment>
                <h2 className="text-center">Add users</h2>
                <AddUserForm data={addUser} />
              </Fragment> :
              <Fragment>
                <h2 className="text-center">Modify user</h2>
                <EditUserForm data={currentUser} cancel={setAddUser} update={updateUser} />
              </Fragment>
          }
        </div>
        <div className="col-6">
          <h2 className="text-center">View users</h2>
          <UserTable data={users} delete={delUser} edit={editUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
