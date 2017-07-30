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

    //PRODUCTS WITH QUANTITY BELOW 5
    getLowProducts: function( tResponse )
    {
        connection.query( "SELECT * FROM products WHERE quantity < 5", onLowQueryComplete );

        function onLowQueryComplete( tError, tData )
        {
            tResponse.json( tData );
        }   
    },

    //ADD A NEW PRODUCT
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

    //UPDATE THE PRODUCTS QUANTIY (restocked or purchased)
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

    //GET INFO ABOUT A PRODUCT BY ID (returns all fields)
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

// function selectArtist( tArtist )
// {
//     connection.query( "SELECT * FROM playlist_best WHERE artist=?", [tArtist], onQueryComplete );
// }
