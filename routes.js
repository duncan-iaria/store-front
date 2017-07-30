const express = require( 'express' );
const query = require( './queries' );
const Product = require( './models/product' );
const router = express.Router();


//=========================
// MIDDLEWARE
//=========================
router.use( function( tRequest, tResponse, tNext ) 
{
    //prove that it's working
    console.log( 'Middleware engaged!' );
    
    //enable cors
    tResponse.header( "Access-Control-Allow-Origin", "*" );
    tResponse.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
    
    //continue to the next route
    tNext();
});

//=========================
// BASE ROUTES
//=========================
//base routes
router.get( '/', onRouteComplete );
router.get( '/api', onApiComplete );

function onApiComplete( tRequest, tResponse )
{
    tResponse.send( 'hey' );
}

function onRouteComplete( tRequest, tResponse )
{
    console.log( "Basic Route" );
    tResponse.json( tRequest.query );
}

//=========================
// PRODUCTS ROUTES
//=========================
router.route( '/api/products' ).get( onGetProducts );
router.route( '/api/products/low' ).get( onGetLowProducts );
router.route( '/api/products' ).post( onPostProduct );

function onGetProducts( tRequest, tResponse )
{
    console.log( 'get products' );
    query.getAllProducts( tResponse );
}

function onGetLowProducts( tRequest, tResponse )
{
    console.log( 'get low products' );
    query.getLowProducts( tResponse );
}

function onPostProduct( tRequest, tResponse )
{
    console.log( 'post product' );
    let tempProduct = new Product( tRequest.query.name, tRequest.query.department, tRequest.query.price, tRequest.query.quantity );

    query.postNewProduct( tempProduct, tResponse );
}

//=========================
// INDIVIDUAL PRODUCT ROUTES
//=========================
router.route( '/api/products/:productID' ).get( onGetProductByID );
router.route( '/api/products/:productID' ).put( onUpdateProductByID );

function onGetProductByID( tRequest, tResponse )
{
    console.log( 'get product by id ' + tRequest.params.productID );
    query.getProductByID( tRequest.params.productID, tResponse );
}

function onUpdateProductByID( tRequest, tResponse )
{
    console.log( 'update product by id ' + tRequest.params.productID );
    query.updateProductQuantity( tRequest.params.productID, tRequest.query.amount, tResponse )
}

//=========================
// EXPORTS
//=========================
module.exports = router;