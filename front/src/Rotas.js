import HomePage from './pages/HomePage'
import CadastroProdutosPage from './pages/CadastroProdutosPage'

import React from "react";
import { Routes, Route } from 'react-router-dom';

export default () => {
    return(
    <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/cadastroProdutos" element={<CadastroProdutosPage />} />
    </Routes>
    );
}