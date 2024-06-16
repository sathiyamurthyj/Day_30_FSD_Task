import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {UserContext} from "../UserContext";

// Home component contains table of Users and action items like update/delete
// Link to Create User is provided to add new user
function Home() {
  let history = useNavigate();

  let {users, updateEdit, deleteUser} = useContext(UserContext);
  console.log(users)

  function deleteHandler(id) {
    deleteUser(id);
    history("/");
  }

  return (
    <div style={{margin:"5rem"}}>
      <table className="table table-striped bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <div className="d-flex">
                  <Link to={`/edit`}>
                    <button type="button" className = "btn btn-info" onClick={()=>updateEdit(user)}>Update</button>
                  </Link>
                  <button type="button" className = "btn btn-danger ms-2" onClick={()=>deleteHandler(user.id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}          
        </tbody>
      </table>

      <Link to="/create" className="d-grid gap-2">
        <button className="btn btn-large btn-warning fs-4">Create User</button>
      </Link>
    </div>
  );
  }
  
  export default Home;