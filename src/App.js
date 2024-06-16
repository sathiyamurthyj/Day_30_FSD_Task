import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import { UserProvider } from './UserContext';


function App() {
  // App contains routes to Home,Create User and Edit User components
  return (
    <UserProvider>
      <div>
        <h2 className='text-center mt-4'>CRUD APP USING AXIOS AND JSON PLACEHOLDER API</h2>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<CreateUser />} />
            <Route path='/edit' element={<EditUser />} />
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
