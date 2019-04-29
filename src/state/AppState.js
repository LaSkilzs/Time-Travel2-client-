// alert("appState.js");

const appState = function() {
  let currentState = new HomeState(this);

  this.init = function init() {
    this.change();
    console.log("app initialized");
  };

  this.change = function(state) {
    currentState = state;
  };
};
