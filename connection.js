//CONNECTION TO MySQL DB
require( 'dotenv' ).config( { path: '.env' } );
const mysql = require( 'mysql' );
const env = process.env;

const connection = mysql.createConnection
(
    {
        host: 'localhost',
        port: 3306,

        user: env.USER,
        password: env.PASSWORD,
        database: 'snoodfood_db'
    }
);

//=========================
//  CONNECTION LOGIC
//=========================
connection.connect( onConnectionComplete );

function onConnectionComplete( tError )
{
    if( tError )
    {
        console.log( 'there was an error when connecting: ' + tError );
    }
    else
    {
        console.log( "MySQL connection complete" );
    }
}

//=========================
//  EXPORT
//=========================
module.exports = connection;