$(document).ready(function(){

  //Hide the error messages to start
  $("#errorHolder").hide();

  $("#harambeForm").submit(function(event){
    if(verifyForm()){
      $("#formHolder").hide();
      $("#errorHolder").hide();
      $("#successHolder").show();
    }
    else{
      $("#errorHolder").show();
    }
    return false;
  });
});

function verifyForm(){
  //Hide each individual error
  $("#nameError").hide();
  $("#emailError").hide();
  $("#buttonError").hide();
  $("#emailFormatError").hide();

  if(!$("input[name='meme-button']:checked").val()){
    $("#buttonError").show();
    return false;
  }
  else if($("input[name='name-field']").val().length==0){
    $("#nameError").show();
    return false;
  }
  else if($("input[name='email-field']").val().length==0){
    $("#emailError").show();
    return false;
  }
  else if($("input[name='email-field']").val().indexOf('@')==-1){
    $("#emailFormatError").show();
    return false;
  }
  return true;
}
