$(function(){

  // Variables =============================================================
  var zeroPositionsFwd = [ 0, -45, -97, -154, -208],
    posicionActual = 0,
    bandera = 0,
    avanceActual = 0;

  
  // Eventos (teclado, raton) =============================================
  $( "#next" ).click(function(){

    bandera = 0;
    moveZero();

  });

  $( '#stop' ).click(function(){
    bandera = 1;
  });

  $( '#forward' ).click(function(){
    avanzar();
  });

  // Funciones ==============================================================
  function moveZero(){

    posicionActual++;
      
      if( zeroPositionsFwd.length == posicionActual ){
        
        posicionActual = 0;
        
        if( bandera == 0)
          moveZero();

      }else{
      
        // Temporizador
        setTimeout(function() {
          
          $( '#zero' ).css( 'backgroundPositionX', zeroPositionsFwd[ posicionActual ] );
          
          if( bandera == 0 )
            moveZero();

        }, 100);
        
      }

  }

  function avanzar(){

    
    setTimeout(function() {
      
       $( '#zero' ).css( 'left', (avanceActual += 50) );
       avanzar();

    }, 1000);

  }
  

});