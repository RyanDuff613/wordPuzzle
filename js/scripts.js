$(document).ready(function(){

  var vowels = ['a','e','i','o','u'];
  $('form').submit(function(event){
    var userString = $("#originalString").val();
    
    for (index = 0; index < vowels.length ;index +=1) {
      var outputString = userString.replace(vowels[index], '-');
      console.log(outputString);
    }
    userString.replace('a', '-');
    console.log(userString, vowels);
    
    event.preventDefault();
  });

});
  
