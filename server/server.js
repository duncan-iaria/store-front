require( 'dotenv' ).config( { path: '.env' } );
const express = require( 'express' );
const routes = require( './routes' );
const bodyParser = require( 'body-parser' );
const env = process.env;

const app = express();
const port = env.PORT || 3000;

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );
app.use( '/', routes );

app.listen( port );
console.log( 'RESTful API server started on: ' + port );
