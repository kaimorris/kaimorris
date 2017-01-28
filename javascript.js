;(function($) {

$.fn.kaiMorris = function() {
  // Chainability
  return this.each( function() { 
  
  var obj = $( this );
  
  var Morris = {
    arr : obj.text().split( '' ),
    
    range : {
      min : 1,
      max : 9
    },
    
    styles : function() {
      var MorrisDelays = '\n', addCSS;
      
       for ( i = this.range.min; i <= this.range.max; i++ ) {
         morrisDelays += '.ld' + i + ' { animation-delay: 1.' + i + 's; }\n';  
       }
      
        addCSS = $( '<style>' + morrisDelays + '</style>' );
        $( 'head' ).append( addCSS );
    },
    
    main : function() {
      var dp = 0;
      obj.text( '' );
      
      $.each( this.arr, function( index, value ) {

        dp = dp.randomInt( morris.range.min, morris.range.max );
        
        if ( value === ' ' )
          value = '&nbsp';
        
          obj.append( '<span class="kaiMorris ld' + dp + '">' + value + '</span>' );
        
      });
          
    }
  };
   
  Number.prototype.randomInt = function ( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
  };
  
  
  // Create styles
  morris.styles();


    // Initialise
    morris.main();
  });

};

}(jQuery));


// USAGE
$( 'h1' ).kaiMorris();

