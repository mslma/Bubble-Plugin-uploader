function(instance, properties, context) { 
  var div;
  
  div = instance.data.div;
  
  div.text(properties.caption);
  div.css('color', properties.caption_color);

}