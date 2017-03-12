var express = require( 'express' )
  , app = express()

  , path = require( 'path' );

var clientdir = path.join( __dirname, '../client/' )
  , clientdirobj = { root: clientdir };

app.get( '/', function( req, res ){
 
  res.sendFile( 'index.html', clientdirobj );

});
app.get( '/index.:filetype', function( req, res ){
  
  res.sendFile( 'index.' + req.params.filetype, clientdirobj );

});

app.listen( 80, function(){
  console.log( 'listening at 80' );
} );
