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
    },

    addProductButton: function()
    {
        $( '#add-product' ).on( 'click', addProduct );
    }
}

function renderAllProducts()
{
    console.log('getting');
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

//handles rendering
function buildProductList( tData )
{
    const tempView = $( '#products' );
    const tempProductList = new ProductList( tData, tempView );
}

function addProduct()
{
    console.log( "hello time to make new product" );
    const tName = $( '#new-product-name' ).val();
    const tDeptartment = $( '#new-product-department' ).val();
    const tPrice = $( '#new-product-price' ).val();
    const tQuantity = $( '#new-product-quantity' ).val();
    
    //build the request URL
    var url = 'http://localhost:3006/api/products/?name=' + tName + '&department=' + tDeptartment + '&price=' + tPrice + '&quantity=' + tQuantity;
    
    //build request parameters
    var requestParams = { 'type': 'POST', 'url' : url };

    //make the api call to zipcodeapi.com
    $.ajax( requestParams ).done( addProductComplete );
}

function addProductComplete( tData )
{
    console.log( "you added a product" );
    renderAllProducts();
}