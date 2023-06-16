package com.ecommerce.back.controller;

import com.ecommerce.back.dto.DadosCarrinho;
import com.ecommerce.back.model.Carrinho;
import com.ecommerce.back.service.CarrinhoService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@RequestMapping("carrinho")
public class CarrinhoController {

    @Autowired
    CarrinhoService carrinhoService;

    @PostMapping
    @Transactional
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity<Carrinho> insereProdutoNoCarrinho(@RequestBody @Valid DadosCarrinho dados, UriComponentsBuilder uriBuilder){
        Carrinho produtoCarrinho = carrinhoService.insereProdutoNoCarrinho(dados);

        var uri = uriBuilder.path("/carrinho/{id}").buildAndExpand(produtoCarrinho.getId()).toUri();
        return ResponseEntity.created(uri).body(produtoCarrinho);
    }

    @GetMapping
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity<List<Carrinho>> listaTodosProdutosDoCarrinho(){
        return ResponseEntity.ok(carrinhoService.listaTodosProdutosDoCarrinho());
    }

    @PutMapping
    @Transactional
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity<Carrinho> atualizaProduto(@RequestBody @Valid DadosCarrinho dados){
        return ResponseEntity.ok(carrinhoService.atualizaCarrinho(dados));
    }

    @DeleteMapping("{id}")
    @Transactional
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity<Carrinho> excluirProdutoDoCarrinho(@PathVariable Long id){
        carrinhoService.excluirProdutoDoCarrinho(id);
        return ResponseEntity.ok().build();
    }
}
