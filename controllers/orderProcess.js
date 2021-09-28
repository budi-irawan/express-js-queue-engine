const {
	Job
} = require( 'bull' );
const orderModel = require( '../models' ).Order;

const orderProcess = async ( Job ) => {
	const product = await orderModel.findOne( {
		where: {
			name: Job.data.name
		}
	} );

	let sisa = product.stock - Job.data.quantity
	const order = await orderModel.update( {
		stock: sisa
	}, {
		where: {
			id: product.id
		}
	} );
}

module.exports = orderProcess;