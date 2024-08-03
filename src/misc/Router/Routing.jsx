import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { About, Contact, Home, Input, Project } from "../../page";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/add" element={<Input />} />
      </Routes>
    </>
  );
};

export default Routing;
