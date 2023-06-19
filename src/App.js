import React from "react";
import NavBar from "./component/NavBar";
import CreateBlog from "./component/CreateBlog";
import ManageBlog from "./component/ManageBlog"
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"; 
import Home from "./component/Home";
import EditBlog from "./component/EditBlog"

function App() {
  return <>
  <BrowserRouter>
  <div>
  <NavBar/>
  </div>  
  <div className="container-fluid">
    <Routes>
      <Route path="/create" element={<CreateBlog/>}/>
      <Route path="/manage" element={<ManageBlog/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/edit/:id" element={<EditBlog/>}/>
    </Routes>
  </div>
  </BrowserRouter>
  
  </>
}

export default App;
