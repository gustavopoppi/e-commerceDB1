package com.ecommerce.back.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Carrinho {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer quantidade;

    @Column(name = "valor_total")
    private Double valorTotal;

    @Enumerated(EnumType.STRING)
    private StatusCarrinho status;

    @ManyToOne()
    private Produto produto;
}