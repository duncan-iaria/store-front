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
        database: 'music_db'
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
        console.log( 'connected as id ' + connection.threadId );
        //selectAll();

        // selectArtist( "Broken Social Scene" );

        let tempSong = 
        {
            artist: 'Broken Social Scene',
            album: 'You Forgot It In the People',
            title: 'Cause = Time',
            genre: 'Indie'
        }
        createStuff( tempSong );

        selectAll();
    }
}

//=========================
// QUERYS
//=========================
function selectAll()
{
    connection.query( "SELECT * FROM playlist_best", onQueryComplete );
}

function selectArtist( tArtist )
{
    connection.query( "SELECT * FROM playlist_best WHERE artist=?", [tArtist], onQueryComplete );
}

function onQueryComplete( tError, tResponse )
{
    if( tResponse.length > 1 )
    {
        for( let i = 0; i < tResponse.length; ++i )
        {
            console.log( )
        }
    }
    console.log( tResponse );
}

//=========================
// CRUD
//=========================
function createStuff( tSong )
{
    connection.query( "INSERT INTO playlist_best SET ?", tSong, onCreateComplete );

    function onCreateComplete( tError, tResponse )
    {
        if( tError )
        {
            console.log( "error when creating: " + tError );
        }
        else
        {
            console.log( tResponse.affectedRow );
        }
    }
}

function deleteStuff( )
{
    
}

function updateStuff()
{

}

