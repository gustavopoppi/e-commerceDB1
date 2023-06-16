package com.ecommerce.back.repository;

import com.ecommerce.back.model.Compra;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompraRepository extends JpaRepository<Compra, Long> {

    @Query("SELECT C" +
            " FROM Compra C" +
           " WHERE C.produto.id = :id")
    List<Compra> findByProdutoId(@Param("id") Long id);
}