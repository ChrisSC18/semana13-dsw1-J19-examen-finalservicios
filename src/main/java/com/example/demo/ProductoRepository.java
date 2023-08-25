package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.Producto;

@RepositoryRestResource(collectionResourceRel = "productos",path = "productos")
public interface ProductoRepository extends CrudRepository<Producto,Long> {
    
}
