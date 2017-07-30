const express = require( 'express' );
const router = express.Router();

router.get( '/', onRouteComplete );
router.get( '/balls', onBallsComplete );

function onRouteComplete( tRequest, tResponse )
{
    console.log( "hello" );
    console.log( tRequest.query );
    //tResponse.send( "it works!" );
    tResponse.json( tRequest.query );
}

function onBallsComplete( tRequest, tResponse )
{
    console.log( "balls" );
    tResponse.send( "balls display my man" );
}

module.exports = router;