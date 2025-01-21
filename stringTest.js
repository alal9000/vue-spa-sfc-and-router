const StringTest = {
  // defining data to be used in the component
  data: function() {
    return {
      strName: ''
    };
  },

  // define the template for the component
  template: `
    <div id="string-test">
      <h1>String Test</h1>
      <p>Please enter your name: <input v-model="strName" class="styled-input" class="form-control" placeholder="Enter your name"/></p>
      <p v-show="strName.toLowerCase() === 'aaron'">Awesome name!</p>
      <p v-show="strName.toLowerCase() !== 'aaron'">{{ strName }} is not my name!</p>
    </div>
  `
};
