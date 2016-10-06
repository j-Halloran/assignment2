$(document).ready(function(){
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
  $("#")
  if(!$("input[name='meme-button']:checked").val()){
    return false;
  }
}
