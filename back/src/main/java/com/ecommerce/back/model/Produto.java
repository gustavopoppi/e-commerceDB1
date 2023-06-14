package com.ecommerce.back.model;


import com.ecommerce.back.dto.DadosProduto;
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
public class Produto {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private Double preco;
    private Integer quantidade;
    private String imagem;

    public Produto(DadosProduto dados) {
        this.nome = dados.nome();
        this.preco = dados.preco();
        this.quantidade = dados.quantidade();
        this.imagem = dados.imagem();
    }
}