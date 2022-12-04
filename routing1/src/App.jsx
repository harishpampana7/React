import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import {Home} from "./components/Home";
import { About } from "./components/About";
import {Contact} from "./components/Contact";
import { Users } from "./components/User";
import {UserDetails} from "./components/UserDetails";
import { Products } from "./components/Product";
import { Login } from "./components/Login";
import { PrivateRoute } from "./components/PrivateRout";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/about" element={<About />}></Route>

        <Route path="/contact" element={<Contact />}></Route>

        <Route path="/users" 
               element={
                <PrivateRoute>
                  <Users />
                </PrivateRoute>
              }>
        </Route>

        <Route 
            path="/users/:userid" 
            element={
                    <PrivateRoute>
                      <UserDetails />
                    </PrivateRoute>
                    }
        ></Route>

        <Route path="/users/admin" element={ <div>Admin page</div>}></Route>

        <Route path="/product/:id" element={<Products />}></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route path="*" element={<div>404 Page not found</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
