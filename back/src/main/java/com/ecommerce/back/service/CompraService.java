package com.ecommerce.back.service;

import com.ecommerce.back.comuns.Consultas;
import com.ecommerce.back.dto.DadosCarrinho;
import com.ecommerce.back.model.Carrinho;
import com.ecommerce.back.model.Compra;
import com.ecommerce.back.model.StatusCarrinho;
import com.ecommerce.back.repository.CarrinhoRepository;
import com.ecommerce.back.repository.CompraRepository;
import com.ecommerce.back.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompraService {

    @Autowired
    CompraRepository compraRepository;

    @Autowired
    ProdutoRepository produtoRepository;

    @Autowired
    CarrinhoRepository carrinhoRepository;

    public Compra insereCompra(DadosCarrinho dados) {
        Compra compra = Compra.builder()
                .quantidade(dados.quantidade())
                .valorTotal(dados.valorTotal())
                .produto(Consultas.buscaProduto(produtoRepository, dados.id()))
                .build();

        buscaProdutosQueEstavamNoCarrinho(dados.idProduto()).forEach(x -> x.setStatus(StatusCarrinho.PAGA));

        compraRepository.save(compra);
        return compra;
    }

    private List<Carrinho> buscaProdutosQueEstavamNoCarrinho(Long id) {
        return carrinhoRepository.findByProdutoId(id);
    }
}
