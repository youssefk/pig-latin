var pigLatin = function(input) {
  if (input.charAt(0).match(/^(a|e|i|o|u)/)) {
    var input = input.concat("ay");
    return(input);
    console.log(input);
  } else {
    alert('no');
  }
};
