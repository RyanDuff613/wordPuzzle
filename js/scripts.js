$(document).ready(function(){

  var vowels = ['a','e','i','o','u'];
  var outputString = [];

  $('form').submit(function(event){
    var userString = $("#originalString").val();

    for (index2 = 0; index2 < userString.length; index2+=1){
      for (index1 = 0; index1 < vowels.length ;index1 +=1) {
        userString = userString.replace(vowels[index1], '-');
      }
    }
    
    outputString=userString

    $('#output').text(outputString);
    $('#output').show();
    $('#input').hide();

    event.preventDefault();
  });

  

});
  
