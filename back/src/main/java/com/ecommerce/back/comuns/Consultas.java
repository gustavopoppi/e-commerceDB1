package com.ecommerce.back.comuns;

import com.ecommerce.back.model.Produto;
import com.ecommerce.back.repository.ProdutoRepository;

public class Consultas {

    public static Produto buscaProduto(ProdutoRepository produtoRepository, Long id) {
        return produtoRepository.findById(id).get();
    }
}