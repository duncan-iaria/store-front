//get jquery the webpack way
import $ from 'jquery';
import '../css/reset.css';
import '../css/style.css';

//build the request URL
var url = 'http://localhost:3006/api/products/low';

//build request parameters
var requestParams = { 'type': 'GET', 'url' : url, 'dataType' : 'json' };

//make the api call to zipcodeapi.com
$.ajax( requestParams ).done( function( tData )
{
    console.log("requested stuff");
    console.log( tData[0].name );
    console.log( tData.error );
});