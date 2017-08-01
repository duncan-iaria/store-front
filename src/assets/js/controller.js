//get jquery the webpack way
import $ from 'jquery';
import { ProductList } from '../../../models/product-list.js';

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
    $.ajax( requestParams ).done( buildProductList );
}

function getLowProducts()
{
    //build the request URL
    var url = 'http://localhost:3006/api/products/low';

    //build request parameters
    var requestParams = { 'type': 'GET', 'url' : url, 'dataType' : 'json' };

    //make the api call to zipcodeapi.com
    $.ajax( requestParams ).done( buildProductList );
}

function buildProductList( tData )
{
    const tempView = $( '#products' );
    const tempProductList = new ProductList( tData, tempView );
}