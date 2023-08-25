package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final ProductoRepository productoRepository;
	private final CategoriaRepository categoriaRepository;

	@Autowired
	public DatabaseLoader(
		ProductoRepository productoRepository,
		CategoriaRepository categoriaRepository
		) {
		this.productoRepository=productoRepository;
		this.categoriaRepository=categoriaRepository;
	}

	@Override
	public void run(String... strings) throws Exception {
		
		Categoria categoria1=new Categoria("Menestras");
		Categoria categoria2=new Categoria("Dulces");
		this.categoriaRepository.save(categoria1);
		this.categoriaRepository.save(categoria2);
		Producto p0=new Producto("Chupetin Red", 1.50f, categoria2);
		Producto p1=new Producto("Lentajas", 1.80f, categoria1);
		Producto p2=new Producto("Garbanzos", 2.00f, categoria1);
		Producto p3=new Producto("Frejol", 7.50f, categoria1);
		this.productoRepository.save(p0);
		this.productoRepository.save(p1);
		this.productoRepository.save(p2);
		this.productoRepository.save(p3);

	}
}