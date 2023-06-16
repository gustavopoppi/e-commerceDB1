package com.ecommerce.back.repository;

import com.ecommerce.back.model.Carrinho;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarrinhoRepository extends JpaRepository<Carrinho, Long> {

    @Query("SELECT C.produto, SUM(C.quantidade) as quantidade, SUM(C.valorTotal) as valorTotal"
            + " FROM Carrinho C"
            + " GROUP BY C.produto")
    List<Object> findAllAgrupadoPorProdutoId();
}