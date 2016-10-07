$(document).ready(function(){
  //Hide the error messages to start
  $("#errorHolder").hide();

  //Event listener for submit button
  $("#harambeForm").submit(function(event){
    if(verifyForm()){
      $("#formHolder").hide();
      $("#errorHolder").hide();
      $("#successHolder").show();
    }

    else{
      $("#errorHolder").show();
    }
    
    return false; //dont refresh page
  });
});

function verifyForm(){
  //Hide each individual error
  $("#nameError").hide();
  $("#emailError").hide();
  $("#buttonError").hide();
  $("#emailFormatError").hide();

  //check for name length
  if($("input[name='name-field']").val().length==0){
    $("#nameError").show();
    return false;
  }

  //check for email length
  else if($("input[name='email-field']").val().length==0){
    $("#emailError").show();
    return false;
  }

  //check for @ in email
  else if($("input[name='email-field']").val().indexOf('@')==-1){
    $("#emailFormatError").show();
    return false;
  }

  //Check if any buttons are checked
  else if(!$("input[name='meme-button']:checked").val()){
    $("#buttonError").show();
    return false;
  }
  return true;
}
