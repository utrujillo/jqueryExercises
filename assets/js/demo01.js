$(function(){

  methods = {
    screen: $('.screen'),
    insertData : function( dataAdd ){
      data = this.screen.text();
      data.substring(data.length - 1, data.length)
      
        newData = data +""+ dataAdd;
        regexp = /^(\d*(\.?\d*)?){1}(([\/|*|+|-]){1}(\d*(\.?\d*)?){1})?$/;
       
        if( regexp.test( newData ) ){
          this.screen.html( newData );
        }
      
    },
    getResult : function(){
      dataArray = this.screen.text().split(/[\/|*|+|-]/);
      var operator = this.screen.text().match(/[\/|*|+|-]/);
      if(operator != null && dataArray.length == 2){
        switch(operator[0]){
          case "/": this.screen.html( parseFloat( dataArray[0] ) / parseFloat( dataArray[1] ) ); break;
          case "*": this.screen.html( parseFloat( dataArray[0] ) * parseFloat( dataArray[1] ) ); break;
          case "-": this.screen.html( parseFloat( dataArray[0] ) - parseFloat( dataArray[1] ) ); break;
          case "+": this.screen.html( parseFloat( dataArray[0] ) + parseFloat( dataArray[1] ) ); break;
        }
      }
    },
  }

  $('.button').click(function(){
    $this = $(this);
    if( !$this.hasClass('result') ){
      methods.insertData( $this.text() );
    }else{
      methods.getResult();
    }
  });

  $('.button2').click(function(){
    $this = $(this);
    switch( $this.text() ){
      case 'DEL': methods.screen.empty(); break;
      case '/': case '/': case '*': case '-': case '+': methods.insertData( $this.text(), 'op' ); break;
    }
  });

});
