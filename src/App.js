
import './App.css';
import Product from './components/Productshow';
import Form from './components/Form';
import Navbar from './components/Navbar';
// import Storage from './components/Storage';
import Home from './components/Home';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Notestate from './components/Context/Notestate';
import Updatepro from './components/Updatepro';


const App = () => {
  const [tableData, setTableData] = useState([]);

  const handleFormSubmit = (data) => {
    setTableData((prevData) => [...prevData, data]);
  };

  return (
    <>
      <Notestate>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/Home' element={<Home />}></Route>
            <Route exact path="/Product" element={<Updatepro />}></Route>
            <Route exact path='/Form' element={<Form onSubmit={handleFormSubmit} />}></Route>
            {/* <Route exact path="/Storage" element={<Storage data={tableData} />}></Route> */}
          </Routes>
        </BrowserRouter>
      </Notestate>
    </>
  );
};

export default App;
