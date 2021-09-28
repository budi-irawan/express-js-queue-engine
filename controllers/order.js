const orderModel = require( '../models' ).Order;
const {
	addOrder
} = require( './orderQueue' );

class OrderController {
	static async createOrder( req, res ) {
		await addOrder( req.body )
		res.send( "oke" );
	}
}

module.exports = OrderController;