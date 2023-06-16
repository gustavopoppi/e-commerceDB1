package com.ecommerce.back.service;

import com.ecommerce.back.dto.DadosProduto;
import com.ecommerce.back.model.Carrinho;
import com.ecommerce.back.model.Compra;
import com.ecommerce.back.model.Produto;
import com.ecommerce.back.repository.CarrinhoRepository;
import com.ecommerce.back.repository.CompraRepository;
import com.ecommerce.back.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProdutoService {

    @Autowired
    CarrinhoRepository carrinhoRepository;

    @Autowired
    ProdutoRepository produtoRepository;

    @Autowired
    CompraRepository compraRepository;

    public List<Produto> listaTodosProdutos() {
        return produtoRepository.findAll();
    }

    public Produto insereProduto(DadosProduto dados) {
        Produto produto = Produto.builder()
                .nome(dados.nome())
                .preco(dados.preco())
                .quantidade(dados.quantidade())
                .imagem(dados.imagem()).build();

        produtoRepository.save(produto);
        return produto;
    }


    public Produto atualizaProduto(DadosProduto dados) {
        //TODO GUSTAVO verificar se é possivel dar entrada de dados de um funcionário que não existe, caso de preciso proteger dessa situação
        Produto produto = buscaProduto(dados.id());
        produto.setNome(dados.nome());
        produto.setPreco(dados.preco());
        produto.setQuantidade(dados.quantidade());
        produto.setImagem(dados.imagem());
        return produto;
    }

    public void excluirProduto(Long id) {
        if (produtoEstaNoCarrinho(id)) {
            findProdutoNoCarrinho(id).forEach(produto -> carrinhoRepository.delete(produto));
            findCompraByProdutoId(id).forEach(compra -> compraRepository.delete(compra));
        }

        produtoRepository.delete(buscaProduto(id));
    }

    public Produto detalhaFuncionario(Long id) {
        return buscaProduto(id);
    }


    private Carrinho buscaCarrinho(Long id) {
        return carrinhoRepository.findById(id).get();
    }

    private Produto buscaProduto(Long id) {
        return produtoRepository.findById(id).get();
    }

    private boolean produtoEstaNoCarrinho(Long id) {
        return !findProdutoNoCarrinho(id).isEmpty();
    }

    private List<Carrinho> findProdutoNoCarrinho(Long id) {
        return carrinhoRepository.findAll().stream().filter(carrinho -> carrinho.getProduto().getId().equals(id)).collect(Collectors.toList());
    }

    private List<Compra> findCompraByProdutoId(Long id) {
        return compraRepository.findByProdutoId(id);
    }
}