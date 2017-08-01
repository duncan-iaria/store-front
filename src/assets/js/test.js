function test()
{
    console.log( 'importing' );
    function testMe()
    {
        console.log( 'heh?' );
    }
}

const testObj = 
{
    testMe: function()
            {
                console.log('tested baby!');
            }
}

export const testMan =
{
    testMe: function()
    {
        console.log( 'hey');
    },

    testYou: function()
    {
        console.log( 'you' );
    }
}