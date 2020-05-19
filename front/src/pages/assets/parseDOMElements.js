const ParseDOMElements = { 
  getInputElements: function(){
    return document.querySelectorAll('input');
  },

  clearInputFields: function(inputElements){
    inputElements.forEach(input => {
      // resolução temporaria para o bug na hora que muda o formulario tendo algo escrito no input
      input.focus();
      input.value = '';
      input.blur();
    });
  },

  formatInputValues: function (inputElements){
    const values = {};
    inputElements.forEach(input => values[input.id] = input.value);
    return values;
  },

  focusFirstInputElement: function(inputElements){
    inputElements[0].focus();
  }
}

export default ParseDOMElements;