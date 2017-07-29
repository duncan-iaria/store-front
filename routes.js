const express = require( 'express' );
const router = express.Router();

router.get( '/', onRouteComplete );
router.get( '/balls', onBallsComplete );

function onRouteComplete( tRequest, tResponse )
{
    console.log( "hello" );
    tResponse.send( "it works!" );
}

function onBallsComplete( tRequest, tResponse )
{
    console.log( "balls" );
    tResponse.send( "balls display my man" );
}

module.exports = router;