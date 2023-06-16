package com.ecommerce.back.dto;

import com.ecommerce.back.model.Produto;

public record DadosCarrinho(

        Long id,
        Produto produto,
        Integer quantidade,
        Double valorTotal
) {
}
