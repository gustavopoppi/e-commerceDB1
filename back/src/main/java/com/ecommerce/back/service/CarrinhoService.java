package com.ecommerce.back.service;

import com.ecommerce.back.comuns.Consultas;
import com.ecommerce.back.dto.DadosCarrinho;
import com.ecommerce.back.model.Carrinho;
import com.ecommerce.back.model.StatusCarrinho;
import com.ecommerce.back.repository.CarrinhoRepository;
import com.ecommerce.back.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarrinhoService {

    @Autowired
    CarrinhoRepository carrinhoRepository;

    @Autowired
    ProdutoRepository produtoRepository;

    public Carrinho insereProdutoNoCarrinho(DadosCarrinho dados) {
        Carrinho carrinho = Carrinho.builder()
                .quantidade(dados.quantidade())
                .valorTotal(dados.valorTotal())
                .produto(Consultas.buscaProduto(produtoRepository, dados.id()))
                .status(StatusCarrinho.AGUARDANDO)
                .build();

        carrinhoRepository.save(carrinho);
        return carrinho;
    }

    public List<Carrinho> listaTodosProdutosDoCarrinho() {
        return carrinhoRepository.findAllWhereStatusAguardando();
    }

    public Carrinho atualizaCarrinho(DadosCarrinho dados) {
        Carrinho carrinho = buscaCarrinho(dados.id());
        carrinho.setQuantidade(dados.quantidade());
        carrinho.setValorTotal(dados.valorTotal());
        return carrinho;
    }

    public void excluirProdutoDoCarrinho(Long id) {
        carrinhoRepository.delete(buscaCarrinho(id));
    }

    private Carrinho buscaCarrinho(Long id) {
        return carrinhoRepository.findById(id).get();
    }
}
