package com.ecommerce.back.dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DadosProduto(
        Long id,

        @NotBlank
        String nome,

        @NotNull
        @DecimalMin("0.01")
        Double preco,

        @NotNull
        @Min(1)
        Integer quantidade,
        String imagem

        ) {
}