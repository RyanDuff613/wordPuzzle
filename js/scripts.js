$(document).ready(function(){

  var vowels = ['a','e','i','o','u'];
  $('form').submit(function(event){
    var userString = $("#originalString").val();
    var outputString = [];
    

    for (index = 0; index < vowels.length ;index +=1) {
      userString = userString.replace(vowels[index], '-');
      console.log(userString);
    }
    
    event.preventDefault();
  });

});
  
