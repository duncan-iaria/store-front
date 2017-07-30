const connection = require( './connection' );

//=========================
//  QUERIES
//=========================
module.exports = 
{
    //ALL FROM PRODUCTS TABLE
    queryAllProducts: function( tResponse )
    {
        connection.query( "SELECT * FROM products", onQueryComplete );

        function onQueryComplete( tError, tData )
        {
            tResponse.json( tData );
        }   
    } 
}