const express = require( 'express' );
const query = require( './queries' );
const router = express.Router();


//=========================
// MIDDLEWARE
//=========================
router.use( function( tRequest, tResponse, tNext ) 
{
    //prove that it's working
    console.log( 'Middleware engaged!' );
    tNext();
});

//=========================
// ROUTES
//=========================
router.get( '/', onRouteComplete );
router.get( '/api', onApiComplete );

//router.get( '/products', onGetProduct );
router.route( '/api/products' ).get( onGetProduct );
router.route( '/api/products' ).post( onPostProduct );

function onPostProduct( tRequest, tResponse )
{
    console.log( 'post' );
    tResponse.send( 'you did it' );
}

function onGetProduct( tRequest, tResponse )
{
    console.log( 'getting the products' );
    query.queryAllProducts( tResponse );
}

function onApiComplete( tRequest, tResponse )
{
    tResponse.send( 'hey' );
}

function onRouteComplete( tRequest, tResponse )
{
    console.log( "hello" );
    console.log( tRequest.query );
    //tResponse.send( "it works!" );
    tResponse.json( tRequest.query );
}

module.exports = router;