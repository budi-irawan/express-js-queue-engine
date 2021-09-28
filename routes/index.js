const express = require( 'express' );
const router = express.Router();

const orderRoute = require( './order/orderRoute' );
router.use( '/order', orderRoute );

module.exports = router;