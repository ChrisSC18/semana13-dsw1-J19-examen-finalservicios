const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const HomePage = require('./pages/home');
const NuevoMusicoPage = require('./pages/nuevo-musico');
const VerInstrumentoPage = require('./pages/ver-instrumento');
const NuevoInstrumentoPage = require('./pages/nuevo-instrumento');
const VerMusicoPage = require('./pages/ver-musico');
const EditarInstrumentoPage = require('./pages/editar-instrumento');
const VerBandaPage = require('./pages/ver-banda');
const NuevoIntegrantePage = require('./pages/nuevo-integrante');
const SaveProduct = require('./pages/SaveProduct');


const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/ver-instrumento/:id', element: <VerInstrumentoPage /> },
	{ path: '/nuevo-instrumento', element: <NuevoInstrumentoPage /> },
	{ path: '/ver-musico/:id', element: <VerMusicoPage /> },
	{ path: '/nuevo-musico', element: <NuevoMusicoPage /> },
	{ path: '/editar-instrumento/:id', element: <EditarInstrumentoPage /> },
	{ path: '/ver-banda/:id', element: <VerBandaPage /> },
	{ path: '/ver-banda/:id/nuevo-integrante', element: <NuevoIntegrantePage /> },
	{ path: '/save', element:<SaveProduct/>}

])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react'))
