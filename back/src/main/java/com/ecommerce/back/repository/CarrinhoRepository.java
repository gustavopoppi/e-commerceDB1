package com.ecommerce.back.repository;

import com.ecommerce.back.model.Carrinho;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarrinhoRepository extends JpaRepository<Carrinho, Long> {

    @Query("SELECT C.produto, SUM(C.quantidade) as quantidade, SUM(C.valorTotal) as valorTotal"
            + " FROM Carrinho C"
            + " GROUP BY C.produto")
    List<Object> findAllAgrupadoPorProdutoId();

    @Query("SELECT C" +
            " FROM Carrinho C" +
            " WHERE C.status = 'AGUARDANDO'")
    List<Carrinho> findAllWhereStatusAguardando();

    @Query("SELECT C" +
           "  FROM Carrinho C" +
           " WHERE C.produto.id = :id")
    List<Carrinho> findByProdutoId(@Param("id") Long id);
}