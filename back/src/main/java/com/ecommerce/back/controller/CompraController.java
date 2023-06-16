package com.ecommerce.back.controller;

import com.ecommerce.back.dto.DadosCarrinho;
import com.ecommerce.back.model.Compra;
import com.ecommerce.back.service.CompraService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("compra")
public class CompraController {

    @Autowired
    CompraService compraService;

    @PostMapping
    @Transactional
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity<Compra> insereCompra(@RequestBody @Valid DadosCarrinho dados, UriComponentsBuilder uriBuilder){
        Compra produtoCarrinho = compraService.insereCompra(dados);

        var uri = uriBuilder.path("/compra/{id}").buildAndExpand(produtoCarrinho.getId()).toUri();
        return ResponseEntity.created(uri).body(produtoCarrinho);
    }
}
