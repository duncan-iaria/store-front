import $ from 'jquery';

export function ProductList( tProducts, tView )
{
    const productList = this;
    productList.view = tView;
    productList.products = tProducts;

    //init
    productList.renderList();
}

ProductList.prototype.addProduct = function( tProduct )
{
    if( tProduct != null )
    {
        this.products.push( tProduct );
    }
    
    //force re-render
    this.renderList();
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
                    "<div class='product-container' data-id=" + this.products[i].id + ">" +
                        "<div class='product-name'>" + this.products[i].name + "</div>" +
                        "<div class='product-price'>" + this.products[i].price + "</div>" +
                        "<button class='add'>+</button>" +
                    "</div>"
                );
            }
        }
    }
}

