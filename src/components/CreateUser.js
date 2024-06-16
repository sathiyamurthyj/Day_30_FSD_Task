import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../UserContext";

// Create User component contains Create User Form and its submit handlers
// Link to Home page is also provided
function CreateUser() {
  const {users,addUser} = useContext(UserContext);

  const [name,setName] = useState("");
  const [username,setUserName] = useState("");
  const [email,setEmail] = useState("");


  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      username,
      email,
      id: users.length+1
    };
    addUser(newUser);
    history("/"); 

  }

  return (
    <>
      <div className="container bg-primary-subtle p-2 rounded mt-4">
        <form onSubmit={handleSubmit} className="d-grid gap-2" style={{margin: "5rem"}}>
          <div className="mb-3 row">
            <label htmlFor="name" className="col-sm-2 col-form-label">Name:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="username" className="col-sm-2 col-form-label">User Name:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Enter User Name" />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Id" />
            </div>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary fs-4">Add User</button>
          </div>
          <Link className="d-grid gap-2" to="/">
            <button type="button" className="btn btn-warning fs-4">Home</button>
          </Link>
        </form>
      </div>
    </>
  );
}
  
  export default CreateUser;