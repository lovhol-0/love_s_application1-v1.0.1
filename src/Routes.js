import React from "react";
import Valdbild from "pages/Valdbild";
import Varukorg from "pages/Varukorg";
import Laddauppbild from "pages/Laddauppbild";
import Startsida from "pages/Startsida";
import Inloggningssida from "pages/Inloggningssida";
import Skapakonto from "pages/Skapakonto";
import Inloggadkund from "pages/Inloggadkund";
import Arkiv from "pages/Arkiv";
import Skresultat from "pages/Skresultat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Startsida />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/skresultat" element={<Skresultat />} />
        <Route path="/arkiv" element={<Arkiv />} />
        <Route path="/inloggadkund" element={<Inloggadkund />} />
        <Route path="/skapakonto" element={<Skapakonto />} />
        <Route path="/inloggningssida" element={<Inloggningssida />} />
        <Route path="/laddauppbild" element={<Laddauppbild />} />
        <Route path="/varukorg" element={<Varukorg />} />
        <Route path="/valdbild" element={<Valdbild />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
