import React from "react";
import { Route, Routes } from "react-router-dom";
import { About, Contact, Home, Input, Project } from "../../page";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Project />} />
      <Route path="/add" element={<Input />} />
    
    </Routes>
  );
};

export default Routing;
