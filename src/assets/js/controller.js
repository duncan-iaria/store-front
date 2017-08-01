//get jquery the webpack way
import $ from 'jquery';
import { ProductList } from '../../../models/product-list.js';

export const controller =
{
    productList: null,
    currentOrderList: null,

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
    },

    addProductToOrderButton: function()
    {
        $( '#products' ).on( 'click', ".product-container > .add", addProductToOrder );
    },

    removeProductToOrderButton: function()
    {
        $( '#products' ).on( 'click', ".product-container > .remove", removeProductFromOrder );
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
    controller.productList = tempProductList;
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

function addProductToOrder( tEvent )
{
    //console.log( this.dataset.id );
    const tempID = this.dataset.id;

    //if this list doesnt exist yet - make it
    if( controller.currentOrderList == null )
    {
        const tempView = $( '#orders' );
        const tempOrderView = $( '#orderTotal' );
        controller.currentOrderList = new ProductList( [], tempView, tempOrderView );
    }

    let tempProduct = controller.productList.products[tempID - 1];

    let tempIsRepeat = false;

    for( let i = controller.currentOrderList.products.length - 1; i >= 0; --i )
    {
        if( tempProduct.id == controller.currentOrderList.products[i].id )
        {
            console.log("ids are the same" );
            controller.currentOrderList.products[i].quantity++;
            tempIsRepeat = true;
        }
    }

    if( tempIsRepeat )
    {
        controller.currentOrderList.renderListAsOrderList();
    }
    else
    {
        tempProduct.quantity = 1;
        controller.currentOrderList.addOrderProduct( tempProduct );
    }

    controller.currentOrderList.getOrderTotal();

    console.log( controller.currentOrderList );
}

function removeProductFromOrder()
{
    
}