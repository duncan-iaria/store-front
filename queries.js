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
    },

    postNewProduct: function( tProduct, tResponse )
    {
        connection.query( "INSERT INTO products SET ?", tProduct, onQueryComplete );

        function onQueryComplete( tError, tData )
        {
            if( tError )
            {
                console.log( 'error on inserting product: ' + tError );
            }
            else
            {
                tResponse.send( 'Product Successfully Added' );
            }
        }
    }
}