function(instance, context) {
  var div;
  
  div = $('<input type="file"></input>');
  div.css("width", "90%");
  div.css("height", "80%");
  
  instance.canvas.append(div);
  
  div.change(function(a) {
     instance.triggerEvent("is_changed", function() {
       return console.log('event called');
     });
     instance.publishState("value", parseInt(div.val()));
  });

  //storing the div on the instance to use it in update
  instance.data.div = div;
  
}