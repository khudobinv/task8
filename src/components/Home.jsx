import React, { useState } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import Modal from "./Modal";

const Home = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalWindow = () => {
    setIsModalOpen(true);
    navigate("/form"); // Изменяем URL при помощи useNavigate
  };

  const closeModalWindow = () => {
    setIsModalOpen(false);
    navigate("/"); // Изменяем URL при помощи useNavigate
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-slate-900 relative">
      <button
        onClick={openModalWindow}
        className="bg-violet-600 text-white font-semibold px-5 py-3 rounded-xl transition ease-in-out delay-150 duration-100 hover:bg-violet-500 hover:drop-shadow-violet"
      >
        Открыть форму
      </button>
      {isModalOpen && (
        <Routes>
          <Route
            path="/form"
            element={<Modal closeModalWindow={closeModalWindow} />}
          />
        </Routes>
      )}
    </div>
  );
};

export default Home;
