package com.ecommerce.back.dto;

public record DadosCarrinho(

        Long id,
        Long idProduto,
        Integer quantidade,
        Double valorTotal
) {
}
