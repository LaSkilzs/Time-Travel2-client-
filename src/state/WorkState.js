alert("WorkState.js");

class WorkState {
  constructor() {}

  function(page) {
    document.querySelector("#title").textContent = "Help Wanted";
    console.log("work state");
  }
  async getWorkStateData() {
    const response = await fetch("http//localhost:3000/api/v1/helpwanteds");
    const helpwanteds = await response.json();
    return helpwanteds;
  }
}
