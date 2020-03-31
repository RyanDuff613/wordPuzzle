$(document).ready(function(){
  $('form').submit(function(event){
    var userString = $("#originalString").val();
    
    var vowels = ['a','e','i','o','u'];
    
    
    
    
    console.log(userString, vowels);
    
    
    
    
    
    event.preventDefault();
  });

});
  
