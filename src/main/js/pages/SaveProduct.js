const React = require('react')
const {useState,useEffect} = require('react')
const client = require('../client.js')

const SaveProduct = ()=>{

    const [idCategoria, setIdCategoria] = useState('')
    const [categorias, setCategorias] = useState([])
    const [nombre,setNombre] = useState("")
    const [precio,setPrecio] = useState("")

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/categorias'
        }).done(response=>{
            setCategorias(response.entity._embedded.categorias)
        })
    },[])

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/productos',
            entity: {
                categoria: 'http://localhost:8080/api/categorias/'+idCategoria,
                nombre:nombre,
                precio:precio
            },
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    return(
        <>
            <h1>Agregar</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='categoria'>Categoria </label>

                <select name="categoria" id="categoria" onChange={(e)=>{setIdCategoria(e.target.value)}}>
                    {categorias.map(cat => {	
                        const value = cat._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>[{cat.nombre}]</option>
                        )
                    })}
                
                </select><br />
                <label>Nombre </label>
                <input type='text' name="nombre" id="nombre" value={ nombre } onChange={ (e)=>{ setNombre(e.target.value) } } />
                <br/>
                <label>Precio </label>
                <input type='number' name="precio" id="precio" value={ precio } onChange={ (e)=>{ setPrecio(e.target.value) } } />
                <br/><br/>
                <input type="submit" value="Guardar" />
            </form>
        </>
    )
}

module.exports = SaveProduct
