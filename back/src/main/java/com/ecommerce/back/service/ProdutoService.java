package com.ecommerce.back.service;

import com.ecommerce.back.dto.DadosProduto;
import com.ecommerce.back.model.Produto;
import com.ecommerce.back.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService {

    @Autowired
    ProdutoRepository produtoRepository;

    public List<Produto> listaTodosProdutos() {
        return produtoRepository.findAll();
    }

    public Produto insereProduto(DadosProduto dados) {
        Produto produto = new Produto(dados);
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

    public void excluirFuncionario(Long id) {
        produtoRepository.delete(buscaProduto(id));
    }

    public Produto detalhaFuncionario(Long id) {
        return buscaProduto(id);
    }

    private Produto buscaProduto(Long id) {
        return produtoRepository.findById(id).get();
    }
}