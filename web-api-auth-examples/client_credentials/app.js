/**
 * This is an example of a basic node.js  that performs
 * the Client Credentials to authenticate against
 * the Humm Accounts.
 *
 * For more information, read
 * http://developers.myhumm.com/web/auth-guide#auth-client
 */

humm    = require('humm');

// init humm with client_id
humm.init({
    client_id: '56570bacae8c5087411778a3',
    client_secret: 'CdNX3TcLc/OF3k2oIogwlBi/rCZOP0LSfLxrRjoX5EA='
});

//request access token with code //TODO no response
humm.authViaClientCredentials(function(authErr, authRes) {
    console.log('------------- authViaClientCredentials complete -------------');
    console.log('authErr');
    console.log(authErr);
    console.log('AuthRes');
    console.log(authRes);
});

