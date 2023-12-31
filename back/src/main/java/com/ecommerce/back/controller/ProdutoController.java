package com.ecommerce.back.controller;

import com.ecommerce.back.dto.DadosProduto;
import com.ecommerce.back.model.Produto;
import com.ecommerce.back.service.ProdutoService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@RequestMapping("produtos")
public class ProdutoController {

    @Autowired
    ProdutoService produtoService;

    @PostMapping
    @Transactional
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity<Produto> insereProduto(@RequestBody @Valid DadosProduto dados, UriComponentsBuilder uriBuilder){
        //TODO GUSTAVO se tentar inserir o mesmo produto é para aumentar o estoque ? porém e se o preço for diferente?
        Produto produto = produtoService.insereProduto(dados);

        var uri = uriBuilder.path("/produtos/{id}").buildAndExpand(produto.getId()).toUri();
        return ResponseEntity.created(uri).body(produto);
    }

    @GetMapping("{id}")
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity<Produto> detalhaProduto(@PathVariable Long id){
        return ResponseEntity.ok(produtoService.detalhaFuncionario(id));
    }

    @GetMapping
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity<List<Produto>> listaTodosProdutos(){
        return ResponseEntity.ok(produtoService.listaTodosProdutos());
    }

    @PutMapping
    @Transactional
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity<Produto> atualizaProduto(@RequestBody @Valid DadosProduto dados){
        return ResponseEntity.ok(produtoService.atualizaProduto(dados));
    }

    @DeleteMapping("{id}")
    @Transactional
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity<Produto> excluiProduto(@PathVariable Long id){
        produtoService.excluirProduto(id);
        return ResponseEntity.ok().build();
    }
}