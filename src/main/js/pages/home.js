const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { productos: [], musicos: [], bandas: [] };
	}
	componentDidMount() {

		{/*
		client({ method: 'GET', path: '/api/instrumentos' }).done(response => {
			this.setState({ instrumentos: response.entity._embedded.instrumentos });
		});

		client({ method: 'GET', path: '/api/musicos' }).done(response => {
			this.setState({ musicos: response.entity._embedded.musicos });
		});

		client({ method: 'GET', path: '/api/bandas' }).done(response => {
			this.setState({ bandas: response.entity._embedded.bandas });
		});*/}

		client({ method: 'GET', path: '/api/productos/formacion' }).done(response => {
			this.setState({ productos: response.entity });
		});

	}
	render() {
		return (
			<>
				<h1>Semana 13 App</h1>

				<div style={  {"width": "100%", "display": "flex"}   }>
					<div style={{"width": "calc(100%)"}}>
						<Titulo entidad="Productos" emoji="🎸" />
						<ProductoList productos={this.state.productos} />
						<Link to={"/save"}>Agregar Producto</Link> 
					</div>
				</div>


			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<hr />
			Lista completa de {props.entidad.toLowerCase()}
		</>
	)
}

class ProductoList extends React.Component {
	render() {
		const products = this.props.productos.map(det =>
			<Producto key={det.ID} producto={det} />
		);
		
		return (
		
			<table border="1">
				<tbody>
					<tr>
						<th>ID</th>
						<th>NOMBRE</th>
						<th>CATEGORIA</th>
						<th>PRECIO</th>
					</tr>
					{products}
				</tbody>
			</table>
		
		)
	}
}


class Producto extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.producto.ID}</td>
				<td>{this.props.producto.PRODUCTO}</td>
				<td>{this.props.producto.CATEGORIA}</td>
				<td>{this.props.producto.PRECIO}</td>
			</tr>
		)
	}
}


class InstrumentoList extends React.Component {
	render() {
		const instrumentos = this.props.instrumentos.map(instrumento =>
			<Instrumento key={instrumento._links.self.href} instrumento={instrumento} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Categoría</th>
						<th>Acciones</th>
					</tr>
					{instrumentos}
				</tbody>
			</table>
		)
	}
}
class MusicoList extends React.Component {
	render() {
		const musicos = this.props.musicos.map(musico =>
			<Musico key={musico._links.self.href} musico={musico} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{musicos}
				</tbody>
			</table>
		)
	}
}
class BandaList extends React.Component {
	render() {
		const bandas = this.props.bandas.map(banda =>
			<Banda key={banda._links.self.href} banda={banda} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{bandas}
				</tbody>
			</table>
		)
	}
}

class Instrumento extends React.Component {
	render() {
		const id = this.props.instrumento._links.self.href.split("/").slice(-1)
		return (
			<tr>
				<td>{this.props.instrumento.nombre}</td>
				<td>{this.props.instrumento.categoria}</td>
				<td>
					<Link to={"/ver-instrumento/" + id}>Ver</Link> | 
					<Link to={"/editar-instrumento/" + id}>Editar</Link>
				</td>
			</tr>
		)
	}
}
class Musico extends React.Component {
	render() {
		const id = this.props.musico._links.self.href.split("/").slice(-1)

		return (
			<tr>
				<td>{this.props.musico.nombre}</td>
				<td>
					<Link to={"/ver-musico/" + id}>Ver</Link>
				</td>
			</tr>
		)
	}
}
class Banda extends React.Component {
	render() {
		const id = this.props.banda._links.self.href.split("/").slice(-1)

		return (
			<tr>
				<td>{this.props.banda.nombre}</td>
				<td>
					<Link to={"/ver-banda/" + id}>Ver</Link>
				</td>
			</tr>
		)
	}
}

module.exports = HomePage;