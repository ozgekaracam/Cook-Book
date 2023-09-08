//Add new item on the table dynamically without leaving the page
//source: https://stackoverflow.com/questions/5004233/jquery-ajax-post-example-with-php
var request;
$(document).ready(function(event){
  $("#form").submit(function(event){
    event.preventDefault();
    if (request) {
        request.abort();
    }
    var $form = $(this);
    var $inputs = $form.find("image, brand, model, os, screensize");
    var serializedData = $form.serialize();
    $inputs.prop("disabled", true);




  });
});