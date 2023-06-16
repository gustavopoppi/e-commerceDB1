import HomePage from './pages/HomePage'
import CadastroProdutosPage from './pages/CadastroProdutosPage'
import Produto from './pages/EditarProdutoPage'
import Carrinho from './pages/Carrinho';
import CompraFinalizada from './pages/CompraFinalizada';

import React from "react";
import { Routes, Route } from 'react-router-dom';

export default () => {
    return(
    <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/cadastroProdutos" element={<CadastroProdutosPage />} />
         <Route path="/produto/:id" element={<Produto />} />
         <Route path="/carrinho" element={<Carrinho />} />
         <Route path="/compraFinalizada" element={<CompraFinalizada />} />
    </Routes>
    );
}