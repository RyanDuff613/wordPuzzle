$(document).ready(function(){

  var vowels = ['a','e','i','o','u'];
  $('form').submit(function(event){
    var userString = $("#originalString").val();
    
    for (index = 0; index < vowels.length ;index +=1) {
      userString.replace('a', '-');
      console.log(userString);
    }
    userString.replace('a', '-');
    console.log(userString, vowels);
    
    event.preventDefault();
  });

});
  
