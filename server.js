require( 'dotenv' ).config( { path: '.env' } );
const express = require( 'express' );
const routes = require( './routes' );
const bodyParser = require( 'body-parser' );
const connection = require( './connection' );
const env = process.env;

const app = express();
const port = env.PORT || 3000;

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );
app.use( '/', routes );

app.listen( port );

console.log( 'RESTful API server started on: ' + port );


// //=========================
// // QUERYS
// //=========================
// function selectAll()
// {
//     connection.query( "SELECT * FROM playlist_best", onQueryComplete );
// }

// function selectArtist( tArtist )
// {
//     connection.query( "SELECT * FROM playlist_best WHERE artist=?", [tArtist], onQueryComplete );
// }

// function onQueryComplete( tError, tResponse )
// {
//     if( tResponse.length > 1 )
//     {
//         for( let i = 0; i < tResponse.length; ++i )
//         {
//             console.log( )
//         }
//     }
//     console.log( tResponse );
// }

// //=========================
// // CRUD
// //=========================
// function createStuff( tSong )
// {
//     connection.query( "INSERT INTO playlist_best SET ?", tSong, onCreateComplete );

//     function onCreateComplete( tError, tResponse )
//     {
//         if( tError )
//         {
//             console.log( "error when creating: " + tError );
//         }
//         else
//         {
//             console.log( tResponse.affectedRow );
//         }
//     }
// }

// function deleteStuff( )
// {
    
// }

// function updateStuff()
// {

// }

