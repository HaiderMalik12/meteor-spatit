Template.registerHelper('truncateText', function(text, length) {
  var newText = text.substring(0, length);
  newText = newText.substr(0, Math.min(newText.lenght, newText.lastIndexOf(' ')));
  return new Spacebars.SafeString(newText);
});
