const connection = require( './connection' );

//=========================
//  QUERIES
//=========================
module.exports = 
{
    //ALL FROM PRODUCTS TABLE
    getAllProducts: function( tResponse )
    {
        connection.query( "SELECT * FROM products", onAllQueryComplete );

        function onAllQueryComplete( tError, tData )
        {
            tResponse.json( tData );
        }   
    },

    getLowProducts: function( tResponse )
    {
        connection.query( "SELECT * FROM products WHERE quantity < 5", onLowQueryComplete );

        function onLowQueryComplete( tError, tData )
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
    },

    updateProductQuantity: function( tProductID, tAmt, tResponse )
    {
        connection.query( "UPDATE products SET ? WHERE ?", [ { quantity: tAmt },{ id: tProductID } ], onUpdateComplete );

        function onUpdateComplete( tError, tData )
        {
            if( tError )
            {
                console.log( 'error on updating product: ' + tError );
            }
            else
            {
                tResponse.send( 'Product Successfully Updated' );
            }
        }
    },

    getProductByID: function( tProductID, tResponse )
    {
        connection.query( "SELECT * FROM products WHERE ?", { id: tProductID }, onGetProductComplete );

        function onGetProductComplete( tError, tData )
        {
            if( tError )
            {
                console.log( 'error on getting product by ID: ' + tError );
            }
            else
            {
                tResponse.json( tData );
            }
        }
    }
}