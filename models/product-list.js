import $ from 'jquery';

export function ProductList( tProducts, tView, tTotalView )
{
    const productList = this;
    productList.view = tView;
    productList.totalView = tTotalView;
    productList.products = tProducts;

    //init
    productList.renderList();
}

ProductList.prototype.addProduct = function( tProduct )
{
    //console.log( tProduct );
    if( tProduct != null )
    {
        this.products.push( tProduct );
    }
    
    //force re-render
    this.renderList();
}

ProductList.prototype.addOrderProduct = function( tProduct )
{
    //console.log( tProduct );
    if( tProduct != null )
    {
        this.products.push( tProduct );
    }
    
    //force re-render
    this.renderListAsOrderList();
}

ProductList.prototype.removeOrderProduct = function( tIndex )
{
    //console.log( tProduct );

    if( tIndex != null )
    {
        this.products.splice( tIndex, 1 );
    }
    
    //update total view
    this.getOrderTotal();

    //force re-render
    this.renderListAsOrderList();
}

ProductList.prototype.renderList = function()
{
    if( this.view != null && this.products.length > 0 )
    {
        this.view.empty();

        for( let i = 0; i < this.products.length; ++i )
        {
            //if there are products available
            if( this.products[i].quantity > 0 )
            {
                this.view.append
                ( 
                    "<div class='product-container'>" +
                        "<div class='product-name'>" + this.products[i].name + "</div>" +
                        "<div class='product-price'>" + this.products[i].price + "</div>" +
                        "<button class='add' data-id=" + this.products[i].id + "> + </button>" +
                    "</div>"
                );
            }
        }
    }
}

ProductList.prototype.renderListAsOrderList = function()
{
    if( this.view != null )
    {
        this.view.empty();

        for( let i = 0; i < this.products.length; ++i )
        {
            //if there are products available
            if( this.products[i].quantity > 0 )
            {
                this.view.append
                ( 
                    "<div class='product-container'>" +
                        "<div class='product-name'>" + this.products[i].name + "</div>" +
                        "<div class='product-price'>" + this.products[i].price + "</div>" +
                        "<span> x " + this.products[i].quantity + "</span>" +
                        "<span> total " + ( this.products[i].quantity * this.products[i].price ).toFixed( 2 ) + "</span>" +
                        "<button class='remove' data-id=" + this.products[i].id + "> - </button>" +
                    "</div>"
                );
            }
        }

        //update total view
        this.getOrderTotal();
    }
}

ProductList.prototype.getOrderTotal = function()
{
    let tempTotal = 0;

    for( let i = this.products.length - 1; i >= 0; --i )
    {
        tempTotal += ( this.products[i].price * this.products[i].quantity );
    }

    //update the view
    if( this.totalView != null )
    {
        this.totalView.text( "total: " + tempTotal.toFixed( 2 ) );
    }
   
    //return tempTotal.toFixed( 2 );
}

