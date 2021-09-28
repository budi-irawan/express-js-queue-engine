const express = require( 'express' );
const app = express();
const port = 3000;

const routeIndex = require( './routes/index' );

app.use( express.json( {
	limit: 1024 * 1024 * 20
} ) );
app.use( express.urlencoded( {
	extended: false,
	limit: '50mb'
} ) );

app.use( '/', routeIndex );

const {
	serverAdapter
} = require( './controllers/orderQueue' );

serverAdapter.setBasePath( '/admin/queues' )
app.use( '/admin/queues', serverAdapter.getRouter() );

app.listen( port, () => console.log( `Running on http://localhost:3000` ) )

module.exports = app;