//get jquery the webpack way
import $ from 'jquery';

export const controller =
{
    getAllProducts: function()
    {
        $( '#all-products' ).on( 'click', renderAllProducts );
        renderAllProducts();
    },

    lowProductsButton: function()
    {
        $( '#low-products' ).on( 'click', getLowProducts );
    }
}

function renderAllProducts()
{
    //build the request URL
    var url = 'http://localhost:3006/api/products';

    //build request parameters
    var requestParams = { 'type': 'GET', 'url' : url, 'dataType' : 'json' };

    //make the api call to zipcodeapi.com
    $.ajax( requestParams ).done( render );

    function render( tData )
    {
        $( '#products' ).empty();

        for( let i = 0; i < tData.length; i++ )
        {
            //clear current table
            $( '#products' ).append
            ( 
                "<div class='product-container' data-id=" + tData[i].id + ">" +
                    "<div class='product-name'>" + tData[i].name + "</div>" +
                    "<div class='product-price'>" + tData[i].price + "</div>" +
                    "<button class='remove'>-</button>" +
                    "<button class='add'>+</button>" +
                "</div>"
            );
        }
    }
}

function getLowProducts()
{
    //build the request URL
    var url = 'http://localhost:3006/api/products/low';

    //build request parameters
    var requestParams = { 'type': 'GET', 'url' : url, 'dataType' : 'json' };

    //make the api call to zipcodeapi.com
    $.ajax( requestParams ).done( render );

    function render( tData )
    {
        //clear current table
        $( '#products' ).empty();

        for( let i = 0; i < tData.length; i++ )
        {
            $( '#products' ).append
            ( 
                "<div class='product-container' data-id=" + tData[i].id + ">" +
                    "<div class='product-name'>" + tData[i].name + "</div>" +
                    "<div class='product-price'>" + tData[i].price + "</div>" +
                    "<button class='remove'>-</button>" +
                    "<button class='add'>+</button>" +
                "</div>"
            );
        }
    }
}