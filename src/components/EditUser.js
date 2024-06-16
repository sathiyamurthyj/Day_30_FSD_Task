import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link, useNavigate } from "react-router-dom";

// Edit User component contains Edit User Form and its submit handlers
// Link to Home page is also provided
function EditUser() {
  const {editUser, setEditUser, updateUser} = useContext(UserContext);
  let history = useNavigate();

  const handleInput = (e) => {
    setEditUser({...editUser,[e.target.name]:e.target.value});
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser();
    history("/");
  }

  return (
    <>
      <div className="container bg-info-subtle p-4 rounded mt-4">
        <form onSubmit={handleSubmit} className="d-grid gap-2" style={{margin: "5rem"}}>
          <div className="mb-3 row">
            <label htmlFor="name" className="col-sm-2 col-form-label">Name:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="name" value={editUser.name} onChange={handleInput} name="name" placeholder="Update Name" />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="username" className="col-form-label col-sm-2">User Name:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="username" value={editUser.username} onChange={handleInput} name="username" placeholder="Update User Name" />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="email" className="col-form-label col-sm-2">Email:</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="email" value={editUser.email} onChange={handleInput} name="email" placeholder="Update Email Id" />
            </div>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-info fs-4">Update User</button>
          </div>
          <Link className="d-grid gap-2" to="/">
            <button type="button" className="btn btn-warning fs-4">Home</button>
          </Link>
        </form>
      </div>
    </>
  );
}
  
export default EditUser;