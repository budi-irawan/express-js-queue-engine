const Bull = require( 'bull' );
const {
	createBullBoard
} = require( '@bull-board/api' )
const {
	BullAdapter
} = require( '@bull-board/api/bullAdapter' )
const {
	ExpressAdapter
} = require( '@bull-board/express' )
const orderProcess = require( './orderProcess' );

const orderQueue = new Bull( 'order', {
	redis: process.env.REDIS_HOST
} );

const serverAdapter = new ExpressAdapter();

orderQueue.process( orderProcess );

const addOrder = ( data ) => {
	orderQueue.add( data );
};

const {
	addQueue,
	removeQueue,
	setQueues,
	replaceQueues
} = createBullBoard( {
	queues: [
		new BullAdapter( orderQueue )
	],
	serverAdapter: serverAdapter
} )

module.exports = {
	addOrder,
	serverAdapter
}